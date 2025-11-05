import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import banner_1 from "../../../assets/banner_img/Smartphone Banner.png";
import banner_2 from "../../../assets/banner_img/smartwatch electronics.png";
import banner_3 from "../../../assets/banner_img/Appliances Banner.png";

// Custom Arrow Components
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-2 z-20 cursor-pointer text-white text-xl transform -translate-y-1/2"
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-2 z-20 cursor-pointer text-white text-xl transform -translate-y-1/2"
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
};

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full overflow-hidden relative">
      <Slider {...settings}>
        <div>
          <img
            src={banner_1}
            alt="Smartphone Banner"
            className="w-full  h-[60vh] object-cover"
          />
        </div>
        <div>
          <img
            src={banner_2}
            alt="Smartwatch Banner"
            className="w-full h-[60vh] object-cover"
          />
        </div>
        <div>
          <img
            src={banner_3}
            alt="Appliances Banner"
            className="w-ful h-[60vh] object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
