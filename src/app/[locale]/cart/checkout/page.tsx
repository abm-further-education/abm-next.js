'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Button from '@/components/common/Button';
import FadeIn from '@/components/common/FadeIn';
import { CartItem } from '@/types/cart';

interface CheckoutData {
  items: CartItem[];
  totalAmount: number;
  discountAmount: number;
  finalAmount: number;
  appliedPromo?: string;
}

export default function CartCheckoutPage() {
  const t = useTranslations('checkout');
  const router = useRouter();
  const [checkoutData, setCheckoutData] = useState<CheckoutData | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredDate: '',
    otherInquiries: '',
    howDidYouHear: '',
    referrerName: '',
  });

  useEffect(() => {
    // 세션 스토리지에서 장바구니 데이터 로드
    const savedData = sessionStorage.getItem('cart-checkout');
    if (savedData) {
      try {
        const data = JSON.parse(savedData);
        setCheckoutData(data);
      } catch (error) {
        console.error('Error loading checkout data:', error);
        router.push('/cart');
      }
    } else {
      router.push('/cart');
    }
  }, [router]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.firstName.trim())
      newErrors.firstName = 'Please enter your first name';
    if (!form.lastName.trim())
      newErrors.lastName = 'Please enter your last name';
    if (!form.email.trim()) newErrors.email = 'Please enter your email';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      newErrors.email = 'Please enter a valid email address';
    if (!form.phone.trim()) newErrors.phone = 'Please enter your phone number';

    // 모든 코스에 대해 날짜 선택 확인
    const itemsWithoutDate =
      checkoutData?.items.filter((item) => !item.selectedDate) || [];
    if (itemsWithoutDate.length > 0) {
      const courseNames = itemsWithoutDate.map((item) => item.title).join(', ');
      newErrors.dateSelection = `Please select dates for: ${courseNames}`;
    }

    // 선택된 날짜들이 유효한지 확인
    const invalidItems = [];
    for (const item of checkoutData?.items || []) {
      if (item.selectedDate) {
        const selectedDateObj = item.courseData?.dates?.find(
          (date: any) => date.date === item.selectedDate
        );

        if (!selectedDateObj) {
          invalidItems.push(item.title);
          continue;
        }

        // 날짜가 오늘보다 이전인지 확인
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const dateObj = new Date(item.selectedDate);
        dateObj.setHours(0, 0, 0, 0);

        if (dateObj < today) {
          invalidItems.push(item.title);
          continue;
        }

        // availability가 false인지 확인
        if (selectedDateObj.available === false) {
          invalidItems.push(item.title);
        }
      }
    }

    if (invalidItems.length > 0) {
      newErrors.dateSelection = `Invalid dates selected for: ${invalidItems.join(
        ', '
      )}`;
    }

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
      // 다중 코스 결제를 위한 Stripe 세션 생성
      const res = await fetch('/api/stripe/cart-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: checkoutData?.items,
          totalAmount: checkoutData?.totalAmount,
          discountAmount: checkoutData?.discountAmount,
          finalAmount: checkoutData?.finalAmount,
          appliedPromo: checkoutData?.appliedPromo,
          customerInfo: {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phone: form.phone,
          },
          additionalInfo: {
            preferredDate: form.preferredDate,
            otherInquiries: form.otherInquiries,
            howDidYouHear: form.howDidYouHear,
            referrerName: form.referrerName,
          },
        }),
      });

      const { sessionId, error } = await res.json();
      if (error) {
        setErrors({ submit: error });
        setLoading(false);
        return;
      }

      if (sessionId) {
        // Stripe Checkout으로 리다이렉트
        const stripe = await import('@stripe/stripe-js').then(
          ({ loadStripe }) =>
            loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
        );

        if (stripe) {
          const { error } = await stripe.redirectToCheckout({ sessionId });
          if (error) {
            setErrors({
              submit: error.message || 'An error occurred during checkout',
            });
          }
        }
      }
    } catch (error) {
      setErrors({ submit: 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  if (!checkoutData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-20 text-gray-600">Loading checkout...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-180 bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-20">
        <FadeIn>
          <div className="mb-30">
            <h1 className="text-3xl font-bold text-gray-900 mb-10">Checkout</h1>
            <p className="text-gray-600">
              Complete your order for {checkoutData.items.length} course
              {checkoutData.items.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-30">
            {/* Order Summary */}
            <div className="lg:order-2">
              <div className="bg-white rounded-lg shadow-sm border p-20 sticky top-20">
                <h2 className="text-xl font-semibold text-gray-900 mb-20">
                  Order Summary
                </h2>

                <div className="space-y-15 mb-20">
                  {checkoutData.items.map((item) => (
                    <div key={item.slug} className="flex gap-15">
                      <div className="relative w-60 h-60 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600">${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-15 space-y-10">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${checkoutData.totalAmount.toFixed(2)}</span>
                  </div>

                  {checkoutData.discountAmount > 0 && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Discount</span>
                      <span>-${checkoutData.discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between font-semibold text-lg border-t pt-10">
                    <span>Total</span>
                    <span>${checkoutData.finalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkout Form */}
            <div className="lg:order-1">
              <form onSubmit={handleSubmit} className="space-y-20">
                <div className="bg-white rounded-lg shadow-sm border p-20">
                  <h2 className="text-xl font-semibold text-gray-900 mb-20">
                    Contact Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        className={`w-full px-10 py-8 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
                          errors.firstName
                            ? 'border-red-500'
                            : 'border-gray-300'
                        }`}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs mt-5">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-5">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        className={`w-full px-10 py-8 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
                          errors.lastName ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs mt-5">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-15">
                    <label className="block text-sm font-medium text-gray-700 mb-5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full px-10 py-8 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-5">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="mt-15">
                    <label className="block text-sm font-medium text-gray-700 mb-5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className={`w-full px-10 py-8 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-5">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border p-20">
                  <h2 className="text-xl font-semibold text-gray-900 mb-20">
                    Additional Information
                  </h2>

                  <div className="space-y-15">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-5">
                        How did you hear about us?
                      </label>
                      <select
                        name="howDidYouHear"
                        value={form.howDidYouHear}
                        onChange={handleChange}
                        className="w-full px-10 py-8 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select an option</option>
                        <option value="google">Google Search</option>
                        <option value="facebook">Facebook</option>
                        <option value="instagram">Instagram</option>
                        <option value="referral">Friend/Family Referral</option>
                        <option value="website">ABM Website</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {form.howDidYouHear === 'referral' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-5">
                          Referrer Name
                        </label>
                        <input
                          type="text"
                          name="referrerName"
                          value={form.referrerName}
                          onChange={handleChange}
                          className="w-full px-10 py-8 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-5">
                        Other Inquiries
                      </label>
                      <textarea
                        name="otherInquiries"
                        value={form.otherInquiries}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-10 py-8 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Any special requests or questions?"
                      />
                    </div>
                  </div>
                </div>

                {(errors.submit || errors.dateSelection) && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-15">
                    {errors.submit && (
                      <p className="text-red-600 text-sm">{errors.submit}</p>
                    )}
                    {errors.dateSelection && (
                      <p className="text-red-600 text-sm">
                        {errors.dateSelection}
                      </p>
                    )}
                  </div>
                )}

                <div className="flex gap-15">
                  <Button
                    type="button"
                    onClick={() => router.back()}
                    className="flex-1 bg-gray-200 text-gray-800 py-15"
                  >
                    Back to Cart
                  </Button>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-primary text-black py-15 font-semibold"
                  >
                    {loading
                      ? 'Processing...'
                      : `Pay $${checkoutData.finalAmount.toFixed(2)}`}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
