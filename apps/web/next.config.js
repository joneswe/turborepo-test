const { withTamagui } = require('tamagui/next-plugin');
const path = require('path');

const tamaguiConfig = path.join(__dirname, '../../packages/shared-ui/tamagui.config.ts');

/** @type {import('next').NextConfig} */
const nextConfig = withTamagui({
  config: tamaguiConfig,
  outputCSS: path.join(__dirname, './app/tamagui.css'),
  components: ['tamagui']
})({
  transpilePackages: ['@turborepo-test/shared', '@turborepo-test/shared-ui', 'tamagui', 'react-native-web']
});

module.exports = nextConfig;
