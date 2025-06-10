import React, { useState } from "react";
import '../styles/components/AndroidLanding.css';
import Androidlandingbanner from "../assets/Androidlandingbanner.svg";
import Uiuxdesignmobile from "../assets/Uiuxdesignmobile.svg";
import Androidapplications from "../assets/Androidapplications.svg";
import Androidappdevelopment from "../assets/Androidappdevelopment.svg";
import Analyzingandroid from "../assets/Analyzingandroid.svg";
import Androidmaintenance from "../assets/Androidmaintenance.svg";
import Androidapplication from "../assets/Androidapplication.svg";
import Uiuxdevelopment from "../assets/Uiuxdevelopment.svg";
import Androidapplication1 from "../assets/Androidapplication1.svg";
import Androiddevelopment from "../assets/Androiddevelopment.svg";
import Analyzingsolutions from "../assets/Analyzingsolutions.svg";
import Maintenance from "../assets/Maintenance.svg";

const categories = [
  {
    title: "Android Application Ideation",
    icon: Androidapplication,
    bgColor: "linear-gradient(135deg, #F4D8D8, #EE94B8)",
    iconBg: "#EE94B8",
    borderColor: "border-pink-200",
    text: "Android Application Ideation is a critical factor that must be considered in order to reach your desired goal. Our team is prepared to research and brainstorm allowing us to formulate strategies before initiating the coding process. The Ideation process will help you to achieve long term objectives....",
    image: Androidlandingbanner,
  },
  {
    title: "UI/UX Design For Android Development",
    icon: Uiuxdevelopment,
    bgColor: "linear-gradient(135deg, #FFFFFF, #EA9C99)",
    iconBg: "#EA9C99",
    borderColor: "border-red-200",
    text: "Our UI/UX experts craft intuitive designs tailored for Android users.",
    image: Uiuxdesignmobile,
  },
  {
    title: "Tech Stack and Android Application Architecture",
    icon: Androidapplication1,
    bgColor: "linear-gradient(135deg, #FFFFFF, #67C792)",
    iconBg: "#67C792",
    borderColor: "border-green-200",
    text: "We define the tech stack and structure the perfect Android architecture.",
    image: Androidapplications,
  },
  {
    title: "Android App Development",
    icon: Androiddevelopment,
    bgColor: "linear-gradient(135deg, #FFFFFF, #FFE74E)",
    iconBg: "#FFE74E",
    borderColor: "border-yellow-200",
    text: "We develop scalable and efficient Android apps ready for the Play Store.",
    image: Androidappdevelopment,
  },
  {
    title: "Analyzing Android Solutions",
    icon: Analyzingsolutions,
    bgColor: "linear-gradient(135deg, #FFFFFF, #C897EB)",
    iconBg: "#C897EB",
    borderColor: "border-purple-200",
    text: "We analyze your Android solution for maximum performance and reliability.",
    image: Analyzingandroid,
  },
  {
    title: "Maintenance",
    icon: Maintenance,
    bgColor: "linear-gradient(135deg, #FFFFFF, #DAD07A)",
    iconBg: "#DAD07A",
    borderColor: "border-amber-200",
    text: "We provide ongoing support and maintenance for your Android applications.",
    image: Androidmaintenance,
  },
];

const AndroidLanding = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="android_main flex justify-center items-center bg-white">
      <div className="new_text_min w-[1678px] h-auto bg-white p-8 flex flex-col items-center">
        {/* Heading Section */}
        <div className="text-center mb-10 mt-8 max-w-3xl">
          <h1 className="new_txxt text-[40px] font-Montserrat font-extrabold leading-tight">
            Develop Top-Quality Applications
            <br />
            to dominate the Android Play Store
          </h1>
        </div>

        {/* Categories Section */}
        <div className="flex justify-center flex-wrap gap-4">
          {categories.slice(0, 3).map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`flex items-center gap-2 px-6 py-3 text-black rounded-full border ${category.borderColor} ${
                selectedIndex === index ? "text-black" : "bg-white"
              }`}
              style={selectedIndex === index ? { background: category.bgColor } : {}}
              type="button"
            >
              <span>{category.title}</span>
             <div
      className="w-[53px] h-[53px] rounded-full flex items-center justify-center"
      style={{ backgroundColor: selectedIndex === index ? "#FFFFFF" : category.iconBg || "white" }}
    >
      <img src={category.icon} alt={`${category.title} icon`} className="w-[28px] h-[28px]" />
    </div>
            </button>
          ))}
        </div>

        <div className="flex justify-center flex-wrap gap-4 mt-4">
          {categories.slice(3).map((category, index) => (
            <button
              key={index + 3}
              onClick={() => setSelectedIndex(index + 3)}
              className={`flex items-center gap-2 px-6 py-3 text-black rounded-full border ${category.borderColor} ${
                selectedIndex === index + 3 ? "text-black" : "bg-white"
              }`}
              style={selectedIndex === index + 3 ? { background: category.bgColor } : {}}
              type="button"
            >
              <span>{category.title}</span>
              <div
                className="w-[53px] h-[53px] rounded-full flex items-center justify-center"
                style={{ backgroundColor: category.iconBg || "white" }}
              >
                <img src={category.icon} alt={`${category.title} icon`} className="w-[28px] h-[28px]" />
              </div>
            </button>
          ))}
        </div>

        <div className="text-center max-w-4xl mb-10 px-4 mt-6">
          <p className="text-gray-700">{categories[selectedIndex].text}</p>
        </div>

        {/* Image Section */}
        <div className="Androidlandingbanner w-full h-auto overflow-hidden rounded-lg shadow-md">
          <img
            src={categories[selectedIndex].image}
            alt={categories[selectedIndex].title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AndroidLanding;
