"use client";
import Menu from "./Menu";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavItems from "./NavItems";
import { useState, useCallback } from "react";

export default function NavBar() {
  const [isOpen, setIsopen] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsopen((isOpen) => !isOpen);
  }, [isOpen]);
  const menuProps = { isOpen, toggleMenu };
  return (
    <nav className="w-full fixed top-0 p-2 flex items-end justify-between z-50 bg-white ">
      <Logo />
      <div className="hidden md:flex">
        <NavItems />
      </div>
      <SearchBar />
      <Menu {...menuProps} />
    </nav>
  );
}
