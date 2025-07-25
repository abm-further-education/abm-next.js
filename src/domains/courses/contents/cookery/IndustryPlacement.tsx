import React from 'react';
import Image from 'next/image';
import getCourseInformationData from '@/lib/courseInformation';
import { useParams } from 'next/navigation';

function IndustryPlacement() {
  const params = useParams();
  let locale = 'en';
  if (params?.locale) {
    if (Array.isArray(params.locale)) {
      locale = params.locale[0];
    } else {
      locale = params.locale;
    }
  }
  const courseInfo =
    getCourseInformationData(locale)['industry-placement-work-placement'];

  // 줄바꿈 처리
  const renderTextWithLineBreaks = (text: string | undefined) => {
    if (!text) return null;
    return text.split('\n').map((line, idx) => (
      <span key={idx}>
        {line}
        {idx < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-20">
        {renderTextWithLineBreaks(courseInfo?.description?.split('\n')[0])}
      </h2>
      <p>{renderTextWithLineBreaks(courseInfo?.description)}</p>
      {/* Render tables if present */}
      {courseInfo?.tables?.map((table, tIdx) => (
        <div className="overflow-x-auto my-20" key={tIdx}>
          <table className="min-w-full table-fixed border border-gray-300 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                {table.headers.map((header, hIdx) => (
                  <th
                    key={hIdx}
                    className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-300"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {table.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-gray-50">
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200"
                    >
                      {renderTextWithLineBreaks(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      <p className="my-20">
        {renderTextWithLineBreaks(courseInfo?.additionalInfo?.description)}
      </p>
      {/* Render partners if present */}
      {courseInfo?.partners && (
        <>
          <ul className="space-y-4 text-gray-800 text-sm leading-relaxed">
            {courseInfo.partners.map((partner, idx) => (
              <li key={idx}>
                <strong className="text-gray-900">{partner.name}</strong>:{' '}
                {partner.desc}
              </li>
            ))}
          </ul>
        </>
      )}
      <Image
        src="/courses/cookery/partners.png"
        alt="partners"
        width={900}
        height={400}
      />
    </div>
  );
}

export default IndustryPlacement;
