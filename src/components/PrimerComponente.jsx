'use client';

import { useEffect, useState } from 'react';

export default function PrimerComponente({ shouldPlay }) {
  const [isMobile, setIsMobile] = useState(() => {
    return typeof window !== 'undefined' && window.innerWidth <= 640;
  });
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    if (!shouldPlay) return;

    const checkDeviceSize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener('resize', checkDeviceSize);

    const videoUrl = isMobile ? '/Mobile.webm' : '/sempenDesktop.mp4';
    fetch(videoUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const localVideoUrl = URL.createObjectURL(blob);
        setVideoSrc(localVideoUrl);
      })
      .catch((error) => console.error('Error loading video:', error));

    return () => {
      window.removeEventListener('resize', checkDeviceSize);
      if (videoSrc) URL.revokeObjectURL(videoSrc);
    };
  }, [isMobile, shouldPlay]);

  return (
    <div
      className="relative w-full overflow-hidden bg-[#16222F]"
      style={{ height: '100vh' }} // Mantén un tamaño fijo para evitar "saltos"
    >
      {videoSrc && (
        <video
          src={videoSrc}
          preload="auto"
          className="w-full h-full object-containe"
          loop
          muted
          autoPlay
          playsInline
          onLoadedData={() => console.log('Video loaded')}
        />
      )}
    </div>
  );
}
