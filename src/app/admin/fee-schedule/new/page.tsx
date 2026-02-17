import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import FeeScheduleForm from '../FeeScheduleForm';
import AdminBackButton from '@/components/admin/AdminBackButton';

export default async function NewFeeSchedulePage() {
  const session = await getAdminSession();

  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <AdminBackButton href="/admin/fee-schedule" label="Back to Fee Schedules" />
        </div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Create New Fee Schedule
          </h1>
          <p className="text-gray-600">
            Set up a new fee schedule with all pricing and payment information.
          </p>
        </div>
        <FeeScheduleForm />
      </div>
    </div>
  );
}
