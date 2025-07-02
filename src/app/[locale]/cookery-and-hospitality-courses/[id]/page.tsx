'use client';

import Banner from '@/components/common/Banner';
import CourseDetail from '@/domains/courses/components/CourseDetail';
import CourseDetailMenu from '@/domains/courses/components/CourseDetailMenu';
import Units from '@/domains/courses/components/Units';
import CourseInformation from '@/domains/courses/components/CourseInformation';
import { sampleCourseDetail } from '@/lib/constants';
import React, { use } from 'react';

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

const menuItems = ['Course Information', 'Course Detail', 'Units'];

function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

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
      <CourseDetailMenu menuItems={menuItems} />

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
        className="max-w-1000 mx-auto px-20 py-40 bg-gray-50"
      >
        <CourseDetail courseInfo={sampleCourseDetail} />
      </section>

      {/* Units Section */}
      <section
        id={getSectionId('Units')}
        className="max-w-1000 mx-auto px-20 py-40"
      >
        <Units params={params} />
      </section>
    </div>
  );
}

export default page;
