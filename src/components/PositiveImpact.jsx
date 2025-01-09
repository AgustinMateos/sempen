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
                className="overflow-hidden w-full bg-center h-[50vh] sm:h-[50vh] md:h-[50vh] lg:h-[70vh] xl:h-[100vh] 2xl:h-[100vh] flex flex-col items-center justify-between transition-transform duration-1000 ease-out relative"
                style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundImage: `linear-gradient(0deg, rgba(16, 24, 32, 0) 20%, rgba(16, 24, 32, 0.6) 59.37%, rgba(16, 24, 32, 0.8) 70.4%, rgba(16, 24, 32, 0.9) 81.03%, #101820 91.93%), linear-gradient(180deg, rgba(237, 237, 237, 0) 56%, #EDEDED 100%), url('/nubes2.webp')`,

                }}
            >

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
