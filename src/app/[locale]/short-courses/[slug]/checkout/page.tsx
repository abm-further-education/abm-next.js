'use client';

import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Button from '@/components/common/Button';
import { shortCourseData } from '@/lib/shortCourseData';
import { useSearchParams } from 'next/navigation';
import { getStripe } from '@/lib/stripe';

const howDidYouHearOptions = [
  'agent',
  'socialMedia',
  'friend',
  'searchPortal',
  'abmWebsite',
];

export default function CheckoutPage() {
  const t = useTranslations('checkout');
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const slug = params.slug as string;
  const courseData = shortCourseData[slug];

  // 쿼리스트링에서 선택값 가져오기
  const selectedDate = searchParams.get('date') || '';
  const selectedType = searchParams.get('type') || '';

  console.log(selectedDate);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredDate: '',
    otherInquiries: '',
    howDidYouHear: '',
    referrerName: '',
    promotionCode: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.firstName.trim()) newErrors.firstName = t('enterFirstName');
    if (!form.email.trim()) newErrors.email = t('enterEmail');
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      newErrors.email = t('invalidEmail');
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setLoading(true);
    try {
      // Stripe 결제 세션 생성 (이름, 이메일, 프로모션 코드, 코스명, 슬러그만 전달)
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.firstName,
          email: form.email,
          promotionCode: form.promotionCode,
          courseName: courseData?.title,
          courseSlug: slug,
          selectedDate,
        }),
      });
      const { sessionId, error } = await res.json();
      if (error) {
        setErrors({ submit: error });
        setLoading(false);
        return;
      }
      if (sessionId) {
        // Stripe 정식 리다이렉트 방법 사용
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

  // 폼 초기값에 쿼리스트링 값 반영
  React.useEffect(() => {
    setForm((prev) => ({
      ...prev,
      preferredDate: selectedDate,
      // 타입 필드는 별도 처리 필요시 추가
    }));
  }, [selectedDate]);

  return (
    <section className="px-16 md:px-0 my-60 md:my-120">
      <div className="w-full max-w-[1000px] mx-auto flex flex-col md:flex-row gap-40">
        {/* 좌측: 코스 정보 */}
        <div className="flex-1 border border-neutral-200 p-24 bg-neutral-50">
          <h3 className="text-xl font-bold mb-10">
            {courseData?.title || slug}
          </h3>
          {selectedType && (
            <div className="mb-6">
              <span className="font-semibold">Type: </span>
              <span>{selectedType}</span>
            </div>
          )}
          {selectedDate && (
            <div className="mb-6">
              <span className="font-semibold">Date: </span>
              <span>{selectedDate}</span>
            </div>
          )}
          <div className="mb-6">
            <span className="font-semibold">Price: </span>
            <span>${courseData?.price}</span>
          </div>
          {courseData?.location && (
            <div className="mb-6">
              <span className="font-semibold">Location: </span>
              <span>{courseData.location}</span>
            </div>
          )}
        </div>
        {/* 우측: 폼 */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold pb-30 font-[family-name:var(--font-montserrat)]">
            {t('title')}
          </h2>
          <form
            className="flex flex-col gap-15 text-primary-bk font-[family-name:var(--font-montserrat)]"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="firstName"
              placeholder={t('firstName') + ' *'}
              value={form.firstName}
              onChange={handleChange}
              className="border border-neutral-600 placeholder:text-black placeholder:text-sm p-6"
              style={{ borderRadius: 0 }}
            />
            {errors.firstName && (
              <span className="text-red-500 text-xs">{errors.firstName}</span>
            )}

            <input
              type="text"
              name="lastName"
              placeholder={t('lastName')}
              value={form.lastName}
              onChange={handleChange}
              className="border border-neutral-600 placeholder:text-black placeholder:text-sm p-6"
              style={{ borderRadius: 0 }}
            />

            <input
              type="email"
              name="email"
              placeholder={t('email') + ' *'}
              value={form.email}
              onChange={handleChange}
              className="border border-neutral-600 placeholder:text-black placeholder:text-sm p-6"
              style={{ borderRadius: 0 }}
            />
            {errors.email && (
              <span className="text-red-500 text-xs">{errors.email}</span>
            )}

            <input
              type="text"
              name="phone"
              placeholder={t('phone')}
              value={form.phone}
              onChange={handleChange}
              className="border border-neutral-600 placeholder:text-black placeholder:text-sm p-6"
              style={{ borderRadius: 0 }}
            />

            <input
              type="text"
              name="preferredDate"
              placeholder={t('preferredDate')}
              value={form.preferredDate}
              onChange={handleChange}
              className="border border-neutral-600 placeholder:text-black placeholder:text-sm p-6"
              style={{ borderRadius: 0 }}
            />

            <textarea
              name="otherInquiries"
              placeholder={t('otherInquiries')}
              value={form.otherInquiries}
              onChange={handleChange}
              className="border border-neutral-600 placeholder:text-black placeholder:text-sm p-6"
              style={{ borderRadius: 0 }}
            />

            <label htmlFor="howDidYouHear" className="text-black">
              {t('howDidYouHear')}
            </label>
            <select
              name="howDidYouHear"
              value={form.howDidYouHear}
              onChange={handleChange}
              className="border border-neutral-600 text-primary text-sm p-6"
              style={{ borderRadius: 0 }}
            >
              <option value="">-</option>
              {howDidYouHearOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-darkBg">
                  {t(opt)}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="referrerName"
              placeholder={t('referrerName')}
              value={form.referrerName}
              onChange={handleChange}
              className="border border-neutral-600 placeholder:text-black placeholder:text-sm p-6"
              style={{ borderRadius: 0 }}
            />

            <input
              type="text"
              name="promotionCode"
              placeholder={t('promotionCode')}
              value={form.promotionCode}
              onChange={handleChange}
              className="border border-neutral-600 placeholder:text-black placeholder:text-sm p-6"
              style={{ borderRadius: 0 }}
            />

            {errors.submit && (
              <span className="text-red-500 text-xs">{errors.submit}</span>
            )}

            <Button
              className="mt-16 bg-black text-white rounded-none"
              type="submit"
              disabled={loading}
            >
              {loading ? t('submit') + '...' : t('submit')}
            </Button>
            <Button
              className="mt-4 border border-black text-black bg-white rounded-none"
              type="button"
              onClick={() => router.back()}
            >
              {t('back')}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
