import { shortCourseData } from './shortCourseData.en';
import { shortCourseData_kr } from './shortCourseData.kr';
import { shortCourseData_sp } from './shortCourseData.sp';

/**
 * Usage: getShortCourseData(locale)[courseKey]
 * locale: 'en' | 'kr' | 'sp' (default: 'en')
 */
export default function getShortCourseData(locale: string) {
  if (locale === 'kr') return shortCourseData_kr;
  if (locale === 'sp') return shortCourseData_sp;
  return shortCourseData;
}
