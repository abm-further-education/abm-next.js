import React from 'react';
import { cn, parseBoldText } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

// Helper component to render text with bold parsing
const BoldText: React.FC<{ children: string }> = ({ children }) => {
  return <>{parseBoldText(children)}</>;
};

export interface TableData {
  type: 'table';
  headers: string[];
  rows: string[][];
}

export interface LinkData {
  type: 'link';
  text: string;
  url: string;
}

export type DescriptionItem = string | TableData | LinkData;

export interface CourseDetailItem {
  title: string;
  description: string | string[] | DescriptionItem[];
}

export interface CourseDetailInfo {
  [key: string]: CourseDetailItem;
}

interface CourseDetailProps {
  courseInfo: CourseDetailInfo;
  courseId?: string;
}

// 배열인지 확인하는 함수
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isArray(value: any): value is any[] {
  return Array.isArray(value);
}

// 테이블 데이터인지 확인하는 함수
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isTableData(value: any): value is TableData {
  return typeof value === 'object' && value.type === 'table';
}

// 링크 데이터인지 확인하는 함수
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isLinkData(value: any): value is LinkData {
  return typeof value === 'object' && value.type === 'link';
}

// description을 렌더링하는 함수
function renderDescription(
  description: string | string[] | DescriptionItem[]
): React.ReactNode {
  if (isArray(description)) {
    // 배열의 첫 번째 요소를 확인하여 타입을 결정
    const firstItem = description[0];

    // DescriptionItem[] 배열인 경우 (문자열과 테이블 혼합)
    if (
      description.length > 0 &&
      (typeof firstItem === 'string' ||
        isTableData(firstItem) ||
        isLinkData(firstItem))
    ) {
      return (
        <div>
          {description.map((item, index) => {
            // 각 아이템의 타입을 다시 확인
            if (isTableData(item)) {
              return (
                <div key={`table-${index}`} className="overflow-x-auto mt-4">
                  <table className="w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        {item.headers.map((header, headerIndex) => (
                          <th
                            key={headerIndex}
                            className={cn(
                              'px-4 py-2 border border-gray-300 font-semibold text-left',
                              headerIndex === 0 ? 'w-120' : ''
                            )}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {item.rows.map((row, rowIndex) => (
                        <tr
                          key={rowIndex}
                          className={
                            rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                          }
                        >
                          {row.map((cell, cellIndex) => (
                            <td
                              key={cellIndex}
                              className="px-4 py-2 border border-gray-300"
                            >
                              <BoldText>{cell}</BoldText>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            } else if (isLinkData(item)) {
              return (
                <Link
                  key={`link-${index}`}
                  href={item.url}
                  className="text-blue-600 hover:text-blue-800 underline text-sm"
                >
                  {item.text}
                </Link>
              );
            } else if (typeof item === 'string') {
              return (
                <p key={`text-${index}`} className={paragraphStyle}>
                  <BoldText>{item}</BoldText>
                </p>
              );
            }
            return null;
          })}
        </div>
      );
    }

    // string[] 배열인 경우 (기존 리스트 형태)
    return (
      <ul>
        {(description as string[]).map((item, index) => (
          <li key={index} className={paragraphStyle}>
            • <BoldText>{item}</BoldText>
          </li>
        ))}
      </ul>
    );
  }

  // 단일 문자열인 경우
  return (
    <p className={paragraphStyle}>
      <BoldText>{description as string}</BoldText>
    </p>
  );
}

function CourseDetail({ courseInfo, courseId }: CourseDetailProps) {
  const t = useTranslations('courseDetail');

  const matchStudyPlan = {
    'sit40521-certificate-iv-in-kitchen-management':
      '/courses/study_plan/KM.png',
    'sit50422-diploma-of-hospitality-management': '/courses/study_plan/HM.png',
    'advanced-diploma-of-hospitality-management': '/courses/study_plan/HM.png',
    'sis30321-certificate-iii-in-fitness': '/courses/study_plan/Fitness.png',
    'sis40221-certificate-iv-in-fitness': '/courses/study_plan/Fitness.png',
    'sis50321-diploma-of-sport': '/courses/study_plan/Fitness.png',
    'certificate-iii-in-fitness-fast-track':
      '/courses/study_plan/fitness_fast_track.png',
    'certificate-iv-in-fitness-fast-track':
      '/courses/study_plan/fitness_fast_track.png',
    'bsb40120-certificate-iv-in-business': '/courses/study_plan/Business.png',
    'bsb50120-diploma-of-business': '/courses/study_plan/Business.png',
    'bsb60120-advanced-diploma-of-business': '/courses/study_plan/Business.png',
    'bsb80120-graduate-diploma-of-management':
      '/courses/study_plan/Business.png',
    'bsb40920-certificate-iv-in-project-management-practice':
      '/courses/study_plan/PM.png',
    'bsb50820-diploma-of-project-management-practice':
      '/courses/study_plan/PM.png',
    'bsb60720-advanced-diploma-of-project-management-practice':
      '/courses/study_plan/PM.png',
    'bsb40420-certificate-iv-in-human-resource-management':
      '/courses/study_plan/HR.png',
    'bsb50320-diploma-of-human-resource-management':
      '/courses/study_plan/HR.png',
    'bsb60220-advanced-diploma-of-human-resource-management':
      '/courses/study_plan/HR.png',
    'bsb60320-advanced-diploma-of-human-resource-management':
      '/courses/study_plan/HR.png',
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-20 py-5 md:px-80">
        <h1 className="text-3xl font-bold mb-10">{t('title')}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">
          {courseId !==
            'hlt33115-certificate-iii-in-health-services-assistance' && (
            <div className="mb-30">
              <div className="mt-15">
                <Image
                  src={matchStudyPlan[courseId as keyof typeof matchStudyPlan]}
                  alt="Study Plan"
                  width={800}
                  height={600}
                  className="w-full max-w-800 h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          )}
          <div>
            {Object.entries(courseInfo).map(([sectionKey, sectionData]) => (
              <div key={sectionKey} className="mb-14">
                <h3 className={titleStyle}>{sectionData.title}</h3>
                {renderDescription(sectionData.description)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseDetail;

export const titleStyle = 'text-base font-bold';

export const paragraphStyle = 'text-neutral-700 text-sm whitespace-pre-wrap';
