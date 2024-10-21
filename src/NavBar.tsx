import { AntSVG } from "./SVGImages/AntSVG";

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
  return (
    <nav className="sticky top-0 z-50 mt-5 flex items-center bg-zinc-800 pb-5 pt-5">
      <div
        className="absolute left-20 hover:cursor-pointer"
        onClick={scrollToHero}
      >
        <AntSVG />
      </div>

      <ul className="flex grow justify-center space-x-5 text-xl">
        <li>
          <a
            href="#about"
            className="cursor-pointer text-gray-400 hover:font-bold hover:text-white"
            onClick={scrollToAbout}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="cursor-pointer text-gray-400 hover:font-bold hover:text-white"
            onClick={scrollToProjects}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="cursor-pointer text-gray-400 hover:font-bold hover:text-white"
            onClick={scrollToContact}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
