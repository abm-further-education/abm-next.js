'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { CheckCircle, Calendar, User, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

interface ThankYouPageProps {
  formData?: {
    date: string;
    name: string;
    email: string;
    phone: string;
    howDidYouFindUs: string;
    goal: string;
  };
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ formData }) => {
  const t = useTranslations('promotion');

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-50 mt-100">
      <div className="max-w-600 mx-auto px-20">
        {/* Success Icon and Title */}
        <div className="text-center mb-40">
          <div className="w-100 h-100 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-30">
            <CheckCircle size={60} className="text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-20">
            {t('thankYouTitle')}
          </h1>
          <p className="text-lg text-gray-600">{t('thankYouSubtitle')}</p>
        </div>

        {/* Booking Details Card */}
        {formData && (
          <div className="bg-white rounded-20 shadow-lg p-40 mb-40">
            <h2 className="text-2xl font-bold text-gray-900 mb-30">
              {t('bookingDetails')}
            </h2>

            <div className="space-y-25">
              <div className="flex items-center space-x-20">
                <Calendar size={24} className="text-primary" />
                <div>
                  <p className="font-medium text-gray-900">{t('dateLabel')}</p>
                  <p className="text-gray-600">{formatDate(formData.date)}</p>
                </div>
              </div>

              <div className="flex items-center space-x-20">
                <User size={24} className="text-primary" />
                <div>
                  <p className="font-medium text-gray-900">{t('nameLabel')}</p>
                  <p className="text-gray-600">{formData.name}</p>
                </div>
              </div>

              <div className="flex items-center space-x-20">
                <Mail size={24} className="text-primary" />
                <div>
                  <p className="font-medium text-gray-900">{t('emailLabel')}</p>
                  <p className="text-gray-600">{formData.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-20">
                <Phone size={24} className="text-primary" />
                <div>
                  <p className="font-medium text-gray-900">{t('phoneLabel')}</p>
                  <p className="text-gray-600">{formData.phone}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Next Steps */}
        <div className="bg-white rounded-20 shadow-lg p-40 mb-40">
          <h2 className="text-2xl font-bold text-gray-900 mb-30">
            {t('nextStepsTitle')}
          </h2>

          <div className="space-y-20">
            <div className="flex items-start space-x-20">
              <div className="w-30 h-30 bg-primary rounded-full mt-5 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  {t('nextStep1Title')}
                </p>
                <p className="text-gray-600">{t('nextStep1Description')}</p>
              </div>
            </div>

            <div className="flex items-start space-x-20">
              <div className="w-30 h-30 bg-primary rounded-full mt-5 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  {t('nextStep2Title')}
                </p>
                <p className="text-gray-600">{t('nextStep2Description')}</p>
              </div>
            </div>

            <div className="flex items-start space-x-20">
              <div className="w-30 h-30 bg-primary rounded-full mt-5 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  {t('nextStep3Title')}
                </p>
                <p className="text-gray-600">{t('nextStep3Description')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-primary rounded-20 p-40 mb-40">
          <h2 className="text-2xl font-bold text-white mb-20">
            {t('contactInfoTitle')}
          </h2>
          <p className="text-white mb-30">{t('contactInfoDescription')}</p>

          <div className="space-y-15">
            <div className="flex items-center space-x-15">
              <Phone size={20} className="text-white" />
              <span className="text-white">+61 (02) 9160 4507</span>
            </div>
            <div className="flex items-center space-x-15">
              <Mail size={20} className="text-white" />
              <span className="text-white">info@abm.edu.au</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-20">
          <Link
            href="/"
            className="flex-1 bg-primary text-white py-15 px-30 rounded-10 font-medium text-center hover:bg-primary-bk transition-colors"
          >
            {t('backToHome')}
          </Link>
          <Link
            href="/courses"
            className="flex-1 bg-white text-primary border-2 border-primary py-15 px-30 rounded-10 font-medium text-center hover:bg-primary hover:text-white transition-colors"
          >
            {t('exploreCourses')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
