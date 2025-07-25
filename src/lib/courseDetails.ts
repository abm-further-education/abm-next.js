import { courseDetailsData } from './courseDetails.en';
import { courseDetailsData_kr } from './courseDetails.kr';
import { courseDetailsData_sp } from './courseDetails.sp';

/**
 * Usage: getCourseDetailsData(locale)[courseKey]
 * locale: 'en' | 'kr' | 'sp' (default: 'en')
 */
export default function getCourseDetailsData(locale: string) {
  if (locale === 'kr') return courseDetailsData_kr;
  if (locale === 'sp') return courseDetailsData_sp;
  return courseDetailsData;
}
