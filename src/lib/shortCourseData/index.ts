import { shortCourseData } from './shortCourseData.en';
import { shortCourseData_kr } from './shortCourseData.kr';
import { shortCourseData_sp } from './shortCourseData.sp';
import { shortCourseData_pt } from './shortCourseData.pt';

/**
 * Usage: getShortCourseData(locale)[courseKey]
 * locale: 'en' | 'kr' | 'sp' | 'pt' (default: 'en')
 */
export default function getShortCourseData(locale: string) {
  if (locale === 'kr') return shortCourseData_kr;
  if (locale === 'sp') return shortCourseData_sp;
  if (locale === 'pt') return shortCourseData_pt;
  return shortCourseData;
}
