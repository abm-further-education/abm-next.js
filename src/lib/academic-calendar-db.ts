import { supabase, supabaseAdmin } from './supabase';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

export interface AcademicEvent {
  id: string;
  title: string;
  start_date: string;
  end_date: string;
  event_type: 'term' | 'holiday' | 'event';
  color?: string | null;
  description?: string | null;
  created_at: string;
  updated_at: string;
}

// 인증된 Supabase 클라이언트 생성 (서버 사이드)
async function getAuthenticatedSupabase() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('sb-access-token')?.value;
  const refreshToken = cookieStore.get('sb-refresh-token')?.value;

  if (!accessToken) {
    return supabase;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return supabase;
  }

  const authenticatedClient = createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });

  if (accessToken && refreshToken) {
    try {
      await authenticatedClient.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });
    } catch (error) {
      console.error('Failed to set session:', error);
    }
  }

  return authenticatedClient;
}

export async function getAcademicEvents(): Promise<AcademicEvent[]> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase environment variables are not set.');
    return [];
  }

  const { data, error } = await supabase
    .from('academic_events')
    .select('*')
    .order('start_date', { ascending: true });

  if (error) {
    console.error('Error fetching academic events:', error);
    throw new Error(`Failed to fetch academic events: ${error.message}`);
  }

  return data || [];
}

export async function getAcademicEventById(
  id: string
): Promise<AcademicEvent | null> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase environment variables are not set.');
    return null;
  }

  const client = await getAuthenticatedSupabase();

  const queryClient = supabaseAdmin || client;

  const { data, error } = await queryClient
    .from('academic_events')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching academic event:', error);
    return null;
  }

  return data;
}

export async function createAcademicEvent(
  event: Omit<AcademicEvent, 'id' | 'created_at' | 'updated_at'>
): Promise<AcademicEvent> {
  const client = await getAuthenticatedSupabase();

  const {
    data: { user },
    error: userError,
  } = await client.auth.getUser();

  if (userError || !user) {
    throw new Error('No authenticated users found.');
  }

  if (user.user_metadata?.isAdmin !== true) {
    throw new Error('Administrator privileges are required.');
  }

  const insertClient = supabaseAdmin || client;

  const { data, error } = await insertClient
    .from('academic_events')
    .insert([event])
    .select()
    .single();

  if (error) {
    console.error('Error creating academic event:', error);
    throw new Error(`Failed to create academic event: ${error.message}`);
  }

  return data;
}

export async function updateAcademicEvent(
  id: string,
  event: Partial<Omit<AcademicEvent, 'id' | 'created_at' | 'updated_at'>>
): Promise<AcademicEvent> {
  const client = await getAuthenticatedSupabase();

  const {
    data: { user },
    error: userError,
  } = await client.auth.getUser();

  if (userError || !user) {
    throw new Error('No authenticated users found.');
  }

  if (user.user_metadata?.isAdmin !== true) {
    throw new Error('Administrator privileges are required.');
  }

  const updateClient = supabaseAdmin || client;

  const { data, error } = await updateClient
    .from('academic_events')
    .update({ ...event, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating academic event:', error);
    throw new Error(`Failed to update academic event: ${error.message}`);
  }

  return data;
}

export async function deleteAcademicEvent(id: string): Promise<void> {
  const client = await getAuthenticatedSupabase();

  const {
    data: { user },
    error: userError,
  } = await client.auth.getUser();

  if (userError || !user) {
    throw new Error('No authenticated users found.');
  }

  if (user.user_metadata?.isAdmin !== true) {
    throw new Error('Administrator privileges are required.');
  }

  const deleteClient = supabaseAdmin || client;

  const { error } = await deleteClient
    .from('academic_events')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting academic event:', error);
    throw new Error(`Failed to delete academic event: ${error.message}`);
  }
}

// Bulk insert for seeding data
export async function bulkCreateAcademicEvents(
  events: Omit<AcademicEvent, 'id' | 'created_at' | 'updated_at'>[]
): Promise<void> {
  const client = await getAuthenticatedSupabase();

  const {
    data: { user },
    error: userError,
  } = await client.auth.getUser();

  if (userError || !user) {
    throw new Error('No authenticated users found.');
  }

  if (user.user_metadata?.isAdmin !== true) {
    throw new Error('Administrator privileges are required.');
  }

  const insertClient = supabaseAdmin || client;

  const { error } = await insertClient
    .from('academic_events')
    .insert(events);

  if (error) {
    console.error('Error bulk creating academic events:', error);
    throw new Error(`Failed to bulk create academic events: ${error.message}`);
  }
}
