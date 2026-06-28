'use client';
import React from 'react';
import type { JSX } from 'react';
import Image from 'next/image';
// import Button from '@/components/common/Button';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { ChevronUpIcon } from 'lucide-react';
import getShortCourseData from '@/lib/shortCourseData';
import { getUpcomingShortCourseDates } from '@/lib/short-course-dates';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useEditMode } from '@/contexts/EditModeContext';
import type { ShortCourseData } from '@/lib/shortCourseData/shortCourseData.en';
import ShortCourseEditable from './ShortCourseEditable';

interface FSSProps {
  data: ShortCourseData;
  courseId: string;
}

const COURSE_CARD_BG_CLASSES = ['bg-orange-50', 'bg-orange-50', 'bg-orange-50'];

function FSS({ data: dataProp, courseId }: FSSProps) {
  const params = useParams();
  const editMode = useEditMode();
  let locale = 'en';
  if (params?.locale) {
    if (Array.isArray(params.locale)) {
      locale = params.locale[0];
    } else {
      locale = params.locale;
    }
  }
  const fallbackData = getShortCourseData(locale).fss;
  const fssData = dataProp
    ? { ...dataProp, dates: fallbackData.dates ?? dataProp.dates }
    : fallbackData;
  const sortedDates = getUpcomingShortCourseDates(fssData.dates);
  const basePrice = fssData.price;
  const promoDiscountedPrice = Math.round(basePrice * 0.85);

  if (editMode?.isEditMode && courseId) {
    return (
      <ShortCourseEditable courseId={courseId} locale={locale} data={fssData} />
    );
  }

  return (
    <div className="container max-w-[1400px] mx-auto px-20 py-40 md:px-80">
      <h2 className="text-2xl font-bold mb-20">{fssData.title}</h2>
      <div className="grid md:grid-cols-[40%_60%] gap-20">
        <Image
          src="/short-course/fss_1.png"
          alt="FSS"
          width={500}
          height={500}
          className="object-cover object-center"
        />
        <div className="min-w-0 w-full">
          <div className="flex flex-col mb-10">
            <p className="font-semibold">
              {fssData.courseDeliveryLabel || 'Course Delivery:'}
            </p>
            <p>
              {fssData.courseDelivery ||
                'Face to Face. Participants will engage in hands-on activities'}
            </p>
          </div>
          <div className="flex gap-10 mb-10">
            <p className="font-semibold">{fssData.timeLabel || 'Time:'}</p>
            <p>{fssData.time || '9:00am - 5:00pm'}</p>
          </div>
          <div className="flex gap-10 mb-10">
            <p className="font-semibold">
              {fssData.addressLabel || 'Address:'}
            </p>
            <p>
              {fssData.address ||
                'ABM Main Campus (242 Castlereagh Street Sydney NSW 2000 Australia)'}
            </p>
          </div>
          <div className="flex flex-col mb-10">
            <p className="font-semibold">
              {fssData.specialOfferLabel || 'Special Offer:'}
            </p>
            <p>
              {fssData.specialOffer && (
                <>
                  {fssData.specialOffer.textBeforeCode || 'Use code'}{' '}
                  <strong>{fssData.specialOffer.code}</strong>{' '}
                  {fssData.specialOffer.textAfterCode || 'at checkout for a'}{' '}
                  <span className="bg-orange-100 text-primary font-semibold">
                    {fssData.specialOffer.discount}
                  </span>{' '}
                  {fssData.specialOffer.note}
                </>
              )}
            </p>
          </div>

          <div className="w-full max-w-sm my-20">
            <div className="flex items-center gap-x-10 mt-20">
              <span className="font-bold text-2xl text-primary">
                ${promoDiscountedPrice}
              </span>
              <span className="text-gray-800 text-xl line-through">
                ${basePrice}
              </span>
              <span>(When you use the code)</span>
            </div>

            <div className="flex w-full max-w-600 flex-col gap-10 border border-orange-500 bg-red-50 p-10">
              <span className="font-semibold">Special Offer:</span>
              <p className="text-gray-700">
                Use code{' '}
                <strong>{fssData.specialOffer?.code ?? 'ABMFSS15'}</strong> at
                checkout for a{' '}
                <span className="bg-orange-100 text-primary font-semibold">
                  {fssData.specialOffer?.discount ?? '15% discount'}
                </span>{' '}
                — pay only ${promoDiscountedPrice}
              </p>
            </div>
          </div>

          <div className="w-full mt-20">
            {/* <label
              htmlFor="course-date"
              className="block mb-2 text-sm text-gray-700 font-bold"
            >
              {fssData.courseType?.label || 'Choose the course'}
            </label> */}
            {/* <select
              id="course-date"
              name="course-date"
              className="w-full px-8 py-12 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">
                {fssData.courseType?.selectLabel || 'Select a type'}
              </option>
              {fssData.courseType?.options?.map((opt: string, idx: number) => (
                <option key={idx} value={opt.toLowerCase()}>
                  {opt}
                </option>
              ))}
            </select> */}
          </div>

          <div className="w-full mt-20">
            {/* <label
              htmlFor="course-date"
              className="block mb-2 text-sm text-gray-700 font-bold"
            >
              {fssData.selectDateLabel || 'Select Course Date'}
            </label> */}
            {/* <select
              id="course-date"
              name="course-date"
              className="w-full px-8 py-12 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            >
              <option value="">
                {fssData.selectDateOptionLabel || 'Select a date'}
              </option>
              {fssData.dates.map(
                (
                  dateOption: {
                    date: string;
                    displayDate: string;
                    time: string;
                  },
                  index: number
                ) => (
                  <option key={index} value={dateOption.date}>
                    {dateOption.displayDate} - {dateOption.time}
                  </option>
                )
              )}
              </select> */}
            {sortedDates.length > 0 && (
            <div className="flex w-full min-w-0 max-w-full flex-col gap-10">
              <span className="font-semibold">Upcoming Course Dates:</span>
              <div className="w-full min-w-0 space-y-8">
                {sortedDates.map((dateOption, index) => {
                  const parsedDate = new Date(`${dateOption.date}T00:00:00`);
                  const dayMonthLabel = parsedDate.toLocaleDateString('en-AU', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  });
                  const weekDayLabel = parsedDate.toLocaleDateString('en-AU', {
                    weekday: 'long',
                  });
                  const cardBgClass =
                    COURSE_CARD_BG_CLASSES[
                      index % COURSE_CARD_BG_CLASSES.length
                    ];
                  const checkoutHref = `/${locale}/custom-programs/fss/checkout?date=${encodeURIComponent(
                    dateOption.displayDate,
                  )}`;

                  return (
                    <div
                      key={`${dateOption.date}-${dateOption.time}`}
                      className={`flex flex-col gap-10 rounded-md px-12 py-10 sm:flex-row sm:flex-wrap sm:items-center ${cardBgClass}`}
                    >
                      <div className="min-w-0 text-sm text-neutral-700 sm:flex-1 sm:basis-[140px]">
                        <p className="font-semibold leading-tight">
                          {dayMonthLabel}
                        </p>
                        <p className="leading-tight">{weekDayLabel}</p>
                        <p className="mt-2 font-medium">{dateOption.time}</p>
                      </div>
                      <div className="min-w-0 text-sm text-neutral-800 sm:flex-1 sm:basis-[200px]">
                        <p className="font-semibold">
                          NSW Food Safety Supervisor (FSS)
                        </p>
                        <p>{fssData.address}</p>
                        <p className="font-semibold">(Face to Face)</p>
                      </div>
                      <div className="flex w-full flex-col gap-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-10 md:ml-auto">
                        <div className="flex flex-col gap-2">
                          <span className="font-bold text-xl text-primary-bk">
                            ${promoDiscountedPrice}
                          </span>
                          <span className="text-gray-800 line-through">
                            ${basePrice}
                          </span>
                          <span className="text-xs">
                            (When you use the code)
                          </span>
                        </div>
                        <Link
                          className="inline-flex w-full items-center justify-center bg-primary px-12 py-8 text-sm font-semibold text-white transition hover:bg-primary-bk sm:w-auto sm:min-w-100"
                          href={checkoutHref}
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            )}
            <div className="mt-20 flex w-full max-w-600 flex-col gap-10 border border-primary bg-red-50 p-10">
              <span className="font-semibold">Recertification:</span>
              <p className="text-gray-700 text-sm">
                The NSW Food Safety Supervisor (FSS) Recertification Course is
                designed for those whose certificate is about to expire or has
                expired within the last 90 days. Upon completion, you will
                receive a renewed NSW FSS Certificate (Blue and Orange) valid
                for five years.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-20">{fssData.description}</p>
      {fssData.keyUnits && (
        <>
          <h3 className="mt-20 font-bold text-xl">Key Units</h3>
          <div className="overflow-x-auto mt-10">
            <table className="min-w-full table-auto shadow-sm  text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-8 border-b border-gray-300 text-left font-semibold">
                    Unit Code & Title
                  </th>
                  <th className="px-4 py-8 border-b border-gray-300 text-left font-semibold">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {fssData.keyUnits.map(
                  (
                    unit: { code: string; title: string; description: string },
                    rIdx: number,
                  ): JSX.Element => (
                    <tr key={rIdx} className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-2 border-b border-gray-200 font-medium">
                        {unit.code} – {unit.title}
                      </td>
                      <td className="px-4 py-2 border-b border-gray-200 font-medium">
                        {unit.description}
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        </>
      )}

      {fssData.activities && (
        <>
          <h3 className="mt-20 font-bold text-xl">Activities</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto shadow-sm  text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-8 border-b border-gray-300 text-left font-semibold">
                    Occasion
                  </th>
                  <th className="px-4 py-8 border-b border-gray-300 text-left font-semibold">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {fssData.activities.map(
                  (
                    activity: { occasion: string; description: string },
                    rIdx: number,
                  ): JSX.Element => (
                    <tr key={rIdx} className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-2 border-b border-gray-200 font-medium">
                        {activity.occasion}
                      </td>
                      <td className="px-4 py-2 border-b border-gray-200 font-medium">
                        {activity.description}
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        </>
      )}

      <div className="w-full mt-20 mx-auto  bg-white">
        {/* Section 1 */}
        <Disclosure>
          {({ open }) => (
            <div>
              <DisclosureButton className="flex w-full justify-between items-center bg-primary px-16 py-9 text-left text-sm font-medium text-white hover:bg-black cursor-pointer transition">
                <span className="text-lg">
                  {fssData.faq1?.question ||
                    'Who Needs NSW Food Safety Supervisor Certificate (FSS)?'}
                </span>
                <ChevronUpIcon
                  className={`h-24 w-24 transform transition-transform duration-200 ${
                    open ? 'rotate-180' : ''
                  }`}
                />
              </DisclosureButton>
              <DisclosurePanel className="px-16 pt-4 pb-2 text-sm text-gray-700">
                <ul className="list-disc pl-5 space-y-1">
                  {(fssData.faq1?.answerList || fssData.whoNeedsFSS)?.map(
                    (item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    ),
                  )}
                </ul>
              </DisclosurePanel>
            </div>
          )}
        </Disclosure>

        {/* Section 2 */}
        <Disclosure as="div" className="mt-4">
          {({ open }) => (
            <>
              <DisclosureButton className="flex w-full justify-between items-center bg-primary px-16 py-9 text-left text-sm font-medium text-white hover:bg-black cursor-pointer transition">
                <span className="text-lg">
                  {fssData.faq2?.question || 'Why Is It Important?'}
                </span>
                <ChevronUpIcon
                  className={`h-24 w-24 transform transition-transform duration-200 ${
                    open ? 'rotate-180' : ''
                  }`}
                />
              </DisclosureButton>
              <DisclosurePanel className="px-16 pt-4 pb-2 text-sm text-gray-700">
                {fssData.faq2?.answer || (
                  <>
                    The{' '}
                    <strong>
                      NSW Food Safety Supervisor Certificate (FSS)
                    </strong>{' '}
                    helps protect customers and businesses from foodborne
                    illnesses, ensuring safe food handling and preparation. It
                    also enhances your credibility and shows your commitment to
                    food safety.
                  </>
                )}
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

export default FSS;
