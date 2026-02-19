'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { deleteCourseAction } from '@/app/admin/courses/actions';
import ConfirmDialog from '@/components/common/ConfirmDialog';

interface DeleteCourseButtonProps {
  courseId: string;
  courseTitle: string;
}

export default function DeleteCourseButton({
  courseId,
  courseTitle,
}: DeleteCourseButtonProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await deleteCourseAction(courseId);
      toast.success('Course deleted');
      setOpen(false);
      router.push('/admin/courses');
      router.refresh();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to delete');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        disabled={loading}
        className="text-red-600 hover:text-red-800 hover:underline text-sm disabled:opacity-50"
      >
        Delete the course
      </button>

      <ConfirmDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={handleConfirm}
        title="Delete Course"
        message={`Are you sure you want to delete "${courseTitle}"? This action cannot be undone.`}
        confirmLabel="Delete"
        loading={loading}
      />
    </>
  );
}
