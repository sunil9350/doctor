import React from "react";

function Section(props) {
  return (
    <div className="p-5">
      <h2 className="text-[var(--black1)] text-2xl font-semibold text-center">
        {props.name ? props.name : "Find by Speciality"}
      </h2>
      <p className="text-[var(--grey1)] text-center pt-2">
        {props.description
          ? props.description
          : "Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free."}
      </p>
    </div>
  );
}

export default Section;
