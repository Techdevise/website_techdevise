import React from "react";
import '../styles/components/TechAboutSection.css'
import office from '../assets/office.png';

function TechAboutSection() {
    return (
        <div className="innovate relative  bg-[#061611] p-12  overflow-hidden">
            {/* <div className="absolute inset-0 border border-white rounded-[20px] opacity-10"></div>
            <div className="absolute inset-0 border border-green rounded-[20px] opacity-10"></div> */}
            {/* Left side with text */}
            <div className="main_first text-center md:text-left">
                <div className="inline-block mb-4">
                    <span style={{
                        display: "inline-table",
                        background: "linear-gradient(to right, #e0e0e0, #157B6C)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textFillColor: "transparent",
                        color: "#157B6C",
                    }} className="text-emerald-300 w-[100px] h-[44px] border border-[#2d4642] rounded-full px-6 py-2 text-[20] font-semibold">
                        About
                    </span>
                </div><br></br>
                <h1
                    style={{
                        display: 'inline-table',
                        background: "linear-gradient(to right, #e0e0e0, #157B6C)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textFillColor: "transparent",
                        color: "#157B6C",
                    }}
                    className="text-6xl font-extrabold leading-tight max-w-xl font-montserrat"
                >
                    <span className="whitespace-nowrap">Innovating the Future of</span> <br />
                    <span>Technology</span>
                </h1>

                <div className="text-white font-Montserrat text-base sm:text-[17px] md:text-[18px] lg:text-[19px] mt-5 space-y-4 max-w-7xl mx-auto tech_dessc">
  <p>
    At <span className="font-semibold">Tech Devise</span>possesses a professional team of experts! Our main objective is to satisfy<br className="hidden sm:block" /> our client needs. Our area of expertise is offering excellent services since we keep meeting<br className="hidden sm:block" />the needs of our clients even beyond the delivery term. We, at Tech Devise, work very<br className="hidden sm:block" />methodically to provide ultimate satisfaction to clients. Our work begins with a consultation<br className="hidden sm:block" />with our client. We understand your needs better and suggest you the best solution. This is<br className="hidden sm:block" />followed by development and implementation of your project. Upon delivery, we assure quality<br className="hidden sm:block" />support and maintenance
  </p>
  <p>
    At, Tech Devise our dynamic and innovative team works in a simple process. For us, knowing<br className="hidden sm:block" />the client's preferences and expectations is absolutely vital. Ensuring that the client and our<br className="hidden sm:block" />staff are in agreement depends mostly on effective communication. Once we have the brief<br className="hidden sm:block" />under grasp, we want to show a sketch before starting design. We ensure that the client is in<br className="hidden sm:block" />the loop throughout the process. There is constant support from our team until the end of the<br className="hidden sm:block" />project.
  </p>
</div>



            </div>

            <div className="second_main">
                <div className="relative bg-[#11211C] rounded-3xl p-8">
                    <div className="w-full h-full overflow-hidden rounded-2xl">
                        <img
                            src={office}
                            alt="Tech office space with world map and seating area"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechAboutSection;