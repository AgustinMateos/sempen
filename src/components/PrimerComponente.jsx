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
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Video para pantallas grandes */}
      <video
        id="videoLarge"
        src="/sempenDesktop.mp4"
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover hidden sm:block"
        loop
        muted
        playsInline
      />
      {/* Video para pantallas pequeñas */}
      <video
        id="videoSmall"
        src="/Mobile.webm"
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover sm:hidden block"
        loop
        muted
        playsInline
      />
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