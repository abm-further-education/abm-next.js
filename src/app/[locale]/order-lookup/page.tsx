'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Button from '@/components/common/Button';
import FadeIn from '@/components/common/FadeIn';
import {
  Search,
  Calendar,
  MapPin,
  Clock,
  User,
  Mail,
  Phone,
} from 'lucide-react';

interface OrderDetails {
  order_number: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  total_amount: number;
  discount_amount: number;
  final_amount: number;
  applied_promo: string;
  payment_status: string;
  items: any[];
  created_at: string;
  preferred_date: string;
  other_inquiries: string;
  how_did_you_hear: string;
  referrer_name: string;
}

export default function OrderLookupPage() {
  const t = useTranslations('orderLookup');
  const searchParams = useSearchParams();
  const [orderNumber, setOrderNumber] = useState(
    searchParams.get('order') || ''
  );
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // URL 파라미터로 주문번호가 있으면 자동으로 검색
  useEffect(() => {
    if (orderNumber && orderNumber.trim()) {
      handleSearch(new Event('submit') as any);
    }
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderNumber.trim()) {
      toast.error('Please enter an order number');
      return;
    }

    setLoading(true);
    setError('');
    setOrderDetails(null);

    try {
      const response = await fetch('/api/order/lookup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderNumber: orderNumber.trim() }),
      });

      const data = await response.json();

      if (data.success) {
        setOrderDetails(data.order);
        toast.success('Order found!');
      } else {
        setError(data.error || 'Order not found');
        toast.error(data.error || 'Order not found');
      }
    } catch (error) {
      setError('Failed to search for order');
      toast.error('Failed to search for order');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen mt-180 bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-20">
        <FadeIn>
          <div className="mb-30">
            <h1 className="text-3xl font-bold text-gray-900 mb-10">
              Order Lookup
            </h1>
            <p className="text-gray-600">
              Enter your order number to view your booking details
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-lg shadow-sm border p-20 mb-30">
            <form onSubmit={handleSearch} className="flex gap-15">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-5">
                  Order Number
                </label>
                <input
                  type="text"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="Enter your order number (e.g., 20241201-143022-ABC1)"
                  className="w-full px-15 py-10 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="flex items-end">
                <Button
                  type="submit"
                  disabled={loading || !orderNumber.trim()}
                  className="bg-primary text-black px-20 py-10 flex items-center gap-10"
                >
                  <Search size={16} />
                  {loading ? 'Searching...' : 'Search'}
                </Button>
              </div>
            </form>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-15 mb-30">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Order Details */}
          {orderDetails && (
            <div className="space-y-20">
              {/* Order Summary */}
              <div className="bg-white rounded-lg shadow-sm border p-20">
                <h2 className="text-xl font-semibold text-gray-900 mb-20">
                  Order Summary
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                  <div className="space-y-10">
                    <div className="flex items-center gap-10">
                      <span className="font-medium text-gray-700">
                        Order Number:
                      </span>
                      <span className="text-gray-900 font-mono">
                        {orderDetails.order_number}
                      </span>
                    </div>
                    <div className="flex items-center gap-10">
                      <span className="font-medium text-gray-700">
                        Order Date:
                      </span>
                      <span className="text-gray-900">
                        {formatDate(orderDetails.created_at)}
                      </span>
                    </div>
                    <div className="flex items-center gap-10">
                      <span className="font-medium text-gray-700">
                        Payment Status:
                      </span>
                      <span
                        className={`px-10 py-5 rounded-full text-xs font-medium ${
                          orderDetails.payment_status === 'paid'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {orderDetails.payment_status.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-10">
                    <div className="flex items-center gap-10">
                      <span className="font-medium text-gray-700">
                        Total Amount:
                      </span>
                      <span className="text-gray-900">
                        ${orderDetails.total_amount.toFixed(2)}
                      </span>
                    </div>
                    {orderDetails.discount_amount > 0 && (
                      <div className="flex items-center gap-10">
                        <span className="font-medium text-gray-700">
                          Discount:
                        </span>
                        <span className="text-green-600">
                          -${orderDetails.discount_amount.toFixed(2)}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-10">
                      <span className="font-medium text-gray-700">
                        Final Amount:
                      </span>
                      <span className="text-gray-900 font-semibold">
                        ${orderDetails.final_amount.toFixed(2)}
                      </span>
                    </div>
                    {orderDetails.applied_promo && (
                      <div className="flex items-center gap-10">
                        <span className="font-medium text-gray-700">
                          Promo Code:
                        </span>
                        <span className="text-gray-900">
                          {orderDetails.applied_promo}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Customer Information */}
              <div className="bg-white rounded-lg shadow-sm border p-20">
                <h2 className="text-xl font-semibold text-gray-900 mb-20">
                  Customer Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                  <div className="space-y-15">
                    <div className="flex items-center gap-10">
                      <User size={16} className="text-gray-500" />
                      <span className="font-medium text-gray-700">Name:</span>
                      <span className="text-gray-900">
                        {orderDetails.first_name} {orderDetails.last_name}
                      </span>
                    </div>
                    <div className="flex items-center gap-10">
                      <Mail size={16} className="text-gray-500" />
                      <span className="font-medium text-gray-700">Email:</span>
                      <span className="text-gray-900">
                        {orderDetails.email}
                      </span>
                    </div>
                    <div className="flex items-center gap-10">
                      <Phone size={16} className="text-gray-500" />
                      <span className="font-medium text-gray-700">Phone:</span>
                      <span className="text-gray-900">
                        {orderDetails.phone}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-15">
                    {orderDetails.preferred_date && (
                      <div className="flex items-center gap-10">
                        <Calendar size={16} className="text-gray-500" />
                        <span className="font-medium text-gray-700">
                          Preferred Date:
                        </span>
                        <span className="text-gray-900">
                          {orderDetails.preferred_date}
                        </span>
                      </div>
                    )}
                    {orderDetails.how_did_you_hear && (
                      <div className="flex items-center gap-10">
                        <span className="font-medium text-gray-700">
                          How did you hear about us:
                        </span>
                        <span className="text-gray-900">
                          {orderDetails.how_did_you_hear}
                        </span>
                      </div>
                    )}
                    {orderDetails.referrer_name && (
                      <div className="flex items-center gap-10">
                        <span className="font-medium text-gray-700">
                          Referrer:
                        </span>
                        <span className="text-gray-900">
                          {orderDetails.referrer_name}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {orderDetails.other_inquiries && (
                  <div className="mt-20">
                    <span className="font-medium text-gray-700">
                      Other Inquiries:
                    </span>
                    <p className="text-gray-900 mt-5">
                      {orderDetails.other_inquiries}
                    </p>
                  </div>
                )}
              </div>

              {/* Course Details */}
              <div className="bg-white rounded-lg shadow-sm border p-20">
                <h2 className="text-xl font-semibold text-gray-900 mb-20">
                  Course Details
                </h2>

                <div className="space-y-20">
                  {orderDetails.items.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-15"
                    >
                      <div className="flex gap-15">
                        <div className="relative w-80 h-80 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-10">
                            {item.title}
                          </h3>

                          <div className="space-y-5 text-sm text-gray-600">
                            <div className="flex items-center gap-5">
                              <span className="font-medium">Price:</span>
                              <span>${item.price}</span>
                            </div>

                            {item.selectedDate && (
                              <div className="flex items-center gap-5">
                                <Calendar size={14} />
                                <span>Selected Date: {item.selectedDate}</span>
                              </div>
                            )}

                            {item.selectedType && (
                              <div className="flex items-center gap-5">
                                <span className="font-medium">
                                  Course Type:
                                </span>
                                <span>{item.selectedType}</span>
                              </div>
                            )}

                            {item.courseData?.location && (
                              <div className="flex items-center gap-5">
                                <MapPin size={14} />
                                <span>{item.courseData.location}</span>
                              </div>
                            )}

                            {item.courseData?.time && (
                              <div className="flex items-center gap-5">
                                <Clock size={14} />
                                <span>{item.courseData.time}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-20">
                <h3 className="text-lg font-semibold text-blue-900 mb-10">
                  Need Help?
                </h3>
                <p className="text-blue-800 mb-15">
                  If you have any questions about your order or need to make
                  changes, please contact us:
                </p>
                <div className="space-y-5 text-blue-800">
                  <p>
                    <strong>Email:</strong> info@abm.edu.au
                  </p>
                  <p>
                    <strong>Phone:</strong> +61 2 9283 0888
                  </p>
                </div>
              </div>
            </div>
          )}
        </FadeIn>
      </div>
    </div>
  );
}
