import React from 'react';
import { motion } from 'framer-motion';
// import Navbar from '../layout/Navbar';
import SEOSection from '../components/SEOSection';
import SEOFeatures from '../components/seoFeatures';
import SocialMediaServices from '../components/SocialMediaServices';
import GoogleAdwordsSection from '../components/GoogleAdwordsSection';
import GoogleAdwordsServices from '../components/GoogleAdwordsServices';
import Experts from '../components/Experts';
import GoogleAdwordsLayout from '../components/GoogleAdwordsLayout';
import Digitalbanner from '../assets/Digitalbanner.svg';
import Vedioimg from '../assets/Vedioimg.png';
import growthcompanyimg from '../assets/growthcompanyimg.png';
import google from '../assets/google.png';
import mic from '../assets/mic.png';
import growth from '../assets/growth.png';
import team from '../assets/team.png';
import profileviews from '../assets/profileviews.png';
import Digitalvector1 from '../assets/Digitalvector1.svg';
import Digitalvector2 from '../assets/Digitalvector2.svg';
import GoggleAds from '../components/GoggleAds';


function DigitalMarketing() {
    return (
        <div className="m-auto w-full h-full bg-white">
            {/* Navbar */}
            {/* <Navbar style={{ backgroundColor: 'white', color: 'black' }} /> */}

            {/* Hero Section */}
            <div
        className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:h-[871px] bg-[#061611] mx-auto bg-cover bg-center flex flex-col md:flex-row items-center justify-center text-white px-4 md:px-8 lg:px-12 pt-16 sm:pb-20 md:py-0 overflow-hidden"
        style={{ backgroundImage: `url(${Digitalbanner})` }}
      >

                {/* Left Text Section */}
                <motion.div
          className="relative z-10 md:absolute lg:left-30 md:top-1/3 w-full md:w-auto px-4 md:px-0 mb-12 md:mb-0 text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
                   <h1 className="mt-[60px] text-3xl sm:text-4xl md:text-5xl lg:mt-0 lg:text-[62px] font-Montserrat font-extrabold  lg:leading-tight"   style={{
                            background: "linear-gradient(to right, #e0e0e0, #157B6C)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            textFillColor: "transparent"
                        }}>
  Renowned <br className="hidden sm:block " /> SEO Experts
</h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-4 w-full md:max-w-[600px] lg:max-w-[819px]">
            At <span className="text-white-400 font-semibold">Tech Devise</span> we have one of the most promising and
            talented SEO experts
            <br className="hidden md:block" /> who strive to deliver results. Our result-oriented SEO strategies will
            ensure that
            <br className="hidden md:block" /> your website ranking is boosted in no time Contact us today to know more!
          </p>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-0">
            <button className="w-full sm:w-[180px] md:w-[204px] h-[50px] md:h-[68px] bg-[#67C792] text-white font-Montserrat text-[14px] md:text-[16px] px-4 md:px-6 py-2 md:py-3 rounded-xl font-bold">
              Explore more →
            </button>
            <button className="w-full sm:w-auto sm:ml-4 flex items-center justify-center sm:justify-start px-4 md:px-6 py-2 md:py-3 font-Montserrat font-bold">
              <span className="mr-2">
                <img
                  src={Vedioimg || "/placeholder.svg"}
                  alt="Video image"
                  className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[68px] md:h-[68px] text-white"
                />
              </span>
              Play Video
            </button>
          </div>
        </motion.div>
                {/* Right Image & Graphics */}
                <div className="hidden md:block absolute right-0 lg:right-20 top-[25%] lg:top-[18.5%]">
          {/* Woman Image */}
          <motion.img
            src={growthcompanyimg}
            alt="SEO Expert"
            className="w-[400px] h-auto lg:w-[600px] lg:h-[710px] drop-shadow-lg"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />

                    {/* Floating Icons */}
                      <motion.img
            src={google}
            alt="Google"
            className="absolute top-10 left-5 md:left-10 lg:left-25 w-[60px] h-[60px] md:w-[75px] md:h-[75px] lg:w-[95px] lg:h-[95px]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
                    <motion.img src={mic} alt="Mic" className="absolute top-10 right-30 w-[110px] h-[100px]" animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 4, repeat: Infinity }} />
                    <motion.img src={growth} alt="Growth" className="absolute top-40 right-5 w-[110px] h-[100px]" animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ duration: 5, repeat: Infinity }} />
                    <motion.img src={team} alt="Our Team" className="relative bottom-142 left-0 w-[220px] h-[150px]" animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }} />
                        <motion.img
        src={Digitalvector1}
        alt="Digital vector left"
        className="absolute bottom-140 left-[-30px] w-[145px] h-[120px]"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
    />
                    <motion.img src={profileviews} alt="Profile views" className="relative bottom-110 right-5 w-[99px] h-[96px]" animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }} />
                          <motion.img
        src={Digitalvector2}
        alt="Digital vector right"
        className="absolute bottom-140 right-[-0px] w-[145px] h-[120px]"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
    />

                    {/* Business Growth Tag */}
                    <motion.div className="absolute top-0 left-[60%] transform -translate-x-1/2  border border-white px-6 py-3 text-white px-6 py-2 rounded-full font-semibold -mt-8 ml-4  initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1, duration: 1 }}">
                        BUSINESS GROWTH
                    </motion.div>
                    </div>
                     {/* Mobile-only image */}
        <div className="md:hidden relative w-full mt-8">
          <motion.img
            src={growthcompanyimg}
            alt="SEO Expert"
            className="w-[280px] h-auto mx-auto drop-shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 border border-white px-3 py-1 text-xs text-white rounded-full font-semibold -mt-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            BUSINESS GROWTH
          </motion.div>
        </div>
            </div>
            <SEOSection />
            <SEOFeatures />
            <SocialMediaServices />
            <GoogleAdwordsSection />
            <GoogleAdwordsServices />
            <GoggleAds/>
            <Experts />
            <GoogleAdwordsLayout />
        </div>
    );
}

export default DigitalMarketing;
