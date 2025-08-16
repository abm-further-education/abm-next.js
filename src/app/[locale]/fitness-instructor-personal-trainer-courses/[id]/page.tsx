'use client';

import Banner from '@/components/common/Banner';
import CourseDetail from '@/domains/courses/components/CourseDetail';
import CourseDetailMenu from '@/domains/courses/components/CourseDetailMenu';
import CourseInformation from '@/domains/courses/components/CourseInformation';
import Units from '@/domains/courses/components/Units';
import getCourseDetailsData from '@/lib/courseDetails';
import React, { useEffect, use } from 'react';

const menuItems = ['Course Information', 'Course Detail', 'Units'];

const mappingCourseTitle: { [key: string]: string } = {
  'sis30321-certificate-iii-in-fitness': 'Certificate III in Fitness',
  'sis40221-certificate-iv-in-fitness': 'Certificate IV in Fitness',
  'sis50321-diploma-of-sport': 'SIS50321 – Diploma of Sport (Coaching)',
  'certificate-iv-in-fitness-fast-track':
    'Certificate IV in Fitness (Fast Track)',
  'certificate-iii-in-fitness-fast-track':
    'Certificate III in Fitness (Fast Track)',
};

const mappingCourseImage: { [key: string]: string } = {
  'sis30321-certificate-iii-in-fitness': '/courses/fitness/fitness_1.png',
  'sis40221-certificate-iv-in-fitness': '/courses/fitness/fitness_5-banner.png',
  'sis50321-diploma-of-sport': '/courses/fitness/diploma-of-sport.png',
  'certificate-iv-in-fitness-fast-track':
    '/courses/fitness/fitness_3-banner.png',
  'certificate-iii-in-fitness-fast-track':
    '/courses/fitness/fitness_2-banner.png',
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
    const courseTitle = mappingCourseTitle[id] || 'Fitness Course';
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

      <section id={getSectionId('Course Information')}>
        <CourseInformation id={id} />
      </section>
      <section id={getSectionId('Course Detail')}>
        {/* Course Detail Section */}
        <CourseDetail courseInfo={courseDetails[id] || {}} courseId={id} />
      </section>
      {/* Units Section */}
      <section
        id={getSectionId('Units')}
        className="max-w-[1600px] mx-auto px-20 md:px-80 py-40"
      >
        <Units id={id} />
      </section>
    </div>
  );
}
