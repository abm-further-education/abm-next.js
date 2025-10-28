import Banner from '@/components/common/Banner';
import Card from '@/components/common/Card';
import FadeIn from '@/components/common/FadeIn';
import Gallery from '@/components/common/Gallery';
import Testimonial from '@/domains/main/components/Testimonial';
import SubscriptionContainer from '@/domains/subscription/components/SubscriptionContainer';
import React from 'react';
import { useTranslations } from 'next-intl';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fitness & Sports Courses | ABM Further Education',
  description:
    'Turn your passion for fitness into a career with ABM Further Education. Explore our fitness and sports courses designed for both international students and domestic fast-track options.',
};

function FitnessPage() {
  const t = useTranslations('fitnessPage');
  return (
    <div className="pt-60">
      <Banner
        slides={[
          {
            imgPath: '/courses/fitness/ABM_Fitness_Photos_12.jpg',
            title: t('bannerTitle'),
            content: '',
          },
        ]}
      />
      <div className="flex flex-col items-center justify-center py-50">
        <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
          {t('heading')
            .split('\n')
            .map((line, i) => (
              <React.Fragment key={i}>
                {i > 0 && <br />}
                {line}
              </React.Fragment>
            ))}
        </h2>
        <p className="text-sm md:text-base text-neutral-700 max-w-800 text-center">
          {t('description')}
        </p>
      </div>
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
          {t('forInternational')}
        </h2>
        <div className="flex flex-wrap md:gap-20 py-50 justify-center items-center max-w-1200 mx-auto">
          <Card
            imgPath="/courses/fitness/fitness_4.png"
            title={t('cert3')}
            link="/fitness-instructor-personal-trainer-courses/sis30321-certificate-iii-in-fitness"
            className="w-300 md:w-330"
          />
          <Card
            imgPath="/courses/fitness/fitness_5.png"
            title={t('cert4')}
            link="/fitness-instructor-personal-trainer-courses/sis40221-certificate-iv-in-fitness"
            className="w-300 md:w-330"
          />
          <Card
            imgPath="/courses/fitness/diploma-of-sport.png"
            title={t('diploma')}
            link="/fitness-instructor-personal-trainer-courses/sis50321-diploma-of-sport"
            className="w-300 md:w-330"
          />
        </div>
      </FadeIn>
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
          {t('forDomestic')}
        </h2>
        <div className="flex flex-wrap md:gap-20 py-50 justify-center items-center max-w-1200 mx-auto">
          <Card
            imgPath="/courses/fitness/fitness_2.png"
            title={t('cert3Fast')}
            link="/fitness-instructor-personal-trainer-courses/certificate-iii-in-fitness-fast-track"
            className="w-300 md:w-530"
          />
          <Card
            imgPath="/courses/fitness/fitness_3.png"
            title={t('cert4Fast')}
            link="/fitness-instructor-personal-trainer-courses/certificate-iv-in-fitness-fast-track"
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

export default FitnessPage;
