import React, { useRef, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { gsap } from "gsap";
import Ads1 from "../assets/Ads1.svg";
import Ads2 from "../assets/Ads2.svg";
import Ads3 from "../assets/Ads3.svg";
import Ads4 from "../assets/Ads4.svg";
import feature1 from "../assets/feature1.svg";
 
export default function Portfolio() {
  const slidesRef = useRef([]);
 
  const slides = [
    {
      title: "Show up",
      titleColor: "text-[#1F8E3D]",
      subtitle: "with Google Ads",
      description:
        "Whatever your business goal, drive better results with Performance Max.",
      image: Ads1,
      bgColor: "bg-[#CEEAD6]",
    },
    {
      title: "Reach more",
      subtitle: "with Google Ads",
      titleColor: "text-[#F29900]",
      description: "Automated ads that help you find the right customers.",
      image: Ads2,
      bgColor: "bg-[#FEF7E0]",
    },
    {
      title: "Grow faster",
      subtitle: "with Search Ads",
      titleColor: "text-[#1C73E8]",
      description:
        "Get in front of customers when they're searching for your business.",
      image: Ads3,
      bgColor: "bg-[#D2E3FC]",
    },
    {
      title: "Stand out",
      subtitle: "with Search Ads",
      titleColor: "text-[#C5221F]",
      description:
        "Whatever your business goal, drive better results with Performance Max..",
      image: Ads4,
      bgColor: "bg-[#FCE8E6]",
    },
  ];
 
  useEffect(() => {
    gsap.set(slidesRef.current[0], { opacity: 1, x: 0 });
 
    // Auto-rotate slides
    let currentIndex = 0;
    const totalSlides = slides.length;
 
    const animateSlides = () => {
      const nextIndex = (currentIndex + 1) % totalSlides;
 
      // Exit animation for current slide
      gsap.to(slidesRef.current[currentIndex], {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut",
      });
 
      // Entry animation for next slide
      gsap.fromTo(
        slidesRef.current[nextIndex],
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.inOut",
          onComplete: () => {
            currentIndex = nextIndex;
          },
        }
      );
    };
 
    const interval = setInterval(animateSlides, 5000);
    return () => clearInterval(interval);
  }, []);
 
  return (
    
    <div className="relative h-[600px] overflow-hidden w-[1680px] m-auto">
     
      {slides.map((slide, index) => (
        
        <div
          key={index}
          ref={(el) => (slidesRef.current[index] = el)}
          className="absolute top-0 left-0 w-full h-full opacity-0"
        >
          <div className="flex justify-center items-center h-full p-6 bg-white">
            <div className="max-w-[80%] w-full gap-8 items-center justify-start flex mr-auto">
              {/* Image container with dynamic background color */}
              <div
                className={`relative w-full max-w-[400px] mx-auto md:mx-0 ${slide.bgColor} rounded-xl p-6`}
              >
                <img
                  src={slide.image}
                  alt="Google Ads"
                  className="w-full h-auto rounded-lg"
                />
                <button className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md">
                  <FaPlay className="text-green-600 text-lg" />
                </button>
              </div>
 
              {/* Text content */}
              <div className="text-center md:text-left w-[100%] -ml-[3rem] relative z-20 ">
                <h1 className="font-extrabold font-Montserrat leading-[120px]">
                  <span className={`  ${slide.titleColor} block text-[155px]`}>
                    {slide.title}
                  </span>
                  <span className="text-black block text-[110px]">
                    {slide.subtitle}
                  </span>
                </h1>
                <p className="mt-4 text-gray-600 text-center w-full mx-auto md:mx-0 font-bold text-xs">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
 
      {/* <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className="w-3 h-3 rounded-full bg-gray-300 hover:bg-green-600 focus:outline-none"
          />
        ))}
      </div> */}
    </div>
  );
}