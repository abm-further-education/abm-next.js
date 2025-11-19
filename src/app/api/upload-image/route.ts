import { NextRequest, NextResponse } from 'next/server';
import { uploadImageToR2, generateUniqueFileName } from '@/lib/r2';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function getAdminSessionFromRequest(req: NextRequest) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) {
      return null;
    }

    // 요청에서 쿠키 가져오기
    const accessToken = req.cookies.get('sb-access-token')?.value;

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

export async function POST(req: NextRequest) {
  try {
    // 관리자 인증 확인
    const session = await getAdminSessionFromRequest(req);
    if (!session) {
      return NextResponse.json(
        { error: '인증이 필요합니다.' },
        { status: 401 }
      );
    }

    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: '파일이 제공되지 않았습니다.' },
        { status: 400 }
      );
    }

    // 이미지 파일인지 확인
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: '이미지 파일만 업로드할 수 있습니다.' },
        { status: 400 }
      );
    }

    // 파일 크기 제한 (예: 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: '파일 크기는 10MB를 초과할 수 없습니다.' },
        { status: 400 }
      );
    }

    // 고유한 파일명 생성
    const fileName = generateUniqueFileName(file.name);

    // R2에 업로드
    const imagePath = await uploadImageToR2(file, fileName);

    return NextResponse.json({
      success: true,
      imagePath,
    });
  } catch (error) {
    console.error('이미지 업로드 오류:', error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : '이미지 업로드 중 오류가 발생했습니다.',
      },
      { status: 500 }
    );
  }
}

