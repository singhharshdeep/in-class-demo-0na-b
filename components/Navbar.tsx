type NavbarProps = {
    name: string;
    version: number;
};

export default function Navbar({ name, version }: NavbarProps) {
  return (
    <div
      style={{
        border: "1px solid white",
        padding: 8,
      }}
    >
      {name} v{version}
    </div>
  );
}
