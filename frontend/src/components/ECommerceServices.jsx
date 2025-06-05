import React, { useState } from "react";
import "../styles/components/ECommerceServices.css"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; 
import Ecommerceimg from "../assets/Ecommerceimg.svg";
import Ecommerceimg1 from "../assets/Ecommerceimg1.svg";
import Ecommerceimg2 from "../assets/Ecommerceimg2.svg";
import Ecommerceimg3 from "../assets/Ecommerceimg3.svg";
import Commerceservicesbanner from "../assets/Commerceservicesbanner.svg";

export default function ECommerceServices() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: "E-Commerce Development",
      icon: <img src={Ecommerceimg1} alt="E-Commerce Development" className="w-[38px] h-[51px]" />,
      description:
        "We work from scratch. Our first step is to review your idea, your competitor website to understand the process, make suggestions for you, discuss the way you want it work. Once we are done, you will have the complete details of the work process and all the details of the development work, features, design, etc..",
    },
    {
      title: "Custom E-commerce",
      icon: <img src={Ecommerceimg2} alt="Custom E-Commerce" className="w-[38px] h-[51px]" />,
      description:
        "We work from scratch. Our first step is to review your idea, your competitor website to understand the process, make suggestions for you, discuss the way you want it work. Once we are done, you will have the complete details of the work process and all the details of the development work, features, design, etc.",
    },
    {
      title: "Responsive Shopping Website",
      icon: <img src={Ecommerceimg3} alt="Responsive Website" className="w-[38px] h-[51px]" />,
      description:
        "We work from scratch. Our first step is to review your idea, your competitor website to understand the process, make suggestions for you, discuss the way you want it work. Once we are done, you will have the complete details of the work process and all the details of the development work, features, design, etc.",
    },
    {
      title: "Secure Payment Integration",
      icon: <img src={Ecommerceimg1} alt="Secure Payment" className="w-[38px] h-[51px]" />,
      description:
        "We work from scratch. Our first step is to review your idea, your competitor website to understand the process, make suggestions for you, discuss the way you want it work. Once we are done, you will have the complete details of the work process and all the details of the development work, features, design, etc.",
    },
    {
      title: "Product Management Tools",
      icon: <img src={Ecommerceimg2} alt="Product Management" className="w-[38px] h-[51px]" />,
      description:
        "We work from scratch. Our first step is to review your idea, your competitor website to understand the process, make suggestions for you, discuss the way you want it work. Once we are done, you will have the complete details of the work process and all the details of the development work, features, design, etc.",
    },
    {
      title: "Customer Analytics",
      icon: <img src={Ecommerceimg3} alt="Customer Analytics" className="w-[38px] h-[51px]" />,
      description:
        "We work from scratch. Our first step is to review your idea, your competitor website to understand the process, make suggestions for you, discuss the way you want it work. Once we are done, you will have the complete details of the work process and all the details of the development work, features, design, etc.",
    },
  ];

  const slidesPerPage = 3;
  const totalPages = Math.ceil(services.length / slidesPerPage);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const visibleSlides = services.slice(
    currentSlide * slidesPerPage,
    currentSlide * slidesPerPage + slidesPerPage
  );

  return (
    <div
      className="w-full h-auto bg-[#F5F5F5] m-auto opacity-100 rounded-none flex flex-col items-center justify-center relative pt-10 pb-30"
      style={{
        backgroundImage: `url(${Commerceservicesbanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="ecommerce_services">
      <h2 className="text-[28px] md:text-[36px] lg:text-[48px] text-[#060606] font-Montserrat font-extrabold text-center mb-4 px-4">
        Our E-Commerce Services
      </h2>
      <p className="text-[16px] md:text-[18px] font-Montserrat text-black mt-2 w-full max-w-[90%] md:max-w-[60%] mb-10 px-4 text-center">
      We are a team of experts! We work together towards the sole goal of meeting our clients’ requirements. We
        promise to deliver high performance service to all of our customers and offer best possible post delivery
        support.
      </p>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 px-4">
        {visibleSlides.map((service, index) => (
          <div
            key={index}
            className="bg-[#FFF8E8] w-full max-w-[452px] h-auto min-h-[352px] bg-white p-6 rounded-lg shadow-xl"
          >
            <div className="w-[70px] h-[70px] bg-[#EDB749] rounded-full flex items-center justify-center text-2xl mb-4">
              {service.icon}
            </div>
            <h3 className="text-[28px] font-Montserrat font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
        <div className="hidden lg:block lg:w-1/4">
          <img src={Ecommerceimg} alt="Businessman in yellow suit" className="w-full h-[350px] max-w-xs" />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-10 left-40 flex space-x-4">
        <button
          onClick={handlePrev}
          className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full"
        >
        <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full"
        >
         <FaArrowRight />
        </button>
      </div>
      </div>
    </div>
  );
}
