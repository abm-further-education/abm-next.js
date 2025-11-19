'use client';
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Banner from '@/components/common/Banner';
import { useTranslations } from 'next-intl';
import type { NewsItem } from '@/lib/news-db';

interface NewsClientProps {
  locale: string;
  newsList: NewsItem[];
}

export default function NewsClient({ locale, newsList }: NewsClientProps) {
  const t = useTranslations('news');

  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  // 날짜 파싱 및 정렬
  const sortedNews = useMemo(() => {
    const sorted = [...newsList].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
    return sorted;
  }, [sortOrder, newsList]);

  // 검색 필터
  const filteredNews = useMemo(() => {
    if (!search.trim()) return sortedNews;
    const q = search.toLowerCase();
    return sortedNews.filter(
      (news) =>
        news.title.toLowerCase().includes(q) ||
        news.description.toLowerCase().includes(q) ||
        news.category.toLowerCase().includes(q)
    );
  }, [search, sortedNews]);

  return (
    <div className="min-h-screen">
      <Banner
        slides={[
          {
            imgPath: '/home/home.png',
            title: t('bannerTitle'),
          },
        ]}
      />

      <div className="container mx-auto px-4 py-16">
        <p className="text-lg text-gray-700 mb-6 font-medium">{t('intro')}</p>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-20 gap-4">
          {/* 검색 인풋 */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t('searchPlaceholder')}
            className="w-full md:w-480 border border-gray-300 px-4 py-5 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {/* 정렬 필터 */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <span className="text-sm text-gray-600 font-medium mr-2">
              {t('sortBy')}
            </span>
            <button
              className={`px-4 py-2 border border-gray-300 text-sm font-medium ${
                sortOrder === 'newest'
                  ? 'bg-primary-bk text-white'
                  : 'bg-white text-gray-700'
              }`}
              onClick={() => setSortOrder('newest')}
            >
              {t('newest')}
            </button>
            <button
              className={`px-4 py-2 border border-gray-300 text-sm font-medium ${
                sortOrder === 'oldest'
                  ? 'bg-primary-bk text-white'
                  : 'bg-white text-gray-700'
              }`}
              onClick={() => setSortOrder('oldest')}
            >
              {t('oldest')}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {filteredNews.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-20">
              {t('noResults')}
            </div>
          ) : (
            filteredNews.map((news) => {
              // 숫자 ID 사용 (displayId 우선, 없으면 id 사용)
              // id가 UUID일 수 있으므로 displayId를 우선 사용
              const newsId = news.displayId?.toString() || news.id;
              return (
              <Link key={news.id} href={`/${locale}/news/${newsId}`}>
                <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-280">
                  <div className="relative h-100">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-12">
                    <div className="flex items-center justify-between mb-14">
                      <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 ">
                        {news.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {new Date(news.date).toLocaleDateString()}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                      {news.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 whitespace-pre-line">
                      {news.description}
                    </p>
                  </div>
                </div>
              </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
