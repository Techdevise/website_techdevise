import { ArrowUpRight } from "lucide-react"
import "../styles/pages/ServicesSection.css"
import ServiceCard from "./ServiceCard"
import web from "../assets/web.svg"
import ecommerce from "../assets/ecommerce.svg"
import digital from "../assets/digital.svg"
import quality from "../assets/quality.svg"
import mobile from "../assets/mobile.svg"
import uiux from "../assets/uiux.svg"
export default function ServicesSection() {
  return (
    <div className="services-section w-full max-w-[1680px] px-4 py-8 md:p-6 bg-[#061611] mx-auto md:ml-0 flex flex-col">
      {/* Services Header */}
      <div className="services-main w-full max-w-[810px] p-4 md:h-[229px] mx-auto text-center mb-8 border border-[#529D92] rounded-[16px] md:rounded-[26px] opacity-100">
        <h2
          style={{
            display: "inline-table",
            background: "linear-gradient(to right, #E0E0E0, #157B6C)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            color: "#157B6C",
          }}
          className="text-3xl md:text-5xl font-bold text-white mt-[20px] md:mt-[40px]"
        >
          Our <span className="text-emerald-400">Services</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-sm md:text-base">
          At Tech Devise, we provide cutting-edge IT solutions designed to drive innovation, efficiency, and security
          for businesses of all sizes. Our expertise spans across multiple domains, ensuring that your technology needs
          are met with precision and excellence.
        </p>
      </div>
      <div className="new_main_flx">
        {/* Website Development */}
        <div className="develop">
          <ServiceCard
            title="Website Development"
            description="Enhance your brand's presence with our creative digital marketing tools! Engage your audience and see your business grow."
            topColor="#67C792"
            bottomColor="#3AAD6E"
            imagePath={web}
          />
        </div>
        <div className=" develop w-full md:w-[810px] h-auto md:h-[229px] bg-[#99EAE0] text-black rounded-3xl md:rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-lg md:mt-[250px]">
          {/* Text Content */}
          <div className="new_seec_serv w-full md:w-1/2 p-4 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold">E-commerce Website</h3>
            <p className="mt-2 text-gray-800 text-sm md:text-base">
              Enhance your brand's presence with our creative digital marketing tools! Engage your audience and see your business grow.
            </p>
            <button className="flex items-center mt-4 font-semibold text-black text-sm md:text-base">
              More information
              <span className="ml-2 bg-white rounded-full p-1">
                <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
              </span>
            </button>
          </div>
          <div className="new_seec_serv w-full md:w-1/2 flex items-center justify-center bg-[#5DC6B9] p-4"  style={{
    background: 'linear-gradient(to left, #5DC6B9 0%, #5DC6B9 40%, #99EAE0 40%, #99EAE0 100%)',
  }}>
            <img
              src={ecommerce || "/placeholder.svg"}
              alt="E-commerce Illustration"
              className="w-[200px] h-[290px] md:w-[200px] md:h-[200px] object-contain"
            />
          </div>
        </div>
        {/* Digital Marketing */}
        <div className="develop">
          <ServiceCard
            title="Digital Marketing"
            description="Enhance your brand's presence with our creative digital marketing tools! Engage your audience and see your business grow."
            topColor="#DEEA99"
            bottomColor="#B1BF62"
            imagePath={digital}
          />
        </div>
        {/* Quality Analysis */}
        <div className="develop ">
          <ServiceCard
            title="Quality Analysis"
            description="Enhance your brand's presence with our creative digital marketing tools! Engage your audience and see your business grow."
            topColor="#99CBEA"
            bottomColor="#76B6DE"
            imagePath={quality}
          />
        </div>
        {/* Mobile Application development */}
        <div className="develop">
          <ServiceCard
            title="Mobile Application development"
            description="Enhance your brand's presence with our creative digital marketing tools! Engage your audience and see your business grow."
            topColor="#EA99B9"
            bottomColor="#DD7AA2"
            imagePath={mobile}
          />
        </div>
        {/* UI/UX Design */}
        <div className="develop">
          <ServiceCard
            title="UI/UX Design"
            description="Enhance your brand's presence with our creative digital marketing tools! Engage your audience and see your business grow."
            topColor="#EA9C99"
            bottomColor="#D67F7C"
            imagePath={uiux}
          />
        </div>
      </div>
    </div>
  )
}