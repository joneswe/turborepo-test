import { UiProvider } from "@repo/ui/Provider";
import { Button } from "@repo/ui/button";
import { useAuth } from "@repo/core/auth/useAuth";

export default function App() {
  const { user, login } = useAuth();

  return (
    <UiProvider>
      <Button onPress={() => login("mobile@example.com", "pw")}>
        {user ? `Hi ${user.email}` : "Login (Mobile)"}
      </Button>
    </UiProvider>
  );
}
