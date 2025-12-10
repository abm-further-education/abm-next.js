import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import MigrateTestimonialsForm from '../migrate/MigrateTestimonialsForm';
import { testimonials, fitnessTestimonials } from '@/lib/testimonial';

export default async function MigrateTestimonialsPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect('/admin/login');
  }

  const totalCount = testimonials.length + fitnessTestimonials.length;

  return (
    <div className="min-h-screen mt-140">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Migrate Testimonials Data to Supabase
            </h1>
            <p className="text-gray-600">
              Migrate existing testimonials data to Supabase.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Total {totalCount} testimonials ({testimonials.length} cookery &
              hospitality, {fitnessTestimonials.length} fitness).
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <MigrateTestimonialsForm />
          </div>
        </div>
      </div>
    </div>
  );
}

