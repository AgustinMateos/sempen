'use client';
import { useEffect, useRef } from 'react';

export default function PrimerComponente({ shouldPlay }) {
  const videoRefLarge = useRef(null);
  const videoRefSmall = useRef(null);

  const playVideo = () => {
    if (shouldPlay) {
      if (window.innerWidth > 640 && videoRefLarge.current) {
        videoRefLarge.current.play().catch((err) =>
          console.log('Error al reproducir video grande:', err)
        );
        if (videoRefSmall.current) videoRefSmall.current.pause();
      } else if (window.innerWidth <= 640 && videoRefSmall.current) {
        videoRefSmall.current.play().catch((err) =>
          console.log('Error al reproducir video pequeño:', err)
        );
        if (videoRefLarge.current) videoRefLarge.current.pause();
      }
    }
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        playVideo();
      }
    };

    const handleResize = () => {
      playVideo();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('resize', handleResize);

    playVideo();

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
    };
  }, [shouldPlay]);

  return (
    <div className="relative w-full overflow-hidden bg-[#16222F]">
      <video
        ref={videoRefLarge}
        src="/sempenDesktop.webm"
        preload="auto"
        className="w-full h-full object-contain hidden sm:block"
        loop
        muted
        playsInline
      />
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
