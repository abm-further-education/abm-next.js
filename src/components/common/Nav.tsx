'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useParams, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import MobileNav from './MobileNav';
import LanguageSwitcher from './LanguageSwitcher';
import { ChevronRight } from 'lucide-react';
import {
  cookeryMenu,
  hospitalityMenu,
  fitnessMenu,
  businessMenu,
  projectMenu,
  hrMenu,
  healthMenu,
  shortCourseMenu,
  MENU_STRUCTURE,
} from '@/lib';

const allMenus = [
  ...cookeryMenu,
  ...hospitalityMenu,
  ...fitnessMenu,
  ...businessMenu,
  ...projectMenu,
  ...hrMenu,
  ...healthMenu,
  ...shortCourseMenu,
];

function Nav() {
  const params = useParams();
  // const pathname = usePathname();
  const t = useTranslations('nav');
  const tStudy = useTranslations('studyWithUs');
  const tShortCourse = useTranslations('shortCoursesMenu');
  // const [isScrolled, setIsScrolled] = useState(false);
  const [subMenu, setSubMenu] = useState('');
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<{ title: string; href: string }[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const router = useRouter();

  // 특정 페이지에서 배경색을 항상 black으로 설정할 페이지들
  // const isSpecialPage =
  //   pathname.includes('/courses') ||
  //   pathname.includes('/abm-policies-procedures-and-forms') ||
  //   pathname.includes('checkout') ||
  //   pathname.includes('success');

  // menuList를 동적으로 생성하는 함수
  const createMenuList = () => {
    return MENU_STRUCTURE.map((section) => {
      if (section.titleKey === 'menu.contact') {
        return {
          title: t(section.titleKey),
          href: section.href,
        };
      }

      const subMenu = section.subMenu?.map((subSection) => {
        const items = subSection.items.map((item) => {
          // Study With Us 섹션의 items는 tStudy 번역 키를 사용
          if (section.titleKey === 'menu.studyWithUs') {
            // Timetable은 직접 제목을 사용
            if (item.title === 'timetable') {
              return {
                title: 'Timetable',
                href: item.href,
              };
            }
            // 다른 항목들은 tStudy 번역 키 사용
            return {
              title: tStudy(item.title),
              href: item.href,
            };
          }
          // Short Courses 섹션의 items는 tShortCourse 번역 키를 사용
          if (section.titleKey === 'menu.shortCourses') {
            return {
              title: tShortCourse(item?.titleKey || ''),
              href: item.href,
            };
          }
          // 다른 섹션은 그대로 사용
          return {
            title: item.title,
            href: item.href,
          };
        });

        return {
          title: t(subSection.titleKey),
          href: subSection.href,
          items,
        };
      });

      return {
        title: t(section.titleKey),
        href: section.href,
        subMenu,
      };
    });
  };

  const menuList = createMenuList();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 10) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    if (value.trim() === '') {
      setResults([]);
      setHighlightedIndex(-1);
      return;
    }
    const filtered = allMenus.filter((menu) =>
      menu.title.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered as { title: string; href: string }[]);
    setHighlightedIndex(filtered.length > 0 ? 0 : -1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (results.length === 0) return;
    if (e.key === 'ArrowDown') {
      setHighlightedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter' && highlightedIndex >= 0) {
      const cleanHref = results[highlightedIndex].href.replace(
        '/courses/',
        '/'
      );
      router.push(`/${params.locale}${cleanHref}`);
      setSearch('');
      setResults([]);
      setHighlightedIndex(-1);
    }
  };

  const handleResultClick = (href: string) => {
    setSearch('');
    setResults([]);
    setHighlightedIndex(-1);
    router.push(href);
  };

  return (
    <>
      <div className="bg-neutral-800 fixed p-16 top-0 w-full z-[800] flex flex-col lg:flex-row justify-between lg:px-80 font-[family-name:var(--font-montserrat)]">
        <div className="hidden lg:flex flex-col md:flex-row items-center text-sm md:text-base">
          <div className="text-white font-semibold hidden xl:block">
            {t('internationalStudent')}
          </div>
          <Link
            href="/files/ABM_Brochure_2025_outlined_v2_web.pdf"
            target="_blank"
            className="text-primary font-semibold underline ml-10"
          >
            {t('downloadGuide')}
          </Link>
        </div>
        <div
          className="flex items-center gap-10 md:gap-25 text-white font-semibold justify-end"
          onMouseEnter={() => setSubMenu('')}
        >
          <div className="hidden lg:flex gap-20">
            <Link href={`/${params.locale}/current-students`}>
              {t('currentStudents')}
            </Link>
            <Link
              href="https://www.jotform.com/app/abm-further-education/abm-agents"
              target="_blank"
            >
              {t('agentPortal')}
            </Link>
          </div>
          <div className="hidden lg:block w-1 h-20 bg-white mx-15" />
          <div className="flex items-center gap-20">
            <Link
              href="https://www.facebook.com/abmsydney/"
              target="_blank"
              className="transition-all duration-300 group"
            >
              <svg
                width="10"
                height="14"
                viewBox="0 0 7 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white group-hover:fill-primary transition-all duration-300"
              >
                <path d="M6.47619 4.45588H4.27044V3.02756C4.27044 2.49087 4.63047 2.3661 4.88404 2.3661C5.13704 2.3661 6.44071 2.3661 6.44071 2.3661V0.00797623L4.29698 0C1.91756 0 1.37607 1.75877 1.37607 2.88427V4.45617H0V6.88608H1.37607C1.37607 10.0042 1.37607 13.7619 1.37607 13.7619H4.27044C4.27044 13.7619 4.27044 9.96748 4.27044 6.88608H6.22377L6.47619 4.45588Z" />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/abmsydney/"
              target="_blank"
              className="transition-all duration-300 group"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white group-hover:fill-primary transition-all duration-300"
              >
                <path d="M8 0C5.829 0 5.556 0.009375 4.703 0.045C3.85 0.0825 3.269 0.208125 2.76 0.39375C2.22609 0.582018 1.74249 0.877337 1.343 1.25906C0.936076 1.63378 0.621107 2.0871 0.42 2.5875C0.222 3.06375 0.087 3.60937 0.048 4.40625C0.01 5.20781 0 5.46281 0 7.50094C0 9.53719 0.01 9.79219 0.048 10.5919C0.088 11.3906 0.222 11.9353 0.42 12.4125C0.625 12.9056 0.898 13.3237 1.343 13.7409C1.787 14.1581 2.233 14.415 2.759 14.6062C3.269 14.7919 3.849 14.9184 4.701 14.955C5.555 14.9906 5.827 15 8 15C10.173 15 10.444 14.9906 11.298 14.955C12.149 14.9175 12.732 14.7919 13.241 14.6062C13.7746 14.4179 14.2578 14.1226 14.657 13.7409C15.102 13.3237 15.375 12.9056 15.58 12.4125C15.777 11.9353 15.912 11.3906 15.952 10.5919C15.99 9.79219 16 9.53719 16 7.5C16 5.46281 15.99 5.20781 15.952 4.40719C15.912 3.60938 15.777 3.06375 15.58 2.5875C15.3789 2.08709 15.0639 1.63376 14.657 1.25906C14.2576 0.877196 13.774 0.581855 13.24 0.39375C12.73 0.208125 12.148 0.0815625 11.297 0.045C10.443 0.009375 10.172 0 7.998 0H8.001H8ZM7.283 1.35188H8.001C10.137 1.35188 10.39 1.35844 11.233 1.395C12.013 1.42781 12.437 1.55063 12.719 1.65281C13.092 1.78875 13.359 1.95187 13.639 2.21437C13.919 2.47687 14.092 2.72625 14.237 3.07688C14.347 3.34031 14.477 3.73781 14.512 4.46906C14.551 5.25938 14.559 5.49656 14.559 7.49813C14.559 9.49969 14.551 9.73781 14.512 10.5281C14.477 11.2594 14.346 11.6559 14.237 11.9203C14.1087 12.246 13.904 12.5404 13.638 12.7819C13.358 13.0444 13.092 13.2066 12.718 13.3425C12.438 13.4456 12.014 13.5675 11.233 13.6013C10.39 13.6369 10.137 13.6453 8.001 13.6453C5.865 13.6453 5.611 13.6369 4.768 13.6013C3.988 13.5675 3.565 13.4456 3.283 13.3425C2.9355 13.2224 2.62113 13.0309 2.363 12.7819C2.09675 12.54 1.89172 12.2453 1.763 11.9194C1.654 11.6559 1.523 11.2584 1.488 10.5272C1.45 9.73688 1.442 9.49969 1.442 7.49625C1.442 5.49375 1.45 5.2575 1.488 4.46719C1.524 3.73594 1.654 3.33844 1.764 3.07406C1.909 2.72438 2.083 2.47406 2.363 2.21156C2.643 1.94906 2.909 1.78688 3.283 1.65094C3.565 1.54781 3.988 1.42594 4.768 1.39219C5.506 1.36031 5.792 1.35094 7.283 1.35V1.35188ZM12.271 2.59687C12.1449 2.59687 12.0201 2.62015 11.9036 2.66538C11.7872 2.71061 11.6813 2.77691 11.5922 2.86048C11.503 2.94405 11.4323 3.04327 11.3841 3.15246C11.3358 3.26165 11.311 3.37869 11.311 3.49688C11.311 3.61506 11.3358 3.7321 11.3841 3.84129C11.4323 3.95048 11.503 4.0497 11.5922 4.13327C11.6813 4.21684 11.7872 4.28314 11.9036 4.32837C12.0201 4.3736 12.1449 4.39688 12.271 4.39688C12.5256 4.39688 12.7698 4.30205 12.9498 4.13327C13.1299 3.96449 13.231 3.73557 13.231 3.49688C13.231 3.25818 13.1299 3.02926 12.9498 2.86048C12.7698 2.6917 12.5256 2.59687 12.271 2.59687ZM8.001 3.64875C7.45607 3.64078 6.91489 3.73452 6.40898 3.92451C5.90306 4.1145 5.44251 4.39694 5.05415 4.7554C4.66579 5.11385 4.35736 5.54116 4.14684 6.01243C3.93632 6.48371 3.8279 6.98954 3.8279 7.50047C3.8279 8.0114 3.93632 8.51723 4.14684 8.98851C4.35736 9.45978 4.66579 9.88708 5.05415 10.2455C5.44251 10.604 5.90306 10.8864 6.40898 11.0764C6.91489 11.2664 7.45607 11.3602 8.001 11.3522C9.07954 11.3364 10.1082 10.9237 10.865 10.203C11.6217 9.48243 12.0459 8.51172 12.0459 7.50047C12.0459 6.48921 11.6217 5.51851 10.865 4.79789C10.1082 4.07727 9.07954 3.66453 8.001 3.64875ZM8.001 4.99969C8.70833 4.99969 9.38669 5.26311 9.88685 5.73201C10.387 6.20091 10.668 6.83688 10.668 7.5C10.668 8.16312 10.387 8.79909 9.88685 9.26799C9.38669 9.73689 8.70833 10.0003 8.001 10.0003C7.29367 10.0003 6.61531 9.73689 6.11515 9.26799C5.61499 8.79909 5.334 8.16312 5.334 7.5C5.334 6.83688 5.61499 6.20091 6.11515 5.73201C6.61531 5.26311 7.29367 4.99969 8.001 4.99969Z" />
              </svg>
            </Link>
            <Link
              href="https://www.youtube.com/@ABMsydney"
              target="_blank"
              className="transition-all duration-300 group"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white group-hover:fill-primary transition-all duration-300"
              >
                <path d="M19.582 2.186c-.23-.862-.908-1.54-1.77-1.77C16.254 0 10 0 10 0S3.746 0 2.188.416c-.862.23-1.54.908-1.77 1.77C0 3.746 0 7 0 7s0 3.254.418 4.814c.23.862.908 1.54 1.77 1.77C3.746 14 10 14 10 14s6.254 0 7.812-.416c.862-.23 1.54-.908 1.77-1.77C20 10.254 20 7 20 7s0-3.254-.418-4.814zM8 10V4l5.196 3L8 10z" />
              </svg>
            </Link>
            <Link
              href="https://www.tiktok.com/@abmsydney"
              target="_blank"
              className="transition-all duration-300 group"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white group-hover:fill-primary transition-all duration-300"
              >
                <path d="M19.321 5.562a5.121 5.121 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.246-1.985-1.246-3.197V.862h-3.068v15.298c0 .849-.443 1.628-1.137 2.063-.694.434-1.534.434-2.271 0-.737-.435-1.137-1.214-1.137-2.063 0-.849.4-1.628 1.137-2.063.694-.434 1.534-.434 2.271 0 .154.097.297.208.428.332v-3.234a5.85 5.85 0 0 0-1.82-.289c-3.234 0-5.857 2.623-5.857 5.857s2.623 5.857 5.857 5.857 5.857-2.623 5.857-5.857V8.367a9.298 9.298 0 0 0 5.411 1.703V6.902c-1.034 0-2.012-.354-2.774-.966a4.121 4.121 0 0 1-.572-.374z" />
              </svg>
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          className={cn(
            'bg-black shadow-md ',
            'fixed top-56 md:top-55 w-full h-76 z-[800] transition-all duration-500'
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
                <div className="font-bold uppercase">{t('findCourse')}</div>
                <input
                  type="text"
                  className="border py-8 px-10 mt-10"
                  placeholder={t('searchPlaceholder')}
                  value={search}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
                {search && results.length > 0 && (
                  <ul className="bg-primaryBk text-white mt-4 shadow-xl absolute z-80 w-300 max-h-100 overflow-y-auto">
                    {results.map((menu, idx) => (
                      <li
                        key={idx}
                        className={`px-8 py-4 hover:bg-primary cursor-pointer ${
                          highlightedIndex === idx ? 'bg-primary' : 'bg-black'
                        }`}
                        onMouseEnter={() => setHighlightedIndex(idx)}
                        onClick={() => {
                          const cleanHref = menu.href.replace('/courses/', '/');
                          handleResultClick(`/${params.locale}${cleanHref}`);
                        }}
                      >
                        {menu.title}
                      </li>
                    ))}
                  </ul>
                )}
                {search && results.length === 0 && (
                  <div className="bg-white text-black mt-2 rounded shadow-lg absolute z-50 w-300 px-4 py-2">
                    {t('noResults')}
                  </div>
                )}
              </div>
              <div
                className={cn(
                  ['Courses', '과정', 'Cursos'].includes(subMenu)
                    ? 'grid-cols-3'
                    : 'grid-cols-2',
                  'grid gap-x-40 gap-y-26'
                )}
              >
                {menuList
                  .find((item) => item.title === subMenu)
                  ?.subMenu?.map((menu) => {
                    return (
                      <div key={menu.title}>
                        <Link
                          href={
                            menu.href.startsWith('http')
                              ? menu.href
                              : `/${params.locale}/${menu.href}`
                          }
                          target={
                            menu.href.startsWith('http') ? '_blank' : undefined
                          }
                          rel={
                            menu.href.startsWith('http')
                              ? 'noopener noreferrer'
                              : undefined
                          }
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
                              className="text-[15px] my-2"
                              key={`${li.title}_${menu.title}_${li.href}`}
                            >
                              {li.href.startsWith('http') ? (
                                <Link
                                  href={li.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {li.title}
                                </Link>
                              ) : (
                                <Link href={`/${params.locale}/${li.href}`}>
                                  {li.title}
                                </Link>
                              )}
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
            `hidden fixed top-55 z-[900] lg:flex items-center justify-between px-16 md:px-80 text-white w-full transition-all duration-500`
          )}
        >
          <Link href="/" className="">
            <Image src="/abm_logo.png" alt="Logo" width={120} height={120} />
          </Link>
          <div className="flex items-center">
            {menuList.map((item) => (
              <Link
                onMouseEnter={() => {
                  // Contact 메뉴이거나 subMenu가 없는 경우 서브메뉴를 열지 않음
                  if (
                    item.title === 'Contact' ||
                    !item.subMenu ||
                    item.subMenu.length === 0
                  ) {
                    setSubMenu('');
                  } else {
                    setSubMenu(item.title);
                  }
                }}
                onClick={() => setSubMenu('')}
                key={item.title}
                href={
                  item.href.startsWith('http')
                    ? item.href
                    : `/${params.locale}/${item.href}`
                }
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  item.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
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
              href="https://form.jotform.com/ABMonlineforms/abm-further-education-application-f"
              className="border cursor-pointer hover:bg-white font-semibold hover:text-black font-[family-name:var(--font-montserrat)] px-20 py-10 transition-all"
            >
              {t('enrolNow')}
            </Link>
          </div>
        </header>
        <MobileNav />
      </div>
    </>
  );
}

export default Nav;
