const createExpoWebpackConfigAsync = require('@expo/webpack-config');

async function exports(env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ['@ui-kitten/components'],
      },
    },
    argv,
  );
  return config;
};

module.exports = exports;
