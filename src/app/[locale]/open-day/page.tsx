import Banner from '@/components/common/Banner';
import FadeIn from '@/components/common/FadeIn';
import OpenDayRegisterButton from '@/domains/open-day/components/OpenDayRegisterButton';
import { OPEN_DAY_REGISTRATION_FORM_URL } from '@/domains/open-day/constants';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export { generateMetadata } from './metadata';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function OpenDayPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'openDay' });
  const highlights = t.raw('highlights') as string[];

  return (
    <div className="font-[family-name:var(--font-montserrat)] pt-120">
      <Banner
        slides={[
          {
            imgPath: '/open-day-banner.png',
            title: t('bannerTitle'),
            content: t('bannerContent'),
            linkButton: {
              href: OPEN_DAY_REGISTRATION_FORM_URL,
              text: t('bannerCta'),
              target: '_blank',
            },
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/25 w-full h-screen md:h-700 absolute z-10" />
        }
      />

      <div className="px-20 xl:px-80 max-w-[1600px] mx-auto">
        <FadeIn>
          <div className="flex flex-col items-center justify-center md:py-50 py-20">
            <h2 className="text-3xl md:text-4xl font-bold py-30 md:py-40 text-center">
              {t('eventTitle')}
            </h2>
            <p className="text-base md:text-lg text-neutral-700 text-center max-w-800 px-10 md:px-0 mb-30 font-bold">
              {t('intro')}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-30 lg:gap-40 pb-40 lg:pb-50">
            <div className="order-2 lg:order-1 space-y-24">
              <ul className="w-full max-w-700 space-y-12 text-left text-sm md:text-base text-neutral-800">
                <li className="leading-snug">{t('dateLine')}</li>
                <li className="leading-snug">{t('timeLine')}</li>
                <li className="leading-snug">{t('locationLine')}</li>
              </ul>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-16">
                  {t('highlightsTitle')}
                </h3>
                <ul className="space-y-10 text-sm md:text-base text-neutral-700">
                  {highlights.map((line, i) => (
                    <li key={i} className="leading-relaxed">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-20 md:p-24 rounded-20 bg-amber-50 border border-amber-100">
                <h3 className="text-lg md:text-xl font-bold mb-10">
                  {t('offerTitle')}
                </h3>
                <p className="text-sm md:text-base text-neutral-800 font-medium">
                  {t('offerBody')}
                </p>
              </div>

              <p className="text-sm md:text-base font-semibold text-neutral-900">
                {t('registerTitle')}
              </p>

              <p className="text-xs md:text-sm text-neutral-500 break-words">
                {t('hashtags')}
              </p>
            </div>

            <div className="order-1 lg:order-2 bg-white p-24 md:p-40 rounded-20 shadow-lg border border-gray-100 h-fit lg:sticky lg:top-140 max-w-lg mx-auto w-full lg:max-w-none">
              <h3 className="text-lg md:text-xl font-bold mb-20 text-center">
                {t('registerTitle')}
              </h3>

              <div className="mt-10 lg:mt-28 flex flex-col items-center">
                <div className="relative w-full max-w-[220px] aspect-square bg-neutral-50 rounded-12 border border-neutral-200 overflow-hidden">
                  <Image
                    src="/open-day-registration-qr.png"
                    alt={t('qrCaption')}
                    fill
                    className="object-contain p-12"
                    sizes="220px"
                  />
                </div>
                <p className="text-sm text-neutral-600 mt-14 text-center px-10 mb-20">
                  {t('qrCaption')}
                </p>
              </div>
              <OpenDayRegisterButton label={t('registerButton')} />
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn>
        <div className="text-center py-40 px-20 bg-primary">
          <h3 className="text-2xl md:text-3xl font-bold mb-20 text-white">
            {t('ctaTitle')}
          </h3>
          <p className="max-w-600 mx-auto text-white text-sm md:text-base">
            {t('ctaDescription')}
          </p>
          <div className="mt-24 max-w-xs mx-auto">
            <OpenDayRegisterButton
              label={t('registerButton')}
              className="w-full bg-white text-primary hover:bg-neutral-100 py-14 text-base font-semibold"
            />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
