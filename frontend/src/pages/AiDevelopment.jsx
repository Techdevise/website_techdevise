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
        className="relative w-full h-[736px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Blockchainbanner})` }}
      >
        <div className="relative text-center text-white px-6 max-w-4xl z-10">
          <div className="relative w-full flex justify-center items-center">
            <button className="absolute -top-12 left-[64%] transform -translate-x-1/2 bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-40">
              AI solutions that deliver real ROI
            </button>
          </div>
          <h1
            className="text-5xl font-Montserrat font-bold mb-4 mt-10 leading-tight"
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
          <p className="text-lg leading-relaxed mb-6">
            Boost your business operations 20x with our advanced AI development
            services. Automate repetitive <br />
            tasks, make data-driven decisions, and run your business more
            efficiently with less effort.
          </p>
          <button className="flex items-center gap-2 bg-[#22D5E4] text-black font-medium px-6 py-3 rounded-full transition-colors mx-auto">
            <span>Consult Our Experts</span>
            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center ml-1">
              <ArrowUpRight className="h-4 w-4 text-[#2DC4A9]" />
            </div>
          </button>
        </div>
      </section>
      <div>
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
