module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "tamagui",
        {
          config: "../../packages/ui/tamagui.config.ts",
          components: ["tamagui"]
        }
      ],
      "react-native-reanimated/plugin"
    ]
  };
};
