import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { API_URL } from "../config";

function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, setShowLoginModal } = useContext(AppContext);

  const handleLogout = async () => {
    try {
      // Call logout API
      await axios.post(
        `${API_URL}/logout`,
        {},
        {
          withCredentials: true,
        }
      );

      // Clear all localStorage
      localStorage.clear();

      // Clear token state
      setToken(false);

      // Navigate to home page
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);

      // Clear localStorage and token even if API call fails
      localStorage.clear();
      setToken(false);
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col gap-2.5 pt-4 md:pt-5 pb-4 md:pb-6 md:flex-row items-center justify-between border-b border-[var(--line1)]">
      <div>
        <NavLink to={"/"}>
          <img src={assets.logo} alt="" />
        </NavLink>
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

      <div className="relative group cursor-pointer">
        {token ? (
          <div className="flex gap-2">
            <img
              src={assets.profile_pic}
              className="w-[40px] h-[40px] rounded-full"
              alt=""
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium z-20 hidden group-hover:block ">
              <div className="min-w-48 bg-[var(--grey7)] rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("my-profile")}
                  className="cursor-pointer"
                >
                  My Profle
                </p>
                <p
                  onClick={() => navigate("my-appointment")}
                  className="cursor-pointer"
                >
                  My Appointment
                </p>
                <p onClick={handleLogout} className="cursor-pointer">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowLoginModal(true)}
            className="bg-[var(--blue1)] text-white rounded-4xl py-3 px-5 flex items-center cursor-pointer"
          >
            Create account
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
