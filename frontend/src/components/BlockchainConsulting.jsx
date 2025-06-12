import React, {useState} from 'react';
import '../styles/components/BlockchainConsulting.css'
import Consultingimage from '../assets/Consultingimage.svg';
import Enterpriseblockchain from "../assets/Enterpriseblockchain.svg";
import Integrationblockchain from '../assets/Integrationblockchain.svg';
import Layer1blockchain from '../assets/Layer1blockchain.svg';
import Layer2blockchain from '../assets/Layer2blockchain.svg';
import Ntfblockchain from '../assets/Ntfblockchain.svg';
import Web3blockchain from '../assets/Web3blockchain.svg';
import Vector from '../assets/Vector.svg'; 
import Lamp1 from '../assets/Lamp1.svg';
import Lamp2 from '../assets/Lamp2.svg';
import { ArrowLeft, ArrowRight } from 'lucide-react';


const slides = [
  {
    image: Consultingimage,
    heading: "Smart Contract\nDevelopment & Audit",
    description: `  Our smart contract development company designs and deploys self-executing contracts tailored to business needs. TechDevise smart contract development services ensure smooth functionality across blockchain networks.`,
  },
  {
    image: Enterpriseblockchain, 
    heading: "Enterprise Blockchain\nDevelopment",
    description: `Being a leading enterprise blockchain development company, we specialize in creating high-performance networks. By leveraging our enterprise blockchain development services, you can improve operational efficiency.`,
  },
  {
    image: Enterpriseblockchain, 
    heading: "Blockchain\nIntegration",
    description: `Our blockchain development solutions enable businesses to integrate distributed ledger technology with minimal disruption. Our custom blockchain development company ensures automation across multiple industries.`,
  },
  {
    image: Integrationblockchain, 
    heading: "Enterprise Blockchain\nDevelopment",
    description: `Our iOS development team ensures top-notch user interfaces combined with seamless backend integration.
    We build scalable and future-proof apps that resonate with your audience, helping you grow your brand
    effectively on iOS platforms.`,
  },
  {
    image: Layer1blockchain, 
    heading: "Layer 1 Blockchain\nDevelopment",
    description: `Being a top blockchain software development company, we create scalable networks with custom consensus mechanisms. This blockchain application development ensures security, efficiency, and flexibility for future growth.`,
  },
  {
    image: Layer2blockchain, 
    heading: "Layer 2 Blockchain\nDevelopment",
    description: `Our blockchain solutions development focuses on optimizing scalability through rollups and sidechains. Businesses can hire blockchain developers to create efficient Layer 2 solutions that improve network performance.`,
  },
  {
    image: Ntfblockchain, 
    heading: "NFT\nDevelopment",
    description: `Our NFT development company specializes in creating blockchain-based digital assets for gaming, art, and real estate. With NFT development services, businesses can build NFT marketplaces and mint tokens.`,
  },
  {
    image: Web3blockchain, 
    heading: "Web3\nDevelopment",
    description: `TechDevise Web3 development services include creating blockchain-powered platforms. Businesses seeking blockchain app development services can build Web3 applications that redefine user interaction and data privacy.`,
  },
];

const BlockchainConsulting = () => {
   const [currentSlide, setCurrentSlide] = useState(0);
  const goToPrevSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  
  const goToNextSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="blockchain_consultt w-full max-w-[1680px] mx-auto px-4 py-2 flex flex-col lg:flex-row gap-6 items-center lg:items-start">
      
      {/* Left Section Wrapper */}
      <div className="w-full lg:w-1/2 flex justify-center">
    <div className="w-full h-full">
      <img
        src={slides[currentSlide].image}
        alt="iOS Section"
        className="w-full max-w-[662px] h-auto lg:h-[620px] object-cover rounded-[20px] lg:rounded-[30px]"
      />
    </div>
  </div>
      {/* Right Section Wrapper with shadow */}
      <div className="w-full lg:w-[60%] h-full bg-white rounded-[20px] lg:rounded-[30px] shadow-lg flex items-center relative">
  <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[989px] h-auto lg:h-[620px] px-4 sm:px-6 md:px-10 lg:px-8 py-6 flex flex-col justify-center mx-auto">

    {/* Top Hanging Icons (hide on mobile) */}
    <div className="absolute top-0 right-4 sm:right-8 md:right-16 hidden lg:flex space-x-8">
      <img src={Lamp1} alt="hanging icon" className="h-[100px] md:h-[147px]" />
      <img src={Lamp2} alt="hanging icon" className="h-[120px] md:h-[180px]" />
    </div>

    {/* Icon Circle */}
    <div className="w-[80px] sm:w-[100px] md:w-[120px] h-[80px] sm:h-[100px] md:h-[120px] bg-[#157B6C] rounded-full flex items-center justify-center mb-6">
      <span className="w-[50px] sm:w-[60px] md:w-[77px] h-[50px] sm:h-[60px] md:h-[77px] text-white">
        <img src={Vector} alt="vector icon" />
      </span>
    </div>

    {/* Title */}
    <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-Montserrat font-extrabold text-black mb-4 leading-snug">
      {slides[currentSlide].heading.split('\n').map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < slides[currentSlide].heading.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}
    </h2>

    {/* Description */}
    <p className="text-[14px] sm:text-[16px] md:text-[18px] font-Montserrat font-medium text-black leading-relaxed mb-8">
      {slides[currentSlide].description}
    </p>

    {/* Navigation Buttons */}
    <div className="flex space-x-2 mt-6">
      <button
        onClick={goToPrevSlide}
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition"
      >
        <ArrowLeft size={18} />
      </button>
      <button
        onClick={goToNextSlide}
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#157B6C] text-white flex items-center justify-center hover:bg-[#0f5e53] transition"
      >
        <ArrowRight size={18} />
      </button>
    </div>
  </div>
</div>

    </div>
  );
  
};

export default BlockchainConsulting;
