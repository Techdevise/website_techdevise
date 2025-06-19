"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import codeimage from "../assets/codeimage.png";
import pythonimg from "../assets/pythonimg.svg";

const PythonExpertSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Tech Devise: Developing User friendly and Flexible Python",
      description:
        "In today's world, to be a successful business owner you need to keep up with the pace...",
      listItems: [
        "Responsive / Dynamic website",
        "Web crawlers",
        "Customized CMS",
        "Web application",
        "Framework Integration",
        "UI development",
        "Monitor capacity and performance of existing web applications",
      ],
    },
    {
      title: "Python Solutions for Enterprise Applications",
      description:
        "Python's versatility makes it perfect for enterprise-level applications...",
      listItems: [
        "Data analysis and visualization",
        "Machine learning implementation",
        "API development and integration",
        "Automation solutions",
        "Cloud-based applications",
        "Database management",
        "DevOps and CI/CD pipelines",
      ],
    },
    {
      title: "Custom Python Development for Your Industry",
      description:
        "Every industry has unique challenges that require specialized solutions...",
      listItems: [
        "Industry-specific applications",
        "Legacy system modernization",
        "Process automation",
        "Real-time data processing",
        "Predictive analytics",
        "Secure payment systems",
        "Compliance and reporting tools",
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="w-full mx-auto h-[900px] bg-[#EEFCFE] opacity-100 rounded-none flex flex-col lg:flex-row mt-5 sm:mt-8 lg:mt-10">
    <div className="w-full lg:max-w-[45%] relative h-[400px] sm:h-auto">
  <img
    src={codeimage || "/placeholder.svg"}
    alt="Tech workspace"
    className="w-full h-full object-cover lg:w-[825px]"
  />
</div>

      <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:pl-10 lg:pr-6 py-6 sm:py-8 flex flex-col justify-center relative">
        {/* 🟡 Python Image Behind UL on Mobile */}
        <motion.img
          src={pythonimg || "/placeholder.svg"}
          alt="Python"
          className="block sm:hidden absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] opacity-60 z-0"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Slide Content */}
        <div className="transition-opacity duration-500 ease-in-out relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-Montserrat font-extrabold text-black mb-4 sm:mb-6 lg:mb-10 lg:leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-base sm:text-lg lg:text-[18px] font-Montserrat text-black mb-4 sm:mb-6">
            {slides[currentSlide].description}
          </p>
          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-Montserrat font-semibold mb-2 sm:mb-4">
            Our python experts can help you work with:
          </h2>
          <ul className="list-disc list-inside text-black text-base sm:text-lg lg:text-[18px] font-Montserrat relative z-10">
            {slides[currentSlide].listItems.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation and Python Image (Visible on larger screens) */}
        <div className="flex flex-col sm:flex-row justify-end items-center sm:items-end mt-6 sm:mt-8 lg:mt-6 relative z-10">
          {/* <div className="flex space-x-4 mb-6 sm:mb-10 lg:mb-16 w-full justify-center sm:justify-start">
            <button
              className="bg-black text-white p-2 sm:p-3 rounded-full transition-transform duration-300 hover:scale-110"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <FaArrowLeft size={15} />
            </button>
            <button
              className="bg-black text-white p-2 sm:p-3 rounded-full transition-transform duration-300 hover:scale-110"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <FaArrowRight size={15} />
            </button>
          </div> */}

          {/* Python image visible only on sm+ screens */}
          <motion.img
            src={pythonimg || "/placeholder.svg"}
            alt="Python"
            className="hidden sm:block w-[150px] sm:w-[150px] lg:w-[182px] h-[150px] lg:h-[182px] opacity-60 mx-auto sm:mx-0"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
};

export default PythonExpertSection;
