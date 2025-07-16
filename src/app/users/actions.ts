'use server';
import { supabase } from '@/lib/supabase';
import type { User } from '@/lib/supabase';

export async function getUsers(): Promise<User[]> {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to fetch users');
  }

  return data || [];
}

export async function createUser(name: string, email: string): Promise<User> {
  const { data, error } = await supabase
    .from('users')
    .insert([{ name, email }])
    .select()
    .single();

  if (error) {
    console.error('Error creating user:', error);
    throw new Error('Failed to create user');
  }

  return data;
}
