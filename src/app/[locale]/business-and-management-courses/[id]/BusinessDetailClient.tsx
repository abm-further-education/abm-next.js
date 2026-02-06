'use client';

import Banner from '@/components/common/Banner';
import Gallery from '@/components/common/Gallery';
import CourseDetail from '@/domains/courses/components/CourseDetail';
import CourseDetailMenu from '@/domains/courses/components/CourseDetailMenu';
import CourseInformation from '@/domains/courses/components/CourseInformation';
import Units from '@/domains/courses/components/Units';
import React from 'react';
import type { CourseDetailInfo, CourseInformationInfo } from '@/types/course';

const mappingCourseTitle: { [key: string]: string } = {
  'bsb40120-certificate-iv-in-business': 'Certificate IV in Business',
  'bsb50120-diploma-of-business': 'Diploma of Business',
  'bsb60120-advanced-diploma-of-business': 'Advanced Diploma of Business',
  'bsb80120-graduate-diploma-of-management':
    'Graduate Diploma of Management (Learning)',
};

const mappingCourseImage: { [key: string]: string } = {
  'bsb40120-certificate-iv-in-business': '/courses/business/business_1.jpg',
  'bsb50120-diploma-of-business': '/courses/business/business_2.png',
  'bsb60120-advanced-diploma-of-business': '/courses/business/business_3.png',
  'bsb80120-graduate-diploma-of-management': '/courses/business/business_4.png',
};

const menuItems = ['Course Information', 'Course Detail', 'Units'];

interface BusinessDetailClientProps {
  id: string;
  locale: string;
  courseDetails: CourseDetailInfo | null;
  courseInformation: CourseInformationInfo | null;
}

export default function BusinessDetailClient({
  id,
  locale,
  courseDetails,
  courseInformation,
}: BusinessDetailClientProps) {

  // 섹션 ID를 생성하는 함수
  const getSectionId = (menuItem: string) => {
    return menuItem.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <div className="pb-40">
      <Banner
        slides={[
          {
            imgPath: mappingCourseImage[id] || '/courses/business/business_1.jpg',
            title: `${courseInformation?.courseCode || ''} ${mappingCourseTitle[id] || ''}`.trim(),
            content: '',
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/30 w-full h-screen md:h-700 absolute z-10" />
        }
      />

      <CourseDetailMenu menuItems={menuItems} />

      <section id={getSectionId('Course Information')}>
        <CourseInformation id={id} initialData={courseInformation} />
      </section>

      {/* Course Detail Section */}
      <section id={getSectionId('Course Detail')}>
        <CourseDetail courseInfo={courseDetails || {}} courseId={id} />
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
          }}
          images={images}
        />
      </section>
    </div>
  );
}

const images = ['/campus/campus_1.png', '/campus/campus_2.png'];
