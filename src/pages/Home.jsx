import React from "react";
import Banner from "../components/Banner";
import Section from "../components/Section";
import Speciality from "../components/Speciality";
import { specialityData } from "../assets/assets";

function Home() {
  return (
    <div className="mt-4">
      <Banner />
      <Section
        name={"Find by Speciality "}
        description={
          "Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free."
        }
      />
      <div className="flex items-center justify-evenly">
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
    </div>
  );
}

export default Home;
