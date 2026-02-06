-- =====================================================
-- ABM Course Data Migration Schema
-- Version: 1.0
-- Description: Database schema for multilingual course data
-- =====================================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- 1. COURSES TABLE (Base course data - non-translatable)
-- =====================================================
-- Drop existing courses table if it conflicts (be careful in production!)
-- ALTER TABLE IF EXISTS public.courses RENAME TO courses_old;

CREATE TABLE IF NOT EXISTS public.courses_new (
  id TEXT PRIMARY KEY,  -- e.g., 'kitchen-management', 'fitness-cert-iv'
  category TEXT NOT NULL CHECK (category = ANY (ARRAY[
    'cookery', 'hospitality', 'fitness', 'business', 'project', 'hr', 'health',
    'short-course-hospitality', 'short-course-cooking', 'short-course-online'
  ])),
  type TEXT NOT NULL CHECK (type = ANY (ARRAY['full-course', 'short-course', 'fast-track'])),
  level TEXT CHECK (level = ANY (ARRAY[
    'certificate-iii', 'certificate-iv', 'diploma', 'advanced-diploma', 'graduate-diploma'
  ])),
  duration TEXT NOT NULL,
  price NUMERIC,
  image TEXT NOT NULL,
  link TEXT NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- 2. COURSE TRANSLATIONS TABLE (Translatable fields)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.course_translations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  course_id TEXT NOT NULL REFERENCES public.courses_new(id) ON DELETE CASCADE,
  locale TEXT NOT NULL CHECK (locale = ANY (ARRAY['en', 'kr', 'sp', 'pt', 'jp', 'tl', 'zh', 'id'])),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(course_id, locale)
);

-- =====================================================
-- 3. COURSE DETAILS TABLE (Detailed course sections)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.course_details (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  course_id TEXT NOT NULL REFERENCES public.courses_new(id) ON DELETE CASCADE,
  locale TEXT NOT NULL CHECK (locale = ANY (ARRAY['en', 'kr', 'sp', 'pt', 'jp', 'tl', 'zh', 'id'])),
  section_key TEXT NOT NULL,  -- e.g., 'courseDuration', 'workPlacement', 'jobRoles'
  title TEXT NOT NULL,
  description JSONB NOT NULL,  -- Can be string, array, or complex object with tables/links
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(course_id, locale, section_key)
);

-- =====================================================
-- 4. COURSE INFORMATION TABLE (Course metadata)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.course_information (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  course_id TEXT NOT NULL REFERENCES public.courses_new(id) ON DELETE CASCADE,
  locale TEXT NOT NULL CHECK (locale = ANY (ARRAY['en', 'kr', 'sp', 'pt', 'jp', 'tl', 'zh', 'id'])),
  course_code TEXT,
  cricos_code TEXT,
  description TEXT,
  duration TEXT,
  entry_requirement JSONB,  -- Can be string or array
  delivery_mode JSONB,      -- { title: string, mode: string }
  delivery_site JSONB,      -- { title: string, locations: [...] }
  additional_info JSONB,    -- { description, linkText, linkUrl }
  starting_dates JSONB,     -- Array of { title, dates }
  tables JSONB,             -- Array of table data
  partners JSONB,           -- Array of { name, desc }
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(course_id, locale)
);

-- =====================================================
-- 5. SHORT COURSES TABLE (Short course specific data)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.short_courses (
  id TEXT PRIMARY KEY,  -- e.g., 'barista', 'fss', 'rsa'
  images TEXT[] NOT NULL DEFAULT '{}',
  location TEXT NOT NULL,
  price NUMERIC NOT NULL,
  duration TEXT NOT NULL,
  max_participants TEXT,
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- 6. SHORT COURSE TRANSLATIONS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS public.short_course_translations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  short_course_id TEXT NOT NULL REFERENCES public.short_courses(id) ON DELETE CASCADE,
  locale TEXT NOT NULL CHECK (locale = ANY (ARRAY['en', 'kr', 'sp', 'pt', 'jp', 'tl', 'zh', 'id'])),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  -- All translatable content fields stored as JSONB
  content JSONB NOT NULL DEFAULT '{}',
  -- Content includes: specialOffer, courseType, whoShouldAttend, whatYoullLearn,
  -- takeHomeMessage, dressCode, callToAction, whatYoullMake, instructor,
  -- whatYoullExperience, whyThisCourse, whyLearnToMake, courseOverview,
  -- keyUnits, activities, whoNeedsFSS, whyYouNeedRSA, whatToBring,
  -- howToEnrol, whyTrainWithABM, courseFormat, faq1-5, labels, etc.
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(short_course_id, locale)
);

-- =====================================================
-- 7. SHORT COURSE DATES TABLE (Scheduling)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.short_course_dates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  short_course_id TEXT NOT NULL REFERENCES public.short_courses(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  display_date TEXT NOT NULL,
  time TEXT NOT NULL,
  available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- INDEXES for performance
-- =====================================================
CREATE INDEX IF NOT EXISTS idx_course_translations_course_id ON public.course_translations(course_id);
CREATE INDEX IF NOT EXISTS idx_course_translations_locale ON public.course_translations(locale);
CREATE INDEX IF NOT EXISTS idx_course_details_course_id ON public.course_details(course_id);
CREATE INDEX IF NOT EXISTS idx_course_details_locale ON public.course_details(locale);
CREATE INDEX IF NOT EXISTS idx_course_information_course_id ON public.course_information(course_id);
CREATE INDEX IF NOT EXISTS idx_course_information_locale ON public.course_information(locale);
CREATE INDEX IF NOT EXISTS idx_short_course_translations_short_course_id ON public.short_course_translations(short_course_id);
CREATE INDEX IF NOT EXISTS idx_short_course_translations_locale ON public.short_course_translations(locale);
CREATE INDEX IF NOT EXISTS idx_short_course_dates_short_course_id ON public.short_course_dates(short_course_id);
CREATE INDEX IF NOT EXISTS idx_short_course_dates_date ON public.short_course_dates(date);
CREATE INDEX IF NOT EXISTS idx_courses_new_category ON public.courses_new(category);
CREATE INDEX IF NOT EXISTS idx_courses_new_type ON public.courses_new(type);
CREATE INDEX IF NOT EXISTS idx_courses_new_level ON public.courses_new(level);

-- =====================================================
-- TRIGGERS for updated_at
-- =====================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply triggers to all tables
DROP TRIGGER IF EXISTS update_courses_new_updated_at ON public.courses_new;
CREATE TRIGGER update_courses_new_updated_at
  BEFORE UPDATE ON public.courses_new
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_course_translations_updated_at ON public.course_translations;
CREATE TRIGGER update_course_translations_updated_at
  BEFORE UPDATE ON public.course_translations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_course_details_updated_at ON public.course_details;
CREATE TRIGGER update_course_details_updated_at
  BEFORE UPDATE ON public.course_details
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_course_information_updated_at ON public.course_information;
CREATE TRIGGER update_course_information_updated_at
  BEFORE UPDATE ON public.course_information
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_short_courses_updated_at ON public.short_courses;
CREATE TRIGGER update_short_courses_updated_at
  BEFORE UPDATE ON public.short_courses
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_short_course_translations_updated_at ON public.short_course_translations;
CREATE TRIGGER update_short_course_translations_updated_at
  BEFORE UPDATE ON public.short_course_translations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_short_course_dates_updated_at ON public.short_course_dates;
CREATE TRIGGER update_short_course_dates_updated_at
  BEFORE UPDATE ON public.short_course_dates
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- ROW LEVEL SECURITY (RLS) Policies
-- =====================================================

-- Enable RLS on all tables
ALTER TABLE public.courses_new ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_information ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.short_courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.short_course_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.short_course_dates ENABLE ROW LEVEL SECURITY;

-- Read policies (public access for active courses)
CREATE POLICY "Allow public read access to active courses" ON public.courses_new
  FOR SELECT USING (is_active = true);

CREATE POLICY "Allow public read access to course translations" ON public.course_translations
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.courses_new WHERE id = course_id AND is_active = true)
  );

CREATE POLICY "Allow public read access to course details" ON public.course_details
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.courses_new WHERE id = course_id AND is_active = true)
  );

CREATE POLICY "Allow public read access to course information" ON public.course_information
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.courses_new WHERE id = course_id AND is_active = true)
  );

CREATE POLICY "Allow public read access to active short courses" ON public.short_courses
  FOR SELECT USING (is_active = true);

CREATE POLICY "Allow public read access to short course translations" ON public.short_course_translations
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.short_courses WHERE id = short_course_id AND is_active = true)
  );

CREATE POLICY "Allow public read access to short course dates" ON public.short_course_dates
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.short_courses WHERE id = short_course_id AND is_active = true)
  );

-- Admin write policies (for authenticated admins)
CREATE POLICY "Allow admin full access to courses" ON public.courses_new
  FOR ALL USING (
    auth.jwt() ->> 'user_metadata'::text LIKE '%"isAdmin":true%'
  );

CREATE POLICY "Allow admin full access to course translations" ON public.course_translations
  FOR ALL USING (
    auth.jwt() ->> 'user_metadata'::text LIKE '%"isAdmin":true%'
  );

CREATE POLICY "Allow admin full access to course details" ON public.course_details
  FOR ALL USING (
    auth.jwt() ->> 'user_metadata'::text LIKE '%"isAdmin":true%'
  );

CREATE POLICY "Allow admin full access to course information" ON public.course_information
  FOR ALL USING (
    auth.jwt() ->> 'user_metadata'::text LIKE '%"isAdmin":true%'
  );

CREATE POLICY "Allow admin full access to short courses" ON public.short_courses
  FOR ALL USING (
    auth.jwt() ->> 'user_metadata'::text LIKE '%"isAdmin":true%'
  );

CREATE POLICY "Allow admin full access to short course translations" ON public.short_course_translations
  FOR ALL USING (
    auth.jwt() ->> 'user_metadata'::text LIKE '%"isAdmin":true%'
  );

CREATE POLICY "Allow admin full access to short course dates" ON public.short_course_dates
  FOR ALL USING (
    auth.jwt() ->> 'user_metadata'::text LIKE '%"isAdmin":true%'
  );

-- =====================================================
-- COMMENTS for documentation
-- =====================================================
COMMENT ON TABLE public.courses_new IS 'Main courses table storing non-translatable course data';
COMMENT ON TABLE public.course_translations IS 'Translations for course title and description';
COMMENT ON TABLE public.course_details IS 'Detailed course sections (duration, job roles, pathways, etc.)';
COMMENT ON TABLE public.course_information IS 'Course metadata (codes, requirements, delivery info)';
COMMENT ON TABLE public.short_courses IS 'Short courses with scheduling and pricing';
COMMENT ON TABLE public.short_course_translations IS 'Translations for short course content';
COMMENT ON TABLE public.short_course_dates IS 'Available dates for short courses';
