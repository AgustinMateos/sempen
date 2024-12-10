/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Configuración para todas las páginas
        source: '/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }, // Ajusta según tus necesidades
        ],
      },
      {
        // Configuración específica para archivos multimedia
        source: '/:path*\\.(webm|mp4|ogg)$',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Accept-Ranges', value: 'bytes' },
        ],
      },
    ];
  },
};

export default nextConfig;
