import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import MigrateNewsForm from './MigrateNewsForm';
import { newsData } from '@/lib/news';

export default async function MigrateNewsPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen mt-140">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Migrate News Data to Supabase
            </h1>
            <p className="text-gray-600">
              Migrate existing news data to Supabase.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Total {newsData.length} news items.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <MigrateNewsForm newsData={newsData} />
          </div>
        </div>
      </div>
    </div>
  );
}
