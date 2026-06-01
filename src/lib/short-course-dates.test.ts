import { describe, expect, it, vi, afterEach } from 'vitest';
import {
  filterUpcomingShortCourseDates,
  getSydneyTodayIsoDate,
  getUpcomingShortCourseDates,
} from './short-course-dates';

describe('short-course-dates', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('filters out dates before today in Sydney', () => {
    vi.spyOn(Date.prototype, 'toLocaleDateString').mockReturnValue('2026-06-01');

    const result = filterUpcomingShortCourseDates([
      { date: '2026-05-27', displayDate: '27 May' },
      { date: '2026-06-01', displayDate: '1 June' },
      { date: '2026-07-01', displayDate: '1 July' },
    ]);

    expect(result).toEqual([
      { date: '2026-06-01', displayDate: '1 June' },
      { date: '2026-07-01', displayDate: '1 July' },
    ]);
  });

  it('sorts upcoming dates ascending', () => {
    vi.spyOn(Date.prototype, 'toLocaleDateString').mockReturnValue('2026-06-01');

    const result = getUpcomingShortCourseDates([
      { date: '2026-08-21', displayDate: '21 Aug' },
      { date: '2026-06-19', displayDate: '19 Jun' },
    ]);

    expect(result.map((entry) => entry.date)).toEqual(['2026-06-19', '2026-08-21']);
  });

  it('returns today iso date in YYYY-MM-DD format', () => {
    vi.spyOn(Date.prototype, 'toLocaleDateString').mockImplementation(
      (_locales, options) => {
        if (options?.timeZone === 'Australia/Sydney') {
          return '2026-06-01';
        }
        return '6/1/2026';
      },
    );

    expect(getSydneyTodayIsoDate()).toBe('2026-06-01');
  });
});
