import React from "react";
const MobileTechOffering = () => {
    return (
      <div className="text-white p-6 md:p-8 lg:p-10 w-full max-w-md mx-auto">
        <h2 style={{
                        display: "inline-table",
                        background: "linear-gradient(to right, #E0E0E0, #157B6C)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textFillColor: "transparent",
                        color: "#157B6C",
                    }} className="text-center text-[22px] md:text-6xl font-Montserrat font-extrabold mb-6">
          <span className="text-white">Our Tech Offerings - </span>
          <span className="text-teal-300">Tailored to Your Time Zone and Business Needs</span>
        </h2>
  
        <div className="space-y-4">
          {/* Card 1 */}
          <div className="bg-[#0F261E] rounded-[30px] p-5 text-center w-full">
            <h3 className="text-xl font-Montserrat font-bold mb-2">Staff Augmentation</h3>
            <p className="text-sm">
              Hire pre-vetted developers skilled in the latest technologies, ready to work around the clock to meet your
              project needs.
            </p>
          </div>
  
          {/* Card 2 */}
          <div className="bg-[#0F261E] rounded-[30px] p-5 text-center">
            <h3 className="text-xl font-Montserrat font-bold mb-2">Build your offshore development team</h3>
            <p className="text-sm">
              At TechDevise, setting up dedicated software development team is quick and hassle-free, completed in just
              four simple steps.
            </p>
          </div>
  
          {/* Card 3 */}
          <div className="bg-[#0F261E] rounded-[30px] p-5 text-center">
            <h3 className="text-xl font-Montserrat font-bold mb-2">Build your offshore development team</h3>
            <p className="text-sm">
              At TechDevise, setting up dedicated software development team is quick and hassle-free, completed in just
              four simple steps.
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  export default MobileTechOffering
  