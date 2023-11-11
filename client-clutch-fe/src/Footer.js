import React from "react";

export default function Footer() {
  return (
    <div
      className="bg-white flex py-2 px-5 sm:py-4 sm:px-10 text-xs font-light tracking-widest justify-between"
      style={{
        backgroundColor: "rgba(25,25,50,100)",
        color: "rgba(106,106,159,100)",
      }}
    >
      <span className="hidden sm:block">CLIENTCLUTCH 2023</span>
      <span className="hidden sm:block">IS4301 SCRUM MASTER UNITED</span>
      <span className="sm:hidden" style={{ fontSize: "0.75em" }}>
        CLIENTCLUTCH 2023
      </span>
      <span className="sm:hidden" style={{ fontSize: "0.75em" }}>
        IS4301 SCRUM MASTER UNITED
      </span>
    </div>
  );
}
