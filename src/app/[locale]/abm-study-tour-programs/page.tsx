'use client';

import Banner from '@/components/common/Banner';
import FadeIn from '@/components/common/FadeIn';
import React from 'react';
import PackageCard from '@/components/common/PackageCard';
import Button from '@/components/common/Button';
import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();
  return (
    <div className="font-[family-name:var(--font-montserrat)] pt-60">
      <Banner
        slides={[
          {
            imgPath: '/home/banner.png',
            title: 'ABM Study Tour Programs',
            content: '',
          },
        ]}
      />
      <div className="flex flex-col items-center justify-center py-50">
        <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
          ABM Study Tour Programs
        </h2>
        <p className="text-sm md:text-base text-neutral-700 max-w-800 text-center">
          Designed for international students and education partners, our
          short-term programs combine classroom knowledge with real industry
          practice — all in beautiful Sydney.
        </p>
      </div>
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
          Hospitality & Cookery
        </h2>
        <div className="flex flex-wrap md:gap-40 py-50 justify-items-center justify-center mx-auto border-b border-gray-200">
          <PackageCard
            backgroundImage="/courses/cookery/DHM.png"
            title="Hospitality Essentials"
            duration="4–8 weeks"
            items={[
              'Customer Service & Hospitality Overview',
              'Food & Beverage Operations',
              'Bar & Drink Service',
              'Add-ons: RSA, Coffee, English',
            ]}
          />
          <PackageCard
            backgroundImage="/courses/cookery/KM.png"
            title="Chef & Restaurant Manager Essentials"
            duration="4–8 weeks"
            items={[
              'Australian Cuisine & Plating',
              'Pastry, Bread & Desserts',
              'Hospitality Service Simulation',
              'Add-ons: Dietary Skills, English',
            ]}
          />
          <PackageCard
            backgroundImage="/courses/cookery/ADHM.png"
            title="Diploma of Hospitality"
            duration="4 months – 1 year"
            items={[
              'Online Theory + Practical in AU or Korea',
              'For uni students or industry staff',
              '20 theory + 8 practical units',
            ]}
          />
        </div>
      </FadeIn>
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
          Fitness & Sport
        </h2>
        <div className="flex flex-wrap md:gap-40 py-50 justify-items-center justify-center mx-auto border-b border-gray-200">
          <PackageCard
            backgroundImage="/courses/fitness/fitness_1.png"
            title="Functional Movement & Rehab"
            duration="3 weeks"
            items={[
              'Fitness Assessments & Rehab Training',
              'Workplace Wellness & Injury Prevention',
              'Includes Rehab Centre Visit',
            ]}
          />
          <PackageCard
            backgroundImage="/courses/fitness/fitness_2.png"
            title="Manual Therapy for OT Students"
            duration="3 weeks"
            items={[
              'Stretching, Massage & Trigger Points',
              'Sports Recovery Techniques',
              'Therapeutic Application for OT',
            ]}
          />
          <PackageCard
            backgroundImage="/courses/fitness/fitness_3.png"
            title="Certificate III & IV in Fitness"
            duration="12–24 weeks"
            items={[
              'Group & Personal Training',
              'Clients: Seniors, Youth, General Pop.',
              '1-Year Gym Membership Included',
            ]}
          />
        </div>
      </FadeIn>
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
          Health & Nursing
        </h2>
        <div className="flex flex-wrap md:gap-40 py-50 justify-items-center justify-center mx-auto border-b border-gray-200">
          <PackageCard
            backgroundImage="/courses/health/health_1.png"
            title="Health Services Assistance"
            duration="16 weeks"
            items={[
              'Workplace Simulation + 80-hr Placement',
              'Acute Care Support & Patient Handling',
              'Infection Control & Communication',
            ]}
          />
          <PackageCard
            backgroundImage="/courses/health/health_2.png"
            title="HSA + Nursing English"
            duration="16 weeks"
            items={[
              'Includes 12 Weeks of English Support',
              'Ideal for IELTS 4.5 or Equivalent',
              'Focus on Communication & Work Skills',
            ]}
          />
        </div>
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
            className="mt-10 p-10 border bg-primary"
            onClick={() => router.push('/contact')}
          >
            Contact Us to Customise
          </Button>
        </div>
      </FadeIn>
    </div>
  );
}

export default Page;
