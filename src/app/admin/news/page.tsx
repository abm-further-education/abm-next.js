import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import { getNewsList } from '@/lib/news-db';
import Link from 'next/link';
import { PencilIcon, PlusIcon } from 'lucide-react';
import AdminBackButton from '@/components/admin/AdminBackButton';

export default async function NewsListPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect('/admin/login');
  }

  const newsList = await getNewsList(); // 모든 뉴스 (게시/비게시 포함)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <AdminBackButton />
        </div>
        <div className="bg-white rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                News Management
              </h1>
              <p className="text-gray-600">Manage newsletters.</p>
            </div>
            <Link
              href="/admin/news/new"
              className="px-4 py-2 bg-primary-bk text-white rounded-md hover:bg-white transition-colors flex items-center"
            >
              <PlusIcon className="w-14 h-14 mr-2" />
              Add News
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6">
          {newsList.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No news registered.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {newsList.map((news) => (
                    <tr key={news.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {news.title}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="p-6 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">
                          {news.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(news.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`p-6 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            news.published
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {news.published ? 'Published' : 'Unpublished'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link
                          href={`/admin/news/${news.id}/edit`}
                          className="flex items-center gap-x-2"
                        >
                          <PencilIcon className="w-16 h-16" />
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
