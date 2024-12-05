'use client';

import { useEffect } from 'react';

export default function PrimerComponente({ shouldPlay }) {
  useEffect(() => {
    if (!shouldPlay) return;

    const playVideo = () => {
      const isMobile = window.innerWidth <= 640;
      const videoLarge = document.getElementById('videoLarge');
      const videoSmall = document.getElementById('videoSmall');

      if (isMobile) {
        videoSmall?.play();
        videoLarge?.pause();
      } else {
        videoLarge?.play();
        videoSmall?.pause();
      }
    };

    window.addEventListener('resize', playVideo);
    playVideo(); // Inicializa la reproducción correcta

    return () => {
      window.removeEventListener('resize', playVideo);
    };
  }, [shouldPlay]);

  return (
    <div className="relative w-full overflow-hidden bg-[#16222F]">
      <video
        id="videoLarge"
        src="/sempenDesktop.mp4"
        preload="auto"
        className="w-full h-full object-contain hidden sm:block"
        loop
        muted
        playsInline
      />
      <video
        id="videoSmall"
        src="/Mobile.webm"
        preload="auto"
        className="w-full h-full object-contain sm:hidden block"
        loop
        muted
        playsInline
      />
    </div>
  );
}
