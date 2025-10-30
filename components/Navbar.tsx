import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { useContext } from "react";

type NavbarProps = {
  name?: string;
};

/*
props = {
    name: "MovieCatalog"
}
*/
export default function Navbar({ name = "MovieCatalog" }: NavbarProps) {
  const { isLoggedIn, user, logout } = useContext(AuthContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid white",
        padding: 8,
      }}
    >
      <div>{name}</div>
      <div>
        {isLoggedIn && `Welcome ${user?.name}   `}
        {isLoggedIn ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link href="/auth">Login</Link>
        )}
      </div>
    </div>
  );
}
