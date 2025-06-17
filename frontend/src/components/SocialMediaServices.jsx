import React, { useState } from "react";
import '../styles/components/SocialMediaServices.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import socialmediamanagement from "../assets/socialmediamanagement.png";
import contentcreation from "../assets/contentcreation.png";
import keywordresearch from "../assets/keywordresearch.png";

const services = [
  {
    title: "Social Media \nManagement",
    image: socialmediamanagement,
    description: `The present online market is heavily influenced and reliant on Social Media Platforms. With the assistance of Tech Devise, you can now connect with your audiences more effectively through Social Media Platforms.`,
  },
  {
    title: "Content \nCreation",
    image: contentcreation,
    description: `The Tech Devise team will help you to compose engaging content that attracts the attention of your target audience. Increase your Social Media reach with lucrative and creative content.`,
  },
  {
    title: "Keyword \nResearch",
    image: keywordresearch,
    description: `Our expert team makes sure to identify and highlight the most relevant keyword in every Social Media Post such that the reach of every post is maximized in the long run.`,
  },
  {
    title: "Analytics & \nReporting",
    image: socialmediamanagement,
    description: `We provide deep insights into your campaign performance to help you optimize and grow faster.`,
  },
];

const SocialMediaServices = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCards = services.slice(startIndex, startIndex + 3);

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex + 3 < services.length) setStartIndex(startIndex + 1);
  };

  return (
    <section
    className="w-full py-10 px-4 sm:px-6 md:px-10"
    style={{ background: 'linear-gradient(to right, #EFFFF4, #92E3A9)' }}
  >
        <div className="social_mmedia max-w-[1620px] mx-auto">
      <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold font-Montserrat text-black">
        Our Social Media Marketing Services
      </h1>
      <p className="text-left font-Montserrat text-[16px] sm:text-[18px] text-black mt-6">
        At Tech Devise our team of Social Media experts strives to provide our clients with the best social media marketing
        solutions that will surely<br /> improve your business’s online visibility. With the help of your experts, you can increase your
        online customer base as well.
      </p>

      <div className="mt-10 flex flex-col lg:flex-row gap-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
        {visibleCards.map((service, index) => (
          <div key={index} className="bg-[#DBFFE5] shadow-xl rounded-xl p-6 w-full text-left">
            <div className="bg-[#94E4AB] w-[90px] h-[90px] flex items-center justify-center rounded-full">
              <span className="text-black text-xl">
                <img src={service.image} alt={service.title} className="w-[40px] h-[40px] text-white" />
              </span>
            </div>
            <h2 className="font-Montserrat font-semibold text-[28px] mt-4 whitespace-pre-line">
              {service.title}
            </h2>
            <p className="text-[#000000] mt-8 font-Montserrat text-[16px]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
          {/* Social Media Icons */}
          <div className="flex flex-row lg:flex-col gap-4 items-center justify-center mt-0 lg:mt-0">
  <div className="border border-dashed border-black rounded-full p-4">
    <FaFacebookF className="text-[20px] lg:text-[60px]" />
  </div>
  <div className="border border-dashed border-black rounded-full p-4">
    <FaXTwitter className="text-[20px] lg:text-[60px]" />
  </div>
  <div className="border border-dashed border-black rounded-full p-4">
    <FaInstagram className="text-[20px] lg:text-[60px]" />
  </div>
  <div className="border border-dashed border-black rounded-full p-4">
    <FaYoutube className="text-[20px] lg:text-[60px]" />
  </div>
</div>


      {/* Navigation Arrows */}
      {/* <div className=" bottom-40 flex gap-4">
        <button onClick={handlePrev} className="bg-black text-white p-3 rounded-full">
          <FaArrowLeft size={15} />
        </button>
        <button onClick={handleNext} className="bg-black text-white p-3 rounded-full">
          <FaArrowRight size={15} />
        </button>
      </div> */}
      </div>
      <div className="mt-10 flex gap-4 justify-center lg:justify-start">
        <button onClick={handlePrev} className="bg-black text-white p-3 rounded-full">
          <FaArrowLeft size={15} />
        </button>
        <button onClick={handleNext} className="bg-black text-white p-3 rounded-full">
          <FaArrowRight size={15} />
        </button>
      </div>

    
      </div>
      </section>
  );
};

export default SocialMediaServices;
