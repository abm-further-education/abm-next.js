import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import EntryRequirementForm from '../EntryRequirementForm';
import AdminBackButton from '@/components/admin/AdminBackButton';

export default async function NewEntryRequirementPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <AdminBackButton href="/admin/entry-requirements" label="Back to Entry Requirements" />
        </div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Create Entry Requirement Page
          </h1>
          <p className="text-gray-600">
            Set up a new course entry requirement page with all sections.
          </p>
        </div>
        <EntryRequirementForm />
      </div>
    </div>
  );
}
