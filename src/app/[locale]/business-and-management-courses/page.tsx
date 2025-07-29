import Banner from '@/components/common/Banner';
import Card from '@/components/common/Card';
import FadeIn from '@/components/common/FadeIn';
import Gallery from '@/components/common/Gallery';
import Testimonial from '@/domains/main/components/Testimonial';
import SubscriptionContainer from '@/domains/subscription/components/SubscriptionContainer';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business & Management Courses | ABM Further Education',
  description:
    'Explore our comprehensive range of business and management courses at ABM Further Education. From Certificate IV to Graduate Diploma, build your business career with expert training.',
};

function page() {
  return (
    <div className="font-[family-name:var(--font-montserrat)] pt-60">
      <Banner
        slides={[
          {
            imgPath: '/courses/business/business_0.png',
            title: 'Business',
            content: '',
          },
        ]}
      />
      <div className="flex flex-col items-center justify-center py-50">
        <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
          Build Your Business
          <br />
          Career with ABM
        </h2>
        <p className="text-sm md:text-base text-neutral-700 max-w-800 text-center">
          We provide high-quality education in an innovative and supportive
          environment, ensuring student success with expert teaching and work
          experience opportunities across Australia.
        </p>
      </div>
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
          Business Courses
        </h2>
        <div className="grid grid-cols-2 md:gap-40 py-50 justify-items-center max-w-1000 mx-auto">
          <Card
            imgPath="/courses/business/business_1.jpg"
            title="Certificate IV in Business"
            link="/business-and-management-courses/bsb40120-certificate-iv-in-business"
            className="w-300 md:w-480"
          />
          <Card
            imgPath="/courses/business/business_2.jpg"
            title="Diploma of Business"
            link="/business-and-management-courses/bsb50120-diploma-of-business"
            className="w-300 md:w-480"
          />
          <Card
            imgPath="/courses/business/business_3.jpg"
            title="Advanced Diploma of Business"
            link="/business-and-management-courses/bsb60120-advanced-diploma-of-business"
            className="w-300 md:w-480"
          />
          <Card
            imgPath="/courses/business/business_4.png"
            title="Graduate Diploma of Management (Learning)"
            link="/business-and-management-courses/bsb80120-graduate-diploma-of-management"
            className="w-300 md:w-480"
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
