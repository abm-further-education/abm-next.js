import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getNewsById, getNewsList } from '@/lib/news-db';
import { newsData } from '@/lib/news';
import Banner from '@/components/common/Banner';
import { ChevronLeftIcon } from 'lucide-react';
import type { NewsItem } from '@/lib/news-db';
import { getR2ImageUrl } from '@/lib/r2';
import NewsContent from '@/components/news/NewsContent';

// 동적 라우트를 강제로 동적 렌더링으로 설정
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface NewsDetailProps {
  params: Promise<{
    locale: string;
    id: string;
  }>;
}

export default async function NewsDetailPage({ params }: NewsDetailProps) {
  const { locale, id } = await params;

  console.log('NewsDetailPage - locale:', locale, 'id:', id);

  // Supabase에서 뉴스 가져오기 시도
  let news: NewsItem | null = null;
  try {
    news = await getNewsById(id, true); // publishedOnly = true
    console.log('NewsDetailPage - news found:', news ? 'yes' : 'no');
    if (news) {
      console.log(
        'NewsDetailPage - news content:',
        news.content ? 'has content' : 'no content'
      );
      console.log(
        'NewsDetailPage - news description:',
        news.description ? 'has description' : 'no description'
      );
    }
  } catch (error) {
    console.error('Error fetching news from Supabase:', error);
    // 에러 상세 정보 로깅
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
  }

  // Supabase에서 찾지 못하면 기존 데이터에서 찾기
  if (!news) {
    const numericId = parseInt(id, 10);
    const oldNews = newsData.find((item) => item.id === numericId);
    if (oldNews) {
      news = {
        id: oldNews.id.toString(),
        displayId: oldNews.id as number,
        dbId: oldNews.id.toString(),
        title: oldNews.title,
        description: oldNews.description,
        content: oldNews.content || null,
        image: oldNews.image,
        category: oldNews.category,
        date: convertDateToISO(oldNews.date),
        link: oldNews.link || null,
        published: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
    }
  }

  if (!news) {
    notFound();
  }

  // R2 이미지 URL 변환
  const newsImageUrl = await getR2ImageUrl(news.image);

  // 관련 뉴스 가져오기
  let relatedNewsList: NewsItem[] = [];
  try {
    const allNews = await getNewsList(true);
    relatedNewsList = allNews
      .filter((item) => item.displayId !== news!.displayId)
      .slice(0, 2);

    // 관련 뉴스 이미지 URL도 변환
    relatedNewsList = await Promise.all(
      relatedNewsList.map(async (item) => ({
        ...item,
        image: await getR2ImageUrl(item.image),
      }))
    );
  } catch {
    // 에러 발생 시 기존 데이터에서 관련 뉴스 찾기
    const numericId = parseInt(id, 10);
    relatedNewsList = newsData
      .filter((item) => item.id !== numericId)
      .slice(0, 2)
      .map((item) => ({
        id: item.id.toString(),
        displayId: item.id as number,
        dbId: item.id.toString(),
        title: item.title,
        description: item.description,
        content: item.content,
        image: item.image,
        category: item.category,
        date: convertDateToISO(item.date),
        link: item.link || null,
        published: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }));
  }

  console.log(news);

  return (
    <div className="min-h-screen">
      <Banner
        slides={[
          {
            imgPath: newsImageUrl,
            title: news.title,
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/50 w-full h-screen md:h-700 absolute z-10" />
        }
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
            <span className="text-gray-500">
              {new Date(news.date).toLocaleDateString()}
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-24">{news.title}</h1>
        </div>

        <div className="relative h-280 mb-16 overflow-hidden">
          <Image
            src={newsImageUrl}
            alt={news.title}
            fill
            className="object-cover"
            unoptimized={
              // 로컬 경로(/로 시작)가 아닌 경우에만 unoptimized 적용
              !newsImageUrl.startsWith('/') &&
              (newsImageUrl.includes('r2.cloudflarestorage.com') ||
                newsImageUrl.startsWith('http'))
            }
          />
        </div>

        <div className="prose prose-lg max-w-none">
          {/* content가 있으면 HTML로 렌더링, 없으면 description을 표시 */}
          {news.content ? (
            <NewsContent content={news.content} />
          ) : (
            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {news.description}
            </p>
          )}
        </div>

        {relatedNewsList.length > 0 && (
          <div className="mt-22 md:mt-32 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-6">Related News</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedNewsList.map((relatedNews) => (
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
                        unoptimized={
                          // 로컬 경로(/로 시작)가 아닌 경우에만 unoptimized 적용
                          !relatedNews.image.startsWith('/') &&
                          (relatedNews.image.includes('r2.cloudflarestorage.com') ||
                            relatedNews.image.startsWith('http'))
                        }
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
        )}
      </div>
    </div>
  );
}

function convertDateToISO(dateStr: string): string {
  // DD/MM/YYYY 형식을 YYYY-MM-DD로 변환
  const [day, month, year] = dateStr.split('/');
  return `${year}-${month}-${day}`;
}
