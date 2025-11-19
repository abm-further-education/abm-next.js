import { redirect, notFound } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import { getNewsById } from '@/lib/news-db';
import NewsForm from '@/components/admin/NewsForm';

export default async function EditNewsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await getAdminSession();

  if (!session) {
    redirect('/admin/login');
  }

  // published 여부와 관계없이 모든 뉴스 가져오기
  const news = await getNewsById(id, false);

  if (!news) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Edit Newsletter
          </h1>
          <p className="text-gray-600">Edit the newsletter.</p>
        </div>

        <div className="bg-white rounded-lg p-6">
          <NewsForm mode="edit" news={news} />
        </div>
      </div>
    </div>
  );
}
