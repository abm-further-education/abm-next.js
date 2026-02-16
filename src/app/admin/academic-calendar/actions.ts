'use server';

import {
  createAcademicEvent,
  updateAcademicEvent,
  deleteAcademicEvent,
  bulkCreateAcademicEvents,
} from '@/lib/academic-calendar-db';
import { getAdminSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function createEventAction(formData: FormData) {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  const title = formData.get('title') as string;
  const start_date = formData.get('start_date') as string;
  const end_date = formData.get('end_date') as string;
  const event_type = (formData.get('event_type') as string) || 'term';
  const color = formData.get('color') as string;
  const description = formData.get('description') as string;

  if (!title || !start_date || !end_date) {
    throw new Error('Required fields are missing (title, start_date, end_date).');
  }

  try {
    const event = await createAcademicEvent({
      title,
      start_date,
      end_date,
      event_type: event_type as 'term' | 'holiday' | 'event',
      color: color || null,
      description: description || null,
    });

    return { success: true, event };
  } catch (error) {
    console.error('Create academic event error:', error);
    throw error;
  }
}

export async function updateEventAction(id: string, formData: FormData) {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  const title = formData.get('title') as string;
  const start_date = formData.get('start_date') as string;
  const end_date = formData.get('end_date') as string;
  const event_type = (formData.get('event_type') as string) || 'term';
  const color = formData.get('color') as string;
  const description = formData.get('description') as string;

  try {
    const event = await updateAcademicEvent(id, {
      title,
      start_date,
      end_date,
      event_type: event_type as 'term' | 'holiday' | 'event',
      color: color || null,
      description: description || null,
    });

    return { success: true, event };
  } catch (error) {
    console.error('Update academic event error:', error);
    throw error;
  }
}

export async function deleteEventAction(id: string) {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  try {
    await deleteAcademicEvent(id);
    return { success: true };
  } catch (error) {
    console.error('Delete academic event error:', error);
    throw error;
  }
}

// Seed action to migrate hardcoded data
export async function seedAcademicEventsAction() {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  const seedData: {
    title: string;
    start_date: string;
    end_date: string;
    event_type: 'term' | 'holiday' | 'event';
    color: string | null;
    description: string | null;
  }[] = [
    // 2026
    { title: 'Term 1 Intake 1', start_date: '2026-01-05', end_date: '2026-02-08', event_type: 'term', color: null, description: null },
    { title: 'Term 1 Intake 2', start_date: '2026-02-09', end_date: '2026-03-15', event_type: 'term', color: null, description: null },
    { title: 'Holiday 1', start_date: '2026-03-16', end_date: '2026-04-05', event_type: 'holiday', color: null, description: null },
    { title: 'Term 2 Intake 1', start_date: '2026-04-06', end_date: '2026-05-10', event_type: 'term', color: null, description: null },
    { title: 'Term 2 Intake 2', start_date: '2026-05-11', end_date: '2026-06-14', event_type: 'term', color: null, description: null },
    { title: 'Holiday 2', start_date: '2026-06-15', end_date: '2026-07-05', event_type: 'holiday', color: null, description: null },
    { title: 'Term 3 Intake 1', start_date: '2026-07-06', end_date: '2026-08-09', event_type: 'term', color: null, description: null },
    { title: 'Term 3 Intake 2', start_date: '2026-08-10', end_date: '2026-09-13', event_type: 'term', color: null, description: null },
    { title: 'Holiday 3', start_date: '2026-09-14', end_date: '2026-10-04', event_type: 'holiday', color: null, description: null },
    { title: 'Term 4 Intake 1', start_date: '2026-10-05', end_date: '2026-11-08', event_type: 'term', color: null, description: null },
    { title: 'Term 4 Intake 2', start_date: '2026-11-09', end_date: '2026-12-13', event_type: 'term', color: null, description: null },
    { title: 'Christmas Holiday', start_date: '2026-12-14', end_date: '2027-01-08', event_type: 'holiday', color: null, description: null },
    // 2027
    { title: 'Term 1 Intake 1', start_date: '2027-01-11', end_date: '2027-02-14', event_type: 'term', color: null, description: null },
    { title: 'Term 1 Intake 2', start_date: '2027-02-15', end_date: '2027-03-21', event_type: 'term', color: null, description: null },
    { title: 'Holiday 1', start_date: '2027-03-22', end_date: '2027-04-11', event_type: 'holiday', color: null, description: null },
    { title: 'Term 2 Intake 1', start_date: '2027-04-12', end_date: '2027-05-16', event_type: 'term', color: null, description: null },
    { title: 'Term 2 Intake 2', start_date: '2027-05-17', end_date: '2027-06-20', event_type: 'term', color: null, description: null },
    { title: 'Holiday 2', start_date: '2027-06-21', end_date: '2027-07-11', event_type: 'holiday', color: null, description: null },
    { title: 'Term 3 Intake 1', start_date: '2027-07-12', end_date: '2027-08-15', event_type: 'term', color: null, description: null },
    { title: 'Term 3 Intake 2', start_date: '2027-08-16', end_date: '2027-09-19', event_type: 'term', color: null, description: null },
    { title: 'Holiday 3', start_date: '2027-09-20', end_date: '2027-10-10', event_type: 'holiday', color: null, description: null },
    { title: 'Term 4 Intake 1', start_date: '2027-10-11', end_date: '2027-11-14', event_type: 'term', color: null, description: null },
    { title: 'Term 4 Intake 2', start_date: '2027-11-15', end_date: '2027-12-19', event_type: 'term', color: null, description: null },
    { title: 'Christmas Holiday', start_date: '2027-12-20', end_date: '2028-01-09', event_type: 'holiday', color: null, description: null },
    // 2028
    { title: 'Term 1 Intake 1', start_date: '2028-01-10', end_date: '2028-02-13', event_type: 'term', color: null, description: null },
    { title: 'Term 1 Intake 2', start_date: '2028-02-14', end_date: '2028-03-19', event_type: 'term', color: null, description: null },
    { title: 'Holiday 1', start_date: '2028-03-20', end_date: '2028-04-09', event_type: 'holiday', color: null, description: null },
    { title: 'Term 2 Intake 1', start_date: '2028-04-10', end_date: '2028-05-14', event_type: 'term', color: null, description: null },
    { title: 'Term 2 Intake 2', start_date: '2028-05-15', end_date: '2028-06-18', event_type: 'term', color: null, description: null },
    { title: 'Holiday 2', start_date: '2028-06-19', end_date: '2028-07-09', event_type: 'holiday', color: null, description: null },
    { title: 'Term 3 Intake 1', start_date: '2028-07-10', end_date: '2028-08-13', event_type: 'term', color: null, description: null },
    { title: 'Term 3 Intake 2', start_date: '2028-08-14', end_date: '2028-09-17', event_type: 'term', color: null, description: null },
    { title: 'Holiday 3', start_date: '2028-09-18', end_date: '2028-10-08', event_type: 'holiday', color: null, description: null },
    { title: 'Term 4 Intake 1', start_date: '2028-10-09', end_date: '2028-11-12', event_type: 'term', color: null, description: null },
    { title: 'Term 4 Intake 2', start_date: '2028-11-13', end_date: '2028-12-17', event_type: 'term', color: null, description: null },
    { title: 'Christmas Holiday', start_date: '2028-12-18', end_date: '2029-01-07', event_type: 'holiday', color: null, description: null },
  ];

  try {
    await bulkCreateAcademicEvents(seedData);
    return { success: true, count: seedData.length };
  } catch (error) {
    console.error('Seed academic events error:', error);
    throw error;
  }
}
