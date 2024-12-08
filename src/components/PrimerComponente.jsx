'use client';

import { useEffect } from 'react';

export default function PrimerComponente({ shouldPlay }) {
  useEffect(() => {
    if (shouldPlay) {
      const playVideo = () => {
        const isDesktop = window.innerWidth > 640;
        const largeVideo = document.getElementById('videoLarge');
        const smallVideo = document.getElementById('videoSmall');

        if (isDesktop) {
          largeVideo?.play();
          smallVideo?.pause();
        } else {
          smallVideo?.play();
          largeVideo?.pause();
        }
      };

      const handleResize = () => {
        playVideo();
      };

      const handleVisibilityChange = () => {
        if (!document.hidden) playVideo();
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);
      window.addEventListener('resize', handleResize);

      playVideo();

      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [shouldPlay]);

  return (
    <div className="relative w-full h-auto overflow-hidden">
      {/* Contenedor responsivo para video de escritorio */}
      <div className="aspect-w-21 aspect-h-9 sm:block hidden">
        <video
          id="videoLarge"
          src="/sempenDesktop.mp4"
          preload="auto"
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
        />
      </div>
      {/* Contenedor responsivo para video móvil */}
      <div className="aspect-w-9 aspect-h-16  sm:hidden block">
        <video
          id="videoSmall"
          src="/Mobile.webm"
          preload="auto"
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
}


// 'use client';

// import { useEffect } from 'react';

// export default function PrimerComponente({ shouldPlay }) {
// useEffect(() => {
// if (shouldPlay) {
// const playVideo = () => {
// const isDesktop = window.innerWidth > 640;
// const largeVideo = document.getElementById('videoLarge');
// const smallVideo = document.getElementById('videoSmall');

// if (isDesktop) {
// largeVideo?.play();
// smallVideo?.pause();
// } else {
// smallVideo?.play();
// largeVideo?.pause();
// }
// };

// const handleResize = () => {
// playVideo();
// };

// const handleVisibilityChange = () => {
// if (!document.hidden) playVideo();
// };

// document.addEventListener('visibilitychange', handleVisibilityChange);
// window.addEventListener('resize', handleResize);

// playVideo();

// return () => {
// document.removeEventListener('visibilitychange', handleVisibilityChange);
// window.removeEventListener('resize', handleResize);
// };
// }
// }, [shouldPlay]);

// return (
// <div className="relative w-full h-[100vh] overflow-hidden">
// {/* Video para pantallas grandes */}
// <video
// id="videoLarge"
// src="/sempenDesktop.mp4"
// preload="auto"
// className="w-full h-[100%] object-fill hidden sm:block"
// loop
// muted
// playsInline
// />
// {/* Video para pantallas pequeñas */}
// <video
// id="videoSmall"
// src="/Mobile.webm"
// preload="auto"
// className="w-full h-[100%]  object-fill sm:hidden block"
// loop
// muted
// playsInline
// />
// </div>
// );
// }