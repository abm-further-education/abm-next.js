import { track } from '@vercel/analytics';

/**
 * Fires a Vercel Analytics custom event for "Enrol Now" clicks.
 * https://vercel.com/docs/analytics/custom-events
 */
export function trackEnrolNowClick(course?: string) {
  track('Enrol Now Click', { course: course || 'Header' });
}
