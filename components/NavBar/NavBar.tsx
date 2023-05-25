"use client";
import Menu from "./Menu";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavItems from "./NavItems";
import { useState, useCallback } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-white fixed top-0 z-50 p-2 md:p-4 lg:p-5">
      <div className="w-full lg:max-w-screen-xl lg:mx-auto   flex items-end justify-between  ">
        <Logo />
        <div className="flex items-center justify-between space-x-4 md:space-x-6 lg:space-x-8">
          <div className="hidden md:flex">
            <NavItems navItemsProps={{ setIsMenuOpen }} />
          </div>
          <SearchBar />
          <Menu menuProps={{ isMenuOpen, setIsMenuOpen }} />
        </div>
      </div>
    </nav>
  );
}
