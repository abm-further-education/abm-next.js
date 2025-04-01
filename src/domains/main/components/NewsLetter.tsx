'use client';
import React from 'react';
import Image from 'next/image';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { isMobile } from 'react-device-detect';

import 'swiper/css';
import 'swiper/css/autoplay';

const NewsCard = () => {
  return (
    <div className="shadow-xl h-400 w-300 md:w-400 relative">
      <Image
        src="/home/home.png"
        alt="news_image"
        width={400}
        height={200}
        className="object-cover"
      />
      <div className="flex items-center justify-between px-24 mt-14 font-[family-name:var(--font-inter)]">
        <span>Event</span>
        <span>20/08/2020</span>
      </div>
      <div className="px-20 mt-20">
        <h3 className="font-semibold">
          A Special Day: ABM’s Graduation Ceremony Highlights
        </h3>
        <p className="font-[family-name:var(--font-inter)] text-sm mt-10">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration....
        </p>
      </div>
    </div>
  );
};
function NewsLetter() {
  return (
    <section className="flex flex-col items-center justify-center md:py-50">
      <h2 className="text-3xl md:text-5xl font-bold py-50">Latest News</h2>

      <Swiper
        navigation
        modules={[Navigation, Autoplay, Pagination, Scrollbar]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        className="flex items-center justify-between max-w-[1400px] w-full mx-auto h-560 mt-60"
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={30}
      >
        <SwiperSlide className="relative">
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <NewsCard />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default NewsLetter;
