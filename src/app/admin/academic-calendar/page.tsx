export const dynamic = 'force-dynamic';

import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getAdminSession } from '@/lib/auth';
import { getAcademicEvents } from '@/lib/academic-calendar-db';
import DeleteEventButton from './DeleteEventButton';

import AdminBackButton from '@/components/admin/AdminBackButton';
import { PencilIcon } from 'lucide-react';

export default async function AdminAcademicCalendarPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  let events: Awaited<ReturnType<typeof getAcademicEvents>> = [];
  try {
    events = await getAcademicEvents();
  } catch (error) {
    console.error('Failed to fetch events:', error);
    events = [];
  }

  // Group events by year
  const eventsByYear: Record<number, typeof events> = {};
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <AdminBackButton />
        </div>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Academic Calendar Management
            </h1>
            <p className="text-gray-600 mt-1">Manage term dates and holidays</p>
          </div>
          <div className="flex gap-3">
            {/* <SeedButton hasEvents={events.length > 0} /> */}
            <Link
              href="/admin/academic-calendar/new"
              className="px-8 py-4 bg-primary-bk text-white transition-colors"
            >
              + New Event
            </Link>
          </div>
        </div>

        {events.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-500 text-lg mb-4">
              No academic events found.
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Click &quot;Seed Data&quot; to import the default 2026-2028
              calendar, or add events manually.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {years.map((year) => (
              <div key={year} className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {year}
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Title
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Start Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          End Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Color
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {eventsByYear[year].map((event) => (
                        <tr key={event.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {event.title}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                event.event_type === 'term'
                                  ? 'bg-orange-100 text-orange-800'
                                  : event.event_type === 'event'
                                    ? 'bg-blue-100 text-blue-800'
                                    : 'bg-green-100 text-green-800'
                              }`}
                            >
                              {event.event_type === 'term'
                                ? 'Term'
                                : event.event_type === 'event'
                                  ? 'Event'
                                  : 'Holiday'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {event.start_date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {event.end_date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {event.color ? (
                              <div className="flex items-center gap-2">
                                <div
                                  className="w-5 h-5 rounded border border-gray-300"
                                  style={{ backgroundColor: event.color }}
                                />
                                <span className="text-gray-500 text-xs">
                                  {event.color}
                                </span>
                              </div>
                            ) : (
                              <span className="text-gray-400 text-xs">
                                Default
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm flex items-center gap-x-6">
                            <Link
                              href={`/admin/academic-calendar/${event.id}/edit`}
                              className="font-medium flex items-center gap-x-2"
                            >
                              <PencilIcon className="w-16 h-16" />
                              Edit
                            </Link>
                            <DeleteEventButton
                              eventId={event.id}
                              eventTitle={event.title}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
