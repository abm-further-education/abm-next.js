import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import {
  getAllFeeSchedulePages,
  getFeeSchedulePageById,
} from '@/lib/fee-schedule-db';
import FeeScheduleForm from './FeeScheduleForm';
import AdminBackButton from '@/components/admin/AdminBackButton';

export default async function FeeSchedulePage() {
  const session = await getAdminSession();

  if (!session) {
    redirect('/admin/login');
  }

  const pages = await getAllFeeSchedulePages();
  let pageWithTranslations = null;

  if (pages.length > 0) {
    pageWithTranslations = await getFeeSchedulePageById(pages[0].id);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <AdminBackButton />
        </div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Fee Schedule Management
          </h1>
          <p className="text-gray-600">
            Manage fee schedule content across all languages.
          </p>
        </div>
        <FeeScheduleForm initialData={pageWithTranslations ?? undefined} />
      </div>
    </div>
  );
}
