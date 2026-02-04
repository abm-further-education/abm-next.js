'use client';

import React from 'react';
import Image from 'next/image';
import { Link as Linki18n } from '../../../i18n/routing';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { useParams } from 'next/navigation';

const multilingual = ['en', 'kr', 'sp', 'pt', 'jp', 'tl', 'zh', 'id'];

export const languageFlags: { [key: string]: string } = {
  en: '/flag/australia.png',
  kr: '/flag/south-korea.png',
  jp: '/flag/japan.png',
  sp: '/flag/spain.png',
  pt: '/flag/brazil.png',
  tl: '/flag/philippines.png',
  zh: '/flag/china.png',
  id: '/flag/indonesia.png',
};

const LanguageSwitcher = () => {
  const params = useParams();

  return (
    <div>
      <Popover className="relative">
        <PopoverButton className="text-white hover:text-primary transition-colors duration-300 font-semibold cursor-pointer">
          {Array.isArray(params.locale)
            ? params.locale[0].toUpperCase()
            : params.locale?.toUpperCase()}
        </PopoverButton>
        <PopoverPanel
          anchor="bottom"
          className="z-[999] flex flex-col bg-neutral-800 text-white p-16 gap-2 rounded-md"
        >
          {multilingual.map((lang) => (
            <Linki18n
              href="/"
              locale={lang}
              className="hover:text-primary transition-colors duration-300 flex items-center gap-5"
              key={lang}
            >
              <Image
                src={languageFlags[lang]}
                alt={`${lang} flag`}
                width={20}
                height={15}
                className="object-contain"
              />
              <span>{lang.toUpperCase()}</span>
            </Linki18n>
          ))}
        </PopoverPanel>
      </Popover>
    </div>
  );
};

export default LanguageSwitcher;
