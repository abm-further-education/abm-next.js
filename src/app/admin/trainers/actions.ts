'use server';

import {
  getTrainers,
  createTrainer,
  updateTrainer,
  deleteTrainer,
  reorderTrainers,
  type CreateTrainerInput,
  type UpdateTrainerInput,
} from '@/lib/trainer-db';
import { getAdminSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function getTrainersAction(category?: string) {
  return getTrainers(category);
}

export async function createTrainerAction(input: CreateTrainerInput) {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  try {
    const trainer = await createTrainer(input);
    return { success: true, trainer };
  } catch (error) {
    console.error('Create trainer error:', error);
    throw error;
  }
}

export async function updateTrainerAction(
  id: string,
  input: UpdateTrainerInput
) {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  try {
    const trainer = await updateTrainer(id, input);
    return { success: true, trainer };
  } catch (error) {
    console.error('Update trainer error:', error);
    throw error;
  }
}

export async function deleteTrainerAction(id: string) {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  try {
    await deleteTrainer(id);
    return { success: true };
  } catch (error) {
    console.error('Delete trainer error:', error);
    throw error;
  }
}

export async function reorderTrainersAction(orderedIds: string[]) {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  try {
    await reorderTrainers(orderedIds);
    return { success: true };
  } catch (error) {
    console.error('Reorder trainers error:', error);
    throw error;
  }
}
