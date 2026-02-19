'use client';
import React from 'react';
import Image from 'next/image';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { ChevronUpIcon } from 'lucide-react';
import getShortCourseData from '@/lib/shortCourseData';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useEditMode } from '@/contexts/EditModeContext';
import type { ShortCourseData } from '@/lib/shortCourseData/shortCourseData.en';
import ShortCourseEditable from './ShortCourseEditable';

interface RSAProps {
  data: ShortCourseData;
  courseId: string;
}

function RSA({ data: dataProp, courseId }: RSAProps) {
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
  const fallbackData = getShortCourseData(locale).rsa;
  const rsaData = dataProp ?? fallbackData;

  if (editMode?.isEditMode && courseId) {
    return (
      <ShortCourseEditable courseId={courseId} locale={locale} data={rsaData} />
    );
  }

  return (
    <div className="container max-w-[1400px] mx-auto px-20 py-40 md:px-80">
      <h2 className="text-2xl font-bold mb-20">{rsaData.title}</h2>
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <Image
          src="/nsw_rsa.png"
          alt="RSA"
          width={500}
          height={500}
          className="object-cover object-center"
        />
        <div className="">
          <div className="flex flex-col mb-10">
            <p className="font-semibold">
              {rsaData.courseDeliveryLabel || 'Course Delivery:'}
            </p>
            <p>
              {rsaData.courseDelivery ||
                'Face to Face. Participants will engage in hands-on activities'}
            </p>
          </div>
          <div className="flex gap-10 mb-10">
            <p className="font-semibold">{rsaData.timeLabel || 'Time:'}</p>
            <p>{rsaData.time || '9:00am - 5:00pm'}</p>
          </div>
          <div className="flex gap-10 mb-10">
            <p className="font-semibold">
              {rsaData.addressLabel || 'Address:'}
            </p>
            <p>
              {rsaData.address ||
                'ABM Main Campus (242 Castlereagh Street Sydney NSW 2000 Australia)'}
            </p>
          </div>

          {rsaData.specialOffer && (
            <div className="flex flex-col mb-10">
              <p className="font-semibold">
                {rsaData.specialOfferLabel || 'Special Offer:'}
              </p>
              {rsaData.specialOffer.textBeforeCode || 'Use code'}{' '}
              <strong>{rsaData.specialOffer.code}</strong>{' '}
              {rsaData.specialOffer.textAfterCode || 'at checkout for a'}{' '}
              <span className="bg-orange-100 text-primary font-semibold">
                {rsaData.specialOffer.discount}
              </span>{' '}
              {rsaData.specialOffer.note}
            </div>
          )}

          <div className="w-full max-w-sm mt-20">
            <div className="flex flex-col gap-10">
              <span className="font-semibold">Course Date:</span>
              <ul className="list-disc pl-5 space-y-1">
                {rsaData.dates?.map((dateOption, index) => (
                  <li key={index}>
                    {dateOption.displayDate} - {dateOption.time}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-10 mt-20 bg-orange-100 p-10 md: w-600">
              <span className="font-semibold">Special Offer:</span>
              <p className="text-gray-700">
                Use code <strong>RSAabmnew02</strong> at checkout for a{' '}
                <span className="bg-orange-100 text-primary font-semibold">
                  discount
                </span>
              </p>
            </div>

            <div className="flex items-center gap-x-10 mt-20">
              <span className="font-bold text-2xl text-primary">$189</span>

              <span className="text-gray-800 text-xl line-through">
                ${rsaData.price || 189}
              </span>
              <span>(When you use the code)</span>
            </div>
          </div>
          <Link
            className="bg-black text-white w-full block mt-20 px-20 py-10 text-center"
            href="https://form.jotform.com/ABMonlineforms/Shortcourse-payment-purchase-form"
            target="_blank"
          >
            {rsaData.callToAction || 'Enrol Now'}
          </Link>
        </div>
      </div>
      <p className="mt-20">{rsaData.description}</p>

      {rsaData.whyTrainWithABM && (
        <>
          <h3 className="mt-20 font-bold text-xl">Why Train with ABM</h3>
          <p className="mt-10">{rsaData.whyTrainWithABM}</p>
        </>
      )}

      {rsaData.whatYoullLearn && (
        <>
          <h3 className="mt-20 font-bold text-xl">What You Will Learn</h3>
          <ul className="list-disc pl-5 space-y-1 mt-10">
            {rsaData.whatYoullLearn.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {rsaData.courseFormat && (
        <>
          <h3 className="mt-20 font-bold text-xl">
            Course Format & Assessment
          </h3>
          {Array.isArray(rsaData.courseFormat) ? (
            <ul className="list-disc pl-5 space-y-1 mt-10">
              {rsaData.courseFormat.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-10 whitespace-pre-line">{rsaData.courseFormat}</p>
          )}
        </>
      )}

      {rsaData.whoShouldAttend && (
        <>
          <h3 className="mt-20 font-bold text-xl">Who Should Attend</h3>
          <ul className="list-disc pl-5 space-y-1 mt-10">
            {rsaData.whoShouldAttend.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {rsaData.whatToBring && (
        <>
          <h3 className="mt-20 font-bold text-xl">What to Bring</h3>
          <ul className="list-disc pl-5 space-y-1 mt-10">
            {rsaData.whatToBring.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {rsaData.howToEnrol && (
        <>
          <h3 className="mt-20 font-bold text-xl">How to Enrol</h3>
          <ul className="list-disc pl-5 space-y-1 mt-10">
            {rsaData.howToEnrol.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </>
      )}

      <div className="w-full mt-20 mx-auto bg-white">
        <h3 className="text-xl font-bold mb-20">Frequently Asked Questions</h3>

        {rsaData.faq1 && (
          <Disclosure>
            {({ open }) => (
              <div>
                <DisclosureButton className="flex w-full justify-between items-center bg-primary px-16 py-9 text-left text-sm font-medium text-white hover:bg-black cursor-pointer transition">
                  <span className="text-lg">{rsaData.faq1?.question}</span>
                  <ChevronUpIcon
                    className={`h-24 w-24 transform transition-transform duration-200 ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="px-16 pt-4 pb-2 text-sm text-gray-700">
                  <p>{rsaData.faq1?.answer}</p>
                </DisclosurePanel>
              </div>
            )}
          </Disclosure>
        )}

        {rsaData.faq2 && (
          <Disclosure as="div" className="mt-4">
            {({ open }) => (
              <>
                <DisclosureButton className="flex w-full justify-between items-center bg-primary px-16 py-9 text-left text-sm font-medium text-white hover:bg-black cursor-pointer transition">
                  <span className="text-lg">{rsaData.faq2?.question}</span>
                  <ChevronUpIcon
                    className={`h-24 w-24 transform transition-transform duration-200 ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="px-16 pt-4 pb-2 text-sm text-gray-700">
                  {Array.isArray(rsaData.faq2?.answer) ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {rsaData.faq2.answer.map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{rsaData.faq2?.answer}</p>
                  )}
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        )}

        {rsaData.faq3 && (
          <Disclosure as="div" className="mt-4">
            {({ open }) => (
              <>
                <DisclosureButton className="flex w-full justify-between items-center bg-primary px-16 py-9 text-left text-sm font-medium text-white hover:bg-black cursor-pointer transition">
                  <span className="text-lg">{rsaData.faq3?.question}</span>
                  <ChevronUpIcon
                    className={`h-24 w-24 transform transition-transform duration-200 ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="px-16 pt-4 pb-2 text-sm text-gray-700">
                  {Array.isArray(rsaData.faq3?.answer) ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {rsaData.faq3.answer.map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{rsaData.faq3?.answer}</p>
                  )}
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        )}

        {rsaData.faq4 && (
          <Disclosure as="div" className="mt-4">
            {({ open }) => (
              <>
                <DisclosureButton className="flex w-full justify-between items-center bg-primary px-16 py-9 text-left text-sm font-medium text-white hover:bg-black cursor-pointer transition">
                  <span className="text-lg">{rsaData.faq4?.question}</span>
                  <ChevronUpIcon
                    className={`h-24 w-24 transform transition-transform duration-200 ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="px-16 pt-4 pb-2 text-sm text-gray-700">
                  {rsaData.faq4?.answer ? (
                    Array.isArray(rsaData.faq4.answer) ? (
                      <ul className="list-disc pl-5 space-y-1">
                        {rsaData.faq4.answer.map(
                          (item: string, idx: number) => (
                            <li key={idx}>{item}</li>
                          ),
                        )}
                      </ul>
                    ) : (
                      <p>{rsaData.faq4.answer}</p>
                    )
                  ) : null}
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        )}

        {rsaData.faq5 && (
          <Disclosure as="div" className="mt-4">
            {({ open }) => (
              <>
                <DisclosureButton className="flex w-full justify-between items-center bg-primary px-16 py-9 text-left text-sm font-medium text-white hover:bg-black cursor-pointer transition">
                  <span className="text-lg">{rsaData.faq5?.question}</span>
                  <ChevronUpIcon
                    className={`h-24 w-24 transform transition-transform duration-200 ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="px-16 pt-4 pb-2 text-sm text-gray-700">
                  {rsaData.faq5?.answer ? (
                    Array.isArray(rsaData.faq5.answer) ? (
                      <ul className="list-disc pl-5 space-y-1">
                        {rsaData.faq5.answer.map(
                          (item: string, idx: number) => (
                            <li key={idx}>{item}</li>
                          ),
                        )}
                      </ul>
                    ) : (
                      <p>{rsaData.faq5.answer}</p>
                    )
                  ) : null}
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        )}
      </div>
    </div>
  );
}

export default RSA;
