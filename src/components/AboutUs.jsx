import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

export default function AboutUs() {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);
    const aboutUsh2Text = t('AboutUsh2'); // Obtén el texto para AboutUsh2
    const developText = t('AboutUsTextWeDevelop'); // Obtén el texto para "We Develop"
    const aboutUsRef = useRef(null); // Referencia al contenedor

    // Usar Intersection Observer para detectar cuando el contenedor está en la vista
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisible(true); // Cambia a visible cuando entra en la vista
                    observer.disconnect(); // Desconectar el observer una vez que se ha activado
                }
            });
        });

        if (aboutUsRef.current) {
            observer.observe(aboutUsRef.current); // Observar el contenedor
        }

        return () => {
            observer.disconnect(); // Limpiar el observer al desmontar
        };
    }, []);

    return (
        <div className="min-h-screen overflow-hidden">
            <div className="h-[140px] w-full bg-[#101820] flex justify-center">
                <div className="w-[1218px] flex items-end">
                    <h3 className="text-[#57B6B2] text-[80px] w-[331px] border-b-[2px] border-transparent">
                        {t('AboutUsTitle')}
                    </h3>
                    <div 
                        className="flex-1 h-0 border-t-[2px] ml-4 mt-[4px]"
                        style={{
                            borderImageSource: 'linear-gradient(90deg, #005D63 45.5%, #101820 100%)',
                            borderImageSlice: 1,
                        }}
                    />
                </div>
            </div>

            <div
                className="w-full bg-cover bg-center flex flex-col items-center justify-around min-h-screen"
                style={{
                    backgroundImage: `
                        linear-gradient(180deg, rgba(16, 24, 32, 0) 0%, rgba(16, 24, 32, 0.446541) 63.5%, #101820 100%),
                        linear-gradient(0deg, rgba(16, 24, 32, 0) 41.5%, rgba(16, 24, 32, 0.446541) 64%, #101820 97%),
                        url('/aboutUs.svg')
                    `,
                }}
            >
                <div className="h-auto max-w-[944px] text-[#FFFFFF] flex items-center text-center text-[70px]" ref={aboutUsRef}>
                    <h4>{aboutUsh2Text}</h4>
                </div>
                <div className="flex flex-col items-center text-[#FFFFFF] text-[3rem]">
                    <div className="max-w-[800px] text-center mb-4"> {/* Contenedor de 689px */}
                        {developText.split(" ").map((word, index) => (
                            <span
                                key={index}
                                className={`inline transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-30'}`} // Cada palabra en línea
                                style={{ transitionDelay: `${index * 200}ms` }} // Delay para el efecto
                            >
                                {word} {/* Renderiza la palabra */}
                                {index < developText.split(" ").length - 1 && ' '} {/* Espacio entre palabras */}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

