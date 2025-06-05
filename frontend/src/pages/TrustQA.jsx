import React, { useState } from "react";
import "../index.css";
import "../styles/pages/TrustedBy.css";
import Trustedbyimg1 from "../assets/blueimag.png";
import Trustedimg3 from "../assets/Group 435.svg";
import Trustedimg4 from "../assets/Group 436.svg";
import Trustedimg5 from "../assets/Group 437.svg";
import Trustedimg6 from "../assets/Group 438.svg";
import Trustedimg7 from "../assets/Group 439.svg";
import Trustedimg8 from "../assets/Group 440.svg";
import Trustedimg9 from "../assets/Group 441.svg";
import Trustedimg10 from "../assets/Group 442.svg";
import Trustedimg11 from "../assets/Group 582.svg";
import Trustedimg12 from "../assets/Group 583.svg";
import Trustedimg13 from "../assets/Group 584.svg";
import Trustedimg14 from "../assets/Group 585.svg";
import Trustedimg15 from "../assets/Group 586.svg";
import Trustedimg16 from "../assets/Group 587.svg";


const brands = [
 
  { name: "", icon: Trustedbyimg1 },
  { name: "", icon: Trustedimg3 },
  { name: "", icon: Trustedimg4 },
  { name: "", icon: Trustedimg5 },
  { name: "", icon: Trustedimg6 },
  { name: "", icon: Trustedimg7 },
  { name: "", icon: Trustedimg8 },
  { name: "", icon: Trustedimg9 },
  { name: "", icon: Trustedimg10 },
  { name: "", icon: Trustedimg11 },
  { name: "", icon: Trustedimg12 },
  { name: "", icon: Trustedimg13 },
  { name: "", icon: Trustedimg14 },
  { name: "", icon: Trustedimg15 },
  { name: "", icon: Trustedimg16 },

];

const TrustQA = () => {
  const [isPaused, setIsPaused] = useState(false);
  return (
   <div className="w-full bg-transparent text-white flex items-center justify-center relative overflow-hidden p-6 md:px-12">
  {/* “Our Esteemed Clients” label -- hidden at small screens */}
  <div className="hidden md:block flex-shrink-0 text-left ml-4 md:ml-20 pr-6 border-r border-white/60 z-10 laptop-margin">
    <p className="text-xl md:text-2xl font-bold font-Montserrat">Our Esteemed</p>
    <p className="text-base md:text-lg font-medium text-gray-300">Clients</p>
  </div>

  {/* Brand carousel */}
  <div className="flex-1 overflow-hidden pl-4 md:pl-6 mt-2">
    <div
      className={`flex items-center gap-8 md:gap-4 ${
        isPaused ? 'animation-paused' : 'animate-scroll'
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {[...brands, ...brands].map((brand, index) => (
        <div
          key={index}
          className="flex-shrink-0 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity duration-300"
        >
          <img src={brand.icon} alt={brand.name} className="h-12 md:h-12 mb-2" />
          <p className="text-xs md:text-sm text-gray-400 font-bold">{brand.name}</p>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};  

export default TrustQA;