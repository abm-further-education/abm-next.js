'use client';
import React from 'react';
import Image from 'next/image';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  images: string[];
  /** Fitness online course pages: centered layout, 4 slides per view on large screens. */
  variant?: 'default' | 'fitnessOnline';
}

function Testimonial({ images, variant = 'default' }: TestimonialProps) {
  const isFitnessOnline = variant === 'fitnessOnline';
  const params = useParams();
  const t = useTranslations('HomePage');
  const tCommon = useTranslations('common');

  return (
    <section className="flex flex-col items-center justify-center py-50">
      <h2 className="text-3xl md:text-5xl font-bold py-20 md:py-40">
        {t('testimonialTitle')}
      </h2>
      <p className="text-sm md:text-base text-neutral-700 max-w-800 text-center">
        {t('testimonialDescription')}
      </p>
      <Swiper
        navigation
        modules={[Navigation, Autoplay, Scrollbar]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className={cn(
          'w-full h-300 mt-60',
          isFitnessOnline
            ? 'max-w-6xl mx-auto px-4 sm:px-6'
            : 'mx-40',
        )}
        slidesPerView={1}
        breakpoints={
          isFitnessOnline
            ? {
                480: { slidesPerView: 2, spaceBetween: 16 },
                768: { slidesPerView: 3, spaceBetween: 18 },
                1024: { slidesPerView: 4, spaceBetween: 20 },
              }
            : {
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1440: { slidesPerView: 5 },
                1690: { slidesPerView: 6 },
                2000: { slidesPerView: 7 },
              }
        }
        spaceBetween={isFitnessOnline ? 16 : 20}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className={cn(
              'relative',
              isFitnessOnline && '!flex justify-center items-center',
            )}
          >
            <Image
              src={image}
              alt={`testimonial_${index}`}
              width={300}
              height={300}
              className={cn(
                'object-cover md:object-center',
                isFitnessOnline && 'mx-auto max-h-[280px] w-auto max-w-full',
              )}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Link
        href={`/${params.locale}/abm-student-insights`}
        className="bg-black text-white px-20 py-10 mt-30"
      >
        {tCommon('findOutMore')}
      </Link>
    </section>
  );
}

export default Testimonial;
