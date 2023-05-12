import Menu from "./Menu";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavItems from "./NavItems";

export default function NavBar() {
  return (
    <nav className="w-full fixed top-0 p-2 flex items-end justify-between z-50 bg-white space-x-2">
      <Logo />
      <NavItems />
      <SearchBar />
      <Menu />
    </nav>
  );
}
