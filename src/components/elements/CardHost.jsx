import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export default function CardHost({img}) {

  useEffect(() => {
    AOS.init({
      duration: 3000, // Durasi animasi dalam milidetik
      once: true, // Animasi hanya berjalan sekali
      easing: "ease-in-out", // Efek transisi animasi
    });
  }, []);

  return (
    <div data-aos="zoom-in-up" className='h-40 w-40'>
        <img src={img} alt="" />
    </div>
  )
}
