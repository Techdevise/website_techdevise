import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
// import "../styles/components/ServicesDropdown.css";
import websitedevelopment from "../assets/websitedevelopment.svg";
import Seo from "../assets/Seo.png";
import Digitalmarketing from "../assets/Digitalmarketing.svg";
import Mobiledevelopment from "../assets/Mobiledevelopment.svg";
import Qualityanay from "../assets/Qualityanay.svg";
import Blockchaindevelopment from "../assets/Blockchaindevelopment.svg";
import Mobileimage from "../assets/mobileDevel.svg";
import BlockChain from "../assets/BlockChain.svg";
import Digital from "../assets/Digital12.svg";
import QA from "../assets/QA.svg";
import WebSiteDevelopment from "../assets/WebSiteDevelopment12.svg";
import AIdevelopment from "../assets/AIdevelopment12.svg";
import AIDevelopment from "../assets/AIDevelopment.svg";
import It_Stafting from "../assets/It_Stafting.svg";
import It_Image from "../assets/OBJECTS.svg";

const ServicesDropdown = ({ isVisible, darkMode, closeDropdown, onMouseEnter, onMouseLeave, position }) => {
  const dropdownRef = useRef()

  const [hoveredService, setHoveredService] = useState("mobile");

  const serviceImages = {
  mobile: Mobileimage,
  digital: Digital,
  website: WebSiteDevelopment,
  qa: QA,
  blockchain: BlockChain,
  ai: AIdevelopment,
  it_staff:It_Image
};
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown?.()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [closeDropdown])
  // Calculate dropdown styles based on position
  const screenWidth = window.innerWidth;

  const dropdownStyle = position
    ? {
      position: "fixed",
      top: screenWidth >= 1280 && screenWidth <= 1600 ? "53px" : "50px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "calc(100% - 40px)",
      maxWidth:
        screenWidth >= 1280 && screenWidth <= 1600 ? "1369px" : "1433px",
      zIndex: 100,
    }
    : {};

  // if (!isVisible) return null;

  return (
    <div
      ref={dropdownRef}
      style={dropdownStyle}
      className={`absolute top: 50px top-[82px] left-60 mt-10 w-full max-w-full h-[395px] bg-white shadow-lg rounded-b-lg flex overflow-hidden z-50 transition-all duration-300 services-dropdown ${isVisible ? "opacity-100 visible translate-y-0" : "hidden md:block opacity-0 invisible -translate-y-2"
        }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="w-[429px] h-full bg-[#0a6e5c] text-white p-6 relative">
        <h2 className="text-3xl font-semibold font-montserrat mb-3 mt-5">Services</h2>
        <p className="text-[16px] font-Montserrat leading-tight mb-4">
          Secure, optimize, and manage your IT with expert solutions in cybersecurity, cloud, networking, and digital transformation.
        </p>
       <div className="absolute bottom-0 left-0 w-full flex justify-center transition-all duration-300">
  <img
    src={serviceImages[hoveredService] || Mobileimage}
    alt="Service Visual"
    className="w-full h-[185px] object-contain transition-all duration-300"
  />
</div>
      </div>
      <div className="flex-1 flex">
        <div className="w-1/2 p-8 border-r border-gray-100">
          <Link to="/services/mobile-app-development" onClick={closeDropdown}  onMouseEnter={() => setHoveredService("mobile")} className="flex items-center py-3 group">
            <span className="w-6 h-6 rounded-full  flex items-center justify-center mr-3">
              <img src={Mobiledevelopment || "/placeholder.svg"} alt="Mobile App" className="w-6 h-6" />
            </span>
            <span className="text-gray-800 font-medium group-hover:text-[#0a6e5c] flex items-center">
              Mobile Application Development
              <ArrowRight className="ml-2 h-4 w-4 text-[#0a6e5c] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </span>
          </Link>

          <Link to="/services/digital-marketing" onClick={closeDropdown}  onMouseEnter={() => setHoveredService("digital")} className="flex items-center py-3 group">
            <span className="w-6 h-6 rounded-full flex items-center justify-center mr-3">
              <img src={Digitalmarketing || "/placeholder.svg"} alt="Digital Marketing" className="w-6 h-6" />
            </span>
            <span className="text-gray-800 font-medium group-hover:text-[#0a6e5c] flex items-center">
              Digital Marketing
              <ArrowRight className="ml-2 h-4 w-4 text-[#0a6e5c] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </span>
          </Link>

          <Link to="/services/website-development" onClick={closeDropdown}  onMouseEnter={() => setHoveredService("website")} className="flex items-center py-3 group">
            <span className="w-6 h-6 rounded-full  flex items-center justify-center mr-3">
              <img src={websitedevelopment || "/placeholder.svg"} alt="Website Dev" className="w-6 h-6" />
            </span>
            <span className="text-gray-800 font-medium group-hover:text-[#0a6e5c] flex items-center">
              Website Development
              <ArrowRight className="ml-2 h-4 w-4 text-[#0a6e5c] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </span>
          </Link>

          <Link to="/services/quality-analysis" onClick={closeDropdown}  onMouseEnter={() => setHoveredService("qa")} className="flex items-center py-3 group">
            <span className="w-6 h-6 rounded-full  flex items-center justify-center mr-3">
              <img src={Qualityanay || "/placeholder.svg"} alt="Quality Analysis" className="w-6 h-6" />
            </span>
            <span className="text-gray-800 font-medium group-hover:text-[#0a6e5c] flex items-center">
              Quality Analysis
              <ArrowRight className="ml-2 h-4 w-4 text-[#0a6e5c] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </span>
          </Link>

          <Link to="/services/blockchain-development" onClick={closeDropdown}  onMouseEnter={() => setHoveredService("blockchain")} className="flex items-center py-3 group">
            <span className="w-6 h-6 rounded-full  flex items-center justify-center mr-3">
              <img src={Blockchaindevelopment || "/placeholder.svg"} alt="Blockchain" className="w-6 h-6" />
            </span>
            <span className="text-gray-800 font-medium group-hover:text-[#0a6e5c] flex items-center">
              Blockchain Development
              <ArrowRight className="ml-2 h-4 w-4 text-[#0a6e5c] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </span>
          </Link>

          <Link to="/services/ai-development" onClick={closeDropdown}  onMouseEnter={() => setHoveredService("ai")} className="flex items-center py-3 group">
            <span className="w-6 h-6 rounded-full  flex items-center justify-center mr-3">
              <img src={AIDevelopment || "/placeholder.svg"} alt="AI Development" className="w-6 h-6" />
            </span>
            <span className="text-gray-800 font-medium group-hover:text-[#0a6e5c] flex items-center">
              AI Development
              <ArrowRight className="ml-2 h-4 w-4 text-[#0a6e5c] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </span>
          </Link> <Link to="/services/it_staff" onClick={closeDropdown}  onMouseEnter={() => setHoveredService("it_staff")} className="flex items-center py-3 group">
            <span className="w-6 h-6 rounded-full  flex items-center justify-center mr-3">
              <img src={It_Stafting || "/placeholder.svg"} alt="It Staffing" className="w-6 h-6" />
            </span>
            <span className="text-gray-800 font-medium group-hover:text-[#0a6e5c] flex items-center">
            IT Staffing
              <ArrowRight className="ml-2 h-4 w-4 text-[#0a6e5c] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </span>
          </Link>

        </div>


        <div className="w-1/2 p-8">
          <Link
            to="/services/ecommerce"
            onClick={closeDropdown}
            className="whitespace-nowrap block py-3 text-gray-800 font-medium hover:text-[#0a6e5c]"
          >
            Mobile Application Development 01
          </Link>

          <Link
            to="/services/custom-website"
            onClick={closeDropdown}
            className="block py-3 text-gray-800 font-medium hover:text-[#0a6e5c]"
          >
            Mobile Application Development 02
          </Link>

          <Link
            to="/services/cms-development"
            onClick={closeDropdown}
            className="block py-3 text-gray-800 font-medium hover:text-[#0a6e5c]"
          >
            Mobile Application Development 03
          </Link>

          <Link
            to="/services/maintenance"
            onClick={closeDropdown}
            className="block py-3 text-gray-800 font-medium hover:text-[#0a6e5c]"
          >
            Mobile Application Development 04
          </Link>

          <Link
            to="/services/maintenance-plus"
            onClick={closeDropdown}
            className="block py-3 text-gray-800 font-medium hover:text-[#0a6e5c]"
          >
            Mobile Application Development 05
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServicesDropdown
