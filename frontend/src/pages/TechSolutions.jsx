import React, { useState } from "react";
import '../index.css'
import "../styles/pages/TechSolutions.css";
import React1 from "../assets/React1.svg"
import Vue from "../assets/Vue.svg";
import Javascript from "../assets/Javascript.svg";
import Html from "../assets/Html.svg";
import Css from "../assets/Css.svg";
import Next from "../assets/Next.svg";
import elogo from "../assets/elogo.svg";
import Meteor from "../assets/Meteor.svg";
import Java from "../assets/Java.svg";
import Nodejs from "../assets/nodejs.svg";
import Php from "../assets/Php.svg";
import Python from "../assets/python.svg";
import Go from "../assets/Go.svg";
import Dotnet from "../assets/Dotnet.svg";
import Maskgroup from "../assets/Maskgroup.png";
import Android from "../assets/Android.svg";
import Ios from "../assets/Ios.svg";
import Flutter from "../assets/flutter.svg";
import Cordova from "../assets/Cordova.svg";
import Xamarin from "../assets/xamarin.svg";
import Pwa from "../assets/Pwa.svg";
import Ionic from "../assets/ionic.svg";
import Reactnative from "../assets/Reactnative.svg";
import Figma from "../assets/Figma.svg";
import Adobe from "../assets/Adobe.svg";
import Sketch from "../assets/Sketch.svg";
import Photoshop from "../assets/Photoshop.svg";
import Aiillustrator from "../assets/Aiillustrator.svg";
import Coreldraw1 from "../assets/Coreldraw1.svg";

const TechSolutions = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  const categories = {
    Frontend: [
      { name: "React JS", logo: React1 },
      { name: "Vue JS", logo: Vue },
      { name: "JavaScript", logo: Javascript },
      { name: "CSS", logo: Css },
      { name: "HTML", logo: Html },
      { name: "Next JS", logo: Next },
      { name: "Ember", logo: elogo },
      { name: "Meteor", logo: Meteor },


    ],
    Backend: [
      { name: "Java", logo: Java },
      { name: "Node.js", logo: Nodejs },
      { name: "Php", logo: Php },
      { name: "Python", logo: Python },
      { name: "Go", logo: Go },
      { name: ".Net", logo: Dotnet },
    ],
    Mobile: [
      { name: "Android", logo: Android },
      { name: "Flutter", logo: Flutter },
      { name: "Cordova", logo: Cordova },
      { name: "Ios", logo: Ios },
      { name: "Xamarin", logo: Xamarin },
      { name: "PWA", logo: Pwa },
      { name: "Ionic", logo: Ionic },
      { name: "React Native", logo: Reactnative },

    ],
    "UI/UX Design": [
      { name: "Figma", logo: Figma },
      { name: "Adobe XD", logo: Adobe },
      { name: "Photoshop", logo: Photoshop },
      { name: "lllustrator", logo: Aiillustrator },
      { name: "CorelDRAW", logo: Coreldraw1 },
      { name: "Sketch", logo: Sketch },

    ],
  };

  return (
    <div
  className="mask_group border-2 p-6 rounded-[26px] border border-[#2d4642] w-full max-w-[1680px] mx-auto h-auto z-20 relative bg-no-repeat bg-center bg-cover w-macbook"
  style={{ backgroundImage: `url(${Maskgroup})` }}
>

      <div className="flex flex-col md:flex-row justify-between items-center h-full">
       
        <div className="md:w-1/3">
          <h1
            style={{
              display: "inline-table",
              background: "linear-gradient(to right, #e0e0e0, #157B6C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
              color: "#157B6C",
            }}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-montserrat text-[#8DBFB7] w-full md:w-[90%] lg:w-[600px] mb-4 ml-2 md:ml-5"
          >
            Innovative Technology<br/>Solutions
          </h1>
          <ul className="mt-6 md:space-y-8 space-x-4 md:space-x-0 flex md:flex-col overflow-x-auto w-full px-2 md:px-0 text-sm md:text-[20px] font-montserrat font-bold ml-0 md:ml-10 border border-[#2d4642] md:border-none rounded-lg py-2 scrollbar-hide">

            {Object.keys(categories).map((category) => (
             <li
             key={category}
             className={`cursor-pointer snap-start shrink-0 md:shrink md:snap-none ${
               selectedCategory === category
                 ? "text-[#157B6C] font-bold mb-0"
                 : "text-[#FFFFFF] mb-0"
             }`}
             onClick={() => setSelectedCategory(category)}
           >
           
                {category}
                <i
                  className={`fas fa-arrow-right ml-2 transition-transform duration-300 ${
                    selectedCategory === category
                      ? "translate-x-2 opacity-100" 
                      : "opacity-0"
                  }`}
                ></i>
                  <div
                  className={`h-[2px] bg-[#157B6C] transition-all duration-300 mt-1 ${
                    selectedCategory === category ? "w-20" : "w-0"
                  }`}
                ></div>
              </li>
            ))}
          </ul>
          
        </div>

        {/* Vertical Border */}
        {/* <div className="hidden md:block border-l border-[#2d4642] h-[50%] ml-[-50px] mt-[200px]"></div> */}


        
        <div className="tech_solution w-full md:mt-0 h-full overflow-auto no-scrollbar">
          <p className="paragraph w-full text-[14px] md:text-[16px] mb-6 w-[656px] opacity-100 font-montserrat font-medium text-[#FFFFFF] mt-[20px] md:mt-[50px] text-left md:text-right">
            Empowering businesses with cutting-edge IT solutions, including
            cloud <br /> computing, cybersecurity, AI, automation, and software
            development <br /> to drive efficiency, security, and growth cybersecurity, AI, automation.<br />
          </p>

        
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pb-4 mt-10 w-full px-2">
            {categories[selectedCategory]?.map((tech, index) => (
              <div
                key={index}
                className="bg-[#051E16] w-full h-[100px] opacity-100 rounded-[10px] border border-[#1E3D32] flex items-center justify-center"
              >
                <img alt={`${tech.name} logo`} className="mr-2" height="50" src={tech.logo} width="50" />
                <span className="text-[#FFFFFF]">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSolutions;
