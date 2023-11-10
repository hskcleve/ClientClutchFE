import React from "react";
import logo from "./assets/logo.png";

export default function Navbar() {
  return (
    <div
      className="bg-white flex py-5 px-10 text-white font-semibold gap-10 items-center"
      style={{ backgroundColor: "rgba(25,25,50,100)" }}
    >
      <img alt="clientclutch logotype" className="h-8" src={logo} />
      <span style={{ color: "rgba(106,106,159,100)" }}>Dashboard</span>
      <span>Live Analysis</span>
    </div>
  );
}
