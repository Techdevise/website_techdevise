import React, { useRef } from 'react';
import '../styles/components/WorkModules.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Reviewplanning from '../assets/Reviewplanning.svg';
import Design from '../assets/Design.svg';
import Development from '../assets/Development.svg';
import Contentupload from '../assets/Contentupload.svg';

const WorkModules = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -560, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 560, behavior: "smooth" });
    }
  };

  return (
    <div className="work_modules w-full max-w-[1620px] h-auto bg-[#FAFAFA] px-4 py-12 md:px-16 pt-2 mx-auto relative">
      {/* Navigation Arrows */}
      {/* <div className="absolute right-0 top-4 flex gap-4 z-10">
        <button onClick={scrollLeft} className="bg-black text-white p-3 rounded-full">
          <FaArrowLeft size={15} />
        </button>
        <button onClick={scrollRight} className="bg-black text-white p-3 rounded-full">
          <FaArrowRight size={15} />
        </button>
      </div> */}

      <div className="flex flex-col md:flex-row">
        <div className="hidden md:block md:w-[60px] relative" />

       
        <div className="flex-1">
          <div className="w-full mb-6 px-4 md:px-0">
            <p className="w-full text-[16px] text-black font-Montserrat leading-6 max-w-7xl">
              <span className="text-[20px] font-Montserrat font-semibold">Content Management System</span> - Our team follows a very meticulous and precise procedure that allows us to meet the client requirements adequately within the deadline date. We take great pride in our module and the work ethic we possess.
            </p>
          </div>

         
          <div className="transform -translate-y-1/2">
            <div className="flex flex-col items-center hidden sm:flex">
              <div className="text-[#529D92] font-Montserrat font-bold -rotate-450 whitespace-nowrap text-5xl tracking-wide origin-center absolute left-[-272px] top-[121px] bottom-0 text-[46px]" style={{
                display: "inline-table",
                background: "linear-gradient(to right, #F2F2F2, #157B6C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
                color: "#157B6C",
              }}>
                Our Work Modules
              </div>
            </div>
          </div>

        
          <div 
            ref={scrollRef} 
            className="flex overflow-x-auto gap-4 md:gap-8 scroll-smooth no-scrollbar py-4"
          >
          
            <div className="min-w-[320px] sm:min-w-[412px] bg-[#E5FCFF] p-6 rounded-lg shadow-md">
              <div className="bg-[#11BEEA] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <img src={Reviewplanning} alt="Review Planning" className="h-[54px] w-[55px]" />
              </div>
              <h3 className="text-[28px] font-Montserrat font-bold mb-3">Review / Planning</h3>
              <p className="text-[16px] font-Montserrat">
                We work from scratch. Our first step is to review your idea, your competitor website to understand the
                process, make suggestions for you, discuss the way you want it work. Once we are done, you complete
                details of the work process and all the details of the development work, features, design etc.
              </p>
            </div>

         
            <div className="min-w-[320px] sm:min-w-[412px] bg-[#EBF8F1] p-6 rounded-lg shadow-md">
              <div className="bg-[#43B97F] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <img src={Design} alt="Design" className="h-[54px] w-[55px]" />
              </div>
              <h3 className="text-[28px] font-Montserrat font-bold mb-3">Design</h3>
              <p className="text-[16px] font-Montserrat">
                Good design is absolutely necessary when it comes to CMS. We maintain a good quality in every single
                step of designing phase and ensure that you get a consistent result all the time. We do prefer working
                with you before final development so as to make all the necessary changes before we start our final
                development.
              </p>
            </div>

         
            <div className="min-w-[320px] sm:min-w-[412px] bg-[#EDF5C0] p-6 rounded-lg shadow-md">
              <div className="bg-[#B7CA4B] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <img src={Development} alt="Development" className="h-[54px] w-[55px]" />
              </div>
              <h3 className="text-[28px] font-Montserrat font-bold mb-3">Development</h3>
              <p className="text-[16px] font-Montserrat">
                The development process is long and complicated but you can rest assured that we will deliver a
                well-developed, fully functional CMS website to you. We will install your newly designed website and
                configure it to make sure you get a nice, SEO friendly website without having to worry about anything.
              </p>
            </div>

          
            <div className="min-w-[320px] sm:min-w-[412px] bg-[#FFD3E5] p-6 rounded-lg shadow-md">
              <div className="bg-[#DF739F] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <img src={Contentupload} alt="Content Upload" className="h-[54px] w-[55px]" />
              </div>
              <h3 className="text-[28px] font-Montserrat font-bold mb-3">Content Upload</h3>
              <p className="text-[16px] font-Montserrat">
                Since your new website is based on CMS, you will need content to get going. The first content upload is
                on us. We upload the first set of content on your website and check whether everything is already in
                place. Of course, at a later stage you will be able to change the content at will.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkModules;
