import React from "react";
import AppointmentCard from "../components/AppointmentCard";

function MyAppointment() {
  return (
    <div>
      <h1 className="border-b border-[var(--line2)] pt-10 pb-4 text-[var(--grey1)] font-medium text-2xl">
        My appointments
      </h1>
      <AppointmentCard />
    </div>
  );
}

export default MyAppointment;
