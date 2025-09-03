'use client';

import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Button from '@/components/common/Button';
import getShortCourseData from '@/lib/shortCourseData';
import { useSearchParams } from 'next/navigation';
import { getStripe } from '@/lib/stripe';
import Image from 'next/image';

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
  const courseData = getShortCourseData('en')[slug];

  // 쿼리스트링에서 선택값 가져오기
  const selectedDate = searchParams.get('date') || '';
  const selectedType = searchParams.get('type') || '';

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
  const [discount, setDiscount] = useState(0);
  const [discountType, setDiscountType] = useState<'percentage' | 'fixed'>(
    'percentage'
  );
  const [appliedPromo, setAppliedPromo] = useState('');

  // 프로모션 코드 목록 - 퍼센트 할인과 고정 금액 할인 모두 지원
  const promoCodes: {
    [code: string]: {
      discount: number;
      label: string;
      type: 'percentage' | 'fixed';
    };
  } = {
    ASC10: { discount: 0.1, label: '10% OFF', type: 'percentage' },
    ASC20: { discount: 0.2, label: '20% OFF', type: 'percentage' },
    ELSISABM2025AUG: { discount: 1, label: '100% OFF', type: 'percentage' },
    ELICOS15: { discount: 15, label: '$15 OFF', type: 'fixed' },
    ABM3A25: { discount: 10, label: '$10 OFF', type: 'fixed' },
    ABM4A25: { discount: 20, label: '$20 OFF', type: 'fixed' },
    NMABMSS: { discount: 0.2, label: '20% OFF', type: 'percentage' },
  };

  // 프로모션 코드 적용 함수
  const applyPromotion = () => {
    const code = form.promotionCode.trim().toUpperCase();
    if (promoCodes[code]) {
      setDiscount(promoCodes[code].discount);
      setDiscountType(promoCodes[code].type);
      setAppliedPromo(code);
      setErrors((prev) => ({ ...prev, promotionCode: '' }));
    } else if (code === '') {
      setDiscount(0);
      setDiscountType('percentage');
      setAppliedPromo('');
      setErrors((prev) => ({ ...prev, promotionCode: '' }));
    } else {
      setDiscount(0);
      setDiscountType('percentage');
      setAppliedPromo('');
      setErrors((prev) => ({
        ...prev,
        promotionCode: 'Invalid promotion code.',
      }));
    }
  };

  // 프로모션 코드 입력 시 자동 적용
  React.useEffect(() => {
    applyPromotion();
    // eslint-disable-next-line
  }, [form.promotionCode]);

  // 할인 적용된 가격 계산
  const discountedPrice = courseData?.price
    ? discountType === 'percentage'
      ? Math.round(courseData.price * (1 - discount))
      : Math.max(0, courseData.price - discount)
    : undefined;

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
      // Stripe 결제 세션 생성 (이름, 이메일, 프로모션 코드, 코스명, 슬러그, 할인 적용 금액 전달)
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
          finalPrice:
            discount > 0 && discountedPrice !== undefined
              ? discountedPrice
              : courseData?.price,
          totalPriceWithSurcharge: (
            (discount > 0 && discountedPrice !== undefined
              ? discountedPrice
              : courseData?.price) * 1.0193
          ).toFixed(2),
          appliedPromo: discount > 0 ? appliedPromo : undefined,
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
    <section className="px-16 md:px-0 my-180">
      <div className="w-full max-w-[1000px] mx-auto flex flex-col md:flex-row gap-40">
        {/* 좌측: 코스 정보 */}
        <div className="flex-1">
          {courseData?.images?.[0] && (
            <Image
              src={courseData.images[0]}
              alt={courseData?.title || slug}
              className="mb-10 w-full h-auto object-cover rounded"
              style={{ maxHeight: 220 }}
              width={600}
              height={220}
            />
          )}
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
            {discount > 0 && discountedPrice !== undefined ? (
              <>
                <span className="line-through text-gray-400 mr-4">
                  ${courseData.price}
                </span>
                <span className="text-green-600 font-bold">
                  ${discountedPrice}
                </span>
                <span className="ml-2 text-xs text-green-700">
                  ({promoCodes[appliedPromo]?.label})
                </span>
              </>
            ) : (
              <span>${courseData?.price}</span>
            )}
          </div>
          <div className="mb-6">
            <span className="">Surcharge: </span>
            <span className="">
              $
              {(
                (discount > 0 && discountedPrice !== undefined
                  ? discountedPrice
                  : courseData?.price) * 0.0193
              ).toFixed(2)}
            </span>
          </div>
          <div className="mb-6">
            <span className="font-semibold">Total: </span>
            <span className="font-bold text-lg text-primary">
              $
              {(
                (discount > 0 && discountedPrice !== undefined
                  ? discountedPrice
                  : courseData?.price) * 1.0193
              ).toFixed(2)}
            </span>
          </div>
          {errors.promotionCode && (
            <div className="text-red-500 text-xs mb-4">
              {errors.promotionCode}
            </div>
          )}
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
              className="border border-neutral-600 placeholder:text-neutral-600 placeholder:text-sm p-6"
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
              className="border border-neutral-600 placeholder:text-neutral-600 placeholder:text-sm p-6"
              style={{ borderRadius: 0 }}
            />

            <input
              type="email"
              name="email"
              placeholder={t('email') + ' *'}
              value={form.email}
              onChange={handleChange}
              className="border border-neutral-600 placeholder:text-neutral-600 placeholder:text-sm p-6"
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
              className="border border-neutral-600 placeholder:text-neutral-600 placeholder:text-sm p-6"
              style={{ borderRadius: 0 }}
            />

            <input
              type="text"
              name="preferredDate"
              placeholder={t('preferredDate')}
              value={form.preferredDate}
              onChange={handleChange}
              className="border border-neutral-600 placeholder:text-neutral-600 placeholder:text-sm p-6"
              style={{ borderRadius: 0 }}
            />

            <textarea
              name="otherInquiries"
              placeholder={t('otherInquiries')}
              value={form.otherInquiries}
              onChange={handleChange}
              className="border border-neutral-600 placeholder:text-neutral-600 placeholder:text-sm p-6"
              style={{ borderRadius: 0 }}
            />

            <label htmlFor="howDidYouHear" className="text-black">
              {t('howDidYouHear')}
            </label>
            <select
              name="howDidYouHear"
              value={form.howDidYouHear}
              onChange={handleChange}
              className="border border-neutral-600 placeholder:text-neutral-600 placeholder:text-sm p-6"
              style={{ borderRadius: 0 }}
            >
              <option value="" className="text-neutral-600">
                Choose Option
              </option>
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
              className="border border-neutral-600 placeholder:text-neutral-600 placeholder:text-sm p-6"
              style={{ borderRadius: 0 }}
            />

            <input
              type="text"
              name="promotionCode"
              placeholder={t('promotionCode')}
              value={form.promotionCode}
              onChange={handleChange}
              className="border border-neutral-600 placeholder:text-neutral-600 placeholder:text-sm p-6"
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
