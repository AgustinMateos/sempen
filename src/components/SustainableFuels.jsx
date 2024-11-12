import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

export default function SustainableFuels() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="SustainableFuels" className="h-auto sm:h-[150vh] md:h-[130vh] w-full bg-[#EDEDED] p-[20px] md:p-[0px] flex items-center justify-center flex-col sm:min-h-screen">
      <div className="w-[365px] sm:w-full">
        <div className="w-full flex justify-center px-4 md:px-0">
          <div className="min-h-[310px] max-w-[1218px] 2xl:max-w-[1470px] w-full flex flex-col justify-evenly">
            {/* Título con animación letra por letra */}
            <h4
              ref={titleRef}
              className="text-[#57B6B2] font-archivo text-4xl md:text-[80px] h-auto mb-4"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(100%)',
                transition: `opacity 0.5s ease, transform 0.5s ease`,
              }}
            >
              {t("SustainableFuelsTitle")
                .split("")
                .map((letter, index) => (
                  <span
                    key={index}
                    style={{
                      display: "inline-block",
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(100%)",
                      margin: letter === " " ? "0 10px" : "0 2px",
                      transition: `opacity 0.5s ease ${index * 50}ms, transform 0.5s ease ${index * 50}ms`,
                    }}
                  >
                    {letter}
                  </span>
                ))}
            </h4>
            {/* Texto sin animación */}
            <p className="font-normal font-archivo text-lg md:text-[38px] mt-4 leading-[44px]">
              {t("SustainableFuelsRenewableFuels")}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center bg-[#EDEDED] px-4 md:px-0 min-h-[406px] sm:min-h-[500px] md:min-h-[406px] lg:min-h-[600px]">
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between items-center text-[#101820] gap-6 w-full max-w-[1470px] md:max-w-[1350px]">
            {/* Contenedor de la imagen alineada a la izquierda */}
            <div className="flex-shrink-0 w-full md:w-auto flex justify-start md:justify-start">
              <Image
                src="/sustainableFuels.svg"
                alt="Imagen"
                width={693}
                height={393}
                className="w-full md:w-[693px] h-auto"
              />
            </div>
            {/* Contenedor del texto a la derecha, centrado verticalmente */}
            <div className="w-full md:w-[557px] flex flex-col text-base md:text-[24px] font-extralight leading-8 tracking-tight text-left">
              <p className="font-archivo">
                {t("SustainableFuelsNature")}
              </p>
              <br />
              <p className="font-archivo">
                {t("SustainableFuelsDropInFuels")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
