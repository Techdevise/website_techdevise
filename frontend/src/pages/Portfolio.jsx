import React from "react";
import LocationSection from "./LocationSection";
import PortFolio1 from "../assets/PortFolio1.svg";
import lamp from "../assets/lamp.png";
import light from "../assets/light.png";
import Avg from "../assets/avbmarketing.svg";
import Bubbles from "../assets/bubbles.svg";
import IENGCO1 from "../assets/IENGCO1.svg";
import Refrub from "../assets/Refrub.svg";
import Terling from "../assets/terling.svg";
import Pediatric from "../assets/pediatric.svg";
import Pediatric2 from "../assets/Pediatric (2).svg";
import IENGCO from "../assets/IENGCO.svg";
import TERLING from "../assets/tarling11.png";
import Refrub2 from "../assets/Refrub2.svg";
import Bubbles2 from "../assets/Bubbles2.svg";
import AVBM from "../assets/AVBM.svg";

function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "AVB Marketing",
      logo: AVBM,
      // logoBg:"bg-[#F6D083]",
      description:
        "AVB Marketing can help your business dominate the industry with marketing and technology solutions that secure independent retail success.",
      link: "https://www.avbmarketing.com",
      platform: "Wordpress",
      image: Avg,
      gradient: "bg-gradient-to-r from-green-100 to-white",
      layout: "image-left ",
    },
    {
      id: 2,
      title: "Bubbles Wholesale",
      logo: Bubbles2,
      //  logoBg:"bg-[#F6D083]",
      description:
        "Eureka Telecom was incorporated to bring innovation in the telecommunication industry by offering modernized telecom services.",
      link: "https://www.bubbleswholesale.com",
      platform: "PHP, React.js",
      image: Bubbles,
      gradient: "linear-gradient(99.51deg, #F8FFEE 8.92%, #C4F67B 93.55%)",
      layout: "image-right",
    },
    {
      id: 3,
      title: "Mr.Refurb",
      logo: Refrub2,
      //    logoBg:"bg-[#F6D083]",
      description:
        "Dear Customers and Partners, We warmly welcome you to Mr-Refurb, your preferred destination for high-quality, professionally refurbished hardware.",
      link: "https://mr-refurb.nl/",
      platform: "Shopify",
      image: Refrub,
      gradient: "bg-gradient-to-r from-green-100 to-white",
      layout: "image-left",
    },
    {
      id: 4,
      title: "TERLING FOREVER",
      logo: TERLING,
      //   logoBg:"bg-[#F6D083]",
      description:
        "Sterling Forever was born from the belief that everyone deserves access to exquisite jewelry, without ever having to compromise on quality.",
      link: "www.sterlingforever.com",
      platform: "Shopify",
      image: Terling,
      gradient: "linear-gradient(99.51deg, #FFF8EA, #F6D083)",
      layout: "image-right",
    },
    {
      id: 5,
      title: "IENGCO",
      logo: IENGCO,
      //  logoBg:"bg-[#F6D083]",
      description:
        "Our expertise spans from initial concept development to detailed design, ensuring every aspect of your project is meticulously planned and executed.",
      link: "https://iengco.com/",
      platform: "Shopify",
      image: IENGCO1,
      gradient: "bg-gradient-to-r from-green-100 to-white",
      layout: "image-left",
    },
    {
      id: 6,
      title: "Pediatric",
      logo: Pediatric2,
      //   logoBg: "bg-[#F6D083]",
      description:
        "Pediatric Therapy Associates is a kids focused therapy place. We are a multi-disciplinary group with the singular focus of developing your child to the fullest.",
      link: "www.therapypediatric.com",
      platform: "Wordpress",
      image: Pediatric,
      gradient: "linear-gradient(99.51deg, #FCFFFF, #A9F2F2)",
      layout: "image-right",
    },
  ];

  return (
    <div className="flex-grow bg-white relative overflow-hidden ">
      {/* Hero Section */}
      <div
        className="w-full h-[546px] bg-[#061611] bg-cover bg-center flex items-center justify-center text-white font-Montserrat px-4 relative"
        style={{
          backgroundImage: `url(${PortFolio1})`,
          backgroundSize: "100% 100",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="flex flex-col items-center justify-center text-center mt-[30px] md:mt-0 px-4 z-20">
          <h1 className="text-[28px] md:text-[48px] font-bold">Portfolio</h1>
        </div>
      </div>

      {/* Portfolio Content */}
      <div className="py-16 px-0 md:px-15 bg-white w-auto mx-auto">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {["All", "Design", "Development", "Ideas", "Technology"].map(
            (filter, idx) => (
              <button
                key={idx}
                className={`px-6 py-2 border-2 rounded-md font-medium text-sm md:text-base transition-all duration-300
                                ${
                                  filter === "All"
                                    ? "bg-green-800 text-white border-green-800"
                                    : "border-gray-700 hover:bg-green-800 hover:text-white hover:border-green-800"
                                }`}
              >
                {filter}
              </button>
            )
          )}
        </div>

        {/* Portfolio Items */}
        <div className="space-y-8   ">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col ${
                item.layout === "image-right"
                  ? "lg:flex-row-reverse"
                  : "lg:flex-row"
              } items-center gap-6 p-6 rounded-xl w-full mx-auto`}
              style={{
                background: item.gradient.includes("linear-gradient")
                  ? item.gradient
                  : undefined,
                backgroundColor: item.gradient.includes("bg-gradient-to-r")
                  ? undefined
                  : "transparent",
              }}
            >
                {/* <div  className="w"> */}
              <div className="w-full lg:w-1/2 flex-shrink-0 pl-24 ms-8  ">
                <img
                  src={item.image}
                  alt={`${item.title} Website`}
                  className="rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="w-auto lg:w-1/2 p-4 md:p-12 pr-24  items-center justify-center">
                <h3 className="font-bold text-xl md:text-2xl text-gray-900 mb-4">
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt={`${item.title} logo`}
                      className={``}
                    />
                  )}
                </h3>
                <p className="text-gray-700 mb-6 text-base md:text-xl leading-relaxed ">
                  {item.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h2
                      className="font-semibold text-gray-800 mb-1 text-lg"
                      style={{
                        background:
                          "linear-gradient(to right, #157B6C, #061611)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Website Link
                    </h2>
                    <a
                      href={item.link}
                      className="text-green-800 hover:underline break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.link}
                    </a>
                  </div>
                  <div>
                    <h2
                      className="font-semibold text-gray-800 mb-1 text-lg"
                      style={{
                        background:
                          "linear-gradient(to right, #157B6C, #061611)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Platform
                    </h2>
                    <p>{item.platform}</p>
                  </div>
                </div>
              </div>
              </div>
            // </div>
          ))}
        </div>
      </div>

      {/* Location Section - Uncomment if needed */}
      {/* <LocationSection /> */}
    </div>
  );
}

export default Portfolio;
