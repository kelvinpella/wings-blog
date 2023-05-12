"use client";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export default function Menu() {
  let isOpen = false;
  return (
    <button className="md:hidden">
      {isOpen ? (
        <AiOutlineClose className="text-2xl" />
      ) : (
        <AiOutlineMenu className="text-2xl" />
      )}
    </button>
  );
}
