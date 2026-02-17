'use server';

import {
  createEntryRequirementPage,
  updateEntryRequirementPage,
  deleteEntryRequirementPage,
} from '@/lib/entry-requirement-db';
import { getAdminSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function createEntryRequirementAction(formData: FormData) {
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');

  const page = {
    is_active: formData.get('is_active') === 'true',
    banner_image: (formData.get('banner_image') as string) || '/entry_requirement.png',
    contact_button_link: (formData.get('contact_button_link') as string) || '/contact',
  };

  const pageTranslations = JSON.parse((formData.get('page_translations') as string) || '{}');
  const courses = JSON.parse((formData.get('courses') as string) || '[]');
  const partners = JSON.parse((formData.get('partners') as string) || '[]');

  try {
    const result = await createEntryRequirementPage(page, pageTranslations, courses, partners);
    return { success: true, data: result };
  } catch (error) {
    console.error('Create entry requirement error:', error);
    throw error;
  }
}

export async function updateEntryRequirementAction(id: string, formData: FormData) {
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');

  const page = {
    is_active: formData.get('is_active') === 'true',
    banner_image: (formData.get('banner_image') as string) || '/entry_requirement.png',
    contact_button_link: (formData.get('contact_button_link') as string) || '/contact',
  };

  const pageTranslations = JSON.parse((formData.get('page_translations') as string) || '{}');
  const courses = JSON.parse((formData.get('courses') as string) || '[]');
  const partners = JSON.parse((formData.get('partners') as string) || '[]');

  try {
    const result = await updateEntryRequirementPage(id, page, pageTranslations, courses, partners);
    return { success: true, data: result };
  } catch (error) {
    console.error('Update entry requirement error:', error);
    throw error;
  }
}

export async function deleteEntryRequirementAction(id: string) {
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');

  try {
    await deleteEntryRequirementPage(id);
    return { success: true };
  } catch (error) {
    console.error('Delete entry requirement error:', error);
    throw error;
  }
}
