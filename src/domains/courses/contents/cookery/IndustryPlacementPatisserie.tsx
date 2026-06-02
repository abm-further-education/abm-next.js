import React from 'react';
import getCourseInformationData from '@/lib/courseInformation';
import { useParams } from 'next/navigation';

function IndustryPlacementPatisserie() {
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
    getCourseInformationData(locale)['industry-placement-patisserie'];

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
      term: 'Term 1',
      content: 'Nil',
    },
    {
      term: 'Term 2',
      content: 'Nil',
    },
    {
      term: 'Term 3',
      content:
        'Week 6 – 10 | 5*16=80 hours work placement (SITHCCC043* Work effectively as a cook)',
    },
    {
      term: 'Term 4',
      content:
        'Week 1 – 10 | 10*16=160 hours work placement (SITHCCC043* Work effectively as a cook)',
    },
    {
      term: 'Term 5',
      content:
        'Week 1 – 10 | 10*16=160 hours work placement (SITHCCC043* Work effectively as a cook)',
    },
    {
      term: 'Term 6',
      content:
        'Week 1 – 10 | 10*20=200 hours work placement (SITHCCC043* Work effectively as a cook)',
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-20">
        {renderTextWithLineBreaks(courseInfo?.description?.split('\n')[0])}
      </h2>
      <p>{renderTextWithLineBreaks(courseInfo?.description)}</p>

      <p className="my-20 text-sm text-gray-800 leading-relaxed">
        Work placement is structured across terms and delivered in real industry
        settings as follows.
      </p>

      <div className="flex flex-col gap-4 my-20">
        {placementSchedule.map((item, idx) => (
          <div
            key={idx}
            className="flex items-stretch rounded-lg overflow-hidden shadow-sm"
          >
            <div className="flex flex-col items-center justify-center bg-[#C07A3A] text-white px-6 py-4 min-w-[180px] text-center">
              <span className="font-bold italic text-base">{item.term}</span>
            </div>
            <div className="flex-1 bg-[#F0DCC4] px-6 py-4 flex flex-col justify-center">
              <p className="text-sm text-gray-900">{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="my-20 text-sm font-semibold text-gray-900">
        Total - 600 hours
      </p>
      <p className="my-10 text-sm text-gray-800">
        60 weeks teaching period + 18 weeks Term break
      </p>

      <div className="my-20 space-y-8 text-sm text-gray-800 leading-relaxed">
        <p>
          In Term 3 (Week 6-10), including Term 4 and Term 5, students complete
          320 hours of work placement for <strong>SITHCCC043</strong>. During
          this period, students are also required to attend 15 hours of classes
          to cover theory and work-based learning.
        </p>
        <p>
          In Term 6, students complete{' '}
          <strong>SITHCCC043* Work effectively as a cook</strong> with a minimum
          requirement of 48 service periods (total 200 hours). Students also
          complete <strong>SITHKOP013* Plan cooking operations</strong> as
          additional evidence.
        </p>
        <p>
          Where workplace exposure to special functions is limited, special
          function training and assessment are completed in ABM&apos;s commercial
          training kitchen. ABM&apos;s Academic Manager and Workplace Coordinator
          organise work placement and delivery timing according to student
          numbers and training requirements.
        </p>
      </div>

      <p className="my-20">
        {renderTextWithLineBreaks(courseInfo?.additionalInfo?.description)}
      </p>
    </div>
  );
}

export default IndustryPlacementPatisserie;
