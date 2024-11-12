'use client';
import { useEffect, useRef } from 'react';

export default function PrimerComponente({ shouldPlay }) {
  const videoRefLarge = useRef(null);
  const videoRefSmall = useRef(null);

  useEffect(() => {
    const playCorrectVideo = () => {
      if (window.innerWidth > 1100 && videoRefLarge.current) {
        videoRefLarge.current.play();
        videoRefSmall.current.pause();
      } else if (window.innerWidth <= 1100 && videoRefSmall.current) {
        videoRefSmall.current.play();
        videoRefLarge.current.pause();
      }
    };

    // Ejecuta la función en el primer renderizado y cada vez que cambia el tamaño de pantalla
    playCorrectVideo();
    window.addEventListener("resize", playCorrectVideo);
    
    return () => window.removeEventListener("resize", playCorrectVideo);
  }, [shouldPlay]);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Video para pantallas grandes */}
      <video
        ref={videoRefLarge}
        src="/New.mp4"
        className="w-full h-full object-cover hidden lg:block" // visible solo en pantallas grandes (>1100px)
        loop
        muted
        playsInline
      />
      {/* Video para pantallas pequeñas */}
      <video
        ref={videoRefSmall}
        src="/Mobile.mp4"
        className="w-full h-full object-fill block lg:hidden" // visible solo en pantallas pequeñas (<=1100px)
        loop
        muted
        playsInline
      />
    </div>
  );
}
