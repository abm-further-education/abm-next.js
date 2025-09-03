'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

interface FormData {
  date: string;
  name: string;
  email: string;
  phone: string;
  howDidYouFindUs: string;
  goal: string;
}

const TrialForm: React.FC = () => {
  const t = useTranslations('promotion');
  const [formData, setFormData] = useState<FormData>({
    date: '',
    name: '',
    email: '',
    phone: '',
    howDidYouFindUs: '',
    goal: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  // 월, 화, 수만 선택 가능한 날짜 생성
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    const currentDate = new Date(today);

    // 다음 4주 동안의 월, 화, 수 날짜 생성
    for (let i = 0; i < 28; i++) {
      currentDate.setDate(today.getDate() + i);
      const dayOfWeek = currentDate.getDay();

      // 월요일(1), 화요일(2), 수요일(3)만 포함
      if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        dates.push({
          value: currentDate.toISOString().split('T')[0],
          label: currentDate.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }),
        });
      }
    }

    return dates;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // API 호출하여 이메일 전송
      const response = await fetch('/api/trial-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // 성공 상태로 설정
        setSubmitStatus('success');

        // 폼 초기화
        setFormData({
          date: '',
          name: '',
          email: '',
          phone: '',
          howDidYouFindUs: '',
          goal: '',
        });

        // 3초 후 상태 초기화
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 3000);
      } else {
        // API 오류 시 에러 상태로 설정
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.date && formData.name && formData.email && formData.phone;

  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold text-center mb-30">{t('formTitle')}</h3>

      {submitStatus === 'success' && (
        <div className="mb-20 p-20 bg-green-100 border border-green-400 text-green-700 rounded-10">
          {t('formSuccess')}
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-20 p-20 bg-red-100 border border-red-400 text-red-700 rounded-10">
          {t('formError')}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-25">
        {/* Date Selection */}
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700 mb-10"
          >
            {t('dateLabel')} *
          </label>
          <select
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
            className="w-full px-15 py-12 border border-gray-300 rounded-10 focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">{t('selectDate')}</option>
            {getAvailableDates().map((date) => (
              <option key={date.value} value={date.value}>
                {date.label}
              </option>
            ))}
          </select>
        </div>

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-10"
          >
            {t('nameLabel')} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-15 py-12 border border-gray-300 rounded-10 focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder={t('namePlaceholder')}
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-10"
          >
            {t('emailLabel')} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-15 py-12 border border-gray-300 rounded-10 focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder={t('emailPlaceholder')}
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-10"
          >
            {t('phoneLabel')} *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-15 py-12 border border-gray-300 rounded-10 focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder={t('phonePlaceholder')}
          />
        </div>

        {/* How did you find us */}
        <div>
          <label
            htmlFor="howDidYouFindUs"
            className="block text-sm font-medium text-gray-700 mb-10"
          >
            {t('howDidYouFindUsLabel')}
          </label>
          <select
            id="howDidYouFindUs"
            name="howDidYouFindUs"
            value={formData.howDidYouFindUs}
            onChange={handleInputChange}
            className="w-full px-15 py-12 border border-gray-300 rounded-10 focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">{t('selectOption')}</option>
            <option value="social-media">{t('socialMedia')}</option>
            <option value="google-search">{t('googleSearch')}</option>
            <option value="friend-recommendation">
              {t('friendRecommendation')}
            </option>
            <option value="advertisement">{t('advertisement')}</option>
            <option value="other">{t('other')}</option>
          </select>
        </div>

        {/* Goal */}
        <div>
          <label
            htmlFor="goal"
            className="block text-sm font-medium text-gray-700 mb-10"
          >
            {t('goalLabel')}
          </label>
          <textarea
            id="goal"
            name="goal"
            value={formData.goal}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-15 py-12 border border-gray-300 rounded-10 focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder={t('goalPlaceholder')}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className={`w-full py-15 px-30 rounded-10 font-medium transition-all duration-200 ${
            isFormValid && !isSubmitting
              ? 'bg-primary text-white hover:bg-primary-bk'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isSubmitting ? t('submitting') : t('submitButton')}
        </button>

        <p className="text-xs text-gray-500 text-center">{t('formNote')}</p>
      </form>
    </div>
  );
};

export default TrialForm;
