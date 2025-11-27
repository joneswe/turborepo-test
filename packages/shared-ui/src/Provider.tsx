import React, { PropsWithChildren } from 'react';
import { TamaguiProvider, Theme } from 'tamagui';
import config from '../tamagui.config';

export function SharedUIProvider({ children }: PropsWithChildren) {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <Theme name="light">{children}</Theme>
    </TamaguiProvider>
  );
}
