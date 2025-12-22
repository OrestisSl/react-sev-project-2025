import { useState } from "react";
import { navItems } from "../constants/data";

const Navbar = () => {
  const [active, setIsActive] = useState("Home");

  const baseNavItemStyle =
    " text-2xl  hover:text-nav-hover transition-colors duration-150 cursor-pointer";

  return (
    <header className="h-20 bg-nav-bg shadow-lg flex items-center justify-between px-5 ">
      <h1 className="text-2xl font-semibold font-geist text-nav-text">
        Recipe Book
      </h1>

      <nav>
        <ul className="flex space-x-8">
          {navItems.map((navItem) => {
            return (
              <li
                className={`${
                  navItem.label == active
                    ? baseNavItemStyle + "  text-nav-active"
                    : baseNavItemStyle + " text-nav-text"
                }`}
                key={navItem.label}
                onClick={() => setIsActive(navItem.label)}
              >
                {navItem.label}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
