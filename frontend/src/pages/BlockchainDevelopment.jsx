import React from 'react'
import { ArrowRight } from "lucide-react"
import BlockchainService from '../components/BlockchainService'
import BlockchainConsulting from '../components/BlockchainConsulting'
import BlockchainSolution from '../components/BlockchainSolution'
import BlockchainFeatures from '../components/BlockchainFeatures'
import BlockchainStats from '../components/BlockchainStats'
import BlockchainPlatforms from '../components/BlockchainPlatforms'
import BlockchainBlogGrid from '../components/BlockchainBlogGrid'
import Blockchainbanner from '../assets/Blockchainbanner.svg'
import Vedioimg from '../assets/Vedioimg.png';
import blockchainarrow from '../assets/blockchainarrow.svg'
import { motion } from "framer-motion";
import { Play } from "lucide-react";


function BlockchainDevelopment() {
    return (
        <main className="w-full bg-[#FAFAFA]">
       <div></div>
        <section
            className="relative w-full h-[736px] flex items-center justify-center bg-[#000000] bg-cover bg-center"
            style={{ backgroundImage: `url(${Blockchainbanner})` }}
        >
            <div className="absolute inset-0 bg-black opacity-80"></div>

            {/* <div className="absolute inset-0 bg-black opacity-14"></div> */}

            {/* Content */}
            <div className="relative text-center text-white px-6 max-w-4xl z-10 flex flex-col items-center justify-center h-full gap-6">

  <div className="flex justify-center mt-20 md:mt-0">
    <button className="bg-opacity-20 p-5 hover:bg-opacity-40">
      <div className="relative flex items-center justify-center">
  
        <motion.div
          className="absolute w-20 h-20 rounded-full border-2 border-white"
          animate={{
            scale: [1, 1.2],
            opacity: [0.7, 0.3],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="relative w-16 h-16 rounded-full bg-white flex items-center justify-center z-10 shadow-md">
          <Play className="text-violet-500 w-6 h-6" />
        </div>
      </div>
    </button>
  </div>

  <h1 className="text-[42px] font-Montserrat font-extrabold">
    Blockchain Development Company
  </h1>
  <p className="text-lg leading-relaxed max-w-2xl">
    With expertise in over 40 blockchain protocols, we are leading the charge toward the web3 future with our advanced blockchain development services.
  </p>

  <button className="flex items-center w-auto h-auto pt-[8px] pr-[10px] pb-[8px] pl-[20px] gap-2 bg-[#58C7B4] hover:bg-[#25a892] text-white text-[16px] font-Montserrat font-medium px-6 py-3 rounded-full transition-colors">
    <span>Consult Our Experts</span>
    <div className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center ml-5">
      <img src={blockchainarrow} alt="blockchainarrow" className="w-4 h-4" />
    </div>
  </button>
            </div>
        </section>

      
       
      <div>
      <BlockchainService />
      </div>
    <div className='mt-10'>
    <BlockchainConsulting />
    </div>
    <div className='mt-8 sm:mt-20 lg:mt-20'>
    <BlockchainSolution />
    </div>
    <div>
    <BlockchainFeatures />
    </div>
    <div>
    <BlockchainStats />
    </div>
    <div>
    <BlockchainPlatforms />
    </div>
    <div>
    <BlockchainBlogGrid />
    </div>

          </main>

    );
}

export default BlockchainDevelopment