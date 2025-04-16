'use client';

import Banner from '@/components/common/Banner';
import CourseDetail from '@/domains/courses/components/CourseDetail';
import CourseDetailMenu from '@/domains/courses/components/CourseDetailMenu';
import CourseOutline from '@/domains/courses/components/CourseOutline';
import Units from '@/domains/courses/components/Units';
import React, { use, useState } from 'react';

const menuItems = [
  'Course Outline',
  'Course Details',
  'Entry Requirements',
  'Course Structure',
];

const mappingMenuItems: { [key: string]: string[] } = {
  'sis30321-certificate-iv-in-fitness': menuItems,
  'sis40221-certificate-iii-in-fitness': menuItems,
  fss: [],
};

const mappingCourseTitle: { [key: string]: string } = {
  'sis30321-certificate-iv-in-fitness': 'Certificate IV in Fitness',
  'sis40221-certificate-iii-in-fitness': 'Certificate III in Fitness',
  'certificate-iv-in-sport-fast-track': 'Certificate IV in Sport',
  'certificate-iii-in-sport-fast-track': 'Certificate III in Sport',
};

const mappingCourseImage: { [key: string]: string } = {
  'sis30321-certificate-iv-in-fitness': '/courses/fitness/fitness_1.png',
  'sis40221-certificate-iii-in-fitness': '/courses/fitness/fitness_2.png',
  'certificate-iv-in-sport-fast-track': '/courses/fitness/fitness_3.png',
  'certificate-iii-in-sport-fast-track': '/courses/fitness/fitness_4.png',
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
