export const dynamic = 'force-dynamic';

import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import AcademicEventForm from '@/components/admin/AcademicEventForm';
import AdminBackButton from '@/components/admin/AdminBackButton';

export default async function NewAcademicEventPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <AdminBackButton href="/admin/academic-calendar" label="Academic Calendar" />
        </div>
        <div className="mb-6">
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
