import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function CardCompetition({ icon, title }) {


  useEffect(() => {
    AOS.init({
      duration: 3000, // Durasi animasi dalam milidetik
      once: true, // Animasi hanya berjalan sekali
       // Efek transisi animasi
    });
  }, []);
  return (
    <div data-aos="flip-left"
    data-aos-easing="ease-out-cubic" className="bg-gray-300 w-fit p-3 md:p-4 flex gap-2 rounded-lg items-center hover:cursor-pointer hover:bg-blue-950 hover:text-white hover:scale-110 hover:shadow-xl transition-all duration-300 ease-in-out">
      <div className="border-r-2 w-12 flex justify-start">{icon}</div>
      <h1 className="font-semibold text-sm">{title}</h1>
    </div>
  );
}
