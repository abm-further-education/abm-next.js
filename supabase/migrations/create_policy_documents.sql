-- Create policy_documents table
CREATE TABLE public.policy_documents (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  filename text NOT NULL,
  file_url text NOT NULL,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT policy_documents_pkey PRIMARY KEY (id)
);

-- Enable RLS
ALTER TABLE public.policy_documents ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read active policy documents
CREATE POLICY "Anyone can view active policy documents"
  ON public.policy_documents
  FOR SELECT
  USING (is_active = true);

-- Policy: Service role has full access (admin operations use service role key)
CREATE POLICY "Service role has full access to policy documents"
  ON public.policy_documents
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_policy_documents_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER policy_documents_updated_at
  BEFORE UPDATE ON public.policy_documents
  FOR EACH ROW
  EXECUTE FUNCTION update_policy_documents_updated_at();
