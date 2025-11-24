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

    if (!key) {
      return NextResponse.json(
        { error: 'key parameter is required' },
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

    // R2_PUBLIC_URL이 설정되어 있으면 직접 URL 반환
    if (process.env.R2_PUBLIC_URL) {
      const publicUrl = `${process.env.R2_PUBLIC_URL}/${key}`;
      return NextResponse.json({ url: publicUrl });
    }

    // Presigned URL 생성 (1시간 유효)
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: key,
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



