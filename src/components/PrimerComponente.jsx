'use client';

import { useEffect, useState } from 'react';

export default function PrimerComponente({ shouldPlay }) {
  const [videoSrcLarge, setVideoSrcLarge] = useState(null);
  const [videoSrcSmall, setVideoSrcSmall] = useState(null);

  const loadVideos = async () => {
    try {
      // Cargar video grande
      const largeResponse = await fetch('/sempenDesktop.webm');
      const largeBlob = await largeResponse.blob();
      const largeUrl = URL.createObjectURL(largeBlob);
      setVideoSrcLarge(largeUrl);

      // Cargar video pequeño
      const smallResponse = await fetch('/mobileSempen.webm');
      const smallBlob = await smallResponse.blob();
      const smallUrl = URL.createObjectURL(smallBlob);
      setVideoSrcSmall(smallUrl);
    } catch (err) {
      console.error('Error al cargar los videos:', err);
    }
  };

  useEffect(() => {
    // Cargar los videos una vez al montar el componente
    loadVideos();
  }, []);

  useEffect(() => {
    if (shouldPlay) {
      const playVideo = () => {
        if (window.innerWidth > 640 && videoSrcLarge) {
          document.getElementById('videoLarge')?.play();
          document.getElementById('videoSmall')?.pause();
        } else if (window.innerWidth <= 640 && videoSrcSmall) {
          document.getElementById('videoSmall')?.play();
          document.getElementById('videoLarge')?.pause();
        }
      };

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
    }
  }, [shouldPlay, videoSrcLarge, videoSrcSmall]);

  return (
    <div className="relative w-full overflow-hidden bg-[#16222F]">
      {/* Video para pantallas grandes */}
      {videoSrcLarge && (
        <video
          id="videoLarge"
          src={videoSrcLarge}
          preload="auto"
          className="w-full h-full object-contain hidden sm:block"
          loop
          muted
          playsInline
        />
      )}
      {/* Video para pantallas pequeñas */}
      {videoSrcSmall && (
        <video
          id="videoSmall"
          src={videoSrcSmall}
          preload="auto"
          className="w-full h-full object-contain sm:hidden block"
          loop
          muted
          playsInline
        />
      )}
    </div>
  );
}
