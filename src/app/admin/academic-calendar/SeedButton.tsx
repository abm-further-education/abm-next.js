'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { seedAcademicEventsAction } from './actions';

interface SeedButtonProps {
  hasEvents: boolean;
}

export default function SeedButton({ hasEvents }: SeedButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSeed = async () => {
    const message = hasEvents
      ? 'Events already exist. This will add the default 2026-2028 data (may create duplicates). Continue?'
      : 'This will import the default 2026-2028 academic calendar data. Continue?';

    if (!confirm(message)) {
      return;
    }

    setLoading(true);
    try {
      const result = await seedAcademicEventsAction();
      toast.success(`Successfully seeded ${result.count} events!`);
      router.refresh();
    } catch (error) {
      console.error('Seed error:', error);
      toast.error(
        error instanceof Error ? error.message : 'Failed to seed data.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleSeed}
      disabled={loading}
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50"
    >
      {loading ? 'Seeding...' : 'Seed Data'}
    </button>
  );
}
