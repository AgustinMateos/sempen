'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

export default function WeBuild() {
  const words = ["sustainable fuels", "game changing teams", "long-term vision "];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="min-h-screen relative overflow-hidden text-white flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(16, 24, 32, 0) 0%, rgba(16, 24, 32, 0.446541) 44%, #101820 100%), url('/weBuild.webp')`,
      }}
    >
      {/* Contenedor en fila */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 text-center md:text-left px-4 md:px-0">
        {/* Texto superior: We build */}
        <p className="text-[24px] md:text-[32px] font-light md:leading-[108.8px]">We Build</p>

        {/* Línea con texto superpuesto */}
        <div className="relative">
          <Image src="/Line-3.webp" width={420} height={34} alt="Line Image" className="w-[250px] md:w-[420px]" />
          <p className="absolute inset-0 flex justify-center items-center text-[18px] md:text-[32px]">
            {words[currentWordIndex]}
          </p>
        </div>

        {/* Texto inferior */}
        <p className="text-[18px] md:text-[32px]">to decarbonize global energy</p>
      </div>

      {/* Contenedor azul oscuro en la parte inferior, centrado y con max-width */}
      <div className="absolute bottom-0 max-w-[1050px] bg-[#16222F] h-[150px] md:h-[198px] flex items-center justify-center">
        <div className="w-full px-4 mx-auto text-center">
          {/* Contenido adicional */}
          <h4 className="text-white text-[18px] md:text-[24px] mb-2">We are part of</h4>
          <div className="flex justify-center space-x-4 flex-wrap">
            <Image src="/cac.svg" width={200} height={40} alt="RSB Logo" className="w-[120px] md:w-[200px]" />
            <Image src="/rsb.svg" width={100} height={40} alt="CAC Logo" className="w-[60px] md:w-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
