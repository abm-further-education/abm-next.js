'use server';

import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import {
  createCourse,
  updateCourse,
  deleteCourse,
  upsertCourseTranslation,
  upsertCourseDetail,
  deleteCourseDetail,
  upsertCourseInfo,
  resolveCourseId,
  createShortCourse,
  updateShortCourse,
  deleteShortCourse,
  upsertShortCourseTranslation,
  upsertShortCourseDate,
  deleteShortCourseDate,
} from '@/lib/course-db';
import type { Locale, CourseCategory, CourseType, CourseLevel } from '@/types/course';

// =====================================================
// Full Course Actions
// =====================================================

export async function createCourseAction(formData: FormData) {
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');

  const id = formData.get('id') as string;
  const category = formData.get('category') as string;
  const type = formData.get('type') as string;
  const level = (formData.get('level') as string) || null;
  const duration = formData.get('duration') as string;
  const price = formData.get('price') ? parseFloat(formData.get('price') as string) : null;
  const image = formData.get('image') as string;
  const link = formData.get('link') as string;
  const tagsStr = formData.get('tags') as string;
  const tags = tagsStr ? tagsStr.split(',').map((t) => t.trim()).filter(Boolean) : [];
  const isActive = formData.get('is_active') === 'true';
  const displayOrder = parseInt(formData.get('display_order') as string, 10) || 0;

  if (!id || !category || !type || !duration || !image || !link) {
    throw new Error('Required fields: id, category, type, duration, image, link');
  }

  const translations: Array<{ course_id: string; locale: Locale; title: string; description: string }> = [];
  const locales: Locale[] = ['en', 'kr', 'sp', 'pt', 'jp', 'tl', 'zh', 'id'];

  for (const locale of locales) {
    const title = formData.get(`translation_${locale}_title`) as string;
    const description = formData.get(`translation_${locale}_description`) as string;
    if (title && description) {
      translations.push({ course_id: id, locale, title, description });
    }
  }

  if (translations.length === 0) {
    throw new Error('At least one translation (title + description) is required');
  }

  await createCourse(
    {
      id,
      category: category as CourseCategory,
      type: type as CourseType,
      level: level as CourseLevel,
      duration,
      price,
      image,
      link,
      tags,
      is_active: isActive,
      display_order: displayOrder,
    },
    translations
  );

  return { success: true, id };
}

export async function updateCourseAction(courseId: string, formData: FormData) {
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');

  const category = formData.get('category') as string;
  const type = formData.get('type') as string;
  const level = (formData.get('level') as string) || null;
  const duration = formData.get('duration') as string;
  const price = formData.get('price') ? parseFloat(formData.get('price') as string) : null;
  const image = formData.get('image') as string;
  const link = formData.get('link') as string;
  const tagsStr = formData.get('tags') as string;
  const tags = tagsStr ? tagsStr.split(',').map((t) => t.trim()).filter(Boolean) : [];
  const isActive = formData.get('is_active') === 'true';
  const displayOrder = parseInt(formData.get('display_order') as string, 10) || 0;

  const translations: Array<{ locale: Locale; title: string; description: string }> = [];
  const locales: Locale[] = ['en', 'kr', 'sp', 'pt', 'jp', 'tl', 'zh', 'id'];

  for (const locale of locales) {
    const title = formData.get(`translation_${locale}_title`) as string;
    const description = formData.get(`translation_${locale}_description`) as string;
    if (title !== null && title !== undefined) {
      translations.push({ locale, title: title || '', description: description || '' });
    }
  }

  await updateCourse(
    courseId,
    {
      category: category as CourseCategory,
      type: type as CourseType,
      level: level as CourseLevel,
      duration,
      price,
      image,
      link,
      tags,
      is_active: isActive,
      display_order: displayOrder,
    },
    translations
  );

  return { success: true };
}

export async function deleteCourseAction(courseId: string) {
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');
  await deleteCourse(courseId);
  return { success: true };
}

export async function upsertCourseTranslationAction(
  courseId: string,
  locale: Locale,
  title: string,
  description: string
) {
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');
  await upsertCourseTranslation(courseId, locale, { title, description });
  return { success: true };
}

export async function upsertCourseDetailAction(
  courseId: string,
  locale: Locale,
  sectionKey: string,
  title: string,
  descriptionJson: string,
  displayOrder: number
) {
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');
  const dbCourseId = resolveCourseId(courseId);
  let description: unknown;
  try {
    description = JSON.parse(descriptionJson);
  } catch {
    description = descriptionJson;
  }
  await upsertCourseDetail(dbCourseId, locale, sectionKey, { title, description, displayOrder });
  return { success: true };
}

export async function deleteCourseDetailAction(
  courseId: string,
  locale: Locale,
  sectionKey: string
) {
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');
  const dbCourseId = resolveCourseId(courseId);
  await deleteCourseDetail(dbCourseId, locale, sectionKey);
  return { success: true };
}

export async function upsertCourseInfoAction(
  courseId: string,
  locale: Locale,
  formData: FormData
) {
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');

  const parseJson = (val: string | null): unknown => {
    if (!val) return null;
    try {
      return JSON.parse(val);
    } catch {
      return val;
    }
  };

  const dbCourseId = resolveCourseId(courseId);
  await upsertCourseInfo(dbCourseId, locale, {
    course_code: (formData.get('course_code') as string) || undefined,
    cricos_code: (formData.get('cricos_code') as string) || undefined,
    description: (formData.get('description') as string) || undefined,
    duration: (formData.get('duration') as string) || undefined,
    entry_requirement: parseJson(formData.get('entry_requirement') as string),
    delivery_mode: parseJson(formData.get('delivery_mode') as string),
    delivery_site: parseJson(formData.get('delivery_site') as string),
    additional_info: parseJson(formData.get('additional_info') as string),
    starting_dates: parseJson(formData.get('starting_dates') as string),
    tables: parseJson(formData.get('tables') as string),
    partners: parseJson(formData.get('partners') as string),
  });

  return { success: true };
}

// =====================================================
// Short Course Actions
// =====================================================

export async function createShortCourseAction(formData: FormData) {
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');

  const id = formData.get('id') as string;
  const imagesStr = formData.get('images') as string;
  const images = imagesStr ? imagesStr.split(',').map((s) => s.trim()).filter(Boolean) : [];
  const location = formData.get('location') as string;
  const price = parseFloat(formData.get('price') as string) || 0;
  const duration = formData.get('duration') as string;
  const maxParticipants = (formData.get('max_participants') as string) || null;
  const isActive = formData.get('is_active') === 'true';
  const displayOrder = parseInt(formData.get('display_order') as string, 10) || 0;

  if (!id || !location || !duration) {
    throw new Error('Required: id, location, duration');
  }

  const translations: Array<{
    short_course_id: string;
    locale: Locale;
    title: string;
    description: string;
    content: Record<string, unknown>;
  }> = [];
  const locales: Locale[] = ['en', 'kr', 'sp', 'pt', 'jp', 'tl', 'zh', 'id'];

  for (const locale of locales) {
    const title = formData.get(`translation_${locale}_title`) as string;
    const description = formData.get(`translation_${locale}_description`) as string;
    const contentStr = formData.get(`translation_${locale}_content`) as string;
    let content: Record<string, unknown> = {};
    if (contentStr) {
      try {
        content = JSON.parse(contentStr);
      } catch {
        content = {};
      }
    }
    if (title && description) {
      translations.push({
        short_course_id: id,
        locale,
        title,
        description,
        content,
      });
    }
  }

  if (translations.length === 0) {
    throw new Error('At least one translation required');
  }

  await createShortCourse(
    {
      id,
      images: images.length ? images : ['/short-course/placeholder.png'],
      location,
      price,
      duration,
      max_participants: maxParticipants,
      is_active: isActive,
      display_order: displayOrder,
    },
    translations
  );

  return { success: true, id };
}

export async function updateShortCourseAction(shortCourseId: string, formData: FormData) {
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');

  const imagesStr = formData.get('images') as string;
  const images = imagesStr ? imagesStr.split(',').map((s) => s.trim()).filter(Boolean) : [];
  const location = formData.get('location') as string;
  const price = parseFloat(formData.get('price') as string) || 0;
  const duration = formData.get('duration') as string;
  const maxParticipants = (formData.get('max_participants') as string) || null;
  const isActive = formData.get('is_active') === 'true';
  const displayOrder = parseInt(formData.get('display_order') as string, 10) || 0;

  await updateShortCourse(shortCourseId, {
    images: images.length ? images : undefined,
    location,
    price,
    duration,
    max_participants: maxParticipants,
    is_active: isActive,
    display_order: displayOrder,
  });

  const locales: Locale[] = ['en', 'kr', 'sp', 'pt', 'jp', 'tl', 'zh', 'id'];
  for (const locale of locales) {
    const title = formData.get(`translation_${locale}_title`) as string;
    const description = formData.get(`translation_${locale}_description`) as string;
    const contentStr = formData.get(`translation_${locale}_content`) as string;
    let content: Record<string, unknown> = {};
    if (contentStr) {
      try {
        content = JSON.parse(contentStr);
      } catch {
        content = {};
      }
    }
    if (title !== null && title !== undefined) {
      await upsertShortCourseTranslation(shortCourseId, locale, {
        title: title || '',
        description: description || '',
        content,
      });
    }
  }

  return { success: true };
}

export async function updateShortCourseTranslationAction(
  shortCourseId: string,
  locale: Locale,
  data: { title: string; description: string; content: Record<string, unknown> }
) {
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');
  await upsertShortCourseTranslation(shortCourseId, locale, data);
  return { success: true };
}

export async function deleteShortCourseAction(shortCourseId: string) {
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');
  await deleteShortCourse(shortCourseId);
  return { success: true };
}

export async function upsertShortCourseDateAction(
  shortCourseId: string,
  date: string,
  displayDate: string,
  time: string,
  available: boolean
) {
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');
  await upsertShortCourseDate(shortCourseId, {
    date,
    display_date: displayDate,
    time,
    available,
  });
  return { success: true };
}

export async function deleteShortCourseDateAction(shortCourseId: string, dateId: string) {
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');
  await deleteShortCourseDate(shortCourseId, dateId);
  return { success: true };
}
