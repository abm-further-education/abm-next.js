import { supabase, supabaseAdmin } from './supabase';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

function formatPostgrestError(err: unknown): string {
  if (err == null) return 'Unknown error';
  if (typeof err === 'string') return err;
  if (typeof err === 'object') {
    const e = err as {
      message?: string;
      code?: string;
      details?: string;
      hint?: string;
    };
    const parts = [e.message, e.code, e.details, e.hint].filter(Boolean);
    if (parts.length) return parts.join(' — ');
    try {
      return JSON.stringify(err);
    } catch {
      return Object.prototype.toString.call(err);
    }
  }
  return String(err);
}

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

export interface PolicyDocumentArchive {
  id: string;
  policy_document_id: string;
  file_url: string;
  filename: string;
  archived_at: string;
}

export interface PolicyDocumentArchiveWithTitle extends PolicyDocumentArchive {
  policy_title: string;
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
/**
 * 공개 다운로드 API용: id로 문서의 저장 경로만 조회 (인증 불필요)
 */
export async function getPolicyDocumentForPublicFile(
  id: string
): Promise<{ id: string; file_url: string } | null> {
  const client = supabaseAdmin || supabase;

  const { data, error } = await client
    .from('policy_documents')
    .select('id, file_url')
    .eq('id', id)
    .maybeSingle();

  if (error) {
    console.error('Error fetching policy document for file:', error);
    return null;
  }

  return data;
}

/**
 * 아카이브 버전 단건 조회 (documentId + archiveId 일치 검증)
 */
export async function getPolicyArchiveForPublicFile(
  policyDocumentId: string,
  archiveId: string
): Promise<{ file_url: string; filename: string } | null> {
  const client = supabaseAdmin || supabase;

  const { data, error } = await client
    .from('policy_document_archives')
    .select('file_url, filename')
    .eq('id', archiveId)
    .eq('policy_document_id', policyDocumentId)
    .maybeSingle();

  if (error) {
    console.error('Error fetching policy archive for file:', error);
    return null;
  }

  return data;
}

/**
 * 정책 문서의 이전 버전을 아카이브에 기록 (파일 교체 시)
 */
export async function insertPolicyDocumentArchive(
  policyDocumentId: string,
  fileUrl: string,
  filename: string
): Promise<PolicyDocumentArchive> {
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
    .from('policy_document_archives')
    .insert([
      {
        policy_document_id: policyDocumentId,
        file_url: fileUrl,
        filename,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error('Error archiving policy document version:', error);
    throw new Error(`Failed to archive policy version: ${error.message}`);
  }

  return data;
}

/**
 * 한 정책 문서의 아카이브 목록 (최신 먼저)
 */
export async function getArchivesByPolicyDocumentId(
  policyDocumentId: string
): Promise<PolicyDocumentArchive[]> {
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

  // Match getAllPolicyArchivesWithTitles / insertPolicyDocumentArchive: prefer service role so RLS never blocks admin reads.
  const queryClient = supabaseAdmin || client;

  const { data, error } = await queryClient
    .from('policy_document_archives')
    .select('*')
    .eq('policy_document_id', policyDocumentId)
    .order('archived_at', { ascending: false });

  if (error) {
    const detail = formatPostgrestError(error);
    console.error('Error fetching policy archives:', detail, error);
    throw new Error(`Failed to fetch policy archives: ${detail}`);
  }

  return data || [];
}

/**
 * 전체 아카이브 + 정책 제목 (관리자 공개 페이지용)
 */
export async function getAllPolicyArchivesWithTitles(): Promise<
  PolicyDocumentArchiveWithTitle[]
> {
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

  const queryClient = supabaseAdmin || client;

  const { data: archives, error: archivesError } = await queryClient
    .from('policy_document_archives')
    .select('*')
    .order('archived_at', { ascending: false });

  if (archivesError) {
    console.error('Error fetching all policy archives:', archivesError);
    throw new Error(
      `Failed to fetch policy archives: ${archivesError.message}`
    );
  }

  const list = (archives || []) as PolicyDocumentArchive[];
  if (list.length === 0) {
    return [];
  }

  const policyIds = [...new Set(list.map((a) => a.policy_document_id))];

  const { data: policies, error: policiesError } = await queryClient
    .from('policy_documents')
    .select('id, title')
    .in('id', policyIds);

  if (policiesError) {
    console.error('Error fetching policy titles for archives:', policiesError);
    throw new Error(
      `Failed to fetch policy titles: ${policiesError.message}`
    );
  }

  const titleById = new Map(
    (policies || []).map((p: { id: string; title: string }) => [
      p.id,
      p.title,
    ])
  );

  return list.map((row) => ({
    ...row,
    policy_title: titleById.get(row.policy_document_id) ?? '(unknown)',
  }));
}

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
