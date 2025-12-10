import { getTestimonialImages } from '@/lib/testimonial-db';
import { getR2ImageUrl } from '@/lib/r2';
import Testimonial from './Testimonial';

/**
 * 로컬 경로를 Cloudflare R2 key로 변환합니다
 * @param imagePath - 이미지 경로 (/testimonials/... 또는 testimonials/...)
 * @returns R2 key (testimonials/...)
 */
function convertToR2Key(imagePath: string): string {
  // 이미 전체 URL이면 그대로 반환
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }

  // 로컬 경로인 경우 (/testimonials/... -> testimonials/...)
  if (imagePath.startsWith('/testimonials/')) {
    return imagePath.substring(1); // 앞의 / 제거
  }

  // 이미 R2 key 형식이면 그대로 반환
  return imagePath;
}

interface TestimonialWrapperProps {
  /**
   * 표시할 testimonial 개수 제한 (최신순 기준)
   * 지정하지 않으면 모든 testimonial을 표시합니다
   */
  limit?: number;
}

/**
 * Testimonial 컴포넌트의 서버 래퍼
 * DB에서 데이터를 가져와서 클라이언트 컴포넌트에 전달합니다
 */
export default async function TestimonialWrapper({
  limit,
}: TestimonialWrapperProps = {}) {
  // DB에서 testimonial 이미지 가져오기 (limit 적용)
  const images = await getTestimonialImages(undefined, limit);

  // Cloudflare URL로 변환
  const cloudflareUrls = await Promise.all(
    images.map(async (image) => {
      const r2Key = convertToR2Key(image);
      return await getR2ImageUrl(r2Key);
    })
  );

  return <Testimonial images={cloudflareUrls} />;
}
