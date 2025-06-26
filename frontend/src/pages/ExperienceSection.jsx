import { useEffect, useState, useRef } from 'react';
import '../styles/pages/ExperienceSection.css'
const ExperienceCard = ({ targetValue, label, bgColor, highlightColor }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); 
  const cardRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); 
          let start = 0;
          const duration = 7000;
          const increment = targetValue / (duration / 16);
          const counter = setInterval(() => {
            start += increment;
            if (start >= targetValue) {
              setCount(targetValue);
              clearInterval(counter);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
   const currentCard = cardRef.current;
    if (currentCard) {
      observer.observe(currentCard);
    }
    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, [targetValue, hasAnimated]);
  return (
    <div
      ref={cardRef}
      className={`${bgColor} new_col_mn w-[328px] h-[270px] rounded-[26px] p-6 relative transition-transform duration-300 hover:scale-105 shadow-lg`}
    >
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 text-[56px] font-black">
        {count}+
      </span>
      <div
        className={`${highlightColor} h-[70px] md:h-[100px] absolute bottom-0 left-0 right-0 rounded-[26px] flex items-center justify-center`}
      >
        <span className="text-[24px] font-semibold">{label}</span>
      </div>
    </div>
  );
};
const ExperienceSection = () => {
  return (
    <div className="crds_pla relative z-10 mx-auto mt-[50px] w-full max-w-[1670px] h-auto opacity-100 px-4 py-8">
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2  origin-right mt-[300px] mr-40 new_post">
        <h1 style={{ display: "inline-table",  background: "linear-gradient(to right, #FFFFFF, #157B6C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",}}
          className="w-full font-extrabold font-Montserrat text-[96px] font-black text-[#A3E4C5] opacity-10">Experience
        </h1>
      </div>
      {/* Main Content Container */}
      <div className="new_continer flex flex-col md:flex-row gap-8 h-full">
        {/* Left Column - Text & Primary Cards */}
        <div className="years w-full md:w-[42%] flex flex-col">
          {/* Text Section */}
          <div className="mb-16 main_head_ing text-center md:text-left">
            <h1 style={{
              display: 'inline-table',
              background: "linear-gradient(to right, #E0E0E0, #157B6C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
              color: "#157B6C",
            }} className="text-[56px] font-black text-[#A3E4C5] leading-none">Experience</h1>
            <p className="mt-8 text-[18px] font-Montserrat text-white leading-relaxed max-w-[640px]">
              With years of experience in the IT industry, we have successfully delivered cutting-edge software solutions,
              web and mobile applications, and enterprise-grade systems. Our expertise spans various technologies, ensuring
              innovative, scalable, and secure digital solutions tailored to your business needs.
            </p>
          </div>
          {/* Primary Cards Column */}
          <div className="custom-card flex flex-col md:flex-row gap-x-8 gap-y-8 cards_on">
           <ExperienceCard targetValue={500} label="Clients" bgColor="bg-[#99EAE0]"  highlightColor="bg-[#FFFFFF94]" /> 
           <ExperienceCard targetValue={20} label="Countries" bgColor="bg-[#A5D1F3]" highlightColor="bg-[#FFFFFF94]" />
          </div>
        </div>
        {/* Right Column - Secondary Cards Grid */}
        <div className="custom-cards">
          <ExperienceCard targetValue={10} label="Years of Experience" bgColor="bg-[#67C792]" highlightColor="bg-[#FFFFFF94]" />
              <ExperienceCard targetValue={500} label="Clients" bgColor="bg-[#E8F3BA]" highlightColor="bg-[#FFFFFF94]" />
          <ExperienceCard targetValue={500} label="Clients" bgColor="bg-[#EA99B9]" highlightColor="bg-[#FFFFFF94]" />
          <ExperienceCard targetValue={20} label="Countries" bgColor="bg-[#EA9C99]" highlightColor="bg-[#FFFFFF94]" />
        </div>
      </div>
    </div>
  );
};
export default ExperienceSection;