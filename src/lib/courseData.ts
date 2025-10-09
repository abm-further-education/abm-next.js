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

import { courseData as courseDataEn } from './courseData.en';
import { courseData as courseDataKr } from './courseData.kr';
import { courseData as courseDataSp } from './courseData.sp';
import { courseData as courseDataPt } from './courseData.pt';
import { courseData as courseDataJp } from './courseData.jp';

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

export function getCourseDataByLocale(locale: string): CourseData[] {
  switch (locale) {
    case 'kr':
      return courseDataKr;
    case 'sp':
      return courseDataSp;
    case 'pt':
      return courseDataPt;
    case 'jp':
      return courseDataJp;
    case 'en':
    default:
      return courseDataEn;
  }
}
