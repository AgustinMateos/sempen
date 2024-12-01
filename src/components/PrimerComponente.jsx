'use client';
import { useEffect, useRef } from 'react';

export default function PrimerComponente({ shouldPlay }) {
  const videoRefLarge = useRef(null);
  const videoRefSmall = useRef(null);

  const playVideo = () => {
    if (shouldPlay) {
      if (window.innerWidth > 640 && videoRefLarge.current) {
        videoRefLarge.current.play().catch((err) => console.log('Error al reproducir video grande:', err));
        if (videoRefSmall.current) videoRefSmall.current.pause();
      } else if (window.innerWidth <= 640 && videoRefSmall.current) {
        videoRefSmall.current.play().catch((err) => console.log('Error al reproducir video pequeño:', err));
        if (videoRefLarge.current) videoRefLarge.current.pause();
      }
    }
  };

  useEffect(() => {
    // Reproduce el video al volver a la pestaña activa
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        playVideo();
      }
    };

    // Detecta cuando el ancho de la ventana cambia (por ejemplo, al rotar el dispositivo)
    const handleResize = () => {
      playVideo();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('resize', handleResize);

    // Reproducción inicial
    playVideo();

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
    };
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
