'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LanguageChanger from "@/components/LanguageChanger";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeLink, setActiveLink] = useState(''); // Estado para el enlace activo
    const { t } = useTranslation();

    // Manejar el cambio de color del navbar según el scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Función para manejar el clic en un enlace
    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsOpen(false); // Cierra el menú móvil al hacer clic

        // Restablecer el enlace activo después de un tiempo
        setTimeout(() => {
            setActiveLink(''); // Vuelve a su color normal
        }, 2000); // Cambia el tiempo según tus necesidades
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 px-20 text-white p-4 flex items-center justify-between transition-all duration-300 ease-in-out ${
                scrollPosition > 0 ? 'bg-[#101820]' : 'bg-transparent'
            }`}
        >
            {/* Logo */}
            <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                    <Image src="/logoSempen.svg" alt="Logo" width={124} height={30} />
                </Link>
            </div>

            {/* Links */}
            <div className="hidden md:flex space-x-4">
                <Link 
                    href="#WhatWeDo" 
                    className={`navbar-link ${activeLink === 'WhatWeDo' ? 'text-[#57B6B2]' : ''}`}
                    onClick={() => handleLinkClick('WhatWeDo')}
                >
                    {t('whatWeDoNavbar')}
                </Link>
                <Link 
                    href="#SustainableFuels" 
                    className={`navbar-link ${activeLink === 'SustainableFuels' ? 'text-[#57B6B2]' : ''}`}
                    onClick={() => handleLinkClick('SustainableFuels')}
                >
                    {t('WhoWeAreNavbar')}
                </Link>
                <Link 
                    href="/link3" 
                    className={`navbar-link ${activeLink === 'Projects' ? 'text-[#57B6B2]' : ''}`}
                    onClick={() => handleLinkClick('Projects')}
                >
                    {t('ProjectsNavbar')}
                </Link>
                <Link 
                    href="/link4" 
                    className={`navbar-link ${activeLink === 'WhoWeAre' ? 'text-[#57B6B2]' : ''}`}
                    onClick={() => handleLinkClick('WhoWeAre')}
                >
                    {t('WhoWeAreNavbar')}
                </Link>
            </div>

            {/* Button y Selector de Idioma en Desktop */}
            <div className="hidden md:flex space-x-4 items-center">
                <button className="bg-[#EDEDED] text-[#101820] px-4 py-2 rounded">
                    Contact Us
                </button>
                <LanguageChanger />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white">
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

            {/* Mobile menu */}
            <div
                className={`md:hidden ${isOpen ? 'block' : 'hidden'} fixed top-0 left-0 w-full bg-[#101820] text-white z-50`}
            >
                {/* Logo and close button in mobile menu */}
                <div className="flex items-center justify-between p-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image src="/logoSempen.svg" alt="Logo" width={124} height={30} />
                    </Link>

                    {/* Close button */}
                    <button onClick={() => setIsOpen(false)} className="text-white">
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

                {/* Menu items */}
                <Link 
                    href="#WhatWeDo" 
                    className={`block px-4 py-2 hover:bg-gray-700 ${activeLink === 'WhatWeDo' ? 'text-[#57B6B2]' : ''}`}
                    onClick={() => handleLinkClick('WhatWeDo')}
                >
                    {t('whatWeDoNavbar')}
                </Link>
                <Link 
                    href="#SustainableFuels" 
                    className={`block px-4 py-2 hover:bg-gray-700 ${activeLink === 'SustainableFuels' ? 'text-[#57B6B2]' : ''}`}
                    onClick={() => handleLinkClick('SustainableFuels')}
                >
                    {t('SustainableFuelsNavbar')}
                </Link>
                <Link 
                    href="/link3" 
                    className={`block px-4 py-2 hover:bg-gray-700 ${activeLink === 'Projects' ? 'text-[#57B6B2]' : ''}`}
                    onClick={() => handleLinkClick('Projects')}
                >
                    {t('ProjectsNavbar')}
                </Link>
                <Link 
                    href="/link4" 
                    className={`block px-4 py-2 hover:bg-gray-700 ${activeLink === 'WhoWeAre' ? 'text-[#57B6B2]' : ''}`}
                    onClick={() => handleLinkClick('WhoWeAre')}
                >
                    {t('WhoWeAreNavbar')}
                </Link>
                {/* Contact Us button y LanguageChanger en Mobile */}
                <div className="block px-4 py-2 mt-4">
                    <button className="bg-[#EDEDED] text-[#101820] w-full py-2 rounded mb-4">
                        Contact Us
                    </button>
                    <LanguageChanger />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
