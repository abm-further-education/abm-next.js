import { supabase, supabaseAdmin } from './supabase';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  content?: string | null;
  image: string;
  category: string;
  date: string;
  link?: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
  created_by?: string | null;
  // 숫자 ID (URL에 사용)
  displayId?: number;
  // 실제 DB UUID
  dbId?: string;
}

// 인증된 Supabase 클라이언트 생성 (서버 사이드)
async function getAuthenticatedSupabase() {
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
  // RLS 정책은 Authorization 헤더의 토큰을 기반으로 작동하므로
  // 헤더 설정만으로도 충분하지만, 세션도 설정해주는 것이 안전합니다
  if (accessToken && refreshToken) {
    try {
      await authenticatedClient.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });
    } catch (error) {
      console.error('Failed to set session:', error);
      // 세션 설정 실패해도 계속 진행 (헤더에 토큰이 있으므로)
    }
  }

  return authenticatedClient;
}

export async function getNewsList(published?: boolean): Promise<NewsItem[]> {
  const client = await getAuthenticatedSupabase();

  // 관리자 권한 확인
  const {
    data: { user },
  } = await client.auth.getUser();

  // 관리자인 경우 Service Role Key 사용 (모든 뉴스 조회 가능)
  // 일반 사용자인 경우 일반 클라이언트 사용 (published만 조회)
  const queryClient =
    user?.user_metadata?.isAdmin === true && supabaseAdmin
      ? supabaseAdmin
      : client;

  let query = queryClient.from('news').select('*');

  // published 파라미터가 제공된 경우에만 필터링
  if (published !== undefined) {
    query = query.eq('published', published);
  }

  const { data, error } = await query.order('date', { ascending: false });

  if (error) {
    console.error('Error fetching news:', error);
    throw new Error(`Failed to fetch news: ${error.message}`);
  }

  const newsList = data || [];

  // 숫자 ID 매핑 (1, 2, 3, 4...)
  return newsList.map((news, index) => ({
    ...news,
    displayId: index + 1,
    dbId: news.id,
    // id는 숫자 ID로 설정 (URL에 사용)
    id: (index + 1).toString(),
  }));
}

// 숫자 ID를 실제 DB UUID로 변환
// getNewsList와 동일한 순서를 보장하기 위해 getNewsList를 사용
async function getDbIdFromDisplayId(
  displayId: string,
  published?: boolean
): Promise<string | null> {
  const numericId = parseInt(displayId, 10);

  // 숫자가 아니면 UUID로 간주하여 그대로 반환
  if (isNaN(numericId)) {
    return displayId;
  }

  try {
    // getNewsList를 사용하여 동일한 순서 보장
    // 무한 루프 방지를 위해 published 파라미터를 그대로 전달
    const newsList = await getNewsList(published);
    const news = newsList.find((item) => item.displayId === numericId);
    return news?.dbId || null;
  } catch (error) {
    console.error('Error getting DB ID from display ID:', error);
    return null;
  }
}

export async function getNewsById(
  id: string,
  publishedOnly: boolean = true
): Promise<NewsItem | null> {
  // 숫자 ID인 경우 실제 DB UUID로 변환
  // publishedOnly를 published로 변환 (getNewsList와 일치)
  const dbId = await getDbIdFromDisplayId(id, publishedOnly ? true : undefined);
  if (!dbId) {
    return null;
  }

  const client = await getAuthenticatedSupabase();

  // 관리자 권한 확인
  const {
    data: { user },
  } = await client.auth.getUser();

  // 관리자인 경우 Service Role Key 사용 (모든 뉴스 조회 가능)
  // 일반 사용자인 경우 일반 클라이언트 사용 (published만 조회)
  const queryClient =
    user?.user_metadata?.isAdmin === true && supabaseAdmin
      ? supabaseAdmin
      : client;

  let query = queryClient.from('news').select('*').eq('id', dbId);

  // publishedOnly가 true일 때만 published 필터 적용
  // 단, 관리자이고 Service Role Key를 사용하는 경우는 필터 무시
  if (
    publishedOnly &&
    !(user?.user_metadata?.isAdmin === true && supabaseAdmin)
  ) {
    query = query.eq('published', true);
  }

  const { data, error } = await query.single();

  if (error) {
    console.error('Error fetching news:', error);
    console.error('Error details:', JSON.stringify(error, null, 2));
    return null;
  }

  if (!data) {
    return null;
  }

  // 숫자 ID 찾기
  const numericId = parseInt(id, 10);
  if (!isNaN(numericId)) {
    // 숫자 ID인 경우 이미 getDbIdFromDisplayId에서 찾았으므로 그대로 사용
    return {
      ...data,
      displayId: numericId,
      dbId: data.id,
      // id는 숫자 ID로 설정 (URL에 사용)
      id: numericId.toString(),
    };
  }

  // UUID인 경우 displayId 찾기 (숫자 ID가 아닌 경우에만)
  const allNews = await getNewsList(publishedOnly ? true : undefined);
  const newsWithDisplayId = allNews.find((item) => item.dbId === data.id);

  return {
    ...data,
    displayId: newsWithDisplayId?.displayId,
    dbId: data.id,
    // id는 숫자 ID로 설정 (URL에 사용)
    id: newsWithDisplayId?.id || data.id,
  };
}

export async function createNews(
  news: Omit<NewsItem, 'id' | 'created_at' | 'updated_at'>
): Promise<NewsItem> {
  // 먼저 인증된 클라이언트로 사용자 확인
  const client = await getAuthenticatedSupabase();

  // 디버깅: 현재 사용자 정보 확인
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

  console.log(
    'Current user:',
    user.id,
    'isAdmin:',
    user.user_metadata?.isAdmin
  );

  // 어드민 권한 확인
  if (user.user_metadata?.isAdmin !== true) {
    throw new Error('관리자 권한이 필요합니다.');
  }

  // Service Role Key가 있으면 사용 (RLS 우회)
  // 없으면 일반 클라이언트 사용 (RLS 정책에 의존)
  const insertClient = supabaseAdmin || client;

  const { data, error } = await insertClient
    .from('news')
    .insert([news])
    .select()
    .single();

  if (error) {
    console.error('Error creating news:', error);
    console.error('Error details:', JSON.stringify(error, null, 2));
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    console.error('Error hint:', error.hint);
    console.error('User ID:', user.id);
    console.error('User metadata:', user.user_metadata);
    console.error('Using Service Role:', !!supabaseAdmin);
    throw new Error(
      `Failed to create news: ${error.message} (${error.code || 'unknown'})`
    );
  }

  return data;
}

export async function updateNews(
  id: string,
  news: Partial<NewsItem>
): Promise<NewsItem> {
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
    .from('news')
    .update(news)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating news:', error);
    console.error('Error details:', JSON.stringify(error, null, 2));
    console.error('Using Service Role:', !!supabaseAdmin);
    throw new Error(`Failed to update news: ${error.message}`);
  }

  return data;
}

export async function deleteNews(id: string): Promise<void> {
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

  const { error } = await deleteClient.from('news').delete().eq('id', id);

  if (error) {
    console.error('Error deleting news:', error);
    console.error('Error details:', JSON.stringify(error, null, 2));
    console.error('Using Service Role:', !!supabaseAdmin);
    throw new Error(`Failed to delete news: ${error.message}`);
  }
}
