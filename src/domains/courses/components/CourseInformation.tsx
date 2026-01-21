'use client';

import React from 'react';
import { paragraphStyle, titleStyle } from './CourseDetail';
import Link from 'next/link';
import getCourseInformationData from '@/lib/courseInformation';
import { cn } from '@/lib/utils';
import Button from '@/components/common/Button';

import { useParams } from 'next/navigation';
import {
  Bolt,
  ChevronRightIcon,
  Calendar,
  CheckCircleIcon,
  Info,
  MapPin,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export interface CourseInformationInfo {
  description?: string;
  courseCode?: string;
  cricosCode?: string;
  duration?: string;
  entryRequirement?: string | string[];
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
  startingDates?: {
    title?: string;
    dates?: string[];
  }[];
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
  // 다국어 지원
  const t = useTranslations('courseInformation');
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
      <div
        className={cn(
          paragraphStyle,
          'grid grid-cols-1 md:grid-cols-2 gap-60 text-base'
        )}
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-10">{t('title')}</h1>
          {courseInfo.description && (
            <div className="mb-20 col-span-2">
              {renderTextWithLineBreaks(courseInfo.description)}
            </div>
          )}
        </div>

        <div className="border p-20 border-neutral-200 h-max shadow-sm">
          <h2 className="text-xl font-bold mb-10">{t('overview')}</h2>
          {courseInfo.cricosCode && (
            <div className="mb-8 flex items-center gap-x-5">
              <Info className="w-22 h-22 text-primary" />
              <div className="flex gap-x-5">
                <h3 className={titleStyle}>CRICOS Code:</h3>
                <span>{courseInfo.cricosCode}</span>
              </div>
            </div>
          )}
          {courseInfo.duration && (
            <div className="mb-8 flex items-center gap-x-5">
              <Calendar className="w-22 h-22 text-primary" />
              <h3 className={titleStyle}>Duration:</h3>
              <span>{courseInfo.duration}</span>
            </div>
          )}
          {courseInfo.entryRequirement && (
            <div className="mb-8">
              <div className="flex items-center gap-5 mb-8">
                <CheckCircleIcon className="w-22 h-22 text-primary" />
                <h3 className={titleStyle}>Entry Requirement </h3>
                <Link
                  href="/course-entry-requirement"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <span className="text-primary underline text-sm">
                    More details
                  </span>
                  <ChevronRightIcon className="w-14 h-14 text-primary" />
                </Link>
              </div>
              <div className="ml-34">
                {Array.isArray(courseInfo.entryRequirement) ? (
                  <ul className="">
                    {courseInfo.entryRequirement.map((requirement, index) => (
                      <li key={index} className="text-sm">
                        {requirement}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="whitespace-pre-line">
                    {courseInfo.entryRequirement}
                  </p>
                )}
              </div>
            </div>
          )}
          {courseInfo.deliveryMode && (
            <div className="flex items-center gap-5">
              <Bolt className="w-22 h-22 text-primary" />
              <h3 className={titleStyle}>{courseInfo.deliveryMode.title}</h3>
              <span>{courseInfo.deliveryMode.mode}</span>
            </div>
          )}
          {courseInfo.deliverySite && (
            <div className="my-10">
              <div className="flex items-center gap-5">
                <MapPin className="w-22 h-22 text-primary" />
                <h3 className={titleStyle}>{courseInfo.deliverySite.title}</h3>
              </div>
              <div className="ml-34">
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

          {courseInfo.startingDates && (
            <div className="mt-20">
              <h3 className={titleStyle}>Starting Dates</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10">
                {courseInfo.startingDates.map((yearData, yearIndex) => (
                  <div
                    key={yearIndex}
                    className="border border-neutral-200 p-15 bg-neutral-50"
                  >
                    <h4 className="text-lg font-semibold text-primary mb-10 border-b border-neutral-200 pb-2">
                      {yearData.title}
                    </h4>
                    <div className="grid grid-cols-2 gap-8">
                      {yearData.dates?.map((date, dateIndex) => (
                        <div
                          key={dateIndex}
                          className="text-sm text-neutral-700 bg-white p-4 border border-neutral-100"
                        >
                          {date}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!hideButtons && (
            <>
              <Button
                className="w-1/2 bg-primary hover:bg-primary-bk text-white mt-20"
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
    'certificate-iv-in-fitness-fast-track',
    'certificate-iii-in-fitness-fast-track',
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
