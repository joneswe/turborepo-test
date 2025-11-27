import { Button } from "@repo/ui/button";
import { useAuth } from "@repo/core/auth/useAuth";

export default function Page() {
  const { user, login } = useAuth();

  return (
    <div>
      <h1>Next.js Web</h1>
      <p>User: {user ? user.email : "not logged in"}</p>
      <Button onPress={() => login("test@example.com", "pw")}>
        Login
      </Button>
    </div>
  );
}
