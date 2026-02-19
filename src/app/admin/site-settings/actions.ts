'use server';

import {
  createSiteSetting,
  updateSiteSetting,
  deleteSiteSetting,
} from '@/lib/site-settings-db';
import { deleteFileFromR2 } from '@/lib/r2';
import { getAdminSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function createSiteSettingAction(formData: FormData) {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  const key = formData.get('key') as string;
  const value = formData.get('value') as string;
  const label = formData.get('label') as string;
  const description = formData.get('description') as string;
  const category = formData.get('category') as string;
  const value_type = formData.get('value_type') as string;

  if (!key || !label) {
    throw new Error('Required fields are missing: key, label');
  }

  try {
    const setting = await createSiteSetting({
      key,
      value: value || '',
      label,
      description: description || null,
      category: category || 'general',
      value_type: value_type || 'text',
    });

    return { success: true, setting };
  } catch (error) {
    console.error('Create site setting error:', error);
    throw error;
  }
}

export async function updateSiteSettingAction(
  id: string,
  formData: FormData
) {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  const value = formData.get('value') as string;
  const label = formData.get('label') as string;
  const description = formData.get('description') as string;
  const category = formData.get('category') as string;
  const value_type = formData.get('value_type') as string;

  try {
    const setting = await updateSiteSetting(id, {
      value: value || '',
      label,
      description: description || null,
      category: category || 'general',
      value_type: value_type || 'text',
    });

    return { success: true, setting };
  } catch (error) {
    console.error('Update site setting error:', error);
    throw error;
  }
}

export async function deleteSiteSettingAction(
  id: string,
  valueType?: string,
  fileValue?: string
) {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  try {
    if (valueType === 'file' && fileValue) {
      try {
        await deleteFileFromR2(fileValue);
      } catch (r2Error) {
        console.error('Failed to delete file from R2:', r2Error);
      }
    }

    await deleteSiteSetting(id);
    return { success: true };
  } catch (error) {
    console.error('Delete site setting error:', error);
    throw error;
  }
}
