import { FaEarthAmericas } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";

export const sidebarLinks =[
    {name: "Paises",path: "/",icon:<FaEarthAmericas className="w-6 h-6"/>},
    {name: "Reglamentos", path: "/regulations", icon:<FaUserAlt className="w-6 h-6"/>},
    {name: "Ayuda", path: "/help", icon:<IoMdHelpCircle className="w-6 h-6"/>}
];