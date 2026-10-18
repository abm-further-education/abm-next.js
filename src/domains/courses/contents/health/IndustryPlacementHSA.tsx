import React from 'react';
import { useTranslations } from 'next-intl';
import { CheckCircle, FileText, AlertCircle } from 'lucide-react';
import VaccinationInfo from './VaccinationInfo';

type NamedItem = { name: string; desc: string };

function IndustryPlacementHSA() {
  const t = useTranslations('industryPlacementPage.hsa');
  const immunisations = t.raw('immunisations') as NamedItem[];
  const checks = t.raw('checks') as string[];

  return (
    <div>
      <h2 className="text-xl font-bold mb-8">{t('heading')}</h2>
      <p className="text-sm text-gray-700 mb-20">{t('intro')}</p>

      <div className="space-y-12 mb-30">
        <div className="flex items-start gap-12">
          <FileText className="w-20 h-20 text-primary mt-1 shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900">
              {t('immunisationTitle')}
            </p>
            <p className="text-sm text-gray-600">{t('immunisationNote')}</p>
            <div className="mt-8 space-y-6 text-sm text-gray-700">
              {immunisations.map((item) => (
                <p key={item.name}>
                  <span className="font-semibold text-gray-900">
                    {item.name}
                  </span>{' '}
                  {item.desc}
                </p>
              ))}
            </div>
            <p className="mt-12 text-sm text-gray-600">
              {t('immunisationDisclaimer')}
            </p>
          </div>
        </div>

        {checks.map((check) => (
          <div key={check} className="flex items-start gap-12">
            <CheckCircle className="w-20 h-20 text-primary mt-1 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-gray-900">{check}</p>
              <p className="text-sm text-gray-600">{t('applyAfterArrival')}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-20">
        <div className="flex items-start gap-12">
          <AlertCircle className="w-20 h-20 text-primary mt-1 shrink-0" />
          <p className="text-sm text-gray-700">{t('guidance')}</p>
        </div>
      </div>

      {/* Vaccination Information Section */}
      <VaccinationInfo />
    </div>
  );
}

export default IndustryPlacementHSA;
