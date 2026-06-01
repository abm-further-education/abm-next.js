const SYDNEY_TIME_ZONE = 'Australia/Sydney';

export function getSydneyTodayIsoDate(): string {
  return new Date().toLocaleDateString('en-CA', { timeZone: SYDNEY_TIME_ZONE });
}

export function filterUpcomingShortCourseDates<T extends { date: string }>(
  dates: T[],
): T[] {
  const today = getSydneyTodayIsoDate();
  return dates.filter((entry) => entry.date >= today);
}

export function getUpcomingShortCourseDates<T extends { date: string }>(
  dates: T[] | undefined,
): T[] {
  return filterUpcomingShortCourseDates(dates ?? []).sort((a, b) =>
    a.date.localeCompare(b.date),
  );
}
