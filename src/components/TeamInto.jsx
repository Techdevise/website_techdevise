import React, { useState } from "react";
import woman from "../assets/woman-scrolling-laptop 1.svg";

function TeamInto() {
    const features = [
        "100% Cloud-Based",
        "TechDevice Explorer",
        "Cross-Functional",
        "TestAgent powered by Copado AI Platform",
        "Complete End-to-End Testing",
        "Tackle Defects Faster",
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="max-w-[1680px] mx-auto px-4 py-12">
            {/* Main Heading */}
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                Turn Your Team into Test <br /> Automation Experts
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 text-center mb-12">
                Leverage user-friendly keywords and smart automation to unify experiences across teams and deliver <br />
                quality releases at enterprise scale.
            </p>

            {/* Feature Section with Shadow */}
            <div className="rounded-lg p-8 shadow-[0_0_20px_rgba(0,0,0,0.15)]">
                {/* Features Buttons */}
                <div className="flex flex-wrap justify-between gap-4 w-full max-w-[1680px] mx-auto mb-12">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-lg">
                            <button
                                onClick={() => setActiveIndex(index)}
                                className={`font-semibold whitespace-nowrap px-4 py-2 border-b-2 transition-all duration-200 ${activeIndex === index
                                    ? "text-[#02574B] border-[#02574B]"
                                    : "text-gray-800 border-transparent"
                                    }`}
                            >
                                {feature}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Bottom Content */}
                <div className="flex flex-col lg:flex-row items-center gap-8 mt-12">
                    {/* Text Side */}
                    <div className="w-full lg:w-1/2 px-4 lg:px-0">
                        <div className="text-left w-full lg:w-[45%] lg:ml-12 xl:ml-20">
                            <p className="text-base md:text-lg text-gray-700 mb-4">
                                Test Execution at lightning speed with nothing to install or maintain. Reduce total cost of ownership and eliminate the need for any hardware maintenance.
                            </p>
                        </div>
                    </div>


                    {/* Image Side */}
                    <div className="lg:w-1/2 relative">
                        <img
                            src={woman}
                            alt="Test Automation"
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
