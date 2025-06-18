import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import JobPosting from '../components/JobPosting';
import Careerspageimg from '../assets/Careerspageimg.svg';


function Careers1() {
  const location = useLocation();
  const job = location.state?.job;
  return (
    <div className="flex-grow bg-[#FAFAFA] relative overflow-hidden">
      <div
        className="w-full h-[546px] bg-[#061611] bg-cover bg-center flex items-center justify-center text-white font-Montserrat px-4 relative"
        style={{
          backgroundImage: `url(${Careerspageimg})`,
          backgroundSize: "100% 100",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center"
        }}
      >
        <div className="flex flex-col items-center justify-center text-center mt-[30px] md:mt-0 px-4">
          <h1 className="text-[28px] md:text-[48px] font-bold">Careers</h1>
        </div>
      </div>

      
      <div className="w-full max-w-[1680px] mt-10 px-4">
         {job ? (
        <JobPosting job={job} />
      ) : (
        <p className="text-center text-red-500">No job data available.</p>
      )}
      </div>
    </div>
  );
}


export default Careers1;
