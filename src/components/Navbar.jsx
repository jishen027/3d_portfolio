import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      {/* Text-based logo mark */}
      <NavLink
        to="/"
        className="font-bold text-lg tracking-tighter uppercase text-foreground hover:opacity-70 transition-opacity"
      >
        Jeb Lee
      </NavLink>

      {/* Minimal uppercase nav links */}
      <nav className="flex items-center space-x-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-[10px] font-bold uppercase tracking-[0.3em] transition-opacity ${
              isActive ? "opacity-100" : "opacity-40 hover:opacity-100"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-[10px] font-bold uppercase tracking-[0.3em] transition-opacity ${
              isActive ? "opacity-100" : "opacity-40 hover:opacity-100"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `text-[10px] font-bold uppercase tracking-[0.3em] transition-opacity ${
              isActive ? "opacity-100" : "opacity-40 hover:opacity-100"
            }`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-[10px] font-bold uppercase tracking-[0.3em] transition-opacity ${
              isActive ? "opacity-100" : "opacity-40 hover:opacity-100"
            }`
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
