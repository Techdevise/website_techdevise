import React from "react";
import { ArrowRight } from "lucide-react";
import Mobilebackimg from "../assets/Mobilebackimg.svg";
import Vedioimg from "../assets/Vedioimg.png";
import IOSAppDevelopment from "../components/IOSAppDevelopment";
import IOSAppSection from "../components/IOSAppSection";
import MobileAppServices from "../components/MobileAppServices";
import AndroidLanding from "../components/AndroidLanding";
import ReactNativeAppDevelopment from "../components/ReactNativeAppDevelopment";
import TechStack from "../components/TechStack";
import blockchainarrow from "../assets/blockchainarrow.svg";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const MobileDevelopment = () => {
  return (
    <main className="w-full">
      {/* Hero Section */}
    <section
  className="relative w-full h-[570px] md:h-[1048px] flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: `url(${Mobilebackimg})` }}
>
  <div className="absolute inset-0 bg-black opacity-70 bg-cover"></div>

  <div className="relative text-center text-white px-4 sm:px-6 max-w-4xl z-10">
    <div className="flex justify-center mt-5 md:mt-20">
      <button className="bg-opacity-20 p-4 hover:bg-opacity-40">
        <div className="relative flex items-center justify-center">
          <motion.div
            className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white"
            animate={{
              scale: [1, 1.2],
              opacity: [0.7, 0.3],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center z-10 shadow-md">
            <Play className="text-violet-500 w-5 h-5 md:w-6 md:h-6" />
          </div>
        </div>
      </button>
    </div>

    <h1
      className="text-3xl sm:text-4xl md:text-5xl font-Montserrat font-bold mb-4 mt-6 md:mt-10 leading-tight"
      style={{
        display: "inline-table",
        background: "linear-gradient(to right, #FFFFFF, #444444)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        textFillColor: "transparent",
        color: "#157B6C",
      }}
    >
      Custom Mobile App
      <br /> Development Services
    </h1>

    <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6">
      Turn your ideas into innovative mobile experiences with our AI-driven and
      blockchain-secured mobile app development services. We build custom mobile
      apps for Android and iOS, integrated with the latest cutting-edge
      technologies.
    </p>

    <button className="flex items-center gap-2 bg-[#157B6C] hover:bg-[#25a892] text-white font-medium px-5 py-2 sm:px-6 sm:py-3 rounded-full transition-colors mx-auto">
      <span className="text-sm sm:text-base">Mobile App Development</span>
      <div className="bg-white rounded-full w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] flex items-center justify-center ml-4 sm:ml-5">
        <img
          src={blockchainarrow}
          alt="blockchainarrow"
          className="w-3.5 h-3.5 sm:w-4 sm:h-4"
        />
      </div>
    </button>
  </div>
</section>


      {/* iOS App Development Section */}
      <section className="py-10 bg-white">
        <IOSAppDevelopment />
      </section>

      {/* iOS App Section */}
      <section
        className="w-full h-auto py-10"
        style={{ background: "linear-gradient(to right, #FCFFEE, #DEEA99)" }}
      >
        <IOSAppSection />
      </section>

      {/* Mobile App Services Section */}
      <section className="w-full flex justify-center bg-white">
        <MobileAppServices />
      </section>
      <section className="py-0 md:py-10">
        <AndroidLanding />
      </section>
      <section
        className="py-0 md:py-10"
        style={{ background: "linear-gradient(to right, #F2F4FF, #EDEFFD)" }}
      >
        <ReactNativeAppDevelopment />
      </section>
      <section className="techh_stck py-20">
        <TechStack />
      </section>
    </main>
  );
};

export default MobileDevelopment;
