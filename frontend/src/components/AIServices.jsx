import { ArrowRight } from "lucide-react"
import Aiserviceimg2 from "../assets/Aiserviceimg2.svg"

const AIServices = () => {
  const services = [
    "AI Consultation",
    "AI Software Development",
    "AI App Development",
    "Enterprise AI Solutions Development",
    "AI Chatbot Development Services",
    "Generative AI Development Services",
    "Computer Vision Applications",
    "Predictive Analytics",
    "Machine Learning Model Development",
  ]

  return (
    <div className="w-full max-w-[1680px] mx-auto px-4 py-16 bg-white">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Enhance Profitability with Our
          <br />
          Intelligent AI Development Services
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-sm md:text-base">
          At TechDevise, we specialize in delivering custom AI development solutions that cater to your business's
          unique needs. As a top AI development company, we ensure innovation meets practicality for every industry.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Services List */}
        <div className="w-full bg-teal-900 rounded-lg p-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-3 border-b border-teal-800 last:border-b-0"
            >
              <span className="text-white text-sm md:text-base">{service}</span>
              <ArrowRight className="text-white h-4 w-4" />
            </div>
          ))}
        </div>

        {/* Right Column - Featured Service */}
        <div className="w-full max-w-[1122px] bg-teal-900 rounded-lg overflow-hidden">
          <div className="relative">
            <img
              src={Aiserviceimg2}
              alt="AI visualization with person interacting with screens"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-white text-xl md:text-2xl font-bold mb-3">AI Consultation</h2>
              <p className="text-white text-sm md:text-base">
                Our experts guide you through the AI development process, helping you understand how AI can address your
                challenges. From concept to deployment, we provide insights into the stages of AI development for a
                clear roadmap for success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIServices
