import { registeredUsers } from "@/mocks/users";
import { User } from "@/types";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useEffect, useState } from "react";

type AuthContextData = {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextData>({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
});

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem("user");
    if (userFromLocalStorage) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userFromLocalStorage));
    }
  }, []);

  function login(email: string, password: string) {
    const user = registeredUsers.find((user) => user.email === email);
    if (user && user.password === password) {
      setIsLoggedIn(true);
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/");
    }
  }

  function logout() {
    localStorage.removeItem("user");
    router.push("/");
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        user: user,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
