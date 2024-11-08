import { sidebarLinks } from "../../../../cons/sidebarLinks"
import { Link } from "react-router-dom"

export const NavLinks = () => {
    return (
      <ul className="space-y-4">
        {sidebarLinks.map((link) => (
          <li
            key={link.name}
            className="hover:bg-white font-medium 
                      transition-colors px-3 py-4 rounded-md"
          >
            <Link className="flex items-center gap-2" to={link.path}>
              {link.icon} {link.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  };
  