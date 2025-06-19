import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
  import '../styles/components/ArtificialIntelligence.css'

import Image1 from "../assets/Group 596.png";
import Image2 from "../assets/Group 591.png";
import Image3 from "../assets/Group 592.png";
import Image4 from "../assets/Group 593.png";
import Image5 from "../assets/Group 594.png";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    text: "TechDevise Helped a Leading Mobile App Development Agency in UK Achieve Fully Functional Apps and Faster Time-to-Market",
    subtitle:
      "TechDevise delivered end-to-end functional testing services to ensure that mobile apps are functioning seamlessly to deliver user experience (UX) and performed risk-driven functional testing to ensure optimal test coverage.",
    image: Image1,
  },
  {
    text: "TechDevise helped a Leading Farm Credit Services Provider Achieve 90% Reduced QA Cycle Time and 50% Reduced Time to Market with Automated Functional Testing",
    subtitle:
      "To help client achieve the required goal, we enabled end-to-end functional automation testing of their farm credit application suite comprising of more than ten applications using the recent DevOps CI/CD methodology.",
    image: Image2,
  },
  {
    text: "TechDevise Assisted a US-Based Financial Services Company Achieve 100% Automation and Reduce QA Costs By 40%",
    subtitle:
      "TechDevise partnered with the client to understand the application flow and assisted automating test cases and batch execution. Our client has successfully saved costs, streamlined the processes, and scaled the business.",
    image: Image3,
  },
  {
    text: "TechDevise Helped a Leading Insurance Company in the U.S. Achieve a Fully Functional Website and Reduced Time-to-Market by 30%",
    subtitle:
      "TechDevise worked with the client to understand various insurance processes and suggested a flexible and cost-effective framework. Reduced time to market by 30% and saved significant costs.",
    image: Image4,
  },
  {
    text: "Helps an Audio Streaming Services Provider Achieve 50% Faster Time-to-Market",
    subtitle:
      "TechDevise deployed a team in a hybrid (Onsite & offshore) model and performed test advisory to create automation roadmap and set up the Enterprise-level test automation tool, UiPath Test Suite-based solution by working closely with the client’s teams.",
    image: Image5,
  },
];

const GainInsights = () => {
  const sectionRef = useRef(null);
  const panelsRef = useRef([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = panelsRef.current;

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () =>
            "+=" + sectionRef.current.offsetWidth * (panels.length - 1),
          onUpdate: (self) => {
            const index = Math.round(self.progress * (panels.length - 1));
            setSelectedIndex(index);
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleDotClick = (index) => {
    setSelectedIndex(index);
    const panelWidth = sectionRef.current.offsetWidth;
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });

    gsap.to(panelsRef.current, {
      xPercent: -100 * index,
      ease: "power2.inOut",
    });
  };

  return (
   <div
      ref={sectionRef}
      className="w-full h-[600px]  md:h-auto overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #0B6F4F, #021711)" }}
    >
      <div className="w-full max-w-[1650px]  mx-auto px-4 py-5 flex justify-between items-center md:mt">
        <h1 className="text-white text-[28px] md:text-[48px] font-extrabold leading-tight font-Montserrat">
          Gain Insights into <br /> our Services
        </h1>
        <button className="flex items-center gap-2 text-white font-medium px-4 py-2 rounded-full border border-white transition-colors">
          <span>Skip</span>
          <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center ml-1">
            <ArrowUpRight className="h-4 w-4 text-[#2DC4A9]" />
          </div>
        </button>
      </div>

      <div className="flex w-[200vw] md:w-[500vw] h-[40vh] md:h-[80vh] ml-[115px] mb-[40px]">
        {categories.map((item, index) => (
          <div
            key={index}
            className="panel w-[900px] md:w-[1680px] h-full relative flex-shrink-0"
            ref={(el) => (panelsRef.current[index] = el)}
          >
            <img
              src={item.image}
              alt={item.text}
              className="absolute w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00000099] to-[#00000000] p-10 flex flex-col justify-end">
              <div className="text-white max-w-[900px] ml-[50px]">
                <h2 className="text-[20px] md:text-[48px] font-bold mb-4 leading-snug gainh2">
                  {item.text}
                </h2>
                <p className="text-[10px] md:text-[20px] opacity-90 mb-8">{item.subtitle}</p>
                <button className="flex items-center gap-2 text-sm mb-4 text-white font-semibold px-5 py-2 rounded-full border border-white hover:bg-white hover:text-black transition">
                  Know More
                  <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center ml-1">
                    <ArrowUpRight className="h-4 w-4 text-[#2DC4A9]" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center gap-3 md:mt-[-2rem] md-10">
        {categories.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "bg-white w-8" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GainInsights;

