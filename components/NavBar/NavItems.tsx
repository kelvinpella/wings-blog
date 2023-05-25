import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
type Props = {
  navItemsProps: {
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  };
};
const navItems = [
  { name: "All Posts", value: "all-post" },
  { name: "Contact", value: "contact" },
];
export default function NavItems({ navItemsProps: { setIsMenuOpen } }: Props) {
  return (
    <div className="flex flex-col md:flex-row items-end md:items-center justify-end md:justify-center space-x-6 lg:space-x-8  capitalize font-bold">
      {navItems.map(({ name, value }) => (
        <Link
          key={value}
          href={`/${value}`}
          onClick={() => setIsMenuOpen(false)}
          className="my-2 md:my-0 hover:text-amber-700"
        >
          {name}
        </Link>
      ))}
    </div>
  );
}
