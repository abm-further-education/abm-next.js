import Banner from '@/components/common/Banner';
import Card from '@/components/common/Card';
import FadeIn from '@/components/common/FadeIn';
import Gallery from '@/components/common/Gallery';
import Testimonial from '@/domains/main/components/Testimonial';
import SubscriptionContainer from '@/domains/subscription/components/SubscriptionContainer';
import React from 'react';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Project & Program Management Courses | ABM Further Education',
  description:
    'Lead projects that make an impact with ABM Further Education. From Certificate IV to Advanced Diploma, develop project management skills for construction, tech, and corporate sectors.',
};

export default async function Page() {
  const t = await getTranslations('projectProgram');
  return (
    <div className="pt-60">
      <Banner
        slides={[
          {
            imgPath: '/courses/project/project_management.png',
            title: t('bannerTitle'),
            content: t('bannerContent'),
          },
        ]}
      />
      <div className="flex flex-col items-center justify-center py-50">
        <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
          {t('leadProjectsTitle')}
        </h2>
        <p className="text-sm md:text-base text-neutral-700 max-w-800 text-center">
          {t('leadProjectsDescription')}
        </p>
      </div>
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
          {t('coursesTitle')}
        </h2>
        <div className="flex flex-wrap md:gap-20 py-50 justify-center items-center max-w-1200 mx-auto">
          <Card
            imgPath="/courses/project/project_1.png"
            title={t('certIVTitle')}
            link="/project-and-program-management-courses/bsb40920-certificate-iv-in-project-management-practice"
            className="w-300 md:w-380"
          />
          <Card
            imgPath="/courses/project/project_2.png"
            title={t('diplomaTitle')}
            link="/project-and-program-management-courses/bsb50820-diploma-of-project-management-practice"
            className="w-300 md:w-380"
          />
          <Card
            imgPath="/courses/project/project_3.png"
            title={t('advDiplomaTitle')}
            link="/project-and-program-management-courses/bsb60720-advanced-diploma-of-program-management"
            className="w-300 md:w-380"
          />
        </div>
      </FadeIn>
      <FadeIn>
        <Testimonial />
      </FadeIn>
      <FadeIn>
        <Gallery />
      </FadeIn>
      <FadeIn>
        <SubscriptionContainer />
      </FadeIn>
    </div>
  );
}
