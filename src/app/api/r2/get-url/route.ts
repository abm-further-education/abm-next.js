import { NextRequest, NextResponse } from 'next/server';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
  },
});

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const key = searchParams.get('key');
    const sourceUrl = searchParams.get('url');

    if (!key && !sourceUrl) {
      return NextResponse.json(
        { error: 'key or url parameter is required' },
        { status: 400 }
      );
    }

    const bucketName = process.env.R2_BUCKET;
    if (!bucketName) {
      return NextResponse.json(
        { error: 'R2_BUCKET environment variable is not set' },
        { status: 500 }
      );
    }

    let resolvedKey = key || '';

    if (!resolvedKey && sourceUrl) {
      const parsed = new URL(sourceUrl);
      const pathSegments = parsed.pathname.split('/').filter(Boolean);

      if (pathSegments.length === 0) {
        return NextResponse.json(
          { error: 'Could not resolve key from url' },
          { status: 400 }
        );
      }

      if (
        parsed.hostname.includes('r2.cloudflarestorage.com') &&
        pathSegments[0] === bucketName &&
        pathSegments.length > 1
      ) {
        resolvedKey = pathSegments.slice(1).join('/');
      } else {
        resolvedKey = pathSegments.join('/');
      }
    }

    if (!resolvedKey) {
      return NextResponse.json(
        { error: 'Could not resolve key from input' },
        { status: 400 }
      );
    }

    // R2_PUBLIC_URL이 설정되어 있으면 직접 URL 반환
    if (process.env.R2_PUBLIC_URL) {
      const publicUrl = `${process.env.R2_PUBLIC_URL}/${resolvedKey}`;
      return NextResponse.json({ url: publicUrl });
    }

    // Presigned URL 생성 (1시간 유효)
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: resolvedKey,
    });

    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

    return NextResponse.json({ url });
  } catch (error) {
    console.error('R2 get-url error:', error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Failed to get R2 URL',
      },
      { status: 500 }
    );
  }
}


