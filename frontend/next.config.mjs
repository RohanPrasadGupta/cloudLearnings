/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "cloudimagev1",
    NEXT_PUBLIC_CLOUDINARY_API_KEY: "741484585886249",
    CLOUDINARY_API_SECRET: "AMUWRp0f8tuun6shk0qMmQh62l4",
    Api_ENV_VARIABLE:
      "CLOUDINARY_URL=cloudinary://741484585886249:AMUWRp0f8tuun6shk0qMmQh62l4@cloudimagev1",
    NEXT_PUBLIC_CLOUDINARY_SECURE_DISTRIBUTION:
      "CLOUDINARY_URL=cloudinary://741484585886249:AMUWRp0f8tuun6shk0qMmQh62l4@cloudimagev1",
    NEXT_PUBLIC_CLOUDINARY_PRIVATE_CDN: "true",
    MONGODB_URI:
      "mongodb:mongodb+srv://test:%3AzjBtbK5LWqXMdqcC@cluster0.mpuz2fw.mongodb.net/cluster0",
  },
};

export default nextConfig;
