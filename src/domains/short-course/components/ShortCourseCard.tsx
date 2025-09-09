'use client';
import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowRight, ShoppingCart, Check, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'react-toastify';

function ShortCourseCard({
  imgPath,
  title,
  link,
  price,
  slug,
  courseData,
}: {
  imgPath: string;
  title: string;
  link?: string;
  price?: number;
  slug?: string;
  courseData?: any;
}) {
  const router = useRouter();
  const { addItem, items } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Check if this course is already in cart
  const isInCart = items.some((item) => item.slug === slug);

  // Check if this course has available dates
  const hasAvailableDates =
    courseData?.dates?.some((date: any) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const dateObj = new Date(date.date);
      dateObj.setHours(0, 0, 0, 0);
      const isFutureDate = dateObj >= today;
      const isAvailable = date.available !== false;
      return isFutureDate && isAvailable;
    }) || false;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!slug || !courseData) return;

    setIsAdding(true);
    try {
      addItem({
        slug,
        title,
        price: price || courseData.price,
        image: imgPath,
        courseData,
      });
      toast.success(`${title} added to cart!`);
    } catch (error) {
      toast.error('Failed to add to cart');
    } finally {
      setIsAdding(false);
    }
  };

  const handleCardClick = () => {
    if (link) {
      router.push(link);
    }
  };

  const handleUnavailableClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ name: '', email: '', phone: '' });
  };

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isModalOpen]);

  // Handle backdrop click to close modal
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitInterest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    try {
      // API call to save interest
      const response = await fetch('/api/course-interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseTitle: title,
          courseSlug: slug,
          ...formData,
        }),
      });

      if (response.ok) {
        toast.success(
          'Thank you for your interest! We will notify you when this course becomes available.'
        );
        handleCloseModal();
      } else {
        toast.error('Failed to submit interest. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to submit interest. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div
        className={cn(
          'h-300 relative group cursor-pointer overflow-hidden w-300'
        )}
        onClick={handleCardClick}
      >
        <Image
          src={imgPath}
          alt="banner_image"
          fill
          className="md:object-center object-cover group-hover:scale-105 transition-all"
        />
        <div className="absolute bottom-0 left-0 w-full text-xl p-20 font-[family-name:var(--font-montserrat)] text-white font-bold bg-black/70">
          <div className="flex items-center justify-between">
            {title}
            <div className="group-hover:bg-primary rounded-full p-10 transition-all text-primary group-hover:text-black">
              <ArrowRight />
            </div>
          </div>
          <div className="flex items-center justify-between mt-10">
            <div className="text-primary">${price}</div>
            {slug && courseData && (
              <>
                {hasAvailableDates ? (
                  <button
                    onClick={handleAddToCart}
                    disabled={isAdding || isInCart}
                    className={cn(
                      'flex items-center gap-5 px-10 py-5 rounded-full text-sm font-medium transition-all',
                      isInCart
                        ? 'bg-green-600 text-white'
                        : 'bg-primary text-black hover:bg-orange-400'
                    )}
                  >
                    {isInCart ? (
                      <>
                        <Check size={16} />
                        Added
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={16} />
                        {isAdding ? 'Adding...' : 'Add to Cart'}
                      </>
                    )}
                  </button>
                ) : (
                  <button
                    onClick={handleUnavailableClick}
                    className="flex items-center gap-5 px-10 py-5 rounded-full text-sm font-medium transition-all bg-gray-600 text-white hover:bg-gray-700"
                  >
                    <X size={16} />
                    Unavailable
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      {/* Interest Registration Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50 p-20"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-lg max-w-md w-full p-30">
            <div className="flex justify-between items-center mb-20">
              <h3 className="text-xl font-semibold text-gray-900">
                Course Interest Registration
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mb-20">
              <p className="text-gray-600 mb-10">
                Are you interested in this course?
              </p>
              <p className="text-sm text-gray-500">
                We will notify you when <strong>{title}</strong> becomes
                available.
              </p>
            </div>

            <form onSubmit={handleSubmitInterest} className="space-y-15">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-5">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-10 py-8 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-5">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-10 py-8 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-5">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-10 py-8 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="flex gap-10 pt-10">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-20 py-10 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-20 py-10 bg-primary text-black rounded-md text-sm font-medium hover:bg-orange-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Interest'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ShortCourseCard;
