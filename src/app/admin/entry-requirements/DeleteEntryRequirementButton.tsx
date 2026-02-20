'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2Icon } from 'lucide-react';
import { deleteEntryRequirementAction } from './actions';

export default function DeleteEntryRequirementButton({ id }: { id: string }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (
      !confirm(
        'Are you sure you want to delete this entry requirement page? This action cannot be undone.',
      )
    ) {
      return;
    }

    setIsDeleting(true);
    try {
      await deleteEntryRequirementAction(id);
      router.refresh();
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="inline-flex items-center gap-1.5 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
    >
      <Trash2Icon className="w-16 h-16" />
      {isDeleting ? 'Deleting...' : 'Delete'}
    </button>
  );
}
