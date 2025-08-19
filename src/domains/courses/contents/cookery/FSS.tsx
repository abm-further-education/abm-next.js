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
import { useParams } from 'next/navigation';
import Link from 'next/link';

function FSS() {
  const params = useParams();
  let locale = 'en';
  if (params?.locale) {
    if (Array.isArray(params.locale)) {
      locale = params.locale[0];
    } else {
      locale = params.locale;
    }
  }
  const shortCourseData = getShortCourseData(locale);
  const fssData = shortCourseData.fss;

  return (
    <div className="container max-w-[1400px] mx-auto px-20 py-40 md:px-80">
      <h2 className="text-2xl font-bold mb-20">{fssData.title}</h2>
      <div className="grid md:grid-cols-2 gap-20">
        <Image
          src="/short-course/fss_1.png"
          alt="FSS"
          width={500}
          height={500}
          className="object-cover object-center"
        />
        <div className="">
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
          <div className="w-full max-w-sm mt-20">
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

          <div className="w-full max-w-sm mt-20">
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
            <div className="flex flex-col gap-10">
              <span className="font-semibold">Course Date:</span>
              <ul className="list-disc pl-5 space-y-1">
                <li>29th August 2025</li>
                <li>15th September 2025</li>
              </ul>
            </div>
            <div className="font-bold text-2xl mt-20 text-primary">$180</div>
          </div>
          <Link
            className="bg-black text-white w-full block mt-20 px-20 py-10 text-center"
            href="https://form.jotform.com/ABMonlineforms/Shortcourse-payment-purchase-form"
            target="_blank"
          >
            {fssData.callToAction || 'Enrol Now'}
          </Link>
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
                    rIdx: number
                  ): JSX.Element => (
                    <tr key={rIdx} className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-2 border-b border-gray-200 font-medium">
                        {unit.code} – {unit.title}
                      </td>
                      <td className="px-4 py-2 border-b border-gray-200 font-medium">
                        {unit.description}
                      </td>
                    </tr>
                  )
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
                    rIdx: number
                  ): JSX.Element => (
                    <tr key={rIdx} className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-2 border-b border-gray-200 font-medium">
                        {activity.occasion}
                      </td>
                      <td className="px-4 py-2 border-b border-gray-200 font-medium">
                        {activity.description}
                      </td>
                    </tr>
                  )
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
                    )
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
