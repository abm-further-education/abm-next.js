-- Create course_interests table for storing user interest in unavailable courses
CREATE TABLE IF NOT EXISTS course_interests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  course_title TEXT NOT NULL,
  course_slug TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_course_interests_email ON course_interests(email);
CREATE INDEX IF NOT EXISTS idx_course_interests_course_slug ON course_interests(course_slug);
CREATE INDEX IF NOT EXISTS idx_course_interests_created_at ON course_interests(created_at);

-- Create unique constraint to prevent duplicate interests from same email for same course
CREATE UNIQUE INDEX IF NOT EXISTS idx_course_interests_unique_email_course 
ON course_interests(email, course_slug);

-- Add RLS (Row Level Security) policies if needed
ALTER TABLE course_interests ENABLE ROW LEVEL SECURITY;

-- Allow public to insert (for the interest registration form)
CREATE POLICY "Allow public to insert course interests" ON course_interests
  FOR INSERT WITH CHECK (true);

-- Allow authenticated users to view their own interests
CREATE POLICY "Allow users to view their own interests" ON course_interests
  FOR SELECT USING (auth.email() = email);

-- Allow service role to do everything (for admin operations)
CREATE POLICY "Allow service role full access" ON course_interests
  FOR ALL USING (auth.role() = 'service_role');


