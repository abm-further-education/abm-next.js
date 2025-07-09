import React from 'react';
import Image from 'next/image';
import Banner from '@/components/common/Banner';
import Button from '@/components/common/Button';
import FadeIn from '@/components/common/FadeIn';
import Card from '@/components/common/Card';
import Testimonial from '@/domains/main/components/Testimonial';
import Gallery from '@/components/common/Gallery';
import SubscriptionContainer from '@/domains/subscription/components/SubscriptionContainer';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookery & Hospitality Courses | ABM Further Education',
  description:
    'Explore our comprehensive cookery and hospitality courses at ABM Further Education. From kitchen management to hospitality management, develop your culinary and hospitality skills.',
};

async function page() {
  const t = await getTranslations('cookeryAndHospitality');
  return (
    <div>
      {' '}
      <Banner
        slides={[
          {
            imgPath: '/courses/cookery/cookery_1.png',
            title: 'Cookery & Hospitality',
            content: '',
          },
        ]}
      />
      <div className="flex flex-col items-center justify-center py-50">
        <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
          {t('title')}
        </h2>
        <p className="text-sm md:text-base text-neutral-300 max-w-800 text-center">
          {t('description')}
        </p>
      </div>
      <FadeIn>
        <div className="bg-neutral-100 items-center justify-center flex flex-col pb-50">
          {' '}
          <h2 className="text-3xl md:text-4xl font-bold py-50 text-center text-neutral-700">
            {t('streams')}
          </h2>
          <div className="flex gap-20 pb-30 font-semibold">
            <Button className="bg-neutral-200 hover:bg-white hover:text-primary">
              {t('kitchenManagementStream')}
            </Button>
            <Button className="bg-neutral-200 hover:bg-white hover:text-primary">
              {t('foodAndBeverageStream')}
            </Button>
          </div>
          <p className="max-w-500 text-neutral-700 text-center mb-20">
            {t('streamDescription')}
          </p>
          <div className="flex gap-90 sm:gap-180 lg:gap-250 ml-90 mt-40 font-[family-name:var(--font-montserrat)]">
            <span>72weeks</span>
            <span>26weeks</span>
            <span>26weeks</span>
          </div>
          <div className="flex">
            <div className="relative">
              <div className="absolute top-20 left-40 font-[family-name:var(--font-montserrat)] text-sm md:text-base">
                <span className="text-white">SIT40521</span>
                <p className="text-white font-semibold text-[15px]">
                  Certificate IV in Kitchen Management
                </p>
              </div>
              <Image
                src={`/courses/cookery/SIT40521.png`}
                alt="banner_image"
                width={300}
                height={500}
                className="md:object-center object-cover"
              />
            </div>
            <div className="relative">
              <div className="absolute top-20 left-60 font-[family-name:var(--font-montserrat)] text-sm md:text-base">
                <span className="text-white">SIT50422</span>
                <p className="text-white font-semibold text-[15px]">
                  Diploma of Hospitality Management
                </p>
              </div>
              <Image
                src={`/courses/cookery/SIT50422.png`}
                alt="banner_image"
                width={300}
                height={500}
                className="md:object-center object-cover"
              />
            </div>
            <div className="relative">
              <div className="absolute top-20 left-60 font-[family-name:var(--font-montserrat)] text-sm md:text-base">
                <span className="text-white">SIT60322</span>
                <p className="text-white font-semibold text-[15px]">
                  Advanced Diploma of Hospitality Management
                </p>
              </div>
              <Image
                src={`/courses/cookery/SIT60322.png`}
                alt="banner_image"
                width={300}
                height={500}
                className="md:object-center object-cover"
              />
            </div>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
          {t('specialisedShortCourses')}
        </h2>
        <div className="flex flex-wrap md:gap-20 py-50 justify-center items-center max-w-1200 mx-auto">
          <Card
            imgPath="/short-course/french_cakes.jpg"
            title={t('shortCourse')}
            link="/"
            className="w-300 md:w-530"
          />
          <Card
            imgPath="/courses/cookery/fss.png"
            title={t('foodSafetySupervisor')}
            link="/"
            className="w-300 md:w-530"
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

export default page;
