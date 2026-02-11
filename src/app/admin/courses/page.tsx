import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getAdminSession } from '@/lib/auth';
import { getAdminCourseList } from '@/lib/course-db';
import { PlusIcon, CalendarIcon } from 'lucide-react';
import DeleteCourseButton from '@/components/admin/DeleteCourseButton';

export default async function CoursesAdminPage() {
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');

  const courses = await getAdminCourseList();
  const fullCourses = courses;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Course Management
              </h1>
              <p className="text-gray-600">
                Manage full courses and short courses.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/admin/courses/new"
                className="px-4 py-2 bg-primary-bk text-white rounded-md hover:bg-primary transition-colors flex items-center"
              >
                <PlusIcon className="w-14 h-14 mr-2" />
                Add Full Course
              </Link>
              <Link
                href="/admin/courses/short-courses"
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 flex items-center"
              >
                <CalendarIcon className="w-14 h-14 mr-2" />
                Short Courses
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Full Courses ({fullCourses.length})
          </h2>
          {fullCourses.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No full courses. Add one to get started.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Title (EN)
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {fullCourses.map((course) => {
                    const enTr = course.translations.find((t) => t.locale === 'en');
                    return (
                      <tr key={course.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {course.id}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {enTr?.title || '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs rounded-full bg-gray-100">
                            {course.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              course.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {course.is_active ? 'Active' : 'Inactive'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex gap-3">
                            <Link
                              href={`/admin/courses/${course.id}/edit`}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              Edit
                            </Link>
                            <DeleteCourseButton
                              courseId={course.id}
                              courseTitle={enTr?.title || course.id}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
