export const dynamic = 'force-dynamic';

import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getAdminSession } from '@/lib/auth';
import AcademicEventForm from '@/components/admin/AcademicEventForm';

export default async function NewAcademicEventPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link
            href="/admin/academic-calendar"
            className="text-orange-600 hover:text-orange-800 text-sm font-medium"
          >
            &larr; Back to Academic Calendar
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 mt-2">
            Create New Event
          </h1>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <AcademicEventForm mode="create" />
        </div>
      </div>
    </div>
  );
}
