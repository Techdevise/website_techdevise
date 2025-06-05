import React from "react";
import Aiservicesimg3 from "../assets/Aiservicesimg3.svg";

const AIStatsSection = () => {
  return (
    <section
      className="w-full max-w-[1922px] h-[600px] bg-cover bg-center relative flex items-center justify-center px-4 sm:px-8 lg:px-20 m-auto"
      style={{
        backgroundImage: `url(${Aiservicesimg3})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        <h2 className="text-5xl font-bold mb-4">AI</h2>
        <p className="text-lg mb-10">
          Our Artificial intelligence development solutions helped businesses reduce manual work and
          everyday tasks by 40%. Book a free consultation with our custom AI development services
          agency to automate your business operations.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="w-[300px] h-[100px] bg-[#FFF2CD] text-black rounded-lg flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">20%</span>
            <span className="text-sm text-center">Reduction in<br />Manual Work</span>
          </div>
          <div className="w-[300px] h-[100px] bg-white text-black rounded-lg flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">30%</span>
            <span className="text-sm text-center">Lower Operational<br />Costs</span>
          </div>
          <div className="w-[300px] h-[100px] bg-[#CFF1DD] text-black rounded-lg flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">40%</span>
            <span className="text-sm text-center">Faster Data<br />Reporting</span>
          </div>
          <div className="w-[300px] h-[100px] bg-[#FFE5E5] text-black rounded-lg flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">30%</span>
            <span className="text-sm text-center">Increased<br />Productivity</span>
          </div>
        </div>

        <button className="w-full md:w-auto bg-[#157B6C] px-6 py-3 rounded-full text-white text-lg font-medium hover:bg-[#145e54] transition">
          Consult Our Experts
          <span className="text-xl">→</span>
        </button>
      </div>
    </section>
  );
};

export default AIStatsSection;
