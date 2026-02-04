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
import MiniTestimonialWrapper from './MiniTestimonialWrapper';

type Props = {
  slides: {
    imgPath: string;
    title: string;
    content?: string;
    subtitle?: string;
    linkButton?: {
      href: string;
      text: string;
      target?: string;
    };
  }[];
  dimmed?: React.ReactNode;
  isNeedContactBtn?: boolean;
  autoplayDelay?: number;
};

function Banner({
  slides,
  dimmed,
  isNeedContactBtn,
  autoplayDelay = 4000,
}: Props) {
  const isVideo = (path: string) => {
    return path?.match(/\.(mp4|webm|ogg)$/i) || path.includes('youtube');
  };

  /**
   * YouTube URL에서 video ID를 추출합니다
   * @param url - YouTube embed URL (예: https://www.youtube.com/embed/VIDEO_ID)
   * @returns video ID 또는 null
   */
  const extractVideoId = (url: string): string | null => {
    if (!url.includes('youtube.com/embed/')) {
      return null;
    }
    // https://www.youtube.com/embed/VIDEO_ID?si=... 형식에서 VIDEO_ID 추출
    const match = url.match(/youtube\.com\/embed\/([^?&]+)/);
    return match ? match[1] : null;
  };

  return (
    <div className="w-full h-[calc(100vh-160px)] md:h-700 relative">
      <Swiper
        navigation
        modules={[Navigation, Autoplay, Pagination, Scrollbar]}
        autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
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
                src={(() => {
                  const videoId = extractVideoId(slide.imgPath);
                  if (videoId) {
                    // YouTube URL인 경우 video ID를 playlist에 사용
                    const separator = slide.imgPath.includes('?') ? '&' : '?';
                    return `${slide.imgPath}${separator}autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0`;
                  }
                  // 일반 비디오 파일인 경우 기존 로직 유지
                  return `${slide.imgPath}&autoplay=1&mute=1&loop=1&controls=0`;
                })()}
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
                quality={100}
                className="md:object-center object-cover"
              />
            )}

            <div className="absolute px-40 md:px-80 inset-0 flex flex-col justify-end z-20 pb-50">
              <FadeInBottomToTop>
                <h1
                  className={cn(
                    `text-white text-4xl md:text-6xl font-bold drop-shadow-lg max-w-1000`,
                    isNeedContactBtn ? 'pb-50' : 'pb-0',
                  )}
                >
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <h2 className="font-[family-name:var(--font-montserrat)] text-white text-xl md:text-2xl font-bold drop-shadow-lg max-w-1000 pt-10">
                    {slide.subtitle}
                  </h2>
                )}
                {slide.content && (
                  <p className="font-[family-name:var(--font-montserrat)] text-white text-base leading-tight md:text-2xl drop-shadow-lg max-w-1000 pt-10 font-normal whitespace-pre-line">
                    {slide.content}
                  </p>
                )}
              </FadeInBottomToTop>

              {slide.linkButton ? (
                <Link
                  target={slide.linkButton.target || '_blank'}
                  href={slide.linkButton.href}
                  className={`font-[family-name:var(--font-montserrat)] text-white! py-10 px-20 bg-primary text-center md:w-max h-max mt-20 hover:bg-primary-bk transition-all`}
                >
                  {slide.linkButton.text}
                </Link>
              ) : (
                <Link
                  target="_blank"
                  href="/files/ABM_Brochure_2026_final_web.pdf"
                  className={`font-[family-name:var(--font-montserrat)] text-white! py-10 px-20 bg-primary text-center md:w-max h-max mt-20 hover:bg-primary-bk transition-all`}
                >
                  ABM Course Guide 2026
                </Link>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <MiniTestimonialWrapper />
    </div>
  );
}

export default Banner;
