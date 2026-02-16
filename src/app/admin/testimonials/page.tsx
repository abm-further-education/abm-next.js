import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import { getTestimonials } from '@/lib/testimonial-db';
import Link from 'next/link';
import { PencilIcon, PlusIcon } from 'lucide-react';
import { getCourseStyle } from '@/lib';
import AdminBackButton from '@/components/admin/AdminBackButton';

export default async function TestimonialsListPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect('/admin/login');
  }

  const testimonials = await getTestimonials();

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
                Testimonials Management
              </h1>
              <p className="text-gray-600">Manage testimonials.</p>
            </div>
            <Link
              href="/admin/testimonials/new"
              className="px-4 py-2 bg-primary-bk text-white rounded-md transition-colors flex items-center"
            >
              <PlusIcon className="w-14 h-14 mr-2" />
              Add Testimonial
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6">
          {testimonials.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No testimonials registered.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rating
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {testimonials.map((testimonial) => (
                    <tr key={testimonial.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {testimonial.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`p-4 inline-flex text-xs leading-5 font-semibold rounded-full ${getCourseStyle(testimonial.course).bg} ${getCourseStyle(testimonial.course).text}`}
                        >
                          {testimonial.course}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {testimonial.rating ? (
                          <div className="flex items-center">
                            {'★'.repeat(testimonial.rating)}
                            <span className="ml-1 text-gray-400">
                              {'★'.repeat(5 - testimonial.rating)}
                            </span>
                          </div>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500 truncate max-w-xs">
                          {testimonial.image}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link
                          href={`/admin/testimonials/${testimonial.id}/edit`}
                          className="mr-4 flex items-center gap-4"
                        >
                          <PencilIcon className="w-16 h-16" />
                          Edit
                        </Link>
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
