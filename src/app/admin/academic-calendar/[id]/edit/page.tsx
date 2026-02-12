export const dynamic = 'force-dynamic';

import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import { getAdminSession } from '@/lib/auth';
import { getAcademicEventById } from '@/lib/academic-calendar-db';
import AcademicEventForm from '@/components/admin/AcademicEventForm';

interface EditAcademicEventPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditAcademicEventPage({
  params,
}: EditAcademicEventPageProps) {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  const { id } = await params;
  const event = await getAcademicEventById(id);

  if (!event) {
    notFound();
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
            Edit Event: {event.title}
          </h1>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <AcademicEventForm mode="edit" event={event} />
        </div>
      </div>
    </div>
  );
}
