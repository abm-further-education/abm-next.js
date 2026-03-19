import { supabaseServer } from '@/lib/supabase-server';
import type { PostgrestError } from '@supabase/supabase-js';

type CapacityStatus = {
  maxParticipants: number | null;
  enrolledCount: number;
  isFull: boolean;
  capacityCheckAvailable: boolean;
};

function parseMaxParticipants(value: string | null): number | null {
  if (!value) return null;
  const parsed = Number.parseInt(value.trim(), 10);
  if (!Number.isFinite(parsed) || parsed <= 0) return null;
  return parsed;
}

function formatPostgrestError(error: PostgrestError | null): string {
  if (!error) return 'unknown error';
  const core = [error.code, error.message, error.details, error.hint]
    .filter(Boolean)
    .join(' | ');
  const raw = JSON.stringify(error);
  return [core, raw].filter(Boolean).join(' || ');
}

export async function getShortCourseCapacityStatus(
  courseSlug: string,
  selectedDate: string
): Promise<CapacityStatus> {
  if (!supabaseServer) {
    return {
      maxParticipants: null,
      enrolledCount: 0,
      isFull: false,
      capacityCheckAvailable: false,
    };
  }

  const normalizedSlug = courseSlug.trim().toLowerCase();
  const normalizedDate = selectedDate.trim();

  const { data: courseRow, error: courseError } = await supabaseServer
    .from('short_courses')
    .select('max_participants')
    .eq('id', normalizedSlug)
    .maybeSingle();

  if (courseError) {
    return {
      maxParticipants: null,
      enrolledCount: 0,
      isFull: false,
      capacityCheckAvailable: false,
    };
  }

  const maxParticipants = parseMaxParticipants(courseRow?.max_participants ?? null);

  const paidCountQuery = supabaseServer
    .from('shortCourse')
    .select('*', { count: 'exact', head: true })
    .eq('course_slug', normalizedSlug)
    .eq('selected_date', normalizedDate)
    .eq('payment_status', 'paid');

  const { count: paidCount, error: paidCountError } = await paidCountQuery;

  if (!paidCountError) {
    const enrolledCount = paidCount ?? 0;
    return {
      maxParticipants,
      enrolledCount,
      isFull: maxParticipants !== null && enrolledCount >= maxParticipants,
      capacityCheckAvailable: true,
    };
  }

  // Backward-compatible fallback for environments where payment_status
  // column does not exist yet in public.shortCourse.
  const fallbackCountQuery = supabaseServer
    .from('shortCourse')
    .select('*', { count: 'exact', head: true })
    .eq('course_slug', normalizedSlug)
    .eq('selected_date', normalizedDate);

  const { count: fallbackCount, error: fallbackCountError } =
    await fallbackCountQuery;

  if (fallbackCountError) {
    console.warn(
      `Capacity check disabled due to schema mismatch: primary=${formatPostgrestError(
        paidCountError
      )}; fallback=${formatPostgrestError(fallbackCountError)}`
    );
    return {
      maxParticipants,
      enrolledCount: 0,
      isFull: false,
      capacityCheckAvailable: false,
    };
  }

  const enrolledCount = fallbackCount ?? 0;

  return {
    maxParticipants,
    enrolledCount,
    isFull: maxParticipants !== null && enrolledCount >= maxParticipants,
    capacityCheckAvailable: true,
  };
}
