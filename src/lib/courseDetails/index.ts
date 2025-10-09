import { courseDetailsData } from './courseDetails.en';
import { courseDetailsData_kr } from './courseDetails.kr';
import { courseDetailsData_sp } from './courseDetails.sp';
import { courseDetailsData_pt } from './courseDetails.pt';

/**
 * Usage: getCourseDetailsData(locale)[courseKey]
 * locale: 'en' | 'kr' | 'sp' | 'pt' (default: 'en')
 */
export default function getCourseDetailsData(locale: string) {
  if (locale === 'kr') return courseDetailsData_kr;
  if (locale === 'sp') return courseDetailsData_sp;
  if (locale === 'pt') return courseDetailsData_pt;
  return courseDetailsData;
}
