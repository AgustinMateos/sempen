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
      <div className="flex flex-row items-center space-x-4">
        {/* Texto superior: We build */}
        <p className="text-[32px] font-light leading-[108.8px]">We Build</p>

        {/* Línea con texto superpuesto */}
        <div className="relative">
          <Image src="/Line-3.webp" width={420} height={34} alt="Line Image" />
          <p className="absolute inset-0 flex justify-center items-center text-[32px]">
            {words[currentWordIndex]}
          </p>
        </div>

        {/* Texto inferior */}
        <p className="text-[32px]">to decarbonize global energy</p>
      </div>

      {/* Contenedor azul oscuro en la parte inferior, centrado y con max-width */}
      <div className="absolute bottom-0 w-[1050px] bg-[#16222F] h-[198px] flex items-center justify-center">
        <div className="max-w-[1050px] w-full mx-auto text-center">
          {/* Contenido adicional */}
          <h4 className="text-white text-[24px] mb-2">We are part of</h4>
          <div className="flex justify-center space-x-4">
            <Image src="/cac.svg" width={367} height={71} alt="RSB Logo" />
            <Image src="/rsb.svg" width={187} height={80} alt="CAC Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
