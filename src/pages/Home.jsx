import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        <div
          className="h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
            <div className="text-center text-white px-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Quality Service at Affordable Prices
              </h1>
              <p className="mb-8">
                Cooltek provides a wide variety of HVAC services to the homes
                and businesses since 1965.
              </p>
              <button className="bg-yellow-500 text-white py-2 px-4 rounded-md font-bold">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div
          className="h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${image2})` }}
        >
          <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
            <div className="text-center text-white px-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Keeping You Cool
              </h1>
              <p className="mb-8">
                Providing top-notch HVAC services for over 50 years.
              </p>
              <button className="bg-yellow-500 text-white py-2 px-4 rounded-md font-bold">
                Read More
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Home;
