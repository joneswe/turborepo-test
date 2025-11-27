"use client";

import { Button, ScreenCenter } from "@repo/ui";
import { useAuth } from "@repo/core";

export default function ClientAuth() {
  const { user, login } = useAuth();

  return (
    <ScreenCenter>
      <div>
        <p>User: {user ? user.email : "not logged in"}</p>
        <Button onPress={() => login("test@example.com", "pw")}>Login</Button>
      </div>
    </ScreenCenter>
  );
}
