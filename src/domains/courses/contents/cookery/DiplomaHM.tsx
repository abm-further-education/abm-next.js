import CourseProgress from '@/components/common/CourseProgress';
import Link from 'next/link';
import React from 'react';
import type { CourseDetailItem } from '@/types/course';

const titleStyle = 'text-base font-bold';

function renderDescription(description: CourseDetailItem['description']) {
  if (typeof description === 'string') {
    return (
      <p className="text-neutral-700 text-sm whitespace-pre-wrap">
        {description}
      </p>
    );
  }

  if (Array.isArray(description)) {
    return (
      <div>
        {description.map((item, index) => (
          <p
            key={index}
            className="text-neutral-700 text-sm whitespace-pre-wrap"
          >
            {typeof item === 'string' ? item : JSON.stringify(item)}
          </p>
        ))}
      </div>
    );
  }

  return null;
}

function DiplomaHM({
  sections,
  courseId,
}: {
  sections: [string, CourseDetailItem][];
  courseId: string;
}) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">
        {/* Dimmed overlay */}

        {/* Content */}
        <div className="relative z-10 bg-white">
          <div
            className="relative bg-cover bg-center bg-no-repeat h-120 p-20"
            style={{
              backgroundImage: 'url(/courses/cookery/KM.png)',
            }}
          >
            {/* Dimmed overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            <h2 className="text-lg md:text-xl font-bold text-primary absolute bottom-20">
              Packaged with Kitchen Management Course
            </h2>
          </div>
          <div className="p-20">
            {/* Course Progression Structure */}
            <CourseProgress
              courses={[
                {
                  code: 'SIT40521',
                  title: 'Certificate IV in Kitchen Management',
                  color: 'bg-neutral-500',
                },
                {
                  code: 'SIT50422',
                  title: 'Diploma of Hospitality Management',
                  color: 'bg-primary',
                },
                {
                  code: 'SIT60322',
                  title: 'Advanced Diploma of Hospitality Management',
                  color: 'bg-neutral-500',
                },
              ]}
            />

            {/* Course Description */}

            {/* <div className="text-gray-600 mb-8">
              <h3 className="text-base font-bold mb-8">Work Placement</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>285 hours</li>
              </ul>
            </div> */}
          </div>
        </div>

        <div className="relative z-10 bg-white">
          <div
            className="relative bg-cover bg-center bg-no-repeat h-120 p-20"
            style={{
              backgroundImage: 'url(/courses/cookery/hm_3.png)',
            }}
          >
            {/* Dimmed overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <h2 className="text-lg md:text-xl absolute bottom-20 font-bold text-primary">
              Food & Beverage Stream
            </h2>
          </div>
          <div className="p-20">
            {/* Course Progression Structure */}
            <CourseProgress
              courses={[
                {
                  code: 'SIT50422',
                  title: 'Diploma of Hospitality Management',
                  color: 'bg-primary',
                },
                {
                  code: 'SIT60322',
                  title: 'Advanced Diploma of Hospitality Management',
                  color: 'bg-neutral-500',
                },
              ]}
              startIndex={1}
            />

            {/* Course Description */}
          </div>
        </div>
      </div>
      <Link
        href="/cookery-and-hospitality-courses/industry-placement-hospitality-management"
        className="text-primary underline md:text-lg my-20 block hover:font-bold"
      >
        Work Placement • Food and Beverage Stream only
      </Link>
      {courseId === 'advanced-diploma-of-hospitality-management' && (
        <div>
          {sections
            .filter(([sectionKey, sectionData]) => {
              const key = sectionKey.toLowerCase();
              const title = sectionData.title.toLowerCase();
              return (
                key === 'jobroles' ||
                key === 'job_roles' ||
                title.includes('job role') ||
                key === 'courseduration' ||
                key === 'course_duration' ||
                title.includes('course duration')
              );
            })
            .map(([sectionKey, sectionData]) => (
              <div key={sectionKey} className="mb-14">
                <h3 className={titleStyle}>{sectionData.title}</h3>
                {renderDescription(sectionData.description)}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default DiplomaHM;
