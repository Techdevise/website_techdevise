import React from 'react'
import TrustedBy from "../pages/TrustedBy"
import AiSolutionsSection from '../components/AiSolutionsSection'
import AIServices from '../components/AIServices'
import AIStatsSection from '../components/AIStatsSection'
import ModelsAideveloper from '../components/ModelsAideveloper'
import ModelsTabsSection from '../components/ModelsTabsSection'
import AIPillars from '../components/AIPillars'
import AiTechStack from '../components/AiTechStack'
import Blockchainbanner from '../assets/Blockchainbanner.svg'
import Vedioimg from '../assets/Vedioimg.png';


function AiDevelopment() {
    return (
        <main className="w-full">
       <div></div>
        <section
            className="relative w-full h-[736px] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${Blockchainbanner})` }}
        >
            {/* <div className="absolute inset-0 bg-black opacity-14"></div> */}

            {/* Content */}
            <div className="relative text-center text-white px-6 max-w-4xl z-10">
                <button className="absolute top-[-70px] left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 p-5 rounded-full hover:bg-opacity-40">
                    <img src={Vedioimg} alt="Video" className="w-10 h-10" />
                </button>
                <h1 className="text-[42px] font-Montserrat font-extrabold mb-4 mt-10">
                Best Ai Development Company
                </h1>
                <p className="text-lg leading-relaxed mb-6">
                With expertise in over 40 blockchain protocols, we are leading the charge toward the web3 future with our advanced blockchain development services.
                </p>
                <button className="bg-[#157B6C] px-6 py-3 rounded-full text-white text-lg font-medium hover:bg-[#145e54] transition">
                  Consult Our Experts
                </button>
            </div>
        </section>
        <div>
        <TrustedBy />
        </div>
        <div>
            <AiSolutionsSection />
        </div>
        <div>
        <AIServices />
        </div>
        <div>
        <AIStatsSection />
        </div>
        <div>
            <ModelsAideveloper />
        </div>
        <div>
            <ModelsTabsSection />
        </div>
        <div>
            <AIPillars />
        </div>
        <div>
        <AiTechStack />
        </div>


          </main>

    );
}

export default AiDevelopment