import React from 'react';
import Link from 'next/link';
import Banner from '@/components/common/Banner';
import DownloadButton from '@/components/common/DownloadButton';
import { getActiveFeeSchedulePage } from '@/lib/fee-schedule-db';
import { getTranslations } from 'next-intl/server';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations('feeSchedule');
  const data = await getActiveFeeSchedulePage(locale);

  const translation = data?.translation;
  const pageTitle = translation?.page_title || data?.page_title || t('title');
  const bannerImage = data?.banner_image || '/fees.png';
  const bannerTitle = translation?.banner_title || data?.banner_title || t('bannerTitle');
  const bannerSubtitle = translation?.banner_subtitle || data?.banner_subtitle || t('bannerSubtitle');
  const promotionTitle = translation?.promotion_title || data?.promotion_title || t('promotionTitle');
  const promotionDescription = translation?.promotion_description || data?.promotion_description || t('promotionDescription');
  const downloadButtonText = translation?.download_button_text || data?.download_button_text || t('downloadButton');
  const paymentTitle = translation?.payment_title || data?.payment_title || t('paymentTitle');
  const paymentDescription = translation?.payment_description || data?.payment_description || t('paymentDescription');
  const contactText = translation?.contact_text || data?.contact_text || t('contactText');
  const contactEmail = data?.contact_email || 'accounts@abm.edu.au';
  const instalmentLink =
    data?.instalment_link ||
    'https://abm.edu.au/news/fb413fe6-ca75-495b-9bfe-de5ceff255c8';
  const instalmentLinkText =
    translation?.instalment_link_text || data?.instalment_link_text || 'View Direct Debit Instalment Plan Details';
  const otherFeesTitle = translation?.other_fees_title || data?.other_fees_title || t('otherFeesTitle');
  const nonRefundableNote = translation?.non_refundable_note || data?.non_refundable_note || t('nonRefundableNote');
  const fees = data?.fees || [];

  return (
    <section>
      <Banner
        slides={[
          {
            imgPath: bannerImage,
            title: bannerTitle,
            content: bannerSubtitle,
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/50 w-full h-screen md:h-700 absolute z-10" />
        }
      />
      <div className="max-w-[1600px] mx-auto px-20 md:px-80 py-40">
        <h1 className="text-3xl md:text-4xl font-bold mb-30 font-[family-name:var(--font-montserrat)] text-center mt-40">
          {pageTitle}
        </h1>

        {/* Promotional Message */}
        <div className="mb-40 p-20 bg-orange-50 text-center">
          <h2 className="text-xl font-bold mb-10 text-primary">
            {promotionTitle}
          </h2>
          <p className="text-gray-700 mb-15">{promotionDescription}</p>
          <DownloadButton>{downloadButtonText}</DownloadButton>
        </div>

        {/* Payment Information */}
        <div className="mb-40 p-20 bg-gray-50">
          <h2 className="text-xl font-bold mb-10 text-gray-800">
            {paymentTitle}
          </h2>
          <p className="text-gray-700 mb-10">{paymentDescription}</p>
          <p className="text-gray-700 mb-20">
            {contactText}{' '}
            <a
              href={`mailto:${contactEmail}`}
              className="text-primary hover:underline font-semibold"
            >
              {contactEmail}
            </a>
          </p>

          {/* Instalment Payment Option Button */}
          {instalmentLink && (
            <div className="text-center">
              <Link
                href={instalmentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-30 py-12 font-semibold hover:bg-primary-bk transition-colors duration-200"
              >
                {instalmentLinkText}
              </Link>
            </div>
          )}
        </div>

        {/* Other Fees Table */}
        <div className="mb-40">
          <h2 className="text-2xl font-bold mb-20">{otherFeesTitle}</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <tbody>
                {fees.length > 0 ? (
                  fees.map((fee) => (
                    <tr key={fee.id}>
                      <td className="w-2/5 p-15 bg-gray-100 font-semibold border border-gray-300">
                        {fee.fee_name}
                      </td>
                      <td className="p-15 border border-gray-300">
                        {fee.fee_amount}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="w-2/5 p-15 bg-gray-100 font-semibold border border-gray-300">
                      {t('enrolmentFee')}
                    </td>
                    <td className="p-15 border border-gray-300">
                      {t('enrolmentFeeAmount')}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-10">{nonRefundableNote}</p>
        </div>
      </div>
    </section>
  );
}
