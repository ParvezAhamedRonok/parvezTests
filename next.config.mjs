/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'randomuser.me',
      'images.unsplash.com',
      'images.pexels.com',
      'flagcdn.com',
    ],
  },
  productionBrowserSourceMaps: false, // optional but helps reduce build size
  webpack: (config, { isServer }) => {
    config.module.rules.push(
      {
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'static/files/',
              publicPath: '/_next/static/files/',
            },
          },
        ],
      },
      {
        test: /\.(mp3|wav)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'static/audio/',
              publicPath: '/_next/static/audio/',
            },
          },
        ],
      }
    );
    return config;
  },
};

export default nextConfig;
