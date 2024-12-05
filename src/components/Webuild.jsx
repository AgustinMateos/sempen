'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

export default function WeBuild() {
  const words = ["sustainable fuels", "game changing teams", "long-term vision"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="h-[450px] lg:h-[600px] relative overflow-hidden text-white flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(16, 24, 32, 0) 0%, rgba(16, 24, 32, 0.446541) 44%, #101820 100%), url('/weBuild.webp')`,
      }}
    >
      {/* Contenedor en fila */}
      <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 text-center lg:text-left px-4 lg:px-0 h-[280px] sm:h-[300px]">
        <p className="text-[14px] sm:text-[18px] lg:text-[32px] font-light lg:leading-[108.8px] mb-[10px] sm:mb-[25px]">We build</p>
        <div className="relative mb-[25px]">
          <Image src="/Line-3.webp" width={550} height={34} alt="Line Image" className="w-[250px] lg:w-[420px]" />
          <p className="font-archivo absolute inset-0 flex justify-center items-center mb-[25px] text-[14px] sm:text-[18px] lg:text-[32px]">
            {/* {words[currentWordIndex]} */} sustainable fuels
          </p>
        </div>
        <p className="font-archivo text-[14px] sm:text-[18px] lg:text-[32px] pb-[25px] ">to decarbonize global energy.</p>
      </div>

      {/* Contenedor azul oscuro con max-width */}
      <div className="absolute bottom-0 w-full flex justify-center">
        <div className="max-w-[1050px] rounded-[8px] w-full bg-[#16222F] h-[200px] md:h-[198px] flex flex-col items-center justify-center px-4 mx-auto">
          <h4 className="font-archivo text-white text-[18px] md:text-[24px] mb-2">We are part of </h4>
          <div className="flex justify-center space-x-4 flex-wrap">
            <Image src="/ahk.png" width={300} height={50} alt="RSB Logo" className=" md:w-[400px]" />
            <Image src="/rsb.svg" width={200} height={50} alt="CAC Logo" className=" md:w-[300px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
