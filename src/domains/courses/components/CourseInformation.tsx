import React from 'react';
import { paragraphStyle, titleStyle } from './CourseDetail';
import Link from 'next/link';
import getCourseInformationData from '@/lib/courseInformation';
import { cn } from '@/lib/utils';
import Button from '@/components/common/Button';

import { useParams } from 'next/navigation';
import { Book, Calendar, MapPin } from 'lucide-react';

export interface CourseInformationInfo {
  description?: string;
  courseCode?: string;
  duration?: string;
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
  tables?: {
    headers: string[];
    rows: string[][];
  }[];
  partners?: {
    name: string;
    desc: string;
  }[];
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
    <section className="max-w-[1600px] mx-auto px-20 md:px-80 py-40">
      <h1 className="text-3xl font-bold mb-10">Course Information</h1>
      <div
        className={cn(
          paragraphStyle,
          'grid grid-cols-1 md:grid-cols-2 gap-60 text-base'
        )}
      >
        <div>
          {courseInfo.description && (
            <div className="mb-20 col-span-2">
              {renderTextWithLineBreaks(courseInfo.description)}
            </div>
          )}
        </div>

        <div>
          <h2 className="text-xl font-bold mb-10">Overview</h2>
          {courseInfo.duration && (
            <div className="mb-8 flex items-center gap-10">
              <Calendar className="w-24 h-24 text-primary" />
              <h3 className={titleStyle}>Duration</h3>
              <span>{courseInfo.duration}</span>
            </div>
          )}
          {courseInfo.deliveryMode && (
            <div className="flex items-center gap-10">
              <Book className="w-24 h-24 text-primary" />
              <h3 className={titleStyle}>{courseInfo.deliveryMode.title}</h3>
              <span>{courseInfo.deliveryMode.mode}</span>
            </div>
          )}
          {courseInfo.deliverySite && (
            <div className="my-10">
              <div className="flex items-center gap-10">
                <MapPin className="w-24 h-24 text-primary" />
                <h3 className={titleStyle}>{courseInfo.deliverySite.title}</h3>
              </div>
              <div>
                {courseInfo.deliverySite.locations.map((location, index) => (
                  <div key={index}>
                    <span>
                      • <strong>{location.type}</strong>: {location.address}
                    </span>
                  </div>
                ))}
              </div>
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
    </section>
  );
}

function CourseInformation({ id }: { id: string }) {
  const params = useParams();
  let locale = 'en';
  if (params?.locale) {
    if (Array.isArray(params.locale)) {
      locale = params.locale[0];
    } else {
      locale = params.locale;
    }
  }
  const courseInformationData = getCourseInformationData(locale);
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
