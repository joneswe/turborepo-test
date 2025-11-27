import { UiProvider, Button, ScreenCenter } from "@repo/ui";
import { useAuth } from "@repo/core";

export default function App() {
  const { user, login } = useAuth();

    return (
      <UiProvider>
        <ScreenCenter>
          <Button onPress={() => login("mobile@example.com", "pw")}>{
            user ? `Hi ${user.email}` : "Login (Mobile)"
          }</Button>
        </ScreenCenter>
      </UiProvider>
    );
}
