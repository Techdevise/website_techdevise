import React from "react";
import { useLocation } from "react-router-dom";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import "../styles/pages/LocationSection.css";
import indianflag from "../assets/indianflag.png";
import unitedflag from "../assets/unitedflag.png";
import netherland from "../assets/netherland.png";

import indiaLandmarkImg from "../assets/INDIA.svg";
import usaLandmarkImg from "../assets/UNITEDSTATES.svg";
import netherlandsLandmarkImg from "../assets/NETHERLAND.svg";
import Arrologo from "../assets/Vector1.svg";

import worldMap from "../assets/WorldMap1.svg";

const locations = [
  {
    country: "India",
    address: "F - 268, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071",
    flag: <img src={indianflag} alt="Indian flag" className="w-[50px] h-[34px] Indian_flag" />,
    image: indiaLandmarkImg,
  },
  {
    country: "United States",
    address: "1600 Pennsylvania Avenue NW, Washington, DC 20500, USA",
    flag: <img src={unitedflag} alt="US flag" className="w-[50px] h-[34px] Indian_flag" />,
    image: usaLandmarkImg,
  },
  {
    country: "Netherland",
    address: "Paleisstraat 1, 1012 RB Amsterdam, Netherlands",
    flag: <img src={netherland} alt="Netherlands flag" className="w-[50px] h-[34px] Indian_flag" />,
    image: netherlandsLandmarkImg,
  },
];

const LocationSection = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={`mapp_pd relative w-full pt-20 pb-10 sm:pb-[120px] px-4 md:px-32 ${isHomePage ? "bg-[#061611] text-white" : "bg-black text-white"}`}>
      {/* Header */}
      <div className="relative z-10 text-center mb-0">
        <h3 className="text-[#157B6C] text-[32px] font-Montserrat font-bold mb-3">Location</h3>
        <h2 className="text-3xl md:text-5xl font-extrabold font-Montserrat mb-4 text-white">
          We’d love to hear from you
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          We have offices and teams all around the world.
        </p>

        {/* Arrow */}
        <div className="relative h-20">
          <img
            src={Arrologo}
            alt="Arrow"
            className="absolute w-[70px] left-[65%] -translate-x-1/2 top-[-35%] arrologo"
          />
        </div>
      </div>

      {/* World Map with Cards */}
   <div className="relative w-full">
  <img
    src={worldMap}
    alt="World Map"
    className="worldMap_map absolute inset-0 w-full h-full "
  />

  {/* Overlay for location cards, centered */}
<div className="inset-0 z-10 flex items-center justify-center">
 <div className="flex justify-center items-center gap-6 flex-wrap">
  {locations.map((loc, index) => (
    <div
      key={index}
      className="bg-[#061611] rounded-2xl p-4 w-full sm:w-[350px] md:w-[500px] h-auto flex-shrink-0 flex items-center gap-4 border border-[#2d4642] location"
    >
      {/* Left image */}
      <img
        src={loc.image}
        alt={`${loc.country} landmark`}
        className="w-[120px] sm:w-[150px] md:w-[193px] h-[120px] sm:h-[150px] object-cover rounded-xl locImage"
      />

      {/* Right text block */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center mb-2">
          {loc.flag}
          <h4 className="ml-2 text-[14px] sm:text-[14px] md:text-[20px] font-semibold font-Montserrat text-[#FFFFFF] locCountry">
            {loc.country}
          </h4>
        </div>
        <p className="text-[14px] sm:text-[15px] md:text-[16px] font-light font-Montserrat leading-snug text-[#FFFFFF] Paddress">
          {loc.address}
        </p>
      </div>
    </div>
  ))}
</div>
</div>

</div>

    </div>
  );
};

export default LocationSection;
