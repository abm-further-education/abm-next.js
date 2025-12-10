'use server';

import {
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from '@/lib/testimonial-db';
import { getAdminSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { testimonials, fitnessTestimonials } from '@/lib/testimonial';

export async function createTestimonialAction(formData: FormData) {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  const name = formData.get('name') as string;
  const image = formData.get('image') as string;
  const message = formData.get('message') as string;
  const rating = formData.get('rating') as string;
  const course = formData.get('course') as 'cookery&hospitality' | 'fitness';

  if (!name || !image || !course) {
    throw new Error('Required fields are missing.');
  }

  try {
    const testimonial = await createTestimonial({
      name,
      image,
      message: message || null,
      rating: rating ? parseInt(rating, 10) : null,
      course,
    });

    return { success: true, testimonial };
  } catch (error) {
    console.error('Create testimonial error:', error);
    throw error;
  }
}

export async function updateTestimonialAction(id: string, formData: FormData) {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  const name = formData.get('name') as string;
  const image = formData.get('image') as string;
  const message = formData.get('message') as string;
  const rating = formData.get('rating') as string;
  const course = formData.get('course') as 'cookery&hospitality' | 'fitness';

  try {
    const testimonial = await updateTestimonial(id, {
      name,
      image,
      message: message || null,
      rating: rating ? parseInt(rating, 10) : null,
      course,
    });

    return { success: true, testimonial };
  } catch (error) {
    console.error('Update testimonial error:', error);
    throw error;
  }
}

export async function deleteTestimonialAction(id: string) {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  try {
    await deleteTestimonial(id);
    return { success: true };
  } catch (error) {
    console.error('Delete testimonial error:', error);
    throw error;
  }
}

/**
 * 기존 testimonial 데이터를 DB에 마이그레이션합니다
 */
export async function migrateTestimonialsAction() {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  try {
    // cookery&hospitality testimonials 마이그레이션
    for (const testimonial of testimonials) {
      await createTestimonial({
        name: testimonial.name,
        image: testimonial.image,
        message: testimonial.message || null,
        rating: testimonial.rating || null,
        course: 'cookery&hospitality',
      });
    }

    // fitness testimonials 마이그레이션
    for (const testimonial of fitnessTestimonials) {
      await createTestimonial({
        name: testimonial.name,
        image: testimonial.image,
        message: testimonial.message || null,
        rating: testimonial.rating || null,
        course: 'fitness',
      });
    }

    return {
      success: true,
      count: testimonials.length + fitnessTestimonials.length,
    };
  } catch (error) {
    console.error('Migrate testimonials error:', error);
    throw error;
  }
}

