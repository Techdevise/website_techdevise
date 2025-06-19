
import React from 'react';
// import Navbar from '../layout/Navbar';
import ContentManagementSystem from '../components/ContentManagementSystem';
import WorkModules from '../components/WorkModules';
import Automation from '../components/Automation';
import TechDeviseAutomation from '../components/TechDeviseAutomation';
import ECommerceServices from '../components/ECommerceServices';
import PythonExpertSection from '../components/PythonExpertSection';
import ChooseUs from '../components/ChooseUs';
import ArtificialIntelligence from '../components/ArtificialIntelligence';

import Mobilebackimg from "../assets/Group 726.png";

import blockchainarrow from "../assets/blockchainarrow.svg";

function WebsiteDevelopment() {
    return (
         <main className="w-full bg-[#FAFAFA]">
   
   <section
  className="relative w-full min-h-[70vh] md:min-h-[842px] flex flex-col items-center justify-between bg-cover bg-center"
  style={{
    backgroundImage: `linear-gradient(to right, rgb(23 147 107 / 68%), rgb(5 40 29 / 58%)), url(${Mobilebackimg})`,
    backgroundBlendMode: "multiply",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>
  {/* Main content */}
  <div className="relative text-center text-white px-6 max-w-4xl z-10 mt-16 md:mt-20">
    <h1
      className="text-3xl md:text-[48px] font-Montserrat font-bold mb-4 mt-24 md:mt-[17.5rem] leading-tight"
      style={{
        display: "inline-table",
        background: "linear-gradient(to right, #FFFFFF, #9A9A14)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        color: "#157B6C",
      }}
    >
      Expert Website Development
      <br />
      Services
    </h1>

    <p className="text-base md:text-[20px] leading-relaxed mb-6 font-Montserrat text-white">
      <strong>Tech Devise</strong> possesses a professional team of experts!
      Our primary goal is to meet the requirements of our clients. We specialize in providing
      top-notch services as we continue to cater to the needs of our customers even after the delivery period.
    </p>

    <div className="flex justify-center">
      <button className="flex items-center pt-[6px] pr-[10px] pb-[7px] pl-[20px] gap-2 rounded-full bg-[#CACB87] text-black text-[16px] font-Montserrat font-medium transition-colors hover:bg-[#e1e285]">
        <span>Know More</span>
        <div className="bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center ml-2">
          <img
            src={blockchainarrow}
            alt="Arrow"
            className="w-4 h-4"
          />
        </div>
      </button>
    </div>
  </div>
</section>

      {/* <ContentManagementSystem /> */}
            <WorkModules />
            <ECommerceServices />
            <Automation />
            <TechDeviseAutomation />
            <PythonExpertSection />
            <ChooseUs />
            <ArtificialIntelligence />
    </main>

           
           
         
         
    );
}

export default WebsiteDevelopment;