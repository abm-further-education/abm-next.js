import NewsClient from './NewsClient';
import { getNewsList } from '@/lib/news-db';
import { newsData } from '@/lib/news';
import { getR2ImageUrl } from '@/lib/r2';

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Supabase에서 뉴스 가져오기 시도, 실패하면 기존 데이터 사용
  let newsList;
  try {
    newsList = await getNewsList(true);
    // R2 이미지 URL 변환
    newsList = await Promise.all(
      newsList.map(async (news) => ({
        ...news,
        image: await getR2ImageUrl(news.image),
      }))
    );
    // Supabase 데이터가 없으면 기존 데이터 사용 (호환성을 위해 변환)
    if (newsList.length === 0) {
      newsList = newsData.map((news) => ({
        id: news.id.toString(),
        displayId: news.id as number,
        dbId: news.id.toString(),
        title: news.title,
        description: news.description,
        content: news.content || null,
        image: news.image,
        category: news.category,
        date: convertDateToISO(news.date),
        link: news.link || null,
        published: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }));
    }
  } catch (error) {
    console.error('Error fetching news from Supabase:', error);
    // 에러 발생 시 기존 데이터 사용
    newsList = newsData.map((news) => ({
      id: news.id.toString(),
      displayId: news.id as number,
      dbId: news.id.toString(),
      title: news.title,
      description: news.description,
      content: news.content || null,
      image: news.image,
      category: news.category,
      date: convertDateToISO(news.date),
      link: news.link || null,
      published: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }));
  }

  return <NewsClient locale={locale} newsList={newsList} />;
}

function convertDateToISO(dateStr: string): string {
  // DD/MM/YYYY 형식을 YYYY-MM-DD로 변환
  const [day, month, year] = dateStr.split('/');
  return `${year}-${month}-${day}`;
}
