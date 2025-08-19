import React from 'react';
import Banner from '@/components/common/Banner';
import USIButton from '@/components/common/USIButton';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function Page() {
  const t = await getTranslations('usi');

  return (
    <section>
      <Banner
        slides={[
          {
            imgPath: '/get_a_usi.png',
            title: t('bannerTitle'),
            content: t('bannerSubtitle'),
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/50 w-full h-screen md:h-700 absolute z-10" />
        }
      />

      <div className="max-w-[1600px] mx-auto px-20 py-40">
        <h1 className="text-3xl md:text-4xl font-bold mb-30 font-[family-name:var(--font-montserrat)] text-center mt-40">
          {t('title')}
        </h1>

        {/* What is a USI */}
        <div className="mb-40">
          <h2 className="text-2xl font-bold mb-15 text-gray-800">
            {t('whatIsUSITitle')}
          </h2>
          <div className="bg-gray-50 p-20 ">
            <p className="text-gray-700 mb-15">{t('whatIsUSIDescription')}</p>
            <ul className="list-disc list-inside space-y-5 text-gray-700">
              <li>{t('usiBenefit1')}</li>
              <li>{t('usiBenefit2')}</li>
              <li>{t('usiBenefit3')}</li>
              <li>{t('usiBenefit4')}</li>
            </ul>
          </div>
        </div>

        {/* Who needs a USI */}
        <div className="mb-40">
          <h2 className="text-2xl font-bold mb-15 text-gray-800">
            {t('whoNeedsUSITitle')}
          </h2>
          <div className="bg-gray-50 p-20 ">
            <p className="text-gray-700 mb-15">{t('whoNeedsUSIDescription')}</p>
            <ul className="list-disc list-inside space-y-5 text-gray-700">
              <li>{t('needUSI1')}</li>
              <li>{t('needUSI2')}</li>
              <li>{t('needUSI3')}</li>
              <li>{t('needUSI4')}</li>
            </ul>
          </div>
        </div>

        {/* How to get a USI */}
        <div className="mb-40">
          <h2 className="text-2xl font-bold mb-15 text-gray-800">
            {t('howToGetUSITitle')}
          </h2>
          <div className="bg-gray-50 p-20 ">
            <p className="text-gray-700 mb-15">{t('howToGetUSIDescription')}</p>

            <div className="grid md:grid-cols-2 gap-20">
              <div className="bg-white p-15 rounded-lg">
                <h3 className="text-lg font-bold mb-10 text-gray-800">
                  {t('onlineMethodTitle')}
                </h3>
                <ol className="list-decimal list-inside space-y-5 text-gray-700">
                  <li>{t('onlineStep1')}</li>
                  <li>{t('onlineStep2')}</li>
                  <li>{t('onlineStep3')}</li>
                  <li>{t('onlineStep4')}</li>
                </ol>
                <div className="mt-15">
                  <USIButton
                    className="bg-primary-bk text-white hover:bg-gray-700"
                    url="https://www.usi.gov.au/students/create-your-usi"
                  >
                    {t('createUSIButton')}
                  </USIButton>
                </div>
              </div>

              <div className="bg-white p-15 rounded-lg">
                <h3 className="text-lg font-bold mb-10 text-gray-800">
                  {t('phoneMethodTitle')}
                </h3>
                <p className="text-gray-700 mb-10">
                  {t('phoneMethodDescription')}
                </p>
                <div className="bg-gray-100 p-10 rounded">
                  <p className="font-semibold">{t('phoneNumber')}</p>
                  <p className="text-sm text-gray-600">{t('phoneHours')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Requiorange Documents */}
        <div className="mb-40">
          <h2 className="text-2xl font-bold mb-15 text-orange-800">
            {t('requiorangeDocumentsTitle')}
          </h2>
          <div className="bg-orange-50 p-20">
            <p className="text-gray-700 mb-15">
              {t('requiorangeDocumentsDescription')}
            </p>
            <div className="grid md:grid-cols-2 gap-20">
              <div>
                <h3 className="text-lg font-bold mb-10 text-orange-800">
                  {t('primaryDocumentsTitle')}
                </h3>
                <ul className="list-disc list-inside space-y-5 text-gray-700">
                  <li>{t('primaryDoc1')}</li>
                  <li>{t('primaryDoc2')}</li>
                  <li>{t('primaryDoc3')}</li>
                  <li>{t('primaryDoc4')}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-10 text-orange-800">
                  {t('secondaryDocumentsTitle')}
                </h3>
                <ul className="list-disc list-inside space-y-5 text-gray-700">
                  <li>{t('secondaryDoc1')}</li>
                  <li>{t('secondaryDoc2')}</li>
                  <li>{t('secondaryDoc3')}</li>
                  <li>{t('secondaryDoc4')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="mb-40">
          <h2 className="text-2xl font-bold mb-15 text-orange-800">
            {t('importantInfoTitle')}
          </h2>
          <div className="bg-orange-50 p-20">
            <ul className="list-disc list-inside space-y-5 text-gray-700">
              <li>{t('importantInfo1')}</li>
              <li>{t('importantInfo2')}</li>
              <li>{t('importantInfo3')}</li>
              <li>{t('importantInfo4')}</li>
              <li>{t('importantInfo5')}</li>
            </ul>
          </div>
        </div>

        {/* Need Help */}
        <div className="mb-40">
          <h2 className="text-2xl font-bold mb-15 text-gray-800 text-center">
            {t('needHelpTitle')}
          </h2>
          <div className="bg-gray-50 p-20 text-center">
            <p className="text-gray-700 mb-15"></p>

            <div>
              <h3 className="text-lg font-bold mb-5 text-gray-800">
                {t('contactABMTitle')}
              </h3>
              <p className="text-gray-700 mb-14">
                {t('contactABMDescription')}
                <br />
                {t('needHelpDescription')}
              </p>
              <Link
                className="bg-primary-bk text-white px-20 py-10"
                href="/contact"
              >
                {t('contactABMButton')}
              </Link>
            </div>
            <div className="mt-60">
              <h3 className="text-lg font-bold mb-5 text-gray-800">
                {t('usiHelpTitle')}
              </h3>
              <p className="text-gray-700 mb-10">{t('usiHelpDescription')}</p>
              <USIButton
                className="bg-primary-bk text-white hover:bg-primary"
                url="https://www.usi.gov.au/help"
              >
                {t('usiHelpButton')}
              </USIButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
