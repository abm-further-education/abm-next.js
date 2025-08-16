import Banner from '@/components/common/Banner';
import Card from '@/components/common/Card';
import FadeIn from '@/components/common/FadeIn';
import Gallery from '@/components/common/Gallery';
import Testimonial from '@/domains/main/components/Testimonial';
import SubscriptionContainer from '@/domains/subscription/components/SubscriptionContainer';
import React from 'react';
import { useTranslations } from 'next-intl';
import type { Metadata } from 'next';
import { BriefcaseBusiness, GraduationCap, Hospital } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Health | ABM Further Education',
  description:
    'Start your healthcare career with ABM Further Education. Explore our health and wellness courses including Certificate III in Health Services Assistance with comprehensive support and work placement.',
};

function HealthPage() {
  const t = useTranslations('healthPage');
  return (
    <div className="pt-60">
      <Banner
        slides={[
          {
            imgPath: '/courses/health/health_1.png',
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
          {t('nursingSupport')}
        </h2>
        <div className="flex flex-wrap md:gap-20 py-50 justify-center items-center max-w-1200 mx-auto">
          <Card
            imgPath="/courses/health/health_2.png"
            title={t('cert3Health')}
            link="/health-and-wellness-courses/hlt33115-certificate-iii-in-health-services-assistance"
            className="w-300 md:w-530"
          />
        </div>
      </FadeIn>
      <FadeIn>
        <div className="bg-gray-50 py-80 px-20 md:px-80">
          <div className="max-w-1200 mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-40">
              {t('whyChoose')}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-30">
              <div className="text-center">
                <div className="bg-primary text-white w-60 h-60 rounded-full flex items-center justify-center mx-auto mb-20">
                  <span className="text-2xl">
                    <Hospital />
                  </span>
                </div>
                <h4 className="font-semibold mb-10">{t('realHealthcare')}</h4>
                <p className="text-sm text-gray-600">
                  {t('realHealthcareDesc')}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white w-60 h-60 rounded-full flex items-center justify-center mx-auto mb-20">
                  <span className="text-2xl">
                    <BriefcaseBusiness />
                  </span>
                </div>
                <h4 className="font-semibold mb-10">{t('workPlacement')}</h4>
                <p className="text-sm text-gray-600">
                  {t('workPlacementDesc')}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white w-60 h-60 rounded-full flex items-center justify-center mx-auto mb-20">
                  <span className="text-2xl">
                    <GraduationCap />
                  </span>
                </div>
                <h4 className="font-semibold mb-10">{t('recognised')}</h4>
                <p className="text-sm text-gray-600">{t('recognisedDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="py-80 px-20 md:px-80">
          <div className="max-w-1200 mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-40">
              {t('careerOpportunities')}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 text-center">
              <div className="p-20 border rounded shadow-sm">
                <h4 className="font-semibold text-primary">{t('ain')}</h4>
              </div>
              <div className="p-20 border rounded shadow-sm">
                <h4 className="font-semibold text-primary">
                  {t('healthServicesAssistant')}
                </h4>
              </div>
              <div className="p-20 border rounded shadow-sm">
                <h4 className="font-semibold text-primary">
                  {t('personalCareAssistant')}
                </h4>
              </div>
              <div className="p-20 border rounded shadow-sm">
                <h4 className="font-semibold text-primary">
                  {t('hospitalOrderly')}
                </h4>
              </div>
              <div className="p-20 border rounded shadow-sm">
                <h4 className="font-semibold text-primary">
                  {t('patientSupport')}
                </h4>
              </div>
              <div className="p-20 border rounded shadow-sm">
                <h4 className="font-semibold text-primary">
                  {t('supportWorker')}
                </h4>
              </div>
              <div className="p-20 border rounded shadow-sm">
                <h4 className="font-semibold text-primary">
                  {t('careWorker')}
                </h4>
              </div>
            </div>
          </div>
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

export default HealthPage;
