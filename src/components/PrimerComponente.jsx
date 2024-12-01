'use client';
import { useEffect, useRef } from 'react';

export default function PrimerComponente({ shouldPlay }) {
  const videoRefLarge = useRef(null);
  const videoRefSmall = useRef(null);

  useEffect(() => {
    if (shouldPlay) {
      if (window.innerWidth > 640 && videoRefLarge.current) {
        videoRefLarge.current.muted = true; // Asegura que mute esté activado
        videoRefLarge.current.play().catch((err) => console.log('Error al reproducir video:', err));
        if (videoRefSmall.current) videoRefSmall.current.pause();
      } else if (window.innerWidth <= 640 && videoRefSmall.current) {
        videoRefSmall.current.muted = true; // Asegura que mute esté activado
        videoRefSmall.current.play().catch((err) => console.log('Error al reproducir video:', err));
        if (videoRefLarge.current) videoRefLarge.current.pause();
      }
    }
  }, [shouldPlay]);

  return (
    <div className="relative w-full overflow-hidden bg-[#16222F]">
      {/* Video para pantallas grandes */}
      <video
        ref={videoRefLarge}
        src="/sempenDesktop.webm"
        preload="auto"
        className="w-full h-full object-contain hidden sm:block"
        loop
        muted
        playsInline
      />
      {/* Video para pantallas pequeñas */}
      <video
        ref={videoRefSmall}
        src="/mobileSempen.webm"
        preload="auto"
        className="w-full h-full object-contain sm:hidden block"
        loop
        muted
        playsInline
      />
    </div>
  );
}
