import React from "react";


export default function CardTema({icon, title}) {
  return (
    <div className="bg-blue-100 rounded-lg shadow-xl h-36 w-36 flex flex-col justify-center items-center text-blue-950 p-1 font-semibold hover:scale-110 transition duration-300 ease-in-out hover:bg-blue-950 hover:text-white">
      <div>{icon}</div>
      <h1 className="text-center">{title}</h1>
    </div>
  );
}
