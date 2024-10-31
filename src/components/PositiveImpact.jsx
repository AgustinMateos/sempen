'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from "react-i18next";

export default function AboutUs() {
    const { t } = useTranslation();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const startingPosition = -250;

    return (
        <div className="relative overflow-hidden h-[50vh]  md:min-h-[796px]">
            <div
                className="w-full  bg-cover bg-center h-full flex flex-col items-center justify-between transition-transform duration-1000 ease-out relative"
                style={{
                    backgroundImage: `url('/OurMissionImg.svg')`,
                }}
            >
                {/* Contenedor de texto optimizado para móviles */}
                <div className="text-center text-white w-[90%] mt-[30px] max-w-[821px] sm:w-[80%] md:w-[60%] lg:w-[944px] flex items-center justify-center text-sm sm:text-base md:text-2xl lg:text-[32px] leading-tight font-medium tracking-widest p-2 md:h-[225px]">
                    <h4 className='font-archivo'>
                        {t('OurMissionText')}
                    </h4>
                </div>

                {/* Imagen Parallax a pantalla completa */}
                <Image
                    src="/sempenparallax.svg"
                    alt="Parallax Image"
                    layout="responsive"
                    width={1587}
                    height={60}
                    unoptimized={true}
                    className="absolute bottom-0 left-0 w-full h-auto"
                    style={{
                        bottom: `${startingPosition + scrollY * 0.2}px`,
                        transition: 'bottom 1s ease-out',
                    }}
                />
            </div>
        </div>
    );
}
