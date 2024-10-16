// components/PrimerComponente.jsx
'use client'
import { useEffect, useRef } from 'react';

export default function PrimerComponente({ shouldPlay }) {
  const videoRef = useRef(null); // Referencia al video

  useEffect(() => {
    if (shouldPlay && videoRef.current) {
      videoRef.current.play(); // Reproduce el video cuando shouldPlay es true
    }
  }, [shouldPlay]); // Ejecuta cuando shouldPlay cambia

  return (
    <div className="relative w-full h-[760px]">
      <video
        ref={videoRef}
        src="/video.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted
        playsInline
      />
    </div>
  );
}


