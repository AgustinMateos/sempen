import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef } from "react";

export default function WhoWeAre() {
    const { t } = useTranslation();
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

    return (
        <div
            id="WhoWeAre"
            ref={sectionRef}
            className="h-[125vh] md:h-[130vh] lg:h-[150vh] xl:h-[100vh]  flex items-center md:justify-end bg-[#101820]"
        >
            <div className="h-[120vh] xl:h-[90vh] ml-[24px] md:m-[0px] flex flex-col justify-evenly text-white  2xl:max-w-[1565px] w-full">
                <div className="md:flex md:flex-col md:items-end">
                    <div className="h-[80px] md:h-[100px] md:w-[90%] xl:w-[95%]  flex items-end justify-end">
                        {/* Título animado letra por letra */}
                        <h3 className="text-[#57B6B2] font-archivo text-[40px] md:text-[60px] xl:text-[80px]  flex flex-wrap whitespace-nowrap overflow-hidden">
                            {t("WhoWeAreTitle").split(" ").map((word, index) => (
                                <span
                                    key={index}
                                    ref={(el) => (titleRef.current[index] = el)}
                                    style={{
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible
                                            ? "translateY(0)"
                                            : "translateY(100%)",
                                        margin: word === " " ? "0 20px" : "0 10px",
                                        transition: `opacity 0.5s ease ${index * 50}ms, transform 0.5s ease ${index * 50}ms`,
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
                                borderImageSource:
                                    "linear-gradient(90deg, #005D63 45.5%, #101820 100%)",
                                borderImageSlice: 1,
                            }}
                        />
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row items-center justify-between w-full ">
                    <div className="md:flex md:w-full md:justify-end">
                        <div className="w-full md:w-[87%] xl:w-[86%] pr-[20px] md:mr-[10px] flex flex-col justify-around leading-8 tracking-tight text-left mb-4">
                            {/* Efecto de aparición palabra por palabra */}
                            <p className="text-[16px] xl:text-[24px] font-extralight md:w-[600px] lg:w-[80%] xl:w-[100%]">
                                {t("WhoWeAreP")
                                    .split(" ")
                                    .map((word, index) => (
                                        <span
                                            key={index}
                                            className={`inline transition-opacity font-archivo duration-500 ${
                                                isVisible ? "opacity-100" : "opacity-30"
                                            }`}
                                            style={{
                                                transitionDelay: `${index * 200}ms`,
                                            }}
                                        >
                                            {word}
                                            {index <
                                                t("WhoWeAreP").split(" ").length - 1 &&
                                                " "}
                                        </span>
                                    ))}
                                <strong className="font-archivo font-bold text-[16px] xl:text-[24px] ">
                                    {t("WhoWeArePstrong")
                                        .split(" ")
                                        .map((word, index) => (
                                            <span
                                                key={index}
                                                className={`inline transition-opacity font-archivo duration-500 ${
                                                    isVisible
                                                        ? "opacity-100"
                                                        : "opacity-30"
                                                }`}
                                                style={{
                                                    transitionDelay: `${
                                                        (t("WhoWeAreP").split(" ").length +
                                                            index) *
                                                        200
                                                    }ms`,
                                                }}
                                            >
                                                {word}
                                                {index <
                                                    t("WhoWeArePstrong").split(" ").length -
                                                        1 &&
                                                    " "}
                                            </span>
                                        ))}
                                </strong>
                            </p>
                            <p className="font-archivo text-[16px] xl:text-[24px]  font-extralight mt-4 md:w-[600px] lg:w-[80%] xl:w-[100%] ">
                                {t("WhoWeArePsecond")
                                    .split(" ")
                                    .map((word, index) => (
                                        <span
                                            key={index}
                                            className={`inline transition-opacity font-archivo duration-500 ${
                                                isVisible ? "opacity-100" : "opacity-30"
                                            }`}
                                            style={{
                                                transitionDelay: `${
                                                    (t("WhoWeAreP").split(" ").length +
                                                        t("WhoWeArePstrong").split(" ").length +
                                                        index) *
                                                    200
                                                }ms`,
                                            }}
                                        >
                                            {word}
                                            {index <
                                                t("WhoWeArePsecond").split(" ").length - 1 &&
                                                " "}
                                        </span>
                                    ))}
                            </p>
                            <p className="text-[16px] xl:text-[24px]  font-archivo md:w-[600px] lg:w-[80%] xl:w-[100%]  font-extralight mt-4">
                                {t("WhoWeArePThird")
                                    .split(" ")
                                    .map((word, index) => (
                                        <span
                                            key={index}
                                            className={`inline transition-opacity font-archivo duration-500 ${
                                                isVisible ? "opacity-100" : "opacity-30"
                                            }`}
                                            style={{
                                                transitionDelay: `${
                                                    (t("WhoWeAreP").split(" ").length +
                                                        t("WhoWeArePstrong")
                                                            .split(" ")
                                                            .length +
                                                        t("WhoWeArePsecond")
                                                            .split(" ")
                                                            .length +
                                                        index) *
                                                    200
                                                }ms`,
                                            }}
                                        >
                                            {word}
                                            {index <
                                                t("WhoWeArePThird").split(" ").length - 1 &&
                                                " "}
                                        </span>
                                    ))}
                                <strong className="font-bold font-archivo text-[16px] xl:text-[24px] ">
                                    {t("WhoWeArePThirdStrong")
                                        .split(" ")
                                        .map((word, index) => (
                                            <span
                                                key={index}
                                                className={`inline transition-opacity font-archivo duration-500 ${
                                                    isVisible
                                                        ? "opacity-100"
                                                        : "opacity-30"
                                                }`}
                                                style={{
                                                    transitionDelay: `${
                                                        (t("WhoWeAreP").split(" ").length +
                                                            t("WhoWeArePstrong")
                                                                .split(" ")
                                                                .length +
                                                            t("WhoWeArePsecond")
                                                                .split(" ")
                                                                .length +
                                                            t("WhoWeArePThird")
                                                                .split(" ")
                                                                .length +
                                                            index) *
                                                        200
                                                    }ms`,
                                                }}
                                            >
                                                {word}
                                                {index <
                                                    t("WhoWeArePThirdStrong")
                                                        .split(" ")
                                                        .length -
                                                        1 &&
                                                    " "}
                                            </span>
                                        ))}
                                </strong>
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex  justify-center md:justify-end">
                        <Image
                            src="/WhoWeAre.svg"
                            alt="Imagen"
                            width={766}
                            height={250}
                            className="w-full md:w-[88%] h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
