import { NextRequest, NextResponse } from 'next/server';
import { uploadFileToR2, generateUniqueFileName } from '@/lib/r2';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function getAdminSessionFromRequest(req: NextRequest) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) {
      return null;
    }

    const accessToken = req.cookies.get('sb-access-token')?.value;

    if (!accessToken) {
      return null;
    }

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

    if (error || !user) {
      return null;
    }

    const isAdmin = user.user_metadata?.isAdmin === true;
    if (!isAdmin) {
      return null;
    }

    return { user };
  } catch (error) {
    console.error('[upload-file] Get admin session error:', error);
    return null;
  }
}

// 허용된 파일 타입
const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'image/jpeg',
  'image/png',
  'image/webp',
];

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

export async function POST(req: NextRequest) {
  try {
    const session = await getAdminSessionFromRequest(req);
    if (!session) {
      return NextResponse.json(
        { error: 'Authentication required.' },
        { status: 401 }
      );
    }

    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided.' },
        { status: 400 }
      );
    }

    // 파일 타입 확인
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        {
          error: `Unsupported file type: ${file.type}. Allowed: PDF, Word, Excel, JPEG, PNG, WebP.`,
        },
        { status: 400 }
      );
    }

    // 파일 크기 제한
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'File size must not exceed 50MB.' },
        { status: 400 }
      );
    }

    // 고유한 파일명 생성
    const fileName = generateUniqueFileName(file.name);

    // 디렉토리 파라미터
    const directory = (formData.get('directory') as string) || 'policies';

    try {
      const filePath = await uploadFileToR2(
        file,
        fileName,
        directory,
        file.type
      );

      return NextResponse.json({
        success: true,
        filePath,
        originalName: file.name,
      });
    } catch (r2Error) {
      const errorMessage =
        r2Error instanceof Error ? r2Error.message : 'R2 upload failed';

      return NextResponse.json(
        { error: `File upload failed: ${errorMessage}` },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('[upload-file] File upload error:', error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'An error occurred during file upload.',
      },
      { status: 500 }
    );
  }
}
