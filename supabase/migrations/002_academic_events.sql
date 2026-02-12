-- Academic Events table for dynamic academic calendar
CREATE TABLE IF NOT EXISTS academic_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  event_type TEXT NOT NULL DEFAULT 'term',  -- 'term' | 'holiday'
  color TEXT,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for efficient date range queries
CREATE INDEX idx_academic_events_dates ON academic_events (start_date, end_date);

-- Enable RLS
ALTER TABLE academic_events ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Anyone can read academic events"
  ON academic_events FOR SELECT
  USING (true);

-- Admin insert/update/delete (via service role key)
CREATE POLICY "Service role can manage academic events"
  ON academic_events FOR ALL
  USING (true)
  WITH CHECK (true);
