import React from "react";
import { assets } from "../assets/assets";

function About() {
  return (
    <div className="py-10">
      <h1 className="text-4xl text-center pb-8">About Us</h1>
      <div className="flex gap-10">
        <div className="w-4/12">
          <img src={assets.about_image} alt="" />
        </div>
        <div className="w-8/12">
          <p className="text-[var(--grey1)] text-base pb-5">
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p className="text-[var(--grey1)] text-base pb-5">
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <p className="font-semibold pb-3">Our Vision</p>
          <p className="text-[var(--grey1)] text-base">
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
