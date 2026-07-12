import React from 'react';
import Banner from '@/components/common/Banner';
import Link from 'next/link';

export { generateMetadata } from './metadata';

export default async function OSHCPage() {
  return (
    <div className="font-[family-name:var(--font-montserrat)]">
      <Banner
        slides={[
          {
            imgPath: '/alianz.png',
            title: 'Overseas Student Health Cover (OSHC)',
            content: 'Health insurance for international students in Australia',
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/50 w-full h-screen md:h-700 absolute z-10" />
        }
      />

      {/* OSHC Information Section */}
      <section className="max-w-[1600px] mx-auto px-20 md:px-80 py-40">
        {/* Introductory Text */}
        <div className="mb-40">
          <h1 className="text-3xl md:text-4xl font-bold mb-30 text-center">
            Overseas Student Health Cover (OSHC)
          </h1>

          <div className="max-w-4xl mx-auto space-y-20 text-lg leading-relaxed">
            <p>
              <Link
                href="https://www.allianzcare.com.au/en.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:text-primary-bk"
              >
                Allianz Care Australia
              </Link>{' '}
              is the preferred provider of OSHC for ABM Further Education.
              Information about other providers is available from{' '}
              <Link
                href="https://www.privatehealth.gov.au/health_insurance/overseas/overseas_student_health_cover.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:text-primary-bk"
              >
                Overseas Student Health Cover (privatehealth.gov.au)
              </Link>
            </p>

            <p>
              We understand that maintaining your health is an important part of
              making your stay in Australia as safe and enjoyable as possible.
            </p>

            <p>
              <Link
                href="https://www.allianzcare.com.au/en.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:text-primary-bk"
              >
                Allianz Care Australia
              </Link>{' '}
              is here to assist and provide services and information that make
              it easy to understand and use the health cover which is available
              to you, whilst studying in Australia.
            </p>

            <p>
              Overseas Student Health Cover (OSHC) is health insurance for
              international students which provides cover for the costs of:
            </p>

            <ul className="list-disc pl-30 space-y-8">
              <li>Out of hospital medical treatment</li>
              <li>In hospital medical treatment</li>
              <li>Prescription medicines</li>
              <li>Surgically implanted prostheses</li>
              <li>Emergency ambulance transport</li>
            </ul>

            <p>
              In addition to the government-mandated health cover required for
              student visa purposes, we provide increased access to gap free
              medical services to support students as they study in Australia.
              These services include:
            </p>

            <ul className="list-disc pl-30 space-y-8">
              <li>
                24/7 Australian based telehealth services powered by Doctors on
                Demand
              </li>
              <li>
                Access to our network of direct billing providers available via
                Find a doctor
              </li>
              <li>
                24/7 confidential support for safety, medical and mental health
                needs via chat, on the phone or in-person powered by Sonder
              </li>
            </ul>

            <p className="text-sm text-gray-600 italic">
              This is a summary of information and benefits. For the full
              exclusions, limitations, waiting periods, terms and conditions
              please read the{' '}
              <Link
                href="/files/IMP3731_OSHC_Standard_Policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:text-primary-bk"
              >
                Policy Document (IMP3731_OSHC_Standard_Policy.pdf)
              </Link>
            </p>
          </div>
        </div>

        {/* OSHC Quote Section */}
        <div className="mb-40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-20 text-center">
              Get Your OSHC Quote
            </h2>

            {/* Allianz Calculator Link */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm text-center">
              <div className="bg-[#003781] text-white py-12 px-20">
                <h3 className="text-xl font-semibold">
                  OSHC Quote &mdash; Dates of Cover / Visa Length
                </h3>
              </div>
              <div className="py-30 px-20">
                <p className="text-gray-700 mb-20">
                  Use the Allianz Care Australia online calculator to get a
                  quote for your OSHC cover.
                </p>
                <Link
                  href="https://my.allianzcare.com/myquote/1?ot=2314&adobe_mc=MCMID%3D71068614976626489112508459503634879656%7CMCORGID%3DCEE1F70B5936D5B30A495EA3%2540AdobeOrg%7CTS%3D1782714610"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#003781] text-white font-semibold px-30 py-12 rounded-lg hover:bg-[#002a63] transition-colors"
                >
                  Get a Quote from Allianz Care Australia
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Quote Information */}
        <div className="mb-40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-20 text-center">
              Financial Quote
            </h2>

            <div className="space-y-20">
              {/* Single Quote */}
              <div className="border border-gray-200 rounded-lg p-20">
                <h3 className="text-xl font-bold text-primary mb-8">
                  Single Quote
                </h3>
                <p className="text-gray-700">
                  Covers only one valid student visa holder.
                </p>
              </div>

              {/* Dual-Family Quote */}
              <div className="border border-gray-200 rounded-lg p-20">
                <h3 className="text-xl font-bold text-primary mb-8">
                  Dual-Family Quote
                </h3>
                <p className="text-gray-700">
                  Covers only one valid student visa holder plus either one
                  adult spouse or recognised de-facto partner OR one OR more
                  dependent child/ren. i.e. you and a spouse/partner OR you and
                  your children.
                </p>
              </div>

              {/* Multi-Family Quote */}
              <div className="border border-gray-200 rounded-lg p-20">
                <h3 className="text-xl font-bold text-primary mb-8">
                  Multi-Family Quote
                </h3>
                <p className="text-gray-700">
                  Covers one valid student visa holder plus one adult spouse or
                  recognised de-facto partner plus one or more dependent
                  child/ren. i.e. you, your spouse and one or more child/ren.
                </p>
              </div>
            </div>

            {/* Nominate Own Provider Notice */}
            {/* <div className="mt-20 bg-red-50 border border-red-200 rounded-lg p-20">
              <p className="text-red-700 font-semibold">
                I will nominate my own OSHC provider: If you choose your own OSHC
                provider you will be required to provide proof of the OSHC policy
                for the length of your visa.
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
