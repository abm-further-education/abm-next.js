'use server';

import { supabase, supabaseAdmin } from './supabase';
import { createClient } from '@supabase/supabase-js';

export interface DbTrainer {
  id: string;
  name: string;
  email: string;
  image: string;
  course_category:
    | 'cookery'
    | 'business'
    | 'fitness'
    | 'hr'
    | 'project'
    | 'health';
  courses: string[] | null;
  bio: string | null;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export type CreateTrainerInput = Omit<
  DbTrainer,
  'id' | 'created_at' | 'updated_at'
>;
export type UpdateTrainerInput = Partial<
  Omit<DbTrainer, 'id' | 'created_at' | 'updated_at'>
>;

async function getAuthenticatedSupabase() {
  const { cookies } = await import('next/headers');
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

async function requireAdmin() {
  const client = await getAuthenticatedSupabase();
  const {
    data: { user },
    error,
  } = await client.auth.getUser();

  if (error || !user) {
    throw new Error('인증된 사용자를 찾을 수 없습니다.');
  }

  if (user.user_metadata?.isAdmin !== true) {
    throw new Error('관리자 권한이 필요합니다.');
  }

  return supabaseAdmin || client;
}

export async function getTrainers(
  category?: string
): Promise<DbTrainer[]> {
  let query = supabase
    .from('trainers')
    .select('*')
    .order('sort_order', { ascending: true });

  if (category && category !== 'all') {
    query = query.eq('course_category', category);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching trainers:', error);
    throw new Error(`Failed to fetch trainers: ${error.message}`);
  }

  return data || [];
}

export async function getTrainerById(
  id: string
): Promise<DbTrainer | null> {
  const { data, error } = await supabase
    .from('trainers')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching trainer:', error);
    return null;
  }

  return data;
}

export async function createTrainer(
  trainer: CreateTrainerInput
): Promise<DbTrainer> {
  const adminClient = await requireAdmin();

  const { data, error } = await adminClient
    .from('trainers')
    .insert([trainer])
    .select()
    .single();

  if (error) {
    console.error('Error creating trainer:', error);
    throw new Error(`Failed to create trainer: ${error.message}`);
  }

  return data;
}

export async function updateTrainer(
  id: string,
  trainer: UpdateTrainerInput
): Promise<DbTrainer> {
  const adminClient = await requireAdmin();

  const { data, error } = await adminClient
    .from('trainers')
    .update(trainer)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating trainer:', error);
    throw new Error(`Failed to update trainer: ${error.message}`);
  }

  return data;
}

export async function deleteTrainer(id: string): Promise<void> {
  const adminClient = await requireAdmin();

  const { error } = await adminClient
    .from('trainers')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting trainer:', error);
    throw new Error(`Failed to delete trainer: ${error.message}`);
  }
}

export async function reorderTrainers(
  orderedIds: string[]
): Promise<void> {
  const adminClient = await requireAdmin();

  const updates = orderedIds.map((id, index) =>
    adminClient
      .from('trainers')
      .update({ sort_order: index + 1 })
      .eq('id', id)
  );

  const results = await Promise.all(updates);
  const failed = results.find((r) => r.error);
  if (failed?.error) {
    throw new Error(`Failed to reorder trainers: ${failed.error.message}`);
  }
}
