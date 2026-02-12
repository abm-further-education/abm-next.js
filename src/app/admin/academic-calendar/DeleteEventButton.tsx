'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { deleteEventAction } from './actions';

interface DeleteEventButtonProps {
  eventId: string;
  eventTitle: string;
}

export default function DeleteEventButton({
  eventId,
  eventTitle,
}: DeleteEventButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!confirm(`Are you sure you want to delete "${eventTitle}"?`)) {
      return;
    }

    setLoading(true);
    try {
      await deleteEventAction(eventId);
      toast.success('Event deleted successfully!');
      router.refresh();
    } catch (error) {
      console.error('Delete error:', error);
      toast.error(
        error instanceof Error ? error.message : 'Failed to delete event.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-red-600 hover:text-red-800 font-medium disabled:opacity-50"
    >
      {loading ? 'Deleting...' : 'Delete'}
    </button>
  );
}
