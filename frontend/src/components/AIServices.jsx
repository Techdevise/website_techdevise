import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import axios from "axios";

const AIServices = () => {
  const [services, setServices] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const fetchAIServices = async () => {
      try {
        const response = await axios.get("http://localhost:9090/api/ai_service"); 
        if (response.data.success) {
          setServices(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching AI services:", error);
      }
    };

    fetchAIServices();
  }, []);

  const selectedService = services[selectedIndex];

  return (
    <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 bg-white">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
          Enhance Profitability with Our<br className="hidden sm:block" />
          Intelligent AI Development Services
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-sm sm:text-base">
          At TechDevise, we specialize in delivering custom AI development solutions that cater to your business's
          unique needs. As a top AI development company, we ensure innovation meets practicality for every industry.
        </p>
      </div>

      {/* Only show if services are loaded */}
      {services.length > 0 && (
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          {/* Left - Tabs */}
          <div
            className="w-full lg:w-[30%] bg-teal-900 rounded-lg p-4 md:p-6 overflow-y-auto max-h-[500px] lg:max-h-none"
            style={{
              background: "linear-gradient(to right, #005163, #01090A)",
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`flex justify-between items-center py-3 px-2 md:px-3 border-b border-teal-800 last:border-b-0 cursor-pointer transition duration-300 hover:bg-teal-800 rounded ${
                  selectedIndex === index ? "bg-teal-800 rounded-md" : ""
                }`}
              >
                <span className="text-white text-sm sm:text-base">
                  {service.title}
                </span>
                <ArrowRight className="text-white h-4 w-4" />
              </div>
            ))}
          </div>

          {/* Right - Content */}
          <div
            className="w-full lg:w-[70%] bg-teal-900 rounded-lg overflow-hidden"
            style={{
              background: "linear-gradient(to right, #005163, #01090A)",
            }}
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={`http://localhost:9090/images${selectedService?.image}`}
                alt={selectedService?.title}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-[22rem] object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                {selectedService?.title}
              </h2>
              <p className="text-white text-sm sm:text-base">
                {selectedService?.message}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIServices;
