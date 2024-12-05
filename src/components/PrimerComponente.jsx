'use client';

import { useEffect } from 'react';

export default function PrimerComponente({ shouldPlay }) {
  useEffect(() => {
    if (shouldPlay) {
      const playVideo = () => {
        const isMobile = window.innerWidth <= 640;
        const videoLarge = document.getElementById('videoLarge');
        const videoSmall = document.getElementById('videoSmall');

        if (!isMobile && videoLarge) {
          videoLarge.play();
          videoSmall?.pause();
        } else if (isMobile && videoSmall) {
          videoSmall.play();
          videoLarge?.pause();
        }
      };

      const handleResize = () => {
        playVideo();
      };

      window.addEventListener('resize', handleResize);
      playVideo();

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [shouldPlay]);

  return (
    <div className="relative w-full overflow-hidden bg-[#16222F]">
      {/* Video para pantallas grandes */}
      <video
        id="videoLarge"
        src="/sempenDesktop.mp4"
        preload="auto"
        className="w-full h-full object-contain hidden sm:block"
        loop
        muted
        playsInline
      />
      {/* Video para pantallas pequeñas */}
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
