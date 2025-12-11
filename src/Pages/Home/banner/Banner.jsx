import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import banner_1 from "../../../assets/banner_img/Smartphone Banner.png";
import banner_2 from "../../../assets/banner_img/smartwatch electronics.png";
import banner_3 from "../../../assets/banner_img/Appliances Banner.png";

// Custom Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-2 md:right-5 z-20 cursor-pointer 
               text-white text-lg md:text-2xl transform -translate-y-1/2 
               bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-2 md:left-5 z-20 cursor-pointer 
               text-white text-lg md:text-2xl transform -translate-y-1/2 
               bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          arrows: false, // hide arrows on mobile
        },
      },
    ],
  };

  return (
    <div className="w-full relative">
      <Slider {...settings}>
        <div>
          <img
            src={banner_1}
            alt="Smartphone Banner"
            className="w-full h-[35vh] sm:h-[45vh] md:h-[60vh] lg:h-[70vh] object-cover"
          />
        </div>

        <div>
          <img
            src={banner_2}
            alt="Smartwatch Banner"
            className="w-full h-[35vh] sm:h-[45vh] md:h-[60vh] lg:h-[70vh] object-cover"
          />
        </div>

        <div>
          <img
            src={banner_3}
            alt="Appliances Banner"
            className="w-full h-[35vh] sm:h-[45vh] md:h-[60vh] lg:h-[70vh] object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
