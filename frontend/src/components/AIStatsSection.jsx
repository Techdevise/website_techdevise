import React from "react";
import Aiservicesimg3 from "../assets/Aiservicesimg3.svg";
import AIlog0 from "../assets/Group 457.svg";
import { ArrowUpRight } from "lucide-react";

const AIStatsSection = () => {
  return (
    <section
      className="w-full h-auto py-16 bg-cover bg-center px-4 sm:px-8 lg:px-20 flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(20, 69, 80, 0.7), rgba(14, 104, 124, 0.69)), url(${Aiservicesimg3})`,
      }}
    >
      <div className="max-w-[1680px] w-full text-center text-white z-10">
        {/* AI Logo */}
        <div className="flex justify-center mb-6">
          <img className="w-40 md:w-52 "  src={AIlog0} alt="AI Logo" />
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl mb-10 leading-relaxed">
          Our Artificial Intelligence development solutions helped businesses reduce manual work and everyday tasks by 40%.
          <br className="hidden md:block" />
          Book a free consultation with our custom AI development services agency to automate your business operations.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-10 w-full max-w-[1620px] mx-auto">
          {/* Card 1 */}
          <div className="bg-[#FFF2CD] text-black rounded-lg flex items-center px-4 py-6 h-[120px]">
            <span className="text-[32px] md:text-[40px] font-bold w-[30%] text-left">20%</span>
            <span className="text-[18px] md:text-[20px] text-left w-[70%]">
              Reduction in <br />
              Manual Work
            </span>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-black rounded-lg flex items-center px-4 py-6 h-[120px]">
            <span className="text-[32px] md:text-[40px] font-bold w-[30%] text-left">30%</span>
            <span className="text-[18px] md:text-[20px] text-left w-[70%]">
              Lower Operational <br />
              Costs
            </span>
          </div>

          {/* Card 3 */}
          <div className="bg-[#CFF1DD] text-black rounded-lg flex items-center px-4 py-6 h-[120px]">
            <span className="text-[32px] md:text-[40px] font-bold w-[30%] text-left">40%</span>
            <span className="text-[18px] md:text-[20px] text-left w-[70%]">
              Faster Data <br />
              Reporting
            </span>
          </div>

          {/* Card 4 */}
          <div className="bg-[#FFE5E5] text-black rounded-lg flex items-center px-4 py-6 h-[120px]">
            <span className="text-[32px] md:text-[40px] font-bold w-[30%] text-left">30%</span>
            <span className="text-[18px] md:text-[20px] text-left w-[70%]">
              Increased <br />
              Productivity
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <button className="flex items-center gap-2 bg-[#22D5E4] text-black font-medium px-6 py-3 rounded-full transition hover:bg-[#1cc1d2] mx-auto">
          <span>Consult Our Experts</span>
          <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center ml-1">
            <ArrowUpRight className="h-4 w-4 text-[#22D5E4]" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default AIStatsSection;
