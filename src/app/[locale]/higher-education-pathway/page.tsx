import Banner from '@/components/common/Banner';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t('higherEducationPathway.title'),
    description: t('higherEducationPathway.bannerSubtitle'),
  };
}

export default async function HigherEducationPathwayPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'higherEducationPathway',
  });

  return (
    <section>
      <Banner
        slides={[
          {
            imgPath: '/higher_education.png',
            title: t('title'),
            content: t('bannerSubtitle'),
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/50 w-full h-screen md:h-700 absolute z-10" />
        }
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="py-20">
          <div className="max-w-1000 mx-auto px-4">
            <div className="">
              <p className="text-xl md:text-2xl font-bold mb-8 leading-relaxed">
                {t('bannerTitle')}
              </p>
              <p className="opacity-90 leading-relaxed text-gray-600">
                {t('bannerSubtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-1000 mx-auto px-4 py-16">
          <div className="mx-auto">
            {/* Introduction Section */}
            <div className="mb-12">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{t('pathwayTitle')}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('pathwayDescription')}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-r-lg">
                <p className="text-lg text-gray-800 font-semibold">
                  {t('exploreOptions')}
                </p>
              </div>
            </div>

            {/* University Partnerships */}
            <div className="grid md:grid-cols-1 gap-8 mb-12">
              {/* The Hotel School Sydney / Southern Cross University */}
              <div className="">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src="https://abm.edu.au/wp-content/uploads/2024/01/SCU_RGB_Horizontal-1-1024x328.png"
                      alt="Southern Cross University Logo"
                      width={500}
                      height={100}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {t('hotelSchoolTitle')}
                  </h3>
                  <p className="text-gray-100">{t('hotelSchoolProgram')}</p>
                </div>

                <div className="p-6">
                  <div className="space-y-6">
                    {/* Certificate IV in Kitchen Management */}
                    <div className="">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {t('certificateIVKitchen')}
                      </h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-800 font-medium">
                          {t('certificateIVKitchenCredit')}
                        </p>
                      </div>
                    </div>

                    {/* Diploma of Hospitality Management */}
                    <div className="">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {t('diplomaHospitality')}
                      </h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-800 font-medium">
                          {t('diplomaHospitalityCredit')}
                        </p>
                      </div>
                    </div>

                    {/* Advanced Diploma of Hospitality Management */}
                    <div className="">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {t('advancedDiplomaHospitality')}
                      </h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-800 font-medium">
                          {t('advancedDiplomaHospitalityCredit')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* UBSS Universal Business School Sydney */}
              <div className="">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src="https://abm.edu.au/wp-content/uploads/2025/04/UBSS.png"
                      alt="UBSS Universal Business School Sydney Logo"
                      width={500}
                      height={100}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{t('ubssTitle')}</h3>
                  <p className="text-gray-100">{t('ubssProgram')}</p>
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Bachelor Programs */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                        {t('ubssBachelorTitle')}
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-gray-800 font-medium">
                            {t('diplomaBusiness')}
                          </p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-gray-800 font-medium">
                            {t('advancedDiplomaBusiness')}
                          </p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-gray-800 font-medium">
                            {t('diplomaHR')}
                          </p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-gray-800 font-medium">
                            {t('advancedDiplomaHR')}
                          </p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-gray-800 font-medium">
                            {t('diplomaHospitalityUBSS')}
                          </p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-gray-800 font-medium">
                            {t('advancedDiplomaHospitalityUBSS')}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Master Programs */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                        {t('ubssMasterTitle')}
                      </h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-800 font-medium">
                          {t('graduateDiplomaManagement')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
