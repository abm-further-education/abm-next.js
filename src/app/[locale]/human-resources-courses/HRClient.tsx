'use client';

import Banner from '@/components/common/Banner';
import Card from '@/components/common/Card';
import FadeIn from '@/components/common/FadeIn';
// import Testimonial from '@/domains/main/components/Testimonial';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function HRClient() {
  const t = useTranslations('hrPage');

  return (
    <div className="pt-60">
      <Banner
        slides={[
          {
            imgPath: '/home/HR.png',
            title: t('bannerTitle'),
            content: '',
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/40 w-full h-screen md:h-700 absolute z-10" />
        }
      />
      <FadeIn>
        <div className="flex flex-col items-center justify-center py-50">
          <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
            {t('heading')}
          </h2>
          <p className="text-sm md:text-base text-neutral-700 max-w-800 text-center">
            {t('description')}
          </p>
        </div>
      </FadeIn>
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
          {t('projectHeading')}
        </h2>
        <div className="flex flex-wrap md:gap-20 py-50 justify-center items-center max-w-1200 mx-auto">
          <Card
            imgPath="/courses/project/project_1.png"
            title={t('cert4')}
            link="/human-resources-courses/bsb40420-certificate-iv-in-human-resource-management"
            className="w-300 md:w-380"
          />
          <Card
            imgPath="/courses/project/project_2.png"
            title={t('diploma')}
            link="/human-resources-courses/bsb50320-diploma-of-human-resource-management"
            className="w-300 md:w-380"
          />
          <Card
            imgPath="/courses/project/project_3.png"
            title={t('advDiploma')}
            link="/human-resources-courses/bsb60320-advanced-diploma-of-human-resource-management"
            className="w-300 md:w-380"
          />
        </div>
      </FadeIn>
      {/* <FadeIn>
        <Testimonial />
      </FadeIn> */}
    </div>
  );
}
