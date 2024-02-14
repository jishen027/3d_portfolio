import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg"
      >
        <p className="text-white font-bold text-2xl">JL</p>
      </NavLink>
      <nav className="flex items-center justify-center space-x-4 text-xl font-semibold p-4">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "text-black-500"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "text-black-500"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "text-black-500"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
