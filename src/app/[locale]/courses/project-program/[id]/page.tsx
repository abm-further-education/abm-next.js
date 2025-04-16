'use client';

import Banner from '@/components/common/Banner';
import CourseDetail from '@/domains/courses/components/CourseDetail';
import CourseDetailMenu from '@/domains/courses/components/CourseDetailMenu';
import CourseOutline from '@/domains/courses/components/CourseOutline';
import Units from '@/domains/courses/components/Units';
import React, { use, useState } from 'react';

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

const menuItems = [
  'Course Outline',
  'Course Details',
  'Entry Requirements',
  'Course Structure',
];

const mappingMenuItems: { [key: string]: string[] } = {
  'bsb40920-certificate-iv-in-project-management-practice': menuItems,
  'bsb50820-diploma-of-project-management-practice': menuItems,
  'bsb60820-advanced-diploma-of-project-management-practice': menuItems,
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
