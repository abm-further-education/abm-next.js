import { cookies } from 'next/headers';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function getAdminSession() {
  try {
    if (!supabaseUrl || !supabaseAnonKey) {
      return null;
    }

    const cookieStore = await cookies();
    const accessToken = cookieStore.get('sb-access-token')?.value;

    if (!accessToken) {
      return null;
    }

    // 쿠키의 토큰을 사용하여 Supabase 클라이언트 생성
    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      global: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
      return null;
    }

    // 어드민 권한 확인
    const isAdmin = user.user_metadata?.isAdmin === true;
    
    if (!isAdmin) {
      return null;
    }

    return { user };
  } catch (error) {
    console.error('Get admin session error:', error);
    return null;
  }
}

export async function requireAdmin() {
  const session = await getAdminSession();
  
  if (!session) {
    throw new Error('Unauthorized');
  }
  
  return session;
}

