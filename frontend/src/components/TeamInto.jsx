import React, { useState } from "react";
import woman from "../assets/woman-scrolling-laptop 1.svg";
import Automationexperts from "../assets/Automationexperts.svg";
import Automationexperts2 from "../assets/Automationexperts2.svg";
import Automationexperts3 from "../assets/Automationexperts3.svg";
import Automationexperts4 from "../assets/Automationexperts4.svg";
import Automationexperts5 from "../assets/Automationexperts5.svg";
// import img1 from "../assets/feature1.svg"; // replace with real images
// import img2 from "../assets/feature2.svg";
// import img3 from "../assets/feature3.svg";
// import img4 from "../assets/feature4.svg";
// import img5 from "../assets/feature5.svg";
// import img6 from "../assets/feature6.svg";

function TeamInto() {
  const features = [
    {
      title: "100% Cloud-Based",
      description:
        "Test Execution at lightning speed with nothing to install or maintain. Reduce total cost of ownership and eliminate the need for any hardware maintenance.",
      image: woman,
    },
    {
      title: "TechDevice Explorer",
      description:
        "Test Execution at lightning speed with nothing to install or maintain. Reduce total cost of ownership and eliminate the need for any hardware maintenance.",
      image: Automationexperts,
    },
    {
      title: "Cross-Functional",
      description:
        "Empower cross-functional teams to collaborate and automate tests efficiently across departments.",
      image: Automationexperts2,
    },
    {
      title: "TestAgent powered by Copado AI Platform",
      description:
        "AI-powered testing agent that helps detect issues and improves test coverage intelligently.",
      image: Automationexperts3,
    },
    {
      title: "Complete End-to-End Testing",
      description:
        "From frontend to backend, ensure all components work harmoniously with our full-stack testing.",
      image: Automationexperts4,
    },
    {
      title: "Tackle Defects Faster",
      description:
        "Get detailed insights and logs to find and fix defects faster than ever before.",
      image: Automationexperts5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex];

  return (
    <div className="max-w-[1680px] mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Turn Your Team into Test <br /> Automation Experts
      </h1>

      <p className="text-xl text-gray-600 text-center mb-12">
        Leverage user-friendly keywords and smart automation to unify experiences across teams and deliver <br />
        quality releases at enterprise scale.
      </p>

      <div className="rounded-lg p-8 shadow-[0_0_20px_rgba(0,0,0,0.15)]">
        {/* Tabs */}
        <div className="flex flex-wrap justify-between gap-4 w-full max-w-[1680px] mx-auto mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg">
              <button
                onClick={() => setActiveIndex(index)}
                className={`font-semibold whitespace-nowrap px-4 py-2 border-b-2 transition-all duration-200 ${
                  activeIndex === index
                    ? "text-[#02574B] border-[#02574B]"
                    : "text-gray-800 border-transparent"
                }`}
              >
                {feature.title}
              </button>
            </div>
          ))}
        </div>

        {/* Active Feature Display */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mt-12">
          <div className="w-full lg:w-1/2 px-4 lg:px-0">
            <div className="text-left w-full lg:w-[85%] lg:ml-12 xl:ml-20">
              <p className="text-base md:text-lg text-gray-700 mb-4">
                {activeFeature.description}
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <img
              src={activeFeature.image}
              alt={activeFeature.title}
              className="w-[82%] h-auto rounded-lg shadow-md"
            />

                        {/* Rotated Label Text on Right */}
                        <div className="hidden lg:block absolute top-[215px] left-[490px]  transform -translate-y-1/2" style={{ transform: "translateY(-50%) rotate(450deg)" }}>
                            <span
                                className="text-[#A2A2A2] whitespace-nowrap  font-normal font-extrabold text-[40px] tracking-wide"
                                style={{
                                    background: "linear-gradient(99.51deg, #005163, #01090A)",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    color: "transparent"
                                }}
                            >
                                Automation Experts
                            </span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default TeamInto;
