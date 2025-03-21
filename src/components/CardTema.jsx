import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function CardTema({icon, title}) {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Durasi animasi dalam milidetik
      once: true, // Animasi hanya berjalan sekali
       // Efek transisi animasi
    });
  }, []);
  return (
    
    <div data-aos="flip-left"
    data-aos-easing="ease-out-cubic" className="bg-blue-100 rounded-lg shadow-xl h-36 w-36 flex flex-col justify-center items-center text-blue-950 p-1 font-semibold hover:scale-110 transition duration-300 ease-in-out hover:bg-blue-950 hover:text-white">
      <div>{icon}</div>
      <h1 className="text-center">{title}</h1>
    </div>
  );
}
