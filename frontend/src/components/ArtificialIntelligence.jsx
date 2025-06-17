import React, { useState } from "react";
import '../styles/components/ArtificialIntelligence.css'
import bro from "../assets/bro.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const slides = [
  {
    title: "Developing User-Friendly Python",
    content: " Artificial Intelligence as you can understand is all about implementing a system that can calculate, derive, and take decisions without having to wait for human input. Although these days in many fields AI is being used, it’s still a new technology in the corporate world and requires a lot of implementation capabilities. At Tech Devise, we stand as the bridge between the corporate needs and the academic knowledge of AI. We implement the data research models into machines to offer our clients the right solution for their requirement. We have experts in our team of AI and ML. From data studies to deployment, we stay with our clients and make sure that we deliver them a capable AI-enabled system.  We team up with data scientists to extract valuable information from any existing data present in any company and then optimize their business with the help of AI and ML. If you wish to build scalable ML models that can improve your business progress, we are definitely with you.",
    image: bro,
  },
  {
    title: "Custom CMS Development",
    content: "Build secure and tailored CMS systems...",
    image: bro,
  },
  // Add more slides as needed
];

const ArtificialIntelligence = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slide = slides[currentIndex];
  return (
    <div className="art_intel w-full max-w-[1620px] mx-auto flex flex-col md:flex-row items-start bg-[#FAFAFA] px-4 md:px-10 py-8 md:py-16 gap-6 md:gap-10 relative">
      {/* Left Section */}
     
        {/* Vertical Heading */}
      <div className="hidden md:flex md:self-start">
        <h2 className="text-[25px] ml-[-160px] mt-[90px] font-extrabold font-Montserrat text-black transform -rotate-89 whitespace-nowrap">
          Artificial Intelligence
        </h2>
      </div>
      <div className="w-full w-2/2 flex flex-col gap-4 md:gap-6 order-2 md:order-1">
        <p className="w-full text-sm md:text-base lg:text-[16px] text-black leading-relaxed md:ml-[-100px]">
        {slide.content}
        </p>

        {/* Navigation Arrows */}
        {/* <div className="flex gap-4 justify-center md:justify-start md:mt-4 md:ml-[-100px]">
          <button onClick={handlePrev} className="bg-black text-white p-3 rounded-full">
            <FaArrowLeft size={15} />
          </button>
          <button onClick={handleNext} className="bg-black text-white p-3 rounded-full">
            <FaArrowRight size={15} />
          </button>
        </div> */}
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/3 flex justify-center items-start order-1 md:order-2">
        <img
        src={slide.image}
          alt="Tech workspace"
          className="w-[430px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default ArtificialIntelligence;
