'use client';

import Banner from '@/components/common/Banner';
import CourseDetail from '@/domains/courses/components/CourseDetail';
import CourseDetailMenu from '@/domains/courses/components/CourseDetailMenu';
import CourseOutline from '@/domains/courses/components/CourseOutline';
import Units from '@/domains/courses/components/Units';
import React, { use, useState } from 'react';

const mappingCourseTitle: { [key: string]: string } = {
  'bsb40120-certificate-iv-in-business': 'Certificate IV in Business',
  'bsb50120-diploma-of-business': 'Diploma of Business',
  fss: 'NSW Food Safety Supervisor',
  'bsb60120-advanced-diploma-of-business': 'Diploma of Hospitality Management',
  'bsb80120-graduate-diploma-of-management':
    'Graduate Diploma of Management (Learning)',
};

const mappingCourseImage: { [key: string]: string } = {
  'bsb40120-certificate-iv-in-business': '/courses/business/business_1.png',
  'bsb50120-diploma-of-business': '/courses/business/business_2.png',
  'bsb60120-advanced-diploma-of-business': '/courses/business/business_3.png',
  'bsb80120-graduate-diploma-of-management': '/courses/business/business_4.png',
};

const menuItems = [
  'Course Outline',
  'Course Details',
  'Entry Requirements',
  'Course Structure',
];

const mappingMenuItems: { [key: string]: string[] } = {
  'bsb40120-certificate-iv-in-business': menuItems,
  'bsb50120-diploma-of-business': [],
  fss: [],
  'bsb60120-advanced-diploma-of-business': menuItems,
  'bsb80120-graduate-diploma-of-management': menuItems,
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
