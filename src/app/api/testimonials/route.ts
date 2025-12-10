import { NextResponse } from 'next/server';
import { getTestimonials } from '@/lib/testimonial-db';
import { getR2ImageUrl } from '@/lib/r2';

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

export async function GET() {
  try {
    // DB에서 testimonial 데이터 가져오기
    const testimonials = await getTestimonials();

    // Cloudflare URL로 변환
    const testimonialsWithCloudflareUrls = await Promise.all(
      testimonials.map(async (testimonial) => {
        const r2Key = convertToR2Key(testimonial.image);
        const cloudflareUrl = await getR2ImageUrl(r2Key);
        return {
          ...testimonial,
          image: cloudflareUrl,
        };
      })
    );

    return NextResponse.json(testimonialsWithCloudflareUrls);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}
