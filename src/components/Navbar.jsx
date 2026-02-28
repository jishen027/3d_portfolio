import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <NavLink
        to="/"
        className="font-bold text-xl tracking-tighter uppercase text-foreground z-50 relative"
        onClick={() => setMenuOpen(false)}
      >
        Jeb Lee
      </NavLink>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center space-x-10">
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `text-sm font-bold uppercase tracking-[0.3em] transition-opacity ${
                isActive ? "opacity-100" : "opacity-40 hover:opacity-100"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Mobile hamburger button */}
      <button
        className="md:hidden z-50 relative flex flex-col justify-center items-center w-8 h-8 gap-[5px] group"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <span
          className={`block h-px w-6 bg-foreground transition-all duration-300 origin-center ${
            menuOpen ? "rotate-45 translate-y-[5px]" : ""
          }`}
        />
        <span
          className={`block h-px w-6 bg-foreground transition-all duration-300 ${
            menuOpen ? "opacity-0 scale-x-0" : ""
          }`}
        />
        <span
          className={`block h-px w-6 bg-foreground transition-all duration-300 origin-center ${
            menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
          }`}
        />
      </button>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-surface flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-10">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-2xl font-bold uppercase tracking-[0.3em] transition-opacity ${
                  isActive ? "opacity-100" : "opacity-30 hover:opacity-100"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Subtle decorative mono label */}
        <p
          className="absolute bottom-10 text-[9px] uppercase tracking-[0.5em] opacity-20"
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        >
          Navigation
        </p>
      </div>
    </header>
  );
};

export default Navbar;
