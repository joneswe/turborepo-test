import { shorthands } from '@tamagui/shorthands';
import { tokens } from '@tamagui/theme-base';
import { createTamagui, createTokens } from 'tamagui';
import { createInterFont } from '@tamagui/font-inter';
import { themes } from '@tamagui/theme-base';

const interFont = createInterFont();

const config = createTamagui({
  themes,
  tokens: createTokens(tokens),
  shorthands,
  fonts: {
    heading: interFont,
    body: interFont,
    mono: interFont
  }
});

export default config;
export type AppConfig = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}
