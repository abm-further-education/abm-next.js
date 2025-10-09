import { shortCourseData } from './shortCourseData.en';
import { shortCourseData_kr } from './shortCourseData.kr';
import { shortCourseData_sp } from './shortCourseData.sp';
import { shortCourseData_pt } from './shortCourseData.pt';
import { shortCourseData_jp } from './shortCourseData.jp';

/**
 * Usage: getShortCourseData(locale)[courseKey]
 * locale: 'en' | 'kr' | 'sp' | 'pt' | 'jp' (default: 'en')
 */
export default function getShortCourseData(locale: string) {
  if (locale === 'kr') return shortCourseData_kr;
  if (locale === 'sp') return shortCourseData_sp;
  if (locale === 'pt') return shortCourseData_pt;
  if (locale === 'jp') return shortCourseData_jp;
  return shortCourseData;
}
