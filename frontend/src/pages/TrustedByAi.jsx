import React, { useState } from "react";
import "../index.css";
import "../styles/pages/TrustedBy.css";
import Trustedbyimg1 from "../assets/Trustedbyimg1.svg";
import Trustedimg3 from "../assets/Trustedimg3.svg";
import Trustedimg4 from "../assets/Trustedimg4.svg";
import Trustedimg5 from "../assets/Trustedimg5.svg";
import Trustedimg6 from "../assets/Trustedimg6.svg";
import Trustedimg7 from "../assets/Trustedimg7.svg";
import Trustedimg8 from "../assets/Trustedimg8.svg";
import Trustedimg9 from "../assets/Trustedimg9.svg";
import Trustedimg10 from "../assets/Trustedimg10.svg";
import Trustedimg11 from "../assets/Trustedimg11.svg";
import Trustedimg12 from "../assets/Trustedimg12.svg";
import Trustedimg13 from "../assets/Trustedimg13.svg";
import Trustedimg14 from "../assets/Trustedimg14.svg";
import Trustedimg15 from "../assets/Trustedimg15.svg";
import Trustedimg16 from "../assets/Trustedimg16.svg";


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

const TrustedByAi = () => {
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div className="w-full bg-[#061611] text-white flex items-center justify-center relative overflow-hidden p-6 md:px-12 shadow-[0px_2px_10px_rgba(0,2,3,0.5)]" style={{
                  
                        background: "linear-gradient(to right, #005163, #01090A)",
                      
                    }}>
     
      <div className="hidden md:block flex-shrink-0 text-left ml-4 md:ml-20 pr-6 border-r border-white-600 z-10 laptop-margin">
        <p className="text-xl md:text-2xl font-bold font-Montserrat">Trusted by leading</p>  
        <p className="text-base md:text-lg font-medium text-gray-300">businesses globally for <br />smart AI solutions.</p>
      </div>
  
      
      <div className="flex-1 overflow-hidden pl-4 md:pl-6 mt-2">
        <div
          className={`flex items-center gap-8 md:gap-4 ${
            isPaused ? "animation-paused" : "animate-scroll"
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img src={brand.icon} alt={brand.name} className="h-16 md:h-16 mb-2 gap-0 " />
              <p className="text-xs md:text-sm text-gray-400 font-bold">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};  

export default TrustedByAi;