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

  const placementSchedule = [
    {
      term: 'Term 1 - Term 2',
      content: 'Theory + Practical Classes',
    },
    {
      term: 'Term 3',
      termSub: '(week 6-10)',
      content: 'Theory + Practical Classes',
      bullet: 'Week 6 - 10: additional 16 hours per week work placement',
    },
    {
      term: 'Term 4 - Term 5',
      content: 'Theory + Practical Classes',
      sub: 'additional 16 hours per week work placement',
    },
    {
      term: 'Term 6',
      content: '20 hours per week work placement',
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-20">
        {renderTextWithLineBreaks(courseInfo?.description?.split('\n')[0])}
      </h2>
      <p>{renderTextWithLineBreaks(courseInfo?.description)}</p>

      <p className="my-20 text-sm text-gray-800 leading-relaxed">
        The course now includes 600 hours of mandatory work placement, providing
        students with extensive hands-on industry experience.
        <br />
        Students can work additional hours during placement terms in compliance
        with their student visa conditions.
      </p>

      <div className="flex flex-col gap-4 my-20">
        {placementSchedule.map((item, idx) => (
          <div key={idx} className="flex items-stretch rounded-lg overflow-hidden shadow-sm">
            <div className="flex flex-col items-center justify-center bg-[#C07A3A] text-white px-6 py-4 min-w-[180px] text-center">
              <span className="font-bold italic text-base">{item.term}</span>
              {item.termSub && (
                <span className="text-xs italic mt-0.5">{item.termSub}</span>
              )}
            </div>
            <div className="flex-1 bg-[#F0DCC4] px-6 py-4 flex flex-col justify-center">
              <p className="font-bold text-gray-900 text-sm">{item.content}</p>
              {item.bullet && (
                <ul className="list-disc list-inside mt-1">
                  <li className="text-sm text-gray-800">{item.bullet}</li>
                </ul>
              )}
              {item.sub && (
                <p className="text-sm text-gray-800 mt-0.5">{item.sub}</p>
              )}
            </div>
          </div>
        ))}
      </div>

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
        className="mx-auto"
      />
    </div>
  );
}

export default IndustryPlacement;
