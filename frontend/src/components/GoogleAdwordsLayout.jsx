import React, { useState } from "react";
import "../styles/components/GoogleAdwordsServices.css";

const GoogleAdwordsLayout = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const items = [
    {
      text: "Certified Agency",
      arrow: "bg-[#5CEA90]",
      selectedBg: "bg-[#5CEA90]",
      bgColor: "linear-gradient(135deg, #D8F4E5, #5CEA90)",
      content:
        "Tech Devise is certified by Google as a reputed Adwords agency. Our certification and partnership prove that we know all the intricate details about Google Adwords.",
    },
    {
      text: "24 x 7 Support",
      arrow: "bg-[#EA9C99]",
      selectedBg: "bg-[#EA9C99]",
      bgColor: "linear-gradient(135deg, #F4D8D8, #EA9C99)",
      content:
        "We are available 24x7 to support you with your Google Adwords needs. Our dedicated support team ensures you're never left in the dark.",
    },
    {
      text: "Affordable",
      arrow: "bg-[#67C792]",
      selectedBg: "bg-[#67C792]",
      bgColor: "linear-gradient(135deg, #D8F4E5, #67C792)",
      content:
        "Our Adwords services are designed to deliver results without breaking the bank. We offer competitive pricing with maximum ROI.",
    },
    {
      text: "Experience",
      arrow: "bg-[#FFE74E]",
      selectedBg: "bg-[#FFE74E]",
      bgColor: "linear-gradient(135deg, #F4F0D8, #FFE74E)",
      content:
        "With years of experience in managing Google Adwords campaigns, we bring a wealth of knowledge and expertise to the table.",
    },
    {
      text: "Flexible Plans",
      arrow: "bg-[#C897EB]",
      selectedBg: "bg-[#C897EB]",
      bgColor: "linear-gradient(135deg, #F0D8F4, #C897EB)",
      content:
        "Choose from a variety of flexible Adwords plans tailored to your business goals and budget.",
    },
  ];

  return (
    <div className="w-full bg-[#E3FFEB] flex flex-col items-center justify-center text-center -mb-12 px-2 md:px-0">
      <div className="google_layout w-full max-w-[1620px] mx-auto min-h-[550px] lg:h-[550px] bg-white rounded-[10px] p-6 sm:p-6 mb-16 flex flex-col md:flex-row items-center justify-between shadow-md">
        <div className="w-full md:w-1/3 lg:w-[40%] xl:w-1/3 mb-8 md:mb-0 space-y-2 sm:space-y-4 ml-10 md:ml-[6.5rem]">
          {items.map((item, index) => {
            const isSelected = selectedIndex === index;
            return (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`cursor-pointer flex items-center justify-between p-3 sm:p-4 rounded-full shadow-md w-80 border-2 border-black transition-colors duration-300 ${
                  isSelected ? "bg-white" : ""
                }`}
                style={isSelected ? {} : { background: item.bgColor }}
              >
                <span className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-black font-medium">
                  {item.text}
                </span>
                <div
                  className={`w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] flex items-center justify-center rounded-full text-[1.3rem] text-black transition-colors duration-300 ${
                    isSelected ? item.selectedBg : item.arrow
                  }`}
                >
                  ↗
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full md:w-2/3 lg:w-[60%] xl:w-2/3 h-full border-l-0 md:border-l md:border-t-0 border-t-2 border-gray-300 pl-0 md:pl-6 pt-6 md:pt-0">
          <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-black font-Montserrat md:mt-[10%] px-4 sm:px-0">
            {items[selectedIndex].content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoogleAdwordsLayout;