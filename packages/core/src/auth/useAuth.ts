import { useState } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);

  const login = async (email: string) => {
    const fakeUser = { id: "1", email };
    setUser(fakeUser);
    return fakeUser;
  };

  const logout = () => setUser(null);

  return { user, login, logout };
}
