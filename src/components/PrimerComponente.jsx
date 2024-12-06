'use client';

import { useEffect, useState } from 'react';

export default function PrimerComponente({ shouldPlay }) {
  const [isMobile, setIsMobile] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    if (!shouldPlay) return;

    const checkDeviceSize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkDeviceSize();
    window.addEventListener('resize', checkDeviceSize);

    // Carga el video en memoria al iniciar el componente
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
      if (videoSrc) URL.revokeObjectURL(videoSrc); // Libera la memoria usada por el blob
    };
  }, [isMobile, shouldPlay]);

  return (
    <div className="relative w-full overflow-hidden bg-[#16222F]">
      {videoSrc && (
        <video
          src={videoSrc}
          preload="auto"
          className="w-full h-full object-contain"
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
