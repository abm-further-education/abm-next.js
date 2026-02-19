'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2 } from 'lucide-react';
import { deleteTrainerAction } from '@/app/admin/trainers/actions';

interface TrainerDeleteButtonProps {
  trainerId: string;
  trainerName: string;
}

export default function TrainerDeleteButton({
  trainerId,
  trainerName,
}: TrainerDeleteButtonProps) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm(`Are you sure you want to delete "${trainerName}"?`)) return;

    setDeleting(true);
    try {
      await deleteTrainerAction(trainerId);
      router.refresh();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete trainer.');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={deleting}
      className="flex items-center gap-1 text-red-600 hover:text-red-800 disabled:opacity-50"
    >
      <Trash2 className="w-14 h-14" />
      {deleting ? 'Deleting...' : 'Delete'}
    </button>
  );
}
