import React from "react";
import AiSolutionsSection from "../components/AiSolutionsSection";
import AIServices from "../components/AIServices";
import AIStatsSection from "../components/AIStatsSection";
import ModelsAideveloper from "../components/ModelsAideveloper";
import ModelsTabsSection from "../components/ModelsTabsSection";
import AIPillars from "../components/AIPillars";
import AiTechStack from "../components/AiTechStack";
import Blockchainbanner from "../assets/background img.png";
import Vedioimg from "../assets/Vedioimg.png";
import { ArrowUpRight } from "lucide-react";
import TrustedByAi from "./TrustedByAi";

function AiDevelopment() {
  return (
    <main className="w-full">
      <div></div>
      <section
        className="relative w-full md:h-[736px] h-[536px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Blockchainbanner})` }}
      >
        <div className="relative text-center text-white px-6 max-w-6xl z-10 mt-12 md:mt-0">
          <div className=" w-full flex justify-center items-center">
            <button className="absolute md:-top-12 -top-8 left-[85%] md:left-[62%] transform -translate-x-1/2 bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-40">
              AI solutions that deliver real ROI
            </button>
          </div>
          <h1
            className="text-[25px] md:text-[48px] font-Montserrat font-bold mb-4 mt-10 leading-tight"
            style={{
              display: "inline-table",
              background: "linear-gradient(to right, #EDF5F3, #157B6C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
              color: "#157B6C",
            }}
          >
            Best Ai Development Company
          </h1>
          <p className="md:text-[20px] text-[15px] leading-relaxed mb-6">
            Boost your business operations 20x with our advanced AI development
            services. Automate repetitive <br />
            tasks, make data-driven decisions, and run your business more
            efficiently with less effort.
          </p>
          <button className="flex items-center gap-2 bg-[#22D5E4] text-black font-medium px-3 py-3 rounded-full transition-colors mx-auto">
            <span>Consult Our Experts</span>
            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center ml-1">
              <ArrowUpRight className="h-4 w-4 text-[#2DC4A9]" />
            </div>
          </button>
        </div>
      </section>
      <div className="">
        <TrustedByAi />
      </div>
      <div>
        <AiSolutionsSection />
      </div>
      <div>
        <AIServices />
      </div>
      <div>
        <AIStatsSection />
      </div>
      <div>
        <ModelsAideveloper />
      </div>
      <div>
        <ModelsTabsSection />
      </div>
      <div>
        <AIPillars />
      </div>
      <div>
        <AiTechStack />
      </div>
    </main>
  );
}

export default AiDevelopment;
