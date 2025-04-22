import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center font-bold lg:text-4xl md:text-2xl gap-5 text-gray-500">
      <h1>404 NOT FOUND</h1>
      <h2 className="">URL YANG ANDA MASUKAN SALAH</h2>
      <div>
        <Link to="/" className="bg-blue-950 text-white px-5 py-3 rounded-lg lg:text-2xl hover:scale-110 transition-all duration-300 ease-in-out hover:text-blue-950 hover:bg-white hover:border-4 hover:border-blue-950">Kembali ke Dashboard</Link>
      </div>
    </div>
  );
}
