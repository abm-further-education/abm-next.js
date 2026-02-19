import CourseProgress from '@/components/common/CourseProgress';
import Link from 'next/link';
import React from 'react';

function DiplomaHM() {
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
                  duration: '78 weeks',
                  color: 'bg-neutral-500',
                },
                {
                  code: 'SIT50422',
                  title: 'Diploma of Hospitality Management',
                  duration: '26 weeks',
                  color: 'bg-primary',
                },
                {
                  code: 'SIT60322',
                  title: 'Advanced Diploma of Hospitality Management',
                  duration: '26 weeks',
                  color: 'bg-neutral-500',
                },
              ]}
            />

            {/* Course Description */}
            <div className="text-gray-600 mb-8">
              <h3 className="text-base font-bold mb-8">Course Duration</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>
                  <span className="font-semibold">
                    Completed SIT40521 Certificate IV in Kitchen Management
                  </span>{' '}
                  → 20 credit transfers
                </li>
                <li>
                  <span className="font-semibold">
                    SIT50422 Diploma of Hospitality Management
                  </span>{' '}
                  duration: 26 weeks
                </li>
                <li>
                  <span className="font-semibold">Teaching period:</span> 2
                  terms × 10 weeks = 20 weeks
                </li>
                <li>
                  <span className="font-semibold">Holiday breaks:</span> 6 weeks
                  (as per timetable)
                </li>
              </ul>
            </div>
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
                  duration: '78 weeks',
                  color: 'bg-primary',
                },
                {
                  code: 'SIT60322',
                  title: 'Advanced Diploma of Hospitality Management',
                  duration: '26 weeks',
                  color: 'bg-neutral-500',
                },
              ]}
              startIndex={1}
            />

            {/* Course Description */}
            <div className="text-gray-600 mb-8">
              <h3 className="text-base font-bold mb-8">Course Duration</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>
                  <span className="font-semibold">Qualification duration:</span>{' '}
                  78 weeks
                </li>
                <li>
                  <span className="font-semibold">Teaching:</span> 6 terms × 10
                  weeks = 60 weeks
                </li>
                <li>
                  <span className="font-semibold">Holiday breaks:</span> 18
                  weeks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Link
        href="/cookery-and-hospitality-courses/industry-placement-hospitality-management"
        className="text-primary underline md:text-lg my-20 block hover:font-bold"
      >
        Work Placement • Food and Beverage Stream only
      </Link>
    </div>
  );
}

export default DiplomaHM;
