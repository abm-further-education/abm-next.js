'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import PostPaymentComplianceFormFields from '@/components/forms/PostPaymentComplianceFormFields';
import {
  INITIAL_POST_PAYMENT_COMPLIANCE_FORM,
  validatePostPaymentComplianceForm,
  type PostPaymentComplianceFormState,
} from '@/lib/post-payment-form-types';
import type { PostPaymentFormPaymentDetails } from '@/lib/post-payment-form-pdf';

const COURSE_OPTIONS = [
  'NSW Responsible Service of Alcohol (RSA)',
  'NSW Food Safety Supervisor (First Time)',
  'NSW Food Safety Supervisor (Recertification)',
] as const;

interface BookingDetails {
  customerName: string;
  customerEmail: string;
  courseName: string;
  selectedDate: string;
}

function formatCourseDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-');
  if (!year || !month || !day) return isoDate;
  return `${day}/${month}/${year}`;
}

function validateBookingDetails(details: BookingDetails): string | null {
  if (!details.customerName.trim()) {
    return 'Please enter your name.';
  }
  if (!details.customerEmail.trim()) {
    return 'Please enter your email.';
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(details.customerEmail)) {
    return 'Please enter a valid email address.';
  }
  if (!details.courseName.trim()) {
    return 'Please select or enter your course.';
  }
  if (!details.selectedDate.trim()) {
    return 'Please enter your course date.';
  }
  return null;
}

export default function BookingFormPage() {
  const params = useParams();
  const locale = Array.isArray(params.locale)
    ? params.locale[0]
    : (params.locale as string | undefined) || 'en';
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    customerName: '',
    customerEmail: '',
    courseName: '',
    selectedDate: '',
  });
  const [complianceForm, setComplianceForm] =
    useState<PostPaymentComplianceFormState>(
      INITIAL_POST_PAYMENT_COMPLIANCE_FORM,
    );
  const [formError, setFormError] = useState<string | null>(null);
  const [submittingForm, setSubmittingForm] = useState(false);
  const [previewingPdf, setPreviewingPdf] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const buildPaymentDetails = (): PostPaymentFormPaymentDetails => ({
    courseName: bookingDetails.courseName,
    selectedDate: formatCourseDate(bookingDetails.selectedDate),
    customerName: bookingDetails.customerName,
    customerEmail: bookingDetails.customerEmail,
  });

  const buildSubmissionPayload = () => ({
    sessionId: '',
    paymentDetails: buildPaymentDetails(),
    ...complianceForm,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const bookingError = validateBookingDetails(bookingDetails);
    if (bookingError) {
      setFormError(bookingError);
      return;
    }

    const complianceError = validatePostPaymentComplianceForm(complianceForm);
    if (complianceError) {
      setFormError(complianceError);
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
          : 'Failed to submit form.',
      );
    } finally {
      setSubmittingForm(false);
    }
  };

  const handlePreviewPdf = async () => {
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

  return (
    <section className="px-16 md:px-0 mt-180 mb-80">
      <div className="w-full max-w-[960px] mx-auto bg-white p-8 md:p-12">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">
          Third Page of Booking Form
        </h1>
        <p className="text-sm text-gray-700 mb-6">
          If you have already paid for your short course but did not complete
          this form, please enter your booking details below and submit the
          compliance form.
        </p>

        {formSubmitted ? (
          <div className="bg-green-50 border border-green-200 text-green-800 p-12 rounded-md">
            Thank you. Your booking form has been submitted successfully.
          </div>
        ) : (
          <form className="space-y-14" onSubmit={handleSubmit}>
            <div>
              <h2 className="text-lg font-semibold mb-10">Booking Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block text-sm font-semibold mb-4">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    value={bookingDetails.customerName}
                    onChange={(e) =>
                      setBookingDetails((prev) => ({
                        ...prev,
                        customerName: e.target.value,
                      }))
                    }
                    className="w-full border border-gray-300 px-10 py-8 rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-4">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    value={bookingDetails.customerEmail}
                    onChange={(e) =>
                      setBookingDetails((prev) => ({
                        ...prev,
                        customerEmail: e.target.value,
                      }))
                    }
                    className="w-full border border-gray-300 px-10 py-8 rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-4">
                    Course <span className="text-primary">*</span>
                  </label>
                  <select
                    value={bookingDetails.courseName}
                    onChange={(e) =>
                      setBookingDetails((prev) => ({
                        ...prev,
                        courseName: e.target.value,
                      }))
                    }
                    className="w-full border border-gray-300 px-10 py-8 rounded-md text-sm"
                  >
                    <option value="">Select a course</option>
                    {COURSE_OPTIONS.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="courseDate"
                    className="block text-sm font-semibold mb-4"
                  >
                    Course Date <span className="text-primary">*</span>
                  </label>
                  <input
                    id="courseDate"
                    type="date"
                    value={bookingDetails.selectedDate}
                    onChange={(e) =>
                      setBookingDetails((prev) => ({
                        ...prev,
                        selectedDate: e.target.value,
                      }))
                    }
                    className="w-full max-w-sm border border-gray-300 px-10 py-8 rounded-md text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-14 space-y-14">
              <p className="text-sm text-gray-700 mb-14">
                We would like to know more about you as part of regulatory and
                compliance requirements.
              </p>
              <PostPaymentComplianceFormFields
                form={complianceForm}
                onChange={(updater) =>
                  setComplianceForm((prev) => updater(prev))
                }
              />
            </div>

            {formError && <p className="text-red-500 text-sm">{formError}</p>}

            <div className="flex flex-wrap gap-10">
              <button
                type="submit"
                disabled={submittingForm}
                className="bg-primary-bk text-white px-20 py-10 font-semibold text-sm disabled:opacity-70"
              >
                {submittingForm ? 'Submitting...' : 'Submit form'}
              </button>
              <button
                type="button"
                disabled={previewingPdf}
                onClick={handlePreviewPdf}
                className="bg-white border border-primary-bk text-primary-bk px-20 py-10 font-semibold text-sm disabled:opacity-70"
              >
                {previewingPdf ? 'Generating PDF...' : 'Preview PDF'}
              </button>
            </div>
          </form>
        )}

        <div className="mt-16 pt-10 border-t border-gray-200">
          <Link
            href={`/${locale}/custom-programs`}
            className="text-primary underline text-sm"
          >
            Back to short courses
          </Link>
        </div>
      </div>
    </section>
  );
}
