import React from "react";
import Line from "./elements/Line";

export default function TitleLine({ title, children }) {
  return (
    <div className="flex items-center">
      <Line className="" />
      <h1 className="px-4 font-semibold md:text-lg lg:text-xl lg:font-bold text-blue-950">{title || children}</h1>
      <Line className=" items-start" />
    </div>
  );
}
