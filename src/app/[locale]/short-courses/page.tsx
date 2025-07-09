import Banner from '@/components/common/Banner';
import FadeIn from '@/components/common/FadeIn';
import ShortCourseCard from '@/domains/short-course/components/ShortCourseCard';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Short Courses | ABM Further Education',
  description:
    "Discover your passion with ABM's short courses! From barista training to French pastries, explore our one-day courses designed for food and hospitality enthusiasts.",
};

function page() {
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
        <div className="flex flex-col items-center justify-center py-50">
          <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
            Discover Your Passion with ABM’s New Short Courses!
          </h2>
          <p className="text-sm md:text-base text-neutral-700 max-w-800 text-center">
            ABM is thrilled to announce our latest project – ABM Short Courses –
            designed for anyone who loves food, drink, and the art of
            hospitality! Whether you’re a home cook, aspiring chef, or curious
            enthusiast, these one-day courses are your gateway to new skills and
            unforgettable experiences.
          </p>
        </div>
      </FadeIn>
      <section className="flex flex-col items-center justify-center py-50">
        <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
          ABM Short Courses for 2025
        </h2>
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-40 mt-40">
            <ShortCourseCard
              imgPath="/short-course/barista_1.jpg"
              title="Barista Course"
              link="/"
              price={150}
            />
            <ShortCourseCard
              imgPath="/short-course/classic_french_cakes_2.png"
              title="Classic French Cake Course"
              link="/"
              price={180}
            />
            <ShortCourseCard
              imgPath="/short-course/wine_1.jpg"
              title="Wine Course"
              link="/"
              price={150}
            />
            <ShortCourseCard
              imgPath="/short-course/sourdough_1.jpg"
              title="Sourdough and Focaccia Course"
              link="/"
              price={160}
            />
            <ShortCourseCard
              imgPath="/short-course/fine_dining_dessert_1.jpg"
              title="Fine Dining Dessert Plating Course"
              link="/"
              price={150}
            />
            <ShortCourseCard
              imgPath="/short-course/classic_french_pastries_1.png"
              title="Classic French Pastries Course"
              link="/"
              price={160}
            />
            <ShortCourseCard
              imgPath="/short-course/cocktail_1.png"
              title="Cocktail-Making and Mixology Course"
              link="/"
              price={150}
            />
            <ShortCourseCard
              imgPath="/short-course/macaroon_1.png"
              title="French petit four Course (Macaroon)"
              link="/"
              price={120}
            />
            <ShortCourseCard
              imgPath="/short-course/vegan_1.png"
              title="Vegan and Vegetarian Course"
              link="/"
              price={150}
            />
            <ShortCourseCard
              imgPath="/short-course/xmas_1.png"
              title="Chocolate Class – Xmas"
              link="/"
              price={130}
            />
            <ShortCourseCard
              imgPath="/short-course/fss_1.png"
              title="NSW Food Safety Supervisor Certificate (FSS)"
              link="/"
              price={180}
            />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

export default page;
