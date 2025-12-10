import Banner from '@/components/common/Banner';
import Card from '@/components/common/Card';
import FadeIn from '@/components/common/FadeIn';
import Gallery from '@/components/common/Gallery';
import Testimonial from '@/domains/main/components/Testimonial';
import SubscriptionContainer from '@/domains/subscription/components/SubscriptionContainer';
import React from 'react';
import type { Metadata } from 'next';
import { getR2ImageUrl } from '@/lib/r2';
import { getTestimonialImages } from '@/lib/testimonial-db';

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

export const metadata: Metadata = {
  title: 'Business & Management Courses | ABM Further Education',
  description:
    'Explore our comprehensive range of business and management courses at ABM Further Education. From Certificate IV to Graduate Diploma, build your business career with expert training.',
};

async function Page() {
  const images = await getTestimonialImages(undefined, 10);
  const cloudflareUrls = await Promise.all(
    images.map(async (image) => {
      const r2Key = convertToR2Key(image);
      return await getR2ImageUrl(r2Key);
    })
  );
  return (
    <div className="font-[family-name:var(--font-montserrat)] pt-60">
      <Banner
        slides={[
          {
            imgPath: '/courses/business/business_0.png',
            title: 'Business',
            content: '',
          },
        ]}
      />
      <div className="flex flex-col items-center justify-center py-50">
        <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
          Build Your Business
          <br />
          Career with ABM
        </h2>
        <p className="text-sm md:text-base text-neutral-700 max-w-800 text-center">
          We provide high-quality education in an innovative and supportive
          environment, ensuring student success with expert teaching and work
          experience opportunities across Australia.
        </p>
      </div>
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
          Business Courses
        </h2>
        <div className="grid grid-cols-2 md:gap-40 py-50 justify-items-center max-w-1000 mx-auto">
          <Card
            imgPath="/courses/business/business_1.jpg"
            title="Certificate IV in Business"
            link="/business-and-management-courses/bsb40120-certificate-iv-in-business"
            className="w-300 md:w-480"
          />
          <Card
            imgPath="/courses/business/business_2.png"
            title="Diploma of Business"
            link="/business-and-management-courses/bsb50120-diploma-of-business"
            className="w-300 md:w-480"
          />
          <Card
            imgPath="/courses/business/business_3.png"
            title="Advanced Diploma of Business"
            link="/business-and-management-courses/bsb60120-advanced-diploma-of-business"
            className="w-300 md:w-480"
          />
          <Card
            imgPath="/courses/business/business_4.png"
            title="Graduate Diploma of Management (Learning)"
            link="/business-and-management-courses/bsb80120-graduate-diploma-of-management"
            className="w-300 md:w-480"
          />
        </div>
      </FadeIn>
      <FadeIn>
        <Testimonial images={cloudflareUrls} />
      </FadeIn>
      <FadeIn>
        <Gallery />
      </FadeIn>
      <FadeIn>
        <SubscriptionContainer />
      </FadeIn>
    </div>
  );
}

export default Page;
