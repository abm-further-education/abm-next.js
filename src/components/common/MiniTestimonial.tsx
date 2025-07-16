'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import 'swiper/css';

function MiniTestimonial() {
  const router = useRouter();

  const handleImageClick = () => {
    router.push('/abm-student-insights');
  };

  return (
    <div className="absolute bottom-4 right-4 w-[200px] z-50">
      {/* Main Image */}
      <Swiper
        spaceBetween={8}
        className="aspect-square rounded overflow-hidden"
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {Array.from({ length: 18 }).map((_, i) => (
          <SwiperSlide key={i}>
            <div
              onClick={handleImageClick}
              className="cursor-pointer relative w-full h-full"
            >
              <Image
                src={`/testimonials/${i + 1}.png`}
                alt={`Slide ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MiniTestimonial;
