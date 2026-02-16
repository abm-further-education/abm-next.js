import { redirect, notFound } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import { getPolicyDocumentById } from '@/lib/policy-documents-db';
import PolicyDocumentForm from '@/components/admin/PolicyDocumentForm';
import {
  updatePolicyDocumentAction,
  deletePolicyDocumentAction,
} from '../../actions';
import AdminBackButton from '@/components/admin/AdminBackButton';

interface EditPolicyDocumentPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditPolicyDocumentPage({
  params,
}: EditPolicyDocumentPageProps) {
  const session = await getAdminSession();

  if (!session) {
    redirect('/admin/login');
  }

  const { id } = await params;
  const document = await getPolicyDocumentById(id);

  if (!document) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-4">
          <AdminBackButton href="/admin/policies" label="Policies" />
        </div>
        <div className="bg-white rounded-lg p-6 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Edit Policy Document
            </h1>
            <p className="text-gray-600">{document.title}</p>
          </div>
        </div>

        <div className="bg-white p-6">
          <PolicyDocumentForm
            mode="edit"
            initialData={document}
            onSubmit={async (formData: FormData) => {
              'use server';
              return updatePolicyDocumentAction(id, formData);
            }}
            onDelete={async () => {
              'use server';
              return deletePolicyDocumentAction(id, document.file_url);
            }}
          />
        </div>
      </div>
    </div>
  );
}
