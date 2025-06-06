import React from "react";
import Service_Gap from "../assets/serviceGap.svg";
import Computer from "../assets/programmer_computer.svg";
import Vector from "../assets/Vector111.svg";
import Setting from "../assets/setting_icon 1.svg";
import microchip from "../assets/microchip_icon 1.svg";

const ServiceGap = () => {
  return (
    <div className="tech_services_gap w-full max-w-full mx-auto mt-10 bg-white  flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 py-6">
      <div className="w-full lg:w-1/2 flex justify-center items-center ">
        <img
          src={Service_Gap}
          alt="Tech Services Illustration"
          className="w-full sm:w-[350px] md:w-[450px] lg:w-[500px] xl:w-full h-auto object-contain "
        />
      </div>
      <div className="w-full lg:w-1/2 xl:w-[50%] text-left pl-0 lg:pl-[5rem] bg-[#F4F6FF] h-[887px] pr-[14.5rem]">
        <h1 className="services_title text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-extrabold font-Montserrat text-black mb-6 leading-tight mt-[30px]">
          Filling the Tech <br /> Services Gap
        </h1>

        <div className="mb-8">
          <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold mb-4">
            Did you know...
          </h2>
          <p className="mb-4">
            75% of decision makers see all those within their Internet. Some of
            the top roles include:
          </p>
          <ul className="flex items-center gap-x-6">
            <li className="flex flex-col items-center text-center">
              <div className="bg-white rounded-lg p-3">
                <img
                  src={Computer}
                  alt="Artist and Systems"
                  className="w-5 h-5"
                />
              </div>
              <strong className="mt-2 text-black text-sm">
                Artificial <br />
                intelligence
              </strong>
            </li>

            <li className="flex flex-col items-center text-center">
              <div className="bg-white rounded-lg p-3">
                <img src={Setting} alt="IT" className="w-5 h-5" />
              </div>
              <span className="mt-2 text-black text-sm">
                IT <br />
                Operations
              </span>
            </li>

            <li className="flex flex-col items-center text-center">
              <div className="bg-white rounded-lg p-3 mb-[18px]">
                <img src={Vector} alt="Cloud" className="w-5 h-5" />
              </div>
              <span className="mt-2 text-black text-sm ">Cloud</span>
            </li>

            <li className="flex flex-col items-center text-center">
              <div className="bg-white rounded-lg p-3">
                <img src={microchip} alt="55 x 46" className="w-5 h-5" />
              </div>
              <strong className="mt-2 text-black text-sm">
                Software <br />
                Development
              </strong>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold mb-4">
            What Impact does this have on business?
          </h2>
          <p>
            Reduced ability to meet business objectives   Higher operating
            costs   Longer project durations and decreased quality  Increased
            stress among IT employees
          </p>
        </div>

        <div>
          <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold mb-4">
            Get Access to the Right Solutions
          </h2>
          <p>
            <span className="font-bold text-black">TechDevise</span> delivers
            world-class technical and talent services to IT clients around the
            globe through Evergreen, our professional services division. With
            staffing experts in 70+ offices across North America, Europe, and
            Asia, as well as our state-of the-art technology delivery center in
            Hyderabad, India, we provide the solutions you need to achieve your
            company's goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceGap;
