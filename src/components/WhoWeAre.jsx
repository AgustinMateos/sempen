import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef } from "react";

export default function WhoWeAre() {
    const { t } = useTranslation();
    const [allTextSmall, setAllTextSmall] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const titleRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => setAllTextSmall(true), 16000);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    return (
        <div
            id="WhoWeAre"
            ref={sectionRef}
            className="h-[150vh] md:h-[760px]  flex items-center justify-end bg-[#101820]"
        >
            <div className="h-[120vh] m-[20px] md:m-[0px] md:h-[550px] flex flex-col justify-evenly md:justify-between text-white max-w-[1330px] 2xl:max-w-[1565px] w-full px-4 md:px-0">

                <div className="h-[80px] md:h-[100px] flex items-end">
                    {/* Título animado letra por letra */}
                    <h3 className="text-[#57B6B2] font-archivo text-[40px] md:text-[60px] lg:text-[80px] flex flex-wrap whitespace-nowrap overflow-hidden">
    {t('WhoWeAreTitle').split(" ").map((word, index) => (
        <span
            key={index}
            ref={(el) => (titleRef.current[index] = el)}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
                margin: word === " " ? "0 20px" : "0 10px", // Aquí agregas un margen mayor entre las palabras
                transition: `opacity 0.5s ease ${index * 50}ms, transform 0.5s ease ${index * 50}ms`
            }}
        >
            {word}
        </span>
    ))}
</h3>


                    {/* Línea decorativa ajustada automáticamente */}
                    <div
                        className="flex-1 h-0 border-t-[2px] ml-4 md:mb-[25px]"
                        style={{
                            borderImageSource: 'linear-gradient(90deg, #005D63 45.5%, #101820 100%)',
                            borderImageSlice: 1,
                        }}
                    />
                </div>
                <div className="flex flex-col md:flex-col lg:flex-row items-center md:items-start justify-between w-full">
                    <div className="w-full md:w-[557px] flex flex-col justify-around leading-8 tracking-tight text-left mb-4 md:mb-0">
                        {/* Efecto de aparición palabra por palabra en WhoWeAreP */}
                        <p className="text-[16px] md:text-[24px] font-extralight">
                            {t('WhoWeAreP').split(" ").map((word, index) => (
                                <span
                                    key={index}
                                    className={`inline transition-opacity font-archivo duration-500 ${isVisible ? 'opacity-100' : 'opacity-30'}`}
                                    style={{ transitionDelay: `${index * 200}ms` }}
                                >
                                    {word}
                                    {index < t('WhoWeAreP').split(" ").length - 1 && ' '}
                                </span>
                            ))}
                            <strong className={`font-archivo font-bold ${allTextSmall ? 'text-[16px] md:text-[24px]' : 'text-[20px] md:text-[28px]'}`}>
                                {t('WhoWeArePstrong').split(" ").map((word, index) => (
                                    <span
                                        key={index}
                                        className={`inline transition-opacity font-archivo duration-500 ${isVisible ? 'opacity-100' : 'opacity-30'}`}
                                        style={{ transitionDelay: `${(t('WhoWeAreP').split(" ").length + index) * 200}ms` }} // Ajuste para la duración
                                    >
                                        {word}
                                        {index < t('WhoWeArePstrong').split(" ").length - 1 && ' '}
                                    </span>
                                ))}
                            </strong>
                        </p>
                        <p className="font-archivo text-[16px] md:text-[24px] font-extralight mt-4">
                            {t('WhoWeArePsecond').split(" ").map((word, index) => (
                                <span
                                    key={index}
                                    className={`inline transition-opacity font-archivo duration-500 ${isVisible ? 'opacity-100' : 'opacity-30'}`}
                                    style={{ transitionDelay: `${(t('WhoWeAreP').split(" ").length + t('WhoWeArePstrong').split(" ").length + index) * 200}ms` }} // Ajuste para la duración
                                >
                                    {word}
                                    {index < t('WhoWeArePsecond').split(" ").length - 1 && ' '}
                                </span>
                            ))}
                        </p>
                        <p className="text-[16px] font-archivo md:text-[24px] font-extralight mt-4">
                            {t('WhoWeArePThird').split(" ").map((word, index) => (
                                <span
                                    key={index}
                                    className={`inline transition-opacity font-archivo duration-500 ${isVisible ? 'opacity-100' : 'opacity-30'}`}
                                    style={{ transitionDelay: `${(t('WhoWeAreP').split(" ").length + t('WhoWeArePstrong').split(" ").length + t('WhoWeArePsecond').split(" ").length + index) * 200}ms` }} // Ajuste para la duración
                                >
                                    {word}
                                    {index < t('WhoWeArePThird').split(" ").length - 1 && ' '}
                                </span>
                            ))}
                            <strong className={`font-bold font-archivo ${allTextSmall ? 'text-[16px] md:text-[24px]' : 'text-[20px] md:text-[28px]'}`}>
                                {t('WhoWeArePThirdStrong').split(" ").map((word, index) => (
                                    <span
                                        key={index}
                                        className={`inline transition-opacity font-archivo duration-500 ${isVisible ? 'opacity-100' : 'opacity-30'}`}
                                        style={{ transitionDelay: `${(t('WhoWeAreP').split(" ").length + t('WhoWeArePstrong').split(" ").length + t('WhoWeArePsecond').split(" ").length + t('WhoWeArePThird').split(" ").length + index) * 200}ms` }} // Ajuste para la duración
                                    >
                                        {word}
                                        {index < t('WhoWeArePThirdStrong').split(" ").length - 1 && ' '}
                                    </span>
                                ))}
                            </strong>
                        </p>
                    </div>
                    <div className="w-full md:w-auto flex justify-center md:justify-end">
                        <Image
                            src="/WhoWeAre.svg"
                            alt="Imagen"
                            width={400}
                            height={250}
                            className="w-full md:w-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
