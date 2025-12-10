'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { migrateTestimonialsAction } from '../actions';

export default function MigrateTestimonialsForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [result, setResult] = useState<{ count?: number } | null>(null);

  async function handleMigrate() {
    setLoading(true);
    setError('');
    setSuccess(false);
    setResult(null);

    try {
      const response = await migrateTestimonialsAction();
      setResult(response);
      setSuccess(true);
      setTimeout(() => {
        router.push('/admin');
      }, 2000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'An error occurred during migration.'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded">
          {error}
        </div>
      )}

      {success && (
        <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded">
          <p className="font-semibold">Migration completed successfully!</p>
          {result?.count && (
            <p className="mt-1 text-sm">
              {result.count} testimonials have been migrated to the database.
            </p>
          )}
          <p className="mt-1 text-sm">Redirecting to admin dashboard...</p>
        </div>
      )}

      <div className="p-4 bg-blue-50 border border-blue-200 rounded">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> This will migrate all existing testimonials
          from the local data file to Supabase. Make sure you have already run
          the SQL migration script in Supabase Dashboard.
        </p>
      </div>

      <button
        onClick={handleMigrate}
        disabled={loading || success}
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? 'Migrating...' : success ? 'Completed' : 'Start Migration'}
      </button>
    </div>
  );
}

