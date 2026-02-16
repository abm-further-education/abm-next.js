'use server';

import {
  createPolicyDocument,
  updatePolicyDocument,
  deletePolicyDocument,
} from '@/lib/policy-documents-db';
import { deleteFileFromR2 } from '@/lib/r2';
import { getAdminSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function createPolicyDocumentAction(formData: FormData) {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const filename = formData.get('filename') as string;
  const file_url = formData.get('file_url') as string;
  const display_order = parseInt(formData.get('display_order') as string) || 0;
  const is_active = formData.get('is_active') === 'true';

  if (!title || !filename || !file_url) {
    throw new Error('Required fields are missing: title, filename, file_url');
  }

  try {
    const doc = await createPolicyDocument({
      title,
      description: description || null,
      filename,
      file_url,
      display_order,
      is_active,
    });

    return { success: true, doc };
  } catch (error) {
    console.error('Create policy document error:', error);
    throw error;
  }
}

export async function updatePolicyDocumentAction(
  id: string,
  formData: FormData
) {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const filename = formData.get('filename') as string;
  const file_url = formData.get('file_url') as string;
  const display_order = parseInt(formData.get('display_order') as string) || 0;
  const is_active = formData.get('is_active') === 'true';

  if (!title || !filename || !file_url) {
    throw new Error('Required fields are missing: title, filename, file_url');
  }

  try {
    const doc = await updatePolicyDocument(id, {
      title,
      description: description || null,
      filename,
      file_url,
      display_order,
      is_active,
    });

    return { success: true, doc };
  } catch (error) {
    console.error('Update policy document error:', error);
    throw error;
  }
}

export async function deletePolicyDocumentAction(
  id: string,
  fileUrl?: string
) {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  try {
    // R2에서 파일 삭제 시도 (실패해도 DB 삭제는 진행)
    if (fileUrl) {
      try {
        await deleteFileFromR2(fileUrl);
      } catch (r2Error) {
        console.error('Failed to delete file from R2:', r2Error);
        // R2 삭제 실패해도 DB 삭제는 진행
      }
    }

    await deletePolicyDocument(id);
    return { success: true };
  } catch (error) {
    console.error('Delete policy document error:', error);
    throw error;
  }
}
