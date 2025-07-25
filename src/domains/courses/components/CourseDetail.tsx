import React from 'react';
import { parseBoldText } from '@/lib/utils';

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
                            className="px-4 py-2 border border-gray-300 font-semibold text-left"
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
                <a
                  key={`link-${index}`}
                  href={item.url}
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  {item.text}
                </a>
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

function CourseDetail({ courseInfo }: CourseDetailProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-20 py-5 md:px-80">
        <h1 className="text-3xl font-bold mb-10">Course Detail</h1>

        {Object.entries(courseInfo).map(([sectionKey, sectionData]) => (
          <div key={sectionKey} className="mb-14">
            <h3 className={titleStyle}>{sectionData.title}</h3>
            {renderDescription(sectionData.description)}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CourseDetail;

export const titleStyle = 'text-base font-bold';

export const paragraphStyle = 'text-neutral-700 text-sm whitespace-pre-wrap';
