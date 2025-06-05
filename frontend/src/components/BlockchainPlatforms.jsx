import React from "react";
import '../styles/components/BlockchainPlatforms.css'
import Blockchainrrowblack from '../assets/Blockchainrrowblack.svg'
import polygon from "../assets/polygon.svg"
import telos from "../assets/telos.svg"
import coin from "../assets/coin.svg"
import eos from "../assets/eos.svg"
import xinfin from "../assets/xinfin.svg"
import aurora from "../assets/aurora.svg"
import ethereum from "../assets/ethereum.svg"
import solana from "../assets/solana.svg"
import avalanche from "../assets/avalanche.svg"
import cardano from "../assets/cardano.svg"

const logos = [
  polygon,
  telos,
  coin,
  eos,
  xinfin,
  aurora,
  ethereum,
  solana,
  avalanche,
  cardano
];

const BlockchainPlatforms = () => {
  return (
    <div className="new_plat w-full h-[800px] flex flex-col items-center justify-center px-4 mx-auto mt-8 sm:mt-20 lg:mt-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-Montserrat font-extrabold text-black leading-snug lg:leading-tight mb-4">
          Our Expertise In Blockchain Development <br /> Services Spans Multiple Platforms
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-base font-medium leading-relaxed">
          As a leading Blockchain development company, <span className="font-semibold">TechDevise</span> only hires Blockchain developers
          with a proven track record. That’s why we can handle any task or project, even the most
          complicated ones.
        </p>
      </div>

      <div className="w-full max-w-[1600px] mx-auto new_grid grid grid-cols-5 gap-6 mb-10">
        {logos.map((logo, index) => (
         <div
         key={index}
         className="plat_form w-full sm:w-[46%] md:w-[30%] lg:w-[250px] h-[200px] bg-white rounded-lg shadow-md flex items-center justify-center p-4"
       >
         <img src={logo} alt={`Logo ${index}`} className="max-h-full max-w-full object-contain" />
       </div>
       
        ))}
      </div>

      <button className="flex items-center w-auto h-auto pt-[8px] pr-[8px] pb-[8px] pl-[15px] gap-2 px-6 py-3 bg-black text-white font-semibold text-[16px] font-Montserrat rounded-full shadow hover:bg-gray-800 transition">
        Discover Our Supported Networks
       <div className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center">
                   <img src={Blockchainrrowblack} alt="blockchainarrow" className='w-4 h-4 text-black' />
                   </div>
      </button>
    </div>
  );
};

export default BlockchainPlatforms;
