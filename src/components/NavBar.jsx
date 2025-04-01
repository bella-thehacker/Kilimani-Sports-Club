import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#964B00] text-white p-4 shadow-md relative">
      <div className="container mx-auto flex flex-col items-center">
        {/* Top Navigation Links */}
        <ul className="flex gap-6 text-sm md:text-base mb-2">

        <li>
            <NavLink
              to="/about"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/membership"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Membership
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/facilities"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Facilities
            </NavLink>
          </li>
         
          
          <li>
            <NavLink
              to="/staff"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Staff
            </NavLink>
          </li>
          
        </ul>

       

        <NavLink to="/">
          <img src="/transparent.png" alt="" className="logo" />
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
