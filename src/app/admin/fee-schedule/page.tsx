import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import { getAllFeeSchedulePages } from '@/lib/fee-schedule-db';
import Link from 'next/link';
import { PlusIcon, DollarSign, PencilIcon } from 'lucide-react';
import DeleteFeeScheduleButton from './DeleteFeeScheduleButton';
import AdminBackButton from '@/components/admin/AdminBackButton';

export default async function FeeScheduleListPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect('/admin/login');
  }

  const pages = await getAllFeeSchedulePages();

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
                Fee Schedule Management
              </h1>
              <p className="text-gray-600">
                Manage fee schedules, pricing, and payment information.
              </p>
            </div>
            <Link
              href="/admin/fee-schedule/new"
              className="px-4 py-2 bg-primary-bk text-white rounded-md hover:bg-white transition-colors flex items-center"
            >
              <PlusIcon className="w-14 h-14 mr-2" />
              Add Fee Schedule
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6">
          {pages.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <DollarSign className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p>No fee schedules registered.</p>
              <Link
                href="/admin/fee-schedule/new"
                className="mt-4 inline-block text-blue-600 hover:text-blue-800"
              >
                Add the first fee schedule
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Year
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
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
                  {pages.map((page) => (
                    <tr key={page.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {page.year}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {page.page_title}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`p-4 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            page.is_active
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {page.is_active ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(page.updated_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center gap-8">
                          <Link
                            href={`/admin/fee-schedule/${page.id}/edit`}
                            className="flex items-center gap-2"
                          >
                            <PencilIcon className="w-16 h-16" />
                            Edit
                          </Link>
                          <DeleteFeeScheduleButton
                            id={page.id}
                            year={page.year}
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
