'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const t = useTranslations('promotion');

  return (
    <div className="space-y-30">
      <h3 className="text-2xl md:text-3xl font-bold text-primary">
        {t('trialTitle')}
      </h3>

      {/* Fitness Section */}
      <div className="space-y-20">
        <h4 className="text-xl font-semibold text-gray-800">
          {t('fitnessCategory')}
        </h4>
        <div className="space-y-20">
          <div className="flex items-center space-x-15">
            <div className="w-30 h-30 bg-primary rounded-full mt-5 flex items-center justify-center">
              <Check size={20} className="text-white" />
            </div>
            <p className="text-neutral-700">{t('benefit1')}</p>
          </div>
          <div className="flex items-center space-x-15">
            <div className="w-30 h-30 bg-primary rounded-full mt-5 flex items-center justify-center">
              <Check size={20} className="text-white" />
            </div>
            <p className="text-neutral-700">{t('benefit2')}</p>
          </div>
          <div className="flex items-center space-x-15">
            <div className="w-30 h-30 bg-primary rounded-full mt-5 flex items-center justify-center">
              <Check size={20} className="text-white" />
            </div>
            <p className="text-neutral-700">{t('benefit3')}</p>
          </div>
        </div>
      </div>

      {/* HSA Section */}
      <div className="space-y-20">
        <h4 className="text-xl font-semibold text-gray-800">
          {t('hsaCategory')}
        </h4>
        <div className="space-y-20">
          <div className="flex items-center space-x-15">
            <div className="w-30 h-30 bg-primary rounded-full mt-5 flex items-center justify-center">
              <Check size={20} className="text-white" />
            </div>
            <p className="text-neutral-700">{t('hsaBenefit1')}</p>
          </div>
          <div className="flex items-center space-x-15">
            <div className="w-30 h-30 bg-primary rounded-full mt-5 flex items-center justify-center">
              <Check size={20} className="text-white" />
            </div>
            <p className="text-neutral-700">{t('hsaBenefit2')}</p>
          </div>
          <div className="flex items-center space-x-15">
            <div className="w-30 h-30 bg-primary rounded-full mt-5 flex items-center justify-center">
              <Check size={20} className="text-white" />
            </div>
            <p className="text-neutral-700">{t('hsaBenefit3')}</p>
          </div>
          <div className="flex items-center space-x-15">
            <div className="w-30 h-30 bg-primary rounded-full mt-5 flex items-center justify-center">
              <Check size={20} className="text-white" />
            </div>
            <p className="text-neutral-700">{t('hsaBenefit4')}</p>
          </div>
        </div>
      </div>

      {/* What to Expect Section */}
      <div className="bg-gray-50 p-30 rounded-20">
        <h4 className="text-xl font-bold mb-20">{t('whatToExpect')}</h4>
        
        {/* Fitness Expectations */}
        <div className="mb-20">
          <h5 className="text-lg font-semibold text-gray-800 mb-15">
            {t('fitnessCategory')}
          </h5>
          <ul className="space-y-15 text-neutral-700">
            <li>• {t('expectation1')}</li>
            <li>• {t('expectation3')}</li>
            <li>• {t('expectation4')}</li>
          </ul>
        </div>

        {/* HSA Expectations */}
        <div>
          <h5 className="text-lg font-semibold text-gray-800 mb-15">
            {t('hsaCategory')}
          </h5>
          <ul className="space-y-15 text-neutral-700">
            <li>• {t('hsaExpectation1')}</li>
            <li>• {t('hsaExpectation2')}</li>
            <li>• {t('hsaExpectation3')}</li>
            <li>• {t('hsaExpectation4')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
