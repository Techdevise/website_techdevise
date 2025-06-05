import React from "react";
// import '../styles/components/SEOSection.css'
import seoimage from "../assets/seoimage.png"; // Replace with actual image path

const SEOSection = () => {
  return (
    <div className="seo_secction w-full px-4 md:px-10 py-16 bg-white m-auto">
      <div className="w-full max-w-[1678px] mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2
            className="seo-title text-[48px] font-Montserrat font-extrabold leading-tight"
            style={{
              display: "inline-table",
              background: "linear-gradient(to right,rgb(185, 221, 201), #157B6C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Give Your Website Ranking a Boost <br />
            With Our Proven SEO Strategies.
          </h2>
          <p className="text-gray-800 mt-4 text-lg">
            Is your business website struggling to attract visitors? If yes, then
            it is a common problem for every website because the internet is
            flooded with millions of websites and getting attention among this
            crowded place is a challenging task.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img src={seoimage} alt="SEO Illustration" className="seo_image w-full max-w-lg" />
        </div>
      </div>
    </div>
  );
};

export default SEOSection;