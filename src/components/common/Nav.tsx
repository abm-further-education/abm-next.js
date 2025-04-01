'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useParams } from 'next/navigation';
import MobileNav from './MobileNav';

import LanguageSwitcher from './LanguageSwitcher';
import Button from './Button';
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
            <Link href="/">Agent Portal</Link>
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
            <Image
              src="/icons/Instagram.svg"
              width={20}
              height={20}
              alt="instagram"
            />
            <Image
              src="/icons/youtube.svg"
              width={20}
              height={20}
              alt="instagram"
            />
            <Image
              src="/icons/tiktok.svg"
              width={15}
              height={15}
              alt="instagram"
            />
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
                'absolute z-[999] w-full top-76 text-white flex items-center md:gap-40 md:px-80 md:py-20 bg-[#171717]'
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
              <div className="grid grid-cols-3 gap-x-40">
                {menuList
                  .find((item) => item.title === subMenu)
                  ?.subMenu?.map((menu) => {
                    return (
                      <div key={menu.title}>
                        <h3 className="flex items-center font-bold font-[family-name:var(--font-montserrat)] uppercase">
                          {menu.title}
                          <ChevronRight />
                        </h3>
                        <ul>
                          {menu.items.map((li) => (
                            <li
                              className="text-[15px] my-5"
                              key={`${li.title}_${menu.title}_${li.href}`}
                            >
                              {li.title}
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
                onMouseEnter={() => setSubMenu(item.title)}
                key={item.title}
                href={item.href}
                className={cn(
                  subMenu === item.title ? 'bg-[#171717] text-primary' : '',
                  'cursor-pointer hover:bg-[#171717] transition-all py-26 px-28'
                )}
              >
                {item.title}
              </Link>
            ))}
            <Button className="border cursor-pointer hover:bg-white font-semibold hover:text-black transition-all">
              Enrol Now
            </Button>
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
        items: [
          {
            title: 'Certificate IV in  Kitchen Management',
            href: '/courses/business',
          },
          {
            title: 'Industry Placement',
            href: '/courses/hospitality',
          },
          {
            title: 'NSW Food Safety Supervisor ',
            href: '/courses/hr-management',
          },
        ],
      },
      {
        title: 'Hospitality',
        items: [
          {
            title: 'Diploma of hospitality management',
            href: '/courses/business',
          },
          {
            title: 'Advanced Diploma of Hospitality Management',
            href: '/courses/hospitality',
          },
          {
            title: 'Advanced Diploma of Hospitality Management',
            href: '/courses/hr-management',
          },
          {
            title: 'NSW Food Safety Supervisor',
            href: '/courses/hr-management',
          },
        ],
      },
      {
        title: 'Fitness & Sport',
        items: [
          {
            title: 'Certificate IV in Fitness',
            href: '/courses/business',
          },
          {
            title: 'Certificate III in Fitness',
            href: '/courses/hospitality',
          },
          {
            title: 'Certificate IV in Sport',
            href: '/courses/hr-management',
          },
        ],
      },
      {
        title: 'Business',
        items: [
          {
            title: 'Certificate IV in Business',
            href: '/courses/business',
          },
          {
            title: 'Diploma of Business',
            href: '/courses/hospitality',
          },
          {
            title: 'Advanced Diploma of Business',
            href: '/courses/hr-management',
          },
          {
            title: 'Graduate Diploma of Management',
            href: '/courses/hr-management',
          },
        ],
      },
      {
        title: 'Project & Program',
        items: [
          {
            title: 'Certificate IV in Business',
            href: '/courses/business',
          },
          {
            title: 'Diploma of Business',
            href: '/courses/hospitality',
          },
          {
            title: 'Advanced Diploma of Business',
            href: '/courses/hr-management',
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
        items: [
          {
            title: 'Barista Course',
            href: '/courses/business',
          },
          {
            title: 'Classic French Cake Course',
            href: '/courses/hospitality',
          },
          {
            title: 'Wine Course',
            href: '/courses/hr-management',
          },
          {
            title: 'Sourdough and Focaccia Course',
            href: '/courses/hr-management',
          },
          {
            title: 'Fine Dining Dessert Plating Course',
            href: '/courses/hr-management',
          },
          {
            title: 'Classic French Pastries Course',
            href: '/courses/hr-management',
          },
          {
            title: 'Cocktail-Making and Mixology Course',
            href: '/courses/hr-management',
          },
          {
            title: 'French petit four Course (Macaroon)',
            href: '/courses/hr-management',
          },
          {
            title: 'Vegan and Vegetarian Course',
            href: '/courses/hr-management',
          },
          {
            title: 'Chocolate Class – Xmas',
            href: '/courses/hr-management',
          },
        ],
      },
    ],
  },
  {
    title: 'Study With Us',
    href: '/study-with-us',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];
