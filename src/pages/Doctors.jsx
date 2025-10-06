import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DoctorCard from "../components/DoctorCard";
import { AppContext } from "../context/AppContext";

function Doctors() {
  const navigate = useNavigate();
  const { speciality } = useParams(); // read /doctors/:speciality

  const { doctors } = useContext(AppContext);

  // Specialities for sidebar
  const specialities = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  // Filter doctors
  const filteredDoctors = speciality
    ? doctors.filter((doc) => doc.speciality === speciality)
    : doctors;

  return (
    <div className="py-10">
      <h1 className="text-3xl mb-6">Browse through the doctors specialist.</h1>
      <div className="flex justify-between gap-10">
        {/* Sidebar */}
        <div className="w-3/12">
          {specialities.map((spec, i) => (
            <p
              key={i}
              onClick={() =>
                speciality === spec
                  ? navigate("/doctors")
                  : navigate(`/doctors/${spec}`)
              }
              className={`border border-[var(--blue4)] rounded-lg p-3 mb-3 text-sm cursor-pointer px-4 ${
                speciality === spec ? "bg-[var(--blue4)] font-semibold" : ""
              }`}
            >
              {spec}
            </p>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-4 gap-6 w-9/12">
          {filteredDoctors.map((doc) => (
            <DoctorCard
              image={doc.image}
              key={doc.id}
              id={doc.id}
              name={doc.name}
              speciality={doc.speciality}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
