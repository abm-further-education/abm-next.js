import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import { getTrainers } from '@/lib/trainer-db';
import { courseCategories } from '@/lib/trainerData';
import Link from 'next/link';
import { PencilIcon, PlusIcon } from 'lucide-react';
import AdminBackButton from '@/components/admin/AdminBackButton';
import TrainerDeleteButton from '@/components/admin/TrainerDeleteButton';
import { getCourseStyle } from '@/lib/utils';

export default async function TrainersListPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect('/admin/login');
  }

  const trainers = await getTrainers();

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
                Trainers Management
              </h1>
              <p className="text-gray-600">
                Manage trainer profiles ({trainers.length} trainers)
              </p>
            </div>
            <Link
              href="/admin/trainers/new"
              className="px-4 py-2 bg-primary-bk text-white rounded-md transition-colors flex items-center"
            >
              <PlusIcon className="w-14 h-14 mr-2" />
              Add Trainer
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6">
          {trainers.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No trainers registered.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
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
                  {trainers.map((trainer) => {
                    const cat = courseCategories.find(
                      (c) => c.value === trainer.course_category,
                    );
                    return (
                      <tr key={trainer.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {trainer.sort_order}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {trainer.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {trainer.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-6 py-4 inline-flex text-xs leading-5 font-semibold rounded-full ${getCourseStyle(trainer.course_category).bg} ${getCourseStyle(trainer.course_category).text}`}
                          >
                            {cat?.label || trainer.course_category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500 truncate max-w-xs">
                            {trainer.image}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center gap-4">
                            <Link
                              href={`/admin/trainers/${trainer.id}/edit`}
                              className="flex items-center gap-1"
                            >
                              <PencilIcon className="w-14 h-14" />
                              Edit
                            </Link>
                            <TrainerDeleteButton
                              trainerId={trainer.id}
                              trainerName={trainer.name}
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
