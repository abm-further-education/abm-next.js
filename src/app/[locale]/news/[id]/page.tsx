import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { newsData } from '@/lib/constants';
import Banner from '@/components/common/Banner';
import { ChevronLeftIcon } from 'lucide-react';

interface NewsDetailProps {
  params: Promise<{
    locale: string;
    id: string;
  }>;
}

export default async function NewsDetailPage({ params }: NewsDetailProps) {
  const { locale, id } = await params;

  const news = newsData.find((item) => item.id === parseInt(id));

  if (!news) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Banner
        slides={[
          {
            imgPath: news.image,
            title: news.title,
          },
        ]}
      />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8">
          <Link
            href={`/${locale}/news`}
            className="inline-flex items-center text-neutral-500 hover:text-orange-800 font-medium mb-4"
          >
            <ChevronLeftIcon />
            Back to List
          </Link>

          <div className="flex items-center justify-between mb-26">
            <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 ">
              {news.category}
            </span>
            <span className="text-gray-500">{news.date}</span>
          </div>

          <h1 className="text-4xl font-bold mb-24">{news.title}</h1>
        </div>

        <div className="relative h-280 mb-16 overflow-hidden">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {news.description}
          </p>

          {/* 여기에 실제 뉴스 내용을 추가할 수 있습니다 */}
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Key Highlights</h2>

            <ul className="list-disc list-inside space-y-2">
              <li>Enhanced learning opportunities for students</li>
              <li>Stronger industry partnerships and connections</li>
              <li>Modern facilities and equipment</li>
              <li>Expert guidance from experienced professionals</li>
            </ul>

            <p className="mt-6">
              For more information about our programs and upcoming events,
              please contact ABM Further Education or visit our campus.
            </p>
          </div>
        </div>

        <div className="mt-22 md:mt-32 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold mb-6">Related News</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsData
              .filter((item) => item.id !== news.id)
              .slice(0, 2)
              .map((relatedNews) => (
                <Link
                  href={`/${locale}/news/${relatedNews.id}`}
                  key={relatedNews.id}
                >
                  <div className="bg-white shadow-md overflow-hidden">
                    <div className="relative h-120">
                      <Image
                        src={relatedNews.image}
                        alt={relatedNews.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 mb-10">
                        {relatedNews.category}
                      </span>
                      <h4 className="text-lg font-semibold mt-2 line-clamp-2 mb-12">
                        {relatedNews.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {relatedNews.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
