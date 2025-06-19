import React from "react";
import { ArrowUpRight } from "lucide-react";
import Mobilebackimg from "../assets/QAImage.jpg";
import TrustQA from "./TrustQA";
import Acceleratebusiness from "../components/Acceleratebusiness";
import GainInsights from "../components/GainInsights";
import Fueling from "../components/Fueling";
import AnalystRecognition from "../components/AnalystRecognition";
import TeamInto from "../components/TeamInto";
import blockchainarrow from "../assets/blockchainarrow.svg";

const QualityAnalysis = () => {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section
        className="relative w-full md:h-[842px]  flex flex-col items-center justify-between bg-cover bg-center"
        style={{ backgroundImage: `url(${Mobilebackimg})` }}
      >
        <div className="absolute inset-0  bg-cover"></div>

        {/* Main content */}
        <div className="relative text-center text-white px-6 max-w-[1400px] z-10 mt-0 md:mt-20">
          <div className="relative w-full flex justify-center items-center ">
            <button className="absolute w-[160px] h-[47px]  -top-16 left-[73%] md:left-[56%] transform -translate-x-1/2 bg-white bg-opacity-20 p-3 mt-[17.5rem]  rounded-full hover:bg-opacity-40">
              Quality Analysis
            </button>
          </div>

          <h1
            className="text-[24px] md:text-[48px] font-Montserrat font-bold mb-4 mt-[17.5rem] leading-tight"
            style={{
              display: "inline-table",
              background: "linear-gradient(to right, #FFFFFF, #9A9A14)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
              color: "#157B6C",
            }}
          >
            Redefining Software Quality using AI Engineering
            <br />
            Excellence, Assuring Accuracy
          </h1>

          <p className="text-[15px] md:text-[20px] leading-relaxed mb-6">
            We help you revolutionize your quality journey with AI-powered
            assurance and engineering quick releases, minimized errors, and
            elevated user experiences.
          </p>

       
          <div className="flex justify-center">
            <button className="flex items-center w-auto h-auto pt-[6px] pr-[10px] pb-[7px] pl-[20px] gap-2 rounded-full bg-[#9EDF84] hover:bg-[#9EDF84] text-black text-[16px] font-Montserrat font-medium px-6 py-3 transition-colors">
              <span>Know More</span>
              <div className="bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center ml-2">
                <img
                  src={blockchainarrow}
                  alt="blockchainarrow"
                  className="w-4 h-4"
                />
              </div>
            </button>
          </div>
        </div>

        {/* TrustQA component at the bottom */}
        <div className="w-full z-10 pb-10 mt-5">
          <TrustQA />
        </div>
      </section>
      <Acceleratebusiness />
      <GainInsights />
      <Fueling />
      <AnalystRecognition />
      <TeamInto />
    </main>
  );
};

export default QualityAnalysis;
