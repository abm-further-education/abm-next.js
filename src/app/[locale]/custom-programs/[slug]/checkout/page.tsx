'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import getShortCourseData from '@/lib/shortCourseData';
import {
  buildCheckoutCourseDisplayName,
  CHECKOUT_COURSE_PRICE_MAP,
  CHECKOUT_COURSE_SELECTION_OPTIONS,
} from '@/lib/checkout-course-selection';
import { evaluateCheckoutPromotion } from '@/lib/checkout-promo-codes';
import { useSearchParams } from 'next/navigation';
import { getStripe } from '@/lib/stripe';
import Image from 'next/image';

const HOW_DID_YOU_FIND_US_OPTIONS = [
  'Website',
  'Google search',
  'Social media',
  'Word of mouth',
  'Walk in',
  'Other',
] as const;

function formatDateOfBirth(isoDate: string): string {
  const [year, month, day] = isoDate.split('-');
  if (!year || !month || !day) return isoDate;
  return `${day}/${month}/${year}`;
}

const STUDENT_HANDBOOK_URL =
  'https://abm-nextjs-images.b83f3e0bd05202c38186975efb748fa7.r2.cloudflarestorage.com/policies/1774230469582-1n0db2ngfzd.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=6a04feab5820fa078460b702f753983b%2F20260512%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260512T094630Z&X-Amz-Expires=3600&X-Amz-Signature=bbd1a905a04e45b19b6c304414b20c5f7d63805f720b00696e89ec7f55cddc25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject';

export default function CheckoutPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const slug = params.slug as string;
  const locale = Array.isArray(params.locale)
    ? params.locale[0]
    : (params.locale as string | undefined) || 'en';
  const courseData = getShortCourseData('en')[slug];

  const selectedDate = searchParams.get('date') || '';

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    howDidYouHear: '',
    otherHowDidYouHear: '',
    promotionCode: '',
    dateOfBirth: '',
    selectedCourses:
      slug === 'rsa'
        ? ['rsa']
        : slug === 'fss'
          ? ['fss-first-time']
          : ([] as string[]),
    acceptedStudentHandbook: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [loading, setLoading] = useState(false);
  const selectedBasePrice = form.selectedCourses.reduce(
    (sum, courseId) => sum + (CHECKOUT_COURSE_PRICE_MAP[courseId] ?? 0),
    0,
  );
  const promoEval = evaluateCheckoutPromotion(
    form.promotionCode,
    slug,
    selectedBasePrice,
  );
  const effectivePrice =
    promoEval.kind === 'applied'
      ? promoEval.discountedPrice
      : selectedBasePrice;
  const totalPriceWithSurcharge = effectivePrice * 1.0193;

  const getFieldError = (fieldName: string, nextForm = form): string => {
    if (fieldName === 'firstName' && !nextForm.firstName.trim()) {
      return 'First name is required.';
    }
    if (fieldName === 'lastName' && !nextForm.lastName.trim()) {
      return 'Last name is required.';
    }
    if (fieldName === 'mobileNumber' && !nextForm.mobileNumber.trim()) {
      return 'Mobile number is required.';
    }
    if (fieldName === 'email') {
      if (!nextForm.email.trim()) return 'Email is required.';
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(nextForm.email)) {
        return 'Please enter a valid email.';
      }
    }
    if (fieldName === 'dateOfBirth' && !nextForm.dateOfBirth.trim()) {
      return 'Date of birth is required.';
    }
    if (
      fieldName === 'otherHowDidYouHear' &&
      nextForm.howDidYouHear === 'Other' &&
      !nextForm.otherHowDidYouHear.trim()
    ) {
      return 'Please enter the other source.';
    }
    if (
      fieldName === 'selectedCourses' &&
      nextForm.selectedCourses.length === 0
    ) {
      return 'Select at least one course.';
    }
    if (
      fieldName === 'acceptedStudentHandbook' &&
      !nextForm.acceptedStudentHandbook
    ) {
      return 'You must accept the Student Handbook.';
    }
    if (fieldName === 'promotionCode' && nextForm.promotionCode.trim()) {
      const selectionBase = nextForm.selectedCourses.reduce(
        (sum, courseId) => sum + (CHECKOUT_COURSE_PRICE_MAP[courseId] ?? 0),
        0,
      );
      const pe = evaluateCheckoutPromotion(
        nextForm.promotionCode,
        slug,
        selectionBase,
      );
      if (pe.kind === 'invalid') return 'Invalid promotion code.';
      if (pe.kind === 'wrong_course') return pe.message;
    }
    return '';
  };

  const validateAll = () => {
    const keys = [
      'firstName',
      'lastName',
      'mobileNumber',
      'email',
      'dateOfBirth',
      'otherHowDidYouHear',
      'promotionCode',
      'selectedCourses',
      'acceptedStudentHandbook',
    ];
    const newErrors: { [key: string]: string } = {};
    keys.forEach((key) => {
      const error = getFieldError(key);
      if (error) newErrors[key] = error;
    });
    return newErrors;
  };

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const fieldValue =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    const nextForm = {
      ...form,
      [name]: fieldValue,
      ...(name === 'howDidYouHear' && value !== 'Other'
        ? { otherHowDidYouHear: '' }
        : {}),
    };
    setForm(nextForm);
    if (name === 'howDidYouHear' && value !== 'Other') {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.otherHowDidYouHear;
        return next;
      });
    }
    if (name === 'promotionCode' && !String(fieldValue).trim()) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.promotionCode;
        return next;
      });
    }
  };

  const handleFieldBlur = (fieldName: string) => {
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
    const error = getFieldError(fieldName);
    setErrors((prev) => {
      const next = { ...prev };
      if (error) next[fieldName] = error;
      else delete next[fieldName];
      return next;
    });
  };

  const handleCourseSelectionChange = (courseId: string) => {
    const nextForm = {
      ...form,
      selectedCourses: form.selectedCourses.includes(courseId)
        ? form.selectedCourses.filter((item) => item !== courseId)
        : [...form.selectedCourses, courseId],
    };
    setForm(nextForm);
    if (touched.selectedCourses || submitAttempted) {
      const error = getFieldError('selectedCourses', nextForm);
      setErrors((prev) => {
        const next = { ...prev };
        if (error) next.selectedCourses = error;
        else delete next.selectedCourses;
        return next;
      });
    }
    if (
      (touched.promotionCode || submitAttempted) &&
      nextForm.promotionCode.trim()
    ) {
      const promoError = getFieldError('promotionCode', nextForm);
      setErrors((prev) => {
        const next = { ...prev };
        if (promoError) next.promotionCode = promoError;
        else delete next.promotionCode;
        return next;
      });
    }
  };

  const handleHandbookChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const nextForm = {
      ...form,
      acceptedStudentHandbook: checked,
    };
    setForm(nextForm);
    if (touched.acceptedStudentHandbook || submitAttempted) {
      const error = getFieldError('acceptedStudentHandbook', nextForm);
      setErrors((prevErrors) => {
        const next = { ...prevErrors };
        if (error) next.acceptedStudentHandbook = error;
        else delete next.acceptedStudentHandbook;
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    const newErrors = validateAll();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setLoading(true);
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.firstName,
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.mobileNumber,
          preferredDate: selectedDate,
          otherInquiries:
            `DOB: ${formatDateOfBirth(form.dateOfBirth)}` +
            `\nCourse Selection: ${form.selectedCourses.join(', ')}` +
            `\nStudent Handbook Accepted: Yes`,
          howDidYouHear: form.howDidYouHear,
          referrerName:
            form.howDidYouHear === 'Other' ? form.otherHowDidYouHear : '',
          promotionCode: form.promotionCode,
          courseName: buildCheckoutCourseDisplayName(
            form.selectedCourses,
            courseData?.title,
          ),
          courseSlug: slug,
          locale,
          selectedCourses: form.selectedCourses,
          selectedDate,
          courseLocation: courseData?.location,
          finalPrice: effectivePrice,
          totalPriceWithSurcharge: totalPriceWithSurcharge.toFixed(2),
        }),
      });
      const { sessionId, error } = await res.json();
      if (error) {
        setErrors({ submit: error });
        setLoading(false);
        return;
      }
      if (sessionId) {
        const stripe = await getStripe();
        if (stripe) {
          const result = await stripe.redirectToCheckout({
            sessionId,
          });
          if (result.error) {
            setErrors({
              submit: result.error.message || 'Payment error occurred.',
            });
          }
        } else {
          setErrors({
            submit: 'Stripe could not be loaded. Please try again.',
          });
        }
      }
    } catch {
      setErrors({ submit: 'Payment error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-16 md:px-0 mt-180 mb-80">
      <div className="w-full max-w-[980px] mx-auto border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="bg-primary text-white px-16 py-10 text-xl font-semibold">
          Course Booking Form
        </div>
        <div className="p-16 md:p-20">
          {courseData?.images?.[0] && (
            <Image
              src={courseData.images[0]}
              alt={courseData?.title || slug}
              className="mb-12 w-full h-auto object-cover rounded-md"
              style={{ maxHeight: 180 }}
              width={600}
              height={220}
            />
          )}
          <h3 className="text-lg md:text-xl font-bold mb-10">
            {courseData?.title || slug}
          </h3>
          {selectedDate && (
            <div className="mb-6 text-sm">
              <span className="font-semibold">Date: </span>
              <span>{selectedDate}</span>
            </div>
          )}
          <div className="mb-16 text-sm">
            <span className="font-semibold">Payable Amount: </span>
            {promoEval.kind === 'applied' ? (
              <span>
                <span className="line-through text-gray-400 mr-8">
                  ${selectedBasePrice.toFixed(2)}
                </span>
                <span className="font-semibold text-primary">
                  ${effectivePrice.toFixed(2)}
                </span>
                <span className="ml-6 text-xs text-green-700">
                  ({promoEval.label})
                </span>
              </span>
            ) : (
              <span>${selectedBasePrice.toFixed(2)}</span>
            )}
          </div>

          <form className="space-y-14" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label className="block text-sm font-semibold mb-4">
                  First Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleFieldChange}
                  onBlur={() => handleFieldBlur('firstName')}
                  className="w-full border border-gray-300 px-10 py-8 rounded-md text-sm"
                />
                {(touched.firstName || submitAttempted) && errors.firstName && (
                  <p className="text-red-500 text-xs mt-4">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-4">
                  Last Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleFieldChange}
                  onBlur={() => handleFieldBlur('lastName')}
                  className="w-full border border-gray-300 px-10 py-8 rounded-md text-sm"
                />
                {(touched.lastName || submitAttempted) && errors.lastName && (
                  <p className="text-red-500 text-xs mt-4">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label className="block text-sm font-semibold mb-4">
                  Mobile Number <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="mobileNumber"
                  value={form.mobileNumber}
                  onChange={handleFieldChange}
                  onBlur={() => handleFieldBlur('mobileNumber')}
                  className="w-full border border-gray-300 px-10 py-8 rounded-md text-sm"
                />
                {(touched.mobileNumber || submitAttempted) &&
                  errors.mobileNumber && (
                    <p className="text-red-500 text-xs mt-4">
                      {errors.mobileNumber}
                    </p>
                  )}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-4">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleFieldChange}
                  onBlur={() => handleFieldBlur('email')}
                  className="w-full border border-gray-300 px-10 py-8 rounded-md text-sm"
                />
                {(touched.email || submitAttempted) && errors.email && (
                  <p className="text-red-500 text-xs mt-4">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-semibold mb-4"
              >
                Date of Birth <span className="text-primary">*</span>
              </label>
              <input
                id="dateOfBirth"
                type="date"
                name="dateOfBirth"
                value={form.dateOfBirth}
                onChange={handleFieldChange}
                onBlur={() => handleFieldBlur('dateOfBirth')}
                max={new Date().toISOString().split('T')[0]}
                className="w-full max-w-sm border border-gray-300 px-10 py-8 rounded-md text-sm"
              />
              {(touched.dateOfBirth || submitAttempted) &&
                errors.dateOfBirth && (
                  <p className="text-red-500 text-xs mt-4">
                    {errors.dateOfBirth}
                  </p>
                )}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-4">
                PROMOTION CODE
              </label>
              <input
                type="text"
                name="promotionCode"
                value={form.promotionCode}
                onChange={handleFieldChange}
                onBlur={() => handleFieldBlur('promotionCode')}
                className="w-full border border-gray-300 px-10 py-8 rounded-md text-sm"
                placeholder="Enter code if you have one"
              />
              {(touched.promotionCode || submitAttempted) &&
                errors.promotionCode && (
                  <p className="text-red-500 text-xs mt-4">
                    {errors.promotionCode}
                  </p>
                )}
              {promoEval.kind === 'applied' && (
                <p className="text-green-700 text-xs mt-4">
                  {promoEval.label} applied.
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-4">
                How did you find us?
              </label>
              <select
                name="howDidYouHear"
                value={form.howDidYouHear}
                onChange={handleFieldChange}
                onBlur={() => handleFieldBlur('howDidYouHear')}
                className="w-full border border-gray-300 px-10 py-8 rounded-md text-sm"
              >
                <option value="">Select an option</option>
                {HOW_DID_YOU_FIND_US_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {form.howDidYouHear === 'Other' && (
                <div className="mt-8">
                  <input
                    type="text"
                    name="otherHowDidYouHear"
                    placeholder="Please specify"
                    value={form.otherHowDidYouHear}
                    onChange={handleFieldChange}
                    onBlur={() => handleFieldBlur('otherHowDidYouHear')}
                    className="w-full border border-gray-300 px-10 py-8 rounded-md text-sm"
                  />
                  {(touched.otherHowDidYouHear || submitAttempted) &&
                    errors.otherHowDidYouHear && (
                      <p className="text-red-500 text-xs mt-4">
                        {errors.otherHowDidYouHear}
                      </p>
                    )}
                </div>
              )}
            </div>

            <div>
              <p className="text-sm font-semibold mb-6">
                Course Selection (Select all that apply)
              </p>
              <div className="space-y-6">
                {CHECKOUT_COURSE_SELECTION_OPTIONS.map((courseOption) => (
                  <label
                    key={courseOption.id}
                    className="flex items-center gap-8 text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={form.selectedCourses.includes(courseOption.id)}
                      onChange={() =>
                        handleCourseSelectionChange(courseOption.id)
                      }
                      onBlur={() => handleFieldBlur('selectedCourses')}
                    />
                    <span>{courseOption.label}</span>
                  </label>
                ))}
              </div>
              {(touched.selectedCourses || submitAttempted) &&
                errors.selectedCourses && (
                  <p className="text-red-500 text-xs mt-4">
                    {errors.selectedCourses}
                  </p>
                )}
            </div>

            <div>
              <label className="flex items-center gap-8 text-sm">
                <input
                  type="checkbox"
                  name="acceptedStudentHandbook"
                  checked={form.acceptedStudentHandbook}
                  onChange={handleHandbookChange}
                  onBlur={() => handleFieldBlur('acceptedStudentHandbook')}
                />
                <span>
                  I accept that I have read and understand the{' '}
                  <a
                    href={STUDENT_HANDBOOK_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline"
                  >
                    STUDENT HANDBOOK
                  </a>
                </span>
              </label>
              {(touched.acceptedStudentHandbook || submitAttempted) &&
                errors.acceptedStudentHandbook && (
                  <p className="text-red-500 text-xs mt-4">
                    {errors.acceptedStudentHandbook}
                  </p>
                )}
            </div>

            {errors.submit && (
              <p className="text-red-500 text-xs">{errors.submit}</p>
            )}

            <div className="pt-6">
              <p className="text-sm text-gray-600">Payable Amount</p>
              {promoEval.kind === 'applied' ? (
                <div className="mt-4">
                  <p className="text-lg text-gray-500 line-through">
                    ${selectedBasePrice.toFixed(2)}
                  </p>
                  <p className="text-3xl md:text-2xl font-bold text-primary">
                    ${effectivePrice.toFixed(2)}
                  </p>
                  <p className="text-xs text-green-700 mt-2">
                    {promoEval.label}
                  </p>
                </div>
              ) : (
                <p className="text-3xl md:text-2xl font-bold text-primary">
                  ${selectedBasePrice.toFixed(2)}
                </p>
              )}
            </div>

            <button
              className="bg-primary hover:bg-primary-bk text-white px-20 py-10 font-semibold text-sm disabled:opacity-70"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Booking...' : 'Book now'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
