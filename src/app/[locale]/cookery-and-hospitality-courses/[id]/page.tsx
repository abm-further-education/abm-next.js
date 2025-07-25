'use client';

import Banner from '@/components/common/Banner';
import CourseDetail from '@/domains/courses/components/CourseDetail';
import CourseDetailMenu from '@/domains/courses/components/CourseDetailMenu';
import Units from '@/domains/courses/components/Units';
import CourseInformation from '@/domains/courses/components/CourseInformation';
import IndustryPlacement from '@/domains/courses/contents/cookery/IndustryPlacement';
import IndustryPlacementHospitality from '@/domains/courses/contents/cookery/IndustryPlacementHospitality';
import getCourseDetailsData from '@/lib/courseDetails';
import React, { useEffect, use } from 'react';

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
  'sit40521-certificate-iv-in-kitchen-management': '/courses/cookery/KM.jpg',
  'industry-placement-work-placement': '/courses/cookery/industry.png',
  fss: '/short-course/fss_1.png',
  'sit50422-diploma-of-hospitality-management': '/courses/cookery/DHM.jpg',
  'advanced-diploma-of-hospitality-management': '/courses/cookery/ADHM.jpg',
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
  ],
  'advanced-diploma-of-hospitality-management': [
    'Course Information',
    'Course Detail',
  ],
};

export default function Page({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = use(params);
  const courseDetails = getCourseDetailsData(locale);

  // 동적으로 페이지 타이틀 설정
  useEffect(() => {
    const courseTitle =
      mappingCourseTitle[id] || 'Cookery & Hospitality Course';
    document.title = `${courseTitle} | ABM Further Education`;
  }, [id]);

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
        <div className="max-w-[1600px] mx-auto px-20 py-40">
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
        <div className="max-w-[1600px] mx-auto px-20 py-40">
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
            title: mappingCourseTitle[id],
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
        <CourseInformation id={id} />
      </section>

      {/* Course Detail Section */}
      <section id={getSectionId('Course Detail')}>
        <CourseDetail courseInfo={courseDetails[id] || {}} />
      </section>

      {/* Units Section */}
      <section
        id={getSectionId('Units')}
        className="max-w-[1600px] mx-auto px-20 md:px-80 py-40"
      >
        <Units params={{ id }} />
      </section>
    </div>
  );
}
