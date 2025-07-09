'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import FadeInBottomToTop from './FadeInBottomToTop';
import MiniTestimonial from './MiniTestimonial';

type Props = {
  slides: { imgPath: string; title: string; content?: string }[];
  dimmed?: React.ReactNode;
  isNeedContactBtn?: boolean;
};

function Banner({ slides, dimmed, isNeedContactBtn }: Props) {
  const isVideo = (path: string) => {
    return path?.match(/\.(mp4|webm|ogg)$/i) || path.includes('youtube');
  };

  return (
    <div className="w-full h-[calc(100vh-160px)] md:h-700 relative">
      <Swiper
        navigation
        modules={[Navigation, Autoplay, Pagination, Scrollbar]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        className="w-full h-full"
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {dimmed && dimmed}
            {isVideo(slide.imgPath) ? (
              <iframe
                className="w-full h-full"
                src={`${slide.imgPath}&autoplay=1&mute=1&loop=1&playlist=MuePUlkXUZA`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ) : (
              <Image
                src={slide.imgPath}
                alt="banner_image"
                fill
                className="md:object-top object-cover"
              />
            )}

            <div className="absolute px-40 inset-0 flex flex-col justify-end z-20 pb-50">
              <FadeInBottomToTop>
                <h1
                  className={cn(
                    `text-white text-4xl md:text-6xl font-bold drop-shadow-lg`,
                    isNeedContactBtn ? 'pb-50' : 'pb-0'
                  )}
                >
                  {slide.title}
                </h1>
              </FadeInBottomToTop>

              <Link
                target="_blank"
                href="/files/ABM_Brochure_2025_Web_F.pdf"
                className={`font-[family-name:var(--font-montserrat)] text-white! py-10 px-20 bg-black md:w-max h-max mt-20 hover:bg-primary transition-all`}
              >
                DOWNLOAD 2025 International Student Guidebook
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <MiniTestimonial />
    </div>
  );
}

export default Banner;
