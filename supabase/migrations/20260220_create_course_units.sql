-- course_units: stores unit/subject lists for each course
-- Units are language-independent (always English)
-- Each row represents a unit group (most courses have 1 group, hospitality has 2)

CREATE TABLE IF NOT EXISTS course_units (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id text NOT NULL,
  group_index integer NOT NULL DEFAULT 0,
  group_title text NOT NULL DEFAULT '',
  units jsonb NOT NULL DEFAULT '[]',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(course_id, group_index)
);

-- RLS
ALTER TABLE course_units ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read course_units"
  ON course_units FOR SELECT
  USING (true);

CREATE POLICY "Only admins can insert course_units"
  ON course_units FOR INSERT
  WITH CHECK (
    auth.jwt() ->> 'role' = 'service_role'
    OR (auth.jwt() -> 'user_metadata' ->> 'isAdmin')::boolean = true
  );

CREATE POLICY "Only admins can update course_units"
  ON course_units FOR UPDATE
  USING (
    auth.jwt() ->> 'role' = 'service_role'
    OR (auth.jwt() -> 'user_metadata' ->> 'isAdmin')::boolean = true
  );

CREATE POLICY "Only admins can delete course_units"
  ON course_units FOR DELETE
  USING (
    auth.jwt() ->> 'role' = 'service_role'
    OR (auth.jwt() -> 'user_metadata' ->> 'isAdmin')::boolean = true
  );

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_course_units_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER trigger_course_units_updated_at
  BEFORE UPDATE ON course_units
  FOR EACH ROW
  EXECUTE FUNCTION update_course_units_updated_at();

-- Index for fast lookups
CREATE INDEX IF NOT EXISTS idx_course_units_course_id ON course_units(course_id);
