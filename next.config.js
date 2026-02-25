/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/fr',
        permanent: false,
      },
      {
        source:
          '/:path((?!fr|en|api|_next|favicon\\.ico|robots\\.txt|sitemap\\.xml).*)',
        destination: '/fr/:path',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
