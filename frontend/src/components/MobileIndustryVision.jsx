import React from "react";
import "../styles/components/MobileIndustryVision.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/pages/IndustryVision.css";

import healthcare from "../assets/healthcare.svg";
import fitness from "../assets/fitness.svg";
import Realstate from "../assets/Realstate.svg";
import Socailmedia from "../assets/Socailmedia.svg";
import Educate from "../assets/Educate.svg";
import Entertainmentt from "../assets/Entertainmentt.svg";
import ecommerce from "../assets/eweb.svg";
import AVR from "../assets/AVR.svg";

const industries = [
  { src: healthcare, title: "Healthcare" },
  { src: fitness, title: "Fitness" },
  { src: Realstate, title: "Real Estate" },
  { src: Socailmedia, title: "Social Media" },
  { src: Educate, title: "Education" },
  { src: Entertainmentt, title: "Entertainment" },
  { src: ecommerce, title: "E-commerce" },
  { src: AVR, title: "AR/VR" },
];

const MobileIndustryVision = () => {
  return (
    <div className="mobile_industry block lg:hidden bg-[#061611] text-white mx-auto py-12 px-4 w-full max-w-[1680px] border border-[#2d4642] rounded-[20px] mt-[100px]">

      {/* Header */}
      <div className="mb-10 text-center lg:text-left">
        <h1
          className="text-[28px] md:text-[47px] font-extrabold leading-tight"
          style={{
            background: "linear-gradient(to right, #e0e0e0, #157B6C)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          A Seamless Vision that Adapts to Every Industry’s Demands
        </h1>
        <p className="mt-4 text-lg md:text-xl font-regular text-white max-w-[725px] mx-auto lg:mx-0">
          We deliver flexible and innovative IT solutions tailored to meet the evolving needs of various industries, ensuring efficiency, scalability, and long-term success.
        </p>
      </div>

      {/* Grid View for Desktop */}
      <div className="hidden lg:grid grid-cols-4 gap-4">
        {industries.map((industry, index) => (
          <div
            key={index}
            className={`relative rounded-[12px] overflow-hidden group ${index === 0 ? "row-span-2" : ""}`}
            style={{ height: index === 0 ? 330 : 160 }}
          >
            <img
              src={industry.src}
              alt={industry.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-bold text-[20px] font-montserrat">{industry.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel View for Mobile */}
      <div className="lg:hidden mt-6">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
        >
          {industries.map((industry, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-[12px] overflow-hidden relative">
                <img
                  src={industry.src}
                  alt={industry.title}
                  className="w-full h-[250px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-bold text-[20px] font-montserrat">{industry.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col md:flex-row bg-[#0a211b] rounded-3xl p-6 w-full md:w-[733px] h-auto md:h-[164px] max-w-3xl items-center justify-between mt-10 mx-auto">
        <p className="text-white text-lg font-medium text-center md:text-left">
          Fuel Success in a Digital-First World with <span className="font-bold text-[#8CBEB7]">300+</span> Visionaries.
        </p>
        <div className="bg-white rounded-lg px-6 py-3 mt-4 md:mt-0 cursor-pointer shadow-md">
          <button className="text-[#157B6C] font-bold text-[20px] font-montserrat flex items-center gap-2">
            Let’s Innovate Together
            <svg width="50" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M13 5L20 12L13 19" stroke="#0a6e58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 12H20" stroke="#0a6e58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileIndustryVision