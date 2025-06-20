import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";
import "../styles/components/DesktopIndustryVision.css";
import "../styles/pages/IndustryVision.css";

const DesktopIndustryVision = () => {
  const [industries, setIndustries] = useState([]);
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/seamless`); 
        if (res.data.success) {
          setIndustries(res.data.data);
        }
      } catch (err) {
        console.error("Failed to fetch seamless vision data:", err);
      }
    };

    fetchIndustries();
  }, []);

  return (
    <div className="hidden lg:block bg-[#061611] text-white mx-auto py-6 px-8 w-full max-w-[1680px] border border-[#2D4642] rounded-[20px] relative overflow-hidden mt-[100px] macbook-container">
      <div className="flex flex-col lg:flex-row justify-between gap-8 mb-0 macbook-header">
        <div className="lg:w-[45%] max-w-[683px] macbook-title">
          <h1
            style={{
              background: "linear-gradient(to right, #E0E0E0, #157B6C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            className="text-[47px] font-extrabold pt-4 leading-tight macbook-heading"
          >
            A Seamless Vision that Adapts to Every Industry's Demands
          </h1>
          <p className="font-bold text-xl text-white mt-10 w-full max-w-[725px] macbook-paragraph">
            We deliver flexible and innovative IT solutions tailored to meet the evolving needs of various industries,
            ensuring efficiency, scalability, and long-term success.
          </p>
          <div className="flex bg-[#0A211B] rounded-3xl p-6 w-[733px] h-[164px] mt-[50px] max-w-3xl items-center justify-between macbook-card">
            <div>
              <p className="text-white text-lg font-medium macbook-card-text">
                Fuel Success in a Digital-First <br /> World with <span className="font-bold text-[#8CBEB7]">300+</span> Visionaries.
              </p>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 flex items-center cursor-pointer shadow-md">
              <button className="text-[#157B6C] w-[320px] h-[50px] font-bold text-[20px] font-montserrat flex items-center macbook-button">
                Let's Innovate Together
                <svg width="50" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M13 5L20 12L13 19" stroke="#0A6E58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 12H20" stroke="#0A6E58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-[55%] ml-[100px] p-4 macbook-grid-container">
          <div className="grid grid-cols-4 grid-rows-[auto_auto_auto] gap-x-3 gap-y-3 macbook-grid">
            {industries.map((item, idx) => (
              <div
                key={idx}
                className={`relative group overflow-hidden opacity-100 rounded-[12px] shadow-overlay ${
                  item.width === 2 ? "col-span-2" : "col-span-1"
                }`}
                style={{ width: item.width === 2 ? 385 : 185, height: item.height || 159 }}
              >
              <img src={`http://localhost:9090/images${item.image}`} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent z-10">
                  <p className="absolute bottom-4 left-4 text-white-700 font-bold text-[20px] font-montserrat z-20">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopIndustryVision;
