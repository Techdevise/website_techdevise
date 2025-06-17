import React, { useRef, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { gsap } from "gsap";
import Ads1 from "../assets/Ads1.svg";
import Ads2 from "../assets/Ads2.svg";
import Ads3 from "../assets/Ads3.svg";
import Ads4 from "../assets/Ads4.svg";

export default function Portfolio() {
  const slidesRef = useRef([]);

  const slides = [
    {
      title: "Show up",
      titleColor: "text-[#1F8E3D]",
      subtitle: "with Google Ads",
      description:
        "Whatever your business goal, drive better results with Performance Max.",
      image: Ads1,
      bgColor: "bg-[#CEEAD6]",
    },
    {
      title: "Reach more",
      subtitle: "with Google Ads",
      titleColor: "text-[#F29900]",
      description:
        "Whatever your business goal, drive better results with Performance Max.",
      image: Ads2,
      bgColor: "bg-[#FEF7E0]",
    },
    {
      title: "Grow faster",
      subtitle: "with Search Ads",
      titleColor: "text-[#1C73E8]",
      description:
        "Whatever your business goal, drive better results with Performance Max.",
      image: Ads3,
      bgColor: "bg-[#D2E3FC]",
    },
    {
      title: "Stand out",
      subtitle: "with Search Ads",
      titleColor: "text-[#C5221F]",
      description:
        "Whatever your business goal, drive better results with Performance Max.",
      image: Ads4,
      bgColor: "bg-[#FCE8E6]",
    },
  ];

  useEffect(() => {
    gsap.set(slidesRef.current[0], { opacity: 1, x: 0 });

    let currentIndex = 0;
    const totalSlides = slides.length;

    const animateSlides = () => {
      const nextIndex = (currentIndex + 1) % totalSlides;

      gsap.to(slidesRef.current[currentIndex], {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut",
      });

      gsap.fromTo(
        slidesRef.current[nextIndex],
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.inOut",
          onComplete: () => {
            currentIndex = nextIndex;
          },
        }
      );
    };

    const interval = setInterval(animateSlides, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[1440px] h-[600px] mx-auto overflow-hidden px-4 sm:px-6 lg:px-8">
      {slides.map((slide, index) => (
        <div
          key={index}
          ref={(el) => (slidesRef.current[index] = el)}
          className="absolute top-0 left-0 w-full h-full opacity-0"
        >
          <div className="flex justify-center items-center h-full p-4 sm:p-6 bg-white">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center md:justify-between gap-10">
              {/* Image */}
              <div
                className={`relative w-full max-w-[400px] ${slide.bgColor} rounded-xl p-4 sm:p-6`}
              >
                <img
                  src={slide.image}
                  alt="Google Ads"
                  className="w-full h-[250px] sm:h-[300px] rounded-lg object-contain"
                />
                <button className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md">
                  <FaPlay className="text-green-600 text-lg" />
                </button>
              </div>

              {/* Text */}
              <div className="text-center md:text-left w-full md:w-[60%] -ml-[0rem] md:-ml-[3rem] relative z-20">
                <h1
                  style={{ fontFamily: "Montserrat" }}
                  className="font-extrabold leading-tight"
                >
                  <span
                    className={`block text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] ${slide.titleColor}`}
                  >
                    {slide.title}
                  </span>
                  <span className="block text-black text-[30px] sm:text-[45px] md:text-[60px]">
                    {slide.subtitle}
                  </span>
                </h1>
                <p
                  className="mt-4  mt-2 ml-[-1rem] text-[14px] sm:text-[16px] text-[#000000] w-full"
                  style={{ fontFamily: "Montserrat" }}
                >
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}








// import React, { useRef, useEffect } from "react";
// import { FaPlay } from "react-icons/fa";
// import { gsap } from "gsap";
// import Ads1 from "../assets/Ads1.svg";
// import Ads2 from "../assets/Ads2.svg";
// import Ads3 from "../assets/Ads3.svg";
// import Ads4 from "../assets/Ads4.svg";
// import feature1 from "../assets/feature1.svg";
 
// export default function Portfolio() {
//   const slidesRef = useRef([]);
 
//   const slides = [
//     {
//       title: "Show up",
//       titleColor: "text-[#1F8E3D]",
//       subtitle: "with Google Ads",
//       description:
//         "Whatever your business goal, drive better results with Performance Max.",
//       image: Ads1,
//       bgColor: "bg-[#CEEAD6]",
//     },
//     {
//       title: "Reach more",
//       subtitle: "with Google Ads",
//       titleColor: "text-[#F29900]",
//       description: "Whatever your business goal, drive better results with Performance Max.",
//       image: Ads2,
//       bgColor: "bg-[#FEF7E0]",
//     },
//     {
//       title: "Grow faster",
//       subtitle: "with Search Ads",
//       titleColor: "text-[#1C73E8]",
//       description:
//         "Whatever your business goal, drive better results with Performance Max.",
//       image: Ads3,
//       bgColor: "bg-[#D2E3FC]",
//     },
//     {
//       title: "Stand out",
//       subtitle: "with Search Ads",
//       titleColor: "text-[#C5221F]",
//       description:
//         "Whatever your business goal, drive better results with Performance Max..",
//       image: Ads4,
//       bgColor: "bg-[#FCE8E6]",
//     },
//   ];
 
//   useEffect(() => {
//     gsap.set(slidesRef.current[0], { opacity: 1, x: 0 });
 
//     // Auto-rotate slides
//     let currentIndex = 0;
//     const totalSlides = slides.length;
 
//     const animateSlides = () => {
//       const nextIndex = (currentIndex + 1) % totalSlides;
 
//       // Exit animation for current slide
//       gsap.to(slidesRef.current[currentIndex], {
//         x: -100,
//         opacity: 0,
//         duration: 0.8,
//         ease: "power3.inOut",
//       });
 
//       // Entry animation for next slide
//       gsap.fromTo(
//         slidesRef.current[nextIndex],
//         { x: 100, opacity: 0 },
//         {
//           x: 0,
//           opacity: 1,
//           duration: 0.8,
//           ease: "power3.inOut",
//           onComplete: () => {
//             currentIndex = nextIndex;
//           },
//         }
//       );
//     };
 
//     const interval = setInterval(animateSlides, 5000);
//     return () => clearInterval(interval);
//   }, []);
 
//   return (
    
//     <div className="relative h-[600px] overflow-hidden w-[1680px] m-auto">
     
//       {slides.map((slide, index) => (
        
//         <div
//           key={index}
//           ref={(el) => (slidesRef.current[index] = el)}
//           className="absolute top-0 left-0 w-full h-full opacity-0"
//         >
//           <div className="flex justify-center items-center h-full p-6 bg-white">
//             <div className="w-full max-w-[63%] w-full gap-8 items-center justify-center flex ml-auto mr-auto md:justify-between md:flex-row flex-col">
//               {/* Image container with dynamic background color */}
//               <div
//                 className={`relative w-full max-w-[400px] mx-auto md:mx-0 ${slide.bgColor} rounded-xl p-6`}
//               >
//                 <img
//                   src={slide.image}
//                   alt="Google Ads"
//                   className="w-full h-[300px] rounded-lg"
//                 />
//                 <button className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md">
//                   <FaPlay className="text-green-600 text-lg" />
//                 </button>
//               </div>
 
//               {/* Text content */}
//               <div className="text-center md:text-left w-[100%] -ml-[3rem] relative z-20 ">
//                 <h1 style={{ fontFamily: "Montserrat" }} className="font-extrabold leading-[120px]">
//                   <span className={`  ${slide.titleColor} block text-[100px]`}>
//                     {slide.title}
//                   </span>
//                   <span className="text-black block text-[70px]">
//                     {slide.subtitle}
//                   </span>
//                 </h1>
//                 <p className="mt-2 ml-[-1rem] text-[#000000] text-center w-full mx-auto md:mx-0 text-[14px]" style={{ fontFamily: "Montserrat" }}>
//                   {slide.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
 
  
//     </div>
//   );
// }