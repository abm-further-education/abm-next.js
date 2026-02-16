import { redirect, notFound } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import { getTestimonialById } from '@/lib/testimonial-db';
import TestimonialForm from '@/components/admin/TestimonialForm';
import AdminBackButton from '@/components/admin/AdminBackButton';

export default async function EditTestimonialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await getAdminSession();

  if (!session) {
    redirect('/admin/login');
  }

  const testimonial = await getTestimonialById(id);

  if (!testimonial) {
    notFound();
  }

  return (
    <div className="min-h-screen mt-140">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <AdminBackButton href="/admin/testimonials" label="Testimonials" />
          </div>
          <div className="bg-white rounded-lg p-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Edit Testimonial
            </h1>
            <p className="text-gray-600">Edit the testimonial.</p>
          </div>

          <div className="bg-white rounded-lg p-6">
            <TestimonialForm mode="edit" testimonial={testimonial} />
          </div>
        </div>
      </div>
    </div>
  );
}

