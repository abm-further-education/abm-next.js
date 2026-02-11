import { redirect, notFound } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import { getAdminCourseById } from '@/lib/course-db';
import CourseForm from '@/components/admin/CourseForm';
import Link from 'next/link';
import CourseEditDetails from '@/components/admin/CourseEditDetails';
import CourseEditInformation from '@/components/admin/CourseEditInformation';
import DeleteCourseButton from '@/components/admin/DeleteCourseButton';

export default async function EditCoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');

  const data = await getAdminCourseById(id);
  if (!data) notFound();

  const courseWithTranslations = {
    ...data.course,
    translations: data.translations,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <Link href="/admin/courses" className="text-blue-600 hover:underline">
            ← Back to Courses
          </Link>
        </div>
        <div className="bg-white rounded-lg p-6 mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Edit Course</h1>
            <p className="text-gray-600">{data.course.id}</p>
          </div>
          <DeleteCourseButton
            courseId={data.course.id}
            courseTitle={data.translations.find((t) => t.locale === 'en')?.title || data.course.id}
          />
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Basic Info & Translations</h2>
            <CourseForm mode="edit" course={courseWithTranslations} />
          </div>

          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Course Details (by locale)</h2>
            <CourseEditDetails
              courseId={id}
              details={data.details}
            />
          </div>

          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Course Information (by locale)</h2>
            <CourseEditInformation
              courseId={id}
              information={data.information}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
