import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import { getAllEntryRequirementPages } from '@/lib/entry-requirement-db';
import Link from 'next/link';
import { PlusIcon, BookOpen, PencilIcon } from 'lucide-react';
import AdminBackButton from '@/components/admin/AdminBackButton';
import DeleteEntryRequirementButton from './DeleteEntryRequirementButton';

export default async function EntryRequirementsAdminPage() {
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');

  const pages = await getAllEntryRequirementPages();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <AdminBackButton href="/admin" label="Back to Dashboard" />
        </div>

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Entry Requirements
            </h1>
            <p className="text-gray-600">
              Manage course entry requirement pages
            </p>
          </div>
          <Link
            href="/admin/entry-requirements/new"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            <PlusIcon className="w-4 h-4" />
            New Page
          </Link>
        </div>

        {pages.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg border">
            <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No entry requirement pages yet
            </h3>
            <p className="text-gray-500 mb-4">
              Create your first entry requirement page.
            </p>
            <Link
              href="/admin/entry-requirements/new"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <PlusIcon className="w-4 h-4" />
              Create Page
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {pages.map((page) => {
              const enTrans = page.entry_requirement_page_translations?.find(
                (t) => t.locale === 'en'
              );
              return (
                <div
                  key={page.id}
                  className="bg-white rounded-lg border p-6 flex items-center justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {enTrans?.banner_title || 'Entry Requirements'}
                      </h3>
                      <span
                        className={`px-2 py-0.5 text-xs rounded-full ${
                          page.is_active
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        {page.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      Created: {new Date(page.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/admin/entry-requirements/${page.id}/edit`}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <PencilIcon className="w-4 h-4" />
                      Edit
                    </Link>
                    <DeleteEntryRequirementButton id={page.id} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
