import React from "react";
import '../styles/components/BlockchainPlatforms.css';
import RecognitionImage from '../assets/Group 490.svg';

const CompanyRecognition = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-8"
      style={{
        background: "linear-gradient(to right, #F7F5F3, #FFF2DF)",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-Montserrat font-extrabold text-black leading-snug lg:leading-tight mb-4">
          Our Company Recognition
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-base font-medium leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
      </div>

      {/* Circular Image Container */}
      <div className=" rounded-full w-[300px] sm:w-[400px] md:w-[500px] lg:w-[700px] h-[150px] sm:h-[200px] md:h-[270px] lg:h-[338px] flex items-center justify-center bg-transparent">
        <img
          src={RecognitionImage}
          alt="Company Recognition"
          className="max-w-full h-auto object-contain bg-transparent "
        />
      </div>
    </div>
  );
};

export default CompanyRecognition;
