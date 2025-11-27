import { TamaguiProvider, Theme } from "tamagui";
import config from "../tamagui.config";

export function UiProvider({ children }) {
  return (
    <TamaguiProvider config={config}>
      <Theme name="light">{children}</Theme>
    </TamaguiProvider>
  );
}
