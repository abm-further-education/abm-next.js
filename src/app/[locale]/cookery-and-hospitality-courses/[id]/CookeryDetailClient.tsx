'use client';

import Banner from '@/components/common/Banner';
import CourseDetail from '@/domains/courses/components/CourseDetail';
import CourseDetailMenu from '@/domains/courses/components/CourseDetailMenu';
import Units from '@/domains/courses/components/Units';
import CourseInformationComponent from '@/domains/courses/components/CourseInformation';
import IndustryPlacement from '@/domains/courses/contents/cookery/IndustryPlacement';
import IndustryPlacementHospitality from '@/domains/courses/contents/cookery/IndustryPlacementHospitality';
import React from 'react';
import Gallery from '@/components/common/Gallery';
import { cn } from '@/lib';
import type { CourseDetailInfo, CourseInformationInfo } from '@/types/course';

const mappingCourseTitle: { [key: string]: string } = {
  'sit40521-certificate-iv-in-kitchen-management':
    'Certificate IV in Kitchen Management',
  'industry-placement-work-placement': 'Industry Placement',
  fss: 'NSW Food Safety Supervisor',
  'sit50422-diploma-of-hospitality-management':
    'Diploma of Hospitality Management',
  'advanced-diploma-of-hospitality-management':
    'Advanced Diploma of Hospitality Management',
  'industry-placement-hospitality-management':
    'Industry Placement for Hospitality Management (F&B)',
};

const mappingCourseImage: { [key: string]: string } = {
  'sit40521-certificate-iv-in-kitchen-management': '/courses/cookery/KM.png',
  'industry-placement-work-placement': '/courses/cookery/industry.png',
  fss: '/short-course/fss_1.png',
  'sit50422-diploma-of-hospitality-management': '/courses/cookery/DHM.png',
  'advanced-diploma-of-hospitality-management': '/courses/cookery/ADHM.png',
  'industry-placement-hospitality-management':
    '/courses/cookery/industry-hospitality.jpg',
};

const menuItems = {
  'sit40521-certificate-iv-in-kitchen-management': [
    'Course Information',
    'Course Detail',
    'Units',
  ],
  'sit50422-diploma-of-hospitality-management': [
    'Course Information',
    'Course Detail',
    'Units',
  ],
  'advanced-diploma-of-hospitality-management': [
    'Course Information',
    'Course Detail',
  ],
};

interface CookeryDetailClientProps {
  id: string;
  locale: string;
  courseDetails: CourseDetailInfo | null;
  courseInformation: CourseInformationInfo | null;
}

export default function CookeryDetailClient({
  id,
  locale,
  courseDetails,
  courseInformation,
}: CookeryDetailClientProps) {

  // Industry Placement 페이지인지 확인
  const isIndustryPlacement = id === 'industry-placement-work-placement';
  const isIndustryPlacementHospitality =
    id === 'industry-placement-hospitality-management';

  // Industry Placement Hospitality 페이지인 경우 IndustryPlacementHospitality 컴포넌트 렌더링
  if (isIndustryPlacementHospitality) {
    return (
      <div className="pb-40">
        <Banner
          slides={[
            {
              imgPath:
                mappingCourseImage[id] || '/courses/cookery/cookery_1.png',
              title: mappingCourseTitle[id],
              content: '',
            },
          ]}
          dimmed={
            <div className="bg-neutral-900/30 w-full h-screen md:h-700 absolute z-10" />
          }
        />
        <div className="max-w-[1600px] mx-auto px-20 md:px-80 py-40">
          <IndustryPlacementHospitality />
        </div>
      </div>
    );
  }

  // Industry Placement 페이지인 경우 IndustryPlacement 컴포넌트 렌더링
  if (isIndustryPlacement) {
    return (
      <div className="pb-40">
        <Banner
          slides={[
            {
              imgPath:
                mappingCourseImage[id] || '/courses/cookery/cookery_1.png',
              title: mappingCourseTitle[id],
              content: '',
            },
          ]}
          dimmed={
            <div className="bg-neutral-900/30 w-full h-screen md:h-700 absolute z-10" />
          }
        />
        <div className="max-w-[1600px] mx-auto px-20 md:px-80 py-40">
          <IndustryPlacement />
        </div>
      </div>
    );
  }

  // 섹션 ID를 생성하는 함수
  const getSectionId = (menuItem: string) => {
    return menuItem.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <div className="pb-40">
      <Banner
        slides={[
          {
            imgPath: mappingCourseImage[id] || '/courses/cookery/cookery_1.png',
            title: `${courseInformation?.courseCode || ''} ${mappingCourseTitle[id] || ''}`.trim(),
            content: '',
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/30 w-full h-screen md:h-700 absolute z-10" />
        }
      />
      <CourseDetailMenu
        menuItems={menuItems[id as keyof typeof menuItems] ?? []}
      />

      {/* Course Information Section */}
      <section id={getSectionId('Course Information')}>
        <CourseInformationComponent id={id} initialData={courseInformation} />
      </section>

      {/* Course Detail Section */}
      <section id={getSectionId('Course Detail')}>
        {/* Course Detail Section */}
        <CourseDetail courseInfo={courseDetails || {}} courseId={id} />
      </section>

      {/* Units Section */}
      <section
        id={getSectionId('Units')}
        className={cn(
          'max-w-[1600px] mx-auto px-20 md:px-80 py-40 gap-40',
          'grid grid-cols-1 lg:grid-cols-2'
        )}
      >
        <Units id={id} />
        <Gallery
          showTitle={false}
          breakpointColumns={{
            default: 2,
            1100: 3,
            700: 2,
          }}
          images={
            id === 'sit40521-certificate-iv-in-kitchen-management'
              ? images_KM
              : images_HM
          }
        />
      </section>
    </div>
  );
}

const images_KM = [
  '/courses/cookery/km_1.png',
  '/courses/cookery/km_2.png',
  '/courses/cookery/km_3.png',
  '/courses/cookery/km_4.png',
  '/courses/cookery/km_5.png',
  '/courses/cookery/km_6.png',
];

const images_HM = [
  '/courses/cookery/hm_1.png',
  '/courses/cookery/hm_2.png',
  '/courses/cookery/hm_3.png',
  '/courses/cookery/km_4.png',
  '/courses/cookery/hm_4.png',
  '/courses/cookery/hm_5.png',
  '/courses/cookery/hm_6.png',
  '/courses/cookery/hm_7.png',
];
