import Banner from '@/components/common/Banner';
import FadeIn from '@/components/common/FadeIn';
import TrialForm from '@/domains/promotion/components/TrialForm';
import { getTranslations } from 'next-intl/server';
import ImageSlider from './ImageSlider';
import { Check } from 'lucide-react';

export { generateMetadata } from './metadata';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function PromotionPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'promotion' });

  return (
    <div className="font-[family-name:var(--font-montserrat)] pt-120">
      <Banner
        slides={[
          {
            imgPath: '/promotion_2.png',
            title: 'Book Your Free Campus, Gym & Kitchen Tour or 1-Day Trial',
            linkButton: {
              href: '/promotion',
              text: 'Book Your Free Campus, Gym & Kitchen Tour or 1-Day Trial',
            },
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/20 w-full h-screen md:h-700 absolute z-10" />
        }
      />

      <div className="px-20 xl:px-80 max-w-[1600px] mx-auto">
        <FadeIn>
          <div className="flex flex-col items-center justify-center md:py-50">
            <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
              {t('title')}
            </h2>
            <p className="text-sm md:text-base text-neutral-700 max-w-800 text-center px-20 md:px-0">
              {t('description')}
            </p>
          </div>
        </FadeIn>

        {/* Image Slider Section */}
        <FadeIn delay={0.1}>
          <div className="py-40">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-30">
              {t('galleryTitle')}
            </h3>
            <ImageSlider />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 py-40">
            <div className="space-y-30">
              <h3 className="text-2xl md:text-3xl font-bold text-primary">
                {t('trialTitle')}
              </h3>
              <div className="space-y-20">
                <div className="flex items-center space-x-15">
                  <div className="w-30 h-30 bg-primary rounded-full mt-5 flex items-center justify-center">
                    <Check size={20} className="text-white" />
                  </div>
                  <p className="text-neutral-700">{t('benefit1')}</p>
                </div>
                <div className="flex items-center space-x-15">
                  <div className="w-30 h-30 bg-primary rounded-full mt-5 flex items-center justify-center">
                    <Check size={20} className="text-white" />
                  </div>
                  <p className="text-neutral-700">{t('benefit2')}</p>
                </div>
                <div className="flex items-center space-x-15">
                  <div className="w-30 h-30 bg-primary rounded-full mt-5 flex items-center justify-center">
                    <Check size={20} className="text-white" />
                  </div>
                  <p className="text-neutral-700">{t('benefit3')}</p>
                </div>
              </div>

              <div className="bg-gray-50 p-30 rounded-20">
                <h4 className="text-xl font-bold mb-20">{t('whatToExpect')}</h4>
                <ul className="space-y-15 text-neutral-700">
                  <li>• {t('expectation1')}</li>
                  <li>• {t('expectation3')}</li>
                  <li>• {t('expectation4')}</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-40 rounded-20 shadow-lg border border-gray-100">
              <TrialForm />
            </div>
          </div>
        </FadeIn>
      </div>
      <FadeIn>
        <div className="text-center py-40 bg-primary">
          <h3 className="text-2xl md:text-3xl font-bold mb-20 text-white">
            {t('ctaTitle')}
          </h3>
          <p className="max-w-600 mx-auto text-white">{t('ctaDescription')}</p>
        </div>
      </FadeIn>
    </div>
  );
}
