/** @type {import('next').NextConfig} */
const nextConfig = {
   
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'encrypted-tbn0.gstatic.com',
              port: '',
            //   pathname: '/account123/**',
            },
          ],
        },
      
};

export default nextConfig;
