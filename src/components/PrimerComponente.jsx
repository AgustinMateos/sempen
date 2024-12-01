'use client';
import { useEffect, useRef } from 'react';

export default function PrimerComponente({ shouldPlay }) {
  const videoRefLarge = useRef(null);
  const videoRefSmall = useRef(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (videoRefLarge.current) videoRefLarge.current.pause();
        if (videoRefSmall.current) videoRefSmall.current.pause();
      } else {
        if (shouldPlay) {
          if (window.innerWidth > 640 && videoRefLarge.current) {
            videoRefLarge.current.play();
          } else if (window.innerWidth <= 640 && videoRefSmall.current) {
            videoRefSmall.current.play();
          }
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [shouldPlay]);

  return (
    <div className="relative w-full overflow-hidden bg-[#16222F] ">
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
