import React from "react";
import clsx from "clsx";

const Line = ({className = ""}) => {
  return (
    <div className= {clsx("flex flex-col items-end", className)}>
      <hr className="bg-blue-950 h-1 w-12 border-t-0 rounded-full" />
      <hr className="bg-blue-950 h-1 w-16 mt-2 border-t-0 rounded-full" />
    </div>
  );
};

export default Line;
