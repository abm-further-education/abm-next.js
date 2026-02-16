'use client';

import { useState, useMemo, useCallback } from 'react';
import {
  Calendar,
  dateFnsLocalizer,
  type Event as RBCEvent,
  type View,
} from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import type { AcademicEvent } from '@/lib/academic-calendar-db';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface CalendarEvent extends RBCEvent {
  id: string;
  eventType: 'term' | 'holiday' | 'event';
  color?: string | null;
  description?: string | null;
}

interface AcademicCalendarProps {
  events: AcademicEvent[];
}

// Default colors
const TERM_COLOR = '#ef7511';
const HOLIDAY_COLOR = '#22c55e';
const EVENT_COLOR = '#3b82f6';

export default function AcademicCalendar({ events }: AcademicCalendarProps) {
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null,
  );
  const [view, setView] = useState<View>('month');
  const [date, setDate] = useState(new Date());

  // Transform DB events to calendar events
  const calendarEvents: CalendarEvent[] = useMemo(() => {
    return events.map((event) => {
      // Parse dates and adjust end date to be inclusive
      // react-big-calendar treats end date as exclusive,
      // so we add 1 day to make the end date inclusive on the calendar
      const startDate = new Date(event.start_date + 'T00:00:00');
      const endDate = new Date(event.end_date + 'T00:00:00');
      endDate.setDate(endDate.getDate() + 1);

      return {
        id: event.id,
        title: event.title,
        start: startDate,
        end: endDate,
        allDay: true,
        eventType: event.event_type,
        color: event.color,
        description: event.description,
      };
    });
  }, [events]);

  // Style events based on type
  const eventStyleGetter = useCallback((event: CalendarEvent) => {
    const bgColor =
      event.color ||
      (event.eventType === 'holiday'
        ? HOLIDAY_COLOR
        : event.eventType === 'event'
          ? EVENT_COLOR
          : TERM_COLOR);

    return {
      style: {
        backgroundColor: bgColor,
        borderRadius: '4px',
        opacity: 0.9,
        color: '#fff',
        border: 'none',
        fontSize: '0.75rem',
        padding: '2px 6px',
      },
    };
  }, []);

  const handleSelectEvent = useCallback((event: CalendarEvent) => {
    setSelectedEvent(event);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedEvent(null);
  }, []);

  const formatDisplayDate = (date: Date | undefined) => {
    if (!date) return '';
    return format(date, 'dd MMM yyyy');
  };

  return (
    <div className="academic-calendar-wrapper">
      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6 justify-end">
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded"
            style={{ backgroundColor: TERM_COLOR }}
          />
          <span className="text-sm text-gray-600">Term</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded"
            style={{ backgroundColor: HOLIDAY_COLOR }}
          />
          <span className="text-sm text-gray-600">Holiday</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded"
            style={{ backgroundColor: EVENT_COLOR }}
          />
          <span className="text-sm text-gray-600">School Event</span>
        </div>
      </div>

      {/* Calendar */}
      <div style={{ height: 700 }}>
        <Calendar<CalendarEvent>
          localizer={localizer}
          events={calendarEvents}
          startAccessor="start"
          endAccessor="end"
          view={view}
          onView={setView}
          date={date}
          onNavigate={setDate}
          views={['month', 'agenda']}
          eventPropGetter={eventStyleGetter}
          onSelectEvent={handleSelectEvent}
          popup
          selectable={false}
          messages={{
            agenda: 'List',
          }}
        />
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-md w-full p-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-4 h-4 rounded"
                  style={{
                    backgroundColor:
                      selectedEvent.color ||
                      (selectedEvent.eventType === 'holiday'
                        ? HOLIDAY_COLOR
                        : selectedEvent.eventType === 'event'
                          ? EVENT_COLOR
                          : TERM_COLOR),
                  }}
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  {selectedEvent.title}
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              >
                &times;
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-gray-500">Type</span>
                <p className="text-gray-800">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      selectedEvent.eventType === 'term'
                        ? 'bg-orange-100 text-orange-800'
                        : selectedEvent.eventType === 'event'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {selectedEvent.eventType === 'term'
                      ? 'Term'
                      : selectedEvent.eventType === 'event'
                        ? 'Event'
                        : 'Holiday'}
                  </span>
                </p>
              </div>

              <div>
                <span className="text-sm font-medium text-gray-500">
                  Period
                </span>
                <p className="text-gray-800">
                  {formatDisplayDate(selectedEvent.start as Date)} &mdash;{' '}
                  {formatDisplayDate(
                    selectedEvent.end
                      ? new Date(
                          (selectedEvent.end as Date).getTime() -
                            24 * 60 * 60 * 1000,
                        )
                      : undefined,
                  )}
                </p>
              </div>

              {selectedEvent.description && (
                <div>
                  <span className="text-sm font-medium text-gray-500">
                    Description
                  </span>
                  <p className="text-gray-800">{selectedEvent.description}</p>
                </div>
              )}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
