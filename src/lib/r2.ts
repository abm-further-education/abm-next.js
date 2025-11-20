import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

// Cloudflare R2는 S3 호환 API를 사용합니다
const s3Client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
  },
});

/**
 * 이미지를 R2에 업로드합니다
 * @param file - 업로드할 파일 (File 또는 Buffer)
 * @param fileName - 저장할 파일명
 * @returns 업로드된 파일의 URL 경로
 */
export async function uploadImageToR2(
  file: File | Buffer,
  fileName: string
): Promise<string> {
  const bucketName = process.env.R2_BUCKET;

  if (!bucketName) {
    throw new Error('R2_BUCKET_NAME 환경 변수가 설정되지 않았습니다.');
  }

  // news-letter 디렉토리에 저장
  const key = `news-letter/${fileName}`;

  // File 객체를 Buffer로 변환
  let buffer: Buffer;
  if (file instanceof File) {
    const arrayBuffer = await file.arrayBuffer();
    buffer = Buffer.from(arrayBuffer);
  } else {
    buffer = file;
  }

  // Content-Type 설정
  const contentType = file instanceof File ? file.type : 'image/jpeg'; // 기본값

  try {
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: buffer,
      ContentType: contentType,
    });

    await s3Client.send(command);

    // R2 Public URL 반환 (또는 CDN URL이 있다면 그것을 사용)
    // Cloudflare R2의 경우 일반적으로 커스텀 도메인을 사용합니다
    // 여기서는 상대 경로를 반환하고, 실제 URL은 환경 변수로 설정할 수 있습니다
    const publicUrl = process.env.R2_PUBLIC_URL
      ? `${process.env.R2_PUBLIC_URL}/${key}`
      : key; // URL이 설정되지 않은 경우 경로만 반환

    return publicUrl;
  } catch (error) {
    console.error('R2 업로드 오류:', error);
    throw new Error(
      `이미지 업로드 실패: ${
        error instanceof Error ? error.message : '알 수 없는 오류'
      }`
    );
  }
}

/**
 * 파일명을 고유하게 생성합니다
 * @param originalFileName - 원본 파일명
 * @returns 고유한 파일명
 */
export function generateUniqueFileName(originalFileName: string): string {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 15);
  const extension = originalFileName.split('.').pop() || 'jpg';
  return `${timestamp}-${randomString}.${extension}`;
}

