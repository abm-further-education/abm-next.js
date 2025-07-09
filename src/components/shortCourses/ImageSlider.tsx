'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image';

const images = [
  '/short-course/barista_1.jpg',
  '/short-course/barista_2.jpg',
  '/short-course/barista_1.jpg',
  '/short-course/barista_1.jpg',
  '/short-course/barista_1.jpg',
];

export default function ImageSlider() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="w-full max-w-300 md:max-w-450 mx-auto">
      {/* Main Slider */}
      <Swiper
        modules={[Thumbs]}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        className="aspect-square"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={src}
              alt={`Slide ${idx + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="mt-4"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx} className="aspect-square cursor-pointer">
            <div className="relative w-full h-0 pb-[100%]">
              <Image
                src={src}
                alt={`Thumbnail ${idx + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
