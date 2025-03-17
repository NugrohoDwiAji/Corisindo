import React from "react";

export default function CardSpeaker({img, name, jabatan}) {
  return (
    <div className="shadow-lg h-72 w-60 rounded-xl hover:scale-110 transition duration-300 ease-in-out hover:shadow-2xl">
      <img src={img} alt="" className="h-48 w-60 bg-rose-300 object-cover rounded-t-xl mb-2" />
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="font-bold  ">{name}</h1>
        <h2 className="text-sm">{jabatan}</h2>
      </div>
    </div>
  );
}
