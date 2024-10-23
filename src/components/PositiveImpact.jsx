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
        <div className="min-h-screen md:min-h-[696px] relative overflow-hidden">
          
            <div
                className="w-full bg-cover bg-center min-h-screen md:min-h-[696px] flex justify-between flex-col items-center transition-transform duration-1000 ease-out relative"
                style={{
                    backgroundImage: ` url('/OurMissionImg.svg')`
                }}
            >
                <div className="h-[225px] text-[#FFFFFF] w-[944px] flex items-center text-center text-[32px] leading-[40px] font-medium tracking-widest">
                    <h4>
                        {t('OurMissionText')}
                    </h4>
                </div>

             
                <Image
                    src="/sempenparallax.svg"
                    alt="Parallax Image"
                    width={1587}
                    height={60}
                    unoptimized={true}
                    className="absolute"
                    style={{
                        bottom: `${startingPosition + scrollY * 0.2}px`, 
                        left: '50%',
                        transform: 'translateX(-50%)',
                        transition: 'bottom 1s ease-out',
                    }}
                />
            </div>
        </div>
    );
}
