import Link from "next/link";

const navItems = [
  { name: "All Posts", value: "posts" },
  { name: "Contact", value: "contact" },
];
export default function NavItems() {
  return (
    <div className="hidden md:flex items-center justify-center space-x-3 capitalize font-bold">
      {navItems.map(({ name, value }) => (
        <Link key={value} href={value}>
          {name}
        </Link>
      ))}
    </div>
  );
}
