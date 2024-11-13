// components/Loader.jsx
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#101820] z-50">
      <div className="relative w-80 flex flex-col items-center">
        {/* Número de porcentaje arriba de la linea de carga */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xl font-bold text-[#57B6B2]">
          {progress}%
        </div>

        {/* linea de progreso/carga */}
        <div className="h-0.5 bg-gray-300 w-full">
          <div
            className="h-full bg-[#57B6B2] transition-all duration-200"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Imagen con brillo y opacidad progresivos  */}
      <div className="absolute bottom-0 flex justify-center w-full">
        <Image
          src="/SempenLoader.svg"
          alt="Loading Icon"
          width={1323}
          height={329}
          className="transition-all duration-200"
          style={{
            filter: `brightness(${0.2 + (progress / 100) * 0.8})`,  // Incrementa el brillo
            opacity: `${0.3 + (progress / 100) * 0.8}`,              // Incrementa la opacidad
            clipPath: `inset(0 ${100 - progress}% 0 0)`              // Revela la imagen de izquierda a derecha
          }}
        />
      </div>
    </div>
  );
}
