import React, { useState } from "react";
import '../styles/components/IOSAppSection.css'
import Iospageimg from '../assets/Iospageimg.svg';
import { MoveRight  } from "lucide-react";

export default function IOSAppDevelopment() {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    {
      title: "iOS App Development Ideation",
      heading: "iOS App Development Ideation",
      description: `It is essential to know and analyse the driving force of the app concerned before making the final
  decision of coding. An overview and analysis of the end-user, the expectations of the target audience,
  and the value proposition of the application. This helps us to identify relevant solutions to the
  problems.`,
    },
    {
      title: "iOS Application Design and Strategy",
      heading: "iOS Application Design and Strategy",
      description: `We focus on creating an intuitive design and defining the architecture of the application. Our strategy
  ensures the UI/UX matches iOS guidelines and delivers an impactful experience for end-users.`,
    },
    {
      title: "iOS App Development and Quality Assurance",
      heading: "iOS App Development and Quality Assurance",
      description: `Our developers turn concepts into real, high-performing iOS apps. We integrate robust testing cycles to
  make sure the app functions flawlessly on different iOS devices.`,
    },
    {
      title: "Launch Strategy and Support",
      heading: "Launch Strategy and Support",
      description: `We help you deploy the app to the App Store and provide post-launch maintenance, performance monitoring,
  and iterative improvements to ensure app success.`,
    },
  ];

  return (
    <div className="max-w-[1728px] mx-auto  rounded-[20px] flex flex-col md:flex-row items-center overflow-hidden">
      <div className="w-full h-full px-4 md:px-4 py-8 relative">
        {/* Vertical "Solutions to Explore" text */}
        <div className="absolute left-[-8%] top-1/2 transform -translate-y-1/2">
          <div className="flex flex-col items-center hidden sm:flex">
            <div className="text-[#529D92] font-Montserrat font-extrabold -rotate-89 whitespace-nowrap text-4xl tracking-wide origin-center" style={{
                        display: "inline-table",
                        background: "linear-gradient(to right, #F2F2F2, #157B6C)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textFillColor: "transparent",
                        color: "#157B6C",
                    }}>
              Solutions to Explore
            </div>
          </div>
        </div>

        {/* Main content container */}
        <div className="ml-0 md:ml-24 h-full flex flex-col justify-center">
          {/* Process steps - now horizontally scrollable */}
          <div className="w-full mb-10 overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 pb-4" style={{ minWidth: `${steps.length * 280}px` }}>
              {steps.map((step, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`app_step flex-shrink-0 flex items-center px-11 py-2 rounded-md border cursor-pointer ${
                    activeIndex === index
                      ? "bg-[#67C792] border-emerald-500 text-white"
                      : "bg-white border-gray-300 text-gray-800"
                  }`}
                >
                  <span className="mr-2 whitespace-nowrap text-[16px] font-semibold">{step.title}</span>
                  <MoveRight  size={26} />
                </div>
              ))}
            </div>
          </div>

          {/* Content section */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 max-w-[800px]">
              <h1 className="text-3xl md:text-6xl font-Montserrat font-extrabold text-black mb-4">
                {steps[activeIndex].heading}
              </h1>
              <p className="text-[#000000] font-Montserrat text-[16px] md:text-[18px] leading-relaxed">
                {steps[activeIndex].description}
              </p>
            </div>
            <div className="w-full md:w-[338px] relative lg:ml-[100px]">
              <img
                src={Iospageimg}
                width={338}
                height={286}
                alt="iOS App Development Team"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}