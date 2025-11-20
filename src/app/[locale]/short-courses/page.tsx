import Banner from '@/components/common/Banner';
import FadeIn from '@/components/common/FadeIn';
import ShortCourseCard from '@/domains/short-course/components/ShortCourseCard';
import ShortCourseCalendar from '@/components/shortCourses/ShortCourseCalendar';
import React, { use } from 'react';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: 'Short Courses | ABM Further Education',
  description:
    "Discover your passion with ABM's short courses! From barista training to French pastries, explore our one-day courses designed for food and hospitality enthusiasts.",
};

function ShortCoursesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = useTranslations('shortCoursesPage');
  return (
    <div>
      <Banner
        slides={[
          {
            imgPath: '/short-course/short-course.png',
            title: 'Short Courses',
            content: '',
          },
        ]}
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
              link="/short-courses/barista"
              price={150}
            />
            <ShortCourseCard
              imgPath="/short-course/classic_french_cakes_2.png"
              title="Classic French Cake Course"
              link="/short-courses/cake"
              price={180}
            />
            <ShortCourseCard
              imgPath="/short-course/wine/wine_1.jpg"
              title="Wine Course"
              link="/short-courses/wine"
              price={150}
            />
            <ShortCourseCard
              imgPath="/short-course/focaccia/sourdough_1.jpg"
              title="Sourdough and Focaccia Course"
              link="/short-courses/focaccia"
              price={160}
            />
            <ShortCourseCard
              imgPath="/short-course/dessert/fine_dining_dessert_1.jpg"
              title="Fine Dining Dessert Plating Course"
              link="/short-courses/dessert"
              price={150}
            />
            <ShortCourseCard
              imgPath="/short-course/classic_french_pastries_1.png"
              title="Classic French Pastries Course"
              link="/short-courses/pastries"
              price={160}
            />
            <ShortCourseCard
              imgPath="/short-course/mixology/cocktail_1.png"
              title="Cocktail-Making and Mixology Course"
              link="/short-courses/mixology"
              price={150}
            />
            <ShortCourseCard
              imgPath="/short-course/macaroon_1.png"
              title="French petit four Course (Macaroon)"
              link="/short-courses/petit"
              price={120}
            />
            <ShortCourseCard
              imgPath="/short-course/vegan/vegan_1.png"
              title="Vegan and Vegetarian Course"
              link="/short-courses/vegan"
              price={150}
            />
            <ShortCourseCard
              imgPath="/short-course/chocolate/xmas_1.png"
              title="Chocolate Class – Xmas"
              link="/short-courses/chocolate"
              price={130}
            />
            <ShortCourseCard
              imgPath="/short-course/fss_1.png"
              title="NSW Food Safety Supervisor Certificate (FSS)"
              link="/cookery-and-hospitality-courses/fss"
              price={180}
            />
            <ShortCourseCard
              imgPath="/short-course/web/web_1.png"
              title="Introduction to HTML, CSS, and Basic Web Design (Online)"
              link="https://www.openlearning.com/abm-further-education/courses/introduction-to-html-css-and-basic-web-design/?cl=1"
              price={28}
            />
            <ShortCourseCard
              imgPath="/short-course/web/web_2.png"
              title="Advanced Course: Building a Portfolio Website (Online)"
              link="https://www.openlearning.com/abm-further-education/courses/advanced-course-building-a-portfolio-website/?cl=1"
              price={85}
            />
            <ShortCourseCard
              imgPath="/short-course/barista/barista_sample_course.png"
              title="Barista Sample Course"
              link="https://online.abm.edu.au/courses/441285e0-35ec-4863-a31b-15014febb51f"
              price={0}
            />
            <ShortCourseCard
              imgPath="/short-course/barista_1.jpg"
              title="Barista Online Course"
              link="https://online.abm.edu.au/courses/ccff3f2c-1c2c-4fc3-a322-fee0338cbf39"
              price={79}
            />
          </div>
        </FadeIn>
      </section>

      {/* Calendar Section */}
      <section className="py-20 bg-gray-50">
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
      </section>
    </div>
  );
}

export default ShortCoursesPage;
