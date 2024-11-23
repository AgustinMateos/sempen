'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useTranslation } from "react-i18next";

export default function PositiveImpact() {
    const { t } = useTranslation();
    const OurMisionText = t('OurMissionText');
    const [scrollY, setScrollY] = useState(0);
    const [visible, setVisible] = useState(false); // Estado para la visibilidad del texto
    const aboutUsRef = useRef(null); // Referencia del contenedor
    const titleRef = useRef([]); // Referencia para las palabras del título

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

    // IntersectionObserver para detectar cuando el contenedor entra en vista
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect(); // Deja de observar una vez sea visible
                }
            });
        });

        if (aboutUsRef.current) {
            observer.observe(aboutUsRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="relative overflow-hidden h-full  " ref={aboutUsRef}>
            <div
                className=" overflow-hidden w-full bg-cover bg-center h-[90vh]  sm:h-[80vh] md:h-[100vh] lg:h-[120vh] xl:h-[120vh] 2xl:h-[100vh]  flex flex-col items-center justify-between transition-transform duration-1000 ease-out relative "
                style={{
                    backgroundImage: `url('/OurMissionImg.svg')`,
                }}
            >
                {/* Contenedor de texto optimizado para móviles */}
                <div className="  text-[#FFFFFF] flex items-center text-center h-[330px] w-[90%] sm:w-[80%] md:w-[90%] lg:w-[85%]   text-[30px] md:text-[32px] lg:text-[32px]">
                    <h4 className="font-archivo flex flex-wrap justify-center text-[22px] md:text-[26px] xl:text-[30px] " >
                        {OurMisionText.split(" ").map((word, index) => (
                            <span
                                key={index}
                                className={`inline transition-opacity font-archivo  duration-500 ${visible ? 'opacity-100' : 'opacity-30'} mr-2.5`} // Cambia a mx-3 o mx-4
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                {word}
                            </span>
                        ))}
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
