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
        <div className=" h-auto overflow-hidden" id="AboutUs">
            <div className="h-[120px] md:h-[190px] w-full bg-[#101820] flex justify-center">
                <div className="w-full max-w-[1218px]  flex items-end px-4 md:px-0">
                    {/* Efecto de aparición letra por letra en aboutUsTitle */}
                    <h3 className="text-[#57B6B2] font-archivo text-[40px] md:text-[60px] lg:text-[80px] border-b-[2px] border-transparent flex flex-wrap">
                        {aboutUsTitle.split(" ").map((word, index) => (
                            <span
                                key={index}
                                ref={(el) => (titleRef.current[index] = el)}
                                style={{
                                    display: "inline-block",
                                    opacity: visible ? 1 : 0,
                                    transform: visible ? "translateY(0)" : "translateY(100%)",
                                    margin: "0 10px", // Añade separación entre palabras
                                    transition: `opacity 0.5s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms`,
                                    whiteSpace: "nowrap", // Esto evita que las palabras se rompan en varias líneas
                                }}
                            >
                                {word}
                            </span>
                        ))}
                    </h3>

                    <div
                        className="flex-1 h-0 border-t-[2px] ml-4 mt-[4px] md:mb-[25px]"
                        style={{
                            borderImageSource: 'linear-gradient(90deg, #005D63 45.5%, #101820 100%)',
                            borderImageSlice: 1,
                        }}
                    />
                </div>
            </div>

            <div
                className="w-full bg-cover bg-center flex flex-col items-center justify-around h-[545px] sm:h-[415px] md:h-[862px]  lg:h-[600px] px-4 md:px-0"
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
                <div className="h-auto max-w-[1218px] text-[#FFFFFF] flex items-center text-center text-[30px] md:text-[50px] lg:text-[70px]">
                    <h4 className="font-archivo flex flex-wrap justify-center">
                        {aboutUsh2Text.split(" ").map((word, index) => (
                            <span
                                key={index}
                                className={`inline transition-opacity font-archivo duration-500 ${visible ? 'opacity-100' : 'opacity-30'} mx-3`} // Cambia a mx-3 o mx-4
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                {word}
                            </span>
                        ))}
                    </h4>
                </div>



                {/* Efecto de aparición palabra por palabra en developText */}
                <div className="flex flex-col items-center text-[#FFFFFF] text-[1.5rem] md:text-[2rem] lg:text-[3rem]">
                    <div className="max-w-full md:max-w-[1170px] text-center mb-4">
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