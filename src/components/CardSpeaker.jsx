import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CardSpeaker({img, name, jabatan}) {


    useEffect(() => {
      AOS.init({
        duration: 3000, // Durasi animasi dalam milidetik
        once: true, // Animasi hanya berjalan sekali
        easing: "ease-in-out", // Efek transisi animasi
      });
    }, []);

  return (
    <div data-aos="zoom-out-up" className="shadow-lg w-[17rem] rounded-xl hover:scale-110 transition duration-300 ease-in-out hover:shadow-2xl">
      <img src={img} alt="" className="h-64 w-full  bg-white object-cover rounded-t-xl mb-2" />
      <div className="flex flex-col  gap-1 p-3 h-28">
        <h1 className="font-bold  ">{name}</h1>
        <h2 className="text-sm">{jabatan}</h2>
      </div>
    </div>
  );
}
