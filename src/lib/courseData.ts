// Re-export types from the centralized types file
export type {
  CourseData,
  CourseCategory,
  CourseType,
  CourseLevel,
} from '@/types/course';

// Import the type for internal use
import type { CourseData } from '@/types/course';

import { courseData as courseDataEn } from './courseData.en';
import { courseData as courseDataKr } from './courseData.kr';
import { courseData as courseDataSp } from './courseData.sp';
import { courseData as courseDataPt } from './courseData.pt';
import { courseData as courseDataJp } from './courseData.jp';
import { courseData as courseDataTl } from './courseData.tl';
import { courseData as courseDataZh } from './courseData.zh';
import { courseData as courseDataId } from './courseData.id';

// 코스 링크 기준 qualification code (모든 로케일 공통)
const qualificationCodes: Record<string, string> = {
  '/cookery-and-hospitality-courses/fss': 'SITSS00069',
  '/cookery-and-hospitality-courses/rsa': 'SITSS00071',
  '/cookery-and-hospitality-courses/advanced-diploma-of-hospitality-management':
    'SIT60322',
};

// Non-accredited 코스: 모든 short-course 타입 + 아래 링크 (그 외는 accredited)
const nonAccreditedLinks = new Set([
  '/fitness-instructor-personal-trainer-courses/certificate-iii-in-fitness-online',
  '/fitness-instructor-personal-trainer-courses/certificate-iv-in-fitness-online',
  '/health-and-wellness-courses/hlt33115-certificate-iii-in-health-services-assistance',
]);

function getQualificationCode(link: string): string | undefined {
  if (qualificationCodes[link]) return qualificationCodes[link];
  const slug = link.split('/').pop() ?? '';
  const match = slug.match(/^([a-z]{3}\d{5})-/);
  return match ? match[1].toUpperCase() : undefined;
}

export function withQualificationCodes(courses: CourseData[]): CourseData[] {
  return courses.map((course) => {
    const qualificationCode = getQualificationCode(course.link);
    // 제목 앞에 코드가 붙어 있으면 떼어 내고 카드 상단 코드 줄로 보여준다
    const title = qualificationCode
      ? course.title.replace(new RegExp(`^${qualificationCode}\\s+`, 'i'), '')
      : course.title;
    return {
      ...course,
      title,
      qualificationCode,
      accredited:
        course.type !== 'short-course' && !nonAccreditedLinks.has(course.link),
    };
  });
}

function mergeCourseDataWithEnglish(localizedData: CourseData[]): CourseData[] {
  const localizedByLink = new Map(localizedData.map((course) => [course.link, course]));
  const merged = courseDataEn.map((course) => localizedByLink.get(course.link) || course);

  const additionalLocalizedCourses = localizedData.filter(
    (course) => !courseDataEn.some((enCourse) => enCourse.link === course.link),
  );

  return withQualificationCodes([...merged, ...additionalLocalizedCourses]);
}

export const courseCategories = [
  { value: 'all', label: 'All Categories' },
  { value: 'cookery', label: 'Cookery' },
  { value: 'patisserie', label: 'Patisserie' },
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
];

export const courseLevels = [
  { value: 'all', label: 'All Levels' },
  { value: 'certificate-iii', label: 'Certificate III' },
  { value: 'certificate-iv', label: 'Certificate IV' },
  { value: 'diploma', label: 'Diploma' },
  { value: 'advanced-diploma', label: 'Advanced Diploma' },
  // { value: 'graduate-diploma', label: 'Graduate Diploma' },
];

export function getCourseDataByLocale(locale: string): CourseData[] {
  switch (locale) {
    case 'kr':
      return mergeCourseDataWithEnglish(courseDataKr);
    case 'sp':
      return mergeCourseDataWithEnglish(courseDataSp);
    case 'pt':
      return mergeCourseDataWithEnglish(courseDataPt);
    case 'jp':
      return mergeCourseDataWithEnglish(courseDataJp);
    case 'tl':
      return mergeCourseDataWithEnglish(courseDataTl);
    case 'zh':
      return mergeCourseDataWithEnglish(courseDataZh);
    case 'id':
      return mergeCourseDataWithEnglish(courseDataId);
    case 'en':
    default:
      return withQualificationCodes(courseDataEn);
  }
}
