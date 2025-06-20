import React, { useState, useEffect } from 'react';
import axios from 'axios';
  import '../styles/components/ArtificialIntelligence.css'

const AccelerateBusiness = () => {
  const [activeService, setActiveService] = useState('digitalAssurance');
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [services, setServices] = useState({
    digitalAssurance: {
      title: "Digital Assurance",
      description: "Coupling your digital assurance journey to quality",
      items: []
    },
    digitalEngineering: {
      title: "Digital Engineering",
      description: "Driving quality in enterprise platforms",
      items: []
    }
  });

  const BASE_URL = `${API_BASE_URL}/images`; 

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const [assuranceRes, engineeringRes] = await Promise.all([
          axios.get(`${API_BASE_URL}/api/digital_As`),
          axios.get(`${API_BASE_URL}/api/digital_Eng`)
        ]);

        if (assuranceRes.data.success && engineeringRes.data.success) {
          setServices({
            digitalAssurance: {
              title: "Digital Assurance",
              description: "Coupling your digital assurance journey to quality",
              items: assuranceRes.data.data
            },
            digitalEngineering: {
              title: "Digital Engineering",
              description: "Driving quality in enterprise platforms",
              items: engineeringRes.data.data
            }
          });
        }
      } catch (error) {
        console.error("Failed to fetch service data:", error);
      }
    };

    fetchServices();
  }, []);

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
        <div className="flex flex-wrap justify-center gap-4 mb-12 ">
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 servicesC">
          {services[activeService].items.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <div className="h-48 md:h-[23rem] overflow-hidden">
                <img
                  src={
                    item.image.startsWith('http')
                      ? item.image
                      : `${BASE_URL}${item.image}`
                  }
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <h4 className="text-[15px] md:text-[18px] font-semibold text-white">{item.name}</h4>
                  <p className="text-sm text-white">{item.message}</p>
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
