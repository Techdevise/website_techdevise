import React, { useState } from 'react';
import QAAdvi from '../assets/QAAdvi.png';
import AIPowered from '../assets/AIPowered.png';
import QualityEng from '../assets/QualityEng.png';
import Next_Gen from '../assets/Next Gen.png';
import EeterPriceApp from '../assets/EeterPriceApp.png';
import DataAnalys from '../assets/DataAnalys.png';
import Automationtesting from '../assets/Automationtesting.png';
import QAAI from '../assets/QAAI.png';

const AccelerateBusiness = () => {
  const [activeService, setActiveService] = useState('digitalAssurance');

  const services = {
    digitalAssurance: {
      title: "Digital Assurance",
      description: "Coupling your digital assurance journey to quality",
      items: [
        { name: "QA Advisory", title: "Guiding your digital assurance journey to excellence.", image: QAAdvi },
        { name: "AI Powered Testing", title: "Smarter, faster, more reliable.", image: AIPowered },
        { name: "Quality Engineering", title: "Quality assured through our comprehensive services.", image: QualityEng },
        { name: "Next Gen Applications Testing", title: "Assuring tomorrow's solutions, today.", image: Next_Gen },
        { name: "Enterprise Applications Testing", title: "Driving quality in enterprise platforms.", image: EeterPriceApp },
        { name: "Data & Analytics Testing", title: "Smarter, faster, more reliable.", image: DataAnalys },
        { name: "Automation Testing", title: "Scale with speed, express with quality.", image: Automationtesting },
        { name: "QA for AI Systems", title: "Reliable AI systems with Comprehensive QA.", image: QAAI },
      ]
    },
    digitalEngineering: {
      title: "Digital Engineering",
      description: "Driving quality in enterprise platforms",
      items: [
        { name: "Quality Engineering", title: "Quality assured through our comprehensive services.", image: QualityEng },
        { name: "Enterprise Data & Analytics", title: "Smarter, faster, more reliable.", image: DataAnalys },
        { name: "Automation Testing", title: "Scale with speed, express with quality.", image: Automationtesting }
      ]
    },
  };

  return (
    <div className="relative w-full max-w-[1680px] bg-white mx-auto px-4 md:px-8 lg:px-8 py-12">
      <div className="w-full max-w-[1680px] mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
      <button
  className="text-lg md:text-sm font-semibold text-white mb-4 rounded-xl px-6 py-2 hover:opacity-90 transition-colors duration-300"
  style={{ background: "linear-gradient(to bottom, #0B6F4F, #000000)" }}
>
  What We Do
</button>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Accelerate your business</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            With an emphasis on digital business transformation, we consult and implement programs aimed at 
            strengthening enterprises in the present while ensuring preparedness for the future.
          </p>
        </div>

        {/* Services Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(services).map((serviceKey) => (
            <button
              key={serviceKey}
              onClick={() => setActiveService(serviceKey)}
              className={`px-6 py-3 rounded-lg font-medium text-lg transition ${
                activeService === serviceKey
                  ? 'bg-[#02574B] text-white'
                  : 'border border-[#02574B] text-[#02574B]'
              }`}
            >
              {services[serviceKey].title}
            </button>
          ))}
        </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
  {services[activeService].items.map((item, index) => (
    <div 
      key={index} 
      className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      <div className="h-48 md:h-[23rem] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <h4 className="text-[20px] font-semibold text-white">{item.name}</h4>
          <p className="text-sm text-white">{item.title}</p>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default AccelerateBusiness;