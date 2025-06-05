"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import codeimage from "../assets/codeimage.png"
import pythonimg from "../assets/pythonimg.svg"

const PythonExpertSection = () => {
  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(0)

  // Content for different slides
  const slides = [
    {
      title: "Tech Devise: Developing User friendly and Flexible Python",
      description:
        "In today's world, to be a successful business owner you need to keep up with the pace. As a business owner, it's important to deliver quick results to your clients, and this is exactly where Python comes in. Python, as you know, is one of the well-known dynamic languages that follow Object-Oriented Programming laws. It helps you work in an efficient, fast, and better way to ensure quality results all the time. We at Tech Devise ensure that we put this good technology to use for our client's betterment.",
      listItems: [
        "Responsive / Dynamic website",
        "Web crawlers",
        "Customized CMS",
        "Web application",
        "Framework Integration",
        "UI development",
        "Monitor capacity and performance of existing web applications",
      ],
    },
    {
      title: "Python Solutions for Enterprise Applications",
      description:
        "Python's versatility makes it perfect for enterprise-level applications. Our team of expert Python developers can build scalable, secure, and high-performance solutions tailored to your business needs. We leverage Python's extensive libraries and frameworks to deliver robust applications that drive your business forward.",
      listItems: [
        "Data analysis and visualization",
        "Machine learning implementation",
        "API development and integration",
        "Automation solutions",
        "Cloud-based applications",
        "Database management",
        "DevOps and CI/CD pipelines",
      ],
    },
    {
      title: "Custom Python Development for Your Industry",
      description:
        "Every industry has unique challenges that require specialized solutions. Our Python experts have experience across multiple sectors, developing custom applications that address specific industry needs. From fintech to healthcare, e-commerce to education, we deliver Python solutions that give you a competitive edge.",
      listItems: [
        "Industry-specific applications",
        "Legacy system modernization",
        "Process automation",
        "Real-time data processing",
        "Predictive analytics",
        "Secure payment systems",
        "Compliance and reporting tools",
      ],
    },
  ]

  // Function to navigate to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  // Function to navigate to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <div className="w-full mx-auto h-auto bg-[#EEFCFE] opacity-100 rounded-none flex flex-col lg:flex-row mt-5 sm:mt-8 lg:mt-10">
      {/* Left Side Image Section - Full width on mobile, 45% on desktop */}
      <div className="w-full lg:max-w-[45%] relative">
        <img
          src={codeimage || "/placeholder.svg"}
          alt="Tech workspace"
          className="w-full h-auto object-cover lg:w-[825px] h-full"
        />
      </div>

      {/* Right Side Content Section - Full width on mobile, 50% on desktop */}
      <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:pl-10 lg:pr-6 py-6 sm:py-8 flex flex-col justify-center">
        <div className="transition-opacity duration-500 ease-in-out">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-Montserrat font-extrabold text-black mb-4 sm:mb-6 lg:mb-10 lg:leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-base sm:text-lg lg:text-[18px] font-Montserrat text-black mb-4 sm:mb-6">
            {slides[currentSlide].description}
          </p>
          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-Montserrat font-semibold mb-2 sm:mb-4">
            Our python experts can help you work with:
          </h2>
          <ul className="list-disc list-inside text-black text-base sm:text-lg lg:text-[18px] font-Montserrat">
            {slides[currentSlide].listItems.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation Arrows and Python Image - Responsive positioning */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mt-6 sm:mt-8 lg:mt-6 relative">
          {/* Navigation Arrows - Centered on mobile, left-aligned on larger screens */}
          <div className="flex space-x-4 mb-6 sm:mb-10 lg:mb-16 w-full justify-center sm:justify-start">
            <button
              className="bg-black text-white p-2 sm:p-3 rounded-full transition-transform duration-300 hover:scale-110"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <FaArrowLeft size={15} className="" />
            </button>
            <button
              className="bg-black text-white p-2 sm:p-3 rounded-full transition-transform duration-300 hover:scale-110"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <FaArrowRight size={15} className="" />
            </button>
          </div>

          {/* Python Image - Centered on mobile, right-aligned on larger screens */}
          <motion.img
            src={pythonimg || "/placeholder.svg"}
            alt="Python"
            className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] lg:w-[182px] lg:h-[182px] opacity-60 mx-auto sm:mx-0"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>

        {/* Slide indicators - Visible only on mobile */}
        {/* <div className="flex justify-center space-x-2 mt-4 sm:hidden">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-black w-4" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default PythonExpertSection
