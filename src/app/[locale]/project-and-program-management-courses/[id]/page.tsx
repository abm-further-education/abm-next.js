'use client';

import Banner from '@/components/common/Banner';
import CourseDetail from '@/domains/courses/components/CourseDetail';
import CourseDetailMenu from '@/domains/courses/components/CourseDetailMenu';
import CourseInformation from '@/domains/courses/components/CourseInformation';
import Units from '@/domains/courses/components/Units';
import { sampleCourseDetail } from '@/lib/constants';
import React, { use } from 'react';

const mappingCourseTitle: { [key: string]: string } = {
  'bsb40920-certificate-iv-in-project-management-practice':
    'Certificate IV in Project Management Practice',
  'bsb50820-diploma-of-project-management-practice':
    'Diploma of Project Management Practice',
  'bsb60820-advanced-diploma-of-project-management-practice':
    'Advanced Diploma of Project Management Practice',
};

const mappingCourseImage: { [key: string]: string } = {
  'bsb40920-certificate-iv-in-project-management-practice':
    '/courses/project/project_1.png',
  'bsb50820-diploma-of-project-management-practice':
    '/courses/project/project_2.png',
  'bsb60820-advanced-diploma-of-project-management-practice':
    '/courses/project/project_3.png',
};

const menuItems = ['Course Detail', 'Units', 'Course Information'];

function Page({ params }: { params: Promise<{ id: string }> }) {
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

      {/* Course Detail Section */}
      <section
        id={getSectionId('Course Detail')}
        className="max-w-1000 mx-auto px-20 py-40"
      >
        <CourseDetail courseInfo={sampleCourseDetail} />
      </section>

      {/* Units Section */}
      <section
        id={getSectionId('Units')}
        className="max-w-1000 mx-auto px-20 py-40 bg-gray-50"
      >
        <Units params={{ id }} />
      </section>

      {/* Course Information Section */}
      <section
        id={getSectionId('Course Information')}
        className="max-w-1000 mx-auto px-20 py-40"
      >
        <CourseInformation id={id} />
      </section>
    </div>
  );
}

export default Page;
