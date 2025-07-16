import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { cn } from '@/lib/utils';
import Banner from '@/components/common/Banner';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('courseEntryRequirements');

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function CourseEntryRequirementsPage() {
  const t = await getTranslations('courseEntryRequirements');

  return (
    <div>
      {/* Banner Section */}
      <Banner
        slides={[
          {
            imgPath: '/entry_requirement.png',
            title: t('bannerTitle'),
            content: t('bannerSubtitle'),
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/50 w-full h-screen md:h-700 absolute z-10" />
        }
      />

      {/* Main Content */}
      <section className={cn('px-16 md:px-0 my-60 md:my-120')}>
        <div className="max-w-[1000px] mx-auto">
          {/* Introduction */}
          <div className="text-center mb-80">
            <h2 className="text-3xl md:text-4xl font-bold mb-30 font-[family-name:var(--font-montserrat)]">
              {t('introTitle')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('introDescription')}
            </p>
          </div>

          {/* General Requirements */}
          <div className="mb-80">
            <h3 className="text-2xl md:text-3xl font-bold mb-40 font-[family-name:var(--font-montserrat)]">
              {t('generalRequirementsTitle')}
            </h3>
            <div className="grid md:grid-cols-2 gap-20">
              <div className="bg-white border border-gray-200  shadow-md p-20">
                <h4 className="text-xl font-semibold mb-20 text-primary">
                  {t('ageRequirementTitle')}
                </h4>
                <p className="text-gray-600">
                  {t('ageRequirementDescription')}
                </p>
              </div>
              <div className="bg-white border border-gray-200  shadow-md p-20">
                <h4 className="text-xl font-semibold mb-20 text-primary">
                  {t('englishRequirementTitle')}
                </h4>
                <p className="text-gray-600">
                  {t('englishRequirementDescription')}
                </p>
              </div>
            </div>
          </div>

          {/* Course Requirements Table */}
          <div className="mb-80">
            <h3 className="text-xl md:text-2xl font-bold mb-20 font-[family-name:var(--font-montserrat)]">
              {t('courseRequirementsTableTitle')}
            </h3>
            <p className="text-gray-600 mb-20">
              {t('courseRequirementsTableDescription')}
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 bg-white shadow-md">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-20 py-10 text-left font-semibold text-gray-700">
                      Course Code & Name
                    </th>
                    <th className="border border-gray-300 px-20 py-10 text-left font-semibold text-gray-700">
                      Entry Requirements
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-20 py-10 bg-gray-50 font-semibold">
                      {t('courses.kitchenManagement.code')}
                    </td>
                    <td className="border border-gray-300 px-20 py-10">
                      {t('courses.kitchenManagement.requirement')}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-20 py-10 bg-gray-50 font-semibold">
                      {t('courses.hospitalityDiploma.code')}
                    </td>
                    <td className="border border-gray-300 px-20 py-10">
                      {t('courses.hospitalityDiploma.requirement')}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-20 py-10 bg-gray-50 font-semibold">
                      {t('courses.hospitalityAdvancedDiploma.code')}
                    </td>
                    <td className="border border-gray-300 px-20 py-10">
                      {t('courses.hospitalityAdvancedDiploma.requirement')}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-20 py-10 bg-gray-50 font-semibold">
                      {t('courses.fitnessCertIII.code')}
                    </td>
                    <td className="border border-gray-300 px-20 py-10">
                      {t('courses.fitnessCertIII.requirement')}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-20 py-10 bg-gray-50 font-semibold">
                      {t('courses.fitnessCertIIIFast.code')}
                    </td>
                    <td className="border border-gray-300 px-20 py-10 whitespace-pre-line">
                      {t('courses.fitnessCertIIIFast.requirement')}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-20 py-10 bg-gray-50 font-semibold">
                      {t('courses.fitnessCertIV.code')}
                    </td>
                    <td className="border border-gray-300 px-20 py-10 whitespace-pre-line">
                      {t('courses.fitnessCertIV.requirement')}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-20 py-10 bg-gray-50 font-semibold">
                      {t('courses.fitnessCertIVFast.code')}
                    </td>
                    <td className="border border-gray-300 px-20 py-10 whitespace-pre-line">
                      {t('courses.fitnessCertIVFast.requirement')}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-20 py-10 bg-gray-50 font-semibold">
                      {t('courses.sportDiploma.code')}
                    </td>
                    <td className="border border-gray-300 px-20 py-10">
                      {t('courses.sportDiploma.requirement')}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-20 py-10 bg-gray-50 font-semibold">
                      {t('courses.businessCertIV.code')}
                    </td>
                    <td className="border border-gray-300 px-20 py-10">
                      {t('courses.businessCertIV.requirement')}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-20 py-10 bg-gray-50 font-semibold">
                      {t('courses.businessDiploma.code')}
                    </td>
                    <td className="border border-gray-300 px-20 py-10">
                      {t('courses.businessDiploma.requirement')}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-20 py-10 bg-gray-50 font-semibold">
                      {t('courses.businessAdvancedDiploma.code')}
                    </td>
                    <td className="border border-gray-300 px-20 py-10">
                      {t('courses.businessAdvancedDiploma.requirement')}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-20 py-10 bg-gray-50 font-semibold">
                      {t('courses.hrCertIV.code')}
                    </td>
                    <td className="border border-gray-300 px-20 py-10">
                      {t('courses.hrCertIV.requirement')}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-20 py-10 bg-gray-50 font-semibold">
                      {t('courses.hrDiploma.code')}
                    </td>
                    <td className="border border-gray-300 px-20 py-10 whitespace-pre-line">
                      {t('courses.hrDiploma.requirement')}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-20 py-10 bg-gray-50 font-semibold">
                      {t('courses.hrAdvancedDiploma.code')}
                    </td>
                    <td className="border border-gray-300 px-20 py-10">
                      {t('courses.hrAdvancedDiploma.requirement')}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-20 py-10 bg-gray-50 font-semibold">
                      {t('courses.projectCertIV.code')}
                    </td>
                    <td className="border border-gray-300 px-20 py-10">
                      {t('courses.projectCertIV.requirement')}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-20 py-10 bg-gray-50 font-semibold">
                      {t('courses.projectDiploma.code')}
                    </td>
                    <td className="border border-gray-300 px-20 py-10">
                      {t('courses.projectDiploma.requirement')}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-20 py-10 bg-gray-50 font-semibold">
                      {t('courses.projectAdvancedDiploma.code')}
                    </td>
                    <td className="border border-gray-300 px-20 py-10">
                      {t('courses.projectAdvancedDiploma.requirement')}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-20 py-10 bg-gray-50 font-semibold">
                      {t('courses.graduateDiploma.code')}
                    </td>
                    <td className="border border-gray-300 px-20 py-10">
                      {t('courses.graduateDiploma.requirement')}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* English Entry Requirements */}
          <div className="mb-80">
            <h3 className="text-2xl md:text-3xl font-bold mb-40 font-[family-name:var(--font-montserrat)]">
              {t('englishEntryRequirementsTitle')}
            </h3>
            <div className="space-y-40">
              <div className="bg-white border border-gray-200 shadow-md p-20">
                <p className="text-gray-600 mb-20">
                  {t('englishEntryRequirementsDescription')}
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-10">
                  <li>{t('englishEvidence1')}</li>
                  <li>{t('englishEvidence2')}</li>
                  <li>{t('englishEvidence3')}</li>
                  <li>{t('englishEvidence4')}</li>
                </ul>
              </div>

              {/* PTE Requirements */}
              <div className="bg-white border border-gray-200 shadow-md p-20">
                <h4 className="text-xl font-semibold mb-20 text-primary">
                  {t('pteRequirementsTitle')}
                </h4>
                <p className="text-gray-600 mb-20">
                  {t('pteRequirementsDescription')}
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-20 py-10 text-left font-semibold text-gray-700">
                          {t('pteListening')}
                        </th>
                        <th className="border border-gray-300 px-20 py-10 text-left font-semibold text-gray-700">
                          {t('pteReading')}
                        </th>
                        <th className="border border-gray-300 px-20 py-10 text-left font-semibold text-gray-700">
                          {t('pteSpeaking')}
                        </th>
                        <th className="border border-gray-300 px-20 py-10 text-left font-semibold text-gray-700">
                          {t('pteWriting')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-20 py-10 text-center">
                          {t('pteListeningScore')}
                        </td>
                        <td className="border border-gray-300 px-20 py-10 text-center">
                          {t('pteReadingScore')}
                        </td>
                        <td className="border border-gray-300 px-20 py-10 text-center">
                          {t('pteSpeakingScore')}
                        </td>
                        <td className="border border-gray-300 px-20 py-10 text-center">
                          {t('pteWritingScore')}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 mt-15">
                  {t('pteTableTitle')}
                </p>
              </div>

              {/* Competency in English */}
              <div className="bg-white border border-gray-200 shadow-md p-20">
                <h4 className="text-xl font-semibold mb-20 text-primary">
                  {t('competencyInEnglishTitle')}
                </h4>
                <p className="text-gray-600 mb-20">
                  {t('competencyDescription')}
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-10">
                  <li>{t('competency1')}</li>
                  <li>{t('competency2')}</li>
                  <li>{t('competency3')}</li>
                  <li>{t('competency4')}</li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 p-20">
                <p className="text-sm text-gray-700">{t('englishNote')}</p>
              </div>

              {/* ELICOS Pathway Partners */}
              <div className="">
                <h4 className="text-xl font-semibold mb-30 text-primary">
                  {t('elicosPathwayPartnersTitle')}
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <tbody>
                      {Object.entries(t.raw('elicosPartners')).map(
                        ([key, partner]: [string, unknown]) => {
                          const partnerData = partner as {
                            name: string;
                            url: string;
                            description: string;
                            courses?: string;
                          };
                          return (
                            <tr key={key} className="border-b border-gray-300">
                              <td className="border-r border-gray-300 px-20 py-15 w-1/4 bg-gray-50">
                                <Link
                                  href={partnerData.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-semibold text-primary hover:text-primary/80 transition-colors"
                                >
                                  {partnerData.name}
                                </Link>
                              </td>
                              <td className="px-20 py-15 whitespace-pre-line text-gray-600">
                                {partnerData.courses}
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Application Process */}
          <div className="mb-80">
            <h3 className="text-2xl md:text-3xl font-bold mb-40 font-[family-name:var(--font-montserrat)]">
              {t('applicationProcessTitle')}
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-20">
              <div className="p-20 flex-1 text-center">
                <h4 className="text-xl font-semibold mb-20 bg-primary text-white h-160 w-160 rounded-full flex items-center justify-center">
                  {t('step1Title')}
                </h4>
                <p className="text-gray-600">{t('step1Description')}</p>
              </div>
              <div className="hidden md:flex items-center text-gray-400">
                <ChevronRightIcon />
              </div>
              <div className="p-20 flex-1 text-center">
                <h4 className="text-xl font-semibold mb-20 bg-primary text-white h-160 w-160 rounded-full flex items-center justify-center">
                  {t('step2Title')}
                </h4>
                <p className="text-gray-600">{t('step2Description')}</p>
              </div>
              <div className="hidden md:flex items-center text-gray-400">
                <ChevronRightIcon />
              </div>
              <div className="p-20 flex-1 text-center">
                <h4 className="text-xl font-semibold mb-20 bg-primary text-white h-160 w-160 rounded-full flex items-center justify-center">
                  {t('step3Title')}
                </h4>
                <p className="text-gray-600">{t('step3Description')}</p>
              </div>
              <div className="hidden md:flex items-center text-gray-400">
                <ChevronRightIcon />
              </div>
              <div className="p-20 flex-1 text-center">
                <h4 className="text-xl font-semibold mb-20 bg-primary text-white h-160 w-160 rounded-full flex items-center justify-center">
                  {t('step4Title')}
                </h4>
                <p className="text-gray-600">{t('step4Description')}</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-30 font-[family-name:var(--font-montserrat)]">
              {t('needHelpTitle')}
            </h3>
            <p className="text-lg text-gray-600 mb-40 whitespace-pre-line">
              {t('needHelpDescription')}
            </p>
            <div className="flex flex-col md:flex-row gap-20 justify-center">
              <Link
                href="/contact"
                className="bg-primary-bk text-white px-40 py-10  hover:bg-primary/90 transition-colors"
              >
                {t('contactUsButton')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
