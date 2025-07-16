import React from 'react';
import { paragraphStyle, titleStyle } from './CourseDetail';
import Link from 'next/link';
import { courseInformationData } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Button from '@/components/common/Button';
import CourseTimetable from './CourseTimetable';

export interface CourseInformationInfo {
  description?: string;
  courseCode?: string;
  deliveryMode?: {
    title: string;
    mode: string;
  };
  deliverySite?: {
    title: string;
    locations: {
      type: string;
      address: string;
    }[];
  };
  additionalInfo?: {
    linkText?: string;
    linkUrl?: string;
    description?: string;
  };
}

interface CourseInformationProps {
  courseInfo: CourseInformationInfo;
  hideButtons?: boolean;
}

function CourseInformationContent({
  courseInfo,
  hideButtons = false,
}: CourseInformationProps) {
  // 텍스트의 줄바꿈을 처리하는 함수
  const renderTextWithLineBreaks = (text: string) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <>
      <div className={cn(paragraphStyle, 'grid grid-cols-2 gap-20')}>
        <div>
          {courseInfo.description && (
            <div className="mb-20 col-span-2">
              {renderTextWithLineBreaks(courseInfo.description)}
            </div>
          )}
        </div>

        <div>
          {courseInfo.deliveryMode && (
            <div className="my-10">
              <h3 className={titleStyle}>{courseInfo.deliveryMode.title}</h3>
              <span>{courseInfo.deliveryMode.mode}</span>
            </div>
          )}
          {courseInfo.deliverySite && (
            <div className="my-10">
              <h3 className={titleStyle}>{courseInfo.deliverySite.title}</h3>
              {courseInfo.deliverySite.locations.map((location, index) => (
                <div key={index}>
                  <span>
                    • <strong>{location.type}</strong>: {location.address}
                  </span>
                </div>
              ))}
            </div>
          )}
          {courseInfo.additionalInfo && (
            <div>
              <p>
                {courseInfo.additionalInfo.description &&
                  courseInfo.additionalInfo.description}
                {courseInfo.additionalInfo.linkText &&
                  courseInfo.additionalInfo.linkUrl && (
                    <>
                      {' '}
                      <Link
                        href={courseInfo.additionalInfo.linkUrl}
                        target="_blank"
                        className="underline"
                      >
                        {courseInfo.additionalInfo.linkText}
                      </Link>
                    </>
                  )}
              </p>
            </div>
          )}

          {!hideButtons && (
            <>
              <Button
                className="w-1/2 bg-primary hover:bg-primary-bk text-white mt-10"
                onClick={() => {
                  window.open(
                    'https://form.jotform.com/ABMonlineforms/abm-further-education-application-f',
                    '_blank'
                  );
                }}
              >
                Enrol Now
              </Button>
            </>
          )}
        </div>
      </div>
      {courseInfo.courseCode && (
        <CourseTimetable courseCode={courseInfo.courseCode} />
      )}
    </>
  );
}

function CourseInformation({ id }: { id: string }) {
  const courseInfo = courseInformationData[id] || {};

  // 특정 코스들에 대해 "More information"과 "Enrol Now" 버튼을 숨김
  const hideButtonsForCourses = [
    'industry-placement-work-placement',
    'industry-placement-hospitality-management',
    'fss',
  ];

  const shouldHideButtons = hideButtonsForCourses.includes(id);

  return (
    <CourseInformationContent
      courseInfo={courseInfo}
      hideButtons={shouldHideButtons}
    />
  );
}

export default CourseInformation;
