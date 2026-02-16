'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { deleteCourseAction } from '@/app/admin/courses/actions';

interface DeleteCourseButtonProps {
  courseId: string;
  courseTitle: string;
}

export default function DeleteCourseButton({
  courseId,
  courseTitle,
}: DeleteCourseButtonProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm(`Delete course "${courseTitle}"? This cannot be undone.`))
      return;
    setLoading(true);
    try {
      await deleteCourseAction(courseId);
      toast.success('Course deleted');
      router.push('/admin/courses');
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
      {loading ? 'Deleting the course...' : 'Delete the course'}
    </button>
  );
}
