'use client';

import Banner from '@/components/common/Banner';
import Gallery from '@/components/common/Gallery';
import CourseDetail from '@/domains/courses/components/CourseDetail';
import CourseDetailMenu from '@/domains/courses/components/CourseDetailMenu';
import CourseInformation from '@/domains/courses/components/CourseInformation';
import Units from '@/domains/courses/components/Units';
import React from 'react';
import type { CourseDetailInfo, CourseInformationInfo } from '@/types/course';

const menuItems = ['Course Information', 'Course Detail', 'Units'];

const mappingCourseTitle: { [key: string]: string } = {
  'sis30321-certificate-iii-in-fitness': 'Certificate III in Fitness',
  'sis40221-certificate-iv-in-fitness': 'Certificate IV in Fitness',
  'sis50321-diploma-of-sport': 'Diploma of Sport (Coaching)',
  'certificate-iv-in-fitness-fast-track':
    'Certificate IV in Fitness (Fast Track)',
  'certificate-iii-in-fitness-fast-track':
    'Certificate III in Fitness (Fast Track)',
};

const mappingCourseImage: { [key: string]: string } = {
  'sis30321-certificate-iii-in-fitness':
    '/courses/fitness/ABM_Fitness_Photos_13.jpg',
  'sis40221-certificate-iv-in-fitness':
    '/courses/fitness/ABM_Fitness_Photos_10.jpg',
  'sis50321-diploma-of-sport': '/courses/fitness/diploma-of-sport.png',
  'certificate-iv-in-fitness-fast-track':
    '/courses/fitness/ABM_Fitness_Photos_9.jpg',
  'certificate-iii-in-fitness-fast-track':
    '/courses/fitness/ABM_Fitness_Photos_11.jpg',
};

interface FitnessDetailClientProps {
  id: string;
  locale: string;
  courseDetails: CourseDetailInfo | null;
  courseInformation: CourseInformationInfo | null;
}

export default function FitnessDetailClient({
  id,
  courseDetails,
  courseInformation,
}: FitnessDetailClientProps) {

  // 섹션 ID를 생성하는 함수
  const getSectionId = (menuItem: string) => {
    return menuItem.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <div className="pb-40">
      <Banner
        slides={[
          {
            imgPath:
              mappingCourseImage[id] || '/courses/fitness/ABM_Fitness_Photos_13.jpg',
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
            1100: 3,
            700: 2,
          }}
          images={images}
        />
      </section>
    </div>
  );
}

const images = [
  '/courses/fitness/prac_1.jpg',
  '/courses/fitness/prac_2.png',
  '/courses/fitness/prac_3.png',
  '/courses/fitness/prac_4.jpg',
];
