import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner_1 from "../../../assets/banner_img/Smartphone Banner.png";
import banner_2 from "../../../assets/banner_img/smartwatch electronics.png";
import banner_3 from "../../../assets/banner_img/Appliances Banner.png";

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
  };

  return (
    <div className="banner-slider">
      <Slider {...settings}>
        <div>
          <img 
            src={banner_1} 
            alt="Smartphone Banner" 
            className="w-full h-auto"
          />
        </div>
        <div>
          <img 
            src={banner_2} 
            alt="Smartwatch Banner" 
            className="w-full h-auto"
          />
        </div>
        <div>
          <img 
            src={banner_3} 
            alt="Appliances Banner" 
            className="w-full h-auto"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;