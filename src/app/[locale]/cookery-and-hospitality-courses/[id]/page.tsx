'use client';

import Banner from '@/components/common/Banner';
import CourseDetail from '@/domains/courses/components/CourseDetail';
import CourseDetailMenu from '@/domains/courses/components/CourseDetailMenu';
import Units from '@/domains/courses/components/Units';
import CourseInformation from '@/domains/courses/components/CourseInformation';
import { courseDetails } from '@/lib/constants';
import React, { use, useEffect } from 'react';

const mappingCourseTitle: { [key: string]: string } = {
  'sit40521-certificate-iv-in-kitchen-management':
    'Certificate IV in Kitchen Management',
  'industry-placement-work-placement': 'Industry Placement',
  fss: 'NSW Food Safety Supervisor',
  'sit50422-diploma-of-hospitality-management':
    'Diploma of Hospitality Management',
  'advanced-diploma-of-hospitality-management':
    'Advanced Diploma of Hospitality Management',
  'industry-placement-hospitality-management': 'Industry Placement',
};

const mappingCourseImage: { [key: string]: string } = {
  'sit40521-certificate-iv-in-kitchen-management': '/courses/cookery/KM.png',
  'industry-placement-work-placement': '/courses/cookery/industry.png',
  fss: '/short-course/fss_1.png',
  'sit50422-diploma-of-hospitality-management': '/courses/cookery/DHM.png',
  'advanced-diploma-of-hospitality-management': '/courses/cookery/ADHM.png',
  'industry-placement-hospitality-management': '/courses/cookery/industry.png',
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

function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  // 동적으로 페이지 타이틀 설정
  useEffect(() => {
    const courseTitle =
      mappingCourseTitle[id] || 'Cookery & Hospitality Course';
    document.title = `${courseTitle} | ABM Further Education`;
  }, [id]);

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
      <section
        id={getSectionId('Course Information')}
        className="max-w-1000 mx-auto px-20 py-40"
      >
        <CourseInformation id={id} />
      </section>

      {/* Course Detail Section */}

      <section
        id={getSectionId('Course Detail')}
        className="max-w-1000 mx-auto px-20 py-10 bg-gray-50"
      >
        <CourseDetail courseInfo={courseDetails[id] || {}} />
      </section>

      {/* Units Section */}
      <section
        id={getSectionId('Units')}
        className="max-w-1000 mx-auto px-20 py-40"
      >
        <Units params={{ id }} />
      </section>
    </div>
  );
}

export default Page;
