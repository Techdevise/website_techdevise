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
    At <span className="font-semibold">Tech Devise</span>, we are passionate about delivering innovative technology solutions that<br className="hidden sm:block" />
    drive business success. With a team of highly skilled developers, designers, and IT experts,<br className="hidden sm:block" />
    we specialize in creating cutting-edge software, web applications, mobile apps, and enterprise<br className="hidden sm:block" />
    solutions tailored to meet your unique needs.
  </p>
  <p>
    Our mission is to empower businesses with scalable, secure, and efficient digital solutions<br className="hidden sm:block" />
    that enhance productivity and growth. We stay ahead of the curve by leveraging the latest<br className="hidden sm:block" />
    technologies, industry best practices, and a customer-centric approach to ensure<br className="hidden sm:block" />
    seamless digital transformation.
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