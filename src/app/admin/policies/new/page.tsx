import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import PolicyDocumentForm from '@/components/admin/PolicyDocumentForm';
import { createPolicyDocumentAction } from '../actions';
import AdminBackButton from '@/components/admin/AdminBackButton';

export default async function NewPolicyDocumentPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect('/admin/login');
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
              Add New Policy Document
            </h1>
            <p className="text-gray-600">
              Upload a new policy or procedure document.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <PolicyDocumentForm
            mode="create"
            onSubmit={async (formData: FormData) => {
              'use server';
              return createPolicyDocumentAction(formData);
            }}
          />
        </div>
      </div>
    </div>
  );
}
