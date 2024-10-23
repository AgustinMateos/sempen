'use client'

import { useState, useEffect } from "react";
import Image from "next/image";

export default function WeBuild() {
  // Palabras que se mostrarán en el div
  const words = ["sustainable fuels", "game changing teams", "long-term vision "];
  
  // Estado para manejar el índice de la palabra actual
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Efecto para cambiar la palabra cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000); // Cambia cada 5000 milisegundos (5 segundos)

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="min-h-screen md:min-h-[696px] relative overflow-hidden text-white">
      <div
        className="w-full bg-cover bg-center min-h-screen md:min-h-[696px] flex justify-center items-center transition-transform duration-1000 ease-out relative"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(16, 24, 32, 0) 0%, rgba(16, 24, 32, 0.446541) 44%, #101820 100%), url('/weBuild.webp')`,
        }}
      >
        {/* Contenedor centrado */}
        <div className="text-center flex  items-center space-y-4">
          {/* Texto superior: We build */}
          <p className="text-[32px] font-light leading-[108.8px]">We Build</p>

          {/* Línea con texto superpuesto */}
          <div className="relative">
            <Image src="/Line-3.webp" width={420} height={34} alt="Line Image" />
            {/* Texto dentro de la imagen */}
            <p className="absolute inset-0 flex justify-center items-center text-[32px]">
              {words[currentWordIndex]} {/* Cambia la palabra aquí */}
            </p>
          </div>

          {/* Texto inferior */}
          <p className="text-[32px]">to decarbonize global energy</p>
        </div>
      </div>
    </div>
  );
}
