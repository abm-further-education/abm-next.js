import Banner from '@/components/common/Banner';
import Card from '@/components/common/Card';
import FadeIn from '@/components/common/FadeIn';
import Gallery from '@/components/common/Gallery';
import Testimonial from '@/domains/main/components/Testimonial';
import SubscriptionContainer from '@/domains/subscription/components/SubscriptionContainer';
import React from 'react';

function page() {
  return (
    <div>
      <Banner
        slides={[
          {
            imgPath: '/courses/fitness/fitness_1.png',
            title: 'Fitness & Sports',
            content: '',
          },
        ]}
      />
      <div className="flex flex-col items-center justify-center py-50">
        <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
          Turn Your Passion for
          <br />
          Fitness into a Career
        </h2>
        <p className="text-sm md:text-base text-neutral-700 max-w-800 text-center">
          ABM’s fitness courses prepare you for a career in Australia’s growing
          fitness industry. Gain the skills to lead group classes, design
          personalized training programs, and work in gyms, outdoor settings, or
          online. Whether starting out or advancing your expertise, our flexible
          programs set you up for success.
        </p>
      </div>
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
          For International Students
        </h2>
        <div className="flex flex-wrap md:gap-20 py-50 justify-center items-center max-w-1200 mx-auto">
          <Card
            imgPath="/courses/fitness/fitness_4.png"
            title="Certificate III in FItness"
            link="/"
            className="w-300 md:w-530"
          />
          <Card
            imgPath="/courses/fitness/fitness_5.png"
            title="Certificate IV in FItness"
            link="/"
            className="w-300 md:w-530"
          />
        </div>
      </FadeIn>
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
          For Domestic (Fast Track)
        </h2>
        <div className="flex flex-wrap md:gap-20 py-50 justify-center items-center max-w-1200 mx-auto">
          <Card
            imgPath="/courses/fitness/fitness_2.png"
            title="Certificate III in FItness (Fast Track)"
            link="/"
            className="w-300 md:w-530"
          />
          <Card
            imgPath="/courses/fitness/fitness_3.png"
            title="Certificate IV in FItness (Fast Track)"
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
