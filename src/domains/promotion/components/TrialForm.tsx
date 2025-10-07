'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';
import { ko } from 'date-fns/locale';

interface FormData {
  type: string;
  date: string;
  name: string;
  email: string;
  phone: string;
  howDidYouFindUs: string;
  goal: string;
}

const TrialForm: React.FC = () => {
  const t = useTranslations('promotion');
  const router = useRouter();

  // 현재 locale 감지
  const currentLocale =
    typeof window !== 'undefined'
      ? window.location.pathname.split('/')[1] || 'en'
      : 'en';

  // 한국어 locale 등록
  registerLocale('ko', ko);
  const [formData, setFormData] = useState<FormData>({
    type: '',
    date: '',
    name: '',
    email: '',
    phone: '',
    howDidYouFindUs: '',
    goal: '',
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  // 피트니스 트라이얼용: 월, 화, 수만 선택 가능한 날짜 생성 (오늘 제외)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    const currentDate = new Date(today);

    // 다음 4주 동안의 월, 화, 수 날짜 생성 (오늘부터 1일 후부터 시작)
    for (let i = 1; i < 29; i++) {
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

  // 캠퍼스 투어용: 최소 날짜와 최대 날짜 계산 (토, 일 제외)
  const getDatePickerConstraints = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 60); // 2개월 후까지

    return {
      min: tomorrow.toISOString().split('T')[0],
      max: maxDate.toISOString().split('T')[0],
    };
  };

  // 선택된 날짜가 주말인지 확인
  const isWeekend = (dateString: string) => {
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6; // 일요일(0) 또는 토요일(6)
  };

  // react-datepicker용 주말 필터링 함수
  const isWeekendDate = (date: Date) => {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6; // 일요일(0) 또는 토요일(6)
  };

  // react-datepicker용 날짜 변경 핸들러
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      setFormData((prev) => ({
        ...prev,
        date: date.toISOString().split('T')[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        date: '',
      }));
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    // 타입이 변경되면 날짜 필드 초기화
    if (name === 'type') {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        date: '', // 타입 변경 시 날짜 초기화
      }));
      setSelectedDate(null); // react-datepicker 상태도 초기화
      return;
    }

    // 캠퍼스 투어에서 날짜 선택 시 주말 체크
    if (
      name === 'date' &&
      formData.type === 'campus-tour' &&
      value &&
      isWeekend(value)
    ) {
      // 주말 선택 시 경고 표시하고 값 설정하지 않음
      alert('주말은 선택할 수 없습니다. 평일을 선택해주세요.');
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 캠퍼스 투어에서 주말 선택 시 추가 검증
    if (
      formData.type === 'campus-tour' &&
      formData.date &&
      isWeekend(formData.date)
    ) {
      alert('주말은 선택할 수 없습니다. 평일을 선택해주세요.');
      setIsSubmitting(false);
      return;
    }

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
        // Thank you 페이지로 리다이렉트 (폼 데이터를 URL 파라미터로 전달)
        const searchParams = new URLSearchParams({
          type: formData.type,
          date: formData.date,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          howDidYouFindUs: formData.howDidYouFindUs,
          goal: formData.goal,
        });

        router.push(`/promotion/thank-you?${searchParams.toString()}`);
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
    formData.type &&
    formData.date &&
    formData.name &&
    formData.email &&
    formData.phone;

  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold text-center mb-30">{t('formTitle')}</h3>

      {submitStatus === 'error' && (
        <div className="mb-20 p-20 bg-red-100 border border-red-400 text-red-700 rounded-10">
          {t('formError')}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-25">
        {/* Type Selection */}
        <div>
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700 mb-10"
          >
            {t('typeLabel')} *
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            required
            className="w-full px-15 py-12 border border-gray-300 rounded-10 focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">{t('selectType')}</option>
            <option value="campus-tour">{t('campusTour')}</option>
            <option value="one-day-trial">{t('oneDayTrial')}</option>
          </select>
        </div>

        {/* Date Selection */}
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700 mb-10"
          >
            {t('dateLabel')} *
          </label>

          {formData.type === 'campus-tour' ? (
            // Campus Tour: React DatePicker (주말 제외)
            <div>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                filterDate={(date) => !isWeekendDate(date)}
                minDate={new Date(getDatePickerConstraints().min)}
                maxDate={new Date(getDatePickerConstraints().max)}
                dateFormat="yyyy-MM-dd"
                placeholderText={t('selectDate')}
                className="w-full px-15 py-12 border border-gray-300 rounded-10 focus:ring-2 focus:ring-primary focus:border-transparent"
                wrapperClassName="w-full"
                locale={currentLocale === 'kr' ? 'ko' : 'en'}
                showPopperArrow={false}
                popperPlacement="bottom-start"
                required
              />
              <p className="text-xs text-gray-500 mt-5">{t('weekdaysOnly')}</p>
            </div>
          ) : (
            // Fitness Trial: Dropdown (월, 화, 수만)
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
          )}
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
