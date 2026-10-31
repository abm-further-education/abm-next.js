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
          <div>
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
