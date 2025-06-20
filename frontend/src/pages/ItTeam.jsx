import React from "react";
import { ArrowUpRight } from "lucide-react";
import Itserv from "../assets/Group 625.png";
import TrustITStaff from "./TrustITStaff";
import IT_Roles from "../components/IT_Roles";
import ServiceGap from "../components/ServiceGap";
import Professional_Services from "../components/Professional_Services";
import CompanyRecognition from "../components/CompanyRecognition";

const ItTeam = () => {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section
        className="relative w-full  flex flex-col items-center justify-between  bg-center"
        style={{ backgroundImage: `url(${Itserv})` }}
      >
        <div className="absolute inset-0 bg-black/30 "></div>

        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 md:px-6 lg:px-8 pt-[2rem] md:pt-[4rem] lg:pt-[8rem]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Text Column */}
            <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 mt-[170px]">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-Montserrat font-bold mb-4 leading-tight"
                style={{
                  display: "inline-table",
                  background: "linear-gradient(to right, #FFFFFF, #157B6C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  color: "#157B6C",
                }}
              >
                Your Trusted Partner for <br /> IT Staffing and <br />
                Services
              </h1>

              <p className="text-sm md:text-base lg:text-lg text-white mb-4 max-w-[600px] mx-auto lg:mx-0">
                TechDevise is a staffing agency that has the expertise,
                experience, and network to find you the most qualified
                candidates for any industry or function in as little as two days.
                Plus, we have access to top international talent and can source
                great people from 50+ countries.
              </p>
              <p className="text-xs md:text-sm text-white mt-5">
                Questions? Call us toll-free: +1 123 456 7890
              </p>
            </div>

            {/* Right Action Cards */}
            <div className="w-full lg:w-1/2 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-8 md:mt-[250px] h-auto md:h-[280px] lg:ml-[50px] xl:ml-[190px]">
              {/* Schedule a Meeting */}
              <div className="w-full max-w-[345px] bg-white/5 backdrop-blur-lg rounded-xl p-4 md:p-6 border border-white/20 shadow-lg text-center flex flex-col items-center">
                <h3 className="text-white text-lg md:text-xl font-bold mb-2 leading-snug">
                  Schedule a <br /> meeting
                </h3>
                <p className="text-white text-xs md:text-sm mb-4 md:mb-6">
                  Talk with one of our experts about your IT <br />
                  staffing and tech solutions needs.
                </p>
                <button className="flex items-center gap-2 bg-[#C2FFD1] px-4 md:px-5 py-1 md:py-2 rounded-full font-semibold text-black hover:bg-[#b0f5c3] transition">
                  Let&apos;s Connect
                  <div className="bg-white rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                    <ArrowUpRight className="h-3 w-3 md:h-4 md:w-4 text-[#2DC4A9]" />
                  </div>
                </button>
              </div>

              {/* Submit Staffing Request */}
              <div className="w-full max-w-[345px] bg-white/5 backdrop-blur-lg rounded-xl p-4 md:p-6 border border-white/20 shadow-lg text-center flex flex-col items-center">
                <h3 className="text-white text-lg md:text-xl font-bold mb-2 leading-snug">
                  Submit Staffing <br /> Request
                </h3>
                <p className="text-white text-xs md:text-sm mb-4 md:mb-6">
                  Talk with one of our experts about your IT <br />
                  staffing and tech solutions needs.
                </p>
                <button className="flex items-center gap-2 bg-[#FBAEAE] px-4 md:px-5 py-1 md:py-2 rounded-full font-semibold text-black hover:bg-[#ffc1c1] transition">
                  Get Started
                  <div className="bg-white rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                    <ArrowUpRight className="h-3 w-3 md:h-4 md:w-4 text-black" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-[1650px] mx-auto px-4 pb-6 md:pb-10">
          <TrustITStaff />
        </div>
      </section>
      <IT_Roles/>
      <ServiceGap/>
      <Professional_Services/>
      <CompanyRecognition/>
    </main>
  );
};

export default ItTeam;