/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/next-tutorial4',  // Replace with your GitHub repo name
    assetPrefix: '/next-tutorial4/',  // Prefix assets for GitHub Pages
    images: {
      unoptimized: true,  // Disable image optimization for static exports
    },
  }
  
  export default nextConfig;
  