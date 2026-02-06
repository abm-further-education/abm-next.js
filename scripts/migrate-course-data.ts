/**
 * Course Data Migration Script
 * 
 * This script migrates course data from static TypeScript files to Supabase database.
 * 
 * Usage:
 *   npx ts-node scripts/migrate-course-data.ts
 * 
 * Or with environment variables:
 *   SUPABASE_URL=... SUPABASE_SERVICE_KEY=... npx ts-node scripts/migrate-course-data.ts
 * 
 * Options:
 *   --dry-run    Preview changes without actually inserting data
 *   --verbose    Show detailed progress
 */

// Load environment variables from .env.local
import * as fs from 'fs';
import * as path from 'path';

function loadEnvFile() {
  const envPath = path.resolve(__dirname, '..', '.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    envContent.split('\n').forEach((line) => {
      const trimmedLine = line.trim();
      if (trimmedLine && !trimmedLine.startsWith('#')) {
        const [key, ...valueParts] = trimmedLine.split('=');
        const value = valueParts.join('=');
        if (key && value && !process.env[key]) {
          process.env[key] = value;
        }
      }
    });
  }
}

loadEnvFile();

import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Import static data
import { courseData as courseDataEn } from '../src/lib/courseData.en';
import { courseData as courseDataKr } from '../src/lib/courseData.kr';
import { courseData as courseDataSp } from '../src/lib/courseData.sp';
import { courseData as courseDataPt } from '../src/lib/courseData.pt';
import { courseData as courseDataJp } from '../src/lib/courseData.jp';
import { courseData as courseDataTl } from '../src/lib/courseData.tl';
import { courseData as courseDataZh } from '../src/lib/courseData.zh';
import { courseData as courseDataId } from '../src/lib/courseData.id';

import { courseDetailsData as courseDetailsEn } from '../src/lib/courseDetails/courseDetails.en';
import { courseDetailsData_kr as courseDetailsKr } from '../src/lib/courseDetails/courseDetails.kr';
import { courseDetailsData_sp as courseDetailsSp } from '../src/lib/courseDetails/courseDetails.sp';
import { courseDetailsData_pt as courseDetailsPt } from '../src/lib/courseDetails/courseDetails.pt';
import { courseDetailsData_jp as courseDetailsJp } from '../src/lib/courseDetails/courseDetails.jp';
import { courseDetailsData as courseDetailsTl } from '../src/lib/courseDetails/courseDetails.tl';
import { courseDetailsData as courseDetailsZh } from '../src/lib/courseDetails/courseDetails.zh';
import { courseDetailsData as courseDetailsId } from '../src/lib/courseDetails/courseDetails.id';

import { courseInformationData as courseInfoEn } from '../src/lib/courseInformation/courseInformation.en';
import { courseInformationData_kr as courseInfoKr } from '../src/lib/courseInformation/courseInformation.kr';
import { courseInformationData_sp as courseInfoSp } from '../src/lib/courseInformation/courseInformation.sp';
import { courseInformationData_pt as courseInfoPt } from '../src/lib/courseInformation/courseInformation.pt';
import { courseInformationData_jp as courseInfoJp } from '../src/lib/courseInformation/courseInformation.jp';
import { courseInformationData as courseInfoTl } from '../src/lib/courseInformation/courseInformation.tl';
import { courseInformationData as courseInfoZh } from '../src/lib/courseInformation/courseInformation.zh';
import { courseInformationData as courseInfoId } from '../src/lib/courseInformation/courseInformation.id';

import { shortCourseData as shortCourseEn } from '../src/lib/shortCourseData/shortCourseData.en';
import { shortCourseData_kr as shortCourseKr } from '../src/lib/shortCourseData/shortCourseData.kr';
import { shortCourseData_sp as shortCourseSp } from '../src/lib/shortCourseData/shortCourseData.sp';
import { shortCourseData_pt as shortCoursePt } from '../src/lib/shortCourseData/shortCourseData.pt';
import { shortCourseData_jp as shortCourseJp } from '../src/lib/shortCourseData/shortCourseData.jp';

// Types
type Locale = 'en' | 'kr' | 'sp' | 'pt' | 'jp' | 'tl' | 'zh' | 'id';

interface CourseData {
  id: string;
  title: string;
  description: string;
  category: string;
  type: string;
  level?: string;
  duration: string;
  price?: number;
  image: string;
  link: string;
  tags: string[];
}

// Data mappings
const courseDataByLocale: Record<Locale, CourseData[]> = {
  en: courseDataEn,
  kr: courseDataKr,
  sp: courseDataSp,
  pt: courseDataPt,
  jp: courseDataJp,
  tl: courseDataTl,
  zh: courseDataZh,
  id: courseDataId,
};

const courseDetailsByLocale: Record<Locale, Record<string, any>> = {
  en: courseDetailsEn,
  kr: courseDetailsKr,
  sp: courseDetailsSp,
  pt: courseDetailsPt,
  jp: courseDetailsJp,
  tl: courseDetailsTl,
  zh: courseDetailsZh,
  id: courseDetailsId,
};

const courseInfoByLocale: Record<Locale, Record<string, any>> = {
  en: courseInfoEn,
  kr: courseInfoKr,
  sp: courseInfoSp,
  pt: courseInfoPt,
  jp: courseInfoJp,
  tl: courseInfoTl,
  zh: courseInfoZh,
  id: courseInfoId,
};

// Short courses only have 5 locales
const shortCourseByLocale: Record<string, Record<string, any>> = {
  en: shortCourseEn,
  kr: shortCourseKr,
  sp: shortCourseSp,
  pt: shortCoursePt,
  jp: shortCourseJp,
};

// Configuration
const isDryRun = process.argv.includes('--dry-run');
const isVerbose = process.argv.includes('--verbose');

function log(message: string) {
  console.log(`[${new Date().toISOString()}] ${message}`);
}

function verbose(message: string) {
  if (isVerbose) {
    console.log(`  ${message}`);
  }
}

async function createSupabaseClient(): Promise<SupabaseClient> {
  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      'Missing Supabase credentials. Set SUPABASE_URL and SUPABASE_SERVICE_KEY environment variables.'
    );
  }

  return createClient(supabaseUrl, supabaseKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

// =====================================================
// Migration Functions
// =====================================================

async function migrateCoursesBase(supabase: SupabaseClient) {
  log('Migrating base course data...');

  // Get unique courses from English data (source of truth for non-translatable fields)
  const courses = courseDataByLocale.en;
  const coursesToInsert = courses.map((course, index) => ({
    id: course.id,
    category: course.category,
    type: course.type,
    level: course.level || null,
    duration: course.duration,
    price: course.price || null,
    image: course.image,
    link: course.link,
    tags: course.tags || [],
    is_active: true,
    display_order: index,
  }));

  verbose(`Found ${coursesToInsert.length} courses to migrate`);

  if (isDryRun) {
    log('DRY RUN: Would insert courses:');
    coursesToInsert.forEach((c) => verbose(`  - ${c.id} (${c.category}/${c.type})`));
    return;
  }

  // Upsert courses
  const { data, error } = await supabase
    .from('courses_new')
    .upsert(coursesToInsert, { onConflict: 'id' })
    .select();

  if (error) {
    throw new Error(`Failed to migrate courses: ${error.message}`);
  }

  log(`Successfully migrated ${data?.length || 0} courses`);
}

async function migrateCourseTranslations(supabase: SupabaseClient) {
  log('Migrating course translations...');

  // First, get all existing course IDs from the database
  const { data: existingCourses, error: fetchError } = await supabase
    .from('courses_new')
    .select('id');

  if (fetchError) {
    throw new Error(`Failed to fetch existing courses: ${fetchError.message}`);
  }

  const existingCourseIds = new Set(existingCourses?.map((c) => c.id) || []);
  verbose(`Found ${existingCourseIds.size} existing courses in database`);

  const translations: any[] = [];
  const locales: Locale[] = ['en', 'kr', 'sp', 'pt', 'jp', 'tl', 'zh', 'id'];

  for (const locale of locales) {
    const courses = courseDataByLocale[locale];
    for (const course of courses) {
      // Only add translation if the course exists in the database
      if (existingCourseIds.has(course.id)) {
        translations.push({
          course_id: course.id,
          locale,
          title: course.title,
          description: course.description,
        });
      }
    }
  }

  verbose(`Found ${translations.length} translations to migrate`);

  if (isDryRun) {
    log('DRY RUN: Would insert translations');
    return;
  }

  // Upsert in batches
  const batchSize = 100;
  for (let i = 0; i < translations.length; i += batchSize) {
    const batch = translations.slice(i, i + batchSize);
    const { error } = await supabase
      .from('course_translations')
      .upsert(batch, { onConflict: 'course_id,locale' });

    if (error) {
      throw new Error(`Failed to migrate translations batch ${i}: ${error.message}`);
    }
    verbose(`Migrated translations batch ${i / batchSize + 1}`);
  }

  log(`Successfully migrated ${translations.length} translations`);
}

// Build a mapping from courseDetails/courseInformation keys to courseData IDs
function buildCourseKeyMapping(): Map<string, string> {
  const mapping = new Map<string, string>();
  const courses = courseDataByLocale.en;
  
  for (const course of courses) {
    // Extract the key from the link (e.g., '/cookery-and-hospitality-courses/sit40521-certificate-iv-in-kitchen-management' -> 'sit40521-certificate-iv-in-kitchen-management')
    const linkParts = course.link.split('/');
    const linkKey = linkParts[linkParts.length - 1];
    
    // Map the link key to the course id
    mapping.set(linkKey, course.id);
    
    // Also map the course id to itself (for direct matches)
    mapping.set(course.id, course.id);
  }
  
  return mapping;
}

const courseKeyMapping = buildCourseKeyMapping();

async function migrateCourseDetails(supabase: SupabaseClient) {
  log('Migrating course details...');

  // First, get all existing course IDs from the database
  const { data: existingCourses, error: fetchError } = await supabase
    .from('courses_new')
    .select('id');

  if (fetchError) {
    throw new Error(`Failed to fetch existing courses: ${fetchError.message}`);
  }

  const existingCourseIds = new Set(existingCourses?.map((c) => c.id) || []);

  const details: any[] = [];
  const locales: Locale[] = ['en', 'kr', 'sp', 'pt', 'jp', 'tl', 'zh', 'id'];
  const unmappedKeys = new Set<string>();

  for (const locale of locales) {
    const courseDetails = courseDetailsByLocale[locale];
    if (!courseDetails) continue;

    for (const [courseKey, sections] of Object.entries(courseDetails)) {
      // Try to map the courseKey to an actual course ID
      const courseId = courseKeyMapping.get(courseKey);
      
      if (!courseId || !existingCourseIds.has(courseId)) {
        unmappedKeys.add(courseKey);
        continue;
      }

      let displayOrder = 0;
      for (const [sectionKey, section] of Object.entries(sections as Record<string, any>)) {
        details.push({
          course_id: courseId,
          locale,
          section_key: sectionKey,
          title: section.title || sectionKey,
          description: section.description,
          display_order: displayOrder++,
        });
      }
    }
  }

  if (unmappedKeys.size > 0) {
    verbose(`Unmapped course detail keys (will be skipped): ${Array.from(unmappedKeys).join(', ')}`);
  }

  verbose(`Found ${details.length} course details to migrate`);

  if (isDryRun) {
    log('DRY RUN: Would insert course details');
    return;
  }

  // Upsert in batches
  const batchSize = 100;
  for (let i = 0; i < details.length; i += batchSize) {
    const batch = details.slice(i, i + batchSize);
    const { error } = await supabase
      .from('course_details')
      .upsert(batch, { onConflict: 'course_id,locale,section_key' });

    if (error) {
      throw new Error(`Failed to migrate course details batch ${i}: ${error.message}`);
    }
    verbose(`Migrated course details batch ${i / batchSize + 1}`);
  }

  log(`Successfully migrated ${details.length} course details`);
}

async function migrateCourseInformation(supabase: SupabaseClient) {
  log('Migrating course information...');

  // First, get all existing course IDs from the database
  const { data: existingCourses, error: fetchError } = await supabase
    .from('courses_new')
    .select('id');

  if (fetchError) {
    throw new Error(`Failed to fetch existing courses: ${fetchError.message}`);
  }

  const existingCourseIds = new Set(existingCourses?.map((c) => c.id) || []);

  const information: any[] = [];
  const locales: Locale[] = ['en', 'kr', 'sp', 'pt', 'jp', 'tl', 'zh', 'id'];
  const unmappedKeys = new Set<string>();

  for (const locale of locales) {
    const courseInfo = courseInfoByLocale[locale];
    if (!courseInfo) continue;

    for (const [courseKey, info] of Object.entries(courseInfo as Record<string, any>)) {
      // Try to map the courseKey to an actual course ID
      const courseId = courseKeyMapping.get(courseKey);
      
      if (!courseId || !existingCourseIds.has(courseId)) {
        unmappedKeys.add(courseKey);
        continue;
      }

      information.push({
        course_id: courseId,
        locale,
        course_code: info.courseCode || null,
        cricos_code: info.cricosCode || null,
        description: info.description || null,
        duration: info.duration || null,
        entry_requirement: info.entryRequirement || null,
        delivery_mode: info.deliveryMode || null,
        delivery_site: info.deliverySite || null,
        additional_info: info.additionalInfo || null,
        starting_dates: info.startingDates || null,
        tables: info.tables || null,
        partners: info.partners || null,
      });
    }
  }

  if (unmappedKeys.size > 0) {
    verbose(`Unmapped course information keys (will be skipped): ${Array.from(unmappedKeys).join(', ')}`);
  }

  verbose(`Found ${information.length} course information records to migrate`);

  if (isDryRun) {
    log('DRY RUN: Would insert course information');
    return;
  }

  // Upsert in batches
  const batchSize = 50;
  for (let i = 0; i < information.length; i += batchSize) {
    const batch = information.slice(i, i + batchSize);
    const { error } = await supabase
      .from('course_information')
      .upsert(batch, { onConflict: 'course_id,locale' });

    if (error) {
      throw new Error(`Failed to migrate course information batch ${i}: ${error.message}`);
    }
    verbose(`Migrated course information batch ${i / batchSize + 1}`);
  }

  log(`Successfully migrated ${information.length} course information records`);
}

async function migrateShortCourses(supabase: SupabaseClient) {
  log('Migrating short courses...');

  // Get unique short courses from English data
  const shortCourses = shortCourseByLocale.en;
  const coursesToInsert = Object.entries(shortCourses).map(([id, course], index) => ({
    id,
    images: course.images || [],
    location: course.location,
    price: course.price,
    duration: course.duration,
    max_participants: course.maxParticipants || null,
    is_active: true,
    display_order: index,
  }));

  verbose(`Found ${coursesToInsert.length} short courses to migrate`);

  if (isDryRun) {
    log('DRY RUN: Would insert short courses:');
    coursesToInsert.forEach((c) => verbose(`  - ${c.id}`));
    return;
  }

  // Upsert short courses
  const { error } = await supabase
    .from('short_courses')
    .upsert(coursesToInsert, { onConflict: 'id' });

  if (error) {
    throw new Error(`Failed to migrate short courses: ${error.message}`);
  }

  log(`Successfully migrated ${coursesToInsert.length} short courses`);
}

async function migrateShortCourseTranslations(supabase: SupabaseClient) {
  log('Migrating short course translations...');

  const translations: any[] = [];
  const locales = ['en', 'kr', 'sp', 'pt', 'jp'];

  for (const locale of locales) {
    const shortCourses = shortCourseByLocale[locale];
    if (!shortCourses) continue;

    for (const [courseId, course] of Object.entries(shortCourses as Record<string, any>)) {
      // Extract translatable content
      const content: any = {};
      const contentFields = [
        'specialOffer', 'courseType', 'whoShouldAttend', 'whatYoullLearn',
        'takeHomeMessage', 'dressCode', 'callToAction', 'whatYoullMake',
        'instructor', 'whatYoullExperience', 'whyThisCourse', 'whyLearnToMake',
        'antipastoMessage', 'courseOverview', 'keyUnits', 'activities',
        'whoNeedsFSS', 'whyYouNeedRSA', 'whatToBring', 'howToEnrol',
        'whyTrainWithABM', 'courseFormat', 'faq1', 'faq2', 'faq3', 'faq4', 'faq5',
        'courseDeliveryLabel', 'courseDelivery', 'locationLabel', 'timeLabel',
        'time', 'addressLabel', 'address', 'specialOfferLabel',
        'selectDateLabel', 'selectDateOptionLabel',
      ];

      for (const field of contentFields) {
        if (course[field] !== undefined) {
          content[field] = course[field];
        }
      }

      translations.push({
        short_course_id: courseId,
        locale,
        title: course.title,
        description: course.description,
        content,
      });
    }
  }

  verbose(`Found ${translations.length} short course translations to migrate`);

  if (isDryRun) {
    log('DRY RUN: Would insert short course translations');
    return;
  }

  // Upsert translations
  const { error } = await supabase
    .from('short_course_translations')
    .upsert(translations, { onConflict: 'short_course_id,locale' });

  if (error) {
    throw new Error(`Failed to migrate short course translations: ${error.message}`);
  }

  log(`Successfully migrated ${translations.length} short course translations`);
}

async function migrateShortCourseDates(supabase: SupabaseClient) {
  log('Migrating short course dates...');

  // First, clear existing dates
  if (!isDryRun) {
    await supabase.from('short_course_dates').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  }

  const dates: any[] = [];
  const shortCourses = shortCourseByLocale.en;

  for (const [courseId, course] of Object.entries(shortCourses as Record<string, any>)) {
    if (!course.dates) continue;

    for (const date of course.dates) {
      dates.push({
        short_course_id: courseId,
        date: date.date,
        display_date: date.displayDate,
        time: date.time,
        available: date.available !== false,
      });
    }
  }

  verbose(`Found ${dates.length} short course dates to migrate`);

  if (isDryRun) {
    log('DRY RUN: Would insert short course dates');
    return;
  }

  // Insert dates
  const batchSize = 50;
  for (let i = 0; i < dates.length; i += batchSize) {
    const batch = dates.slice(i, i + batchSize);
    const { error } = await supabase.from('short_course_dates').insert(batch);

    if (error) {
      throw new Error(`Failed to migrate short course dates batch ${i}: ${error.message}`);
    }
    verbose(`Migrated short course dates batch ${i / batchSize + 1}`);
  }

  log(`Successfully migrated ${dates.length} short course dates`);
}

// =====================================================
// Main Migration
// =====================================================

async function main() {
  log('='.repeat(60));
  log('ABM Course Data Migration');
  log('='.repeat(60));

  if (isDryRun) {
    log('Running in DRY RUN mode - no data will be modified');
  }

  try {
    const supabase = await createSupabaseClient();

    // Run migrations in order
    await migrateCoursesBase(supabase);
    await migrateCourseTranslations(supabase);
    await migrateCourseDetails(supabase);
    await migrateCourseInformation(supabase);
    await migrateShortCourses(supabase);
    await migrateShortCourseTranslations(supabase);
    await migrateShortCourseDates(supabase);

    log('='.repeat(60));
    log('Migration completed successfully!');
    log('='.repeat(60));

    if (isDryRun) {
      log('\nTo run the actual migration, remove the --dry-run flag');
    } else {
      log('\nNext steps:');
      log('1. Verify data in Supabase dashboard');
      log('2. Set NEXT_PUBLIC_USE_COURSE_DATABASE=true in .env.local');
      log('3. Test the application with database data');
    }
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

main();
