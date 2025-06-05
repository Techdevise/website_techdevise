import React from "react";
import whitearrow from "../assets/whitearrow.png";
import Arrowlogo from "../assets/Arrowlogo.png";
import Upworklogo from "../assets/Upworklogo.png";
import Trustpilot from "../assets/Trustpilot.png";
import Clutch from "../assets/Clutch.png";

const SocialMediaBanner = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 mt-10">
      <div className="max-w-[1680px] w-full mx-auto bg-[#062018] rounded-3xl flex flex-col lg:flex-row items-center justify-between p-6 sm:p-10 gap-8">
        {/* Left Section */}
        <div className="relative text-center lg:text-left">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
            style={{
              background: "linear-gradient(to right, #e0e0e0, #157B6C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <span className="text-gray-300">You can</span>{" "}
            <span className="text-green-400">Find</span> <br /> Us on
          </h2>
          <img
            src={Arrowlogo}
            alt="Arrowlogo"
            className="absolute top-0 right-[-315px] w-[100px] sm:w-[140px] md:w-[200px] hidden sm:block"
          />
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
          <a
            href="https://www.linkedin.com/company/tech-devise/posts/?feedView=all"
            className="bg-[#0077B5] text-white flex items-center justify-center rounded-lg p-4 h-[100px] sm:h-[120px]"
          >
            <img src={whitearrow} alt="LinkedIn" className="w-[120px] sm:w-[160px]" />
          </a>

          <a
            href="https://www.linkedin.com/company/tech-devise/posts/?feedView=all"
            className="bg-green-500 text-white flex items-center justify-center rounded-tr-2xl p-4"
          >
            <img src={Upworklogo} alt="Upwork" className="w-[90px] sm:w-[130px]" />
          </a>

          <a
            href="https://www.linkedin.com/company/tech-devise/posts/?feedView=all"
            className="bg-[#17313B] text-white flex items-center justify-center rounded-lg p-4 h-[100px] sm:h-[120px]"
          >
            <img src={Clutch} alt="Clutch" className="w-[80px] sm:w-[110px]" />
          </a>

          <a
            href="https://www.linkedin.com/company/tech-devise/posts/?feedView=all"
            className="bg-[#0AB67B] text-white flex items-center justify-center rounded-br-2xl p-4"
          >
            <img src={Trustpilot} alt="Trustpilot" className="w-[140px] sm:w-[200px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaBanner;
