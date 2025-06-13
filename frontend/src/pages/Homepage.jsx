import React, { useState, useEffect, useLocation, useRef } from 'react';
// import Navbar from '../layout/Navbar';
import '../index.css';
import '../styles/pages/Homepage.css';
import TechAboutSection from '../components/TechAboutSection';
import TrustedBy from './TrustedBy';
import ServicesSection from './ServicesSection';
import BlockchainServices from '../components/BlockchainServices';
import ResponsiveTechOffering from './ResponsiveTechOffering';
import TechSolutions from "./TechSolutions";
import SocialLinks from './SocialMediaBanner';
import IndustryVision from './IndustryVision';
import Testimonials from './Testimonials';
import Homevideo from "../assets/Homevideo1.mp4";
import Homecircle from "../assets/Homecircle.svg";
import Homeimg from "../assets/Homeimg.svg";
import Google from "../assets/Google.svg"
import Googleanaylicts from "../assets/Googleanaylicts.svg"
import Ellipse from "../assets/Ellipse 3.svg"
import lamp from "../assets/lamp.png"
import light from "../assets/light.png"
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';


// import Group from '../assets/Group 1.png';
import Line from '../assets/Line.png'
// import Rectangle from '../assets/Rectangle 14.png';
import ContactForm from './ContactForm';
import LocationSection from './LocationSection';
import ExperienceSection from './ExperienceSection';

gsap.registerPlugin(TextPlugin);
function Homepage({ setIsModalOpen }) {

  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    document.body.classList.add('homepage-body');
    return () => {
      document.body.classList.remove('homepage-body');
    };
  }, []);

  useEffect(() => {
    const fullText = 'Digital marketing';
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // Animate text appearing
    tl.to(textRef.current, {
      duration: 2.5,
      text: fullText,
      ease: 'power1.inOut',
      onStart: () => {
        cursorRef.current.style.display = 'inline';
      },
    });

    // Blink cursor
    tl.to(cursorRef.current, {
      opacity: 0,
      duration: 0.5,
      repeat: 6,
      yoyo: true,
      ease: 'power1.inOut',
    });

    // Erase text from the end manually
    for (let i = fullText.length; i >= 0; i--) {
      tl.to(textRef.current, {
        duration: 0.05,
        text: fullText.substring(0, i),
        ease: 'power1.inOut',
      });
    }

    // Reset cursor visibility
    tl.set(cursorRef.current, { display: 'inline' });

    return () => tl.kill();
  }, []);
  return (
    <main className="relative h-full">

      <div className="home-bg relative">


        <div className="home-video-wrapper">
          <video
            className="background-video"
            src={Homevideo}
            autoPlay
            muted
            loop
            playsInline
          />
          {/* <Navbar /> */}


          {/* Main Content Section */}
          <div className="baner_space relative z-10 top-[302px] w-full max-w-[1680px] m-auto pb-[100px]">
            {/* Badges Section */}
            <div className="new_hild flex gap-4 p-4 ml-[-10px]">
              <div className="google_new rounded-xl shadow-md p-5 flex items-center gap-2 w-[229px] h-[56px] rounded-[15px] border border-[#fffff] p-2">
                <img
                  src={Google}
                  alt="Google Partner"
                  className="w-6 h-6"
                />
                <span className="new_tag text-[20px] font-semibold">
                  <span className="text-white">Google</span>{' '}
                  <span className="text-white">Partner</span>
                </span>
              </div>

              <div className="google_new rounded-xl shadow-md p-5 flex items-center gap-2 w-[229px] h-[56px] md:w-[250px] rounded-[15px] border border-[#ffffff] p-2">
                <img src={Googleanaylicts} alt="Google Analytics" className="w-6 h-6" />
                <span className="new_tag text-[20px] font-semibold whitespace-nowrap">
                  <span className="text-white">Google</span>{' '}
                  <span className="text-white">Analytics</span>
                </span>
              </div>
            </div>

            <h1 className="digi_tal1 text-[45px] leading-tight text-white mt-4 max-w-[911px]">
              Expert Development Services for you
            </h1>

            <div className="digi_tal mb-12">
              <img
                src={Homecircle}
                alt="Background Circle"
                className="absolute -top-10 -left-10 w-[353px] h-[3053px] opacity-20 z-0 pointer-events-none"
              />
              <h2
                className="text-[96px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#157B6C] font-Montserrat"
                style={{
                  display: 'inline-table',
                  background: 'linear-gradient(to right, #E0E0E0, #157B6C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  color: '#157B6C',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                }}
              >
                <span ref={textRef}></span>
                <span
                  ref={cursorRef}
                  style={{
                    display: 'inline',
                    marginLeft: '2px',
                    animation: 'blink 1s step-start infinite',
                  }}
                >
                  |
                </span>
              </h2>
              <hr className="hidden md:block solid"></hr>
            </div>


            <div className="lamp_banner absolute right-0 top-[200px] w-[541.86px] h-[358.86px] z-0  ">
              <img src={Homeimg} alt="Design Element"
                className="w-full mt-[-20px] object-contain opacity-100" />

              <div
                className=" bg-no-repeat bg-center bg-contain"
                style={{ backgroundImage: `url(${Ellipse})` }}
              >
                <img
                  src={lamp}
                  alt="Lamp"
                  className="absolute top-[-390px] left-[300px] w-[36.31px] h-[230.56px] opacity-100" style={{
    top: window.innerWidth === 1440 ? "-411px" : "-390px",
  }}/>


                <img
                  src={light}
                  alt="Lamp Logo"
                  className="hidden sm:block absolute top-[-392px] left-[470px] w-[49.99px] h-[317.44px] opacity-100" style={{
    top: window.innerWidth === 1440 ? "-412px" : "-390px",
  }}/>
              </div>
              {/* Line Image */}
              {/* <img
              src={Line}
              alt="Line"
              className="absolute top-[-350px] w-full left-1/2 transform -translate-x-1/2 h-auto opacity-100" // Adjusted width and added centering classes
            /> */}
            </div>


            {/* CTA Button */}
            <button onClick={() => setIsModalOpen(true)} className="consultants_btn relative z-20 border border-white text-white px-[24px] py-[20px] rounded-[12px] 
                  font-Archivo text-[20px] font-semibold flex items-center justify-center gap-2 
                  w-[280px] h-[70px] mt-[115px] hover:bg-white hover:text-black 
                  transition-colors duration-300 whitespace-nowrap">
              Consult Our Experts
              <span className="text-4xl w-[50px]">→</span>
            </button>
          </div>
        </div>
      </div>


      <div className="w-full relative z-10 flex items-center m-auto">
        <TrustedBy />


      </div>


      <div className="innovate_sol relative z-10 mx-auto mt-[50px] overflow-hidden bg-[#061611]">
        {/* <img
            src={future}
            alt="About Tech Devise"
            className="w-full h-full object-cover rounded-[40px]"
          /> */}
        <TechAboutSection />
      </div>




      <ExperienceSection />

      <ResponsiveTechOffering />

      <div
        className="
    container 
    mx-auto 
    p-4 
    w-full 
    withh-macbook"
        style={{
          position: 'relative',
          height: 'auto',
          opacity: 1,
          borderRadius: '30px 10px 30px 10px',
        }}
      >
        <ServicesSection />
      </div>
      {/* <ServicesSection /> */}


      <div className="block_service relative flex justify-center items-center py-0 z-10 mt-0 md:mt-10">
        <BlockchainServices />
      </div>

      <TechSolutions />
      <SocialLinks />


      <div className="flex justify-center items-center">
        <IndustryVision />
      </div>

      <Testimonials />

      {/* Footer Section Fix */}
      <div className="relative bg-[#061611] py-0">
        <ContactForm />

      </div>
      <div className="relative">
        <LocationSection />
      </div>

      {/* Add extra space to prevent overlap */}
      {/* <div className="h-[100px]"></div> */}



    </main>
  );
}

export default Homepage;