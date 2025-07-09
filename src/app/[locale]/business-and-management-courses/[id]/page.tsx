'use client';

import Banner from '@/components/common/Banner';
import CourseDetail from '@/domains/courses/components/CourseDetail';
import CourseDetailMenu from '@/domains/courses/components/CourseDetailMenu';
import CourseInformation from '@/domains/courses/components/CourseInformation';
import Units from '@/domains/courses/components/Units';
import { courseDetails } from '@/lib/constants';
import React, { use, useEffect } from 'react';

const mappingCourseTitle: { [key: string]: string } = {
  'bsb40120-certificate-iv-in-business': 'Certificate IV in Business',
  'bsb50120-diploma-of-business': 'Diploma of Business',
  fss: 'NSW Food Safety Supervisor',
  'bsb60120-advanced-diploma-of-business': 'Advanced Diploma of Business',
  'bsb80120-graduate-diploma-of-management':
    'Graduate Diploma of Management (Learning)',
};

const mappingCourseImage: { [key: string]: string } = {
  'bsb40120-certificate-iv-in-business': '/courses/business/business_1.png',
  'bsb50120-diploma-of-business': '/courses/business/business_2.png',
  'bsb60120-advanced-diploma-of-business': '/courses/business/business_3.png',
  'bsb80120-graduate-diploma-of-management': '/courses/business/business_4.png',
};

const menuItems = ['Course Information', 'Course Detail', 'Units'];

function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  // 동적으로 페이지 타이틀 설정
  useEffect(() => {
    const courseTitle = mappingCourseTitle[id] || 'Business Course';
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

      <CourseDetailMenu menuItems={menuItems} />

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
        <CourseDetail courseInfo={courseDetails[id] || {}} />
      </section>

      {/* Units Section */}
      <section
        id={getSectionId('Units')}
        className="max-w-1000 mx-auto px-20 py-40"
      >
        <Units params={{ id }} />
      </section>

      {/* Course Information Section */}
    </div>
  );
}

export default Page;
