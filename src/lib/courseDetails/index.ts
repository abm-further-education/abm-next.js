import { courseDetailsData } from './courseDetails.en';
import { courseDetailsData_kr } from './courseDetails.kr';
import { courseDetailsData_sp } from './courseDetails.sp';
import { courseDetailsData_pt } from './courseDetails.pt';
import { courseDetailsData_jp } from './courseDetails.jp';
import { courseDetailsData as courseDetailsData_tl } from './courseDetails.tl';
import { courseDetailsData as courseDetailsData_zh } from './courseDetails.zh';
import { courseDetailsData as courseDetailsData_id } from './courseDetails.id';

/**
 * Usage: getCourseDetailsData(locale)[courseKey]
 * locale: 'en' | 'kr' | 'sp' | 'pt' | 'jp' | 'tl' | 'zh' | 'id' (default: 'en')
 */
export default function getCourseDetailsData(locale: string) {
  if (locale === 'kr') return courseDetailsData_kr;
  if (locale === 'sp') return courseDetailsData_sp;
  if (locale === 'pt') return courseDetailsData_pt;
  if (locale === 'jp') return courseDetailsData_jp;
  if (locale === 'tl') return courseDetailsData_tl;
  if (locale === 'zh') return courseDetailsData_zh;
  if (locale === 'id') return courseDetailsData_id;
  return courseDetailsData;
}
