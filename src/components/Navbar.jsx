import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-col gap-2.5 pt-4 md:pt-5 pb-4 md:pb-6 md:flex-row items-center justify-between border-b border-[var(--line1)]">
      <div>
        <img src={assets.logo} alt="" />
      </div>
      <div>
        <ul className="flex items-center">
          <li className="px-2">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="px-2">
            <NavLink to={"/doctors"}>All Doctors</NavLink>
          </li>
          <li className="px-2">
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className="px-2">
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </div>
      <NavLink>
        <div className="bg-[var(--blue1)] text-white rounded-4xl py-3 px-5 flex items-center">
          Create account
        </div>
      </NavLink>
    </div>
  );
}

export default Navbar;
