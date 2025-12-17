'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/common/Button';
import CheckEmoji from '@/components/common/CheckEmoji';

interface PaymentDetails {
  courseSlug: string;
  courseName: string;
  selectedDate: string;
  selectedType: string;
  customerEmail: string;
  amountPaid: number;
}

// 코스 이미지 매칭
const imgMatch: { [key: string]: string } = {
  barista: '/short-course/barista_1.jpg',
  cake: '/short-course/classic_french_cakes_2.png',
  wine: '/short-course/wine/wine_1.jpg',
  focaccia: '/short-course/focaccia/sourdough_1.jpg',
  dessert: '/short-course/dessert/fine_dining_dessert_1.jpg',
  pastries: '/short-course/classic_french_pastries_1.png',
  mixology: '/short-course//mixology/cocktail_1.png',
  petit: '/short-course/macaroon_1.png',
  vegan: '/short-course/vegan/vegan_1.png',
  chocolate: '/short-course/chocolate/xmas_1.png',
  fss: '/short-course/fss_1.png',
};

export default function PaymentSuccessPage() {
  const t = useTranslations('paymentSuccess');
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPaymentDetails = async (sessionId: string) => {
      try {
        const response = await fetch(
          `/api/stripe/verify-payment?session_id=${sessionId}`
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

  // 로딩 중일 때는 배너 없이 표시
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
          <Link href="/custom-programs">
            <Button className="bg-primary text-white">
              {t('backToCourses')}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // 코스 배너 이미지 가져오기
  const courseImage = paymentDetails?.courseSlug
    ? imgMatch[paymentDetails.courseSlug]
    : null;

  return (
    <>
      {/* 코스 이미지 */}
      {courseImage && paymentDetails && (
        <div className="relative w-full h-400 overflow-hidden">
          <Image
            src={courseImage}
            alt={paymentDetails.courseName}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold text-center px-4 font-[family-name:var(--font-montserrat)]">
              {paymentDetails.courseName}
            </h1>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center justify-center my-40">
        <CheckEmoji />
        <div className="bg-white p-8 max-w-md mx-auto text-center mt-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-14 font-[family-name:var(--font-montserrat)]">
            {t('title')}
          </h1>

          <p className="text-gray-600 mb-12 font-[family-name:var(--font-montserrat)]">
            {t('subtitle')}
          </p>

          {paymentDetails && (
            <div className="bg-gray-50 p-8 mb-18 text-left">
              <h3 className="font-semibold text-gray-800 mb-12">
                {t('registrationInfo')}
              </h3>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>{t('course')}:</strong> {paymentDetails.courseName}
                </p>
                <p>
                  <strong>{t('date')}:</strong> {paymentDetails.selectedDate}
                </p>
                {paymentDetails.selectedType && (
                  <p>
                    <strong>{t('type')}:</strong> {paymentDetails.selectedType}
                  </p>
                )}
                <p>
                  <strong>{t('email')}:</strong> {paymentDetails.customerEmail}
                </p>
                <p>
                  <strong>{t('amountPaid')}:</strong> $
                  {paymentDetails.amountPaid}
                </p>
              </div>
            </div>
          )}

          <div className="bg-orange-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-orange-800">{t('emailNotification')}</p>
          </div>

          <div className="space-y-3">
            <Link href="/custom-programs">
              <Button className="bg-primary-bk text-white w-full">
                {t('viewOtherCourses')}
              </Button>
            </Link>

            <Link href="/contact">
              <Button className="bg-gray-200 text-gray-800 w-full">
                {t('contactUs')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
