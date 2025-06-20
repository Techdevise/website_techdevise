import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import "../styles/components/AnalystRecognition.css";
import Image2 from "../assets/Group 600.svg";
import Image3 from "../assets/Group 599.svg";
import Image4 from "../assets/Group 598.svg";
import Image5 from "../assets/Group 597.svg";

const categories = [
  {
    text: "NelsonHall",
    subtitle:
      "TechDevise recognized as a Leader in NelsonHall's NEAT Vendor Evaluation for Quality Engineering (RPA-Based Test Automation)",
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === categories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  return (
    <div
      className="w-full overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #0B6F4F, #021711)" }}
    >
      <div className="w-full max-w-[1680px] mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12">
        {/* Left: Text Section */}
        <div className="lg:w-[435px] analyst ">
          <h1 className="text-white text-[25px] md:text-[40px] font-extrabold leading-tight font-Montserrat mb-6 analystH1">
            Analyst Recognition
          </h1>
          <p className="text-white md:text-[20px] text-[18px] mb-10 max-w-3xl analystP">
            Our AI development services company delivers cutting-edge computer
            vision models for image recognition, object detection, and quality
            inspections. These models are powered by our AI software development
            services to enhance efficiency.
          </p>

          <button className="flex items-center gap-2 text-sm mb-4 text-white font-semibold px-5 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-all duration-500 ease-in-out">
            Know More
            <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center ml-1 transition-all duration-500 ease-in-out group-hover:bg-black">
              <ArrowUpRight className="h-4 w-4 text-[#2DC4A9] transition-all duration-500 ease-in-out group-hover:text-white" />
            </div>
          </button>
        </div>

        {/* Right: Image Cards Section */}
        {!isMobile ? (
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {categories.map((item, index) => {
              const isHovered = hoveredIndex === index;
              const isActive = index === activeIndex;

              let isExpanded = false;
              let widthClass = "w-[160px]";

              if (window.innerWidth < 1280) {
                // For screens below 1280px
                if (isHovered) {
                  widthClass = "w-[330px]";
                  isExpanded = true;
                } else if (hoveredIndex !== null && isActive) {
                  widthClass = "w-[160px]";
                  isExpanded = false;
                } else if (hoveredIndex === null && isActive) {
                  widthClass = "w-[330px]";
                  isExpanded = true;
                }
              } else if (window.innerWidth < 1600) {
                // For screens between 1280px and 1600px
                if (isHovered) {
                  widthClass = "w-[330px]";
                  isExpanded = true;
                } else if (hoveredIndex !== null && isActive) {
                  widthClass = "w-[160px]";
                  isExpanded = false;
                } else if (hoveredIndex === null && isActive) {
                  widthClass = "w-[330px]";
                  isExpanded = true;
                }
              } else {
                // For screens 1600px and above (original behavior)
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
              }

              return (
                <div
                  key={index}
                  className={` relative h-[400px] rounded-lg overflow-hidden shadow-lg transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${widthClass}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src={item.image}
                    alt={item.text}
                    className="absolute w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00000099] to-[#00000000] p-6 flex flex-col justify-end">
                    <h2
                      className={`text-white font-bold transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                        isExpanded
                          ? "text-[30px] relative mb-2 translate-x-0 translate-y-0 rotate-0"
                          : "text-[30px] absolute top-[340px] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[45deg] whitespace-nowrap mb-[50px]"
                      }`}
                    >
                      {item.text}
                    </h2>
                    <p
                      className={`text-white text-sm opacity-90 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                        isExpanded
                          ? "opacity-100 translate-y-0 block"
                          : "opacity-0 translate-y-4 hidden"
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div
            className="relative w-full"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex overflow-hidden">
              {categories.map((item, index) => (
                <div
                  key={index}
                  className={`relative h-[400px] w-full min-w-full rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out ${
                    index === activeIndex ? "block" : "hidden"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.text}
                    className="absolute w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00000099] to-[#00000000] p-6 flex flex-col justify-end">
                    <h2 className="text-white text-[30px] font-bold mb-2">
                      {item.text}
                    </h2>
                    <p className="text-white text-sm opacity-90">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4 gap-2">
              {categories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? "bg-white" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 text-white p-2 rounded-full"
            >
              &lt;
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 text-white p-2 rounded-full"
            >
              &gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalystRecognition;
