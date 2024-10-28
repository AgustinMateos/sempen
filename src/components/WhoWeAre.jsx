import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef } from "react";

export default function WhoWeAre() {
    const { t } = useTranslation();
    const [allTextSmall, setAllTextSmall] = useState(false); // Controla el cambio de tamaño de fuente
    const [isVisible, setIsVisible] = useState(false); // Controla si la sección es visible
    const sectionRef = useRef(null); // Referencia al contenedor de la sección

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true); // Activa cuando la sección está en vista
                    }
                });
            },
            { threshold: 0.5 } // Inicia el efecto cuando el 50% de la sección es visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current); // Observa el contenedor de la sección
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current); // Limpia el observer al desmontar
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => setAllTextSmall(true), 5000); // Inicia el temporizador cuando la sección es visible
            return () => clearTimeout(timer); // Limpia el temporizador al desmontar o al cambiar de sección
        }
    }, [isVisible]);

    return (
        <div
            id='SustainableFuels'
            ref={sectionRef} // Asocia la referencia
            className="h-screen md:h-[760px] justify-end flex items-center w-full bg-[#101820]"
        >
            <div className="h-[550px] flex flex-col justify-between text-[white]">
                <div className="h-[100px]">
                    <h3 className="text-[#57B6B2] text-[80px]">{t('WhoWeAreTitle')}</h3>
                </div>
                <div className="w-full flex justify-end">
                    <div className="flex w-[1330px] justify-between">
                        <div className="w-[557px] flex flex-col justify-around leading-8 tracking-tight text-left">
                            <p className="text-[24px] font-extralight">
                                {t('WhoWeAreP')}
                                <strong className={`font-bold ${allTextSmall ? 'text-[24px]' : 'text-[28px]'}`}>
                                    {t('WhoWeArePstrong')}
                                </strong>
                            </p>
                            <br />
                            <p className="text-[24px] font-extralight">
                                {t('WhoWeArePsecond')}
                            </p>
                            <br />
                            <p className="text-[24px] font-extralight">
                                {t('WhoWeArePThird')}
                                <strong className={`font-bold ${allTextSmall ? 'text-[24px]' : 'text-[28px]'}`}>
                                    {t('WhoWeArePThirdStrong')}
                                </strong>
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/WhoWeAre.svg"
                                alt="Imagen"
                                width={693}
                                height={393}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
