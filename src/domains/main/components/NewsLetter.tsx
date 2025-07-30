'use client';
import React from 'react';
import Image from 'next/image';
import { Autoplay, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { isMobile, isTablet } from 'react-device-detect';

import 'swiper/css';
import 'swiper/css/autoplay';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { newsData, NewsItem } from '@/lib/news';
import { useRouter } from 'next/navigation';

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard = ({ news }: NewsCardProps) => {
  const router = useRouter();
  return (
    <div
      className="shadow-xl w-320 h-[390px] flex flex-col bg-white overflow-hidden cursor-pointer"
      onClick={() => {
        router.push(`/news/${news.id}`);
      }}
    >
      <div className="w-full h-[180px] overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          width={288}
          height={180}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col flex-1 px-12 py-8">
        <div className="flex justify-between items-center text-xs text-neutral-500 mb-2">
          <span>{news.category}</span>
          <span>{news.date}</span>
        </div>
        <h3 className="font-semibold mb-2">{news.title}</h3>
        <p className="font-[family-name:var(--font-inter)] text-sm text-neutral-400 line-clamp-4">
          {news.description}
        </p>
      </div>
    </div>
  );
};
function NewsLetter() {
  const tNews = useTranslations('news');
  return (
    <section className="flex flex-col items-center justify-center py-20 md:py-40">
      <h2 className="text-3xl md:text-5xl font-bold md:py-50">
        {tNews('bannerTitle')}
      </h2>

      <Swiper
        navigation
        modules={[Autoplay, Scrollbar]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="flex items-center justify-center md:justify-between w-full md:max-w-[1400px] md:w-full mx-auto h-420 md:h-500 mt-60"
        slidesPerView={isMobile ? 1 : isTablet ? 3 : 4}
        spaceBetween={30}
      >
        {newsData.map((news) => (
          <SwiperSlide key={news.id} className="">
            <NewsCard news={news} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Link href="/news" className="bg-black text-white px-20 py-10">
        {tNews('readMore')}
      </Link>
    </section>
  );
}

export default NewsLetter;
