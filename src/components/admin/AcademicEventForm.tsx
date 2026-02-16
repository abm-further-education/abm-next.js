'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import {
  createEventAction,
  updateEventAction,
} from '@/app/admin/academic-calendar/actions';
import type { AcademicEvent } from '@/lib/academic-calendar-db';

interface AcademicEventFormProps {
  mode: 'create' | 'edit';
  event?: AcademicEvent;
}

export default function AcademicEventForm({
  mode,
  event,
}: AcademicEventFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState(event?.title || '');
  const [startDate, setStartDate] = useState(event?.start_date || '');
  const [endDate, setEndDate] = useState(event?.end_date || '');
  const [eventType, setEventType] = useState<'term' | 'holiday' | 'event'>(
    event?.event_type || 'term'
  );
  const [color, setColor] = useState(event?.color || '');
  const [description, setDescription] = useState(event?.description || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.set('title', title);
      formData.set('start_date', startDate);
      formData.set('end_date', endDate);
      formData.set('event_type', eventType);
      formData.set('color', color);
      formData.set('description', description);

      if (mode === 'create') {
        await createEventAction(formData);
        toast.success('Event created successfully!');
      } else if (event) {
        await updateEventAction(event.id, formData);
        toast.success('Event updated successfully!');
      }

      router.push('/admin/academic-calendar');
      router.refresh();
    } catch (error) {
      console.error('Form submit error:', error);
      toast.error(
        error instanceof Error ? error.message : 'An error occurred.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      {/* Title */}
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Title <span className="text-red-500">*</span>
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Term 1 Intake 1"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
      </div>

      {/* Date range */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="start_date"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Start Date <span className="text-red-500">*</span>
          </label>
          <input
            id="start_date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
        <div>
          <label
            htmlFor="end_date"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            End Date <span className="text-red-500">*</span>
          </label>
          <input
            id="end_date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Event Type */}
      <div>
        <label
          htmlFor="event_type"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Event Type <span className="text-red-500">*</span>
        </label>
        <select
          id="event_type"
          value={eventType}
          onChange={(e) => setEventType(e.target.value as 'term' | 'holiday' | 'event')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        >
          <option value="term">Term</option>
          <option value="holiday">Holiday</option>
          <option value="event">School Event</option>
        </select>
      </div>

      {/* Color */}
      <div>
        <label
          htmlFor="color"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Color (optional)
        </label>
        <div className="flex items-center gap-3">
          <input
            id="color"
            type="color"
            value={color || (eventType === 'term' ? '#ef7511' : eventType === 'event' ? '#3b82f6' : '#6b7280')}
            onChange={(e) => setColor(e.target.value)}
            className="w-12 h-10 p-1 border border-gray-300 rounded-md cursor-pointer"
          />
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder={eventType === 'term' ? '#ef7511' : eventType === 'event' ? '#3b82f6' : '#6b7280'}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          {color && (
            <button
              type="button"
              onClick={() => setColor('')}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Reset
            </button>
          )}
        </div>
        <p className="mt-1 text-xs text-gray-500">
          Default: Terms use orange (#ef7511), Holidays use gray (#6b7280), School Events use blue (#3b82f6)
        </p>
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Description (optional)
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          placeholder="Optional description for this event"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 pt-4">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading
            ? 'Saving...'
            : mode === 'create'
              ? 'Create Event'
              : 'Update Event'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/academic-calendar')}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
