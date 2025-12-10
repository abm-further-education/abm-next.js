'use client';

import Banner from '@/components/common/Banner';
import Gallery from '@/components/common/Gallery';
import CourseDetail from '@/domains/courses/components/CourseDetail';
import CourseDetailMenu from '@/domains/courses/components/CourseDetailMenu';
import CourseInformation from '@/domains/courses/components/CourseInformation';
import Units from '@/domains/courses/components/Units';
import { cn } from '@/lib';
import getCourseDetailsData from '@/lib/courseDetails';
import React, { useEffect, use } from 'react';

const menuItems = ['Course Information', 'Course Detail'];

const mappingCourseTitle: { [key: string]: string } = {
  'hlt33115-certificate-iii-in-health-services-assistance':
    'HLT33115 Certificate III in Health Services Assistance',
};

const mappingCourseImage: { [key: string]: string } = {
  'hlt33115-certificate-iii-in-health-services-assistance': '/home/HSA.png',
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
    const courseTitle = mappingCourseTitle[id] || 'Health Course';
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
            imgPath: mappingCourseImage[id] || '/home/HSA.png',
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
          images={images_HSA}
        />
      </section>
    </div>
  );
}

const images_HSA = [
  '/courses/health/health_4.png',
  '/courses/health/health_5.png',
  '/courses/health/health_6.png',
  '/courses/health/health_7.png',
];
