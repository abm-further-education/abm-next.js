'use server';

import { supabase, supabaseAdmin } from './supabase';
import { createClient } from '@supabase/supabase-js';
import type { Testimonial } from './testimonial-types';

export type { Testimonial } from './testimonial-types';

// 인증된 Supabase 클라이언트 생성 (서버 사이드)
async function getAuthenticatedSupabase() {
  // 동적 import로 cookies 가져오기 (서버 전용)
  const { cookies } = await import('next/headers');
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('sb-access-token')?.value;
  const refreshToken = cookieStore.get('sb-refresh-token')?.value;

  if (!accessToken) {
    // 토큰이 없으면 일반 클라이언트 반환 (읽기 전용)
    return supabase;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return supabase;
  }

  // 인증 토큰을 포함한 클라이언트 생성
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

  // 세션 설정 (RLS 정책이 제대로 작동하도록)
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
 * 모든 testimonial 데이터를 DB에서 가져옵니다
 * @param course 필터링할 코스 (선택사항)
 * @returns Testimonial 배열
 */
export async function getTestimonials(
  course?: string
): Promise<Testimonial[]> {
  // 환경 변수 확인
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn(
      'Supabase environment variables are not set. Cannot fetch testimonials from database.'
    );
    throw new Error('Supabase configuration is missing');
  }

  // 읽기 전용 작업이므로 일반 supabase 클라이언트 사용 (RLS 정책에 의존)
  // 관리자가 모든 데이터를 보려면 supabaseAdmin을 사용할 수 있지만,
  // 일반적으로는 RLS 정책이 읽기 접근을 허용하므로 일반 클라이언트로 충분
  let queryClient = supabase;

  // 관리자 권한 확인을 시도 (선택사항)
  try {
    const client = await getAuthenticatedSupabase();
    const {
      data: { user },
    } = await client.auth.getUser();

    // 관리자인 경우 Service Role Key 사용
    if (user?.user_metadata?.isAdmin === true && supabaseAdmin) {
      queryClient = supabaseAdmin;
    }
  } catch {
    // 인증되지 않은 사용자도 testimonial을 읽을 수 있어야 하므로 에러를 무시
    // 일반 클라이언트 사용
  }

  let query = queryClient.from('testimonials').select('*');

  // course 파라미터가 제공된 경우 필터링
  if (course) {
    query = query.eq('course', course);
  }

  const { data, error } = await query.order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching testimonials:', error);
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    throw new Error(`Failed to fetch testimonials: ${error.message}`);
  }

  return data || [];
}

/**
 * testimonial 이미지만 가져옵니다
 * @param course 필터링할 코스 (선택사항)
 * @param limit 가져올 개수 제한 (선택사항, 최신순 기준)
 * @returns 이미지 경로 배열
 */
export async function getTestimonialImages(
  course?: string,
  limit?: number
): Promise<string[]> {
  const testimonials = await getTestimonials(course);
  const limitedTestimonials = limit
    ? testimonials.slice(0, limit)
    : testimonials;
  return limitedTestimonials.map((testimonial) => testimonial.image);
}

/**
 * 특정 ID의 testimonial을 가져옵니다
 * @param id testimonial ID
 * @returns Testimonial 또는 null
 */
export async function getTestimonialById(
  id: string
): Promise<Testimonial | null> {
  // 환경 변수 확인
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn(
      'Supabase environment variables are not set. Cannot fetch testimonial from database.'
    );
    return null;
  }

  // 읽기 전용 작업이므로 일반 supabase 클라이언트 사용
  let queryClient = supabase;

  // 관리자 권한 확인을 시도 (선택사항)
  try {
    const client = await getAuthenticatedSupabase();
    const {
      data: { user },
    } = await client.auth.getUser();

    // 관리자인 경우 Service Role Key 사용
    if (user?.user_metadata?.isAdmin === true && supabaseAdmin) {
      queryClient = supabaseAdmin;
    }
  } catch {
    // 인증되지 않은 사용자도 testimonial을 읽을 수 있어야 하므로 에러를 무시
    // 일반 클라이언트 사용
  }

  const { data, error } = await queryClient
    .from('testimonials')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching testimonial:', error);
    return null;
  }

  return data;
}

/**
 * testimonial을 생성합니다 (관리자만 가능)
 * @param testimonial 생성할 testimonial 데이터
 * @returns 생성된 Testimonial
 */
export async function createTestimonial(
  testimonial: Omit<Testimonial, 'id' | 'created_at' | 'updated_at'>
): Promise<Testimonial> {
  // 먼저 인증된 클라이언트로 사용자 확인
  const client = await getAuthenticatedSupabase();

  const {
    data: { user },
    error: userError,
  } = await client.auth.getUser();

  if (userError) {
    console.error('Get user error:', userError);
    throw new Error(`인증 오류: ${userError.message}`);
  }

  if (!user) {
    throw new Error('인증된 사용자를 찾을 수 없습니다.');
  }

  // 어드민 권한 확인
  if (user.user_metadata?.isAdmin !== true) {
    throw new Error('관리자 권한이 필요합니다.');
  }

  // Service Role Key가 있으면 사용 (RLS 우회)
  // 없으면 일반 클라이언트 사용 (RLS 정책에 의존)
  const insertClient = supabaseAdmin || client;

  const { data, error } = await insertClient
    .from('testimonials')
    .insert([testimonial])
    .select()
    .single();

  if (error) {
    console.error('Error creating testimonial:', error);
    throw new Error(
      `Failed to create testimonial: ${error.message} (${
        error.code || 'unknown'
      })`
    );
  }

  return data;
}

/**
 * testimonial을 수정합니다 (관리자만 가능)
 * @param id testimonial ID
 * @param testimonial 수정할 testimonial 데이터
 * @returns 수정된 Testimonial
 */
export async function updateTestimonial(
  id: string,
  testimonial: Partial<Testimonial>
): Promise<Testimonial> {
  const client = await getAuthenticatedSupabase();

  // 관리자 권한 확인
  const {
    data: { user },
    error: userError,
  } = await client.auth.getUser();

  if (userError || !user) {
    throw new Error('인증된 사용자를 찾을 수 없습니다.');
  }

  // 어드민 권한 확인
  if (user.user_metadata?.isAdmin !== true) {
    throw new Error('관리자 권한이 필요합니다.');
  }

  // Service Role Key가 있으면 사용 (RLS 우회)
  // 없으면 일반 클라이언트 사용 (RLS 정책에 의존)
  const updateClient = supabaseAdmin || client;

  const { data, error } = await updateClient
    .from('testimonials')
    .update(testimonial)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating testimonial:', error);
    throw new Error(`Failed to update testimonial: ${error.message}`);
  }

  return data;
}

/**
 * testimonial을 삭제합니다 (관리자만 가능)
 * @param id testimonial ID
 */
export async function deleteTestimonial(id: string): Promise<void> {
  const client = await getAuthenticatedSupabase();

  // 관리자 권한 확인
  const {
    data: { user },
    error: userError,
  } = await client.auth.getUser();

  if (userError || !user) {
    throw new Error('인증된 사용자를 찾을 수 없습니다.');
  }

  // 어드민 권한 확인
  if (user.user_metadata?.isAdmin !== true) {
    throw new Error('관리자 권한이 필요합니다.');
  }

  // Service Role Key가 있으면 사용 (RLS 우회)
  // 없으면 일반 클라이언트 사용 (RLS 정책에 의존)
  const deleteClient = supabaseAdmin || client;

  const { error } = await deleteClient
    .from('testimonials')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting testimonial:', error);
    throw new Error(`Failed to delete testimonial: ${error.message}`);
  }
}
