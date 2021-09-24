module.exports = {
  trailingSlash: true,
  i18n: {
    locales: ['en-US', 'fr'],
    defaultLocale: 'en-US'
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
        net: 'empty',
      };
    }

    return config;
  },
};
