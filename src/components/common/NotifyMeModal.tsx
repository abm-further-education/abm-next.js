'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { X, Mail, BookOpen, Bell } from 'lucide-react';

interface NotifyMeModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
  slug: string;
}

const NotifyMeModal: React.FC<NotifyMeModalProps> = ({
  isOpen,
  onClose,
  courseTitle,
  slug,
}) => {
  const [email, setEmail] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(slug);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const courseOptions = [
    { value: 'barista', label: 'Barista Course' },
    { value: 'cake', label: 'Classic French Cake Course' },
    { value: 'wine', label: 'Wine Course' },
    { value: 'focaccia', label: 'Sourdough and Focaccia Course' },
    { value: 'dessert', label: 'Fine Dining Dessert Plating Course' },
    { value: 'pastries', label: 'Classic French Pastries Course' },
    { value: 'mixology', label: 'Cocktail-Making and Mixology Course' },
    { value: 'petit', label: 'French petit four Course (Macaroon)' },
    { value: 'vegan', label: 'Vegan and Vegetarian Course' },
    { value: 'chocolate', label: 'Chocolate Class – Xmas' },
    { value: 'fss', label: 'NSW Food Safety Supervisor Certificate (FSS)' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    if (!selectedCourse) {
      toast.error('Please select a course');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/notify-me', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          course: selectedCourse,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit request');
      }

      toast.success(
        "Thank you! We'll notify you when new dates are available."
      );
      setEmail('');
      setSelectedCourse(slug);
      onClose();
    } catch (error) {
      console.error('Error submitting notify me request:', error);
      toast.error(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setEmail('');
      setSelectedCourse(slug);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white max-w-md w-full p-26 relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          disabled={isSubmitting}
          className="absolute top-12 right-12 text-gray-400 hover:text-gray-600 disabled:opacity-50 p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Modal content */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Bell size={20} className="text-orange-600" />
            <h2 className="text-xl font-bold">Get Notified</h2>
          </div>
          <p className="text-gray-600 text-sm">
            We'll let you know when new dates become available for this course.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-16">
          {/* Email input */}
          <div>
            <label
              htmlFor="notify-email"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="notify-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-6 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your email"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Course selection */}
          <div>
            <label
              htmlFor="notify-course"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"
            >
              Course
            </label>
            <select
              id="notify-course"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="w-full px-3 py-6 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              required
              disabled={isSubmitting}
            >
              {courseOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Submit button */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              disabled={isSubmitting}
              className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-6 bg-primary text-white hover:bg-primary-bk transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                'Submitting...'
              ) : (
                <>
                  <Bell size={16} />
                  Notify Me
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NotifyMeModal;
