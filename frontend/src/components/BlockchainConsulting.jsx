import React, { useState, useEffect } from 'react';
import '../styles/components/BlockchainConsulting.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import Vector from '../assets/Vector.svg';
import Lamp1 from '../assets/Lamp1.svg';
import Lamp2 from '../assets/Lamp2.svg';

const BlockchainConsulting = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await fetch('http://localhost:9090/api/blockchain_con'); // Adjust URL as needed
        const data = await res.json();
        if (data.success) {
          setSlides(data.data);
        } else {
          console.error("API Error:", data.message);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchSlides();
  }, []);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  if (slides.length === 0) {
    return <div className="text-center py-10">Loading...</div>;
  }

  const current = slides[currentSlide];

  return (
    <div className="blockchain_consultt w-full max-w-[1680px] mx-auto px-4 py-2 flex flex-col lg:flex-row gap-6 items-center lg:items-start">
      
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="w-full h-full">
          <img
            src={`http://localhost:9090/images${current.image}`}
            alt="Slide"
            className="w-full max-w-[662px] h-auto lg:h-[620px] object-cover rounded-[20px] lg:rounded-[30px]"
          />
        </div>
      </div>

      <div className="w-full lg:w-[60%] h-full bg-white rounded-[20px] lg:rounded-[30px] shadow-lg flex items-center relative">
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[989px] h-auto lg:h-[620px] px-4 sm:px-6 md:px-10 lg:px-8 py-6 flex flex-col justify-center mx-auto">

          <div className="absolute top-0 right-4 sm:right-8 md:right-16 hidden lg:flex space-x-8">
            <img src={Lamp1} alt="hanging icon" className="h-[100px] md:h-[147px]" />
            <img src={Lamp2} alt="hanging icon" className="h-[120px] md:h-[180px]" />
          </div>

          {/* Icon Circle */}
          <div className="w-[80px] sm:w-[100px] md:w-[120px] h-[80px] sm:h-[100px] md:h-[120px] bg-[#157B6C] rounded-full flex items-center justify-center mb-6">
            <span className="w-[50px] sm:w-[60px] md:w-[77px] h-[50px] sm:h-[60px] md:h-[77px] text-white">
              <img src={Vector} alt="vector icon" />
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-Montserrat font-extrabold text-black mb-4 leading-snug">
            {current.title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < current.title.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>

          {/* Description */}
          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-Montserrat font-medium text-black leading-relaxed mb-8">
            {current.message}
          </p>

          {/* Navigation */}
          <div className="flex space-x-2 mt-6">
            <button onClick={goToPrevSlide} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition">
              <ArrowLeft size={18} />
            </button>
            <button onClick={goToNextSlide} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#157B6C] text-white flex items-center justify-center hover:bg-[#0f5e53] transition">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainConsulting;
