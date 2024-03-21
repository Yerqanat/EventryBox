import { NavLink, useLocation } from "react-router-dom";

import { navLink } from "@/context/constants";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Navbar = () => {
  const currenctURL = useLocation();
  const isInHome = currenctURL.pathname === "/";
  return (
    <nav
      className={`fixed ${
        isInHome && "text-white"
      } top-0 left-0 z-50 mt-12 mb-6 w-full max-sm:px-6 px-10 mx-auto flex justify-between items-center`}
    >
      <NavLink to="/" className="font-bold text-xl">
        LOGO
      </NavLink>
      <ul className="flex justify-between items-center max-sm:gap-4 gap-8">
        {navLink.map((link) => (
          <NavLink key={link.label} className="font-semibold" to={link.link}>
            {link.label}
          </NavLink>
        ))}

        <FaSquareXTwitter className="w-6 h-6" />
        <FaSquareFacebook className="w-6 h-6" />
        <FaInstagramSquare className="w-6 h-6" />
      </ul>
    </nav>
  );
};

export default Navbar;
