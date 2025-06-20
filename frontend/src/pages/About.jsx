import React from 'react'
// import Navbar from '../layout/Navbar'
// import Footer from '../layout/Footer'
import TeamShowcase from './TeamShowcase'
import LocationSection from './LocationSection'
import OpenPositions from './OpenPositions'
import TeamSection from './TeamSection'
import ITExperts from './ITExperts'
import teams from "../assets/teamimg.svg";
import LocationSection1 from '../components/LoctionSection1'

function About() {
    return (
        <div>
          
           <div
  className="relative w-full min-h-[500px] sm:min-h-[700px] md:min-h-[900px] lg:min-h-[1100px] xl:min-h-[1220px] mx-auto mb-[50px] bg-no-repeat bg-center bg-cover"
  style={{
    backgroundImage: `url(${teams})`,
  }}
>
                {/* Overlay Text and Content */}
              {/* Overlay Text Section */}
<div className="absolute bottom-0  left-0 w-[1680px] bg-black/50 p-6 sm:p-10 md:h-[270px] h-[165px]">

<div className="pl-[200px] pt-[45px]"> {/* Adjust this value as needed */}
    <h2 className="text-2xl sm:text-3xl md:text-3xl text-white mb-2 sm:mb-4">
      We Believe in the Power of
    </h2>
    <h1 className="text-[70px] sm:text-4xl md:text-[80px] font-bold text-white">
      Ideas, Innovation, and People
    </h1>
  </div>
</div>

{/* Stats Section */}
<div className="absolute bottom-0 right-0 w-full sm:w-[550px]  md:h-[270px] h-[165px] bg-[#157B6C] text-white p-6 sm:p-8 grid grid-cols-2 gap-4 text-center sm:text-left">
  <div>
    <h3 className="text-xl sm:text-3xl font-bold">10</h3>
    <p className="text-sm sm:text-base">Years of Experience</p>
  </div>
  <div>
    <h3 className="text-xl sm:text-3xl font-bold">20+</h3>
    <p className="text-sm sm:text-base">Countries Served</p>
  </div>
  <div>
    <h3 className="text-xl sm:text-3xl font-bold">20+</h3>
    <p className="text-sm sm:text-base">Tech Enthusiast</p>
  </div>
  <div>
    <h3 className="text-xl sm:text-3xl font-bold">20+</h3>
    <p className="text-sm sm:text-base">Product Delivered</p>
  </div>
</div>

            </div>
            <TeamShowcase />
            <OpenPositions />
            <TeamSection />
            <ITExperts />
            <LocationSection1 />
            {/* <div className="relative text-white py-12 px-6 md:px-20">
             

            </div> */}
        </div>
    )
}

export default About
