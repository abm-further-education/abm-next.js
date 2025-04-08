import Banner from '@/components/common/Banner';
import Card from '@/components/common/Card';
import FadeIn from '@/components/common/FadeIn';
import Testimonial from '@/domains/main/components/Testimonial';
import React from 'react';

function page() {
  return (
    <div>
      <Banner
        slides={[
          {
            imgPath: '/courses/project/project_management.png',
            title: 'Human Resource',
            content: '',
          },
        ]}
      />
      <FadeIn>
        <div className="flex flex-col items-center justify-center py-50">
          <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
            Build a Rewarding Career in Human Resources
          </h2>
          <p className="text-sm md:text-base text-neutral-700 max-w-800 text-center">
            ABM’s Human Resource Management courses prepare you for HR roles at
            every level—from entry-level officers to strategic HR leaders. Gain
            skills in recruitment, conflict resolution, payroll, and workforce
            planning through flexible courses tailored to your goals. Whether
            you're starting with the Certificate IV or advancing to the Advanced
            Diploma, ABM equips you with the knowledge and experience to thrive
            in today’s evolving workplace.
          </p>
        </div>
      </FadeIn>
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
          Project & Program Courses
        </h2>
        <div className="flex flex-wrap md:gap-20 py-50 justify-center items-center max-w-1200 mx-auto">
          <Card
            imgPath="/courses/project/project_1.png"
            title="Certificate IV in Project Management Practice"
            link="/"
            className="w-300 md:w-380"
          />
          <Card
            imgPath="/courses/project/project_2.png"
            title="Diploma of Project Management"
            link="/"
            className="w-300 md:w-380"
          />
          <Card
            imgPath="/courses/project/project_3.png"
            title="Advanced Diploma of Program Management"
            link="/"
            className="w-300 md:w-380"
          />
        </div>
      </FadeIn>
      <FadeIn>
        <Testimonial />
      </FadeIn>
    </div>
  );
}

export default page;
