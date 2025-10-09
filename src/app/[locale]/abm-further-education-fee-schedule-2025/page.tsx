import React from 'react';
import Link from 'next/link';
import Banner from '@/components/common/Banner';
import DownloadButton from '@/components/common/DownloadButton';
import { getTranslations } from 'next-intl/server';

export default async function Page() {
  const t = await getTranslations('feeSchedule');

  return (
    <section>
      <Banner
        slides={[
          {
            imgPath: '/fees.png',
            title: t('bannerTitle'),
            content: t('bannerSubtitle'),
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/50 w-full h-screen md:h-700 absolute z-10" />
        }
      />
      <div className="max-w-[1600px] mx-auto px-20 md:px-80 py-40">
        <h1 className="text-3xl md:text-4xl font-bold mb-30 font-[family-name:var(--font-montserrat)] text-center mt-40">
          {t('title')}
        </h1>

        {/* Promotional Message */}
        <div className="mb-40 p-20 bg-orange-50 text-center">
          <h2 className="text-xl font-bold mb-10 text-primary">
            {t('promotionTitle')}
          </h2>
          <p className="text-gray-700 mb-15">{t('promotionDescription')}</p>
          <DownloadButton>{t('downloadButton')}</DownloadButton>
        </div>

        {/* Payment Information */}
        <div className="mb-40 p-20 bg-gray-50">
          <h2 className="text-xl font-bold mb-10 text-gray-800">
            {t('paymentTitle')}
          </h2>
          <p className="text-gray-700 mb-10">{t('paymentDescription')}</p>
          <p className="text-gray-700 mb-20">
            {t('contactText')}{' '}
            <a
              href="mailto:accounts@abm.edu.au"
              className="text-primary hover:underline font-semibold"
            >
              accounts@abm.edu.au
            </a>
          </p>

          {/* Instalment Payment Option Button */}
          <div className="text-center">
            <Link
              href="https://abm.edu.au/news/2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-30 py-12 font-semibold hover:bg-primary-bk transition-colors duration-200"
            >
              View Direct Debit Instalment Plan Details
            </Link>
          </div>
        </div>

        {/* Other Fees Table */}
        <div className="mb-40">
          <h2 className="text-2xl font-bold mb-20">{t('otherFeesTitle')}</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <tbody>
                <tr>
                  <td className="w-2/5 p-15 bg-gray-100 font-semibold border border-gray-300">
                    {t('enrolmentFee')}
                  </td>
                  <td className="p-15 border border-gray-300">
                    {t('enrolmentFeeAmount')}
                  </td>
                </tr>
                <tr>
                  <td className="w-2/5 p-15 bg-gray-100 font-semibold border border-gray-300">
                    {t('materialFee')}
                  </td>
                  <td className="p-15 border border-gray-300">
                    {t('materialFeeAmount')}
                  </td>
                </tr>
                <tr>
                  <td className="w-2/5 p-15 bg-gray-100 font-semibold border border-gray-300">
                    {t('rplFee')}
                  </td>
                  <td className="p-15 border border-gray-300">
                    {t('rplFeeAmount')}
                  </td>
                </tr>
                <tr>
                  <td className="w-2/5 p-15 bg-gray-100 font-semibold border border-gray-300">
                    {t('creditTransferFee')}
                  </td>
                  <td className="p-15 border border-gray-300">
                    {t('creditTransferFeeAmount')}
                  </td>
                </tr>
                <tr>
                  <td className="w-2/5 p-15 bg-gray-100 font-semibold border border-gray-300">
                    {t('changeSessionFee')}
                  </td>
                  <td className="p-15 border border-gray-300">
                    {t('changeSessionFeeAmount')}
                  </td>
                </tr>
                <tr>
                  <td className="w-2/5 p-15 bg-gray-100 font-semibold border border-gray-300">
                    {t('changeCourseFee')}
                  </td>
                  <td className="p-15 border border-gray-300">
                    {t('changeCourseFeeAmount')}
                  </td>
                </tr>
                <tr>
                  <td className="w-2/5 p-15 bg-gray-100 font-semibold border border-gray-300">
                    {t('reassessmentFee')}
                  </td>
                  <td className="p-15 border border-gray-300">
                    {t('reassessmentFeeAmount')}
                  </td>
                </tr>
                <tr>
                  <td className="w-2/5 p-15 bg-gray-100 font-semibold border border-gray-300">
                    {t('latePaymentFee')}
                  </td>
                  <td className="p-15 border border-gray-300">
                    {t('latePaymentFeeAmount')}
                  </td>
                </tr>
                <tr>
                  <td className="w-2/5 p-15 bg-gray-100 font-semibold border border-gray-300">
                    {t('withdrawalFee')}
                  </td>
                  <td className="p-15 border border-gray-300">
                    {t('withdrawalFeeAmount')}
                  </td>
                </tr>
                <tr>
                  <td className="w-2/5 p-15 bg-gray-100 font-semibold border border-gray-300">
                    {t('defermentFee')}
                  </td>
                  <td className="p-15 border border-gray-300">
                    {t('defermentFeeAmount')}
                  </td>
                </tr>
                <tr>
                  <td className="w-2/5 p-15 bg-gray-100 font-semibold border border-gray-300">
                    {t('lateSubmissionFee')}
                  </td>
                  <td className="p-15 border border-gray-300">
                    {t('lateSubmissionFeeAmount')}
                  </td>
                </tr>
                <tr>
                  <td className="w-2/5 p-15 bg-gray-100 font-semibold border border-gray-300">
                    {t('theoryCatchupFee')}
                  </td>
                  <td className="p-15 border border-gray-300">
                    {t('theoryCatchupFeeAmount')}
                  </td>
                </tr>
                <tr>
                  <td className="w-2/5 p-15 bg-gray-100 font-semibold border border-gray-300">
                    {t('practicalCatchupFee')}
                  </td>
                  <td className="p-15 border border-gray-300">
                    {t('practicalCatchupFeeAmount')}
                  </td>
                </tr>
                <tr>
                  <td className="w-2/5 p-15 bg-gray-100 font-semibold border border-gray-300">
                    {t('repeatUnitFee')}
                  </td>
                  <td className="p-15 border border-gray-300">
                    {t('repeatUnitTheoryAmount')}
                    <br />
                    {t('repeatUnitPracticalAmount')}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-10">
            {t('nonRefundableNote')}
          </p>
        </div>
      </div>
    </section>
  );
}
