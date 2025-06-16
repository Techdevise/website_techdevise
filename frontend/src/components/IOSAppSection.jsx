import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../styles/components/IOSAppSection.css";
import Mobilerrowicon from "../assets/Mobilerrowicon.svg";
import axios from "axios";

const IOSAppSection = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fetch slides from API
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await axios.get("http://localhost:9090/api/react_native");
        if (response.data.success) {
           
          setSlides(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching slides:", error.message);
      }
    };

    fetchSlides();
  }, []);

  const goToPrevSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle loading or empty slides
  if (slides.length === 0) {
    return <div className="text-center p-8">Loading slides...</div>;
  }

  return (
    <div className="new_sec_about w-[1678px] mx-auto inset-x-0 flex items-center overflow-hidden p-0">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2 lg:w-1/3 m-0 flex justify-center px-4">
        <img
          src={`http://localhost:9090/images${slides[currentSlide].image}`} // Ensure this is a valid image URL
          alt="Slide Visual"
          className="new_imgg w-full max-w-[526px] h-auto rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="new_col_dis txxt_abou w-1/2 md:w-1/2 lg:w-[66%] px-6">
        <h2 className="new_hed text-[#000000] font-Montserrat font-bold text-[48px] leading-tight text-left mt-[50px]">
          {slides[currentSlide].title}
        </h2>
        <p className="text-gray-700 text-left font-Montserrat text-[18px] mt-[20px]">
          {slides[currentSlide].message}
        </p>
        <button className="w-[265px] h-[65px] mt-6 px-6 py-3 bg-[#FCFFEE] text-[#000000] font-Archivo font-semibold text-[20px] border-2 border-[#000000] rounded-xl shadow-md flex items-center gap-2 hover:bg-gray-100">
          More Information <img src={Mobilerrowicon} alt="" />
        </button>

        {/* Arrow Buttons */}
      <div className="relative flex gap-4 justify-end bottom-0 md:bottom-10">
  <button
    onClick={goToPrevSlide}
    className="w-10 h-10 p-3 bg-black flex items-center justify-center text-white rounded-full hover:bg-gray-800"
  >
    <FaArrowLeft />
  </button>
  <button
    onClick={goToNextSlide}
    className="w-10 h-10 p-3 bg-black flex items-center justify-center text-white rounded-full hover:bg-gray-800"
  >
    <FaArrowRight />
  </button>
</div>
      </div>
    </div>
  );
};

export default IOSAppSection;
