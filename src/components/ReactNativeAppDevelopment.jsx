import React, { useState } from "react";
import "../styles/components/ReactNativeAppDevelopment.css"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; 
import Reactnativeimage from "../assets/Reactnativeimage.svg";
import Handicon from "../assets/Handicon.svg";
import Settingicon from "../assets/Settingicon.svg";
import Reactnate from "../assets/Reactnate.svg";

const ReactNativeAppDevelopment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // All the card slides
  const slides = [
    {
      iconBg: "#FFCFD0",
      icon: Handicon,
      title: "React Native App\nDevelopment",
      description:
        "Under our React Native App Development service we offer cross-development apps that can be used to run on android, iOS, and other mobile platforms as well. React Native App Development costs less and also takes less time to develop.",
    },
    {
      iconBg: "#C5FDC9",
      icon: Settingicon,
      title: "React Native \nCustomizations",
      description:
        "Our React Native Customization service helps businesses modify features and functionality of their React Native apps. Our team of experts can customize your app according to your business needs and enhance it with additional features.",
    },
    {
      iconBg: "#FFF9C4",
      icon: Settingicon,
      title: "React Native \nCustomizations",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,."
    },
    {
      iconBg: "#FFF9C4",
      icon: Settingicon,
      title: "React Native \nCustomizations",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,."
    },
    

    // Add more cards here if needed...
  ];

  // Show 2 cards at a time
  const slidesPerPage = 2;
  const totalPages = Math.ceil(slides.length / slidesPerPage);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // Get the cards to display for the current page
  const visibleSlides = slides.slice(
    currentSlide * slidesPerPage,
    currentSlide * slidesPerPage + slidesPerPage
  );

  return (
    <div className="w-full max-w-[1678px] min-h-auto px-4 py-8 m-auto">
      {/* Header Section */}
      <div className="mb-6 native_header">
        <h1 className="text-2xl md:text-4xl lg:text-[48px] ml-0 md:ml-0 font-Montserrat font-extrabold text-black">
          React Native App Development
        </h1>
        <div className="flex items-center mt-1">
          <p className="text-sm md:text-base lg:text-[18px] ml-0 md:ml-0 text-black">
            At <span className="font-bold">Tech Devise </span> we offer various kinds of services under <span className="font-bold">React Native App
            Development.</span> All our <br /> services aim to satisfy your needs. Contact us
            today to know more about our services.
          </p>
          <img src={Reactnate} alt="React logo" className="ml-auto h-[93px] w-[83px]" />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row flex-wrap gap-6 mt-10">
        {/* Left Section - Illustration */}
        <div className="rounded-lg p-4 w-full lg:w-1/3 flex items-center justify-center">
          <div className="relative">
            <img
              src={Reactnativeimage}
              alt="Developer illustration"
              className="react_img w-full max-w-[464px] h-auto"
            />
          </div>
        </div>

        {/* Middle + Right Cards */}
        {visibleSlides.map((slide, index) => (
          <div
            key={index}
            className="react_nnative bg-white rounded-lg p-6 w-full sm:w-[90%] md:w-[48%] lg:w-[480px] h-auto transition-all duration-500"
          >
            <div className="flex flex-col h-full">
              <div
                className="rounded-full h-[98px] w-[98px] flex items-center justify-center mb-4"
                style={{ backgroundColor: slide.iconBg }}
              >
                <img src={slide.icon} alt="" />
              </div>
              <h2 className="text-[28px] text-black font-Montserrat font-semibold mb-7">
              {slide.title.split("\n").map((line, i, arr) => (
    <React.Fragment key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </React.Fragment>
  ))}
              </h2>
              <p className="text-black-600 text-[18px] font-Montserrat">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Nav Buttons */}
      <div className="flex justify-center gap-4 mt-8">
  <button
    onClick={handlePrev}
    className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full shadow-md"
  >
   <FaArrowLeft />
  </button>
  <button
    onClick={handleNext}
    className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full shadow-md"
  >
   <FaArrowRight />
  </button>
</div>

  
    </div>
  );
};

export default ReactNativeAppDevelopment;
