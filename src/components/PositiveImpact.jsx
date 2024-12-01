import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useTranslation } from "react-i18next";

export default function PositiveImpact() {
    const { t } = useTranslation();
    const OurMisionText = t('OurMissionText');
    const [scrollY, setScrollY] = useState(0);
    const [visible, setVisible] = useState(false); // Estado para la visibilidad del texto
    const [visibleMission, setVisibleMission] = useState(false); // Estado para la visibilidad del texto de 'Our Mission'
    const aboutUsRef = useRef(null); // Referencia del contenedor
    const missionRef = useRef(null); // Referencia para el texto de 'Our Mission'

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

   
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisibleMission(true);  // Activa la visibilidad para 'Our Mission'
                    observer.disconnect(); 
                }
            });
        });

        if (missionRef.current) {
            observer.observe(missionRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="relative overflow-hidden" ref={aboutUsRef}>
            <div
                className="overflow-hidden w-full bg-center h-[100vh] sm:h-[120vh] md:h-[140vh] lg:h-[160vh] xl:h-[135vh] 2xl:h-[100vh] flex flex-col items-center justify-between transition-transform duration-1000 ease-out relative"
                style={{
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",
                    backgroundImage: `url('/OurMissionImg.webp')`,
                }}
            >
                {/* Texto de 'Our Mission' */}
                <div 
                    ref={missionRef} 
                    className="text-[#FFFFFF] flex items-center text-center h-[340px] lg:h-[380px] w-[90%] sm:w-[80%] md:w-[90%] lg:w-[85%] text-[30px] md:text-[32px] lg:text-[32px]"
                >
                    <h4 className="font-archivo flex flex-wrap justify-center text-[22px] sm:text-[26px] md:text-[30px] lg:text-[40px]  xl:text-[40px]">
                        {OurMisionText.split(" ").map((word, index) => (
                            <span
                                key={index}
                                className={`inline transition-opacity font-archivo duration-500 ${visibleMission ? 'opacity-100' : 'opacity-30'} mr-2.5`} // Cambia la visibilidad según el estado
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                {word}
                            </span>
                        ))}
                    </h4>
                </div>

                {/* Imagen Parallax */}
                <Image
                    src="/sempenparallax.webp"
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
