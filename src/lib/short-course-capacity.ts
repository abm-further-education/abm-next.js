import { supabaseServer } from '@/lib/supabase-server';

type CapacityStatus = {
  maxParticipants: number | null;
  enrolledCount: number;
  isFull: boolean;
};

function parseMaxParticipants(value: string | null): number | null {
  if (!value) return null;
  const parsed = Number.parseInt(value.trim(), 10);
  if (!Number.isFinite(parsed) || parsed <= 0) return null;
  return parsed;
}

export async function getShortCourseCapacityStatus(
  courseSlug: string,
  selectedDate: string
): Promise<CapacityStatus> {
  if (!supabaseServer) {
    throw new Error('Supabase server client not available');
  }

  const normalizedSlug = courseSlug.trim().toLowerCase();
  const normalizedDate = selectedDate.trim();

  const { data: courseRow, error: courseError } = await supabaseServer
    .from('short_courses')
    .select('max_participants')
    .eq('id', normalizedSlug)
    .maybeSingle();

  if (courseError) {
    throw new Error(`Failed to read short course: ${courseError.message}`);
  }

  const maxParticipants = parseMaxParticipants(courseRow?.max_participants ?? null);

  const { count, error: countError } = await supabaseServer
    .from('shortCourse')
    .select('*', { count: 'exact', head: true })
    .eq('course_slug', normalizedSlug)
    .eq('selected_date', normalizedDate)
    .eq('payment_status', 'paid');

  if (countError) {
    throw new Error(`Failed to count enrolments: ${countError.message}`);
  }

  const enrolledCount = count ?? 0;

  return {
    maxParticipants,
    enrolledCount,
    isFull: maxParticipants !== null && enrolledCount >= maxParticipants,
  };
}
