import React from "react";

export default function LayoutKegiatan({ children, title }) {
  return (
    <div className="lg:max-w-[70rem] m-auto">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl bg-blue-950 text-white rounded-t-xl py-5 px-7">
        {title}
      </h1>
      <div className="p-4 md:p-5 shadow-xl">{children}</div>
      <div className="w-full h-12 bg-blue-950 rounded-b-xl"></div>
    </div>
  );
}
