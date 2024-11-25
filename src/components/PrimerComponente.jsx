'use client';
import { useEffect, useRef } from 'react';

export default function PrimerComponente({ shouldPlay }) {
  const videoRefLarge = useRef(null);  
  const videoRefSmall = useRef(null); 

  useEffect(() => {
    if (shouldPlay) {
      
      if (window.innerWidth > 640 && videoRefLarge.current) {
        videoRefLarge.current.play();
        if (videoRefSmall.current) videoRefSmall.current.pause(); 
      } else if (window.innerWidth <= 640 && videoRefSmall.current) {
        videoRefSmall.current.play();
        if (videoRefLarge.current) videoRefLarge.current.pause(); 
      }
    }
  }, [shouldPlay]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Video para pantallas grandes (horizontal) */}
      <video
        ref={videoRefLarge}
        src="/New.mp4"
        preload="auto" 
        className="w-full h-full object-contain hidden sm:block" 
        loop
        muted
        playsInline
      />
      {/* Video para pantallas medianas a pequeñas (vertical) */}
      <video
        ref={videoRefSmall}
        src="/Mobile.mp4"
        preload="auto" 
        className="w-full h-full object-contain sm:hidden block" 
        loop
        muted
        playsInline
      />
    </div>
  );
}
