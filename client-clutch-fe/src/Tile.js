import React from "react";

export default function Tile({ tileTitle = "Placeholder Title", children }) {
  return (
    <div
      className="flex rounded-2xl sm:py-4 sm:px-8 py-2 px-4 shadow-xl text-stone-300 flex-grow flex-col"
      style={{ backgroundColor: "rgba(25,25,50,100)" }}
    >
      <span className="font-semibold text-sm sm:text-xl">{tileTitle}</span>
      {children}
    </div>
  );
}
