export interface CourseData {
  id: string;
  title: string;
  description: string;
  category:
    | 'cookery'
    | 'hospitality'
    | 'fitness'
    | 'business'
    | 'project'
    | 'hr'
    | 'health'
    | 'short-course-hospitality'
    | 'short-course-cooking'
    | 'short-course-online';
  type: 'full-course' | 'short-course' | 'fast-track';
  level?:
    | 'certificate-iii'
    | 'certificate-iv'
    | 'diploma'
    | 'advanced-diploma'
    | 'graduate-diploma';
  duration: string;
  price?: number;
  image: string;
  link: string;
  tags: string[];
}

// Database course interface (without title and description)
export interface CourseFromDB {
  id: string;
  category: string;
  type: string;
  level: string | null;
  duration: string;
  price: number | null;
  image: string;
  link: string;
  tags: string[];
}

// Full course data interface from JSON (for fallback)
interface CourseFromJSON extends CourseData {
  id: string;
}

export const courseCategories = [
  { value: 'all', label: 'All Categories' },
  { value: 'cookery', label: 'Cookery' },
  { value: 'hospitality', label: 'Hospitality' },
  { value: 'fitness', label: 'Fitness & Sports' },
  { value: 'business', label: 'Business' },
  { value: 'project', label: 'Project Management' },
  { value: 'hr', label: 'HR Management' },
  { value: 'health', label: 'Health & Wellness' },
  { value: 'short-course-hospitality', label: 'Short Courses - Hospitality' },
  { value: 'short-course-cooking', label: 'Short Courses - Cooking & Baking' },
  { value: 'short-course-online', label: 'Short Courses - Online' },
];

export const courseTypes = [
  { value: 'all', label: 'All Types' },
  { value: 'full-course', label: 'Full Courses' },
  { value: 'short-course', label: 'Short Courses' },
];

export const courseLevels = [
  { value: 'all', label: 'All Levels' },
  { value: 'certificate-iii', label: 'Certificate III' },
  { value: 'certificate-iv', label: 'Certificate IV' },
  { value: 'diploma', label: 'Diploma' },
  { value: 'advanced-diploma', label: 'Advanced Diploma' },
  { value: 'graduate-diploma', label: 'Graduate Diploma' },
];

/**
 * Fetch courses from Supabase database
 */
async function fetchCoursesFromDB(): Promise<CourseFromDB[]> {
  const { supabaseServer } = await import('./supabase-server');

  if (!supabaseServer) {
    console.warn(
      'Supabase server client not available, falling back to static data'
    );
    return [];
  }

  const { data, error } = await supabaseServer
    .from('courses')
    .select('*')
    .order('id');

  if (error) {
    console.error('Error fetching courses from database:', error);
    return [];
  }

  return (data || []).map((course) => ({
    id: course.id,
    category: course.category,
    type: course.type,
    level: course.level,
    duration: course.duration,
    price: course.price,
    image: course.image,
    link: course.link,
    tags: course.tags || [],
  }));
}

/**
 * Get course translations from JSON files (title and description only)
 */
async function getCourseTranslations(
  locale: string
): Promise<Record<string, { title: string; description: string }>> {
  try {
    // Dynamic import based on locale
    const messages = await import(`../../messages/${locale}.json`);
    const courseData = messages.default?.courseData || {};
    // Extract only title and description for translations
    return Object.entries(courseData).reduce(
      (acc, [id, data]: [string, any]) => {
        acc[id] = {
          title: data.title || id,
          description: data.description || '',
        };
        return acc;
      },
      {} as Record<string, { title: string; description: string }>
    );
  } catch (error) {
    console.warn(`Failed to load translations for locale: ${locale}`, error);
    // Fallback to English
    try {
      const messages = await import(`../../messages/en.json`);
      const courseData = messages.default?.courseData || {};
      return Object.entries(courseData).reduce(
        (acc, [id, data]: [string, any]) => {
          acc[id] = {
            title: data.title || id,
            description: data.description || '',
          };
          return acc;
        },
        {} as Record<string, { title: string; description: string }>
      );
    } catch {
      return {};
    }
  }
}

/**
 * Merge database course data with translations
 */
function mergeCourseData(
  coursesFromDB: CourseFromDB[],
  translations: Record<string, { title: string; description: string }>
): CourseData[] {
  return coursesFromDB.map((course) => {
    const translation = translations[course.id] || {
      title: course.id, // Fallback to id if translation not found
      description: '',
    };

    return {
      id: course.id,
      title: translation.title,
      description: translation.description,
      category: course.category as CourseData['category'],
      type: course.type as CourseData['type'],
      level: course.level as CourseData['level'] | undefined,
      duration: course.duration,
      price: course.price ?? undefined,
      image: course.image,
      link: course.link,
      tags: course.tags,
    };
  });
}

/**
 * Get course data by locale from database and translations
 * This is the new async function that replaces the old getCourseDataByLocale
 */
export async function getCourseDataByLocale(
  locale: string
): Promise<CourseData[]> {
  // Fetch courses from database
  const coursesFromDB = await fetchCoursesFromDB();

  // If no data from DB, fallback to static data (for development/fallback)
  if (coursesFromDB.length === 0) {
    console.warn('No courses found in database, using fallback static data');
    return getCourseDataByLocaleFallback(locale);
  }

  // Get translations for the locale
  const translations = await getCourseTranslations(locale);

  // Merge database data with translations
  return mergeCourseData(coursesFromDB, translations);
}

/**
 * Fallback function using JSON data (for development or when DB is unavailable)
 * Now JSON files contain the complete course structure including all fields
 */
async function getCourseDataByLocaleFallback(
  locale: string
): Promise<CourseData[]> {
  try {
    // Try to load from specified locale
    const messages = await import(`../../messages/${locale}.json`);
    const courseData = messages.default?.courseData || {};

    // Convert JSON data to CourseData array
    return Object.entries(courseData).map(([id, data]: [string, any]) => ({
      id,
      title: data.title || id,
      description: data.description || '',
      category: data.category as CourseData['category'],
      type: data.type as CourseData['type'],
      level: data.level as CourseData['level'] | undefined,
      duration: data.duration || '',
      price: data.price ?? undefined,
      image: data.image || '',
      link: data.link || '',
      tags: data.tags || [],
    }));
  } catch (error) {
    console.warn(
      `Failed to load fallback data for locale: ${locale}, trying English`,
      error
    );
    // Fallback to English
    try {
      const messages = await import(`../../messages/en.json`);
      const courseData = messages.default?.courseData || {};

      return Object.entries(courseData).map(([id, data]: [string, any]) => ({
        id,
        title: data.title || id,
        description: data.description || '',
        category: data.category as CourseData['category'],
        type: data.type as CourseData['type'],
        level: data.level as CourseData['level'] | undefined,
        duration: data.duration || '',
        price: data.price ?? undefined,
        image: data.image || '',
        link: data.link || '',
        tags: data.tags || [],
      }));
    } catch (fallbackError) {
      console.error('Error loading fallback course data:', fallbackError);
      return [];
    }
  }
}
