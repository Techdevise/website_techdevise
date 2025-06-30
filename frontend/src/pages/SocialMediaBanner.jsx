import React from "react";
import "../styles/pages/SocialMediaBanner.css"
import Linkdinlogo from "../assets/Linkdinlogo.svg";
import Vector from "../assets/Vector.png";
import Upwork from "../assets/Upwork.png";
import Arrowlogo from "../assets/Arrowlogo.png"
import Upworklogo from "../assets/Upworklogo.svg"
import Trustpilot from "../assets/Trustpilot.svg"
import Clutch from "../assets/Clutch.svg"
// import Linkdinarrow from "../assets/Linkdinarrow.svg"
// import ArrowIcon from "../assets/ArrowIcon.svg"

const SocialMediaBanner = () => {
  return (
    <div className="new_find w-[1680px] h-[312px] m-auto mt-[100px] bg-[#062018] flex items-center justify-between px-10 rounded-3xl opacity-100">
      <div style={{
        display: 'inline-table',
        background: "linear-gradient(to right, #e0e0e0, #157B6C)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        textFillColor: "transparent",
        color: "#157B6C",
      }} className="fnt_txxt text-white text-5xl font-extrabold">
        <span className="text-gray-300">You can</span> <span className="text-green-400"> Find </span> <br /> Us on
        <img src={Arrowlogo} alt="Arrologo" className="lo_go visi_no w-[222px] h-[122px] mt-[-110px] ml-[120%]" />
      </div>
      <div className="socl_icco1 flex space-x-5">
        <div className="socl_icco grid grid-cols-2 gap-0">
          <a href="https://www.linkedin.com/company/tech-devise/posts/?feedView=all" className="bg-[#0077B5] text-white w-[440px] h-[132px] opacity-100 flex items-center justify-center text-xl font-bold">
            <img
              src={Linkdinlogo}
              alt="LinkedIn"
              className="new_wid w-[364px] h-auto mr-auto ml-6"
            />
         
          </a>
          <a href="https://www.linkedin.com/company/tech-devise/posts/?feedView=all" className="bg-green-500 text-white px-6 py-4 rounded-tr-2xl flex items-center justify-center text-xl font-bold">
            <img
              src={Upworklogo}
              alt="Upwork"
              className="new_wid w-[228px] h-auto mr-auto"
            />
          </a>
          <a href="https://www.linkedin.com/company/tech-devise/posts/?feedView=all" className="bg-[#17313B] text-white w-[440px] h-[132px] opacity-100 flex items-center justify-center text-xl font-bold">
            <img
              src={Clutch}
              alt="clutch"
              className="new_wid w-[228px] h-auto mr-auto ml-6"
            />
          </a>
          <a href="https://www.linkedin.com/company/tech-devise/posts/?feedView=all" className="bg-[#0AB67B] text-white px-6 py-4 rounded-br-2xl flex items-center justify-center text-xl font-bold">
            <img
              src={Trustpilot}
              alt="Trustpilot"
              className="new_wid w-[228px] h-auto mr-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaBanner;