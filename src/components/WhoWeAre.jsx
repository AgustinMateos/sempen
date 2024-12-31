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
            { threshold: 0.3 }
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
        className="h-auto   scroll-mt-[60px] sm:scroll-mt-[30px] xl:scroll-mt-[40px]  flex items-center md:justify-end bg-[#101820]"
    >
            <div className=" ml-[24px] md:m-[0px] flex flex-col justify-center text-white min-h-[65vh] md:min-h-[85vh] md:justify-around  lg:min-h-[80vh] xl:min-h-[85vh] lg:justify-evenly  w-full">
                <div className="md:flex md:flex-col md:items-end h-auto 2xl:justify-center lg:h-auto lg:justify-center 2xl:h-[190px]">
                    <div className="h-auto md:h-[100px] md:w-[90%] xl:w-[95%] flex items-end justify-end">
                        {/* Título animado letra por letra */}
                        <h3 id="WhoWeAre" className="text-[#57B6B2]  font-archivo text-[40px] md:text-[60px] xl:text-[80px] flex flex-wrap whitespace-nowrap overflow-hidden">
                            {t("WhoWeAreTitle").split(" ").map((word, index) => (
                                <span
                                    key={index}
                                    ref={(el) => (titleRef.current[index] = el)}
                                    style={{
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible ? "translateY(0)" : "translateY(100%)",
                                        margin: index === 0 ? "0" : "0 10px", 
                                        transition: `opacity 0.6s ease ${index * 90}ms, transform 0.6s ease ${index * 90}ms`,
                                    }}
                                >
                                    {word}
                                </span>
                            ))}
                        </h3>

                        {/* Línea decorativa ajustada automáticamente */}
                        <div
                            className="flex-1 h-0 border-t-[2px] ml-4 md:mb-[25px] mb-[15px]"
                            style={{
                                borderImageSource: "linear-gradient(90deg, #005D63 45.5%, #101820 100%)",
                                borderImageSlice: 1,
                            }}
                        />
                    </div>
                </div>


                <div className="flex flex-col xl:flex-row items-center xl:justify-between w-full h-auto  justify-around  ">
                    <div className="md:flex md:w-full md:justify-end">
                        <div className="w-full md:w-[87%] xl:w-[86%] pr-[20px] md:mr-[10px] flex flex-col justify-around leading-8 tracking-tight text-left mb-4">
                            
                            <p className="text-[16px] lg:text-[24px] xl:text-[24px] font-extralight md:w-[600px] lg:w-[80%] xl:w-[100%]">
                                {t("WhoWeAreP")
                                    .split(" ")
                                    .map((word, index) => (
                                        <span
                                            key={index}
                                            className={`inline transition-opacity font-archivo duration-500 ${isVisible ? "opacity-100" : "opacity-30"
                                                }`}
                                            style={{
                                                transitionDelay: `${index * 100}ms`,
                                            }}
                                        >
                                            {word}
                                            {index <
                                                t("WhoWeAreP").split(" ").length - 1 &&
                                                " "}
                                        </span>
                                    ))}
                                <strong className="font-archivo font-bold text-[16px] lg:text-[24px] xl:text-[24px] ">
                                    {t("WhoWeArePstrong")
                                        .split(" ")
                                        .map((word, index) => (
                                            <span
                                                key={index}
                                                className={`inline transition-opacity font-archivo duration-500 ${isVisible
                                                        ? "opacity-100"
                                                        : "opacity-30"
                                                    }`}
                                                style={{
                                                    transitionDelay: `${(t("WhoWeAreP").split(" ").length +
                                                            index) *
                                                        100
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
                            <p className="font-archivo text-[16px] xl:text-[24px]  font-extralight mt-4 md:w-[600px] lg:text-[24px] lg:w-[80%] xl:w-[100%] ">
                                {t("WhoWeArePsecond")
                                    .split(" ")
                                    .map((word, index) => (
                                        <span
                                            key={index}
                                            className={`inline transition-opacity font-archivo duration-500 ${isVisible ? "opacity-100" : "opacity-30"
                                                }`}
                                            style={{
                                                transitionDelay: `${(t("WhoWeAreP").split(" ").length +
                                                        t("WhoWeArePstrong").split(" ").length +
                                                        index) *
                                                    100
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
                            <p className="text-[16px]   xl:text-[24px]  font-archivo md:w-[600px] lg:w-[80%] xl:w-[100%] lg:text-[24px] font-extralight mt-4">
                                {t("WhoWeArePThird")
                                    .split(" ")
                                    .map((word, index) => (
                                        <span
                                            key={index}
                                            className={`inline transition-opacity font-archivo duration-500 ${isVisible ? "opacity-100" : "opacity-30"
                                                }`}
                                            style={{
                                                transitionDelay: `${(t("WhoWeAreP").split(" ").length +
                                                        t("WhoWeArePstrong")
                                                            .split(" ")
                                                            .length +
                                                        t("WhoWeArePsecond")
                                                            .split(" ")
                                                            .length +
                                                        index) *
                                                    100
                                                    }ms`,
                                            }}
                                        >
                                            {word}
                                            {index <
                                                t("WhoWeArePThird").split(" ").length - 1 &&
                                                " "}
                                        </span>
                                    ))}
                                <strong className="font-bold font-archivo text-[16px] lg:text-[24px] xl:text-[24px] ">
                                    {t("WhoWeArePThirdStrong")
                                        .split(" ")
                                        .map((word, index) => (
                                            <span
                                                key={index}
                                                className={`inline transition-opacity font-archivo duration-500 ${isVisible
                                                        ? "opacity-100"
                                                        : "opacity-30"
                                                    }`}
                                                style={{
                                                    transitionDelay: `${(t("WhoWeAreP").split(" ").length +
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
                                                        100
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
                    <div className="w-full flex justify-center md:justify-end">
  <Image
    src="/whoSempen.jpg"
    alt="Imagen"
    width={250}
    height={250}
    className="w-full md:w-[88%] h-[250px] object-cover sm:h-auto md:h-[400px] lg:h-[450px] aspect-auto rounded-l-[10px]"
    loading="lazy"
    
  />
</div>

                </div>
            </div>
        </div>
    );
}