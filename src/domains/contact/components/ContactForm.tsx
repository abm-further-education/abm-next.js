'use client';

import Button from '@/components/common/Button';
import { cn } from '@/lib/utils';
import { Mail, MapPin, Phone, Smartphone } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslations } from 'next-intl';

type ContactFormData = {
  first_name: string;
  last_name: string;
  nationality: string;
  enquiry_type: string;
  email: string;
  phone: string;
  message: string;
};

function Contact() {
  const t = useTranslations('contact');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();
  const [loading, setLoading] = React.useState(false);

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
      } else {
        alert(t('errorMessage') || 'Failed to send. Please try again later.');
      }
    } catch {
      alert(t('errorMessage') || 'Failed to send. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const options = [t('bookCampusTour'), t('becomeStudent'), t('becomeAgent')];

  return (
    <section className={cn('px-16 md:px-0 my-60 md:my-120')}>
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1000px] mx-auto">
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
