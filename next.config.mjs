import withOptimizedImages from 'next-export-optimize-images';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Use 'export' to build static files for GitHub Pages
    images: {
        unoptimized: true,  // Disable Image Optimization API for static export
    }
}

export default nextConfig;
