import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

function BottomBanner() {
  return (
    <div className="bg-[var(--blue1)] flex gap-10 px-10 justify-around items-center rounded-xl mt-10">
      <div>
        <div>
          <h3 className="text-white font-medium text-5xl">
            Book Appointment <br /> With 100+ Trusted Doctors
          </h3>
        </div>
        <div className="pt-6">
          <NavLink className={" "}>
            <span className="flex px-4 py-4 w-[200px] justify-around rounded-4xl bg-white">
              Create account
            </span>
          </NavLink>
        </div>
      </div>
      <div>
        <img className="h-[400px]" src={assets.appointment_img} alt="" />
      </div>
    </div>
  );
}

export default BottomBanner;
