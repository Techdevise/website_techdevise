import React, { useState, useEffect, useRef } from "react";
import "../styles/pages/TechOfferings.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Arrowright from "../assets/Arrowright.svg";
import Arrowleft from "../assets/Arrowleft.svg";

const clocks = [
  { country: "India", timeZone: "Asia/Kolkata", color: "bg-[#B9CFEC]" },
  { country: "Canada", timeZone: "America/Toronto", color: "bg-[#EA99B9]" },
  { country: "USA", timeZone: "America/Los_Angeles", color: "bg-[#FDE3DA]" },
  {
    country: "Netherlands",
    timeZone: "Europe/Amsterdam",
    color: "bg-[#719E91]",
  },
];

const Clock = ({ country, timeZone, color }) => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", { timeZone })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", { timeZone }));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  const date = new Date(new Date().toLocaleString("en-US", { timeZone }));
  const hours = date.getHours() % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hourAngle = hours * 30 + minutes * 0.5;
  const minuteAngle = minutes * 6;
  const secondAngle = seconds * 6;

  return (
    <div className="clock_wise">
      <div
        className={`main_new ${color} rounded-full flex items-center justify-center border-[3px] border-gray-300 shadow-md relative`}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <div
            className="absolute w-[4px] h-[30%] bg-gray-600 top-[20%] left-1/2 transform -translate-x-1/2 origin-bottom"
            style={{ transform: `translateX(-50%) rotate(${hourAngle}deg)` }}
          />
          <div
            className="absolute w-[3px] h-[40%] bg-gray-800 top-[10%] left-1/2 transform -translate-x-1/2 origin-bottom"
            style={{ transform: `translateX(-50%) rotate(${minuteAngle}deg)` }}
          />
          <div
            className="absolute w-[1.5px] h-[45%] bg-red-500 top-[5%] left-1/2 transform -translate-x-1/2 origin-bottom shadow-md"
            style={{ transform: `translateX(-50%) rotate(${secondAngle}deg)` }}
          />
          <div className="absolute w-3 h-3 bg-red-500 rounded-full inset-0 m-auto z-10 shadow-md"></div>
          <div className="absolute w-[2px] h-4 bg-orange-400 top-[4px] left-1/2 transform -translate-x-1/2"></div>
          <div className="absolute w-[2px] h-4 bg-orange-400 right-[4px] top-1/2 transform -translate-y-1/2"></div>
          <div className="absolute w-[2px] h-4 bg-orange-400 bottom-[4px] left-1/2 transform -translate-x-1/2"></div>
          <div className="absolute w-[2px] h-4 bg-orange-400 left-[4px] top-1/2 transform -translate-y-1/2"></div>
        </div>
      </div>
      <p className="mt-2 font-medium w-full max-w-[120px] h-auto opacity-100 font-montserrat text-center leading-5 clock-country">
        {country.toUpperCase()}
      </p>
      <p className="text-gray-400 w-[120px] h-auto opacity-100 text-[#FFFFFF] font-montserrat clock-time text-center">
        {time}
      </p>
    </div>
  );
};

const TechOfferings = () => {
  const carouselRef = useRef(null);

  const steps = [
    {
      title: "Share your Requirements",
      description: "Define your project needs and skills required",
      bgColor: "bg-[#157B6C]",
      textColor: "text-white",
    },
    {
      title: "Get Vetted Profile",
      description: "Define your project needs and skills required",
      bgColor: "bg-white",
      textColor: "text-black",
    },
    {
      title: "Conduct Interview",
      description: "Define your project needs and skills required",
      bgColor: "bg-[#157B6C]",
      textColor: "text-white",
    },
    {
      title: "Hire & Get Started",
      description: "Define your project needs and skills required",
      bgColor: "bg-white",
      textColor: "text-black",
    },
  ];

  const handleScroll = (direction) => {
    const container = carouselRef.current;
    if (!container) return;
    const card = container.querySelector(".snjy_new");
    const cardWidth = card?.offsetWidth || 1200;
    const gap = 32;
    const scrollAmount = cardWidth + gap;
    const currentScroll = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const tolerance = 10;
    if (direction === "right") {
      if (currentScroll >= maxScroll - tolerance) {
        container.scrollTo({
          left: 0,
          behavior: "auto",
        });
      } else {
        container.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    } else if (direction === "left") {
      if (currentScroll <= tolerance) {
        container.scrollTo({
          left: maxScroll,
          behavior: "auto",
        });
      } else {
        container.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="w-full max-w-[1920px] mx-auto text-white rounded-lg rounded-3xl overflow-hidden">
      <div className="tech_offer">
        <h2
          style={{
            display: "inline-table",
            background: "linear-gradient(to right, #E0E0E0, #157B6C)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            color: "#157B6C",
          }}
          className="head_main_tag text-[#B4F1E8] font-extrabold font-montserrat responsive-heading"
        >
          Our Tech Offerings - Tailored to{" "}
          <span className="text-green-400">Your Time</span>
          <br className="hidden sm:block"></br> Zone and Business Needs
        </h2>
        <div className="new_offer flex justify-center gap-2 mt-8">
          <button
            onClick={() => handleScroll("left")}
            className="w-10 h-10 bg-white text-[#157B6C] flex items-center justify-center rounded-full shadow-md"
          >
            <FaArrowLeft className="text-[#59C3C2] text-md" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="w-10 h-10 bg-[#157B6C] text-white flex items-center justify-center rounded-full shadow-md"
          >
            <FaArrowRight className="text-white text-md" />
          </button>
        </div>
      </div>
      <div
        ref={carouselRef}
        className="tech_offering flex flex-nowrap gap-8 overflow-x-auto scroll-smooth px-4 md:px-8"
      >
        <div className="snjy_new min-w-full sm:min-w-[90%] md:min-w-[85%] lg:min-w-[1000px] xl:min-w-[1215px] bg-[#0F261E] flex flex-col md:flex-row gap-8 h-auto rounded-3xl transition-transform duration-300 p-4 md:p-6">
          <div className="clock_circle order-2 md:order-1 w-full md:w-[44%] flex justify-center">
            <div className="green_circle bg-[#157B6C] text-white text-center rounded-full flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 animate-spin-slow">
              <div className="bord_whit">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 transition-colors duration-300 ease-in-out hover:text-yellow-300">
                  Staff Augmentation
                </h3>
                <p className="text-center text-gray-300 transition-colors duration-300 ease-in-out hover:text-gray-100 text-sm sm:text-base">
                  Hire pre-vetted developers skilled in the latest technologies,
                  ready to work around the clock to meet your project needs.
                </p>
              </div>
            </div>
          </div>

          <div className="new_cont order-3 md:order-2 w-full md:w-[56%] flex flex-wrap justify-center md:justify-between">
            {clocks.map((clock, index) => (
              <Clock
                key={index}
                country={clock.country}
                timeZone={clock.timeZone}
                color={clock.color}
              />
            ))}
          </div>
        </div>

        <div className="relative w-full min-w-full sm:min-w-[90%] md:min-w-[85%] lg:min-w-[1000px] xl:min-w-[1215px] h-auto bg-[#0F261E] p-4 sm:p-6 md:p-8 rounded-3xl order-4 md:order-3">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
            Build your offshore development team
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 md:mb-8">
            At TechDevise, setting up a dedicated software development team is
            quick and hassle-free, completed in just four simple steps.
          </p>
          <div className="arrow_left hidden lg:block">
            <img src={Arrowleft || "/placeholder.svg"} alt="" />
          </div>
          <div className="flex flex-wrap justify-center md:justify-between items-center relative px-2 md:px-4 gap-3 sm:gap-4 md:gap-5 lg:gap-20">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                {index > 0 && index < steps.length && (
                  <>
                    <div className="arrow_right hidden lg:block">
                      <img src={Arrowright || "/placeholder.svg"} alt="" />
                    </div>
                    <div className="arrow_greenright hidden lg:block">
                      <img src={Arrowright || "/placeholder.svg"} alt="" />
                    </div>
                    <div className="arrow_greenleft hidden lg:block">
                      <img src={Arrowleft || "/placeholder.svg"} alt="" />
                    </div>
                  </>
                )}
                <div
                  className={`w-[45%] sm:w-[40%] md:w-[22%] lg:w-[218px] h-auto ${step.bgColor} ${step.textColor} p-3 sm:p-4 md:p-6 rounded-lg shadow-md mb-4 md:mb-0 step-card`}
                >
                  <h4 className="text-base sm:text-lg md:text-xl font-bold mb-1 md:mb-2 mt-2 sm:mt-3 md:mt-5 lg:mt-10">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm">{step.description}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default TechOfferings;
