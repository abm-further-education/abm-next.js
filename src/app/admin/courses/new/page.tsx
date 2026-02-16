import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import CourseForm from '@/components/admin/CourseForm';
import AdminBackButton from '@/components/admin/AdminBackButton';

export default async function NewCoursePage() {
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <AdminBackButton href="/admin/courses" label="Courses" />
        </div>
        <div className="bg-white rounded-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">New Course</h1>
          <p className="text-gray-600">Add a new full course.</p>
        </div>
        <div className="bg-white rounded-lg p-6">
          <CourseForm mode="create" />
        </div>
      </div>
    </div>
  );
}
