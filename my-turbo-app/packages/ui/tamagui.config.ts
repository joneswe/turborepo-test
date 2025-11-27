import { createTamagui } from "tamagui";
import { createTokens } from "@tamagui/tokens";

const tokens = createTokens({
  color: {
    background: "#ffffff",
    text: "#111827",
    primary: "#0f766e"
  }
});

const config = createTamagui({
  tokens,
  themes: {
    light: {
      background: tokens.color.background,
      color: tokens.color.text
    }
  }
});

export default config;
export type AppConfig = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}
}
