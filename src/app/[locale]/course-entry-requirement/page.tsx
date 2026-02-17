import { Metadata } from 'next';
import { getTranslations, getLocale } from 'next-intl/server';
import { cn } from '@/lib/utils';
import Banner from '@/components/common/Banner';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { getActiveEntryRequirementPage, EntryRequirementCourseWithTranslation, EntryRequirementElicosPartnerWithTranslation } from '@/lib/entry-requirement-db';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('courseEntryRequirements');
  const locale = await getLocale();
  const data = await getActiveEntryRequirementPage(locale);
  const tr = data?.translation;

  return {
    title: tr?.meta_title || t('metaTitle'),
    description: tr?.meta_description || t('metaDescription'),
  };
}

export default async function CourseEntryRequirementsPage() {
  const t = await getTranslations('courseEntryRequirements');
  const locale = await getLocale();
  const data = await getActiveEntryRequirementPage(locale);
  const tr = data?.translation;

  const bannerImage = data?.banner_image || '/entry_requirement.png';
  const bannerTitle = tr?.banner_title || t('bannerTitle');
  const bannerSubtitle = tr?.banner_subtitle || t('bannerSubtitle');
  const introTitle = tr?.intro_title || t('introTitle');
  const introDescription = tr?.intro_description || t('introDescription');
  const generalRequirementsTitle =
    tr?.general_requirements_title || t('generalRequirementsTitle');
  const generalCards = (tr?.general_cards as Array<{ icon?: string; title: string; description: string }>) || [
    {
      title: t('ageRequirementTitle'),
      description: t('ageRequirementDescription'),
    },
    {
      title: t('englishRequirementTitle'),
      description: t('englishRequirementDescription'),
    },
  ];
  const courseTableTitle =
    tr?.course_table_title || t('courseRequirementsTableTitle');
  const courseTableDescription =
    tr?.course_table_description || t('courseRequirementsTableDescription');
  const courses = data?.courses || [];
  const englishEntryTitle =
    tr?.english_entry_title || t('englishEntryRequirementsTitle');
  const englishEntryDescription =
    tr?.english_entry_description || t('englishEntryRequirementsDescription');
  const englishEvidenceItems = (tr?.english_evidence_items as string[]) || [
    t('englishEvidence1'),
    t('englishEvidence2'),
    t('englishEvidence3'),
  ];
  const pteTitle = tr?.pte_title || t('pteRequirementsTitle');
  const pteDescription =
    tr?.pte_description || t('pteRequirementsDescription');
  const pteTableNote = tr?.pte_table_note || t('pteTableTitle');
  const pteScores = (tr?.pte_scores as Array<{ skill: string; minimum_score: string }>) || [
    { skill: t('pteListening'), minimum_score: t('pteListeningScore') },
    { skill: t('pteReading'), minimum_score: t('pteReadingScore') },
    { skill: t('pteSpeaking'), minimum_score: t('pteSpeakingScore') },
    { skill: t('pteWriting'), minimum_score: t('pteWritingScore') },
  ];
  const competencyTitle =
    tr?.competency_title || t('competencyInEnglishTitle');
  const competencyDescription =
    tr?.competency_description || t('competencyDescription');
  const competencyItems = (tr?.competency_items as string[]) || [
    t('competency1'),
    t('competency2'),
    t('competency3'),
    t('competency4'),
  ];
  const englishNote = tr?.english_note || t('englishNote');
  const elicosTitle = tr?.elicos_title || t('elicosPathwayPartnersTitle');
  const elicosPartners = data?.elicos_partners || [];
  const applicationProcessTitle =
    tr?.application_process_title || t('applicationProcessTitle');
  const applicationSteps = (tr?.application_steps as Array<{ step?: string; title: string; description: string }>) || [
    { title: t('step1Title'), description: t('step1Description') },
    { title: t('step2Title'), description: t('step2Description') },
    { title: t('step3Title'), description: t('step3Description') },
    { title: t('step4Title'), description: t('step4Description') },
  ];
  const contactTitle = tr?.contact_title || t('needHelpTitle');
  const contactDescription =
    tr?.contact_description || t('needHelpDescription');
  const contactButtonText = tr?.contact_button_text || t('contactUsButton');
  const contactButtonLink = data?.contact_button_link || '/contact';

  return (
    <div>
      {/* Banner Section */}
      <Banner
        slides={[
          {
            imgPath: bannerImage,
            title: bannerTitle,
            content: bannerSubtitle,
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
              {introTitle}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {introDescription}
            </p>
          </div>

          {/* General Requirements */}
          <div className="mb-80">
            <h3 className="text-2xl md:text-3xl font-bold mb-40 font-[family-name:var(--font-montserrat)]">
              {generalRequirementsTitle}
            </h3>
            <div className="grid md:grid-cols-2 gap-20">
              {generalCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 shadow-md p-20"
                >
                  <h4 className="text-xl font-semibold mb-20 text-primary">
                    {card.title}
                  </h4>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Course Requirements Table */}
          <div className="mb-80">
            <h3 className="text-xl md:text-2xl font-bold mb-20 font-[family-name:var(--font-montserrat)]">
              {courseTableTitle}
            </h3>
            <p className="text-gray-600 mb-20">{courseTableDescription}</p>
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
                  {courses.length > 0 ? (
                    courses.map((course: EntryRequirementCourseWithTranslation) => (
                      <tr key={course.id}>
                        <td className="border border-gray-300 px-20 py-10 bg-gray-50 font-semibold">
                          {course.course_code}
                        </td>
                        <td className="border border-gray-300 px-20 py-10 whitespace-pre-line">
                          {course.requirement}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="border border-gray-300 px-20 py-10 bg-gray-50 font-semibold">
                        {t('courses.kitchenManagement.code')}
                      </td>
                      <td className="border border-gray-300 px-20 py-10">
                        {t('courses.kitchenManagement.requirement')}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* English Entry Requirements */}
          <div className="mb-80">
            <h3 className="text-2xl md:text-3xl font-bold mb-40 font-[family-name:var(--font-montserrat)]">
              {englishEntryTitle}
            </h3>
            <div className="space-y-40">
              <div className="bg-white border border-gray-200 shadow-md p-20">
                <p className="text-gray-600 mb-20">{englishEntryDescription}</p>
                <ul className="list-disc list-inside text-gray-600 space-y-10">
                  {englishEvidenceItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* PTE Requirements */}
              <div className="bg-white border border-gray-200 shadow-md p-20">
                <h4 className="text-xl font-semibold mb-20 text-primary">
                  {pteTitle}
                </h4>
                <p className="text-gray-600 mb-20">{pteDescription}</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        {pteScores.map((score, index) => (
                          <th
                            key={index}
                            className="border border-gray-300 px-20 py-10 text-left font-semibold text-gray-700"
                          >
                            {score.skill}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {pteScores.map((score, index) => (
                          <td
                            key={index}
                            className="border border-gray-300 px-20 py-10 text-center"
                          >
                            {score.minimum_score}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 mt-15">{pteTableNote}</p>
              </div>

              {/* Competency in English */}
              <div className="bg-white border border-gray-200 shadow-md p-20">
                <h4 className="text-xl font-semibold mb-20 text-primary">
                  {competencyTitle}
                </h4>
                <p className="text-gray-600 mb-20">{competencyDescription}</p>
                <ul className="list-disc list-inside text-gray-600 space-y-10">
                  {competencyItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 p-20">
                <p className="text-sm text-gray-700">{englishNote}</p>
              </div>

              {/* ELICOS Pathway Partners */}
              {elicosPartners.length > 0 && (
                <div id="elicos-pathway-partners">
                  <h4 className="text-xl font-semibold mb-30 text-primary">
                    {elicosTitle}
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <tbody>
                        {elicosPartners.map((partner: EntryRequirementElicosPartnerWithTranslation) => (
                          <tr
                            key={partner.id}
                            className="border-b border-gray-300"
                          >
                            <td className="border-r border-gray-300 px-20 py-15 w-1/4 bg-gray-50">
                              <Link
                                href={partner.partner_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-primary hover:text-primary/80 transition-colors"
                              >
                                {partner.partner_name}
                              </Link>
                            </td>
                            <td className="px-20 py-15 whitespace-pre-line text-gray-600">
                              {partner.courses}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Fallback: ELICOS from translations if no DB data */}
              {elicosPartners.length === 0 && !data && (
                <div id="elicos-pathway-partners">
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
                              courses?: string;
                            };
                            return (
                              <tr
                                key={key}
                                className="border-b border-gray-300"
                              >
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
                          },
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Application Process */}
          <div className="mb-80">
            <h3 className="text-2xl md:text-3xl font-bold mb-40 font-[family-name:var(--font-montserrat)]">
              {applicationProcessTitle}
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-20">
              {applicationSteps.map((step, index) => (
                <div key={index} className="contents">
                  <div className="p-20 flex-1 text-center">
                    <h4 className="text-xl font-semibold mb-20 bg-primary text-white h-160 w-160 rounded-full flex items-center justify-center">
                      {step.title}
                    </h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < applicationSteps.length - 1 && (
                    <div className="hidden md:flex items-center text-gray-400">
                      <ChevronRightIcon />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-30 font-[family-name:var(--font-montserrat)]">
              {contactTitle}
            </h3>
            <p className="text-lg text-gray-600 mb-40 whitespace-pre-line">
              {contactDescription}
            </p>
            <div className="flex flex-col md:flex-row gap-20 justify-center">
              <Link
                href={contactButtonLink}
                className="bg-primary-bk text-white px-40 py-10 hover:bg-primary/90 transition-colors"
              >
                {contactButtonText}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
