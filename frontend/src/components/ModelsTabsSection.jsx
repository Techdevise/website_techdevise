import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Aicomputervision from "../assets/Aicomputervision.svg";
  import '../styles/components/AnalystRecognition.css'

const tabsData = [
  {
    title: "Computer Vision Models",
    content: {
      heading: "Computer Vision Models",
      description:
        "Our AI development services company delivers cutting-edge computer vision models for image recognition, object detection, and quality inspections. These models are powered by our AI software development services to enhance efficiency.",
      image: Aicomputervision,
    },
  },
  {
    title: "Machine Learning Models",
    content: {
      heading: "Machine Learning Models",
      description:
        "We build ML models that can predict outcomes, classify data, and automate complex tasks using supervised and unsupervised learning algorithms tailored to your business needs.",
      image: Aicomputervision,
    },
  },
  {
    title: "NLP Models",
    content: {
      heading: "NLP Models",
      description:
        "Our NLP models help interpret and generate human language. We offer services such as chatbots, sentiment analysis, and document summarization for intelligent interaction.",
      image: Aicomputervision,
    },
  },
  {
    title: "Deep Learning Models",
    content: {
      heading: "Deep Learning Models",
      description:
        "With deep learning models, we solve complex pattern recognition problems, including speech recognition, image classification, and more using neural networks.",
      image: Aicomputervision,
    },
  },
  {
    title: "Hybrid Models",
    content: {
      heading: "Hybrid Models",
      description:
        "Our hybrid models combine the best of multiple AI techniques to deliver adaptable, robust, and efficient solutions for diverse applications.",
      image: Aicomputervision,
    },
  },
  {
    title: "Generative Models",
    content: {
      heading: "Generative Models",
      description:
        "We develop generative AI models for content creation, data augmentation, and design automation using GANs and transformers.",
      image: Aicomputervision,
    },
  },
];

const ModelsTabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const { heading, description, image } = tabsData[activeTab].content;

  return (
    <div className="w-full max-w-[1620px] bg-white rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.1)] px-4 sm:px-6 md:px-8 lg:px-10 py-8 md:py-12 mx-auto aiTech">
      {/* Tabs */}
      <div className="overflow-x-auto pb-2 mb-6 md:mb-10">
        <ul className="flex w-full space-x-8 md:space-x-10 lg:space-x-14 min-w-max px-8">
          {tabsData.map((tab, idx) => (
            <li
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`pb-2 text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold cursor-pointer transition-colors ${
                idx === activeTab
                  ? "text-[#4F3FCB] border-b-2 border-[#4F3FCB]"
                  : "text-black hover:text-gray-600"
              }`}
            >
              {tab.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-12 lg:gap-16 xl:gap-32 mt-6">
        {/* Left Image */}
        <div className="w-full lg:w-[40%] flex justify-center">
          <img
            src={image}
            alt={heading}
            className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[60%] px-0 sm:px-4 md:px-8 lg:px-12 xl:px-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            {heading.split(" ").slice(0, -1).join(" ")}
            <br />
            {heading.split(" ").slice(-1)}
          </h2>
          <p className="text-black text-sm sm:text-base md:text-lg lg:text-[20px] mb-4 md:mb-6">
            {description}
          </p>
          <button className="bg-[#4F3FCB] text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full flex items-center gap-2 hover:bg-[#3a2d96] transition-colors">
            <span>Get in Touch</span>
            <div className="bg-white rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center ml-1">
              <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-[#2DC4A9]" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelsTabsSection;