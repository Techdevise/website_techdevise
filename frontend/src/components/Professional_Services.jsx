import React from "react";
import ProService from "../assets/Mask group.svg";

const Professional_Services = () => {
  return (
    <div className="tech_automation w-full max-w-[1680px] mx-auto mt-10 bg-white rounded-xl  flex flex-col lg:flex-row items-center justify-between p-4 sm:p-6 md:p-10 space-y-8 lg:space-y-0">
      <div className="w-full lg:w-1/2 text-left py-20 pr-20">
        <h2 className="automation_title text-[24px] sm:text-[28px] md:text-[32px] lg:text-[48px] font-extrabold font-Montserrat text-black mb-6 leading-tight text-center lg:text-left">
          Professional Services <br />
          Beyond <span className="font-bold text-[#157B6C]">IT Staffing</span>
        </h2>
        <p className="text-black font-Montserrat text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed max-w-full ">
       <span className="font-bold text-black">Techdevise</span>goes beyond staffing. As a true tech and talent partner, we
          go above and beyond to deliver IT services that power innovation and
          transformation. When you partner with Insight Global, you get the
          engine of a leading IT staffing company as well as extensive technical
          solutions through our Evergreen professional services
          division. <br /><br />Evergreen pairs a forward-thinking tech approach with
          TechDevise powerhouse staffing capabilities. The result? An expert
          vision to transform your business with the skills to execute the
          strategy. From sourcing high-impact, built-for-purpose teams to
          helping you meet your technology goals, we design solutions that drive
          current success and long-term growth. 
        </p>
      </div>
<div className="w-full lg:w-1/2 flex justify-center items-center relative">
  {/* Image - responsive sizing */}
  <img
    src={ProService}
    alt="Professional Services"
    className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] xl:w-[700px] h-auto object-contain"
  />

  <div className="hidden lg:flex absolute right-0 h-full w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] xl:w-[700px] items-center mr-[90px] mb-[535px]">
    <span
      className="text-[#A2A2A2] whitespace-nowrap font-Montserrat font-extrabold text-[30px] xl:text-[50px] tracking-wide"
      style={{
        transform: "rotate(270deg)",
        transformOrigin: "right top",
        background: "linear-gradient(99.51deg, #D5E4FF, #155862)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        position: "absolute",
        right: "-40px",
        top: "50%"
      }}
    >
      Professional Services
    </span>
  </div>
</div>

    </div>
  );
};

export default Professional_Services;
