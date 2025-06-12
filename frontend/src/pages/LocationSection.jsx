import React from "react";
import { useLocation } from "react-router-dom";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

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
    flag: <img src={indianflag} alt="Indian flag" className="w-[24px] h-[24px]" />,
    image: indiaLandmarkImg,
  },
  {
    country: "United States",
    address: "1600 Pennsylvania Avenue NW, Washington, DC 20500, USA",
    flag: <img src={unitedflag} alt="US flag" className="w-[24px] h-[24px]" />,
    image: usaLandmarkImg,
  },
  {
    country: "Netherland",
    address: "Paleisstraat 1, 1012 RB Amsterdam, Netherlands",
    flag: <img src={netherland} alt="Netherlands flag" className="w-[24px] h-[24px]" />,
    image: netherlandsLandmarkImg,
  },
];

const LocationSection = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={`relative w-full pt-20 px-4 md:px-32 ${isHomePage ? "bg-[#061611] text-white" : "bg-black text-white"}`}>
      {/* Header */}
      <div className="relative z-10 text-center mb-20">
        <h3 className="text-[#00C2A8] text-xl font-semibold mb-3">Location</h3>
        <h2 className="text-4xl md:text-5xl font-extrabold font-Montserrat mb-4 text-white">
          We’d love to <span className="text-[#00C2A8]">hear</span> from you
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          We have offices and teams all around the world.
        </p>

        {/* Arrow */}
        <div className="relative h-20">
          <img
            src={Arrologo}
            alt="Arrow"
            className="absolute w-[70px] left-[65%] -translate-x-1/2 top-[-35%]"
          />
        </div>
      </div>

      {/* World Map with Cards */}
   <div className="relative w-full h-[400px] -top-[119px]">
  <img
    src={worldMap}
    alt="World Map"
    className="absolute inset-0 w-full h-full "
  />

  {/* Overlay for location cards, centered */}
<div className="absolute inset-0 z-10 flex items-center justify-center">
  <div className="flex justify-center items-center gap-6 flex-wrap max-w-auto ">
    {locations.map((loc, index) => (
      <div
        key={index}
        className=" bg-white  rounded-2xl p-4 w-[500px] h-[200px] md-w-[300px] md-h-[200px] flex-shrink-0 flex items-center gap-4"
      >
        {/* Left image */}
        <img
          src={loc.image}
          alt={`${loc.country} landmark`}
          className="w-[193px] h-[150px] object-cover rounded-xl"
        />

        {/* Right text block */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center mb-2">
            {loc.flag}
            <h4 className="ml-2 text-lg font-bold text-black">{loc.country}</h4>
          </div>
          <p className="text-sm leading-snug text-black">{loc.address}</p>
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
