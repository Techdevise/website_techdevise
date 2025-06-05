import React, { useState } from "react";
import GettouchForm from "./GettouchForm";
 
const Button = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  return (
    <>
      <div className="inline-block">
        <button
          onClick={() => setIsModalOpen(true)}
          className="relative w-[152px] h-[40px] bg-white uppercase text-md font-bold rounded-xl shadow-md hover:bg-green-400 transition-all duration-300 hover:font-bold  hover:scale-105 overflow-hidden group"
        >
          <span
            className="relative z-10 w-full h-full flex items-center justify-center group-hover:text-white transition-colors duration-300"
            style={{
              background:
                "linear-gradient(to right, #14532d 0, #4ade80 10%, #14532d 20%)",
              backgroundPosition: "0",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shine 3s infinite linear",
            }}
          >
            Get in Touch
          </span>
          {/* Background that shows on hover */}
          <span className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
        </button>
      </div>
 
      <style jsx global>{`
        @keyframes shine {
          0% {
            background-position: 0;
          }
          60% {
            background-position: 180px;
          }
          100% {
            background-position: 180px;
          }
        }
      `}</style>
 
      <GettouchForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
         className="fixed "
      />
    </>
  );
};
 
export default Button;