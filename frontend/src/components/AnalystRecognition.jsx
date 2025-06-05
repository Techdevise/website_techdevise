import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import Image2 from "../assets/Group 600.svg";
import Image3 from "../assets/Group 599.svg";
import Image4 from "../assets/Group 598.svg";
import Image5 from "../assets/Group 597.svg";

const categories = [
  {
    text: "NelsonHall",
    subtitle:
      "TechDevise recognized as a Leader in NelsonHall’s NEAT Vendor Evaluation for Quality Engineering (RPA-Based Test Automation)",
    image: Image2,
  },
  {
    text: "Gartner",
    subtitle:
      "TechDevise recognized as a Representative Vendor in Gartner® 2023 Market Guide for Application Testing Services Under Pure-Play Testing Services Providers.",
    image: Image3,
  },
  {
    text: "Everest Group",
    subtitle:
      "TechDevise positioned as a Major Contender and Star Performer in the Next-generation QE services PEAK Matrix Assessment.",
    image: Image4,
  },
  {
    text: "ISG",
    subtitle:
      "TechDevise recognized as a Contender in ISG Provider Lens™ Next-Gen ADM services report for Continuous Testing.",
    image: Image5,
  },
];

const AnalystRecognition = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const activeIndex = 0;

  return (
    <div
      className="w-full overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #0B6F4F, #021711)" }}
    >
      <div className="w-full max-w-[1650px] mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12">
        {/* Left: Text Section */}
        <div className="lg:w-[435px] mt-[70px]">
          <h1 className="text-white text-[40px] font-extrabold leading-tight font-Montserrat mb-6">
            Analyst Recognition
          </h1>
          <p className="text-white text-lg mb-10 max-w-3xl">
            Our AI development services company delivers cutting-edge computer
            vision models for image recognition, object detection, and quality
            inspections. These models are powered by our AI software
            development services to enhance efficiency.
          </p>

          <button className="flex items-center gap-2 text-sm mb-4 text-white font-semibold px-5 py-2 rounded-full border border-white hover:bg-white hover:text-black transition">
            Know More
            <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center ml-1">
              <ArrowUpRight className="h-4 w-4 text-[#2DC4A9]" />
            </div>
          </button>
        </div>

        {/* Right: Image Cards Section */}
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start transition-all">
          {categories.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isActive = index === activeIndex;

            let isExpanded = false;
            let widthClass = "w-[160px]";

            if (isHovered) {
              widthClass = "w-[600px]";
              isExpanded = true;
            } else if (hoveredIndex !== null && isActive) {
              widthClass = "w-[160px]";
              isExpanded = false;
            } else if (hoveredIndex === null && isActive) {
              widthClass = "w-[600px]";
              isExpanded = true;
            }

            return (
              <div
                key={index}
                className={`relative h-[400px] rounded-lg overflow-hidden shadow-lg transition-all duration-500 ${widthClass}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={item.image}
                  alt={item.text}
                  className="absolute w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#00000099] to-[#00000000] p-6 flex flex-col justify-end">
                  {/* Title */}
               <h2
  className={`text-white font-bold transition-all duration-300 justify-center ${
    isExpanded
      ? "text-[30px] relative mb-2"
      : "text-[30px] absolute top-[340px] left-1/2 -translate-x-1/2 -translate-y-1/2  rotate-[45deg] whitespace-nowrap mb-[50px]"
  }`}
>
  {item.text}
</h2>

                  {/* Subtitle only shown if expanded */}
                  <p
                    className={`text-white text-sm opacity-90 transition-opacity duration-300 ${
                      isExpanded ? "block" : "hidden"
                    }`}
                  >
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AnalystRecognition;
