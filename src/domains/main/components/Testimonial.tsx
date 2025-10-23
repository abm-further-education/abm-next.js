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
import { testimonials, fitnessTestimonials } from '@/lib/testimonial';

function Testimonial() {
  const params = useParams();
  const t = useTranslations('HomePage');
  const tCommon = useTranslations('common');

  // 두 testimonial 배열을 합쳐서 이미지만 추출
  const allTestimonials = [...testimonials, ...fitnessTestimonials];
  const testimonialImages = allTestimonials.map(
    (testimonial) => testimonial.image
  );
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
        className="w-full mx-40 h-300 mt-60"
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1440: { slidesPerView: 5 },
          1690: { slidesPerView: 6 },
          2000: { slidesPerView: 7 },
        }}
        spaceBetween={20}
      >
        {testimonialImages.map((image, index) => (
          <SwiperSlide key={index} className="relative">
            <Image
              src={image}
              alt={`testimonial_${index}`}
              width={300}
              height={300}
              className="md:object-center object-cover"
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
