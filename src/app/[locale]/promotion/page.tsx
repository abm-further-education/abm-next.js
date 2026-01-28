import Banner from '@/components/common/Banner';
import FadeIn from '@/components/common/FadeIn';
import TrialForm from '@/domains/promotion/components/TrialForm';
import BenefitsSection from '@/domains/promotion/components/BenefitsSection';
import { CourseTypeProvider } from '@/domains/promotion/components/CourseTypeContext';
import { getTranslations } from 'next-intl/server';
import ImageSlider from './ImageSlider';

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
            imgPath: '/promotion_3.png',
            title: 'Get a Free 1-Day Trial Now',
            content:
              'Book a Free Tour of Our Campus, Gym & Kitchen, or Enjoy a Fitness & HSA 1-Day Trial.',
            linkButton: {
              href: '/promotion',
              text: 'Try It Now',
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
          <CourseTypeProvider>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 py-40">
              <div>
                <BenefitsSection />
              </div>

              <div className="bg-white p-40 rounded-20 shadow-lg border border-gray-100">
                <TrialForm />
              </div>
            </div>
          </CourseTypeProvider>
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
