import { supabase, supabaseAdmin } from './supabase';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import type {
  Locale,
  CourseData,
  CourseDetailInfo,
  CourseInformationInfo,
  ShortCourseData,
  DbCourse,
  DbCourseTranslation,
  DbCourseDetail,
  DbCourseInformation,
  DbShortCourse,
  DbShortCourseTranslation,
  DbShortCourseDate,
  DescriptionItem,
} from '@/types/course';

// Import static data as fallback
import { getCourseDataByLocale as getStaticCourseData } from './courseData';
import getCourseDetailsData from './courseDetails';
import getCourseInformationData from './courseInformation';
import getShortCourseData from './shortCourseData';

// =====================================================
// Configuration
// =====================================================

const USE_DATABASE = process.env.NEXT_PUBLIC_USE_COURSE_DATABASE === 'true';
const DEFAULT_LOCALE: Locale = 'en';

// =====================================================
// Helper Functions
// =====================================================

async function getAuthenticatedSupabase() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('sb-access-token')?.value;
  const refreshToken = cookieStore.get('sb-refresh-token')?.value;

  if (!accessToken) {
    return supabase;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return supabase;
  }

  const authenticatedClient = createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });

  if (accessToken && refreshToken) {
    try {
      await authenticatedClient.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });
    } catch (error) {
      console.error('Failed to set session:', error);
    }
  }

  return authenticatedClient;
}

function isValidLocale(locale: string): locale is Locale {
  return ['en', 'kr', 'sp', 'pt', 'jp', 'tl', 'zh', 'id'].includes(locale);
}

function normalizeLocale(locale: string): Locale {
  return isValidLocale(locale) ? locale : DEFAULT_LOCALE;
}

// =====================================================
// Course Data Functions
// =====================================================

/**
 * Get all courses with translations for a specific locale
 */
export async function getCoursesByLocale(locale: string): Promise<CourseData[]> {
  const normalizedLocale = normalizeLocale(locale);

  // Use static data if database is not enabled
  if (!USE_DATABASE) {
    return getStaticCourseData(normalizedLocale);
  }

  try {
    const client = await getAuthenticatedSupabase();

    // Join courses with translations
    const { data: courses, error } = await client
      .from('courses_new')
      .select(`
        *,
        course_translations!inner(title, description)
      `)
      .eq('course_translations.locale', normalizedLocale)
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching courses from database:', error);
      // Fallback to static data
      return getStaticCourseData(normalizedLocale);
    }

    if (!courses || courses.length === 0) {
      console.warn('No courses found in database, using static data');
      return getStaticCourseData(normalizedLocale);
    }

    // Transform to CourseData format
    return courses.map((course) => ({
      id: course.id,
      title: course.course_translations[0]?.title || '',
      description: course.course_translations[0]?.description || '',
      category: course.category,
      type: course.type,
      level: course.level || undefined,
      duration: course.duration,
      price: course.price || undefined,
      image: course.image,
      link: course.link,
      tags: course.tags || [],
    }));
  } catch (error) {
    console.error('Error in getCoursesByLocale:', error);
    return getStaticCourseData(normalizedLocale);
  }
}

/**
 * Get a single course by ID with translation
 */
export async function getCourseById(
  courseId: string,
  locale: string
): Promise<CourseData | null> {
  const normalizedLocale = normalizeLocale(locale);

  if (!USE_DATABASE) {
    const courses = getStaticCourseData(normalizedLocale);
    return courses.find((c) => c.id === courseId) || null;
  }

  try {
    const client = await getAuthenticatedSupabase();

    const { data: course, error } = await client
      .from('courses_new')
      .select(`
        *,
        course_translations!inner(title, description)
      `)
      .eq('id', courseId)
      .eq('course_translations.locale', normalizedLocale)
      .single();

    if (error || !course) {
      const courses = getStaticCourseData(normalizedLocale);
      return courses.find((c) => c.id === courseId) || null;
    }

    return {
      id: course.id,
      title: course.course_translations[0]?.title || '',
      description: course.course_translations[0]?.description || '',
      category: course.category,
      type: course.type,
      level: course.level || undefined,
      duration: course.duration,
      price: course.price || undefined,
      image: course.image,
      link: course.link,
      tags: course.tags || [],
    };
  } catch (error) {
    console.error('Error in getCourseById:', error);
    const courses = getStaticCourseData(normalizedLocale);
    return courses.find((c) => c.id === courseId) || null;
  }
}

// =====================================================
// Course Details Functions
// =====================================================

/**
 * Get course details for a specific course and locale
 */
export async function getCourseDetails(
  courseId: string,
  locale: string
): Promise<CourseDetailInfo | null> {
  const normalizedLocale = normalizeLocale(locale);

  if (!USE_DATABASE) {
    const allDetails = getCourseDetailsData(normalizedLocale);
    return allDetails[courseId] || null;
  }

  try {
    const client = await getAuthenticatedSupabase();

    const { data: details, error } = await client
      .from('course_details')
      .select('*')
      .eq('course_id', courseId)
      .eq('locale', normalizedLocale)
      .order('display_order', { ascending: true });

    if (error || !details || details.length === 0) {
      const allDetails = getCourseDetailsData(normalizedLocale);
      return allDetails[courseId] || null;
    }

    // Transform to CourseDetailInfo format
    const result: CourseDetailInfo = {};
    for (const detail of details) {
      result[detail.section_key] = {
        title: detail.title,
        description: detail.description as string | string[] | DescriptionItem[],
      };
    }

    return result;
  } catch (error) {
    console.error('Error in getCourseDetails:', error);
    const allDetails = getCourseDetailsData(normalizedLocale);
    return allDetails[courseId] || null;
  }
}

/**
 * Get all course details for a locale (keyed by course ID)
 */
export async function getAllCourseDetails(
  locale: string
): Promise<{ [courseId: string]: CourseDetailInfo }> {
  const normalizedLocale = normalizeLocale(locale);

  if (!USE_DATABASE) {
    return getCourseDetailsData(normalizedLocale);
  }

  try {
    const client = await getAuthenticatedSupabase();

    const { data: details, error } = await client
      .from('course_details')
      .select('*')
      .eq('locale', normalizedLocale)
      .order('display_order', { ascending: true });

    if (error || !details || details.length === 0) {
      return getCourseDetailsData(normalizedLocale);
    }

    // Group by course_id
    const result: { [courseId: string]: CourseDetailInfo } = {};
    for (const detail of details) {
      if (!result[detail.course_id]) {
        result[detail.course_id] = {};
      }
      result[detail.course_id][detail.section_key] = {
        title: detail.title,
        description: detail.description as string | string[] | DescriptionItem[],
      };
    }

    return result;
  } catch (error) {
    console.error('Error in getAllCourseDetails:', error);
    return getCourseDetailsData(normalizedLocale);
  }
}

// =====================================================
// Course Information Functions
// =====================================================

/**
 * Get course information for a specific course and locale
 */
export async function getCourseInfo(
  courseId: string,
  locale: string
): Promise<CourseInformationInfo | null> {
  const normalizedLocale = normalizeLocale(locale);

  if (!USE_DATABASE) {
    const allInfo = getCourseInformationData(normalizedLocale);
    return allInfo[courseId] || null;
  }

  try {
    const client = await getAuthenticatedSupabase();

    const { data: info, error } = await client
      .from('course_information')
      .select('*')
      .eq('course_id', courseId)
      .eq('locale', normalizedLocale)
      .single();

    if (error || !info) {
      const allInfo = getCourseInformationData(normalizedLocale);
      return allInfo[courseId] || null;
    }

    // Transform to CourseInformationInfo format
    return {
      description: info.description || undefined,
      courseCode: info.course_code || undefined,
      cricosCode: info.cricos_code || undefined,
      duration: info.duration || undefined,
      entryRequirement: info.entry_requirement || undefined,
      deliveryMode: info.delivery_mode || undefined,
      deliverySite: info.delivery_site || undefined,
      additionalInfo: info.additional_info || undefined,
      startingDates: info.starting_dates || undefined,
      tables: info.tables || undefined,
      partners: info.partners || undefined,
    };
  } catch (error) {
    console.error('Error in getCourseInfo:', error);
    const allInfo = getCourseInformationData(normalizedLocale);
    return allInfo[courseId] || null;
  }
}

/**
 * Get all course information for a locale (keyed by course ID)
 */
export async function getAllCourseInfo(
  locale: string
): Promise<{ [courseId: string]: CourseInformationInfo }> {
  const normalizedLocale = normalizeLocale(locale);

  if (!USE_DATABASE) {
    return getCourseInformationData(normalizedLocale);
  }

  try {
    const client = await getAuthenticatedSupabase();

    const { data: infoList, error } = await client
      .from('course_information')
      .select('*')
      .eq('locale', normalizedLocale);

    if (error || !infoList || infoList.length === 0) {
      return getCourseInformationData(normalizedLocale);
    }

    // Transform to keyed object
    const result: { [courseId: string]: CourseInformationInfo } = {};
    for (const info of infoList) {
      result[info.course_id] = {
        description: info.description || undefined,
        courseCode: info.course_code || undefined,
        cricosCode: info.cricos_code || undefined,
        duration: info.duration || undefined,
        entryRequirement: info.entry_requirement || undefined,
        deliveryMode: info.delivery_mode || undefined,
        deliverySite: info.delivery_site || undefined,
        additionalInfo: info.additional_info || undefined,
        startingDates: info.starting_dates || undefined,
        tables: info.tables || undefined,
        partners: info.partners || undefined,
      };
    }

    return result;
  } catch (error) {
    console.error('Error in getAllCourseInfo:', error);
    return getCourseInformationData(normalizedLocale);
  }
}

// =====================================================
// Short Course Functions
// =====================================================

/**
 * Get all short courses for a locale (keyed by course ID)
 */
export async function getShortCourses(
  locale: string
): Promise<{ [courseId: string]: ShortCourseData }> {
  const normalizedLocale = normalizeLocale(locale);

  if (!USE_DATABASE) {
    return getShortCourseData(normalizedLocale);
  }

  try {
    const client = await getAuthenticatedSupabase();

    // Get short courses with translations and dates
    const { data: courses, error: coursesError } = await client
      .from('short_courses')
      .select(`
        *,
        short_course_translations!inner(title, description, content),
        short_course_dates(date, display_date, time, available)
      `)
      .eq('short_course_translations.locale', normalizedLocale)
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (coursesError || !courses || courses.length === 0) {
      return getShortCourseData(normalizedLocale);
    }

    // Transform to ShortCourseData format
    const result: { [courseId: string]: ShortCourseData } = {};
    for (const course of courses) {
      const translation = course.short_course_translations[0];
      const content = translation?.content || {};
      const dates = (course.short_course_dates || []).map((d: DbShortCourseDate) => ({
        date: d.date,
        displayDate: d.display_date,
        time: d.time,
        available: d.available,
      }));

      result[course.id] = {
        title: translation?.title || '',
        description: translation?.description || '',
        images: course.images || [],
        dates,
        maxParticipants: course.max_participants || undefined,
        location: course.location,
        price: course.price,
        duration: course.duration,
        ...content,
      };
    }

    return result;
  } catch (error) {
    console.error('Error in getShortCourses:', error);
    return getShortCourseData(normalizedLocale);
  }
}

/**
 * Get a single short course by ID with translation
 */
export async function getShortCourseById(
  courseId: string,
  locale: string
): Promise<ShortCourseData | null> {
  const normalizedLocale = normalizeLocale(locale);

  if (!USE_DATABASE) {
    const allCourses = getShortCourseData(normalizedLocale);
    return allCourses[courseId] || null;
  }

  try {
    const client = await getAuthenticatedSupabase();

    const { data: course, error } = await client
      .from('short_courses')
      .select(`
        *,
        short_course_translations!inner(title, description, content),
        short_course_dates(date, display_date, time, available)
      `)
      .eq('id', courseId)
      .eq('short_course_translations.locale', normalizedLocale)
      .single();

    if (error || !course) {
      const allCourses = getShortCourseData(normalizedLocale);
      return allCourses[courseId] || null;
    }

    const translation = course.short_course_translations[0];
    const content = translation?.content || {};
    const dates = (course.short_course_dates || []).map((d: DbShortCourseDate) => ({
      date: d.date,
      displayDate: d.display_date,
      time: d.time,
      available: d.available,
    }));

    return {
      title: translation?.title || '',
      description: translation?.description || '',
      images: course.images || [],
      dates,
      maxParticipants: course.max_participants || undefined,
      location: course.location,
      price: course.price,
      duration: course.duration,
      ...content,
    };
  } catch (error) {
    console.error('Error in getShortCourseById:', error);
    const allCourses = getShortCourseData(normalizedLocale);
    return allCourses[courseId] || null;
  }
}

// =====================================================
// Admin CRUD Functions
// =====================================================

/**
 * Create a new course (admin only)
 */
export async function createCourse(
  courseData: Omit<DbCourse, 'created_at' | 'updated_at'>,
  translations: Array<Omit<DbCourseTranslation, 'id' | 'created_at' | 'updated_at'>>
): Promise<DbCourse> {
  const client = await getAuthenticatedSupabase();

  // Check admin permission
  const { data: { user }, error: userError } = await client.auth.getUser();
  if (userError || !user || user.user_metadata?.isAdmin !== true) {
    throw new Error('Administrator privileges are required.');
  }

  const insertClient = supabaseAdmin || client;

  // Insert course
  const { data: course, error: courseError } = await insertClient
    .from('courses_new')
    .insert([courseData])
    .select()
    .single();

  if (courseError) {
    throw new Error(`Failed to create course: ${courseError.message}`);
  }

  // Insert translations
  const translationsToInsert = translations.map((t) => ({
    ...t,
    course_id: course.id,
  }));

  const { error: translationError } = await insertClient
    .from('course_translations')
    .insert(translationsToInsert);

  if (translationError) {
    // Rollback course creation
    await insertClient.from('courses_new').delete().eq('id', course.id);
    throw new Error(`Failed to create translations: ${translationError.message}`);
  }

  return course;
}

/**
 * Update a course (admin only)
 */
export async function updateCourse(
  courseId: string,
  courseData: Partial<DbCourse>,
  translations?: Array<{ locale: Locale; title?: string; description?: string }>
): Promise<DbCourse> {
  const client = await getAuthenticatedSupabase();

  // Check admin permission
  const { data: { user }, error: userError } = await client.auth.getUser();
  if (userError || !user || user.user_metadata?.isAdmin !== true) {
    throw new Error('Administrator privileges are required.');
  }

  const updateClient = supabaseAdmin || client;

  // Update course
  const { data: course, error: courseError } = await updateClient
    .from('courses_new')
    .update(courseData)
    .eq('id', courseId)
    .select()
    .single();

  if (courseError) {
    throw new Error(`Failed to update course: ${courseError.message}`);
  }

  // Update translations if provided
  if (translations && translations.length > 0) {
    for (const translation of translations) {
      const { error: translationError } = await updateClient
        .from('course_translations')
        .upsert({
          course_id: courseId,
          locale: translation.locale,
          title: translation.title,
          description: translation.description,
        }, { onConflict: 'course_id,locale' });

      if (translationError) {
        console.error(`Failed to update translation for ${translation.locale}:`, translationError);
      }
    }
  }

  return course;
}

/**
 * Delete a course (admin only)
 */
export async function deleteCourse(courseId: string): Promise<void> {
  const client = await getAuthenticatedSupabase();

  // Check admin permission
  const { data: { user }, error: userError } = await client.auth.getUser();
  if (userError || !user || user.user_metadata?.isAdmin !== true) {
    throw new Error('Administrator privileges are required.');
  }

  const deleteClient = supabaseAdmin || client;

  // Delete course (cascade will handle related records)
  const { error } = await deleteClient
    .from('courses_new')
    .delete()
    .eq('id', courseId);

  if (error) {
    throw new Error(`Failed to delete course: ${error.message}`);
  }
}

// =====================================================
// Backward Compatibility Exports
// =====================================================

// These functions maintain the same interface as the original static data functions
export const getCourseDataByLocale = getCoursesByLocale;
