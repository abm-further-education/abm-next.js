import { redirect, notFound } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import { getEntryRequirementPageById } from '@/lib/entry-requirement-db';
import EntryRequirementForm from '../../EntryRequirementForm';
import AdminBackButton from '@/components/admin/AdminBackButton';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditEntryRequirementPage({ params }: PageProps) {
  const session = await getAdminSession();

  if (!session) {
    redirect('/admin/login');
  }

  const { id } = await params;
  const page = await getEntryRequirementPageById(id);

  if (!page) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <AdminBackButton href="/admin" label="Back to Dashboard" />
        </div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Edit Entry Requirement Page
          </h1>
          <p className="text-gray-600">
            Update the entry requirement page content and translations.
          </p>
        </div>
        <EntryRequirementForm initialData={page} />
      </div>
    </div>
  );
}
