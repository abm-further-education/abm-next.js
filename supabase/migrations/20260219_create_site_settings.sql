-- site_settings: key-value store for website-wide common settings
-- (e.g., brochure PDF URL, nav links, contact info, etc.)

CREATE TABLE IF NOT EXISTS site_settings (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  key text UNIQUE NOT NULL,
  value text NOT NULL DEFAULT '',
  label text NOT NULL DEFAULT '',
  description text,
  category text NOT NULL DEFAULT 'general',
  value_type text NOT NULL DEFAULT 'text',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- RLS
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read site_settings"
  ON site_settings FOR SELECT
  USING (true);

CREATE POLICY "Only admins can insert site_settings"
  ON site_settings FOR INSERT
  WITH CHECK (
    auth.jwt() ->> 'role' = 'service_role'
    OR (auth.jwt() -> 'user_metadata' ->> 'isAdmin')::boolean = true
  );

CREATE POLICY "Only admins can update site_settings"
  ON site_settings FOR UPDATE
  USING (
    auth.jwt() ->> 'role' = 'service_role'
    OR (auth.jwt() -> 'user_metadata' ->> 'isAdmin')::boolean = true
  );

CREATE POLICY "Only admins can delete site_settings"
  ON site_settings FOR DELETE
  USING (
    auth.jwt() ->> 'role' = 'service_role'
    OR (auth.jwt() -> 'user_metadata' ->> 'isAdmin')::boolean = true
  );

-- auto-update updated_at
CREATE OR REPLACE FUNCTION update_site_settings_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER site_settings_updated_at
  BEFORE UPDATE ON site_settings
  FOR EACH ROW
  EXECUTE FUNCTION update_site_settings_updated_at();

-- Seed: brochure download link (R2 key will be common/ABM_Brochure_2026_final_web.pdf)
INSERT INTO site_settings (key, value, label, description, category, value_type)
VALUES (
  'brochure_url',
  'common/ABM_Brochure_2026_final_web.pdf',
  'International Student Guide PDF',
  'Navigation bar brochure download link. File is stored in Cloudflare R2 under the common/ directory.',
  'navigation',
  'file'
) ON CONFLICT (key) DO NOTHING;
