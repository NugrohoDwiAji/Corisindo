import React from 'react'
import { ArrowRightFromLine } from "lucide-react";

export default function CardPendaftaran({img, title}) {
  return (
    <div className='shadow-lg rounded-lg w-60 md:w-72 lg:w-[24rem]'>
        <img src={img} alt="" className='h-48 md:h-56 w-60 md:w-72 lg:w-[24rem] lg:h-[19rem] bg-rose-300 object-cover rounded-t-xl mb-2' />
        <div className='flex flex-col gap-3 lg:gap-5 lg:px-5 lg:pb-5 px-4 pb-4'>
        <h1 className='font-semibold md:font-bold md:text-xl lg:text-2xl'>{title}</h1>
        <button className="flex items-center gap-2 hover:bg-white hover:text-blue-950 w-fit border rounded-lg font-semibold px-2 md:px-3 lg:px-4 py-1 md:py-2 bg-blue-950 text-white hover:scale-110 transition duration-300 ease-in-out text-xs md:text-base lg:text-lg">
              Daftar Sekarang <ArrowRightFromLine />
            </button>
        </div>
    </div>
  )
}
