import React from "react";
import dog_image from "../../assets/images/dog.jpg";
import "./Homepage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = [
  { id: 1, image: "/images/dog.jpg", name: "Dogs" },
  { id: 2, image: "/images/cat.jpg", name: "Cats" },
  { id: 3, image: "/images/fish.jpg", name: "Fish" },
  { id: 4, image: "/images/hospital.jpg", name: "Hospitals" },
  { id: 5, image: "/images/bird.jpg", name: "Birds" },
  { id: 6, image: "/images/rabbit.jpg", name: "Rabbits" },
  { id: 7, image: "/images/hamster.jpg", name: "Hamsters" },
  { id: 8, image: "/images/turtle.jpg", name: "Turtles" },
];

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10"
    onClick={onClick}
  >
    <FaChevronLeft size={20} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10"
    onClick={onClick}
  >
    <FaChevronRight size={20} />
  </button>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

const Homepage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center p-5 herosection">
        <div className="p-5 m-5">
          <h1 className="font-bold text-5xl text-center text-cyan-700 hover:text-cyan-800">
            Welcome to meneX Accessories
          </h1>
          <p className=" text-2xl text-center mt-2 text-gray-700">
            Discover any unique patterns for fashion and design.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="flex-none rounded-pill bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-cyan-600 hover:via-teal-600 hover:to-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ">
            Shop now
          </button>
        </div>
      </div>

      <div className="bg-gray-200 pt-5 pb-5">
        <div className="relative mx-auto w-[90%] mt-6 ">
          <Slider {...settings}>
            {categories.map((category) => (
              <div key={category.id} className="p-4">
                <div className="p-4 rounded-lg shadow-md bg-white text-center">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="rounded-lg mx-auto w-full h-40 object-cover"
                  />
                  <p className="text-center font-bold mt-3 mb-2 text-cyan-700 hover:text-cyan-800">
                    {category.name}
                  </p>

                  <p className="text-center font-bold mt-3 mb-2 text-cyan-700 hover:text-cyan-800">
                    10% off
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
