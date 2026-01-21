'use client';

import Banner from '@/components/common/Banner';
import Gallery from '@/components/common/Gallery';
import CourseDetail from '@/domains/courses/components/CourseDetail';
import CourseDetailMenu from '@/domains/courses/components/CourseDetailMenu';
import CourseInformation from '@/domains/courses/components/CourseInformation';
import Units from '@/domains/courses/components/Units';
import getCourseDetailsData from '@/lib/courseDetails';
import getCourseInformationData from '@/lib/courseInformation';
import React, { use } from 'react';

const mappingCourseTitle: { [key: string]: string } = {
  'bsb40920-certificate-iv-in-project-management-practice':
    'Certificate IV in Project Management Practice',
  'bsb50820-diploma-of-project-management-practice':
    'Diploma of Project Management Practice',
  'bsb60720-advanced-diploma-of-program-management':
    'Advanced Diploma of Program Management',
};

const mappingCourseImage: { [key: string]: string } = {
  'bsb40920-certificate-iv-in-project-management-practice':
    '/courses/project/project_1.png',
  'bsb50820-diploma-of-project-management-practice':
    '/courses/project/project_2.png',
  'bsb60720-advanced-diploma-of-program-management':
    '/courses/project/project_3.png',
};

const menuItems = ['Course Information', 'Course Detail', 'Units'];

interface ProjectDetailClientProps {
  params: Promise<{ id: string; locale: string }>;
}

export default function ProjectDetailClient({
  params,
}: ProjectDetailClientProps) {
  const { id, locale } = use(params);
  const courseDetails = getCourseDetailsData(locale);
  const courseInformationData = getCourseInformationData(locale);

  // 섹션 ID를 생성하는 함수
  const getSectionId = (menuItem: string) => {
    return menuItem.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <div className="pb-40">
      <Banner
        slides={[
          {
            imgPath: mappingCourseImage[id] || '/courses/project/project_1.png',
            title: `${courseInformationData[id]?.courseCode} ${mappingCourseTitle[id]}`,
            content: '',
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/30 w-full h-screen md:h-700 absolute z-10" />
        }
      />
      <CourseDetailMenu menuItems={menuItems} />
      {/* Course Information Section */}
      <section id={getSectionId('Course Information')}>
        <CourseInformation id={id} />
      </section>

      {/* Course Detail Section */}
      <section id={getSectionId('Course Detail')}>
        <CourseDetail courseInfo={courseDetails[id] || {}} courseId={id} />
      </section>

      {/* Units Section */}
      <section
        id={getSectionId('Units')}
        className="max-w-[1600px] mx-auto px-20 md:px-80 py-40 grid grid-cols-1 lg:grid-cols-2 gap-40"
      >
        <Units id={id} />
        <Gallery
          showTitle={false}
          breakpointColumns={{
            default: 2,
            1100: 3,
            700: 2,
          }}
          images={images}
        />
      </section>
    </div>
  );
}

const images = ['/campus/campus_1.png', '/campus/campus_2.png'];
