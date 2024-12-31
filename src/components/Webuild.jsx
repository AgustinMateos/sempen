'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
export default function WeBuild() {
  const { t } = useTranslation();
  const words = ["sustainable fuels", "game changing teams", "long-term vision"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="h-[750px] md:h-[120vh] lg:h-[950px] relative overflow-hidden text-white flex flex-col items-center justify-center lg:justify-start bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(16, 24, 32, 0) 0%, rgba(16, 24, 32, 0.446541) 44%, #101820 100%), url('/weBuild.webp')`,
      }}
    >
      {/* Contenedor en fila */}
      <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 text-center lg:text-left px-4 lg:px-0 h-[600px] sm:h-[620px] md:h-[780px]  lg:h-[550px]">
        <p className="text-[14px] sm:text-[18px] lg:text-[32px] font-light lg:leading-[108.8px] mb-[10px] sm:mb-[25px]">We build</p>
        <div className="relative mb-[25px]">
          <Image src="/Line-3.webp" width={550} height={34} alt="Line Image" className="w-[250px] lg:w-[420px]" />
          <p className="font-archivo absolute inset-0 flex justify-center items-center mb-[25px] text-[14px] sm:text-[18px] lg:text-[32px]">
            {/* {words[currentWordIndex]} */} sustainable fuels
          </p>
        </div>
        <p className="font-archivo text-[14px] sm:text-[18px] lg:text-[32px] pb-[30px] ">to decarbonize global energy.</p>
      </div>

      {/* Contenedor azul oscuro con max-width */}
      <div className="absolute bottom-0 w-full flex justify-center">
        <div className="max-w-[1250px] rounded-[8px] w-full bg-[#16222F] h-[500px] md:h-[750px] lg:h-[450px] flex flex-col items-center justify-evenly px-4 mx-auto">
          <h4 className="font-archivo text-white text-[18px] md:text-[24px] mt-[20px] mb-2">{t('weArePartOf')} </h4>
          <div className="flex flex-col md:flex-row justify-around md:space-x-4 flex-wrap h-[80%] sm:h-[90%] md:h-[90%] w-[100%] items-center">
            <Image src="/ahkBrasil_svg.svg" width={200} height={40} alt="ahk Logo" className="sm:w-[250px] sm:h-[12vh] md:w-[400px] md:h-[15vh] 2xl:h-[12vh]" />
            <Image src="/ahkUruguay_svg.svg" width={200} height={40} alt="ahk Logo" className="sm:w-[250px] sm:h-[12vh] md:w-[400px] md:h-[15vh] 2xl:h-[12vh]" />
            <Image src="/arg2.svg" width={200} height={40} alt="ahk Logo" className="sm:w-[250px] sm:h-[12vh] md:w-[400px] md:h-[15vh] 2xl:h-[12vh]" />           
             <Image src="/rsb_svg.svg" width={200} height={50} alt="RSB Logo" className="w-[160px] h-[10vh] sm:w-[250px] sm:h-[8vh] md:w-[290px] md:h-[17vh] lg:w-[300px] lg:h-[20vh]   2xl:h-[12vh] " />
            <Image src="/aviacaoSAF.png" width={200} height={50} alt="aviacao Saf Logo" className="w-[90px] h-[9vh] sm:w-[130px] sm:h-[12vh] md:w-[140px] md:h-[14vh] 2xl:h-[10vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}
