import { useState } from "react";
import { NavLink } from "react-router-dom";
import { sidebarLinks } from "../../../../cons/sidebarLinks"; 
import { Tooltip } from "./Tooltip";
import { FaBars } from "react-icons/fa";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div
      className="fixed top-0 left-0 h-14 w-full max-w-lg md:hidden"
    >
      <button
        onClick={toggleMenu}
        className="bg-sky-100 p-3 flex items-center justify-center "
        aria-label="Toggle Menu"
      >
        <FaBars size={24} className="text-black" />
      </button>
      
      {isOpen && (
        <ul
          className="absolute top-14 left- flex flex-col bg-slate-200 p-4 
          rounded-lg shadow-lg w-3/4"
        >
          {sidebarLinks.map(({ icon, name, path }) => (
            <li key={path} className="mb-2">
              <NavLink
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg ${
                    isActive ? "bg-white text-black" : "text-black"
                  } hover:bg-white transition-colors duration-500`
                }
                to={path}
                onClick={toggleMenu} 
              >
                <Tooltip className="bg-black before:border-t-black">
                  {name}
                </Tooltip>
                <span className="mr-2 text-lg">{icon}</span>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
