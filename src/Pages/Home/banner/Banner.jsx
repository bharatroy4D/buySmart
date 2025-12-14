import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import banner_1 from "../../../assets/banner_img/Smartphone Banner.png";
import banner_2 from "../../../assets/banner_img/smartwatch electronics.png";
import banner_3 from "../../../assets/banner_img/Appliances Banner.png";

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-3 md:right-6 z-20 
                 -translate-y-1/2 cursor-pointer
                 bg-black/40 hover:bg-black/60 transition
                 text-white p-2 md:p-3 rounded-full"
    >
      <FaArrowRight className="text-sm md:text-lg" />
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 left-3 md:left-6 z-20 
                 -translate-y-1/2 cursor-pointer
                 bg-black/40 hover:bg-black/60 transition
                 text-white p-2 md:p-3 rounded-full"
    >
      <FaArrowLeft className="text-sm md:text-lg" />
    </div>
  );
};

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
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, // mobile & tablet
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="w-full relative container mx-auto px-5 ">
      <Slider {...settings}>
        {[banner_1, banner_2, banner_3].map((img, index) => (
          <div key={index} className="p-5 md:p-0">
            <img
              src={img}
              alt={`Banner ${index + 1}`}
              className="
                w-full
                h-[24vh] sm:h-[45vh] md:h-[30vh] lg:h-[60vh]
                object-cover
                rounded-xl md:rounded-none
                shadow-lg md:shadow-none
              "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
