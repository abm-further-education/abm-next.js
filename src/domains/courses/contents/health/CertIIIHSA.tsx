'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { ChevronUpIcon } from 'lucide-react';

const faqItems = [
  { key: 'q1' },
  { key: 'q2' },
  { key: 'q3' },
  { key: 'q4' },
  { key: 'q5' },
];

function CertIIIHSA() {
  const t = useTranslations('hsaPage');
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">
        {/* Dimmed overlay */}

        {/* Content */}

        <div className="relative z-10 bg-white">
          <div
            className="relative bg-cover bg-[20%_20%] bg-no-repeat h-120 p-20"
            style={{
              backgroundImage: 'url(/courses/health/health_2.png)',
            }}
          >
            {/* Dimmed overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            <h2 className="text-lg md:text-xl font-bold text-primary absolute bottom-20">
              Nursing Support Pathway Flow
            </h2>
          </div>
          <div className="p-20">
            {/* Course Progression Structure */}
            <Image
              src="/courses/health/hsa-flow.png"
              alt="HSA Flow"
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
            {/* <CourseProgress
              courses={[
                {
                  title: 'English for Healthcare Communication',
                  duration: '12 weeks',
                },
                {
                  code: 'HLT33115',
                  title: 'Certificate III in Health Services Assistance',
                  duration: '16 weeks',
                },
                {
                  title: 'Placement',
                  duration: '80 hours',
                },
              ]}
              activeIndex={1}
            /> */}
            <span className="text-sm text-primary">
              {t('entryRequirements.items.lowerEnglishOption')}
            </span>

            {/* Course Description */}
            <div className="text-gray-600 mb-8">
              <h3 className="text-base font-bold mb-8">
                {t('courseDuration.title')}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>
                  <span className="font-semibold">
                    {t('courseDuration.items.qualificationDuration')}
                  </span>
                </li>
                <li>
                  <span className="font-semibold">
                    {t('courseDuration.items.workPlacement')}
                  </span>
                </li>
                <li>{t('courseDuration.items.noHoliday')}</li>
              </ul>
            </div>
            <div className="text-gray-600 mb-8">
              <h3 className="text-base font-bold mb-8">
                {t('entryRequirements.title')}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>{t('entryRequirements.items.basic')}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative z-10 bg-white">
          <div
            className="relative bg-cover bg-[10%_10%] bg-no-repeat h-120 p-20"
            style={{
              backgroundImage: 'url(/courses/health/health_1.png)',
            }}
          >
            {/* Dimmed overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <h2 className="text-lg md:text-xl absolute bottom-20 font-bold text-primary">
              Key Benefits & Work Placement info
            </h2>
          </div>
          <div className="p-20">
            {/*  Work Placement Information */}
            <div className="text-gray-600 mb-8">
              <h3 className="text-base font-bold mb-8">
                {t('workPlacement.title')}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>{t('workPlacement.items.hours')}</li>
                <li>{t('workPlacement.items.applyLearning')}</li>
                <li>{t('workPlacement.items.confidence')}</li>
                <li>{t('workPlacement.items.support')}</li>
              </ul>
            </div>
            <div className="text-gray-600 mb-8">
              <h3 className="text-base font-bold mb-8">
                {t('industryPartners.title')}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>{t('industryPartners.items.partners')}</li>
              </ul>
            </div>
            {/* Course Benefits */}
            <div className="text-gray-600 mb-8">
              <h3 className="text-base font-bold mb-8 font-montserrat">
                {t('courseBenefits.title')}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li>{t('courseBenefits.items.fundamentalSkills')}</li>
                <li>{t('courseBenefits.items.practicalExperience')}</li>
                <li>{t('courseBenefits.items.medicalEnglish')}</li>
                <li>{t('courseBenefits.items.beginnerFriendly')}</li>
                <li>{t('courseBenefits.items.careerAdvancement')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full mt-40 mx-auto">
        <h3 className="text-xl font-bold mb-20 font-montserrat">
          {t('faq.title')}
        </h3>

        {faqItems.map((item, index) => (
          <Disclosure
            key={item.key}
            as="div"
            className={index > 0 ? 'mt-4' : ''}
          >
            {({ open }) => (
              <>
                <DisclosureButton className="flex w-full justify-between items-center bg-primary px-16 py-9 text-left text-sm font-medium text-white hover:bg-black cursor-pointer transition font-montserrat">
                  <span className="text-lg">
                    {t(`faq.items.${item.key}.question`)}
                  </span>
                  <ChevronUpIcon
                    className={`h-24 w-24 transform transition-transform duration-200 ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </DisclosureButton>
                <DisclosurePanel className="px-16 pt-4 pb-2 text-sm text-gray-700">
                  <p>{t(`faq.items.${item.key}.answer`)}</p>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}

export default CertIIIHSA;
