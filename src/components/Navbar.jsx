import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../main";
import { Sun, Moon, Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleClose = () => setIsOpen(false);

  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex gap-2 text-2xl sm:text-2xl md:text-3xl lg:text-3xl">
        <p className="font-extrabold bg-gradient-to-r from-blue-400 via-blue-900 to-red-500 bg-clip-text text-transparent">
          <i>Bajishaik</i>
        </p>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-10 mr-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold border-b-2 border-blue-500"
              : "hover:text-blue-400"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold border-b-2 border-blue-500"
              : "hover:text-blue-400"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold border-b-2 border-blue-500"
              : "hover:text-blue-400"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold border-b-2 border-blue-500"
              : "hover:text-blue-400"
          }
        >
          About
        </NavLink>

        <button onClick={() => toggleTheme("dark")}>
          {theme === "light" ? <Sun /> : <Moon />}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden flex flex-col items-start p-5 space-y-4 z-50">
          <Link
            to="/"
            onClick={handleClose}
            className="block hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={handleClose}
            className="block hover:text-blue-400"
          >
            About
          </Link>
          <Link
            to="/projects"
            onClick={handleClose}
            className="block hover:text-blue-400"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={handleClose}
            className="block hover:text-blue-400"
          >
            Contact
          </Link>
          <button
            onClick={() => {
              toggleTheme("dark");
              handleClose();
            }}
          >
            {theme === "light" ? <Sun /> : <Moon />}
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
