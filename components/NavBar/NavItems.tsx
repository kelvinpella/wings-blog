import Link from "next/link";

const navItems = [
  { name: "All Posts", value: "posts" },
  { name: "Contact", value: "contact" },
];
export default function NavItems() {
  return (
    <div className="flex flex-col md:flex-row items-end md:items-center justify-end md:justify-center space-x-3  capitalize font-bold">
      {navItems.map(({ name, value }) => (
        <Link key={value} href={value} className="my-2 md:my-0">
          {name}
        </Link>
      ))}
    </div>
  );
}
