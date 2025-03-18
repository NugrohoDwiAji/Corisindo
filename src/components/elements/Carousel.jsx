import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";




export default function Carousel({children}) {



  const [currentSlide, setcurrentSlide] = useState(0)
  const [arrows, setarrows] = useState(false)
 

  // Deteksi ukuran layar dan ubah slidesToShow


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0px",
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: index => setcurrentSlide(index),
    arrows:arrows,
    customPaging: i => (
      <div className={`w-2 h-2 mx-1 mt-4 rounded-full ${currentSlide === i ? "bg-blue-950" : "bg-gray-300/70"}  transition-all duration-300 ease-in-out`} />
    ),
     dotsClass: "slick-dots custom-dots",
   
  };

  return (
    <div className="relative max-w-sm lg:max-w-xl mx-auto ">
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
}
