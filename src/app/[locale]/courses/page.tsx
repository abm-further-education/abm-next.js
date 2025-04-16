import Banner from '@/components/common/Banner';
import Card from '@/components/common/Card';
import FadeIn from '@/components/common/FadeIn';
import React from 'react';

function page() {
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
            Find the Right Course for Your Future
          </h2>
          <p className="text-sm md:text-base text-neutral-700 max-w-800 text-center">
            Choosing the right course is key to reaching your career goals.
            Think beyond interest—consider if the path leads to a future you’ll
            enjoy. Whether it’s business, commercial cookery, or advancing in
            hospitality, ABM helps you gain the skills to become job-ready and
            confident in your chosen field.
          </p>
        </div>
      </FadeIn>
      <section className="flex flex-col items-center justify-center py-50">
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-40 mt-40">
            <Card
              imgPath="/home/Cookery.png"
              title="Cookery"
              link="/courses/cookery-hospitality"
              className="w-300 md:w-440"
            />
            <Card
              imgPath="/home/Hospitality.png"
              title="Hospitality"
              link="/courses/cookery-hospitality"
              className="w-300 md:w-440"
            />
            <Card
              imgPath="/home/Fitness.png"
              title="Fitness & Sports"
              link="/courses/fitness-sports"
              className="w-300 md:w-440"
            />
            <Card
              imgPath="/home/Business.png"
              title="Business"
              link="/courses/business"
              className="w-300 md:w-440"
            />
            <Card
              imgPath="/home/Project.png"
              title="Project & Program"
              link="/courses/project-program"
              className="w-300 md:w-440"
            />
            <Card
              imgPath="/home/HR.png"
              title="HR Management"
              link="/courses/human-resource"
              className="w-300 md:w-440"
            />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

export default page;
