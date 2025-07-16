import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  console.warn(
    'NEXT_PUBLIC_SUPABASE_URL environment variable is not defined. Supabase client will not be available.'
  );
}

if (!supabaseAnonKey) {
  console.warn(
    'NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable is not defined. Supabase client will not be available.'
  );
}

// Primary Supabase client using anon key (safe for both client and server)
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);

// Optional: Only include service role client if you really need admin operations
// For most applications, you can delete this and use RLS policies instead
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabaseAdmin = supabaseServiceKey
  ? createClient(
      supabaseUrl || 'https://placeholder.supabase.co',
      supabaseServiceKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    )
  : null;

// Database types for better TypeScript support
export interface User {
  id: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export default supabase;
