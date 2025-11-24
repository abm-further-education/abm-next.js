-- ============================================
-- Course Data Migration for Supabase
-- ============================================
-- This script creates the courses table and inserts all course data
-- Note: title and description are stored in JSON files (messages/{locale}.json)
-- ============================================

-- Drop table if exists (for testing/development)
-- DROP TABLE IF EXISTS courses CASCADE;

-- Create courses table
CREATE TABLE IF NOT EXISTS courses (
  id TEXT PRIMARY KEY,
  category TEXT NOT NULL CHECK (category IN (
    'cookery',
    'hospitality',
    'fitness',
    'business',
    'project',
    'hr',
    'health',
    'short-course-hospitality',
    'short-course-cooking',
    'short-course-online'
  )),
  type TEXT NOT NULL CHECK (type IN ('full-course', 'short-course', 'fast-track')),
  level TEXT CHECK (level IN (
    'certificate-iii',
    'certificate-iv',
    'diploma',
    'advanced-diploma',
    'graduate-diploma'
  )),
  duration TEXT NOT NULL,
  price NUMERIC(10, 2),
  image TEXT NOT NULL,
  link TEXT NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_courses_category ON courses(category);
CREATE INDEX IF NOT EXISTS idx_courses_type ON courses(type);
CREATE INDEX IF NOT EXISTS idx_courses_level ON courses(level);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_courses_updated_at
  BEFORE UPDATE ON courses
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- Insert Course Data
-- ============================================

-- Cookery Courses
INSERT INTO courses (id, category, type, level, duration, price, image, link, tags) VALUES
('kitchen-management', 'cookery', 'full-course', 'certificate-iv', '78 weeks', NULL, '/courses/cookery/KM.png', '/cookery-and-hospitality-courses/sit40521-certificate-iv-in-kitchen-management', ARRAY['kitchen', 'management', 'culinary', 'certificate-iv']),
('food-safety', 'cookery', 'short-course', NULL, '1 day', 180, '/short-course/fss_1.png', '/cookery-and-hospitality-courses/fss', ARRAY['food-safety', 'hygiene', 'supervisor', 'nsw']);

-- Hospitality Courses
INSERT INTO courses (id, category, type, level, duration, price, image, link, tags) VALUES
('hospitality-diploma', 'hospitality', 'full-course', 'diploma', '78 weeks / 104 weeks', NULL, '/courses/cookery/DHM.png', '/cookery-and-hospitality-courses/sit50422-diploma-of-hospitality-management', ARRAY['hospitality', 'management', 'diploma']),
('hospitality-advanced-diploma', 'hospitality', 'full-course', 'advanced-diploma', '104 weeks', NULL, '/courses/cookery/ADHM.png', '/cookery-and-hospitality-courses/advanced-diploma-of-hospitality-management', ARRAY['hospitality', 'management', 'advanced-diploma', 'leadership']);

-- Fitness Courses
INSERT INTO courses (id, category, type, level, duration, price, image, link, tags) VALUES
('fitness-cert-iii', 'fitness', 'full-course', 'certificate-iii', '52 weeks', NULL, '/courses/fitness/ABM_Fitness_Photos_13.jpg', '/fitness-instructor-personal-trainer-courses/sis30321-certificate-iii-in-fitness', ARRAY['fitness', 'personal-training', 'certificate-iii']),
('fitness-cert-iv', 'fitness', 'full-course', 'certificate-iv', '52 weeks', NULL, '/courses/fitness/ABM_Fitness_Photos_10.jpg', '/fitness-instructor-personal-trainer-courses/sis40221-certificate-iv-in-fitness', ARRAY['fitness', 'personal-training', 'certificate-iv', 'advanced']),
('fitness-cert-iii-fast-track', 'fitness', 'fast-track', 'certificate-iii', '12 weeks / 24 weeks', NULL, '/courses/fitness/ABM_Fitness_Photos_11.jpg', '/fitness-instructor-personal-trainer-courses/certificate-iii-in-fitness-fast-track', ARRAY['sport', 'coaching', 'fast-track', 'certificate-iii']),
('fitness-cert-iv-fast-track', 'fitness', 'fast-track', 'certificate-iv', '12 weeks / 24 weeks', NULL, '/courses/fitness/ABM_Fitness_Photos_9.jpg', '/fitness-instructor-personal-trainer-courses/certificate-iv-in-fitness-fast-track', ARRAY['sport', 'coaching', 'fast-track', 'certificate-iv', 'advanced']),
('sport-diploma', 'fitness', 'full-course', 'diploma', '52 weeks', NULL, '/courses/fitness/diploma-of-sport.png', '/fitness-instructor-personal-trainer-courses/sis50321-diploma-of-sport', ARRAY['sport', 'coaching', 'diploma', 'development']);

-- Business Courses
INSERT INTO courses (id, category, type, level, duration, price, image, link, tags) VALUES
('business-cert-iv', 'business', 'full-course', 'certificate-iv', '52 weeks', NULL, '/courses/business/business_1.jpg', '/business-and-management-courses/bsb40120-certificate-iv-in-business', ARRAY['business', 'management', 'certificate-iv']),
('business-diploma', 'business', 'full-course', 'diploma', '52 weeks', NULL, '/courses/business/business_2.png', '/business-and-management-courses/bsb50120-diploma-of-business', ARRAY['business', 'management', 'diploma', 'leadership']),
('business-advanced-diploma', 'business', 'full-course', 'advanced-diploma', '78 weeks', NULL, '/courses/business/business_3.png', '/business-and-management-courses/bsb60120-advanced-diploma-of-business', ARRAY['business', 'management', 'advanced-diploma', 'strategy']),
('business-graduate-diploma', 'business', 'full-course', 'graduate-diploma', '52 weeks', NULL, '/courses/business/business_4.png', '/business-and-management-courses/bsb80120-graduate-diploma-of-management', ARRAY['business', 'management', 'graduate-diploma', 'leadership']);

-- Project Management Courses
INSERT INTO courses (id, category, type, level, duration, price, image, link, tags) VALUES
('project-cert-iv', 'project', 'full-course', 'certificate-iv', '52 weeks', NULL, '/courses/project/project_1.png', '/project-and-program-management-courses/bsb40920-certificate-iv-in-project-management-practice', ARRAY['project-management', 'certificate-iv', 'methodologies']),
('project-diploma', 'project', 'full-course', 'diploma', '52 weeks', NULL, '/courses/project/project_2.png', '/project-and-program-management-courses/bsb50820-diploma-of-project-management-practice', ARRAY['project-management', 'diploma', 'leadership']),
('project-advanced-diploma', 'project', 'full-course', 'advanced-diploma', '78 weeks', NULL, '/courses/project/project_3.png', '/project-and-program-management-courses/bsb60720-advanced-diploma-of-program-management', ARRAY['project-management', 'advanced-diploma', 'strategic-planning']);

-- HR Courses
INSERT INTO courses (id, category, type, level, duration, price, image, link, tags) VALUES
('hr-certificate-iv', 'hr', 'full-course', 'certificate-iv', '52 weeks', NULL, '/courses/hr/hr_1.png', '/human-resources-courses/bsb40420-certificate-iv-in-human-resource-management', ARRAY['hr', 'human-resources', 'management', 'certificate-iv']),
('hr-diploma', 'hr', 'full-course', 'diploma', '78 weeks', NULL, '/courses/hr/hr_2.png', '/human-resources-courses/bsb50320-diploma-of-human-resource-management', ARRAY['hr', 'human-resources', 'management', 'diploma']),
('hr-advanced-diploma', 'hr', 'full-course', 'advanced-diploma', '78 weeks', NULL, '/courses/hr/hr_3.png', '/human-resources-courses/bsb60320-advanced-diploma-of-human-resource-management', ARRAY['hr', 'human-resources', 'leadership', 'advanced-diploma']);

-- Health & Wellness Courses
INSERT INTO courses (id, category, type, level, duration, price, image, link, tags) VALUES
('health-services-assistance', 'health', 'full-course', 'certificate-iii', '16 weeks', NULL, '/courses/health/health_1.png', '/health-and-wellness-courses/hlt33115-certificate-iii-in-health-services-assistance', ARRAY['health', 'nursing', 'healthcare', 'certificate-iii', 'work-placement']);

-- Short Courses - Hospitality
INSERT INTO courses (id, category, type, level, duration, price, image, link, tags) VALUES
('barista', 'short-course-hospitality', 'short-course', NULL, '4 hours', 150, '/short-course/barista_1.jpg', '/short-courses/barista', ARRAY['barista', 'coffee', 'latte-art', 'one-day', 'hands-on']),
('wine', 'short-course-hospitality', 'short-course', NULL, '3 hours', 120, '/short-course/wine/wine_1.jpg', '/short-courses/wine', ARRAY['wine', 'appreciation', 'tasting', 'food-pairing']),
('dessert-plating', 'short-course-hospitality', 'short-course', NULL, '4 hours', 140, '/short-course/dessert/fine_dining_dessert_1.jpg', '/short-courses/dessert', ARRAY['dessert', 'plating', 'fine-dining', 'presentation']),
('cocktail', 'short-course-hospitality', 'short-course', NULL, '3 hours', 130, '/short-course/mixology/cocktail_1.png', '/short-courses/mixology', ARRAY['cocktail', 'mixology', 'bartending', 'drinks']),
('fss', 'short-course-hospitality', 'short-course', NULL, '1 day', 110, '/home/Cookery.png', '/cookery-and-hospitality-courses/fss', ARRAY['food-safety', 'supervisor', 'certification', 'nsw']);

-- Short Courses - Cooking & Baking
INSERT INTO courses (id, category, type, level, duration, price, image, link, tags) VALUES
('french-cakes', 'short-course-cooking', 'short-course', NULL, '5.5 hours', 180, '/short-course/classic_french_cakes_2.png', '/short-courses/cake', ARRAY['french-cakes', 'pastry', 'baking', 'masterclass']),
('sourdough', 'short-course-cooking', 'short-course', NULL, '5.5 hours', 160, '/short-course/focaccia/sourdough_1.jpg', '/short-courses/focaccia', ARRAY['sourdough', 'bread', 'focaccia', 'artisan', 'baking']),
('french-pastries', 'short-course-cooking', 'short-course', NULL, '6 hours', 190, '/short-course/classic_french_pastries_1.png', '/short-courses/pastries', ARRAY['french-pastries', 'viennoiserie', 'baking', 'authentic']),
('macaron', 'short-course-cooking', 'short-course', NULL, '4 hours', 150, '/short-course/macaroon_1.png', '/short-courses/petit', ARRAY['macaron', 'petit-four', 'french', 'delicate']),
('vegan', 'short-course-cooking', 'short-course', NULL, '4 hours', 140, '/short-course/vegan/vegan_1.png', '/short-courses/vegan', ARRAY['vegan', 'vegetarian', 'plant-based', 'healthy']),
('chocolate', 'short-course-cooking', 'short-course', NULL, '3 hours', 120, '/short-course/chocolate/xmas_1.png', '/short-courses/chocolate', ARRAY['chocolate', 'christmas', 'festive', 'holiday']);

-- ============================================
-- Verification Query
-- ============================================
-- Run this to verify all data was inserted correctly
-- SELECT id, category, type, level, duration, price, tags FROM courses ORDER BY category, type, level;

-- ============================================
-- Notes
-- ============================================
-- 1. title and description are stored in JSON files:
--    - messages/en.json -> courseData.{id}.title
--    - messages/en.json -> courseData.{id}.description
--    - Same for kr, jp, pt, sp locales
--
-- 2. To query courses with translations, join with JSON data:
--    SELECT 
--      c.*,
--      json_data->'courseData'->c.id->>'title' as title,
--      json_data->'courseData'->c.id->>'description' as description
--    FROM courses c
--    CROSS JOIN (SELECT jsonb_build_object('courseData', ...) as json_data) t
--
-- 3. For admin panel, you can update courses table directly
--    and translations in JSON files separately

