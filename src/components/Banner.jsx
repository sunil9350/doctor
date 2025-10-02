import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

function Banner() {
  return (
    <div className="bg-[var(--blue1)] gap-10 flex items-center pt-16 px-4 md:px-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-white font-semibold text-5xl">
          Book Appointment <br /> With Trusted Doctors
        </h1>
        <div className="flex gap-4">
          <img src={assets.group_profiles} alt="" />
          <p className="text-white text-base">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>
        <NavLink className={" "}>
          <span className="flex px-4 py-4 w-[200px] justify-around rounded-4xl bg-white">
            <p>Book appointment</p>
            <img src={assets.arrow_icon} alt="" />{" "}
          </span>
        </NavLink>
      </div>
      <div>
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  );
}

export default Banner;
