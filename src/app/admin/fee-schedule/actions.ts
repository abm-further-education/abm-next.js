'use server';

import {
  createFeeSchedulePage,
  updateFeeSchedulePage,
} from '@/lib/fee-schedule-db';
import { getAdminSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function createFeeScheduleAction(formData: FormData) {
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');

  const page = {
    year: parseInt(formData.get('year') as string) || 2026,
    is_active: formData.get('is_active') === 'true',
    banner_image: (formData.get('banner_image') as string) || '/fees.png',
    contact_email: (formData.get('contact_email') as string) || '',
    instalment_link: (formData.get('instalment_link') as string) || '',
  };

  const pageTranslations = JSON.parse((formData.get('page_translations') as string) || '{}');
  const fees = JSON.parse((formData.get('fees') as string) || '[]');

  try {
    const result = await createFeeSchedulePage(page, pageTranslations, fees);
    return { success: true, data: result };
  } catch (error) {
    console.error('Create fee schedule error:', error);
    throw error;
  }
}

export async function updateFeeScheduleAction(id: string, formData: FormData) {
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');

  const page = {
    year: parseInt(formData.get('year') as string) || 2026,
    is_active: formData.get('is_active') === 'true',
    banner_image: (formData.get('banner_image') as string) || '/fees.png',
    contact_email: (formData.get('contact_email') as string) || '',
    instalment_link: (formData.get('instalment_link') as string) || '',
  };

  const pageTranslations = JSON.parse((formData.get('page_translations') as string) || '{}');
  const fees = JSON.parse((formData.get('fees') as string) || '[]');

  try {
    const result = await updateFeeSchedulePage(id, page, pageTranslations, fees);
    return { success: true, data: result };
  } catch (error) {
    console.error('Update fee schedule error:', error);
    throw error;
  }
}

