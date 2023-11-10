import React from "react";

export default function Tile({ tileTitle = "Placeholder Title", children }) {
  return (
    <div
      className="flex rounded-2xl py-4 px-8 shadow-xl text-stone-300 flex-grow flex-col"
      style={{ backgroundColor: "rgba(25,25,50,100)" }}
    >
      <span className="font-semibold text-lg">{tileTitle}</span>
      {children}
    </div>
  );
}
