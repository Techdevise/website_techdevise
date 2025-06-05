import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Aicomputervision from "../assets/Aicomputervision.svg"

const tabs = [
//   "Computer Vision Models",
//   "Machine Learning Models",
//   "NLP Models",
//   "Deep Learning Models",
//   "Hybrid Models",
//   "Generative Models"
];

const ModelsTabsSection = () => {
  return (
    <div className="w-[1620px] h-[596px] bg-white rounded-xl shadow-md px-10 py-12 mx-auto">
    {/* Tabs */}
    <ul className="flex space-x-16 border-b w-fit mb-10">
      {[
        "Computer Vision Models",
        "Machine Learning Models",
        "NLP Models",
        "Deep Learning Models",
        "Hybrid Models",
        "Generative Models",
      ].map((tab, idx) => (
        <li
          key={idx}
          className={`pb-2 text-sm font-semibold cursor-pointer ${
            idx === 0
              ? "text-[#4F3FCB] border-b-2 border-[#4F3FCB]"
              : "text-black"
          }`}
        >
          {tab}
        </li>
      ))}
    </ul>
  
    {/* Your main content (image and description etc.) goes here */}
    <div className="flex gap-32  mt-6">
      {/* Left image */}
      <img
        src={Aicomputervision}
        alt="model"
        className="w-[400px] object-contain"
      />
  
      {/* Right content */}
      <div className="w-full max-w-xl">
        <h2 className="text-3xl font-bold mb-4">Computer <br /> Vision Models</h2>
        <p className="text-black mb-6">
          Our AI development services company delivers cutting-edge computer vision models for image recognition, object detection, and quality inspections. These models are powered by our AI
          software development services to enhance efficiency.
        </p>
        <button className="bg-[#4F3FCB] text-white px-6 py-3 rounded-full flex items-center gap-2">
          Get in Touch <FaArrowRight />
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default ModelsTabsSection;
