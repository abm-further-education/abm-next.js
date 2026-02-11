import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getAdminSession } from '@/lib/auth';
import LogoutButton from './LogoutButton';

export default async function AdminPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Admin Dashboard
              </h1>
              <p className="text-gray-600">Welcome, {session.user.email}</p>
            </div>
            <div className="flex gap-3 items-center">
              <Link
                href="/"
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
              >
                ← Back to Website
              </Link>
              <LogoutButton />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Management Menu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/users"
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-800 mb-2">User List</h3>
              <p className="text-sm text-gray-600">View and manage user list</p>
            </Link>
            <Link
              href="/admin/news"
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-800 mb-2">
                News Management
              </h3>
              <p className="text-sm text-gray-600">
                Write and manage newsletters
              </p>
            </Link>
            <Link
              href="/admin/courses"
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-800 mb-2">
                Course Management
              </h3>
              <p className="text-sm text-gray-600">
                Manage courses, translations, details & short courses
              </p>
            </Link>
            <Link
              href="/admin/testimonials"
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-800 mb-2">
                Testimonials Management
              </h3>
              <p className="text-sm text-gray-600">Manage testimonials</p>
            </Link>
            <Link
              href="/admin/testimonials/migrate"
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-800 mb-2">
                Migrate Testimonials
              </h3>
              <p className="text-sm text-gray-600">
                Migrate testimonials to database
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
