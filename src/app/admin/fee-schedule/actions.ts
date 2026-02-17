'use server';

import {
  createFeeSchedulePage,
  updateFeeSchedulePage,
  deleteFeeSchedulePage,
} from '@/lib/fee-schedule-db';
import { getAdminSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function createFeeScheduleAction(formData: FormData) {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  const page = {
    year: parseInt(formData.get('year') as string) || 2026,
    is_active: formData.get('is_active') === 'true',
    banner_image: (formData.get('banner_image') as string) || '/fees.png',
    banner_title: (formData.get('banner_title') as string) || '',
    banner_subtitle: (formData.get('banner_subtitle') as string) || '',
    promotion_title: (formData.get('promotion_title') as string) || '',
    promotion_description: (formData.get('promotion_description') as string) || '',
    download_button_text: (formData.get('download_button_text') as string) || '',
    payment_title: (formData.get('payment_title') as string) || '',
    payment_description: (formData.get('payment_description') as string) || '',
    contact_text: (formData.get('contact_text') as string) || '',
    contact_email: (formData.get('contact_email') as string) || '',
    instalment_link: (formData.get('instalment_link') as string) || '',
    instalment_link_text: (formData.get('instalment_link_text') as string) || '',
    other_fees_title: (formData.get('other_fees_title') as string) || '',
    non_refundable_note: (formData.get('non_refundable_note') as string) || '',
    page_title: (formData.get('page_title') as string) || '',
  };

  const feesJson = formData.get('fees') as string;
  const fees = feesJson ? JSON.parse(feesJson) : [];

  try {
    const result = await createFeeSchedulePage(page, fees);
    return { success: true, data: result };
  } catch (error) {
    console.error('Create fee schedule error:', error);
    throw error;
  }
}

export async function updateFeeScheduleAction(id: string, formData: FormData) {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  const page = {
    year: parseInt(formData.get('year') as string) || 2026,
    is_active: formData.get('is_active') === 'true',
    banner_image: (formData.get('banner_image') as string) || '/fees.png',
    banner_title: (formData.get('banner_title') as string) || '',
    banner_subtitle: (formData.get('banner_subtitle') as string) || '',
    promotion_title: (formData.get('promotion_title') as string) || '',
    promotion_description: (formData.get('promotion_description') as string) || '',
    download_button_text: (formData.get('download_button_text') as string) || '',
    payment_title: (formData.get('payment_title') as string) || '',
    payment_description: (formData.get('payment_description') as string) || '',
    contact_text: (formData.get('contact_text') as string) || '',
    contact_email: (formData.get('contact_email') as string) || '',
    instalment_link: (formData.get('instalment_link') as string) || '',
    instalment_link_text: (formData.get('instalment_link_text') as string) || '',
    other_fees_title: (formData.get('other_fees_title') as string) || '',
    non_refundable_note: (formData.get('non_refundable_note') as string) || '',
    page_title: (formData.get('page_title') as string) || '',
  };

  const feesJson = formData.get('fees') as string;
  const fees = feesJson ? JSON.parse(feesJson) : undefined;

  try {
    const result = await updateFeeSchedulePage(id, page, fees);
    return { success: true, data: result };
  } catch (error) {
    console.error('Update fee schedule error:', error);
    throw error;
  }
}

export async function deleteFeeScheduleAction(id: string) {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  try {
    await deleteFeeSchedulePage(id);
    return { success: true };
  } catch (error) {
    console.error('Delete fee schedule error:', error);
    throw error;
  }
}
