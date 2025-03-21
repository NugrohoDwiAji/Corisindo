import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export default function LinkBar({url, title}) {

  useEffect(() => {
    AOS.init({
      duration: 2000, // Durasi animasi dalam milidetik
      once: true, // Animasi hanya berjalan sekali
       // Efek transisi animasi
    });
  }, []);

  return (
    <div data-aos="flip-up" className='w-fit py-2 md:py-4 lg:py-6 px-7 md:px-10 lg:px-14 bg-white text-blue-950 border-2 border-blue-950 hover:bg-blue-950 hover:text-white transition-all duration-300 ease-in-out hover:scale-110 rounded-bl-full rounded-tr-full font-semibold'>
        <a href={url} className='text-xs md:text-lg lg:text-xl'>{title}</a>
    </div>
  )
}
