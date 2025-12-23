import { Link, NavLink } from "react-router-dom";
import { navItems } from "../constants/data";
import { LuChefHat } from "react-icons/lu";

const Navbar = () => {
  return (
    <header className="h-24 bg-nav-bg shadow-lg flex items-center justify-between px-8">
      <Link
        to="/"
        className="group flex items-center gap-3 transition-transform duration-300 ease-in-out hover:scale-[1.04]"
      >
        <div className="flex items-center space-x-4 text-nav-text">
          <div className="rounded-xl bg-white/10 p-2.5 backdrop-blur-sm transition-colors duration-300 ease-in-out group-hover:bg-white/20">
            <LuChefHat className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold font-playfair tracking-tight text-white">
            Recipe Book
          </h1>
        </div>
      </Link>

      <nav>
        <ul className="flex space-x-8">
          {navItems.map((navItem) => {
            const Icon = navItem.icon;
            return (
              <NavLink
                key={navItem.label}
                to={navItem.link}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-xl font-inter text-lg 
                  font-semibold transition-colors duration-200 ease-in-out ${
                    isActive
                      ? "text-violet-100 bg-white/10 shadow-md"
                      : "text-violet-200 hover:text-violet-100 hover:bg-white/5 "
                  }`
                }
              >
                <Icon className="h-4 w-4" />
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
