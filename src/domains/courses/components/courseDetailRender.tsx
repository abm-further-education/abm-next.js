'use client';

import React from 'react';
import { cn, parseBoldText } from '@/lib/utils';
import Link from 'next/link';
import type { TableData, LinkData, DescriptionItem } from '@/types/course';
import type { FaqItem } from '../contents/health/CertIIIHSA';

export const titleStyle = 'text-base font-bold';

export const paragraphStyle =
  'text-neutral-700 text-sm whitespace-pre-wrap';

const BoldText: React.FC<{ children: string }> = ({ children }) => {
  return <>{parseBoldText(children)}</>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isArray(value: any): value is any[] {
  return Array.isArray(value);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isTableData(value: any): value is TableData {
  return typeof value === 'object' && value.type === 'table';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isLinkData(value: any): value is LinkData {
  return typeof value === 'object' && value.type === 'link';
}

export function renderCourseDetailDescription(
  description: string | string[] | DescriptionItem[] | FaqItem[],
): React.ReactNode {
  if (
    isArray(description) &&
    description.length > 0 &&
    typeof description[0] === 'object' &&
    description[0] != null &&
    'question' in description[0] &&
    'answer' in description[0]
  ) {
    return null;
  }
  if (isArray(description)) {
    const firstItem = description[0];

    if (
      description.length > 0 &&
      (typeof firstItem === 'string' ||
        isTableData(firstItem) ||
        isLinkData(firstItem))
    ) {
      return (
        <div>
          {description.map((item, index) => {
            if (isTableData(item)) {
              return (
                <div key={`table-${index}`} className="overflow-x-auto mt-4">
                  <table className="w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        {item.headers.map((header, headerIndex) => {
                          if (
                            headerIndex === 0 &&
                            header === '' &&
                            item.headers[1]
                          ) {
                            return null;
                          }
                          const isSecondHeaderWithMerge =
                            headerIndex === 1 &&
                            item.headers[0] === '' &&
                            item.headers[1];

                          return (
                            <th
                              key={headerIndex}
                              className={cn(
                                'px-4 py-2 border border-gray-300 font-semibold text-left',
                                headerIndex === 0 ? 'w-120' : '',
                              )}
                              colSpan={isSecondHeaderWithMerge ? 2 : 1}
                            >
                              {header}
                            </th>
                          );
                        })}
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
                          {row.map((cell, cellIndex) => {
                            if (cellIndex === 0 && cell === '' && row[1]) {
                              return null;
                            }

                            const isSecondCellWithMerge =
                              cellIndex === 1 && row[0] === '' && row[1];

                            return (
                              <td
                                key={cellIndex}
                                className="px-4 py-2 border border-gray-300"
                                colSpan={isSecondCellWithMerge ? 2 : 1}
                              >
                                <BoldText>{cell}</BoldText>
                              </td>
                            );
                          })}
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

  return (
    <p className={paragraphStyle}>
      <BoldText>{description as string}</BoldText>
    </p>
  );
}
