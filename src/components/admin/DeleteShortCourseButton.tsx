'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { deleteShortCourseAction } from '@/app/admin/courses/actions';

interface DeleteShortCourseButtonProps {
  shortCourseId: string;
  title: string;
}

export default function DeleteShortCourseButton({
  shortCourseId,
  title,
}: DeleteShortCourseButtonProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm(`Delete short course "${title}"? This cannot be undone.`)) return;
    setLoading(true);
    try {
      await deleteShortCourseAction(shortCourseId);
      toast.success('Short course deleted');
      router.push('/admin/courses/short-courses');
      router.refresh();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to delete');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={loading}
      className="text-red-600 hover:text-red-800 hover:underline text-sm disabled:opacity-50"
    >
      {loading ? 'Deleting...' : 'Delete'}
    </button>
  );
}
