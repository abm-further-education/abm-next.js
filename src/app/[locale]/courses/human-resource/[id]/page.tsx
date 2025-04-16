'use client';

import Banner from '@/components/common/Banner';
import CourseDetail from '@/domains/courses/components/CourseDetail';
import CourseDetailMenu from '@/domains/courses/components/CourseDetailMenu';
import CourseOutline from '@/domains/courses/components/CourseOutline';
import Units from '@/domains/courses/components/Units';
import React, { use, useState } from 'react';

const mappingCourseTitle: { [key: string]: string } = {
  'bsb40420-certificate-iv-in-human-resource-management':
    'Certificate IV in Human Resource Management',
  'bsb50320-diploma-of-human-resource-management':
    'Diploma of Human Resource Management',
  'bsb60320-advanced-diploma-of-human-resource-management':
    'Advanced Diploma of Human Resource Management',
};

const mappingCourseImage: { [key: string]: string } = {
  'bsb40420-certificate-iv-in-human-resource-management':
    '/courses/hr/hr_1.png',
  'bsb50320-diploma-of-human-resource-management': '/courses/hr/hr_2.png',
  'bsb60320-advanced-diploma-of-human-resource-management':
    '/courses/hr/hr_3.png',
};

const menuItems = [
  'Course Outline',
  'Course Details',
  'Entry Requirements',
  'Course Structure',
];

const mappingMenuItems: { [key: string]: string[] } = {
  'bsb40420-certificate-iv-in-human-resource-management': menuItems,
  'bsb50320-diploma-of-human-resource-management': menuItems,
  'bsb60320-advanced-diploma-of-human-resource-management': menuItems,
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
          <div className="bg-neutral-900/40 w-full h-screen md:h-700 absolute z-10" />
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
