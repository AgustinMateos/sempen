'use client';
import { useEffect, useRef } from 'react';

export default function PrimerComponente({ shouldPlay }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (shouldPlay && videoRef.current) {
      videoRef.current.play();
    }
  }, [shouldPlay]);

  return (
    <div className="relative w-full h-[100vh] sm:h-[8000px]  overflow-hidden">
      <video
        ref={videoRef}
        src="/New.mp4"
        className="w-full h-full object-fill sm:object-contain"
        loop
        muted
        playsInline
      />
    </div>
  );
}
