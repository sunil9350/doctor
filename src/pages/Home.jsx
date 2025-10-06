import React, { useContext } from "react";
import Banner from "../components/Banner";
import Section from "../components/Section";
import Speciality from "../components/Speciality";
import { specialityData } from "../assets/assets";
import DoctorCard from "../components/DoctorCard";
import BottomBanner from "../components/BottomBanner";
import { AppContext } from "../context/AppContext";

function Home() {
  const { doctors } = useContext(AppContext);

  return (
    <div className="mt-4">
      <Banner />
      <Section
        name={"Find by Speciality "}
        description={
          "Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free."
        }
      />
      <div className="flex items-center justify-evenly mb-8">
        {specialityData.map((data, index) => (
          <Speciality
            key={index}
            logo={`${data.image}`}
            speciality={data.speciality}
          />
        ))}
      </div>
      <Section
        name={"Top Doctors to Book "}
        description={
          "Simply browse through our extensive list of trusted doctors."
        }
      />
      <div className="grid grid-cols-5 gap-6">
        {doctors.slice(0, 5).map((doctor, index) => (
          <DoctorCard
            key={index}
            id={doctor.id}
            link={doctor.link}
            image={doctor.image}
            name={doctor.name}
            speciality={doctor.speciality}
          />
        ))}
      </div>
      <BottomBanner />
    </div>
  );
}

export default Home;
