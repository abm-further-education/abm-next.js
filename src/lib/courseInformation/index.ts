import { courseInformationData } from './courseInformation.en';
import { courseInformationData_kr } from './courseInformation.kr';
import { courseInformationData_sp } from './courseInformation.sp';
import { courseInformationData_pt } from './courseInformation.pt';
import { courseInformationData_jp } from './courseInformation.jp';
import { courseInformationData as courseInformationData_tl } from './courseInformation.tl';
import { courseInformationData as courseInformationData_zh } from './courseInformation.zh';
import { courseInformationData as courseInformationData_id } from './courseInformation.id';

/**
 * Usage: getCourseInformationData(locale)[courseKey]
 * locale: 'en' | 'kr' | 'sp' | 'pt' | 'jp' | 'tl' | 'zh' | 'id' (default: 'en')
 */
export default function getCourseInformationData(locale: string) {
  if (locale === 'kr') return courseInformationData_kr;
  if (locale === 'sp') return courseInformationData_sp;
  if (locale === 'pt') return courseInformationData_pt;
  if (locale === 'jp') return courseInformationData_jp;
  if (locale === 'tl') return courseInformationData_tl;
  if (locale === 'zh') return courseInformationData_zh;
  if (locale === 'id') return courseInformationData_id;
  return courseInformationData;
}
