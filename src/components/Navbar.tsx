import { NavLink } from "react-router-dom";
import { navItems } from "../constants/data";

const Navbar = () => {
  const baseNavItemStyle =
    " text-xl font-inter font-medium hover:text-nav-hover transition-colors duration-150 cursor-pointer";

  return (
    <header className="h-20 bg-nav-bg shadow-lg flex items-center justify-between px-5 ">
      <h1 className="text-2xl font-semibold font-playfair text-nav-text">
        Recipe Book
      </h1>

      <nav>
        <ul className="flex space-x-8">
          {navItems.map((navItem) => {
            return (
              <NavLink
                key={navItem.label}
                to={navItem.link}
                className={({ isActive }) =>
                  `${baseNavItemStyle} ${
                    isActive ? "text-nav-active" : "text-nav-text"
                  }`
                }
              >
                {navItem.label}
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;