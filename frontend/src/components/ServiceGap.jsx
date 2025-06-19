import React from "react";
import Service_Gap from "../assets/serviceGap.svg";
import Computer from "../assets/programmer_computer.svg";
import Vector from "../assets/Vector111.svg";
import Setting from "../assets/setting_icon 1.svg";
import microchip from "../assets/microchip_icon 1.svg";

const ServiceGap = () => {
  return (
    <div className="tech_services_gap w-full max-w-full mx-auto mt-10 bg-white  flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 py-6">
     <div className="flex flex-col lg:flex-row w-full items-stretch">
  {/* Image Section */}
  <div className="w-full lg:w-1/2 flex justify-center items-center bg-[#F4F6FF]">
    <img
      src={Service_Gap}
      alt="Tech Services Illustration"
      className="w-full sm:w-[350px] md:w-[450px] lg:w-[500px] xl:w-full h-auto object-contain"
    />
  </div>

  {/* Content Section */}
  <div className="w-full lg:w-1/2 xl:w-[50%] text-left px-6 lg:px-[5rem] py-10 bg-[#F4F6FF]">
    <h1 className="services_title text-[25px] sm:text-[28px] md:text-[32px] lg:text-[48px] font-extrabold font-Montserrat text-black mb-6 leading-tight">
      Filling the Tech <br /> Services Gap
    </h1>

   <div className="mb-8">
  <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold mb-4">Did you know...</h2>
  <p className="mb-4">
    75% of decision makers see all those within their Internet. Some of the top roles include:
  </p>
  <ul className="flex items-center gap-x-6 flex-wrap">
    {[
      { icon: Computer, label: "Artificial<br/>intelligence", isStrong: true },
      { icon: Setting, label: "IT<br/>Operations", isStrong: true },
      { icon: Vector, label: "Cloud", isStrong: true, className: "aa mb-4" },
      { icon: microchip, label: "Software<br/>Development", isStrong: true }
    ].map((item, i) => (
      <li key={i} className={`flex flex-col items-center text-center ${item.className || ""}`}>
        <div className="bg-white rounded-lg p-3 ">
          <img src={item.icon} alt={item.label} className="w-6 h-6" />
        </div>
        {item.isStrong ? (
          <strong
            className="mt-2 text-black text-sm"
            dangerouslySetInnerHTML={{ __html: item.label }}
          />
        ) : (
          <span
            className="mt-2 text-black text-sm"
            dangerouslySetInnerHTML={{ __html: item.label }}
          />
        )}
      </li>
    ))}
  </ul>
</div>

    <div className="mb-8">
      <h2 className="text-[15px] sm:text-[16px] md:text-[18px] font-bold mb-4">
        What Impact does this have on business?
      </h2>
      <p className="text-[12px] md:text-[16px]">
        Reduced ability to meet business objectives. Higher operating costs.
        Longer project durations and decreased quality. Increased stress among IT employees.
      </p>
    </div>

    <div>
      <h2 className="ttext-[15px] sm:text-[16px] md:text-[18px] font-bold mb-4">
        Get Access to the Right Solutions
      </h2>
      <p className="text-[12px] md:text-[16px]">
        <span className="font-bold text-black">TechDevise</span> delivers world-class technical and
        talent services to IT clients around the globe through Evergreen, our professional services
        division. With staffing experts in 70+ offices across North America, Europe, and Asia, as
        well as our state-of-the-art technology delivery center in Hyderabad, India, we provide the
        solutions you need to achieve your company's goals.
      </p>
    </div>
  </div>
</div>
    </div>
  );
};

export default ServiceGap;
