'use client';

import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { X, MapPin, Clock } from 'lucide-react';
import { toast } from 'react-toastify';
import Button from '@/components/common/Button';
import FadeIn from '@/components/common/FadeIn';

export default function CartPage() {
  const { items, removeItem, updateItem, getTotalPrice, clearCart } = useCart();
  const t = useTranslations('cart');
  const router = useRouter();
  const [promotionCode, setPromotionCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<{
    code: string;
    discount: number;
  } | null>(null);
  const [isApplyingPromo, setIsApplyingPromo] = useState(false);

  // 사용 가능한 날짜가 있는 코스들만 필터링
  const availableItems = items.filter((item) => {
    if (!item.courseData?.dates) return false;

    const hasAvailableDates = item.courseData.dates.some((date: any) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const dateObj = new Date(date.date);
      dateObj.setHours(0, 0, 0, 0);
      const isFutureDate = dateObj >= today;
      const isAvailable = date.available !== false;
      return isFutureDate && isAvailable;
    });

    return hasAvailableDates;
  });

  // 사용 가능한 날짜가 없는 코스들 (unavailable)
  const unavailableItems = items.filter((item) => {
    if (!item.courseData?.dates) return true;

    const hasAvailableDates = item.courseData.dates.some((date: any) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const dateObj = new Date(date.date);
      dateObj.setHours(0, 0, 0, 0);
      const isFutureDate = dateObj >= today;
      const isAvailable = date.available !== false;
      return isFutureDate && isAvailable;
    });

    return !hasAvailableDates;
  });

  // 프로모션 코드 적용 함수
  const applyPromotionCode = async () => {
    if (!promotionCode.trim()) {
      toast.error('Please enter a promotion code');
      return;
    }

    setIsApplyingPromo(true);
    try {
      // 프로모션 코드 검증 API 호출
      const response = await fetch('/api/promotion/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: promotionCode }),
      });

      const data = await response.json();

      if (data.valid) {
        setAppliedPromo({ code: promotionCode, discount: data.discount });
        toast.success(`Promotion code "${promotionCode}" applied!`);
      } else {
        toast.error('Invalid promotion code');
      }
    } catch (error) {
      toast.error('Failed to apply promotion code');
    } finally {
      setIsApplyingPromo(false);
    }
  };

  // 사용 가능한 아이템들의 총액 계산
  const getAvailableItemsTotal = () => {
    return availableItems.reduce((total, item) => total + item.price, 0);
  };

  // 할인 적용된 총액 계산 (사용 가능한 아이템들만)
  const getDiscountedTotal = () => {
    const total = getAvailableItemsTotal();
    if (appliedPromo) {
      return Math.max(0, total - appliedPromo.discount);
    }
    return total;
  };

  // 결제 진행
  const proceedToCheckout = () => {
    if (availableItems.length === 0) {
      toast.error('No available courses in your cart');
      return;
    }

    // 사용 가능한 코스들에 대해 날짜 선택 확인
    const itemsWithoutDate = availableItems.filter(
      (item) => !item.selectedDate
    );
    if (itemsWithoutDate.length > 0) {
      const courseNames = itemsWithoutDate.map((item) => item.title).join(', ');
      toast.error(`Please select dates for: ${courseNames}`);
      return;
    }

    // 선택된 날짜들이 유효한지 확인
    const invalidItems = [];
    for (const item of availableItems) {
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
      toast.error(`Invalid dates selected for: ${invalidItems.join(', ')}`);
      return;
    }

    // 장바구니 데이터를 세션 스토리지에 저장 (사용 가능한 아이템들만)
    sessionStorage.setItem(
      'cart-checkout',
      JSON.stringify({
        items: availableItems,
        totalAmount: getAvailableItemsTotal(),
        discountAmount: appliedPromo?.discount || 0,
        finalAmount: getDiscountedTotal(),
        appliedPromo: appliedPromo?.code,
      })
    );

    router.push('/cart/checkout');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 mt-120 py-20">
        <div className="max-w-4xl mx-auto px-20">
          <FadeIn>
            <div className="text-center py-40">
              <h1 className="text-3xl font-bold text-gray-900 mb-20">
                Your Cart is Empty
              </h1>
              <p className="text-gray-600 mb-30">
                Add some courses to get started!
              </p>
              <Button
                onClick={() => router.push('/short-courses')}
                className="bg-primary text-black px-30 py-15"
              >
                Browse Courses
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    );
  }

  if (availableItems.length === 0 && unavailableItems.length > 0) {
    return (
      <div className="min-h-screen bg-gray-50 mt-120 py-20">
        <div className="max-w-4xl mx-auto px-20">
          <FadeIn>
            <div className="text-center py-40">
              <h1 className="text-3xl font-bold text-gray-900 mb-20">
                No Available Courses
              </h1>
              <p className="text-gray-600 mb-30">
                All courses in your cart are currently unavailable.
              </p>
              <Button
                onClick={() => router.push('/short-courses')}
                className="bg-primary text-black px-30 py-15"
              >
                Browse Available Courses
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-130 bg-gray-50 py-20">
      <div className="max-w-[1600px] mx-auto px-20">
        <FadeIn>
          <div className="mb-30">
            <h1 className="text-3xl font-bold text-gray-900 mb-10">
              Shopping Cart
            </h1>
            <p className="text-gray-600">
              {availableItems.length} available course
              {availableItems.length !== 1 ? 's' : ''} in your cart
              {unavailableItems.length > 0 && (
                <span className="text-red-600 ml-10">
                  ({unavailableItems.length} unavailable)
                </span>
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-30">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-20">
              {/* Available Items */}
              {availableItems.map((item) => (
                <div key={item.slug} className="bg-white shadow-sm border p-20">
                  <div className="flex gap-20">
                    <div className="relative w-120 h-120 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-10">
                        {item.title}
                      </h3>

                      <div className="space-y-5 text-sm text-gray-600">
                        {item.courseData?.location && (
                          <div className="flex items-center gap-5">
                            <MapPin size={16} />
                            <span>{item.courseData.location}</span>
                          </div>
                        )}

                        {item.courseData?.time && (
                          <div className="flex items-center gap-5">
                            <Clock size={16} />
                            <span>{item.courseData.time}</span>
                          </div>
                        )}
                      </div>

                      <div className="mt-15">
                        <label className="block text-sm font-medium text-gray-700 mb-5">
                          Preferred Date
                        </label>
                        <select
                          value={item.selectedDate || ''}
                          onChange={(e) =>
                            updateItem(item.slug, {
                              selectedDate: e.target.value,
                            })
                          }
                          className={`w-full px-10 py-8 border text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
                            !item.selectedDate
                              ? 'border-red-500 bg-red-50'
                              : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select a date</option>
                          {item.courseData?.dates
                            ?.filter((date: any) => {
                              const today = new Date();
                              today.setHours(0, 0, 0, 0);
                              const dateObj = new Date(date.date);
                              dateObj.setHours(0, 0, 0, 0);
                              const isFutureDate = dateObj >= today;
                              const isAvailable = date.available !== false;
                              return isFutureDate && isAvailable;
                            })
                            ?.map((date: any) => (
                              <option key={date.date} value={date.date}>
                                {date.displayDate} • {date.time}
                              </option>
                            ))}
                        </select>
                        {!item.selectedDate && (
                          <p className="text-red-500 text-xs mt-5">
                            Please select a date for this course
                          </p>
                        )}
                      </div>

                      {item.courseData?.courseType && (
                        <div className="mt-15">
                          <label className="block text-sm font-medium text-gray-700 mb-5">
                            Course Type
                          </label>
                          <select
                            value={item.selectedType || ''}
                            onChange={(e) =>
                              updateItem(item.slug, {
                                selectedType: e.target.value,
                              })
                            }
                            className="w-full px-10 py-8 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                          >
                            <option value="">Select a type</option>
                            {item.courseData.courseType.options.map(
                              (option: string) => (
                                <option
                                  key={option}
                                  value={option.toLowerCase()}
                                >
                                  {option}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeItem(item.slug)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X size={20} />
                      </button>

                      <div className="text-right">
                        <div className="text-lg font-semibold text-gray-900">
                          ${item.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Unavailable Items */}
              {unavailableItems.length > 0 && (
                <div className="mt-30">
                  <h3 className="text-lg font-semibold text-red-600 mb-15">
                    Unavailable Courses
                  </h3>
                  <p className="text-sm text-gray-600 mb-20">
                    These courses have no available dates and will not be
                    included in your order.
                  </p>
                  {unavailableItems.map((item) => (
                    <div
                      key={item.slug}
                      className="bg-gray-100 shadow-sm border border-red-200 p-20 mb-15 opacity-60"
                    >
                      <div className="flex gap-20">
                        <div className="relative w-120 h-120 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover grayscale"
                          />
                        </div>

                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-700 mb-10">
                            {item.title}
                          </h4>
                          <div className="flex items-center gap-10 text-sm text-red-600 mb-10">
                            <span className="font-medium">
                              No available dates
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col items-end justify-between">
                          <button
                            onClick={() => removeItem(item.slug)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <X size={20} />
                          </button>

                          <div className="text-right">
                            <div className="text-lg font-semibold text-gray-500 line-through">
                              ${item.price}
                            </div>
                            <div className="text-sm text-red-600">
                              Unavailable
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white shadow-sm border p-20 sticky top-20">
                <h2 className="text-xl font-semibold text-gray-900 mb-20">
                  Order Summary
                </h2>

                <div className="space-y-15 mb-20">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal ({availableItems.length} items)</span>
                    <span>${getAvailableItemsTotal().toFixed(2)}</span>
                  </div>

                  {appliedPromo && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Discount ({appliedPromo.code})</span>
                      <span>-${appliedPromo.discount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="border-t pt-15">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>${getDiscountedTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Promotion Code */}
                <div className="mb-20">
                  <label className="block text-sm font-medium text-gray-700 mb-5">
                    Promotion Code
                  </label>
                  <div className="flex gap-10">
                    <input
                      type="text"
                      value={promotionCode}
                      onChange={(e) => setPromotionCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 px-10 py-8 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                    <Button
                      onClick={applyPromotionCode}
                      disabled={isApplyingPromo || !promotionCode.trim()}
                      className="bg-gray-200 text-gray-800 px-15 py-8 text-sm"
                    >
                      {isApplyingPromo ? 'Applying...' : 'Apply'}
                    </Button>
                  </div>
                </div>

                <Button
                  onClick={proceedToCheckout}
                  disabled={availableItems.some((item) => !item.selectedDate)}
                  className={`w-full py-15 font-semibold ${
                    availableItems.some((item) => !item.selectedDate)
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-primary text-black'
                  }`}
                >
                  Proceed to Checkout
                </Button>

                <button
                  onClick={clearCart}
                  className="w-full mt-10 text-sm text-gray-500 hover:text-red-500 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
