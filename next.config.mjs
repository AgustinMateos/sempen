/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Reglas para páginas HTML principales
        source: '/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, must-revalidate' },
        ],
      },
      {
        // Reglas para JavaScript y CSS
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Reglas para archivos multimedia
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
