import React from "react";

export default function Title({ title }) {
  return (
    <div className="text-white text-xl sm:text-3xl font-extrabold px-10 py-8">
      {title}
    </div>
  );
}
