import React from 'react';
import { ArrowUpRight } from "lucide-react";
import Mobilebackimg from '../assets/QAImage.jpg';
import TrustQA from './TrustQA';
import Acceleratebusiness from '../components/Acceleratebusiness';
import GainInsights from '../components/GainInsights';
import Fueling from '../components/Fueling';
import AnalystRecognition from '../components/AnalystRecognition';
import TeamInto from '../components/TeamInto';

const QualityAnalysis = () => {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section
        className="relative w-full h-[1048px] flex flex-col items-center justify-between bg-cover bg-center"
        style={{ backgroundImage: `url(${Mobilebackimg})` }}
      >
        <div className="absolute inset-0  bg-cover"></div>

        {/* Main content */}
        <div className="relative text-center text-white px-6 max-w-4xl z-10 mt-20">
          <div className="relative w-full flex justify-center items-center">
            <button className="absolute -top-16 left-[56%] transform -translate-x-1/2 bg-white bg-opacity-20 p-3 mt-[17.5rem]  rounded-full hover:bg-opacity-40">
              Quality Analysis
            </button>
          </div>

          <h1 
            className="text-5xl font-Montserrat font-bold mb-4 mt-[17.5rem] leading-tight" 
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
            Redefining Software Quality using AI Engineering<br />
            Excellence, Assuring Accuracy
          </h1>
          
          <p className="text-lg leading-relaxed mb-6">
            We help you revolutionize your quality journey with AI-powered assurance and engineering quick releases, minimized errors, and elevated user experiences.
          </p>
          
          <button className="flex items-center gap-2 bg-[#9EDF84] hover:bg-[#9EDF84] text-black font-medium px-6 py-3 rounded-full transition-colors mx-auto">
            <span>know more</span>
            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center ml-1">
              <ArrowUpRight className="h-4 w-4 text-[#2DC4A9]" />
            </div>
          </button>
        </div>

        {/* TrustQA component at the bottom */}
        <div className="w-full z-10 pb-10">
          <TrustQA />
        </div>
      </section>
      <Acceleratebusiness/>
      <GainInsights/>
      <Fueling/>
      <AnalystRecognition/>
      <TeamInto/>
    </main>
  );
}

export default QualityAnalysis;