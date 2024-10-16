// components/Loader.jsx
import { useState, useEffect } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0); // Estado para manejar el progreso

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100)); // Incrementa el progreso
    }, 20); // Incrementa el progreso cada 20ms

    return () => clearInterval(interval); // Limpiar intervalo cuando el componente se desmonte
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#101820] z-50">
      <div className="relative w-80">
        {/* Número del porcentaje */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xl font-bold text-[#57B6B2]">
          {progress}%
        </div>
        {/* Barra de progreso */}
        <div className="h-0.5 bg-gray-300">
          <div
            className="h-full bg-[#57B6B2] transition-all duration-200"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

