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
    <div className="flex justify-between border border-white p-6 text-2xl">
      <div>{name}</div>
      <div>
        {isLoggedIn && <span className="mr-5">Welcome {user?.name}</span>}
        {isLoggedIn && <Link href="/favorites" className="mr-5">Favorites</Link>}
        {isLoggedIn ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link href="/auth">Login</Link>
        )}
      </div>
    </div>
  );
}
