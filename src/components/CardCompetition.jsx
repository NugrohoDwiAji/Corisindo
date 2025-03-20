import React from "react";

export default function CardCompetition({ icon, title }) {
  return (
    <div className="bg-gray-300 w-fit p-3 md:p-4 flex gap-2 rounded-lg items-center hover:cursor-pointer hover:bg-blue-950 hover:text-white hover:scale-110 hover:shadow-xl transition-all duration-300 ease-in-out">
      <div className="border-r-2 w-12 flex justify-start">{icon}</div>
      <h1 className="font-semibold text-sm">{title}</h1>
    </div>
  );
}
