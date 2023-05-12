import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavItems from "./NavItems";
type Props = {
  isOpen: Boolean;
  toggleMenu: () => void;
};
export default function Menu({ isOpen, toggleMenu }: Props) {
  // content shown when Menu is open
  const contentMenuOpened = (
    <div className="md:hidden w-full h-screen absolute inset-0  ">
      <div onClick={toggleMenu} className="w-full h-full bg-black/50" />
      <div className="absolute h-full top-0 right-0 w-8/12 bg-ghost-white pt-6 px-3 z-10 text-end">
        <button onClick={toggleMenu}>
          <AiOutlineClose className="text-2xl" />
        </button>
        <NavItems />
      </div>
    </div>
  );
  // content shown when Menu is closed
  const contentMenuClosed = (
    <button className="md:hidden" onClick={toggleMenu}>
      <AiOutlineMenu className="text-2xl" />
    </button>
  );

  return isOpen ? contentMenuOpened : contentMenuClosed;
}
