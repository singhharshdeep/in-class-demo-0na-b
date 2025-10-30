import Link from "next/link";

type NavbarProps = {
  name?: string;
};

/*
props = {
    name: "MovieCatalog"
}
*/
export default function Navbar({ name = "MovieCatalog" }: NavbarProps) {
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
        <Link href="/auth">Login</Link>
      </div>
    </div>
  );
}
