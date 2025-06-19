import React, { useRef, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Aiservicesimg5 from "../assets/Aiservicesimg5.svg";
import axios from "axios";

import '../styles/components/ArtificialIntelligence.css'
const AiSolutionsSection = () => {
  const sliderRef = useRef(null);
  const [cards, setCards] = useState([]);

const handleScroll = (direction) => {
  const scrollAmount = 550;
  if (sliderRef.current) {
    const currentScroll = sliderRef.current.scrollLeft;
    const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    
    
    let targetScroll;
    if (direction === "left") {
      targetScroll = Math.max(0, currentScroll - scrollAmount);
    } else {
      targetScroll = Math.min(maxScroll, currentScroll + scrollAmount);
    }
    
    
    sliderRef.current.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  }
};

  // Fetch data from the API
  useEffect(() => {
    const fetchAiSolutions = async () => {
      try {
        const res = await axios.get("http://localhost:9090/api/ai");
        if (res.data.success) {
          setCards(res.data.data);
        } else {
          console.error("Failed to fetch AI solutions");
        }
      } catch (err) {
        console.error("Error fetching AI solutions:", err);
      }
    };

    fetchAiSolutions();
  }, []);

  return (
    <div
      className="w-full px-4 py-10"
      style={{ background: "linear-gradient(to right, #FFFFFF, #D5D5D5)" }}
    >
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto my-10">
        <h1 className="text-[25px] md:text-[48px] font-extrabold text-[#0F0F0F] mb-4">
          Why Choose AI Integrated Solutions For Your Business?
        </h1>
        <p className="text-gray-700 text-[15px]  md:text-[20px]">
          From chatbots to predictive analytics systems, our AI development company offers customized artificial intelligence
          development services. Turn raw data into actionable reports, predict customer behavior, and increase workforce
          productivity with our intelligent AI services.
        </p>
      </div>

      {/* Content */}
      <div className="new_slid flex items-start justify-center gap-6 max-w-[1600px] mx-auto">
        {/* Robot Image */}
        <div className="flex-shrink-0 hidden lg:block">
          <img
            src={Aiservicesimg5}
            alt="AI Robot"
            className="w-[240px] h-auto object-contain"
            title="AI Services Illustration"
          />
        </div>

        {/* Slider */}
        <div className="relative w-full overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-2"
            title="AI Solutions Carousel"
          >
            {cards.map((card, idx) => (
              <div
                key={idx}
                className=" new_slid1 md:min-w-[400px] md:max-w-[400px] min-w-[343px] max-w-[343px] h-[300px] bg-cover bg-center rounded-lg relative overflow-hidden flex items-end p-4 text-white shadow-lg"
                style={{ backgroundImage: `url(http://localhost:9090/images${card.image})` }}
                title={card.title?.replace(/<br\/?>/g, ' ')}
              >
                <div className="z-10">
                  <h2 className="text-[30px] font-bold" dangerouslySetInnerHTML={{ __html: card.title }} />
                  <p className="text-sm mt-1">{card.message}</p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />
              </div>
            ))}
          </div>

          {/* Arrows */}
          <div className="arrow_slid flex gap-3 z-10 justify-end mt-10" title="Carousel Navigation">
            <button
              onClick={() => handleScroll("left")}
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-md"
              aria-label="Previous slide"
              title="Previous"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-md"
              aria-label="Next slide"
              title="Next"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiSolutionsSection;
