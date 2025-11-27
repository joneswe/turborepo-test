module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
          alias: {
            '@turborepo-test/shared': '../../packages/shared/src',
            '@turborepo-test/shared-ui': '../../packages/shared-ui/src'
          }
        }
      ],
      [
        'tamagui',
        {
          config: '../../packages/shared-ui/tamagui.config.ts'
        }
      ]
    ]
  };
};
