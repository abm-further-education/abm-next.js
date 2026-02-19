import { supabase, supabaseAdmin } from './supabase';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

export interface SiteSetting {
  id: string;
  key: string;
  value: string;
  label: string;
  description: string | null;
  category: string;
  value_type: string;
  created_at: string;
  updated_at: string;
}

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

export async function getAllSiteSettings(): Promise<SiteSetting[]> {
  const client = supabaseAdmin || supabase;

  const { data, error } = await client
    .from('site_settings')
    .select('*')
    .order('category', { ascending: true })
    .order('key', { ascending: true });

  if (error) {
    console.error('Error fetching site settings:', error);
    return [];
  }

  return data || [];
}

export async function getSiteSettingByKey(
  key: string
): Promise<SiteSetting | null> {
  const client = supabaseAdmin || supabase;

  const { data, error } = await client
    .from('site_settings')
    .select('*')
    .eq('key', key)
    .single();

  if (error) {
    console.error('Error fetching site setting:', error);
    return null;
  }

  return data;
}

export async function getSiteSettingsByCategory(
  category: string
): Promise<SiteSetting[]> {
  const client = supabaseAdmin || supabase;

  const { data, error } = await client
    .from('site_settings')
    .select('*')
    .eq('category', category)
    .order('key', { ascending: true });

  if (error) {
    console.error('Error fetching site settings by category:', error);
    return [];
  }

  return data || [];
}

export async function createSiteSetting(
  setting: Omit<SiteSetting, 'id' | 'created_at' | 'updated_at'>
): Promise<SiteSetting> {
  const client = await getAuthenticatedSupabase();

  const {
    data: { user },
    error: userError,
  } = await client.auth.getUser();

  if (userError || !user) {
    throw new Error('No authenticated user found.');
  }

  if (user.user_metadata?.isAdmin !== true) {
    throw new Error('Administrator privileges are required.');
  }

  const insertClient = supabaseAdmin || client;

  const { data, error } = await insertClient
    .from('site_settings')
    .insert([setting])
    .select()
    .single();

  if (error) {
    console.error('Error creating site setting:', error);
    throw new Error(`Failed to create site setting: ${error.message}`);
  }

  return data;
}

export async function updateSiteSetting(
  id: string,
  updates: Partial<SiteSetting>
): Promise<SiteSetting> {
  const client = await getAuthenticatedSupabase();

  const {
    data: { user },
    error: userError,
  } = await client.auth.getUser();

  if (userError || !user) {
    throw new Error('No authenticated user found.');
  }

  if (user.user_metadata?.isAdmin !== true) {
    throw new Error('Administrator privileges are required.');
  }

  const updateClient = supabaseAdmin || client;

  const { data, error } = await updateClient
    .from('site_settings')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating site setting:', error);
    throw new Error(`Failed to update site setting: ${error.message}`);
  }

  return data;
}

export async function deleteSiteSetting(id: string): Promise<void> {
  const client = await getAuthenticatedSupabase();

  const {
    data: { user },
    error: userError,
  } = await client.auth.getUser();

  if (userError || !user) {
    throw new Error('No authenticated user found.');
  }

  if (user.user_metadata?.isAdmin !== true) {
    throw new Error('Administrator privileges are required.');
  }

  const deleteClient = supabaseAdmin || client;

  const { error } = await deleteClient
    .from('site_settings')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting site setting:', error);
    throw new Error(`Failed to delete site setting: ${error.message}`);
  }
}
