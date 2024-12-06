'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LanguageChanger from "@/components/LanguageChanger";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeLink, setActiveLink] = useState('');
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsOpen(false);

        setTimeout(() => {
            setActiveLink('');
        }, 2000);
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 px-[1rem] md:px-10 text-white p-4 flex items-center justify-between transition-all duration-300 ease-in-out ${
                scrollPosition > 0 ? 'bg-[#101820]' : 'bg-transparent'
            }`}
        >
            {/* Logo */}
            <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                    <Image src="/logoSempen.webp" alt="Logo" width={124} height={30} />
                </Link>
            </div>

            {/* Links en desktop (visibles en xl hacia arriba) */}
            <div className="hidden xl:flex lg:w-[700px] lg:jus@tify-around mx-auto justify-center">
                {['AboutUs', 'WhoWeAre', 'SustainableFuels', 'OurProjects'].map((link, index) => (
                    <Link 
                        key={link}
                        href={`#${link}`} 
                        className={`navbar-link text-center font-jakarta transition-all duration-500 ${
                            index === 0 || index === 1 ? 'lg:w-[150px] xl:w-[150px]' : 
                            index === 3 ? 'lg:w-[180px] xl:w-[180px]' : 'lg:w-[260px] xl:w-[220px]'
                        } ${activeLink === link ? 'text-[#57B6B2]' : 'text-white'}`}
                        onClick={() => handleLinkClick(link)}
                    >
                        {t(`navbar${link}`)}
                    </Link>
                ))}
            </div>

            {/* Botón y Selector de Idioma en Desktop */}
            <div className="hidden xl:flex space-x-4 items-center">
            <a
        href="mailto:info@sempen.com?subject=Consulta desde la web&body=Hello!!"
        className="bg-[#EDEDED] text-[#101820] px-4 py-2 rounded font-jakarta transition-all duration-500"
        aria-label={t('navbarContactUs')}
    >
        {t('navbarContactUs')}
    </a>
                <LanguageChanger />
            </div>
            <div className="xl:hidden flex items-center">
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="text-white" 
                    aria-label={isOpen ? 'Close menu' : 'Open menu'} // Añadido el aria-label
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={
                                isOpen
                                    ? 'M6 18L18 6M6 6l12 12'
                                    : 'M4 6h16M4 12h16m-7 6h7'
                            }
                        />
                    </svg>
                </button>
            </div>

            <div className={`xl:hidden ${isOpen ? 'block' : 'hidden'} fixed top-0 left-0 w-full text-white z-50`}>
                <div className="flex items-center justify-between p-4 bg-[#101820]">
                    <Link href="/" className="flex items-center">
                        <Image src="/logoSempen.webp" alt="Logo Sempen" width={124} height={30} />
                    </Link>
                    <button 
                        onClick={() => setIsOpen(false)} 
                        className="text-white"
                        aria-label="Close menu" // Añadido el aria-label
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <div className="bg-[#EDEDED] text-[#101820]">
                    {['AboutUs', 'WhoWeAre', 'SustainableFuels', 'OurProjects'].map((link) => (
                        <Link 
                            key={link}
                            href={`#${link}`} 
                            className={`block font-jakarta px-4 py-2 transition-all duration-500 ${
                                activeLink === link ? 'text-[#57B6B2]' : 'text-[#101820]'
                            }`}
                            onClick={() => handleLinkClick(link)}
                        >
                            {t(`navbar${link}`)}
                        </Link>
                    ))}
                    <div className="block px-4 py-2 mt-4">
                    <a
                href="mailto:agustinrotondomateos@gmail.com?subject=Consulta desde la web&body=Hola, me gustaría recibir más información sobre sus servicios."
                className="bg-[#101820] font-jakarta text-[#EDEDED] w-[210px] py-2 rounded-[4px] mb-4 transition-all duration-500 block text-center"
                aria-label={t('navbarContactUs')}
            >
                {t('navbarContactUs')}
            </a>
                        <LanguageChanger />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
