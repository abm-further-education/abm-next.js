import { supabase, supabaseAdmin } from './supabase';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

export interface PolicyDocument {
  id: string;
  title: string;
  description: string | null;
  filename: string;
  file_url: string;
  display_order: number;
  is_active: boolean;
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

/**
 * 모든 정책 문서 목록 조회 (공개용: is_active = true만)
 */
export async function getActivePolicyDocuments(): Promise<PolicyDocument[]> {
  const client = supabaseAdmin || supabase;

  const { data, error } = await client
    .from('policy_documents')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true })
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching active policy documents:', error);
    throw new Error(`Failed to fetch policy documents: ${error.message}`);
  }

  return data || [];
}

/**
 * 모든 정책 문서 목록 조회 (관리자용: 모든 문서)
 */
export async function getAllPolicyDocuments(): Promise<PolicyDocument[]> {
  const client = await getAuthenticatedSupabase();

  let user = null;
  try {
    const {
      data: { user: authUser },
    } = await client.auth.getUser();
    user = authUser;
  } catch {
    console.error('No authenticated user');
  }

  const queryClient =
    user?.user_metadata?.isAdmin === true && supabaseAdmin
      ? supabaseAdmin
      : client;

  const { data, error } = await queryClient
    .from('policy_documents')
    .select('*')
    .order('display_order', { ascending: true })
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching all policy documents:', error);
    throw new Error(`Failed to fetch policy documents: ${error.message}`);
  }

  return data || [];
}

/**
 * ID로 정책 문서 조회
 */
export async function getPolicyDocumentById(
  id: string
): Promise<PolicyDocument | null> {
  const client = await getAuthenticatedSupabase();

  let user = null;
  try {
    const {
      data: { user: authUser },
    } = await client.auth.getUser();
    user = authUser;
  } catch {
    console.error('No authenticated user');
  }

  const queryClient =
    user?.user_metadata?.isAdmin === true && supabaseAdmin
      ? supabaseAdmin
      : client;

  const { data, error } = await queryClient
    .from('policy_documents')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching policy document:', error);
    return null;
  }

  return data;
}

/**
 * 정책 문서 생성
 */
export async function createPolicyDocument(
  doc: Omit<PolicyDocument, 'id' | 'created_at' | 'updated_at'>
): Promise<PolicyDocument> {
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
    .from('policy_documents')
    .insert([doc])
    .select()
    .single();

  if (error) {
    console.error('Error creating policy document:', error);
    throw new Error(`Failed to create policy document: ${error.message}`);
  }

  return data;
}

/**
 * 정책 문서 수정
 */
export async function updatePolicyDocument(
  id: string,
  doc: Partial<PolicyDocument>
): Promise<PolicyDocument> {
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
    .from('policy_documents')
    .update(doc)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating policy document:', error);
    throw new Error(`Failed to update policy document: ${error.message}`);
  }

  return data;
}

/**
 * 정책 문서 삭제
 */
export async function deletePolicyDocument(id: string): Promise<void> {
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
    .from('policy_documents')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting policy document:', error);
    throw new Error(`Failed to delete policy document: ${error.message}`);
  }
}
