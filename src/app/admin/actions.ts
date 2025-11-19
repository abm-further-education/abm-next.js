'use server';

import { cookies } from 'next/headers';

export async function setSessionCookies(accessToken: string, refreshToken: string) {
  try {
    const cookieStore = await cookies();
    cookieStore.set('sb-access-token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7일
    });

    cookieStore.set('sb-refresh-token', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7일
    });

    return { success: true };
  } catch (error) {
    console.error('Set session cookies error:', error);
    return { error: 'An error occurred while setting session cookies.' };
  }
}

export async function signOut() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete('sb-access-token');
    cookieStore.delete('sb-refresh-token');
  } catch (error) {
    console.error('Sign out error:', error);
  }
}

export async function getSession() {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('sb-access-token')?.value;

    if (!accessToken) {
      return null;
    }

    // 쿠키의 토큰을 사용하여 Supabase 클라이언트 생성
    const { createClient } = await import('@supabase/supabase-js');
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      return null;
    }

    const supabaseWithToken = createClient(supabaseUrl, supabaseAnonKey, {
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

    const { data: { user }, error } = await supabaseWithToken.auth.getUser();

    if (error || !user) {
      return null;
    }

    // 어드민 권한 확인 (metadata에 isAdmin이 true인지 확인)
    const isAdmin = user.user_metadata?.isAdmin === true;
    
    if (!isAdmin) {
      return null;
    }

    return { user };
  } catch (error) {
    console.error('Get session error:', error);
    return null;
  }
}

