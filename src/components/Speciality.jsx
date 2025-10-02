import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

function Speciality({ logo, speciality }) {
  return (
    <div className="text-center py-5">
      <Link to={`doctos/${speciality}`}>
        <img src={`${logo}`} alt={speciality} />
        <p className="pt-3">{speciality}</p>
      </Link>
    </div>
  );
}

export default Speciality;
