import React from "react";
import "../styles/components/MobileAppServices.css";
import Appleicon from "../assets/Appleicon.svg";
import Androidicon from "../assets/Androidicon.svg";
import Reactnativeicon from "../assets/Reactnativeicon.svg";
import Mobileserviceimg1 from "../assets/Mobileserviceimg1.svg";

const MobileAppServices = () => {
  return (
    <div className="mob_ser w-[1678px] flex flex-col md:flex-row items-start justify-between  py-10 mx-auto gap-0 md:gap-10">
      <div className="mob_ser1 relative w-full md:w-[780px] h-[350px] text-center md:text-start mb-8 md:mb-0">
        {/* Image layer with 30% opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 rounded-lg"
          style={{ backgroundImage: `url(${Mobileserviceimg1})` }}
        ></div>

        {/* Content layer */}
        <div className="mob_ser2 w-full relative z-10  rounded-lg p-4 sm:p-6 md:p-8 mt-10">
          <h2 className="mobile_title text-2xl sm:text-[32px] lg:text-4xl xl:text-[44px]  font-extrabold text-black lg:leading-tight leading-snug sm:leading-tight mb-4">
            Comprehensive Mobile App <br />
            Development Services <br />
            We Provide
          </h2>
          <p className="mobile_text text-black mt-8 text-sm sm:text-base md:text-[18px] font-Montserrat">
            Our extensive mobile app development services cover everything from
            concept to deployment, ensuring a seamless and innovative user
            experience.
          </p>
        </div>
      </div>

      {/* Right Side Cards */}
      <div className="mobile_cards w-full md:w-1/2 flex flex-wrap justify-center gap-4 sm:gap-6 px-4 md:px-0">
        {/* iOS App Development */}
        <div className="w-full sm:w-[356px] h-[161px] bg-[#EA99B9] rounded-3xl flex items-center p-4 shadow-md">
          <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center mr-4 shrink-0">
            <img src={Appleicon} alt="iOS" className="w-[30px] h-[34px]" />
          </div>
          <p className="text-black font-Montserrat font-bold text-[24px]">
            iOS App <br /> Development
          </p>
        </div>

        {/* Android App Development */}
        <div className="w-full sm:w-[356px] h-[161px] bg-[#99EAE0] rounded-3xl flex items-center p-4 shadow-md">
          <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center mr-4 shrink-0">
            <img
              src={Androidicon}
              alt="Android"
              className="w-[32px] h-[36px]"
            />
          </div>
          <p className="text-black font-Montserrat font-bold text-[24px]">
            Android App <br /> Development
          </p>
        </div>

        {/* React Native Development */}
        <div className="w-full sm:w-[356px] h-[161px] bg-[#99CBEA] rounded-3xl flex items-center p-4 shadow-md">
          <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center mr-4 shrink-0">
            <img
              src={Reactnativeicon}
              alt="React"
              className="w-[30px] h-[34px]"
            />
          </div>
          <p className="text-black font-Montserrat font-bold text-[24px]">
            React Native <br /> Development
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileAppServices;
