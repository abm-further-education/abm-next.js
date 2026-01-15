import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const accessKeyId = process.env.R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
const accountId = process.env.R2_ACCOUNT_ID;

if (!accountId || !accessKeyId || !secretAccessKey) {
  throw new Error(
    'Missing R2 env: R2_ACCOUNT_ID / R2_ACCESS_KEY_ID / R2_SECRET_ACCESS_KEY'
  );
}

// Cloudflare R2는 S3 호환 API를 사용합니다
export const s3Client = new S3Client({
  region: 'auto',
  endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId, secretAccessKey },
});

/**
 * 이미지를 R2에 업로드합니다
 * @param file - 업로드할 파일 (File 또는 Buffer)
 * @param fileName - 저장할 파일명
 * @param directory - 저장할 디렉토리 (기본값: 'news-letter')
 * @returns 업로드된 파일의 URL 경로
 */
export async function uploadImageToR2(
  file: File | Buffer,
  fileName: string,
  directory: string = 'news-letter'
): Promise<string> {
  const bucketName = process.env.R2_BUCKET;

  if (!bucketName) {
    throw new Error('R2_BUCKET_NAME 환경 변수가 설정되지 않았습니다.');
  }

  // 지정된 디렉토리에 저장
  const key = `${directory}/${fileName}`;

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
    // R2 환경 변수 확인
    if (
      !process.env.R2_ACCOUNT_ID ||
      !process.env.R2_ACCESS_KEY_ID ||
      !process.env.R2_SECRET_ACCESS_KEY
    ) {
      throw new Error(
        'R2 환경 변수가 설정되지 않았습니다. R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY를 확인해주세요.'
      );
    }

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

    // AWS SDK 에러인 경우 더 자세한 정보 추출
    if (error && typeof error === 'object' && 'name' in error) {
      const awsError = error as {
        name: string;
        message: string;
        $metadata?: { httpStatusCode?: number };
      };

      if (
        awsError.name === 'Forbidden' ||
        awsError.$metadata?.httpStatusCode === 403
      ) {
        throw new Error(
          'R2 업로드 권한이 없습니다. R2_ACCESS_KEY_ID와 R2_SECRET_ACCESS_KEY를 확인해주세요.'
        );
      }

      if (
        awsError.name === 'NoSuchBucket' ||
        awsError.$metadata?.httpStatusCode === 404
      ) {
        throw new Error(`R2 버킷을 찾을 수 없습니다: ${bucketName}`);
      }
    }

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

/**
 * R2 이미지 경로를 실제 URL로 변환합니다
 * 로컬 경로와 R2 경로를 모두 처리합니다
 * @param imagePath - R2 key, 로컬 경로, 또는 전체 URL
 * @returns 실제 이미지 URL 또는 로컬 경로
 */
export async function getR2ImageUrl(imagePath: string): Promise<string> {
  // 이미 전체 URL인 경우 그대로 반환
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }

  // 로컬 경로인 경우 (Next.js public 폴더 경로) 그대로 반환
  // /로 시작하는 경로는 로컬 경로로 간주
  if (imagePath.startsWith('/')) {
    return imagePath;
  }

  // ./로 시작하는 경로도 로컬 경로로 간주
  if (imagePath.startsWith('./')) {
    return imagePath;
  }

  // 위 조건에 해당하지 않으면 R2 key로 간주하여 변환
  // R2_PUBLIC_URL이 설정되어 있으면 직접 URL 구성
  if (process.env.R2_PUBLIC_URL) {
    return `${process.env.R2_PUBLIC_URL}/${imagePath}`;
  }

  // R2_PUBLIC_URL이 없으면 presigned URL 생성
  const bucketName = process.env.R2_BUCKET;
  if (!bucketName) {
    console.warn('R2_BUCKET이 설정되지 않았습니다. 원본 경로를 반환합니다.');
    return imagePath;
  }

  try {
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: imagePath,
    });

    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 }); // 1시간 유효
    return url;
  } catch (error) {
    console.error('R2 presigned URL 생성 오류:', error);
    // 에러 발생 시 원본 경로 반환
    return imagePath;
  }
}
