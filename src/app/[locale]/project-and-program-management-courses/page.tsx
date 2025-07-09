import Banner from '@/components/common/Banner';
import Card from '@/components/common/Card';
import FadeIn from '@/components/common/FadeIn';
import Gallery from '@/components/common/Gallery';
import Testimonial from '@/domains/main/components/Testimonial';
import SubscriptionContainer from '@/domains/subscription/components/SubscriptionContainer';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project & Program Management Courses | ABM Further Education',
  description:
    'Lead projects that make an impact with ABM Further Education. From Certificate IV to Advanced Diploma, develop project management skills for construction, tech, and corporate sectors.',
};

function Page() {
  return (
    <div>
      {' '}
      <Banner
        slides={[
          {
            imgPath: '/courses/project/project_management.png',
            title: 'Project & Program',
            content: '',
          },
        ]}
      />
      <div className="flex flex-col items-center justify-center py-50">
        <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
          Lead Projects That Make an Impact
        </h2>
        <p className="text-sm md:text-base text-neutral-700 max-w-800 text-center">
          ABM&apos;s Project and Program Management courses equip you with the
          skills to lead successful projects across industries like
          construction, tech, and corporate sectors. From foundational roles
          with the Certificate IV to senior leadership with the Advanced
          Diploma, our flexible courses cover project planning, risk management,
          and stakeholder engagement. Whether you&apos;re starting out or aiming
          for advanced roles, ABM helps you build the expertise to turn ideas
          into real results.
        </p>
      </div>
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
      <FadeIn>
        <Gallery />
      </FadeIn>
      <FadeIn>
        <SubscriptionContainer />
      </FadeIn>
    </div>
  );
}

export default Page;
