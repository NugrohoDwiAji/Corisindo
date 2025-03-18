import React from "react";

export default function CardSpeaker({img, name, jabatan}) {
  return (
    <div className="shadow-lg w-[17rem] rounded-xl hover:scale-110 transition duration-300 ease-in-out hover:shadow-2xl">
      <img src={img} alt="" className="h-64 w-full  bg-white object-cover rounded-t-xl mb-2" />
      <div className="flex flex-col  gap-1 p-3 h-28">
        <h1 className="font-bold  ">{name}</h1>
        <h2 className="text-sm">{jabatan}</h2>
      </div>
    </div>
  );
}
