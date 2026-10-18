import React from 'react';
import { useTranslations } from 'next-intl';
import { Syringe, DollarSign, ListOrdered, AlertCircle } from 'lucide-react';

type NamedItem = { name: string; desc: string };

const externalLink = (href: string) =>
  function ExternalLink(chunks: React.ReactNode) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline hover:text-black transition"
      >
        {chunks}
      </a>
    );
  };

const italic = (chunks: React.ReactNode) => (
  <span className="italic font-normal">{chunks}</span>
);

function VaccinationInfo() {
  const t = useTranslations('industryPlacementPage.vaccination');
  const docs = t.raw('docs') as string[];
  const required = t.raw('required') as NamedItem[];
  const costs = t.raw('costs') as string[];
  const processSteps = t.raw('process') as string[];

  return (
    <div className="w-full mt-40 mx-auto space-y-32">
      {/* Regarding Vaccinations */}
      <div>
        <h3 className="text-xl font-bold mb-20 font-montserrat flex items-center gap-8">
          <Syringe className="w-20 h-20 text-primary shrink-0" />
          {t('regardingTitle')}
        </h3>
        <div className="text-sm text-gray-700 space-y-12">
          <p>{t('mandatory')}</p>
          <p>{t('recommendDocs')}</p>
          <ul className="list-disc list-inside space-y-2">
            {docs.map((doc) => (
              <li key={doc}>{doc}</li>
            ))}
          </ul>
          <p>{t('overseasRecords')}</p>
          <p>{t('gpHelp')}</p>
          <p>{t('avoidCosts')}</p>
        </div>
      </div>

      {/* List of Required Vaccinations */}
      <div>
        <h3 className="text-xl font-bold mb-20 font-montserrat">
          {t('requiredTitle')}
        </h3>
        <div className="space-y-12 text-sm text-gray-700">
          {required.map((item) => (
            <p key={item.name}>
              <span className="font-semibold text-gray-900">{item.name}</span>
              <br />
              {item.desc}
            </p>
          ))}
        </div>
      </div>

      {/* Regarding Vaccination Costs */}
      <div>
        <h3 className="text-xl font-bold mb-20 font-montserrat flex items-center gap-8">
          <DollarSign className="w-20 h-20 text-primary shrink-0" />
          {t('costsTitle')}
        </h3>
        <div className="text-sm text-gray-700 space-y-12">
          {costs.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      {/* Vaccination Process */}
      <div>
        <h3 className="text-xl font-bold mb-20 font-montserrat flex items-center gap-8">
          <ListOrdered className="w-20 h-20 text-primary shrink-0" />
          {t('processTitle')}
        </h3>
        <p className="text-sm text-gray-600 italic mb-12">{t('processNote')}</p>
        <ol className="list-decimal list-inside space-y-8 text-sm text-gray-700">
          {processSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>

      {/* Additional HSA-related costs */}
      <div>
        <h3 className="text-xl font-bold mb-20 font-montserrat">
          {t('otherTitle')}
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto shadow-sm text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-8 border-b border-gray-300 text-left font-semibold">
                  {t('table.requirement')}
                </th>
                <th className="px-4 py-8 border-b border-gray-300 text-left font-semibold">
                  {t('table.volunteer')}
                </th>
                <th className="px-4 py-8 border-b border-gray-300 text-left font-semibold">
                  {t('table.paid')}
                </th>
                <th className="px-4 py-8 border-b border-gray-300 text-left font-semibold">
                  {t('table.details')}
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="px-4 py-8 border-b border-gray-200 align-top font-semibold text-gray-900">
                  {t('wwcc.name')}
                </td>
                <td className="px-4 py-8 border-b border-gray-200 align-top">
                  {t('wwcc.free')}
                </td>
                <td className="px-4 py-8 border-b border-gray-200 align-top">
                  $112 <span className="italic">{t('wwcc.nswPricing')}</span>
                </td>
                <td className="px-4 py-8 border-b border-gray-200 align-top">
                  {t('wwcc.details')}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-8 border-b border-gray-200 align-top font-semibold text-gray-900">
                  {t('police.name')}
                </td>
                <td className="px-4 py-8 border-b border-gray-200 align-top">
                  $25 – $35
                </td>
                <td className="px-4 py-8 border-b border-gray-200 align-top">
                  $52 – $77
                </td>
                <td className="px-4 py-8 border-b border-gray-200 align-top">
                  {t.rich('police.details', {
                    link: externalLink(
                      'https://www.police.nsw.gov.au/online_services/national_police_checks',
                    ),
                  })}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-8 border-b border-gray-200 align-top font-semibold text-gray-900">
                  {t.rich('firstAid.name', { i: italic })}
                </td>
                <td className="px-4 py-8 border-b border-gray-200 align-top">
                  $80 – $220
                </td>
                <td className="px-4 py-8 border-b border-gray-200 align-top">
                  $80 – $220
                </td>
                <td className="px-4 py-8 border-b border-gray-200 align-top">
                  {t.rich('firstAid.details', {
                    awfa: externalLink('https://www.australiawidefirstaid.com.au/'),
                    redcross: externalLink('https://www.redcross.org.au/'),
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-20 mt-12">
          <div className="flex items-start gap-12">
            <AlertCircle className="w-20 h-20 text-primary mt-1 shrink-0" />
            <p className="text-sm text-gray-700">{t('pricesDisclaimer')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VaccinationInfo;
