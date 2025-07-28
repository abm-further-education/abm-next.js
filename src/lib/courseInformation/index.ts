import { courseInformationData } from './courseInformation.en';
import { courseInformationData_kr } from './courseInformation.kr';
import { courseInformationData_sp } from './courseInformation.sp';

/**
 * Usage: getCourseInformationData(locale)[courseKey]
 * locale: 'en' | 'kr' | 'sp' (default: 'en')
 */
export default function getCourseInformationData(locale: string) {
  if (locale === 'kr') return courseInformationData_kr;
  if (locale === 'sp') return courseInformationData_sp;
  return courseInformationData;
}
