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
    <div className="relative w-full max-h-[881px] overflow-hidden">
      <video
        ref={videoRef}
        src="/video.mp4"
        className="w-full h-full object-contain"
        loop
        muted
        playsInline
      />
    </div>
  );
}
