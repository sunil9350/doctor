import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

function DoctorCard({ name, speciality, link, id, image }) {
  return (
    <Link to={`/appointment/${id}`}>
      <div className="border border-[var(--blue2)] rounded-xl overflow-hidden">
        <div className="bg-[var(--blue3)]">
          <img src={image ? image : assets.doc1} alt="" />
        </div>
        <div className="px-3 py-2">
          <p className="text-[var(--green1)] text-xs pb-0.5">Available</p>
          <p className="text-[var(--black1)] text-base font-medium">{name}</p>
          <p className="text-[var(--grey1)] text-sm">{speciality}</p>
        </div>
      </div>
    </Link>
  );
}

export default DoctorCard;
