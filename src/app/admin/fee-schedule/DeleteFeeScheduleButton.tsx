'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { deleteFeeScheduleAction } from './actions';

interface DeleteFeeScheduleButtonProps {
  id: string;
  year: number;
}

export default function DeleteFeeScheduleButton({
  id,
  year,
}: DeleteFeeScheduleButtonProps) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete the Fee Schedule ${year}? This action cannot be undone.`
    );
    if (!confirmed) return;

    setDeleting(true);
    try {
      const result = await deleteFeeScheduleAction(id);
      if (result.success) {
        toast.success('Fee schedule deleted successfully.');
        router.refresh();
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Failed to delete.'
      );
    } finally {
      setDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={deleting}
      className="text-red-600 hover:text-red-900 disabled:opacity-50"
    >
      {deleting ? 'Deleting...' : 'Delete'}
    </button>
  );
}
