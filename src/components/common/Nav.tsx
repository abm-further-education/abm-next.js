'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useParams } from 'next/navigation';
import MobileNav from './MobileNav';

import LanguageSwitcher from './LanguageSwitcher';
import { ChevronRight } from 'lucide-react';

function Nav() {
  const params = useParams();
  const [isScrolled, setIsScrolled] = useState(false);
  const [subMenu, setSubMenu] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="bg-[#2D2D2D] fixed p-16 top-0 w-full z-[800] flex flex-col lg:flex-row justify-between lg:px-80 font-[family-name:var(--font-montserrat)]">
        <div className="hidden lg:flex flex-col md:flex-row items-center text-sm md:text-base">
          <div className="text-white font-semibold hidden xl:block">
            Are you an International Student?
          </div>
          <Link
            href="/files/ABM_Brochure_2025_Web_F.pdf"
            target="_blank"
            className="text-primary font-semibold underline ml-10"
          >
            Download Course Guide
          </Link>
        </div>
        <div className="flex items-center gap-10 md:gap-25 text-white font-semibold justify-end">
          <div className="hidden lg:flex gap-20">
            <Link href="/">Current Students</Link>
            <Link
              href="https://www.jotform.com/app/abm-further-education/abm-agents"
              target="_blank"
            >
              Agent Portal
            </Link>
          </div>
          <div className="hidden lg:block w-1 h-20 bg-white mx-15" />
          <div className="flex items-center gap-20">
            <Link href="https://www.facebook.com/abmsydney/" target="_blank">
              <Image
                src="/icons/facebook.svg"
                width={10}
                height={10}
                alt="instagram"
              />
            </Link>
            <Link href="https://www.instagram.com/abmsydney/" target="_blank">
              <Image
                src="/icons/Instagram.svg"
                width={20}
                height={20}
                alt="instagram"
              />
            </Link>
            <Link href="https://www.youtube.com/@ABMsydney" target="_blank">
              <Image
                src="/icons/youtube.svg"
                width={20}
                height={20}
                alt="youtube"
              />
            </Link>
            <Link href="https://www.tiktok.com/@abmsydney" target="_blank">
              <Image
                src="/icons/tiktok.svg"
                width={15}
                height={15}
                alt="tiktok"
              />
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          className={cn(
            isScrolled || subMenu ? 'bg-black shadow-md ' : 'bg-transparent',
            'fixed top-56 md:top-50 w-full h-76 z-[800] transition-all duration-500'
          )}
        >
          {subMenu && (
            <div
              onMouseLeave={() => setSubMenu('')}
              className={cn(
                'absolute z-[999] w-full top-76 text-white flex flex-col md:flex-row items-center justify-between md:gap-40 md:px-80 md:py-20 bg-[#171717]'
              )}
            >
              <div className="text-white font-[family-name:var(--font-montserrat)]">
                <div className="font-bold uppercase">Find a course</div>
                <input
                  type="text"
                  className="border py-8 px-10 mt-10"
                  placeholder="Search Here..."
                />
              </div>
              <div
                className={cn(
                  subMenu === 'Courses' ? 'grid-cols-3' : 'grid-cols-2',
                  'grid gap-x-40 gap-y-18'
                )}
              >
                {menuList
                  .find((item) => item.title === subMenu)
                  ?.subMenu?.map((menu) => {
                    return (
                      <div key={menu.title}>
                        <Link
                          href={`/${params.locale}/${menu.href}`}
                          onClick={() => setSubMenu('')}
                        >
                          <h3 className="flex items-center font-bold font-[family-name:var(--font-montserrat)] uppercase">
                            {menu.title}
                            <ChevronRight />
                          </h3>
                        </Link>
                        <ul>
                          {menu.items.map((li) => (
                            <li
                              onClick={() => setSubMenu('')}
                              className="text-[15px] my-5"
                              key={`${li.title}_${menu.title}_${li.href}`}
                            >
                              <Link href={`/${params.locale}/${li.href}`}>
                                {li.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
        <header
          className={cn(
            `hidden fixed top-50 z-[900] lg:flex items-center justify-between px-16 md:px-80 text-white w-full transition-all duration-500`
          )}
        >
          <Link href="/" className="">
            <Image src="/abm_logo.png" alt="Logo" width={120} height={120} />
          </Link>
          <div className="flex items-center">
            {menuList.map((item) => (
              <Link
                onMouseEnter={() => {
                  if (item.title === 'Contact') setSubMenu('');
                  else setSubMenu(item.title);
                }}
                onClick={() => setSubMenu('')}
                key={item.title}
                href={`/${params.locale}/${item.href}`}
                className={cn(
                  subMenu === item.title ? 'bg-[#171717] text-primary' : '',
                  'cursor-pointer hover:bg-[#171717] transition-all py-26 px-28'
                )}
              >
                {item.title}
              </Link>
            ))}
            <Link
              target="_blank"
              href="https://form.jotform.com/ABMonlineforms/new-abm-enroment-application-form"
              className="border cursor-pointer hover:bg-white font-semibold hover:text-black font-[family-name:var(--font-montserrat)] px-20 py-10 transition-all"
            >
              Enrol Now
            </Link>
          </div>
        </header>
        <MobileNav />
      </div>
    </>
  );
}

export default Nav;

const menuList = [
  {
    title: 'Courses',
    href: '/courses',
    subMenu: [
      {
        title: 'Cookery',
        href: '/courses/cookery-hospitality',
        items: [
          {
            title: 'Certificate IV in  Kitchen Management',
            href: '/courses/cookery-hospitality/sit40521-certificate-iv-in-kitchen-management',
          },
          {
            title: 'Industry Placement',
            href: '/courses/cookery-hospitality/industry-placement-work-placement',
          },
          {
            title: 'NSW Food Safety Supervisor ',
            href: '/courses/cookery-hospitality/fss',
          },
        ],
      },
      {
        title: 'Hospitality',
        href: '/courses/cookery-hospitality',
        items: [
          {
            title: 'Diploma of hospitality management',
            href: '/courses/cookery-hospitality/sit50422-diploma-of-hospitality-management',
          },
          {
            title: 'Advanced Diploma of Hospitality Management',
            href: '/courses/cookery-hospitality/advanced-diploma-of-hospitality-management',
          },
          {
            title: 'Industry Placement',
            href: '/courses/cookery-hospitality/industry-placement-hospitality-management',
          },
          {
            title: 'NSW Food Safety Supervisor',
            href: '/courses/cookery-hospitality/fss',
          },
        ],
      },
      {
        title: 'Fitness & Sport',
        href: '/courses/fitness-sports',
        items: [
          {
            title: 'Certificate IV in Fitness',
            href: '/courses/fitness-sports/sis30321-certificate-iv-in-fitness',
          },
          {
            title: 'Certificate III in Fitness',
            href: '/courses/fitness-sports/sis40221-certificate-iii-in-fitness',
          },
          {
            title: 'Certificate IV in Sport',
            href: '/courses/fitness-sports/certificate-iv-in-sport-fast-track',
          },
          {
            title: 'Certificate III in Sport',
            href: '/courses/fitness-sports/certificate-iii-in-sport-fast-track',
          },
        ],
      },
      {
        title: 'Business',
        href: '/courses/business',
        items: [
          {
            title: 'Certificate IV in Business',
            href: '/courses/business/bsb40120-certificate-iv-in-business',
          },
          {
            title: 'Diploma of Business',
            href: '/courses/business/bsb50120-diploma-of-business',
          },
          {
            title: 'Advanced Diploma of Business',
            href: '/courses/business/bsb60120-advanced-diploma-of-business',
          },
          {
            title: 'Graduate Diploma of Management',
            href: '/courses/business/bsb80120-graduate-diploma-of-management',
          },
        ],
      },
      {
        title: 'Project & Program',
        href: '/courses/project-program',
        items: [
          {
            title: 'Certificate IV in Project Management Practice',
            href: '/courses/project-program/bsb40920-certificate-iv-in-project-management-practice',
          },
          {
            title: 'Diploma of Project Management Practice',
            href: '/courses/project-program/bsb50820-diploma-of-project-management-practice',
          },
          {
            title: 'Advanced Diploma of Project Management Practice',
            href: '/courses/project-program/bsb60820-advanced-diploma-of-project-management-practice',
          },
        ],
      },
      {
        title: 'Human Resource',
        href: '/courses/human-resource',
        items: [
          {
            title: 'Certificate IV in Human Resource Management',
            href: '/courses/human-resource/bsb40420-certificate-iv-in-human-resource-management',
          },
          {
            title: 'Diploma of Human Resource Management',
            href: '/courses/human-resource/bsb50320-diploma-of-human-resource-management',
          },
          {
            title: 'Advanced Diploma of Human Resource Management',
            href: '/courses/human-resource/bsb60320-advanced-diploma-of-human-resource-management',
          },
        ],
      },
    ],
  },
  {
    title: 'Short Courses',
    href: '/short-courses',
    subMenu: [
      {
        title: 'Short Courses',
        href: '/short-courses',
        items: [
          {
            title: 'Barista Course',
            href: '/short-courses/barista',
          },
          {
            title: 'Classic French Cake Course',
            href: '/short-courses/cake',
          },
          {
            title: 'Wine Course',
            href: '/short-courses/wine',
          },
          {
            title: 'Sourdough and Focaccia Course',
            href: '/short-courses/focaccia',
          },
          {
            title: 'Fine Dining Dessert Plating Course',
            href: '/short-courses/dessert',
          },
          {
            title: 'Classic French Pastries Course',
            href: '/short-courses/pastries',
          },
          {
            title: 'Cocktail-Making and Mixology Course',
            href: '/short-courses/mixology',
          },
          {
            title: 'French petit four Course (Macaroon)',
            href: '/short-courses/petit',
          },
          {
            title: 'Vegan and Vegetarian Course',
            href: '/short-courses/vegan',
          },
          {
            title: 'Chocolate Class – Xmas',
            href: '/short-courses/chocolate',
          },
        ],
      },
    ],
  },
  {
    title: 'Study With Us',
    href: '/study-with-us',
    subMenu: [
      {
        title: 'Study With Us',
        href: '/study-with-us',
        items: [
          {
            title: 'Why ABM Further Education',
            href: '/',
          },
          {
            title: 'ABM Student Insights',
            href: '/',
          },
          {
            title: 'Academic Calendar',
            href: '/',
          },
          {
            title: 'Fees and Payment',
            href: '/',
          },
          {
            title: 'Entry Requirements',
            href: '/',
          },
          {
            title: 'Get a USI',
            href: '/',
          },
          {
            title: 'Enrol Now',
            href: '/',
          },
          {
            title: 'Higher Education Pathway',
            href: '/',
          },
        ],
      },
    ],
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];
