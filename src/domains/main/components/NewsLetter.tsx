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
import { useRouter } from 'next/navigation';
import type { NewsItem } from '@/lib/news-db';

interface NewsCardProps {
  news: NewsItem;
  locale: string;
}

const NewsCard = ({ news, locale }: NewsCardProps) => {
  const router = useRouter();
  // 날짜 포맷팅 (ISO 형식 또는 기존 형식 모두 처리)
  const formatDate = (dateStr: string) => {
    try {
      // ISO 형식인 경우 (YYYY-MM-DD)
      if (dateStr.includes('-') && dateStr.length >= 10) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        });
      }
      // 기존 형식인 경우 (DD/MM/YYYY) 그대로 반환
      return dateStr;
    } catch {
      return dateStr;
    }
  };

  // 숫자 ID 사용 (displayId 우선, 없으면 id 사용)
  // id가 UUID일 수 있으므로 displayId를 우선 사용
  const newsId = news.displayId?.toString() || news.id;

  return (
    <div
      className="shadow-xl w-280 2xl:w-320 h-[390px] flex flex-col bg-white overflow-hidden cursor-pointer"
      onClick={() => {
        router.push(`/${locale}/news/${newsId}`);
      }}
    >
      <div className="w-full h-[180px] overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          width={288}
          height={180}
          className="object-cover w-full h-full"
          unoptimized={
            // 로컬 경로(/로 시작)가 아닌 경우에만 unoptimized 적용
            !news.image.startsWith('/') &&
            (news.image.includes('r2.cloudflarestorage.com') ||
              news.image.startsWith('http'))
          }
        />
      </div>
      <div className="flex flex-col flex-1 px-12 py-8">
        <div className="flex justify-between items-center text-xs text-neutral-500 mb-2">
          <span>{news.category}</span>
          <span>{formatDate(news.date)}</span>
        </div>
        <h3 className="font-semibold mb-2">{news.title}</h3>
        <p className="font-[family-name:var(--font-inter)] text-sm text-neutral-400 line-clamp-4">
          {news.description}
        </p>
      </div>
    </div>
  );
};

interface NewsLetterProps {
  newsList: NewsItem[];
  locale: string;
}

function NewsLetter({ newsList, locale }: NewsLetterProps) {
  const tNews = useTranslations('news');
  return (
    <section className="flex flex-col items-center justify-center py-20 md:py-40">
      <h2 className="text-3xl md:text-5xl font-bold md:py-50">
        {tNews('bannerTitle')}
      </h2>

      <Swiper
        modules={[Autoplay, Scrollbar]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={newsList.length > 4}
        className="flex items-center justify-center md:justify-between w-full md:max-w-[1800px] md:w-full mx-auto h-420 md:h-460 mt-60"
        slidesPerView={isMobile ? 1 : isTablet ? 3 : 5}
        spaceBetween={0}
      >
        {newsList.map((news) => (
          <SwiperSlide key={news.displayId || news.id} className="">
            <NewsCard news={news} locale={locale} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Link
        href={`/${locale}/news`}
        className="bg-black text-white px-20 py-10"
      >
        {tNews('readMore')}
      </Link>
    </section>
  );
}

export default NewsLetter;
