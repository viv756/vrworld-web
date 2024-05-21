import { useState } from "react";
import { logo } from "../../assets";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { NavLinks } from "../../constants";
import DarkMode from "./DarkMode";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <div className=" relative z-[9999] text-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          {/* {logo section} */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="h-16" />
            <p className="text-3xl">
              VR <span className="font-bold">World</span>
            </p>
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLinks.map(({ id, name, link }) => {
                return (
                  <li key={id} className="py-4">
                    <a href={link} className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500">
                      {name}
                    </a>
                  </li>
                );
              })}
              {/* Darkmode feature */}
              <DarkMode />
            </ul>
          </nav>
          {/* Mobile View Sidebar */}

          {showMenu ? <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer " size={30} /> : <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer " size={30} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
