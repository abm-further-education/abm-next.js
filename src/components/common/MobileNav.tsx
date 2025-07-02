import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { AlignJustify, ChevronDown, ChevronUp, X } from 'lucide-react';
import { useParams } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { AnimatePresence, easeOut, motion } from 'framer-motion';
import {
  businessMenu,
  cookeryMenu,
  fitnessMenu,
  hospitalityMenu,
  hrMenu,
  projectMenu,
  shortCourseMenu,
} from '@/lib/constants';

function MobileNav() {
  const params = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    const handleBodyScroll = () => {
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    handleBodyScroll();

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const DisclosureContainer = ({
    title,
    list,
  }: {
    title: string;
    list: { title: string; href: string }[];
  }) => {
    return (
      <Disclosure>
        {({ open }) => (
          <div>
            <DisclosureButton className="flex w-full text-lg items-center justify-between p-3 hover:underline">
              <span>{title}</span>
              {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </DisclosureButton>
            <AnimatePresence>
              {open && (
                <DisclosurePanel static as={Fragment}>
                  <motion.div
                    initial={{ opacity: 0, y: -24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{
                      duration: 0.2,
                      ease: easeOut,
                    }}
                    className="origin-top ml-10 flex flex-col gap-y-16 mt-10"
                  >
                    {list.map((item) => (
                      <Link
                        onClick={toggleMenu}
                        key={item.href}
                        className="ml-10 text-base block hover:underline"
                        href={item.href}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </motion.div>
                </DisclosurePanel>
              )}
            </AnimatePresence>
          </div>
        )}
      </Disclosure>
    );
  };

  return (
    <div
      className={cn(
        `fixed top-56 z-[999] lg:hidden flex items-center justify-between text-white p-16 w-full`
      )}
    >
      <Link href="/" className="" onClick={toggleMenu}>
        <Image
          src="/abm_logo.png"
          alt="Logo"
          width={120}
          height={120}
          className=""
        />
      </Link>
      <AlignJustify onClick={toggleMenu} />

      <div
        className={`fixed top-0 z-[999] right-0 h-full w-full p-40 shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <button
            onClick={toggleMenu}
            className="mt-2 absolute top-30 right-30 p-2 text-white focus:outline-none"
          >
            <X />
          </button>
        </div>
        <nav className="mt-4 overflow-auto h-full">
          <ul className="space-y-20 text-2xl">
            <li>
              <Link
                onClick={toggleMenu}
                href="/"
                className="block p-3 hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Disclosure>
                {({ open }) => (
                  <div>
                    <DisclosureButton className="flex w-full items-center justify-between p-3 hover:underline">
                      <span>Courses</span>
                      {open ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </DisclosureButton>
                    <AnimatePresence>
                      {open && (
                        <DisclosurePanel static as={Fragment}>
                          <motion.div
                            initial={{ opacity: 0, y: -24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -24 }}
                            transition={{ duration: 0.2, ease: easeOut }}
                            className="origin-top px-10 flex flex-col gap-y-16 mt-10"
                          >
                            <DisclosureContainer
                              title="Cookery"
                              list={cookeryMenu}
                            />
                            <DisclosureContainer
                              title="Hospitality"
                              list={hospitalityMenu}
                            />
                            <DisclosureContainer
                              title="Fitness & Sport"
                              list={fitnessMenu}
                            />
                            <DisclosureContainer
                              title="Business"
                              list={businessMenu}
                            />
                            <DisclosureContainer
                              title="Project & Program"
                              list={projectMenu}
                            />
                            <DisclosureContainer
                              title="Human Resource"
                              list={hrMenu}
                            />
                          </motion.div>
                        </DisclosurePanel>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </Disclosure>
            </li>

            <li>
              <Disclosure>
                {({ open }) => (
                  <div>
                    <DisclosureButton className="flex w-full items-center justify-between p-3 hover:underline">
                      <span>Short Courses</span>
                      {open ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </DisclosureButton>
                    <AnimatePresence>
                      {open && (
                        <DisclosurePanel static as={Fragment}>
                          <motion.div
                            initial={{ opacity: 0, y: -24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -24 }}
                            transition={{ duration: 0.2, ease: easeOut }}
                            className="origin-top flex flex-col gap-y-16 mt-10"
                          >
                            {shortCourseMenu.map((item) => (
                              <Link
                                onClick={toggleMenu}
                                key={item.href}
                                className="ml-10 text-base block hover:underline"
                                href={item.href}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </motion.div>
                        </DisclosurePanel>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </Disclosure>
            </li>
            <li>
              <Disclosure>
                {({ open }) => (
                  <div>
                    <DisclosureButton className="flex w-full items-center justify-between p-3 hover:underline">
                      <span>Study With Us</span>
                      {open ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </DisclosureButton>
                    <AnimatePresence>
                      {open && (
                        <DisclosurePanel static as={Fragment}>
                          <motion.div
                            initial={{ opacity: 0, y: -24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -24 }}
                            transition={{ duration: 0.2, ease: easeOut }}
                            className="origin-top flex flex-col gap-y-16 mt-10"
                          >
                            {shortCourseMenu.map((item) => (
                              <Link
                                onClick={toggleMenu}
                                key={item.href}
                                className="ml-10 text-base block hover:underline"
                                href={item.href}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </motion.div>
                        </DisclosurePanel>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </Disclosure>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                href={`/${params.locale}/contact`}
                className="block p-3 hover:underline"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                href="https://form.jotform.com/ABMonlineforms/new-abm-enroment-application-form"
                className="block p-3 hover:underline"
              >
                Enrol Now
              </Link>
            </li>
          </ul>
          <div className="absolute bottom-40 left-40">
            <div className="mb-20 text-xl">
              <LanguageSwitcher />
            </div>
            <Image src="/abm_logo.png" alt="Logo" width={120} height={120} />
          </div>
        </nav>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-full bg-neutral-900/70 backdrop-blur-sm z-0 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />
    </div>
  );
}

export default MobileNav;
