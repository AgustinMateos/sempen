import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef } from "react";

export default function WhoWeAre() {
    const { t } = useTranslation();
    const [allTextSmall, setAllTextSmall] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

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
            const timer = setTimeout(() => setAllTextSmall(true), 5000);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    return (
        <div
            id="WhoWeAre"
            ref={sectionRef}
            className="h-screen md:h-[760px] flex items-center justify-end bg-[#101820]"
        >
            <div className="h-[80%] md:h-[550px] flex flex-col justify-between text-white max-w-[1330px] w-full px-4 md:px-0">
                <div className="h-[80px] md:h-[100px]">
                    <h3 className="text-[#57B6B2] font-archivo text-[40px] md:text-[60px] lg:text-[80px]">
                        {t('WhoWeAreTitle')}
                    </h3>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full">
                    <div className="w-full md:w-[557px] flex flex-col justify-around leading-8 tracking-tight text-left mb-4 md:mb-0">
                        <p className="text-[16px] md:text-[24px] font-extralight">
                            {t('WhoWeAreP')}
                            <strong className={`font-archivo font-bold ${allTextSmall ? 'text-[16px] md:text-[24px]' : 'text-[20px] md:text-[28px]'}`}>
                                {t('WhoWeArePstrong')}
                            </strong>
                        </p>
                        <p className=" font-archivotext-[16px] md:text-[24px] font-extralight mt-4">
                            {t('WhoWeArePsecond')}
                        </p>
                        <p className="text-[16px] font-archivo md:text-[24px] font-extralight mt-4">
                            {t('WhoWeArePThird')}
                            <strong className={`font-bold font-archivo ${allTextSmall ? 'text-[16px] md:text-[24px]' : 'text-[20px] md:text-[28px]'}`}>
                                {t('WhoWeArePThirdStrong')}
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
