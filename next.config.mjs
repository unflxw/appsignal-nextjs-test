/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add the `experimental` object if not present
  experimental: {
    // Add the following lines inside the object
    instrumentationHook: true,
    serverComponentsExternalPackages: ["@appsignal/nodejs"],
    esmExternals: "loose"
  },
  webpack: (config) => {
    config.externals = [...config.externals, {
      '@appsignal/nodejs': "commonjs @appsignal/nodejs"
    }];
    return config;
  },
};

export default nextConfig;
