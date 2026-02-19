import { redirect, notFound } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import { getTrainerById } from '@/lib/trainer-db';
import TrainerForm from '@/components/admin/TrainerForm';
import AdminBackButton from '@/components/admin/AdminBackButton';

export default async function EditTrainerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await getAdminSession();

  if (!session) {
    redirect('/admin/login');
  }

  const trainer = await getTrainerById(id);

  if (!trainer) {
    notFound();
  }

  return (
    <div className="min-h-screen mt-140">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <AdminBackButton href="/admin/trainers" label="Trainers" />
          </div>
          <div className="bg-white rounded-lg p-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Edit Trainer
            </h1>
            <p className="text-gray-600">
              Edit trainer profile: {trainer.name}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6">
            <TrainerForm mode="edit" trainer={trainer} />
          </div>
        </div>
      </div>
    </div>
  );
}
