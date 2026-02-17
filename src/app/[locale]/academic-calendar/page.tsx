export const dynamic = 'force-dynamic';

import Banner from '@/components/common/Banner';
import AcademicCalendar from '@/components/academic-calendar/AcademicCalendar';
import { getAcademicEvents } from '@/lib/academic-calendar-db';
import type { AcademicEvent } from '@/lib/academic-calendar-db';

// Fallback hardcoded data (used if DB is empty or unavailable)
const fallbackEvents: Omit<
  AcademicEvent,
  'id' | 'created_at' | 'updated_at'
>[] = [
  // 2026
  {
    title: 'Term 1 Intake 1',
    start_date: '2026-01-05',
    end_date: '2026-02-08',
    event_type: 'term',
    color: null,
    description: null,
  },
  {
    title: 'Term 1 Intake 2',
    start_date: '2026-02-09',
    end_date: '2026-03-15',
    event_type: 'term',
    color: null,
    description: null,
  },
  {
    title: 'Holiday 1',
    start_date: '2026-03-16',
    end_date: '2026-04-05',
    event_type: 'holiday',
    color: null,
    description: null,
  },
  {
    title: 'Term 2 Intake 1',
    start_date: '2026-04-06',
    end_date: '2026-05-10',
    event_type: 'term',
    color: null,
    description: null,
  },
  {
    title: 'Term 2 Intake 2',
    start_date: '2026-05-11',
    end_date: '2026-06-14',
    event_type: 'term',
    color: null,
    description: null,
  },
  {
    title: 'Holiday 2',
    start_date: '2026-06-15',
    end_date: '2026-07-05',
    event_type: 'holiday',
    color: null,
    description: null,
  },
  {
    title: 'Term 3 Intake 1',
    start_date: '2026-07-06',
    end_date: '2026-08-09',
    event_type: 'term',
    color: null,
    description: null,
  },
  {
    title: 'Term 3 Intake 2',
    start_date: '2026-08-10',
    end_date: '2026-09-13',
    event_type: 'term',
    color: null,
    description: null,
  },
  {
    title: 'Holiday 3',
    start_date: '2026-09-14',
    end_date: '2026-10-04',
    event_type: 'holiday',
    color: null,
    description: null,
  },
  {
    title: 'Term 4 Intake 1',
    start_date: '2026-10-05',
    end_date: '2026-11-08',
    event_type: 'term',
    color: null,
    description: null,
  },
  {
    title: 'Term 4 Intake 2',
    start_date: '2026-11-09',
    end_date: '2026-12-13',
    event_type: 'term',
    color: null,
    description: null,
  },
  {
    title: 'Christmas Holiday',
    start_date: '2026-12-14',
    end_date: '2027-01-08',
    event_type: 'holiday',
    color: null,
    description: null,
  },
  // 2027
  {
    title: 'Term 1 Intake 1',
    start_date: '2027-01-11',
    end_date: '2027-02-14',
    event_type: 'term',
    color: null,
    description: null,
  },
  {
    title: 'Term 1 Intake 2',
    start_date: '2027-02-15',
    end_date: '2027-03-21',
    event_type: 'term',
    color: null,
    description: null,
  },
  {
    title: 'Holiday 1',
    start_date: '2027-03-22',
    end_date: '2027-04-11',
    event_type: 'holiday',
    color: null,
    description: null,
  },
  {
    title: 'Term 2 Intake 1',
    start_date: '2027-04-12',
    end_date: '2027-05-16',
    event_type: 'term',
    color: null,
    description: null,
  },
  {
    title: 'Term 2 Intake 2',
    start_date: '2027-05-17',
    end_date: '2027-06-20',
    event_type: 'term',
    color: null,
    description: null,
  },
  {
    title: 'Holiday 2',
    start_date: '2027-06-21',
    end_date: '2027-07-11',
    event_type: 'holiday',
    color: null,
    description: null,
  },
  {
    title: 'Term 3 Intake 1',
    start_date: '2027-07-12',
    end_date: '2027-08-15',
    event_type: 'term',
    color: null,
    description: null,
  },
  {
    title: 'Term 3 Intake 2',
    start_date: '2027-08-16',
    end_date: '2027-09-19',
    event_type: 'term',
    color: null,
    description: null,
  },
  {
    title: 'Holiday 3',
    start_date: '2027-09-20',
    end_date: '2027-10-10',
    event_type: 'holiday',
    color: null,
    description: null,
  },
  {
    title: 'Term 4 Intake 1',
    start_date: '2027-10-11',
    end_date: '2027-11-14',
    event_type: 'term',
    color: null,
    description: null,
  },
  {
    title: 'Term 4 Intake 2',
    start_date: '2027-11-15',
    end_date: '2027-12-19',
    event_type: 'term',
    color: null,
    description: null,
  },
  {
    title: 'Christmas Holiday',
    start_date: '2027-12-20',
    end_date: '2028-01-09',
    event_type: 'holiday',
    color: null,
    description: null,
  },
  // 2028
  {
    title: 'Term 1 Intake 1',
    start_date: '2028-01-10',
    end_date: '2028-02-13',
    event_type: 'term',
    color: null,
    description: null,
  },
  {
    title: 'Term 1 Intake 2',
    start_date: '2028-02-14',
    end_date: '2028-03-19',
    event_type: 'term',
    color: null,
    description: null,
  },
  {
    title: 'Holiday 1',
    start_date: '2028-03-20',
    end_date: '2028-04-09',
    event_type: 'holiday',
    color: null,
    description: null,
  },
  {
    title: 'Term 2 Intake 1',
    start_date: '2028-04-10',
    end_date: '2028-05-14',
    event_type: 'term',
    color: null,
    description: null,
  },
  {
    title: 'Term 2 Intake 2',
    start_date: '2028-05-15',
    end_date: '2028-06-18',
    event_type: 'term',
    color: null,
    description: null,
  },
  {
    title: 'Holiday 2',
    start_date: '2028-06-19',
    end_date: '2028-07-09',
    event_type: 'holiday',
    color: null,
    description: null,
  },
  {
    title: 'Term 3 Intake 1',
    start_date: '2028-07-10',
    end_date: '2028-08-13',
    event_type: 'term',
    color: null,
    description: null,
  },
  {
    title: 'Term 3 Intake 2',
    start_date: '2028-08-14',
    end_date: '2028-09-17',
    event_type: 'term',
    color: null,
    description: null,
  },
  {
    title: 'Holiday 3',
    start_date: '2028-09-18',
    end_date: '2028-10-08',
    event_type: 'holiday',
    color: null,
    description: null,
  },
  {
    title: 'Term 4 Intake 1',
    start_date: '2028-10-09',
    end_date: '2028-11-12',
    event_type: 'term',
    color: null,
    description: null,
  },
  {
    title: 'Term 4 Intake 2',
    start_date: '2028-11-13',
    end_date: '2028-12-17',
    event_type: 'term',
    color: null,
    description: null,
  },
  {
    title: 'Christmas Holiday',
    start_date: '2028-12-18',
    end_date: '2029-01-07',
    event_type: 'holiday',
    color: null,
    description: null,
  },
];

export default async function AcademicCalendarPage() {
  // Try to fetch from database, fallback to hardcoded data
  let events: AcademicEvent[];
  try {
    const dbEvents = await getAcademicEvents();
    if (dbEvents.length > 0) {
      events = dbEvents;
    } else {
      // DB is empty, use fallback with generated IDs
      events = fallbackEvents.map((e, i) => ({
        ...e,
        id: `fallback-${i}`,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }));
    }
  } catch {
    // DB error, use fallback
    events = fallbackEvents.map((e, i) => ({
      ...e,
      id: `fallback-${i}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }));
  }

  // Also prepare a table view grouped by year
  const eventsByYear: Record<number, AcademicEvent[]> = {};
  for (const event of events) {
    const year = new Date(event.start_date).getFullYear();
    if (!eventsByYear[year]) {
      eventsByYear[year] = [];
    }
    eventsByYear[year].push(event);
  }
  const years = Object.keys(eventsByYear)
    .map(Number)
    .sort((a, b) => a - b);

  const formatDateRange = (start: string, end: string) => {
    const s = new Date(start + 'T00:00:00');
    const e = new Date(end + 'T00:00:00');
    const opts: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short' };
    const startStr = s.toLocaleDateString('en-AU', opts);
    const endStr = e.toLocaleDateString('en-AU', opts);
    const endYear = e.getFullYear();
    const startYear = s.getFullYear();
    if (endYear !== startYear) {
      return `${startStr} – ${endStr} ${endYear}`;
    }
    return `${startStr} – ${endStr}`;
  };

  return (
    <section>
      <Banner
        slides={[
          {
            imgPath: '/academic_calendar.png',
            title: 'ABM Calendar',
            content: '',
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/70 w-full h-screen md:h-700 absolute z-10" />
        }
      />

      <h2 className="text-3xl md:text-4xl font-bold mb-8 font-[family-name:var(--font-montserrat)] text-center mt-40">
        ABM Calendar
      </h2>

      {/* Calendar View */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mb-16">
        <AcademicCalendar events={events} />
      </div>

      {/* Table View (summary by year) */}
      <div className="max-w-7xl mx-auto px-4 md:px-16 pb-32">
        <h3 className="text-2xl font-bold text-center mb-8 font-[family-name:var(--font-montserrat)]">
          Term Dates Overview
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {years.map((year) => (
            <div key={year} className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-2xl font-semibold mb-4 text-[#ef7511]">
                {year}
              </h4>
              <table className="w-full text-sm">
                <tbody>
                  {eventsByYear[year].map((event) => (
                    <tr key={event.id} className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-gray-700">
                        {event.title}
                      </td>
                      <td className="py-3 text-gray-500">
                        {formatDateRange(event.start_date, event.end_date)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
