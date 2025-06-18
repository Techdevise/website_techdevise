import React, { useState } from "react";
import "../styles/components/ReactNativeAppDevelopment.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Reactnativeimage from "../assets/Reactnativeimage.svg";
import Handicon from "../assets/Handicon.svg";
import Settingicon from "../assets/Settingicon.svg";
import Reactnate from "../assets/Reactnate.svg";
import React_Plugin from "../assets/Group 647.svg";
import React_Interactive from "../assets/Group 644.svg";
import React_Native from "../assets/Group 645.svg";
import Native_Support from "../assets/Group 647.svg";

const ReactNativeAppDevelopment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const slides = [
    {
      iconBg: "#FFCFD0",
      icon: Handicon,
      title: "React Native App \nDevelopment",
      description:
        "Under our React Native App Development service we offer cross-development apps that can be used to run on android, iOS, and other mobile platforms as well. React Native App Development costs less and also takes less time to develop.",
    },
    {
      iconBg: "#C5FDC9",
      icon: Settingicon,
      title: "React Native \nCustomizations",
      description:
        "Our team specializes in React Native app Customizations. Hence, whatever feature you require in your app, our team will be able to offer the same. Also, our React Native Customizations are affordably priced. Contact us today for the best quote.",
    },
    {
      iconBg: "#FFF9C4",
      icon: React_Plugin,
      title: "React Plugin \nDevelopment",
      description:
        "At TechDevise we also offer React Plugin Development services. We not only create apps but also create React Plugin which can be used across various mobile platforms. All our services are priced at a pocket-friendly rate. Contact us today to know more.",
    },
    {
      iconBg: "#FFF9C4",
      icon: React_Interactive,
      title: "React Interactive UI \nDevelopment",
      description:
        "At TechDevise we offer React Interactive UI Development services. The experts in our team will be able to provide the right kind of React Interactive UI as per your needs. Hence, if you are looking for similar services at affordable rates, contact us today!",
    },
    {
      iconBg: "#FFF9C4",
      icon: React_Native,
      title: "React Native \nConsulting",
      description:
        "At TechDevise, we not only offer development and design services, but we also offer to consult services as well. If you want to know more about React Native, opt for our React Native Consulting today. We ensure that you will be satisfied by consulting us.",
    },
    {
      iconBg: "#FFF9C4",
      icon: Native_Support,
      title: "React Native Support \n& Maintenance",
      description:
        "At TechDevise, we not only offer development and design services, but we also offer to consult services as well. If you want to know more about React Native, opt for our React Native Consulting today. We ensure that you will be satisfied by consulting us.",
    },
  ];

  const slidesPerPage = 2;
  const totalPages = Math.ceil(slides.length / slidesPerPage);

  const changeSlide = (newIndex) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setIsFading(false);
    }, 300);
  };

  const handlePrev = () => {
    const newIndex = currentSlide === 0 ? totalPages - 1 : currentSlide - 1;
    changeSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentSlide === totalPages - 1 ? 0 : currentSlide + 1;
    changeSlide(newIndex);
  };

  const visibleSlides = slides.slice(
    currentSlide * slidesPerPage,
    currentSlide * slidesPerPage + slidesPerPage
  );

  return (
    <div className="w-full max-w-[1678px] min-h-auto px-4 py-8 m-auto">
      <div className="mb-6 native_header">
        <h1 className="text-2xl md:text-4xl lg:text-[48px] font-Montserrat font-extrabold text-black">
          React Native App Development
        </h1>
        <div className="flex items-center mt-1">
          <p className="text-sm md:text-base lg:text-[18px] text-black">
            At <span className="font-bold">Tech Devise </span> we offer various
            kinds of services under{" "}
            <span className="font-bold">React Native App Development.</span><br /> All
            our services aim to satisfy your needs. Contact us today to
            know more about our services.
          </p>
          <img
            src={Reactnate}
            alt="React logo"
            className="ml-auto h-[93px] w-[83px]"
          />
        </div>
      </div>

      <div
        className={`flex flex-col lg:flex-row flex-wrap gap-6 mt-10 transition-opacity duration-300 `}
      >
        <div className="rounded-lg p-4 w-full lg:w-1/3 flex items-center justify-center">
          <div className="relative">
            <img
              src={Reactnativeimage}
              alt="Developer illustration"
              className="react_img w-full max-w-[464px] h-auto"
            />
          </div>
        </div>

        {visibleSlides.map((slide, index) => (
          <div
            key={index}
            className={`react_nnative bg-white rounded-lg p-6 w-full sm:w-[90%] md:w-[48%] lg:w-[410px] h-auto transition-all duration-500  ${
          isFading ? "fade-out" : "fade-in"
        }`}
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
              <p className="text-black-600 text-[18px] font-Montserrat">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full shadow-md hover:bg-gray-800"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full shadow-md hover:bg-gray-800"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ReactNativeAppDevelopment;
