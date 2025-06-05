import React from "react";
import Reactnativeimage from "../assets/fueling.svg";

const categories = [
  {
    title: "Fuelling your digital transformation and assurance goals",
    description:
      "We lead with innovation to deliver resilient solutions with maximum impact. We install quality throughout the product development lifecycle with end-to-end service capabilities, comparing development and quality assurance domains.",
  },
  {
    title: "Focusing on the Customer's Business Outcomes",
    description:
      "Our tailored solutions address your specific business goals and needs. We are your one-stop-shop for Quality Engineering services capabilities from functional to non-functional testing with next-gen testing services like AI, RPA, Cloud.",
  },
  {
    title: "Adapting Next Gen Technologies",
    description:
      "We leverage next-gen and AI technologies in our Digital Assurance and engineering solutions to ensure you make data-driven decisions, streamline processes, and optimize workflows through advanced analytics, ML, and AI-driven automation.",
  },
  {
    title: "Digital Engineering with Quality DNA",
    description:
      "Our expertise on end-to-end digital engineering empowers businesses to embrace change, drive growth, and unlock their full potential in the digital age. As the world's 5th largest QA is software testing company, quality is in our DNA.",
  },
  {
    title: "Leading through innovation",
    description:
      "Our experienced resource pool implements an innovation-led journey of exploration, experimentation, and evolution. Our Quality Engineering is at the forefront of innovation with experimentation, iteration, rapid prototyping to quickly validate ideas.",
  },
  {
    title: "Scaling with Agility",
    description:
      "We provide solutions based on real-world usage and insights, enabling clients to iterate rapidly, refine their ideas, and drive innovation.",
  },
];

const Fueling = () => {
  return (
    <div className="w-full max-w-[1678px] px-4 py-8 mx-auto mr-[160px] ">
      {/* Header Section */}
   

      {/* Main Content Section with Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        <div className="hidden lg:flex items-center justify-center">
          <img
            src={Reactnativeimage}
            alt="Digital transformation illustration"
            className="w-full max-w-[300px] h-auto"
          />
        </div>

        {/* Right Cards Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6 mr-[-40px]">
          {categories.slice(0, 6).map((item, index) => (
            <div
              key={index}
              className="bg-[#D1F2EB] rounded-lg p-6 transition-all duration-300 hover:shadow-lg"
            >
              <h2 className="text-xl font-bold text-black mb-3">
                {item.title}
              </h2>
              <p className="text-black">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fueling;