import React from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";
function Navbar() {
  const Links = ["Home", "Genre", "Country", "Movies", "Tvseries", "TopIMDB"];
  return (
    <div className="Navbar">
      <nav className="flex items-center justify-between px-5 py-2 bg-blue-900">
        {/* logo */}
        <div className="p-2 text-xl font-bold text-blue-500 bg-white rounded-md h-min">
          Sam's-Moviez
        </div>
        {/* middle nav */}
        <ul className="hidden space-x-3 text-white md:flex ">
          {Links.map((link) => (
            <NavLink
              key={link}
              to={link === "Country" ? "#" : link === "Genre" ? "#" : link}
            >
              <li className="gap-5 px-4 py-5 hover:bg-blue-950">{link}</li>
            </NavLink>
          ))}
        </ul>
        {/* search */}
        <Search />
      </nav>
    </div>
  );
}

export default Navbar;
