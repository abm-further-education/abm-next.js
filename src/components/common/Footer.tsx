import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="bg-black py-50 px-20 md:px-80 grid grid-cols-1 md:grid-cols-2 font-[family-name:var(--font-inter)] text-sm text-neutral-200">
      <div className="mb-30">
        <Image src="/abm_logo.png" alt="Logo" width={120} height={120} />
        <ul className="mt-20 md:mt-20 text-neutral-200">
          <li>
            <Link
              href="https://maps.app.goo.gl/NSSq15XbzbLBmfQcA"
              target="_blank"
            >
              <strong> Main Campus</strong> <br />
              242 Castlereagh Street Sydney NSW 2000
            </Link>
          </li>
          <li className="mt-10">
            <Link
              href="https://maps.app.goo.gl/NSSq15XbzbLBmfQcA"
              target="_blank"
            >
              <strong> ABM Kitchen</strong>
              <br />
              Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000
            </Link>
          </li>
          <li className="underline mt-10">
            <Link href="mailto:info@abm.edu.au" target="_blank">
              info@abm.edu.au
            </Link>
          </li>
          <li className="mt-10">+61 (02) 9160 4507</li>
          <li>(WhatsApp) + 61 482 796 0</li>
          <li className="mt-10">RTO 45578 | CRICOS 03826M</li>
          <li>ABN 37 623 414 817</li>
        </ul>
      </div>
      <div className="flex flex-wrap gap-20">
        <div>
          <ul>
            <li className="font-bold">{t('home')}</li>
            <li>{t('courses')}</li>
            <li>
              <Link href="/short-courses" target="_blank">
                {t('shortCourses')}
              </Link>
            </li>
            <li>
              <Link href="/study-with-us" target="_blank">
                {t('studyWithUs')}
              </Link>
            </li>
            <li>
              <Link href="/current-students" target="_blank">
                {t('currentStudents')}
              </Link>
            </li>
            <li>
              <Link href="/contact" target="_blank">
                {t('contact')}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-bold">{t('courses')}</li>
            <li>
              <Link href="/courses" target="_blank">
                {t('cookeryAndHospitality')}
              </Link>
            </li>
            <li>
              <Link href="/courses" target="_blank">
                {t('fitnessAndSports')}
              </Link>
            </li>
            <li>
              <Link href="/courses" target="_blank">
                {t('business')}
              </Link>
            </li>
            <li>
              <Link href="/courses" target="_blank">
                {t('projectAndProgram')}
              </Link>
            </li>
            <li>
              <Link href="/courses" target="_blank">
                {t('humanResources')}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-bold mt-20 md:mt-0">{t('shortCourses')}</li>
            <li>
              <Link href="/short-courses" target="_blank">
                {t('baristaCourse')}
              </Link>
            </li>
            <li>
              <Link href="/short-courses" target="_blank">
                {t('classicFrenchPastriesCourse')}
              </Link>
            </li>
            <li>
              <Link href="/short-courses" target="_blank">
                {t('wineCourse')}
              </Link>
            </li>
            <li>
              <Link href="/short-courses" target="_blank">
                {t('sourdoughAndFocacciaCourse')}
              </Link>
            </li>
            <li>
              <Link href="/short-courses" target="_blank">
                {t('fineDiningDessertPlating')}
              </Link>
            </li>
            <li>
              <Link href="/short-courses" target="_blank">
                {t('classicFrenchCakesCourse')}
              </Link>
            </li>
            <li>
              <Link href="/short-courses" target="_blank">
                {t('frenchPetitFourCourse')}
              </Link>
            </li>
            <li>
              <Link href="/short-courses" target="_blank">
                {t('veganAndVegetarianCourse')}
              </Link>
            </li>
            <li>
              <Link href="/short-courses" target="_blank">
                {t('chocolateClassXmas')}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-bold mt-20 md:mt-0">{t('agent')}</li>
            <li>
              <Link href="/agent" target="_blank">
                {t('agentPortal')}
              </Link>
            </li>
            <li>
              <Link href="/agent" target="_blank">
                {t('agentApplication')}
              </Link>
            </li>
            <li>
              <Link href="/agent" target="_blank">
                {t('agentList')}
              </Link>
            </li>
            <li>
              <Link href="/abm-policies-procedures-and-forms" target="_blank">
                {t('abmPoliciesAndProcedures')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
