import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Aiservicesimg5 from "../assets/Aiservicesimg5.svg"
import Aichatbots from "../assets/Aichatbots.svg"
import Aismartpricing from "../assets/Aismartpricing.svg"
import Aipredictiveanalytics from "../assets/Aipredictiveanalytics.svg"

const AiSolutionsSection = () => {
  return (
    <div className="w-full max-w-[1620px] h-auto mx-auto px-4 py-8 flex flex-col items-center justify-start bg-gradient-to-r from-white to-[#f6f7f9]">
      {/* Header */}
      <div className="text-center max-w-4xl mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F0F0F] mb-4">
          Why Choose AI Integrated Solutions <br /> For Your Business?
        </h2>
        <p className="text-gray-700 text-base md:text-lg">
          From chatbots to predictive analytics systems, our AI development company offers customized artificial intelligence
          development services. Turn raw data into actionable reports, predict customer behavior, and increase workforce
          productivity with our intelligent AI services.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-wrap md:flex-nowrap justify-center items-start w-full gap-6 px-4">
        {/* Robot Image */}
        <div className="flex-shrink-0 w-full md:w-1/5 flex justify-center mb-8 md:mb-0">
          <img
            src={Aiservicesimg5}
            alt="AI Robot"
            className="w-[180px] md:w-[240px] object-contain"
          />
        </div>

        {/* Cards */}
        <div className="w-full md:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "AI Chatbots for Support",
              desc: "Cut customer service costs using AI chatbots to automate responses and handle inquiries 24/7.",
              image: Aichatbots
            },
            {
              title: "Smart Pricing Models",
              desc: "Use AI-driven insights to analyze market trends and optimize pricing strategies for maximum profit.",
              image: Aismartpricing
            },
            {
              title: "Predictive Analytics",
              desc: "Make better business decisions with predictive AI analytics that forecast trends and customer behaviour.",
              image: Aipredictiveanalytics
            },
            {
              title: "AI Route Planning",
              desc: "Make better business decisions with predictive AI analytics that forecast trends and customer behaviour.",
              image: Aipredictiveanalytics 
            }
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-cover bg-center rounded-lg h-[300px] relative overflow-hidden flex items-end p-4 text-white"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="z-10">
                <h3 className="text-lg font-Montserrat font-bold font-[28px]">{card.title}</h3>
                <p className="text-sm mt-1">{card.desc}</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="w-full mt-8 flex justify-end gap-4">
        <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
          <FaArrowLeft />
        </button>
        <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default AiSolutionsSection;
