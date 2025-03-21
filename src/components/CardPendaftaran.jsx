import React, {useEffect} from 'react'
import { ArrowRightFromLine } from "lucide-react";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

export default function CardPendaftaran({img, title, url}) {

  useEffect(() => {
    AOS.init({
      duration: 3000, // Durasi animasi dalam milidetik
      once: true, // Animasi hanya berjalan sekali
      easing: "ease-in-out", // Efek transisi animasi
    });
  }, []);

  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-bottom" className='shadow-lg rounded-lg w-60 md:w-72 lg:w-[24rem]'>
        <img src={img} alt="" className='h-48 md:h-56 w-60 md:w-72 lg:w-[24rem] lg:h-[19rem] bg-rose-300 object-cover rounded-t-xl mb-2' />
        <div className='flex flex-col gap-3 lg:gap-5 lg:px-5 lg:pb-5 px-4 pb-4'>
        <h1 className='font-semibold md:font-bold md:text-xl lg:text-2xl'>{title}</h1>
        <Link to={url} className="flex items-center gap-2 hover:bg-white hover:text-blue-950 w-fit border rounded-lg font-semibold px-2 md:px-3 lg:px-4 py-1 md:py-2 bg-blue-950 text-white hover:scale-110 transition duration-300 ease-in-out text-xs md:text-base lg:text-lg">
              Daftar Sekarang <ArrowRightFromLine />
            </Link>
        </div>
    </div>
  )
}
