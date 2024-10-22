import { AntSVG } from "./SVGImages/AntSVG";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
2;

export type NavBarProps = {
  scrollToAbout: () => void;
  scrollToProjects: () => void;
  scrollToContact: () => void;
  scrollToHero: () => void;
};

export function NavBar({
  scrollToAbout,
  scrollToProjects,
  scrollToContact,
  scrollToHero,
}: NavBarProps) {
  function scrollToMobileView(whereToScroll: () => void) {
    setOpen(false);
    whereToScroll();
  }
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <nav className="top-0 z-50 mt-5 flex items-center justify-between bg-zinc-800 pb-5 pt-5 md:sticky">
        <div
          className="ml-10 hover:cursor-pointer md:ml-20"
          onClick={scrollToHero}
        >
          <AntSVG />
        </div>

        <ul className="hidden text-xl md:mr-20 md:flex md:grow md:justify-center md:space-x-5">
          <li>
            <a
              className="cursor-pointer text-gray-400 hover:font-bold hover:text-white"
              onClick={scrollToAbout}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer text-gray-400 hover:font-bold hover:text-white"
              onClick={scrollToProjects}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer text-gray-400 hover:font-bold hover:text-white"
              onClick={scrollToContact}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="flex-col pr-5 text-orange-300 md:hidden">
          <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        </div>
      </nav>
      {isOpen && (
        <ul className="flex flex-col items-center text-xl shadow-md">
          <li className="w-full">
            <a
              href="#about"
              className="block cursor-pointer border-b border-b-orange-300 p-2 text-center text-gray-400 hover:font-bold hover:text-white"
              onClick={() => scrollToMobileView(scrollToAbout)}
            >
              About
            </a>
          </li>
          <li className="w-full">
            <a
              href="#portfolio"
              className="block cursor-pointer border-b border-b-orange-300 p-2 text-center text-gray-400 hover:font-bold hover:text-white"
              onClick={() => scrollToMobileView(scrollToProjects)}
            >
              Projects
            </a>
          </li>
          <li className="w-full">
            <a
              href="#contact"
              className="block cursor-pointer border-b border-b-orange-300 p-2 text-center text-gray-400 hover:font-bold hover:text-white"
              onClick={() => scrollToMobileView(scrollToContact)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </>
  );
}
