import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

export default function AboutUs() {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);
    const aboutUsTitle = t('AboutUsTitle');
    const aboutUsh2Text = t('AboutUsh2');
    const developText = t('AboutUsTextWeDevelop');
    const aboutUsRef = useRef(null);
    const titleRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
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
        <div className=" h-auto overflow-hidden bg-[#101820]" id="AboutUs">
            <div className="h-[120px] md:h-[150px] lg:h-[195px] w-full flex justify-center md:justify-end">
                <div className="w-[95%] md:w-[92%] lg:w-[90%] xl:w-[95%] flex items-end">
                    {/* Efecto de aparición letra por letra en aboutUsTitle */}
                    <h3 className="text-[#57B6B2] font-archivo text-[40px] md:text-[60px] xl:text-[80px] border-b-[2px] border-transparent flex flex-wrap">
                        {aboutUsTitle.split(" ").map((word, index) => (
                            <span
                                key={index}
                                ref={(el) => (titleRef.current[index] = el)}
                                style={{
                                    display: "inline-block",
                                    opacity: visible ? 1 : 0,
                                    transform: visible ? "translateY(0)" : "translateY(100%)",
                                    margin: index === 0 ? "0" : "0 10px", // Sin margen izquierdo para la primera palabra
                                    transition: `opacity 0.5s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms`,
                                    whiteSpace: "nowrap", // Evitar que las palabras se rompan en varias líneas
                                }}
                            >
                                {word}
                            </span>
                        ))}
                    </h3>

                    <div
                        className="flex-1 h-0 border-t-[2px] ml-4 mt-[4px] md:mb-[20px] mb-[15px]"
                        style={{
                            borderImageSource: "linear-gradient(90deg, #005D63 45.5%, #101820 100%)",
                            borderImageSlice: 1,
                        }}
                    />
                </div>
            </div>

            <div
                className="w-full bg-cover bg-center flex flex-col items-center justify-around md:justify-between lg:justify-evenly h-[545px] sm:h-[415px] md:h-[550px] lg:h-[630px]  xl:h-[600px] 2xl:h-[790px] px-4 md:px-0"
                style={{
                    backgroundImage: `
                        linear-gradient(180deg, rgba(16, 24, 32, 0) 0%, rgba(16, 24, 32, 0.446541) 63.5%, #101820 100%),
                        linear-gradient(0deg, rgba(16, 24, 32, 0) 41.5%, rgba(16, 24, 32, 0.446541) 64%, #101820 97%),
                        url('/aboutUs.svg')
                    `,
                }}
                ref={aboutUsRef} // Mueve la referencia aquí para activar visible
            >
                {/* Efecto de aparición palabra por palabra en aboutUsh2Text */}
                <div className="h-auto w-[90%] md:w-[90%] lg:w-[85%] xl:w-[90%] justify-center text-[#FFFFFF] flex items-center text-center text-[30px] md:text-[50px] lg:text-[60px]">
                    <h4 className="font-archivo flex flex-wrap justify-center">
                        {aboutUsh2Text.split(" ").map((word, index) => (
                            <span
                                key={index}
                                className={`inline transition-opacity font-archivo duration-500 ${visible ? 'opacity-100' : 'opacity-30'} mr-2.5 md:mx-3 `} // Cambia a mx-3 o mx-4
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                {word}
                            </span>
                        ))}
                    </h4>
                </div>



                {/* Efecto de aparición palabra por palabra en developText */}
                <div className="flex flex-col items-center text-[#FFFFFF] text-[1.5rem] md:text-[2rem]  lg:text-[2rem] xl:text-[3rem] w-full">
                    <div className="w-[85%] md:w-[70%] xl:w-[80%] text-center mb-4">
                        {developText.split(" ").map((word, index) => (
                            <span
                                key={index}
                                className={`inline transition-opacity font-archivo duration-500 ${visible ? 'opacity-100' : 'opacity-30'}`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                {word}
                                {index < developText.split(" ").length - 1 && ' '}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}