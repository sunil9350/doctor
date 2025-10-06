import React from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="flex gap-4 py-8 mt-15 border-b border-[var(--grey2)]">
        <div className="w-2/4 pr-10">
          <img src={assets.logo} alt="logo" />
          <p className="text-[var(--grey1)] text-base pt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="w-1/4 px-6">
          <h4 className="text-[var(--grey1)] font-semibold pb-4">COMPANY</h4>
          <ul>
            <li className="pb-1">
              <NavLink className={"text-[var(--grey1)]"} to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="pb-1">
              <NavLink className={"text-[var(--grey1)]"} to={"/about"}>
                About us
              </NavLink>
            </li>
            <li className="pb-1">
              <NavLink className={"text-[var(--grey1)]"} to={"/contact"}>
                Contact us
              </NavLink>
            </li>
            <li className="pb-1">
              <NavLink className={"text-[var(--grey1)]"} to={"/"}>
                Privacy policy
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="w-1/4 px-6">
          <h4 className="text-[var(--grey1)] font-semibold pb-4">
            GET IN TOUCH
          </h4>
          <ul>
            <li className="pb-1">
              <Link className={"text-[var(--grey1)]"} to={"tel:9898989898"}>
                +91-9898989898
              </Link>
            </li>
            <li className="pb-1">
              <Link
                className={"text-[var(--grey1)]"}
                to={"mailto:abc@gmail.com"}
              >
                abc@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center py-3 text-[var(--grey1)] text-sm">
        Copyright © 2025 Doctor - All Right Reserved.
      </p>
    </>
  );
}

export default Footer;
