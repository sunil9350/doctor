import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Appointment() {
  const { doctors } = useContext(AppContext);
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === id);

  if (!doctor) return <p>Doctor not found</p>;

  return (
    <div className="grid grid-cols-12 mt-10 gap-8">
      <div className="col-span-3 rounded-xl overflow-hidden">
        <div className="bg-[var(--blue1)]">
          <img
            src={doctor.image ? doctor.image : assets.doc1}
            alt={doctor.name}
          />
        </div>
      </div>
      <div className="col-span-9 border border-[var(--line1)] rounded-xl overflow-hidden px-8 py-8">
        <div>
          <h1 className="text-[var(--black1)] font-medium text-3xl flex gap-2 items-center pb-2">
            {doctor.name}
            <img src={assets.verified_icon} alt="Verified" />
          </h1>
          <p className="text-[var(--grey1)] text-base flex items-center gap-2">
            {doctor.speciality}
            <span className="text-xs border border-[var(--grey1)] rounded-full px-3 py-1">
              {doctor.experience} Years
            </span>
          </p>
          <p className="text-[var(--black1)] text-sm mt-3 font-medium">About</p>
          <p className="text-[var(--grey1)] text-base pt-3">{doctor.about}</p>
          <p className="text-[var(--grey1)] mt-4">
            Appointment fee:{" "}
            <span className="text-[var(--black1)]">${doctor.fees}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
