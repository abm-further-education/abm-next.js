'use client';

import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Button from '@/components/common/Button';
import CheckEmoji from '@/components/common/CheckEmoji';
import PostPaymentComplianceFormFields from '@/components/forms/PostPaymentComplianceFormFields';
import {
  INITIAL_POST_PAYMENT_COMPLIANCE_FORM,
  validatePostPaymentComplianceForm,
  type PostPaymentComplianceFormState,
} from '@/lib/post-payment-form-types';

interface PaymentDetails {
  courseSlug: string;
  courseName: string;
  selectedDate: string;
  customerName?: string;
  customerEmail: string;
  amountPaid: number;
}

export default function PaymentSuccessPage() {
  const t = useTranslations('paymentSuccess');
  const params = useParams();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const locale = Array.isArray(params.locale)
    ? params.locale[0]
    : (params.locale as string | undefined) || 'en';
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submittingForm, setSubmittingForm] = useState(false);
  const [previewingPdf, setPreviewingPdf] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [additionalForm, setAdditionalForm] =
    useState<PostPaymentComplianceFormState>(
      INITIAL_POST_PAYMENT_COMPLIANCE_FORM,
    );

  useEffect(() => {
    const fetchPaymentDetails = async (sessionId: string) => {
      try {
        const response = await fetch(
          `/api/stripe/verify-payment?session_id=${sessionId}`,
        );
        if (response.ok) {
          const data = await response.json();
          setPaymentDetails(data);
        } else {
          setError(t('fetchError'));
        }
      } catch {
        setError(t('verificationError'));
      } finally {
        setLoading(false);
      }
    };
    if (sessionId) {
      fetchPaymentDetails(sessionId);
    } else {
      setError(t('sessionNotFound'));
      setLoading(false);
    }
  }, [sessionId, t]);

  const buildSubmissionPayload = () => ({
    sessionId,
    paymentDetails,
    ...additionalForm,
  });

  const handleAdditionalFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const validationError = validatePostPaymentComplianceForm(additionalForm);
    if (validationError) {
      setFormError(validationError);
      return;
    }

    setSubmittingForm(true);
    try {
      const response = await fetch('/api/short-course-post-payment-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildSubmissionPayload()),
      });

      const result = await response.json();
      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'Failed to submit form.');
      }
      setFormSubmitted(true);
    } catch (submitError) {
      setFormError(
        submitError instanceof Error
          ? submitError.message
          : 'Failed to submit additional form.',
      );
    } finally {
      setSubmittingForm(false);
    }
  };

  const handlePreviewPdf = async () => {
    if (!paymentDetails) {
      setFormError('Payment details are not available for PDF preview.');
      return;
    }

    setFormError(null);
    setPreviewingPdf(true);

    try {
      const response = await fetch(
        '/api/short-course-post-payment-form/preview-pdf',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(buildSubmissionPayload()),
        },
      );

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || 'Failed to generate preview PDF.');
      }

      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      window.open(objectUrl, '_blank', 'noopener,noreferrer');
      setTimeout(() => URL.revokeObjectURL(objectUrl), 60_000);
    } catch (previewError) {
      setFormError(
        previewError instanceof Error
          ? previewError.message
          : 'Failed to generate preview PDF.',
      );
    } finally {
      setPreviewingPdf(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-lg">{t('verifyingPayment')}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-red-500 text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {t('errorOccurred')}
          </h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link href={`/${locale}/custom-programs`}>
            <Button className="bg-primary text-white">
              {t('backToCourses')}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-140 mb-60">
        <CheckEmoji />
        <div className="bg-white p-8 max-w-[960px] w-full mx-auto mt-10">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-14 font-[family-name:var(--font-montserrat)]">
              {t('title')}
            </h1>

            <p className="text-gray-800 font-semibold mb-12 font-[family-name:var(--font-montserrat)] whitespace-pre-line">
              {t('subtitle')}
            </p>

            {paymentDetails && (
              <div className="bg-gray-50 p-8 mb-18 text-left">
                <h3 className="font-semibold text-gray-800 mb-12">
                  {t('registrationInfo')}
                </h3>
                <div className="space-y-2 text-sm">
                  {paymentDetails.customerName && (
                    <p>
                      <strong>Name:</strong> {paymentDetails.customerName}
                    </p>
                  )}
                  <p>
                    <strong>{t('course')}:</strong> {paymentDetails.courseName}
                  </p>
                  <p>
                    <strong>{t('date')}:</strong> {paymentDetails.selectedDate}
                  </p>
                  <p>
                    <strong>{t('email')}:</strong>{' '}
                    {paymentDetails.customerEmail}
                  </p>
                  <p>
                    <strong>{t('amountPaid')}:</strong> $
                    {paymentDetails.amountPaid}
                  </p>
                </div>
              </div>
            )}

            <div className="bg-orange-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-orange-800">
                {t('emailNotification')}
              </p>
            </div>
          </div>

          <div className="mt-20 border-t border-gray-200 pt-20">
            <h2 className="text-xl font-bold mb-8">
              Third Page of Booking Form
            </h2>
            <p className="text-sm text-gray-700 mb-8">
              We would like to know more about you as part of regulatory and
              compliance requirements.
            </p>
            <p className="text-sm text-gray-600 mb-14">
              Need to complete this later?{' '}
              <Link
                href={`/${locale}/custom-programs/booking-form`}
                className="text-primary underline"
              >
                Return to this form anytime
              </Link>
              .
            </p>

            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-12 rounded-md">
                Thank you. Your additional compliance form has been submitted.
              </div>
            ) : (
              <form
                className="space-y-14"
                onSubmit={handleAdditionalFormSubmit}
              >
                <PostPaymentComplianceFormFields
                  form={additionalForm}
                  onChange={(updater) =>
                    setAdditionalForm((prev) => updater(prev))
                  }
                />

                {formError && (
                  <p className="text-red-500 text-sm">{formError}</p>
                )}

                <div className="flex flex-wrap gap-10">
                  <button
                    type="submit"
                    disabled={submittingForm}
                    className="bg-primary-bk text-white px-20 py-10 font-semibold text-sm disabled:opacity-70"
                  >
                    {submittingForm
                      ? 'Submitting...'
                      : 'Submit additional form'}
                  </button>
                  <button
                    type="button"
                    disabled={previewingPdf}
                    onClick={handlePreviewPdf}
                    className="bg-white border border-primary-bk text-primary-bk px-20 py-10 font-semibold text-sm disabled:opacity-70"
                  >
                    {previewingPdf ? 'Generating PDF...' : 'Preview PDF (temp)'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
