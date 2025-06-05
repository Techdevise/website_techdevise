import managementimage from "../assets/managementimage.png"
import '../styles/components/ContentManagementSystem.css'
import teamcollaboration from "../assets/teamcollaboration.png"

const ContentManagementSystem = () => {
  return (
    <div className="cms-container w-full h-auto bg-[#FAFAFA] px-4 sm:px-6 md:px-12 lg:px-24 pb-10 flex flex-col items-center justify-center text-center">
      {/* Heading Section */}
      <div className="text-center mt-50 mb-6 md:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-extrabold font-Montserrat text-black leading-tight">
          Content Management System
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-[18px] font-Montserrat text-black max-w-5xl mx-auto mt-4 px-2">
          <strong>Tech Devise</strong> possesses a professional team of experts! Our primary goal is to meet the
          requirements of our clients. We specialize in providing top-notch services as we continue to cater to the
          needs of our customers even after the delivery period.
        </p>
      </div>
      <div className="w-full max-w-[1680px] flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 relative">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="content_image w-full lg:w-[870px] relative">
            <img
              src={managementimage || "/placeholder.svg"}
              alt="Business Meeting"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full lg:w-[850px]">
            <img
              src={teamcollaboration || "/placeholder.svg"}
              alt="Team Collaboration"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="play_btn absolute inset-0 flex items-center justify-center pointer-events-none lg:ml-7">
          <button className="w-16 h-16 sm:w-20 sm:h-20 md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] bg-white rounded-full shadow-md border-[6px] border-[#157B6C] flex items-center justify-center pointer-events-auto">
            <span className="text-red-600 text-xl sm:text-2xl md:text-3xl">▶</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContentManagementSystem
