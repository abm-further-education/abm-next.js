'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useEditMode } from '@/contexts/EditModeContext';
import DiplomaHM from '../contents/cookery/DiplomaHM';
import CertIIIHSA, { type FaqItem } from '../contents/health/CertIIIHSA';
import CourseDetailEditable from './CourseDetailEditable';
import {
  renderCourseDetailDescription,
  titleStyle,
} from './courseDetailRender';
import type {
  TableData,
  LinkData,
  DescriptionItem,
  CourseDetailItem,
  CourseDetailInfo,
} from '@/types/course';
import CourseProgress from '@/components/common/CourseProgress';

// Re-export for backward compatibility
export type {
  TableData,
  LinkData,
  DescriptionItem,
  CourseDetailItem,
  CourseDetailInfo,
};

export { titleStyle, paragraphStyle } from './courseDetailRender';

interface CourseDetailProps {
  courseInfo: CourseDetailInfo;
  courseId?: string;
}

type ProgressRow = {
  code?: string;
  title: string;
  duration?: string;
  color?: string;
}[];

const businessProgress: ProgressRow[] = [
  [
    {
      code: 'BSB40120',
      title: 'Certificate IV in Business',
      duration: '52 weeks',
      color: 'bg-[#2F4385]',
    },
    {
      code: 'BSB50120',
      title: 'Diploma of Business',
      duration: '52 weeks',
      color: 'bg-[#1D234B]',
    },
  ],
  [
    {
      code: 'BSB40120',
      title: 'Certificate IV in Business',
      duration: '52 weeks',
      color: 'bg-[#2F4385]',
    },
    {
      code: 'BSB50120',
      title: 'Diploma of Business',
      duration: '52 weeks',
      color: 'bg-[#1D234B]',
    },
    {
      code: 'BSB60120',
      title: 'Advanced Diploma of Business',
      duration: '78 weeks',
      color: 'bg-[#364662]',
    },
  ],
  [
    {
      code: 'BSB50120',
      title: 'Diploma of Business',
      duration: '52 weeks',
      color: 'bg-[#1D234B]',
    },
    {
      code: 'BSB60120',
      title: 'Advanced Diploma of Business',
      duration: '78 weeks',
      color: 'bg-[#364662]',
    },
    {
      code: 'BSB80120',
      title: 'Graduate Diploma of Management (Learning)',
      duration: '104 weeks',
      color: 'bg-[#282A2B]',
    },
  ],
];

const pmProgress: ProgressRow[] = [
  [
    {
      code: 'BSB40920',
      title: 'Certificate IV in Project Management Practice',
      duration: '52 weeks',
      color: 'bg-[#2F4385]',
    },
    {
      code: 'BSB50820',
      title: 'Diploma of Project Management Practice',
      duration: '52 weeks',
      color: 'bg-[#1D234B]',
    },
  ],
  [
    {
      code: 'BSB40920',
      title: 'Certificate IV in Project Management Practice',
      duration: '52 weeks',
      color: 'bg-[#2F4385]',
    },
    {
      code: 'BSB50820',
      title: 'Diploma of Project Management Practice',
      duration: '52 weeks',
      color: 'bg-[#1D234B]',
    },
    {
      code: 'BSB60720',
      title: 'Advanced Diploma of Program Management',
      duration: '78 weeks',
      color: 'bg-[#364662]',
    },
  ],
  [
    {
      code: 'BSB50820',
      title: 'Diploma of Project Management Practice',
      duration: '52 weeks',
      color: 'bg-[#1D234B]',
    },
    {
      code: 'BSB60720',
      title: 'Advanced Diploma of Program Management',
      duration: '78 weeks',
      color: 'bg-[#364662]',
    },
  ],
];

const hrProgress: ProgressRow[] = [
  [
    {
      code: 'BSB40420',
      title: 'Certificate IV in Human Resource Management',
      duration: '52 weeks',
      color: 'bg-[#2F4385]',
    },
    {
      code: 'BSB50320',
      title: 'Diploma of Human Resource Management',
      duration: '52 weeks',
      color: 'bg-[#1D234B]',
    },
  ],
  [
    {
      code: 'BSB40420',
      title: 'Certificate IV in Human Resource Management',
      duration: '52 weeks',
      color: 'bg-[#2F4385]',
    },
    {
      code: 'BSB50320',
      title: 'Diploma of Human Resource Management',
      duration: '52 weeks',
      color: 'bg-[#1D234B]',
    },
    {
      code: 'BSB60320',
      title: 'Advanced Diploma of Human Resource Management',
      duration: '78 weeks',
      color: 'bg-[#364662]',
    },
  ],
];

const fitnessProgress: ProgressRow[] = [
  [
    {
      code: 'SIS30321',
      title: 'Certificate III in Fitness',
      duration: '52 weeks',
      color: 'bg-[#BD0622]',
    },
    {
      code: 'SIS40221',
      title: 'Certificate IV in Fitness',
      duration: '52 weeks',
      color: 'bg-[#982D3A]',
    },
    {
      code: 'SIS50321',
      title: 'Diploma of Sport',
      duration: '52 weeks',
      color: 'bg-[#965F67]',
    },
  ],
  [
    {
      code: '',
      title: 'Certificate III in Fitness (Online)',
      duration: '12 weeks',
      color: 'bg-[#BD0622]',
    },
    {
      code: '',
      title: 'Certificate IV in Fitness (Online)',
      duration: '12 weeks',
      color: 'bg-[#982D3A]',
    },
  ],
];

const kmProgress: ProgressRow[] = [
  [
    {
      code: 'SIT40521',
      title: 'Certificate IV in Kitchen Management',
      duration: '78 weeks',
      color: 'bg-primary',
    },
    {
      code: 'SIT50422',
      title: 'Diploma of Hospitality Management',
      duration: '26 weeks',
      color: 'bg-[#89694D]',
    },
  ],
  [
    {
      code: 'SIT40521',
      title: 'Certificate IV in Kitchen Management',
      duration: '78 weeks',
      color: 'bg-primary',
    },
    {
      code: 'SIT50422',
      title: 'Diploma of Hospitality Management',
      duration: '26 weeks',
      color: 'bg-[#89694D]',
    },
    {
      code: 'SIT60322',
      title: 'Advanced Diploma of Hospitality Management',
      duration: '26 weeks',
      color: 'bg-neutral-400',
    },
  ],
];

const courseProgressMap: Record<string, ProgressRow[]> = {
  'bsb40120-certificate-iv-in-business': businessProgress,
  'bsb50120-diploma-of-business': businessProgress,
  'bsb60120-advanced-diploma-of-business': businessProgress,
  'bsb80120-graduate-diploma-of-management': businessProgress,
  'bsb40920-certificate-iv-in-project-management-practice': pmProgress,
  'bsb50820-diploma-of-project-management-practice': pmProgress,
  'bsb60720-advanced-diploma-of-program-management': pmProgress,
  'bsb40420-certificate-iv-in-human-resource-management': hrProgress,
  'bsb50320-diploma-of-human-resource-management': hrProgress,
  'bsb60220-advanced-diploma-of-human-resource-management': hrProgress,
  'bsb60320-advanced-diploma-of-human-resource-management': hrProgress,
  'sis30321-certificate-iii-in-fitness': fitnessProgress,
  'sis40221-certificate-iv-in-fitness': fitnessProgress,
  'sis50321-diploma-of-sport': fitnessProgress,
  'sit40521-certificate-iv-in-kitchen-management': kmProgress,
  'sit40721-certificate-iv-in-patisserie': kmProgress,
  'advanced-diploma-of-hospitality-management': kmProgress,
};

function CourseDetail({ courseInfo, courseId }: CourseDetailProps) {
  const t = useTranslations('courseDetail');
  const editMode = useEditMode();
  const params = useParams();
  let locale = 'en';
  if (params?.locale) {
    locale = Array.isArray(params.locale) ? params.locale[0] : params.locale;
  }

  if (editMode?.isEditMode && courseId) {
    return (
      <CourseDetailEditable
        courseId={courseId}
        locale={locale}
        courseInfo={courseInfo}
      />
    );
  }

  const progressRows = courseId ? courseProgressMap[courseId] : undefined;
  const showProgressPanel =
    courseId !== 'hlt33115-certificate-iii-in-health-services-assistance' &&
    courseId !== 'sit40721-certificate-iv-in-patisserie';

  // courseStructure 키는 Units로 이관되었으므로 제외, faq는 HSA 전용
  const sections = Object.entries(courseInfo).filter(
    ([key]) => !key.startsWith('courseStructure') && key !== 'faq',
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-20 py-5 md:px-80">
        <h1 className="text-2xl md:text-3xl font-bold mb-10">{t('title')}</h1>
        {courseId === 'sit50422-diploma-of-hospitality-management' ||
        courseId === 'advanced-diploma-of-hospitality-management' ? (
          <DiplomaHM sections={sections} courseId={courseId} />
        ) : courseId ===
          'hlt33115-certificate-iii-in-health-services-assistance' ? (
          <CertIIIHSA
            faqItems={(() => {
              const d = courseInfo.faq?.description;
              if (!Array.isArray(d)) return undefined;
              const ok = d.every(
                (v) =>
                  v != null &&
                  typeof v === 'object' &&
                  'question' in v &&
                  'answer' in v &&
                  typeof (v as FaqItem).question === 'string' &&
                  typeof (v as FaqItem).answer === 'string',
              );
              return ok && d.length > 0
                ? (d as unknown as FaqItem[])
                : undefined;
            })()}
          />
        ) : (
          <div
            className={`grid grid-cols-1 gap-40 ${showProgressPanel ? 'lg:grid-cols-2' : ''}`}
          >
            {showProgressPanel && (
              <div className="mb-30">
                {progressRows && (
                  <div className="mt-15">
                    {progressRows.map((row, index) => (
                      <CourseProgress key={index} courses={row} />
                    ))}
                  </div>
                )}
              </div>
            )}
            <div>
              {sections.map(([sectionKey, sectionData]) => (
                <div key={sectionKey} className="mb-14">
                  <h3 className={titleStyle}>{sectionData.title}</h3>
                  {renderCourseDetailDescription(sectionData.description)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CourseDetail;
