import React from "react";
import { assets } from "../assets/assets";

function AppointmentCard() {
  return (
    <div className="grid grid-cols-12 gap-4 items-center py-4 border-b border-[var(--line2)]">
      <div className="bg-[var(--blue3)] col-span-2">
        <img src={assets.doc1} alt="" />
      </div>
      <div className="col-span-8">
        <h4>Dr. Richard James</h4>
        <p>General physician</p>
        <p>Date & Time: 25, July, 2024 | 8:30 PM</p>
      </div>
      <div className="col-span-2 text-right">
        <button className="bg-[var(--blue1)] text-white w-full py-3 rounded-sm cursor-pointer">
          Pay here
        </button>
        <button className="text-[var(--grey1)] mt-3 w-full py-3 border border-[var(--line3)] rounded-sm cursor-pointer">
          Cancel appointment
        </button>
      </div>
    </div>
  );
}

export default AppointmentCard;
