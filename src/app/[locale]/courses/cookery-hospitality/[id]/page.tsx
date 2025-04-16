'use client';

import Banner from '@/components/common/Banner';
import CourseDetail from '@/domains/courses/components/CourseDetail';
import CourseDetailMenu from '@/domains/courses/components/CourseDetailMenu';
import CourseOutline from '@/domains/courses/components/CourseOutline';
import Units from '@/domains/courses/components/Units';
import React, { use, useState } from 'react';

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
};

const menuItems = [
  'Course Outline',
  'Course Details',
  'Entry Requirements',
  'Course Structure',
];

const mappingMenuItems: { [key: string]: string[] } = {
  'sit40521-certificate-iv-in-kitchen-management': menuItems,
  'industry-placement-work-placement': [],
  fss: [],
  'sit50422-diploma-of-hospitality-management': menuItems,
  'advanced-diploma-of-hospitality-management': menuItems,
  'industry-placement-hospitality-management': [],
};

function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const [selectedMenu, setSelectedMenu] = useState(menuItems[0]);

  const mappingCourseContent = {
    'Course Outline': <CourseOutline params={params} />,
    'Course Details': <CourseDetail />,
    // 'Entry Requirements': <EntryRequirements />,
    'Course Structure': <Units />,
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
        menuItems={mappingMenuItems[id] || menuItems}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />
      <section className="max-w-1000 mx-auto px-20 py-40">
        {
          mappingCourseContent[
            selectedMenu as keyof typeof mappingCourseContent
          ]
        }
      </section>
    </div>
  );
}

export default page;
