import { logo } from "../../assets";
import { NavLinks } from "../../constants";

const Navbar = () => {
  return (
    <div>
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
              {NavLinks.map((link) => {
                return (
                  <li key={link.id} className="py-4">
                    <a href={link.link} className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500">
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          {/* {mobile view sidebar} */}
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
