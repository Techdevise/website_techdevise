import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Aiserviceimg2 from "../assets/Aiserviceimg2.svg";
import Aiserviceimg3 from "../assets/image.svg";
import Aiserviceimg4 from "../assets/image (1).svg";
import Aiserviceimg5 from "../assets/image (2).svg";
import Aiserviceimg6 from "../assets/image (3).svg";
import Aiserviceimg7 from "../assets/image (4).svg";
import Aiserviceimg8 from "../assets/image (5).svg";
import Aiserviceimg9 from "../assets/image (6).svg";
import Aiserviceimg10 from "../assets/image (7).svg";

const AIServices = () => {
  const services = [
    {
      title: "AI Consultation",
      description:
        "Our experts guide you through the AI development process, helping you understand how AI can address your challenges. From concept to deployment, we provide insights into the stages of AI development for a clear roadmap for success.",
      image: Aiserviceimg2,
    },
    {
      title: "AI Software Development",
      description:
        "Our experts guide you through the AI development process, helping you understand how AI can address your challenges. From concept to deployment, we provide insights into the stages of AI development for a clear roadmap for success.",
      image: Aiserviceimg3,
    },
    {
      title: "AI App Development",
      description:
        "Our experts guide you through the AI development process, helping you understand how AI can address your challenges. From concept to deployment, we provide insights into the stages of AI development for a clear roadmap for success.",
      image: Aiserviceimg4,
    },
    {
      title: "Enterprise AI Solutions Development",
      description:
        "Our experts guide you through the AI development process, helping you understand how AI can address your challenges. From concept to deployment, we provide insights into the stages of AI development for a clear roadmap for success.",
      image: Aiserviceimg5,
    },
    {
      title: "AI Chatbot Development Services",
      description:
        "Our experts guide you through the AI development process, helping you understand how AI can address your challenges. From concept to deployment, we provide insights into the stages of AI development for a clear roadmap for success.",
      image: Aiserviceimg6,
    },
    {
      title: "Generative AI Development Services",
      description:
        "Our experts guide you through the AI development process, helping you understand how AI can address your challenges. From concept to deployment, we provide insights into the stages of AI development for a clear roadmap for success.",
      image: Aiserviceimg7,
    },
    {
      title: "Computer Vision Applications",
      description:
        "Our experts guide you through the AI development process, helping you understand how AI can address your challenges. From concept to deployment, we provide insights into the stages of AI development for a clear roadmap for success.",
      image: Aiserviceimg8,
    },
    {
      title: "Predictive Analytics",
      description:
        "Our experts guide you through the AI development process, helping you understand how AI can address your challenges. From concept to deployment, we provide insights into the stages of AI development for a clear roadmap for success.",
      image: Aiserviceimg9,
    },
    {
      title: "Machine Learning Model Development",
      description:
        "Our experts guide you through the AI development process, helping you understand how AI can address your challenges. From concept to deployment, we provide insights into the stages of AI development for a clear roadmap for success.",
      image: Aiserviceimg10,
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedService = services[selectedIndex];

  return (
    <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 bg-white">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
          Enhance Profitability with Our<br className="hidden sm:block" />
          Intelligent AI Development Services
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-sm sm:text-base">
          At TechDevise, we specialize in delivering custom AI development solutions that cater to your business's
          unique needs. As a top AI development company, we ensure innovation meets practicality for every industry.
        </p>
      </div>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
        {/* Left - Tabs */}
        <div 
          className="w-full lg:w-[30%] bg-teal-900 rounded-lg p-4 md:p-6 overflow-y-auto max-h-[500px] lg:max-h-none"
          style={{
            background: "linear-gradient(to right, #005163, #01090A)",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`flex justify-between items-center py-3 px-2 md:px-3 border-b border-teal-800 last:border-b-0 cursor-pointer transition duration-300 hover:bg-teal-800 rounded ${
                selectedIndex === index ? "bg-teal-800 rounded-md" : ""
              }`}
            >
              <span className="text-white text-sm sm:text-base">{service.title}</span>
              <ArrowRight className="text-white h-4 w-4" />
            </div>
          ))}
        </div>

        {/* Right - Content */}
        <div 
          className="w-full lg:w-[70%] bg-teal-900 rounded-lg overflow-hidden"
          style={{
            background: "linear-gradient(to right, #005163, #01090A)",
          }}
        >
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-[22rem] object-cover "
            />
          </div>
          <div className="p-4 sm:p-6">
            <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
              {selectedService.title}
            </h2>
            <p className="text-white text-sm sm:text-base">
              {selectedService.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServices;