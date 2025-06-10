import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Aiservicesimg5 from "../assets/Aiservicesimg5.svg";
import Aichatbots from "../assets/Layer_1.svg";
import Aismartpricing from "../assets/2150038860 1.svg";
import Aipredictiveanalytics from "../assets/image 29.svg";

const AiSolutionsSection = () => {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    const scrollAmount = 400;
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const cards = [
    {
      title: "AI Chatbots for<br/>Support",
      desc: "Cut customer service costs using AI chatbots to automate responses and handle inquiries 24/7.",
      image: Aichatbots,
    },
    {
      title: "Smart Pricing<br/> Models",
      desc: "Use AI-driven insights to analyze market trends and optimize pricing strategies for maximum profit.",
      image: Aismartpricing,
    },
    {
      title: "Predictive<br/> Analytics",
      desc: "Make better business decisions with predictive AI analytics that forecast trends and customer behaviour.",
      image: Aipredictiveanalytics,
    },
    {
      title: "AI Route<br/> Planning",
      desc: "Plan optimal delivery routes using AI to reduce fuel costs and improve logistics efficiency.",
      image: Aipredictiveanalytics,
    },
  ];

  return (
    <div
      className="w-full px-4 py-10"
      style={{ background: "linear-gradient(to right, #FFFFFF, #D5D5D5)" }}
    >
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto my-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F0F0F] mb-4">
          Why Choose AI Integrated Solutions For Your Business?
        </h1>
        <p className="text-gray-700 text-base md:text-lg">
          From chatbots to predictive analytics systems, our AI development company offers customized artificial intelligence
          development services. Turn raw data into actionable reports, predict customer behavior, and increase workforce
          productivity with our intelligent AI services.
        </p>
      </div>

      {/* Content */}
      <div className="flex items-start justify-center gap-6 max-w-[1600px] mx-auto">
        {/* Robot Image */}
        <div className="flex-shrink-0 hidden lg:block">
          <img
            src={Aiservicesimg5}
            alt="AI Robot"
            className="w-[240px] h-auto object-contain"
            title="AI Services Illustration"
          />
        </div>

        {/* Slider */}
        <div className="relative w-full overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-2"
            title="AI Solutions Carousel"
          >
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="min-w-[400px] max-w-[400px] h-[300px] bg-cover bg-center rounded-lg relative overflow-hidden flex items-end p-4 text-white shadow-lg"
                style={{ backgroundImage: `url(${card.image})` }}
                title={card.title.replace(/<br\/>/g, ' ')}
              >
                <div className="z-10">
                  <h2 className="text-[30px] font-bold" dangerouslySetInnerHTML={{ __html: card.title }} />
                  <p className="text-sm mt-1">{card.desc}</p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />
              </div>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-3 z-10 justify-end mt-10" title="Carousel Navigation">
            <button
              onClick={() => handleScroll("left")}
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-md"
              aria-label="Previous slide"
              title="Previous"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-md"
              aria-label="Next slide"
              title="Next"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiSolutionsSection;