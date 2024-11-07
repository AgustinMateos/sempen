'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '../../i18nConfig';
import Image from 'next/image';

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const languages = {
    en: 'English',
    es: 'Español',
    pt: 'Português',
  };

  // Pre-cargar imágenes al inicio
  useEffect(() => {
    const preloadImages = ['/iconotraduccion.svg', '/language.svg'];
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Detectar si está en mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Comprobar en la carga inicial
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChange = (newLocale) => {
    // Set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = ';expires=' + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    const newPath =
      currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault
        ? '/' + newLocale + currentPathname
        : currentPathname.replace(`/${currentLocale}`, `/${newLocale}`);

    router.push(newPath);
    router.refresh();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!isDropdownOpen)}
        className="bg-transparent text-[#F2F2F2] pl-4 pr-4 py-2 rounded-md flex items-center outline-none border-none"
      >
        {/* Mostrar icono según si está en mobile */}
        <Image
          src={isMobile ? "/iconotraduccion.svg" : "/language.svg"}
          alt="Language Icon"
          width={30}
          height={30}
          className="mr-2"
        />
        <span className="font-nunito">{currentLocale.toUpperCase()}</span>
        <svg
          className={`ml-2 w-4 h-4 transition-transform transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isDropdownOpen && (
        <ul className="absolute mt-2 bg-white rounded-md shadow-lg w-[109px]">
          {Object.entries(languages).map(([locale, language]) => (
            <li key={locale}>
              <button
                onClick={() => {
                  setDropdownOpen(false);
                  handleChange(locale);
                }}
                className="font-nunito block hover:rounded-[5px] px-4 py-2 text-gray-800 hover:bg-[#101820] hover:text-[#EDEDED] w-full text-left flex items-center"
              >
                {language}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
