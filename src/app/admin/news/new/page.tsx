import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import NewsForm from '@/components/admin/NewsForm';

export default async function NewNewsPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen mt-140">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              New Newsletter
            </h1>
            <p className="text-gray-600">Write a new newsletter.</p>
          </div>

          <div className="bg-white rounded-lg p-6">
            <NewsForm mode="create" />
          </div>
        </div>
      </div>
    </div>
  );
}
