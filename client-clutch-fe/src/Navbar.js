import React from "react";

export default function Navbar() {
  return (
    <div
      className="bg-white flex py-5 px-10 text-white font-semibold gap-10 items-center justify-center sm:justify-start"
      style={{ backgroundColor: "rgba(25,25,50,100)" }}
    >
      <img
        alt="clientclutch logotype"
        className="h-8"
        src={require("./adfs.png")}
      />
      <span
        className="hidden sm:block"
        style={{ color: "rgba(106,106,159,100)" }}
      >
        Dashboard
      </span>
      <span className="hidden sm:block">Live Analysis</span>
    </div>
  );
}
