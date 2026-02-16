import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import { getAllPolicyDocuments } from '@/lib/policy-documents-db';
import Link from 'next/link';
import { PlusIcon, FileText } from 'lucide-react';
import DeletePolicyButton from './DeletePolicyButton';
import AdminBackButton from '@/components/admin/AdminBackButton';

export default async function PoliciesListPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect('/admin/login');
  }

  const documents = await getAllPolicyDocuments();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <AdminBackButton />
        </div>
        <div className="bg-white rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Policy Documents Management
              </h1>
              <p className="text-gray-600">
                Manage ABM policies, procedures and forms.
              </p>
            </div>
            <Link
              href="/admin/policies/new"
              className="px-4 py-2 bg-primary-bk text-white rounded-md hover:bg-white transition-colors flex items-center"
            >
              <PlusIcon className="w-14 h-14 mr-2" />
              Add Document
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6">
          {documents.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p>No policy documents registered.</p>
              <Link
                href="/admin/policies/new"
                className="mt-4 inline-block text-blue-600 hover:text-blue-800"
              >
                Add the first document
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Filename
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Updated
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {documents.map((doc) => (
                    <tr key={doc.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {doc.display_order}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {doc.title}
                        </div>
                        {doc.description && (
                          <div className="text-xs text-gray-500 mt-1 truncate max-w-xs">
                            {doc.description}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-red-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600 truncate max-w-[200px]">
                            {doc.filename}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            doc.is_active
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {doc.is_active ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(doc.updated_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center gap-3">
                          <Link
                            href={`/admin/policies/${doc.id}/edit`}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            Edit
                          </Link>
                          <DeletePolicyButton
                            id={doc.id}
                            title={doc.title}
                            fileUrl={doc.file_url}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
