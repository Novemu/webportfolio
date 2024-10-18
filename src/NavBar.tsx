import { AntSVG } from "./SVGImages/AntSVG";

export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 mt-5 flex items-center bg-zinc-800 pb-5 pt-5">
      <div className="absolute left-20">
        <AntSVG />
      </div>

      <ul className="flex grow justify-center space-x-5 text-xl">
        <li>
          <a
            href="#about"
            className="cursor-pointer text-gray-400 hover:font-bold hover:text-white"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="cursor-pointer text-gray-400 hover:font-bold hover:text-white"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="cursor-pointer text-gray-400 hover:font-bold hover:text-white"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}