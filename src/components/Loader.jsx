import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Reduce el intervalo para que el progreso aumente más rápido
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 2 : 100)); // Incrementa más rápido
    }, 5); // Intervalo más corto para un progreso más rápido

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#101820] z-50">
      {/* Barra de progreso */}
      <div className="relative w-80 flex flex-col items-center mb-8">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xl font-bold text-[#57B6B2]">
          {progress}%
        </div>
        <div className="h-0.5 bg-gray-300 w-full">
          <div
            className="h-full bg-[#57B6B2] transition-all duration-150" // Transición más rápida
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="absolute bottom-0 flex justify-center w-full">
        <Image
          src="/SempenLoader.webp"
          alt="Loading Icon"
          width={1323}
          height={329}
          className="transition-all duration-150" // Transición más rápida
          style={{
            filter: `brightness(${0.2 + (progress / 100) * 0.9})`,  // Incrementa el brillo
            opacity: `${0.4 + (progress / 100) * 0.8}`,              // Incrementa la opacidad
            clipPath: `inset(0 ${600 - progress}% 0 0)`              // Revela la imagen más rápido
          }}
        />
      </div>
    </div>
  );
}
