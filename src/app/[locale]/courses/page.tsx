'use client';

import Banner from '@/components/common/Banner';
import Card from '@/components/common/Card';
import FadeIn from '@/components/common/FadeIn';
import { useTranslations } from 'next-intl';
import React from 'react';

function page() {
  const t = useTranslations('courses');
  return (
    <div>
      <Banner
        slides={[
          {
            imgPath: '/courses/courses.png',
            title: 'Courses At ABM',
            content: '',
          },
        ]}
      />
      <FadeIn>
        <div className="flex flex-col items-center justify-center py-50">
          <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
            {t('title')}
          </h2>
          <p className="text-sm md:text-base text-neutral-700 max-w-800 text-center">
            {t('description')}
          </p>
        </div>
      </FadeIn>
      <section className="flex flex-col items-center justify-center py-50">
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-40 mt-40">
            <Card
              imgPath="/home/Cookery.png"
              title="Cookery"
              link="/cookery-and-hospitality-courses"
              className="w-300 md:w-440"
            />
            <Card
              imgPath="/home/Hospitality.png"
              title="Hospitality"
              link="/cookery-and-hospitality-courses"
              className="w-300 md:w-440"
            />
            <Card
              imgPath="/home/Fitness.png"
              title="Fitness & Sports"
              link="/fitness-instructor-personal-trainer-courses"
              className="w-300 md:w-440"
            />
            <Card
              imgPath="/home/Business.png"
              title="Business"
              link="/business-and-management-courses"
              className="w-300 md:w-440"
            />
            <Card
              imgPath="/home/Project.png"
              title="Project & Program"
              link="/project-and-program-management-courses"
              className="w-300 md:w-440"
            />
            <Card
              imgPath="/home/HR.png"
              title="HR Management"
              link="/human-resources-courses"
              className="w-300 md:w-440"
            />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

export default page;
