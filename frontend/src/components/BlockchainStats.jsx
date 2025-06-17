import React from "react";
import '../styles/components/BlockchainStats.css'
import Blockchainrrowblack from '../assets/Blockchainrrowblack.svg'

const BlockchainStats = () => {
  return (
    <div className="stats_block w-full h-auto m-auto py-25 flex flex-col items-center justify-center mt-8 sm:mt-20 lg:mt-20" style={{ background: 'linear-gradient(to right, #FDFDFD, #BBD2DC)' }}>
      <div className="text-center mb-10 px-2">
        <h1 className="text-[22px] font-Montserrat font-extrabold text-black leading-[1.3]
               sm:text-[32px] sm:leading-snug md:text-[42px] lg:text-[48px]">
          Let's Transform Your Operations with <br />
          TechDevise Custom Blockchain Development
        </h1>
        <p className="text-sm sm:text-base text-black font-Montserrat font-medium mt-4 sm:mt-6 max-w-full sm:max-w-[800px] mx-auto leading-relaxed">
          As a trusted Blockchain software development company with the experience of managing
          Blockchain projects of varied complexity levels, we offer expertise to turn your idea
          into secure, scalable and trusted solution.
        </p>
      </div>


      <div className="flex flex-wrap justify-center gap-6 mb-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="bg-[#DCE1FC] w-full sm:w-[280px] md:w-[320px] lg:w-[350px] xl:w-[400px] h-[130px] rounded-lg flex items-center px-6 shadow">
          <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-extrabold text-[#1f1f1f] mr-6 md:mr-10">150+</h2>
          <p className="text-[16px] md:text-[18px] lg:text-[21px] font-Montserrat font-medium text-[#1f1f1f]">Dynamic Blockchain Professional</p>
        </div>

        <div className="bg-[#FFEDEF] w-full sm:w-[280px] md:w-[320px] lg:w-[350px] xl:w-[400px] h-[130px] rounded-lg flex items-center px-6 shadow">
          <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-extrabold text-[#1f1f1f] mr-6 md:mr-10">50+</h2>
          <p className="text-[16px] md:text-[18px] lg:text-[21px] font-Montserrat font-medium text-[#1f1f1f]">Projects Successfully Deployed</p>
        </div>

        <div className="bg-[#E1FCDC] w-full sm:w-[280px] md:w-[320px] lg:w-[350px] xl:w-[400px] h-[130px] rounded-lg flex items-center px-6 shadow">
          <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-extrabold text-[#1f1f1f] mr-6 md:mr-10">85+</h2>
          <p className="text-[16px] md:text-[18px] lg:text-[21px] font-Montserrat font-medium text-[#1f1f1f]">Client Triumph and Success</p>
        </div>

        <div className="bg-[#FFF9E6] w-full sm:w-[280px] md:w-[320px] lg:w-[350px] xl:w-[400px] h-[130px] rounded-lg flex items-center px-6 shadow">
          <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-extrabold text-[#1f1f1f] mr-6 md:mr-10">98+</h2>
          <p className="text-[16px] md:text-[18px] lg:text-[21px] font-Montserrat font-medium text-[#1f1f1f]">Client Retention Rate</p>
        </div>
      </div>

      <button className="flex items-center w-auto h-auto pt-[8px] pr-[10px] pb-[8px] pl-[20px] gap-2 px-8 py-3  bg-black text-white font-semibold text-[16px] font-Montserrat rounded-full shadow hover:bg-gray-800 transition">
        Consult Our Experts
        <div className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center ml-2">
          <img src={Blockchainrrowblack} alt="blockchainarrow" className='w-4 h-4 text-black' />
        </div>
      </button>
    </div>
  );
};

export default BlockchainStats;
