import { redirect, notFound } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import { getAdminShortCourseById } from '@/lib/course-db';
import ShortCourseForm from '@/components/admin/ShortCourseForm';
import Link from 'next/link';
import DeleteShortCourseButton from '@/components/admin/DeleteShortCourseButton';

export default async function EditShortCoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');

  const data = await getAdminShortCourseById(id);
  if (!data) notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/admin/courses/short-courses" className="text-blue-600 hover:underline">
            ← Back to Short Courses
          </Link>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Edit Short Course</h1>
            <p className="text-gray-600">{data.course.id}</p>
          </div>
          <DeleteShortCourseButton
            shortCourseId={data.course.id}
            title={data.translations.find((t) => t.locale === 'en')?.title || data.course.id}
          />
        </div>
        <div className="bg-white rounded-lg p-6">
          <ShortCourseForm mode="edit" data={data} />
        </div>
      </div>
    </div>
  );
}
