'use client';

import Button from '@/components/common/Button';
import { cn } from '@/lib/utils';
import { Mail, MapPin, Phone, Smartphone } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { shortCourseMenu } from '@/lib/constants';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';

type ContactFormData = {
  first_name: string;
  last_name: string;
  nationality: string;
  enquiry_type: string;
  email: string;
  phone: string;
  message: string;
  selected_course?: string;
  other_course?: string;
  preferred_date?: string;
};

function Contact() {
  const t = useTranslations('contact');
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>();
  const [loading, setLoading] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  // 현재 locale 감지
  const currentLocale =
    typeof window !== 'undefined'
      ? window.location.pathname.split('/')[1] || 'en'
      : 'en';

  // 한국어 locale 등록
  registerLocale('ko', ko);

  const enquiryType = watch('enquiry_type');
  const selectedCourse = watch('selected_course');
  const isBookCampusTour = enquiryType === t('bookCampusTour');

  // enquiry_type이 변경되면 selectedDate 초기화
  React.useEffect(() => {
    if (!isBookCampusTour) {
      setSelectedDate(null);
      setValue('preferred_date', '');
    }
  }, [enquiryType, isBookCampusTour, setValue]);

  // 캠퍼스 투어용: 최소 날짜와 최대 날짜 계산
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

  // react-datepicker용 주말 필터링 함수
  const isWeekendDate = (date: Date) => {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6; // 일요일(0) 또는 토요일(6)
  };

  // react-datepicker용 날짜 필터링 함수 (주말, 12월 전체, 1월 4일까지 제외)
  const filterDate = (date: Date) => {
    // 주말 제외
    if (isWeekendDate(date)) {
      return false;
    }

    const month = date.getMonth(); // 0-based (0=1월, 11=12월)
    const day = date.getDate();

    // 12월 전체 제외
    if (month === 11) {
      return false;
    }

    // 1월 4일까지 제외
    if (month === 0 && day <= 4) {
      return false;
    }

    return true;
  };

  // react-datepicker용 날짜 변경 핸들러
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      setValue('preferred_date', date.toISOString().split('T')[0]);
    } else {
      setValue('preferred_date', '');
    }
  };

  // Short course 리스트 생성
  const shortCourseList = React.useMemo(() => {
    const courses: { slug: string; title: string }[] = [];
    shortCourseMenu.forEach((menu) => {
      if (menu.items) {
        menu.items.forEach((item) => {
          // href에서 slug 추출
          let slug = '';
          if (item.href.startsWith('/custom-programs/')) {
            slug = item.href.replace('/custom-programs/', '');
          } else if (item.href.includes('/fss')) {
            slug = 'fss';
          }

          // 유효한 slug인지 확인 (카테고리 페이지 제외)
          if (
            slug &&
            slug !== 'hospitality' &&
            slug !== 'cooking-baking' &&
            !slug.startsWith('http')
          ) {
            courses.push({ slug, title: item.title });
          }
        });
      }
    });
    return courses;
  }, []);

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        alert(t('successMessage') || 'Your enquiry has been sent. Thank you!');
        reset();
        setSelectedDate(null);
      } else {
        alert(t('errorMessage') || 'Failed to send. Please try again later.');
      }
    } catch {
      alert(t('errorMessage') || 'Failed to send. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const options = [
    t('generalEnquiry'),
    t('bookCampusTour'),
    t('becomeStudent'),
    t('becomeAgent'),
    'Private Group Booking for Custom Program',
  ];

  const isPrivateGroupBooking =
    enquiryType === 'Private Group Booking for Custom Program';

  return (
    <section className={cn('px-16 md:px-0 my-60 md:my-120')}>
      <div className="flex flex-col md:flex-row justify-between w-full max-w-[1000px] mx-auto">
        <div className="">
          <h2 className="text-3xl md:text-4xl font-bold pb-50 font-[family-name:var(--font-montserrat)]">
            {t('getInTouch')}
          </h2>
          <Link
            href="https://maps.app.goo.gl/X4hmXLeTjz6RQQn88"
            className="flex items-center gap-10"
            target="_blank"
          >
            <MapPin className="text-primary" />
            {t('address')}
          </Link>
          <div className="flex items-center gap-10 my-20">
            <Phone className="text-primary" />
            {t('phone')}
          </div>

          <div className="flex items-center gap-10 my-20">
            <Smartphone className="text-primary" />
            {t('whatsapp')}
          </div>
          <Link
            className="flex items-center gap-10"
            href="mailto:info@abm.edu.au"
            target="_blank"
          >
            <Mail className="text-primary" />
            {t('email')}
          </Link>
        </div>

        <form
          className="flex flex-col w-full max-w-500 gap-15 mt-60 text-primary-bk font-[family-name:var(--font-montserrat)] md:mt-0"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="enquiry_type" className="text-black">
            {t('enquiryType')}
          </label>
          <select
            {...register('enquiry_type')}
            id="select-packages"
            className="w-full h-40 bg-white border border-neutral-600 text-black text-sm focus:ring-secondary focus:border-secondary p-2.5"
          >
            <option value="">{t('selectEnquiryType')}</option>
            {options.map((option, index) => (
              <option
                key={index}
                value={option}
                className="bg-white text-black"
              >
                {option}
              </option>
            ))}
          </select>
          <div className="flex flex-col gap-10">
            <div className="flex items-start gap-10 justify-between">
              <div className="w-full">
                <input
                  type="text"
                  placeholder={`${t('firstName')} *`}
                  {...register('first_name', {
                    required: t('validation.firstNameRequired'),
                    minLength: {
                      value: 2,
                      message: t('validation.firstNameMinLength'),
                    },
                  })}
                  className={cn(
                    'border placeholder:text-black placeholder:text-sm p-6 w-full',
                    errors.first_name ? 'border-red-500' : 'border-neutral-600'
                  )}
                />
                {errors.first_name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.first_name.message}
                  </p>
                )}
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder={`${t('lastName')} *`}
                  {...register('last_name', {
                    required: t('validation.lastNameRequired'),
                    minLength: {
                      value: 2,
                      message: t('validation.lastNameMinLength'),
                    },
                  })}
                  className={cn(
                    'border placeholder:text-black placeholder:text-sm p-6 w-full',
                    errors.last_name ? 'border-red-500' : 'border-neutral-600'
                  )}
                />
                {errors.last_name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.last_name.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <input
            type="text"
            placeholder={t('phonePlaceholder')}
            {...register('phone')}
            className="border border-neutral-600 placeholder:text-black placeholder:text-sm p-6"
          />
          <div className="w-full">
            <input
              type="email"
              placeholder={`${t('emailPlaceholder')} *`}
              {...register('email', {
                required: t('validation.emailRequired'),
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t('validation.emailInvalid'),
                },
              })}
              className={cn(
                'border placeholder:text-black placeholder:text-sm p-6 w-full',
                errors.email ? 'border-red-500' : 'border-neutral-600'
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <input
            type="text"
            placeholder={t('nationality')}
            {...register('nationality')}
            className="border border-neutral-600 placeholder:text-black placeholder:text-sm p-6"
          />

          {/* Book a Campus Tour 선택 시 표시되는 날짜 선택 필드 */}
          {isBookCampusTour && (
            <div className="flex flex-col gap-10">
              <label htmlFor="preferred_date" className="text-black">
                {t('preferredDate') || 'Preferred Date'} *
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                filterDate={filterDate}
                minDate={new Date(getDatePickerConstraints().min)}
                maxDate={new Date(getDatePickerConstraints().max)}
                dateFormat="yyyy-MM-dd"
                placeholderText={t('selectDate') || 'Select a date'}
                className="w-full h-40 bg-white border border-neutral-600 text-black text-sm focus:ring-secondary focus:border-secondary p-2.5"
                wrapperClassName="w-full"
                locale={currentLocale === 'kr' ? 'ko' : 'en'}
                showPopperArrow={false}
                popperPlacement="bottom-start"
                required
              />
              <p className="text-xs text-gray-500">
                {t('weekdaysOnly') || 'Weekdays only (Monday to Friday)'}
              </p>
            </div>
          )}

          {/* Private Group Booking 선택 시 표시되는 필드 */}
          {isPrivateGroupBooking && (
            <div className="flex flex-col gap-10">
              <label htmlFor="selected_course" className="text-black">
                Select Short Course
              </label>
              <select
                {...register('selected_course')}
                id="selected_course"
                className="w-full h-40 bg-white border border-neutral-600 text-black text-sm focus:ring-secondary focus:border-secondary p-2.5"
              >
                <option value="">Select a course</option>
                {shortCourseList.map((course) => (
                  <option
                    key={course.slug}
                    value={course.slug}
                    className="bg-white text-black"
                  >
                    {course.title}
                  </option>
                ))}
                <option value="others" className="bg-white text-black">
                  Others
                </option>
              </select>

              {selectedCourse === 'others' && (
                <input
                  type="text"
                  placeholder="Please specify the course"
                  {...register('other_course')}
                  className="border border-neutral-600 placeholder:text-black placeholder:text-sm p-6"
                />
              )}

              <label htmlFor="preferred_date" className="text-black">
                Preferred Date
              </label>
              <input
                type="date"
                {...register('preferred_date')}
                id="preferred_date"
                min={new Date().toISOString().split('T')[0]}
                className="w-full h-40 bg-white border border-neutral-600 text-black text-sm focus:ring-secondary focus:border-secondary p-2.5"
              />
            </div>
          )}

          <textarea
            placeholder={t('message')}
            {...register('message')}
            className="border border-neutral-600 placeholder:text-black placeholder:text-sm p-6"
          />
          <Button
            className="mt-16 bg-black text-white"
            type="submit"
            disabled={loading}
          >
            {loading ? t('sending') || 'Sending...' : t('sendMessage')}
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
