import StudentInsightsClient from './StudentInsightsClient';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getTestimonialImages } from '@/lib/testimonial-db';
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

// Generate metadata for the student insights page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'studentInsights' });

  const title = t('testimonialTitle');
  const description = t('testimonialDescription');

  return {
    title: `${title} | ABM Further Education`,
    description: description,
    openGraph: {
      title: `${title} | ABM Further Education`,
      description: description,
      type: 'website',
      locale: locale,
      siteName: 'ABM Further Education',
      images: [
        {
          url: '/home/testimonial.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ABM Further Education`,
      description: description,
      images: ['/home/testimonial.png'],
    },
    alternates: {
      canonical: `/${locale}/abm-student-insights`,
      languages: {
        en: '/en/abm-student-insights',
        ko: '/kr/abm-student-insights',
        es: '/sp/abm-student-insights',
      },
    },
    keywords: [
      'student testimonials',
      'student insights',
      'student reviews',
      'graduate success',
      'ABM education',
      'student experiences',
      'Australia',
      'Sydney',
    ],
  };
}

export default async function StudentInsightsPage() {
  // DB에서 모든 testimonial 이미지 가져오기
  const images = await getTestimonialImages();

  // Cloudflare URL로 변환
  const cloudflareUrls = await Promise.all(
    images.map(async (image) => {
      const r2Key = convertToR2Key(image);
      return await getR2ImageUrl(r2Key);
    })
  );

  return <StudentInsightsClient images={cloudflareUrls} />;
}
