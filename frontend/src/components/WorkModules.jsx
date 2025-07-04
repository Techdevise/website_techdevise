import React, { useState, useRef } from "react";
// import '../styles/components/WorkModules.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Reviewplanning from "../assets/Reviewplanning.svg";
import Design from "../assets/Design.svg";
import Development from "../assets/Development.svg";
import Contentupload from "../assets/Contentupload.svg";

const WorkModules = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const totalSlides = 6;

  const nextSlide = () => {
    const newSlide = (currentSlide + 1) % totalSlides;
    setCurrentSlide(newSlide);
    scrollToSlide(newSlide);
  };

  const prevSlide = () => {
    const newSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    setCurrentSlide(newSlide);
    scrollToSlide(newSlide);
  };

  const scrollToSlide = (index) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.children[0].offsetWidth + 16;
      sliderRef.current.scrollLeft = index * slideWidth;
    }
  };

  return (
    <div className="work_modules w-full max-w-[1620px] h-auto px-4 py-12 md:px-16 pt-10 mx-auto relative mt-0 md:mt-10 md:pt-8">
      <div className="relative">
        <div className="absolute right-4 top-4 flex gap-4 z-10">
          <button
            onClick={prevSlide}
            className="bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-800"
            aria-label="Previous slide"
          >
            <FaArrowLeft size={15} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-800"
            aria-label="Next slide"
          >
            <FaArrowRight size={15} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="hidden md:block md:w-[60px] relative" />

          <div className="flex-1">
            <div className="w-full mb-6 px-4 md:px-0">
              <p className="w-full text-[16px] text-black font-Montserrat leading-6 max-w-7xl sp ">
                <span className="text-[20px]  md:text-[30px] font-Montserrat font-semibold">
                  Content Management System
                </span>{" "}
                - Our team follows a very meticulous and precise procedure that
                allows us to meet the client requirements adequately within the
                deadline date. We take great pride in our module and the work
                ethic we possess.
              </p>
            </div>

            <div className="transform -translate-y-1/2">
              <div className="flex flex-col items-center hidden sm:flex">
                <div
                  className="text-[#529D92] font-Montserrat font-bold -rotate-450 whitespace-nowrap text-5xl tracking-wide origin-center absolute left-[-272px] top-[121px] bottom-0 text-[46px]"
                  style={{
                    display: "inline-table",
                    background: "linear-gradient(to right, #F2F2F2, #157B6C)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                    color: "#157B6C",
                  }}
                >
                  Our Work Modules
                </div>
              </div>
            </div>

            {/* Slider Container */}
            <div
              ref={sliderRef}
              className="flex overflow-x-auto gap-4 md:gap-8 py-4 px-4 scrollbar-hide"
              style={{ scrollBehavior: "smooth" }}
            >
              {/* Slide 1 */}
              <div className=" min-w-[320px] sm:min-w-[415px] bg-[#E5FCFF] p-6 rounded-lg shadow-md Slide1">
                <div className="bg-[#11BEEA] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <img
                    src={Reviewplanning}
                    alt="Review Planning"
                    className="h-[54px] w-[55px]"
                  />
                </div>
                <h3 className="text-[28px] font-Montserrat font-bold mb-3">
                  Review / Planning
                </h3>
                <p className="text-[16px] font-Montserrat">
                  We work from scratch. Our first step is to review your idea,
                  your competitor website to understand the process, make
                  suggestions for you, discuss the way you want it work. Once we
                  are done, you complete details of the work process and all the
                  details of the development work, features, design etc.
                </p>
              </div>

              {/* Slide 2 */}
              <div className="min-w-[320px] sm:min-w-[415px] bg-[#EBF8F1] p-6 rounded-lg shadow-md Slide2">
                <div className="bg-[#43B97F] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <img
                    src={Design}
                    alt="Design"
                    className="h-[54px] w-[55px]"
                  />
                </div>
                <h3 className="text-[28px] font-Montserrat font-bold mb-3">
                  Design
                </h3>
                <p className="text-[16px] font-Montserrat">
                  Good design is absolutely necessary when it comes to CMS. We
                  maintain a good quality in every single step of designing
                  phase and ensure that you get a consistent result all the
                  time. We do prefer working with you before final development
                  so as to make all the necessary changes before we start our
                  final development.
                </p>
              </div>

              {/* Slide 3 */}
              <div className="min-w-[320px] sm:min-w-[415px] bg-[#EDF5C0] p-6 rounded-lg shadow-md Slide3">
                <div className="bg-[#B7CA4B] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <img
                    src={Development}
                    alt="Development"
                    className="h-[54px] w-[55px]"
                  />
                </div>
                <h3 className="text-[28px] font-Montserrat font-bold mb-3">
                  Development
                </h3>
                <p className="text-[16px] font-Montserrat">
                  The development process is long and complicated but you can
                  rest assured that we will deliver a well-developed, fully
                  functional CMS website to you. We will install your newly
                  designed website and configure it to make sure you get a nice,
                  SEO friendly website without having to worry about anything.
                </p>
              </div>

              {/* Slide 4 */}
              <div className="min-w-[320px] sm:min-w-[415px] bg-[#FFD3E5] p-6 rounded-lg shadow-md Slide4">
                <div className="bg-[#DF739F] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <img
                    src={Contentupload}
                    alt="Content Upload"
                    className="h-[54px] w-[55px]"
                  />
                </div>
                <h3 className="text-[28px] font-Montserrat font-bold mb-3">
                  Content Upload
                </h3>
                <p className="text-[16px] font-Montserrat">
                  Since your new website is based on CMS, you will need content
                  to get going. The first content upload is on us. We upload the
                  first set of content on your website and check whether
                  everything is already in place. Of course, at a later stage
                  you will be able to change the content at will.
                </p>
              </div>

              {/* Slide 5 */}
              <div className="min-w-[320px] sm:min-w-[415px] bg-[#D0EBFF] p-6 rounded-lg shadow-md Slide5">
                <div className="bg-[#11BEEA] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <img
                    src={Reviewplanning}
                    alt="Review Planning"
                    className="h-[54px] w-[55px]"
                  />
                </div>
                <h3 className="text-[28px] font-Montserrat font-bold mb-3">
                  Testing
                </h3>
                <p className="text-[16px] font-Montserrat">
                  We make sure that the content formulated is of the finest
                  quality and clarifies all the queries of the target audience.
                  The keywords incorporated are adequately placed such that it
                  helps in the ranking aspect as well. Adequate testing is
                  initiated to make sure that no compromise is made in quality
                  standards.
                </p>
              </div>

              {/* Slide 6 */}
              <div className="min-w-[320px] sm:min-w-[415px] bg-[#FFF0BA] p-6 rounded-lg shadow-md Slide6">
                <div className="bg-[#43B97F] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <img
                    src={Design}
                    alt="Design"
                    className="h-[54px] w-[55px]"
                  />
                </div>
                <h3 className="text-[28px] font-Montserrat font-bold mb-3">
                  Quality Delivered
                </h3>
                <p className="text-[16px] font-Montserrat">
                  We understand your need and ensure that you get the right
                  quality service at an affordable price. We promise to maintain
                  quality throughout the development phase and offer quality
                  support post delivery as well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkModules;
