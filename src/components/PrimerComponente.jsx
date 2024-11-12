'use client';
import { useEffect, useRef } from 'react';

export default function PrimerComponente({ shouldPlay }) {
  const videoRefLarge = useRef(null);  // Video para pantallas grandes (horizontal)
  const videoRefSmall = useRef(null);  // Video para pantallas pequeñas (vertical)

  useEffect(() => {
    if (shouldPlay) {
      // Reproduce el video adecuado según el tamaño de la pantalla
      if (window.innerWidth > 640 && videoRefLarge.current) {
        videoRefLarge.current.play();
        if (videoRefSmall.current) videoRefSmall.current.pause(); // Pausar el video pequeño si está jugando
      } else if (window.innerWidth <= 640 && videoRefSmall.current) {
        videoRefSmall.current.play();
        if (videoRefLarge.current) videoRefLarge.current.pause(); // Pausar el video grande si está jugando
      }
    }
  }, [shouldPlay]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Video para pantallas grandes (horizontal) */}
      <video
        ref={videoRefLarge}
        src="/New.mp4"
        preload="auto" // Precarga el video completamente
        className="w-full h-full object-contain hidden sm:block" // Solo visible en pantallas grandes horizontales (>= 640px)
        loop
        muted
        playsInline
      />
      {/* Video para pantallas medianas a pequeñas (vertical) */}
      <video
        ref={videoRefSmall}
        src="/Mobile.mp4"
        preload="auto" // Precarga el video completamente
        className="w-full h-full object-contain sm:hidden block" // Solo visible en pantallas pequeñas o verticales (< 640px)
        loop
        muted
        playsInline
      />
    </div>
  );
}
