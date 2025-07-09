import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { newsData } from '@/lib/constants';
import Banner from '@/components/common/Banner';

interface NewsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function NewsPage({ params }: NewsPageProps) {
  const { locale } = await params;

  return (
    <div className="min-h-screen">
      <Banner
        slides={[
          {
            imgPath: '/home/home.png',
            title: 'Latest News',
          },
        ]}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {news.category}
                  </span>
                  <span className="text-gray-500 text-sm">{news.date}</span>
                </div>

                <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                  {news.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {news.description}
                </p>

                <Link
                  href={`/${locale}/news/${news.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read More
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
