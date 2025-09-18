import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) {
  console.warn(
    'NEXT_PUBLIC_SUPABASE_URL environment variable is not defined. Supabase server client will not be available.'
  );
}

if (!supabaseServiceKey) {
  console.warn(
    'SUPABASE_SERVICE_ROLE_KEY environment variable is not defined. Supabase server client will not be available.'
  );
}

// Server-side Supabase client with service role key
export const supabaseServer =
  supabaseUrl && supabaseServiceKey
    ? createClient(supabaseUrl, supabaseServiceKey, {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      })
    : null;

export default supabaseServer;
