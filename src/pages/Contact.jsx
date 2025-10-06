import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="py-10">
      <h1 className="text-4xl text-center pb-8">Contact Us</h1>
      <div className="flex gap-10">
        <div className="w-4/12">
          <img src={assets.contact_image} alt="" />
        </div>
        <div className="w-8/12">
          <p className="font-semibold pb-3">Our OFFICE</p>
          <p className="text-[var(--grey1)] text-base pb-4">
            54709 Willms Station Suite 350, <br /> Washington, USA
          </p>
          <ul>
            <li>
              <Link to={"tel:9898989898"}>Tel: +91-9898989898</Link>
            </li>
            <li>
              <Link to={"mailto:mail@gmail.com"}>Email: mail@gmail.com</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
