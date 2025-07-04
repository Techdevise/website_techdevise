import React, { useEffect, useRef } from "react";
import "../index.css";
import TechAboutSection from "../components/TechAboutSection";
import TrustedBy from "./TrustedBy";
import ServicesSection from "./ServicesSection";
import BlockchainServices from "../components/BlockchainServices";
import ResponsiveTechOffering from "./ResponsiveTechOffering";
import TechSolutions from "./TechSolutions";
import SocialLinks from "./SocialMediaBanner";
import IndustryVision from "./IndustryVision";
import Testimonials from "./Testimonials";
import Homevideo from "../assets/Homevideo1.mp4";
import Homecircle from "../assets/Homecircle.svg";
import Homeimg from "../assets/Homeimg.svg";
import Google from "../assets/Google.svg";
import Googleanaylicts from "../assets/Googleanaylicts.svg";
import Ellipse from "../assets/Ellipse 3.svg";
import lamping from "../assets/lamping.svg";
import light1 from "../assets/light1.svg";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Line from "../assets/Line.png";
import ContactForm from "./ContactForm";
import LocationSection from "./LocationSection";
import ExperienceSection from "./ExperienceSection";

gsap.registerPlugin(TextPlugin);
function Homepage({ setIsModalOpen }) {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("overflow-x-hidden", "overflow-y-auto", "bg-[#061611]");
    return () => {
      document.body.classList.remove("overflow-x-hidden", "overflow-y-auto", "bg-[#061611]");
    };
  }, []);

  useEffect(() => {
    const texts = [
      "Digital Marketing",
      "Web Development",
      "UI/UX Design",
      "Software Consultancy",
    ];

    const tl = gsap.timeline({ repeat: -1 });

    texts.forEach((fullText, index) => {
      tl.to(textRef.current, {
        duration: fullText.length * 0.2,
        text: fullText + "|", 
        ease: "power1.inOut",
      });
      tl.to({}, { duration: 0.5 });
    
      tl.to(textRef.current, {
        duration: 0.5,
        text: fullText + " ",
        repeat: 4,
        yoyo: true,
        ease: "power1.inOut",
      });

      for (let i = fullText.length; i >= 0; i--) {
        tl.to(textRef.current, {
          duration: 0.05,
          text: fullText.substring(0, i) + "|",
          ease: "power1.inOut",
        });
      }
    });
  
    return () => tl.kill();
  }, []);

  return (
<main className="relative h-full">
  {/* Hero Section */}
  <div className="relative bg-cover bg-center bg-no-repeat w-full h-[500px] md:h-[700px]">
    <div className="relative w-full h-full md:h-[849px] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-[0.12] max-h-[800px]"
        src={Homevideo}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="relative z-10 top-[100px] md:top-[174px] w-full max-w-[1680px] mx-auto pb-[50px] md:pb-[100px] px-4 md:px-0 2xl:ml-[117px] md:ml-[75px] ml-[0px] lg:ml-[74px]">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 md:gap-4 p-0 md:ml-[-10px] md:justify-start justify-center">
          <div className="rounded-[15px] border border-white p-2 flex items-center gap-2 w-[160px] md:w-[205px] h-[40px] md:h-[50px]">
            <img src={Google} alt="Google Partner" className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-[12px] md:text-[16px] lg:text-[14px] 2xl:text-[16px] font-semibold whitespace-nowrap">
              <span className="text-white">Google</span>{" "}
              <span className="text-white">Partner</span>
            </span>
          </div>

          <div className="rounded-[15px] border border-white p-2 flex items-center gap-2 w-[160px] md:w-[205px] h-[40px] md:h-[50px]">
            <img
              src={Googleanaylicts}
              alt="Google Analytics"
              className="w-5 h-5 md:w-6 md:h-6"
            />
            <span className="text-[12px] md:text-[16px] lg:text-[14px] 2xl:text-[16px] font-semibold whitespace-nowrap">
              <span className="text-white">Google</span>{" "}
              <span className="text-white">Analytics</span>
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-[16px] md:text-[40px] lg:text-[25px] 2xl:text-[30px] leading-tight text-center md:text-start text-white mt-4 max-w-[911px]">
          Expert Development Services for you
        </h1>

        {/* Animated Text */}
        <div className="mb-8 md:mb-12">
          <img
            src={Homecircle}
            alt="Background Circle"
            className="absolute -top-10 -left-10 w-[200px] md:w-[353px] h-[353px] opacity-20 z-0 pointer-events-none"
          />
          <h2
            className="text-[30px] md:text-[90px]  2xl:text-[60px] lg:text-[45px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#157B6C] font-Montserrat md:justify-start justify-center"
            style={{
              display: "inline-table",
              background: "linear-gradient(to right, #E0E0E0, #157B6C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
              color: "#157B6C",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            <span ref={textRef}></span>
          </h2>
          <hr className="hidden md:block w-1/2 mt-[15px] h-[2px] bg-[#ffffff20] border-none" />
        </div>

        {/* Right Side Image */}
        <div className="absolute right-0 top-[200px] md:top-[200px] w-[300px] md:w-[541.86px] 2xl:w-[520px] lg:w-[480px] md:w-[358.86px] h-[200px] 2xl:h-[180px] lg:h-[160px] md:h-[358.86px] z-0 mr-[42px] md:mr-[0px]">
          <img
            src={Homeimg}
            alt="Design Element"
            className="w-full mt-[0px] md:mt-[-33px] object-contain opacity-100"
          />

          <div className="hidden sm:block bg-no-repeat bg-center bg-contain">
            <img
              src={lamping}
              alt="Lamp"
              className="absolute left-[150px] md:left-[300px] w-[20px] md:w-[36.31px] h-[120px] md:h-[230.56px] opacity-100 top-[-200px] md:top-[-311px]"
            />

            <img
              src={light1}
              alt="Lamp Logo"
              className="absolute left-[250px] md:left-[470px] w-[30px] md:w-[49.99px] h-[180px] md:h-[317.44px] opacity-100 top-[-200px] md:top-[-314px]"
            />
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="relative z-20 border border-white text-white px-[16px] md:px-[24px] py-[12px] md:py-[20px] rounded-[12px] 
              font-Archivo text-[14px] md:text-[20px] 2xl:text-[18px] lg:text-[16px] font-semibold flex items-center justify-center gap-2 
              w-[200px] md:w-[280px] h-[40px] 2xl:h-[60px] lg:h-[50px] md:h-[70px] mt-[30px] md:mt-[45px] hover:bg-white hover:text-black 
              transition-colors duration-300 whitespace-nowrap ml-[58px] md:ml-[0px]"
        >
          Consult Our Experts
          <span className="text-2xl md:text-4xl w-[30px] md:w-[50px]">→</span>
        </button>
      </div>
    </div>
  </div>

  {/* Rest of the sections */}
  <div className="w-full relative z-10 flex items-center mx-auto">
    <TrustedBy />
  </div>

  <div className="innovate_sol relative z-10 mx-auto mt-[30px] md:mt-[50px] overflow-hidden bg-[#061611]">
    <TechAboutSection />
  </div>

  <ExperienceSection />

  <ResponsiveTechOffering />

  <div className="container mx-auto p-4 w-full" style={{ borderRadius: "30px 10px 30px 10px" }}>
    <ServicesSection />
  </div>

  <div className="relative flex justify-center items-center py-0 z-10 mt-0 md:mt-10">
    <BlockchainServices />
  </div>

  <TechSolutions />
  <SocialLinks />

  <div className="flex justify-center items-center">
    <IndustryVision />
  </div>

  <Testimonials />

  <div className="relative bg-[#061611] py-0">
    <ContactForm />
  </div>
  <div className="relative">
    <LocationSection />
  </div>
</main>
  );
}

export default Homepage;