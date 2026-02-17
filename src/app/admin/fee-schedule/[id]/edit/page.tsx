import { redirect, notFound } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import { getFeeSchedulePageById } from '@/lib/fee-schedule-db';
import FeeScheduleForm from '../../FeeScheduleForm';
import AdminBackButton from '@/components/admin/AdminBackButton';

interface EditFeeSchedulePageProps {
  params: Promise<{ id: string }>;
}

export default async function EditFeeSchedulePage({
  params,
}: EditFeeSchedulePageProps) {
  const session = await getAdminSession();

  if (!session) {
    redirect('/admin/login');
  }

  const { id } = await params;
  const page = await getFeeSchedulePageById(id);

  if (!page) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <AdminBackButton href="/admin/fee-schedule" label="Back to Fee Schedules" />
        </div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Edit Fee Schedule {page.year}
          </h1>
          <p className="text-gray-600">
            Update the fee schedule, pricing, and payment information.
          </p>
        </div>
        <FeeScheduleForm initialData={page} />
      </div>
    </div>
  );
}
