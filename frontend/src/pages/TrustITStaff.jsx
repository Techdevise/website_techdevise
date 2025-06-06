import React, { useState } from "react";
import "../index.css";
import "../styles/pages/TrustedBy.css";
import Trustedbyimg1 from "../assets/Group 616.svg";
import Trustedimg3 from "../assets/Group 617.svg";
import Trustedimg4 from "../assets/Group 619.svg";
import Trustedimg5 from "../assets/Group 620.svg";
import Trustedimg6 from "../assets/Group 621.svg";
import Trustedimg7 from "../assets/Group 622.svg";
import Trustedimg8 from "../assets/Group 623.svg";
import Trustedimg9 from "../assets/Group 624.svg";

const brands = [
  { name: "", icon: Trustedbyimg1 },
  { name: "", icon: Trustedimg3 },
  { name: "", icon: Trustedimg4 },
  { name: "", icon: Trustedimg5 },
  { name: "", icon: Trustedimg6 },
  { name: "", icon: Trustedimg7 },
  { name: "", icon: Trustedimg8 },
  { name: "", icon: Trustedimg9 },
];

const TrustITStaff = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  return (
    <div className="w-full max-w-[1800px] h-[150px] mx-auto bg-[#6AD2B6] text-white flex items-center justify-center relative overflow-hidden p-4 md:p-6 lg:rounded-[30px] lg:-mb-[110px]">
      <div className="w-full overflow-hidden">
        <div
          className={`flex items-center gap-4 md:gap-8 ${
            isPaused ? 'animation-paused' : 'animate-scroll'
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              <img 
                src={brand.icon} 
                alt={brand.name} 
                className="h-10 md:h-13 lg:h-14 mb-2 object-contain" 
              />
              <p className="text-xs md:text-sm text-gray-400 font-bold">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};  

export default TrustITStaff;