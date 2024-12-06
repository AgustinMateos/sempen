'use client';

import { useEffect, useState } from 'react';

export default function PrimerComponente({ shouldPlay }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!shouldPlay) return;

    const checkDeviceSize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkDeviceSize();
    window.addEventListener('resize', checkDeviceSize);

    return () => {
      window.removeEventListener('resize', checkDeviceSize);
    };
  }, [shouldPlay]);

  return (
    <div className="relative w-full overflow-hidden bg-[#16222F]">
      {isMobile ? (
        <video
          id="videoSmall"
          src="/Mobile.webm"
          preload="auto"
          className="w-full h-full object-contain"
          loop
          muted
          autoPlay
          playsInline
          onLoadedData={() => console.log('Mobile video loaded')}
        />
      ) : (
        <video
          id="videoLarge"
          src="/sempenDesktop.mp4"
          preload="auto"
          className="w-full h-full object-contain"
          loop
          muted
          autoPlay
          playsInline
          onLoadedData={() => console.log('Desktop video loaded')}
        />
      )}
    </div>
  );
}
