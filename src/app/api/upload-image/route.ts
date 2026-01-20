import { NextRequest, NextResponse } from 'next/server';
import { uploadImageToR2, generateUniqueFileName } from '@/lib/r2';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function getAdminSessionFromRequest(req: NextRequest) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('[upload-image] Supabase 환경 변수가 설정되지 않았습니다.');
      return null;
    }

    const accessToken = req.cookies.get('sb-access-token')?.value;

    if (!accessToken) {
      console.error('[upload-image] Access token이 쿠키에 없습니다.');
      console.error('[upload-image] 요청 URL:', req.url);
      console.error('[upload-image] 요청 헤더:', {
        origin: req.headers.get('origin'),
        referer: req.headers.get('referer'),
        cookie: req.headers.get('cookie'),
      });
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

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      console.error('[upload-image] Supabase 인증 오류:', error.message);
      return null;
    }

    if (!user) {
      console.error('[upload-image] 사용자를 찾을 수 없습니다.');
      return null;
    }

    // 어드민 권한 확인
    const isAdmin = user.user_metadata?.isAdmin === true;

    if (!isAdmin) {
      console.error(
        '[upload-image] 사용자가 어드민 권한이 없습니다. user_id:',
        user.id
      );
      return null;
    }

    return { user };
  } catch (error) {
    console.error('[upload-image] Get admin session error:', error);
    return null;
  }
}

export async function POST(req: NextRequest) {
  try {
    // 관리자 인증 확인
    const session = await getAdminSessionFromRequest(req);
    if (!session) {
      console.error('[upload-image] 인증 실패: 세션이 없습니다.');
      return NextResponse.json(
        { error: '인증이 필요합니다. 로그인 후 다시 시도해주세요.' },
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

    // 디렉토리 파라미터 (선택사항, 기본값: news-letter)
    const directory = (formData.get('directory') as string) || 'news-letter';

    // R2에 업로드
    try {
      const imagePath = await uploadImageToR2(file, fileName, directory);

      return NextResponse.json({
        success: true,
        imagePath,
      });
    } catch (r2Error) {
      const errorMessage =
        r2Error instanceof Error ? r2Error.message : 'R2 업로드 실패';

      // R2 권한 오류인 경우 특별 처리
      if (errorMessage.includes('Forbidden') || errorMessage.includes('403')) {
        return NextResponse.json(
          {
            error: '이미지 업로드 권한이 없습니다. R2 설정을 확인해주세요.',
          },
          { status: 403 }
        );
      }

      return NextResponse.json(
        {
          error: `이미지 업로드 실패: ${errorMessage}`,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('[upload-image] 이미지 업로드 오류:', error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : '이미지 업로드 중 오류가 발생했습니다.',
      },
      { status: 500 }
    );
  }
}
