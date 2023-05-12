import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavItems from "./NavItems";
import {
  useTransition,
  useSpringRef,
  animated,
  useChain,
} from "@react-spring/web";
type Props = {
  isOpen: Boolean;
  toggleMenu: () => void;
};

export default function Menu({ isOpen, toggleMenu }: Props) {
  // backdrop ref and content ref
  const backdropRef = useSpringRef();
  const contentRef = useSpringRef();

  //fade in / out backdrop
  const fadeInOutBackdrop = useTransition(isOpen, {
    ref: backdropRef,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  // animate menu on enter & leave
  const contentTransitions = useTransition(isOpen, {
    ref: contentRef,
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0)" },
    leave: { opacity: 0, transform: "translateX(100%)" },
  });
  // chain the animations
  useChain(
    isOpen ? [backdropRef, contentRef] : [contentRef, backdropRef],
    [0, 0.1]
  );
  // content shown when Menu is open
  const contentMenuOpened = (
    <div className="w-full h-screen absolute inset-0  ">
      {fadeInOutBackdrop(
        (style, isOpen) =>
          isOpen && (
            <animated.div
              style={style}
              onClick={toggleMenu}
              className="w-full h-full bg-black/50"
            />
          )
      )}

      {contentTransitions(
        (style, isOpen) =>
          isOpen && (
            <animated.div
              style={style}
              className="absolute h-full top-0 right-0 w-8/12 bg-ghost-white pt-6 px-3 z-10 text-end"
            >
              <button onClick={toggleMenu}>
                <AiOutlineClose className="text-2xl" />
              </button>
              <NavItems />
            </animated.div>
          )
      )}
    </div>
  );

  // content shown when Menu is closed
  const contentMenuClosed = (
    <button onClick={toggleMenu}>
      <AiOutlineMenu className="text-2xl" />
    </button>
  );

  return (
    <div className="flex items-end md:hidden">
      {contentMenuClosed}
      {isOpen && contentMenuOpened}
    </div>
  );
}
