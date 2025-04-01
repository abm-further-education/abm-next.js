'use client';
import React from 'react';
import Image from 'next/image';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { isMobile } from 'react-device-detect';

import 'swiper/css';
import 'swiper/css/autoplay';

function Testimonial() {
  return (
    <section className="flex flex-col items-center justify-center py-50">
      <h2 className="text-3xl md:text-5xl font-bold py-50">Testomonial</h2>
      <p className="text-sm md:text-base text-neutral-700 max-w-800 text-center">
        Where do you see yourself happily working in nearest future?
      </p>
      <Swiper
        navigation
        modules={[Navigation, Autoplay, Pagination, Scrollbar]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        className="w-full h-560 mt-60"
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={30}
      >
        {Array.from({ length: 18 }).map((_, index) => (
          <SwiperSlide key={index} className="relative">
            <Image
              src={`/testimonials/${index + 1}.png`}
              alt="banner_image"
              fill
              className="md:object-center object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonial;

const slides = [
  { imgPath: '/home/home.png' },
  { imgPath: '/home/home.png' },
  { imgPath: '/home/home.png' },
  { imgPath: '/home/home.png' },
  { imgPath: '/home/home.png' },
  { imgPath: '/home/home.png' },
];
