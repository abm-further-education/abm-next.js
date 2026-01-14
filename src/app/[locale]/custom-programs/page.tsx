'use client';

import Banner from '@/components/common/Banner';
import FadeIn from '@/components/common/FadeIn';
import ShortCourseCard from '@/domains/short-course/components/ShortCourseCard';

import React from 'react';
import { useTranslations } from 'next-intl';
import Button from '@/components/common/Button';
import { useRouter } from 'next/navigation';
import Gallery from '@/components/common/Gallery';

function ShortCoursesPage() {
  const t = useTranslations('shortCoursesPage');
  const router = useRouter();
  return (
    <div className="pt-120">
      <Banner
        slides={[
          {
            imgPath: '/custom_program_1.png',
            title: 'Custom Programs',
            content: '',
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/30 w-full h-screen md:h-700 absolute z-10" />
        }
      />
      <FadeIn>
        <div className="flex flex-col items-center justify-center md:py-50">
          <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
            {t('heading')}
          </h2>
          <p className="text-sm md:text-base text-neutral-700 max-w-800 text-center px-20 md:px-0">
            {t('description')}
          </p>
        </div>
      </FadeIn>
      <section className="flex flex-col items-center justify-center pb-40">
        <h2 className="text-3xl md:text-4xl font-bold md:py-50 text-center px-20 md:px-0">
          {t('heading2')}
        </h2>
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-20 mt-40">
            <ShortCourseCard
              imgPath="/short-course/barista_1.jpg"
              title="Barista Course"
              link="/custom-programs/barista"
            />
            <ShortCourseCard
              imgPath="/short-course/classic_french_cakes_2.png"
              title="Classic French Cake Course"
              link="/custom-programs/cake"
            />
            <ShortCourseCard
              imgPath="/short-course/wine/wine_1.jpg"
              title="Wine Course"
              link="/custom-programs/wine"
            />
            <ShortCourseCard
              imgPath="/short-course/focaccia/sourdough_1.jpg"
              title="Sourdough and Focaccia Course"
              link="/custom-programs/focaccia"
            />
            <ShortCourseCard
              imgPath="/short-course/dessert/fine_dining_dessert_1.jpg"
              title="Fine Dining Dessert Plating Course"
              link="/custom-programs/dessert"
            />
            <ShortCourseCard
              imgPath="/short-course/classic_french_pastries_1.png"
              title="Classic French Pastries Course"
              link="/custom-programs/pastries"
            />
            <ShortCourseCard
              imgPath="/short-course/mixology/cocktail_1.png"
              title="Cocktail-Making and Mixology Course"
              link="/custom-programs/mixology"
            />
            <ShortCourseCard
              imgPath="/short-course/macaroon_1.png"
              title="French petit four Course (Macaroon)"
              link="/custom-programs/petit"
            />
            <ShortCourseCard
              imgPath="/short-course/vegan/vegan_1.png"
              title="Vegan and Vegetarian Course"
              link="/custom-programs/vegan"
            />
            <ShortCourseCard
              imgPath="/short-course/chocolate/xmas_1.png"
              title="Chocolate Class – Xmas"
              link="/custom-programs/chocolate"
            />
          </div>
        </FadeIn>
      </section>

      <FadeIn>
        <Gallery images={images} />
      </FadeIn>

      <FadeIn>
        <div className="bg-black text-white font-[family-name:var(--font-montserrat)] md:m-60 flex flex-col items-center justify-center p-10 md:p-40">
          <h2 className="text-2xl md:text-4xl font-bold">
            Customised Group Programs
          </h2>
          <p className="text-neutral-300 pt-10 text-lg font-bold">
            Tailored Programs for Institutions
          </p>
          <p className="text-neutral-300 pt-10">
            We partner with universities and colleges to deliver tailored
            programs that match their curriculum, learning goals, and student
            needs.
          </p>

          <Button
            className="mt-20 p-10 bg-white text-black hover:bg-primary hover:text-white"
            onClick={() => router.push('/contact')}
          >
            Contact Us to Customise
          </Button>
        </div>
      </FadeIn>

      {/* Calendar Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('calendarHeading') || 'Course Calendar'}
          </h2>
          <p className="text-sm md:text-base text-neutral-700 max-w-800 mx-auto px-20 md:px-0">
            {t('calendarDescription') ||
              'Browse our short courses by month and find the perfect date for you'}
          </p>
        </div>
        <ShortCourseCalendar locale={locale} />
      </section> */}
    </div>
  );
}

export default ShortCoursesPage;

const images = [
  '/study-tour-program/1.jpg',
  '/study-tour-program/2.jpg',
  '/study-tour-program/3.jpg',
  '/study-tour-program/4.jpg',
  '/study-tour-program/5.jpg',
  '/study-tour-program/6.jpg',
  '/study-tour-program/7.jpg',
  '/study-tour-program/8.jpg',
  '/study-tour-program/9.jpg',
];
