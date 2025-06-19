import React, { useState, useEffect } from "react";
import "../styles/components/GoogleAdwordsServices.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import GoogleAdwordsimg1 from "../assets/GoogleAdwordsimg1.svg";
import GoogleAdwordsimg2 from "../assets/GoogleAdwordsimg2.svg";
import GoogleAdwordsimg6 from "../assets/Vector12.svg";
import GoogleAdwordsimg5 from "../assets/Group12.svg";
import GoogleAdwordsimg4 from "../assets/analysis_icon (1) 1.svg";
import GoogleAdwordsimg3 from "../assets/data_icon 1.svg";

const slides = [
  {
    img: GoogleAdwordsimg1,
    title: "Competitor\nCampaign Analysis",
    description:
      "Our expert team knows how you can get the best results from your Google Adword campaigns. We offer a detailed competitor analysis to know where your competitor stands in Google rankings. Hence, accordingly, we formulate the best Google Adword campaign to get the highest ROI.",
  },
  {
    img: GoogleAdwordsimg2,
    title: "Landing Page\nCreation",
    description:
      "Our expert team understands that only investing in Google Adwords is not enough to ensure conversions. Hence, we provide unique and out of the box landing page and advertisement services to increase the conversion rate.",
  },
  {
    img: GoogleAdwordsimg3,
    title: "Keyword \nResearch ",
    description:
      "The most important factor to get the best result from your Adword campaign is the selection of the right keywords. Our experts will find the best keywords that suit your business and will increase traffic to your website.",
  },
  {
    img: GoogleAdwordsimg4,
    title: "Detailed \nReporting",
    description:
      "We believe in maintaining a transparent relationship with our clients. Hence, we offer weekly reports about the work done and the results it is fetching. This way you will understand the progress of these marketing campaigns.",
  },
  {
    img: GoogleAdwordsimg5,
    title: "Campaign \nCreation",
    description:
      "We not only create strategies for Google Adword campaign but also have the expertise to create these campaigns and implement them. The campaigns created by us are planned meticulously to ensure that you get the highest ROI.",
  },
  {
    img: GoogleAdwordsimg6,
    title: "Precise Campaign \nROI Calculations",
    description:
      "We believe that if you are investing in anything, then you should get some assurance from our end. For every campaign, we do a precise calculation about how successful the campaign is going to get and what are the possible results out of it.",
  },
];

export default function GoogleAdwordsServices() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transition, setTransition] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const slidesPerPage = 2;
  const totalPages = Math.ceil(slides.length / slidesPerPage);

  const handlePrev = () => {
    setTransition(true);
    setCurrentSlide((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setTransition(true);
    setCurrentSlide((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      handleNext();
    }

    if (touchStart - touchEnd < -100) {
      handlePrev();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTransition(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const visibleSlides = slides.slice(
    currentSlide * slidesPerPage,
    currentSlide * slidesPerPage + slidesPerPage
  );

  // Auto slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="google_adwords flex justify-center items-center p-4 sm:p-6">
      <div className="google_words w-full max-w-[1620px] h-auto bg-[#F5F7FB] rounded-[15px] p-4 sm:p-6 md:p-12 lg:p-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side content */}
          <div className="flex flex-col justify-center">
            <h2 className="w-full md:max-w-[600px] text-2xl h2p sm:text-2xl md:text-2xl lg:text-2xl xl:text-[48px] font-extrabold font-Montserrat text-black mb-4 lg:mb-6 leading-snug lg:leading-tight">
              The Services we offer
              <br className="hidden lg:block" />
              under Google
              <br className="hidden lg:block" />
              Adwords
            </h2>
            <p className="text-sm sm:text-base md:text-lg hp1 font-Montserrat text-black max-w-2xl">
              We all know that the internet is flooded with millions of websites. Hence, getting your website to be
              noticed among this huge crowd is a challenging task. But nothing is impossible. With the help from our
              Google Adword experts, you can achieve the desired traffic to your website and improve its visibility. Our
              team will assist you in creating result-oriented Google Adword campaigns that will take your business to
              the next level.
            </p>
          </div>

          {/* Right side content - Dynamic Cards */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {visibleSlides.map((slide, index) => (
              <div 
                key={index} 
                className={`bg-white p-4 sm:p-6 rounded-lg shadow-sm transition-all duration-500 ${
                  transition ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
              >
                <div className="mb-4">
                  <img src={slide.img} alt="Google Adwords" width="54" height="40" />
                </div>
                <h3 className="text-xl sm:text-2xl font-Montserrat text-black font-semibold mb-2 whitespace-pre-line">
                  {slide.title}
                </h3>
                <p className="text-sm sm:text-base font-Montserrat text-black">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="navv-arrows mt-6 md:mt-0 md:absolute md:bottom-8 lg:bottom-6 right-4 lg:right-12 flex gap-2 justify-center lg:justify-end">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-gray-100 transition-colors duration-300"
          >
            <FaArrowLeft size={10} className="text-black w-6 h-4 sm:w-8" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-[#157B6C] flex items-center justify-center shadow-sm hover:bg-[#0e5d52] transition-colors duration-300"
          >
            <FaArrowRight size={10} className="text-white w-6 h-4 sm:w-8" />
          </button>
        </div>

        {/* Dots indicator */}
        {/* <div className="flex justify-center mt-6 md:mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setTransition(true);
                setCurrentSlide(index);
              }}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-[#157B6C]" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}