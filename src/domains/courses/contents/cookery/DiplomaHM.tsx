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
