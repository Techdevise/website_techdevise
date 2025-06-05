import React from 'react';
// import Navbar from '../layout/Navbar';
import LetsTalkForm from '../components/LetsTalkForm';
import LocationSection from './LocationSection';
import mapcontact from '../assets/mapcontact.png';
import lamp from '../assets/lamp.png';
import light from '../assets/light.png';
import LocationSection1 from '../components/LoctionSection1';

function ContactUs() {
    return (
        <div className="bg-white relative overflow-hidden">
            {/* <Navbar style={{ backgroundColor: 'white', color: 'black' }} /> */}
            <div
                className="w-full h-[546px] bg-[#061611] bg-cover bg-center flex items-center justify-center text-white font-Montserrat px-4 relative"
                style={{
                    backgroundImage: `url(${mapcontact})`,
                    backgroundSize: "736px 353px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center"
                }}>
                {/* Left lamp */}
                <img src={lamp} alt="Lamp" className="absolute top-[50px] left-[120px] w-[38px] z-10" />
                <img src={lamp} alt="Lamp" className="hidden sm:block absolute top-[10px] left-[200px] w-[38px] z-10" />
                <img src={light} alt="Light" className="absolute top-[50px] right-[120px] w-[38px] z-10" />
                <img src={light} alt="Light" className="hidden sm:block absolute top-[10px] right-[200px] w-[38px] z-10" />

                {/* Content */}
                <div className="flex flex-col items-center justify-center text-center mt-[30px] md:mt-0 px-4">
                    <h1
                        className="text-[28px] md:text-[48px] font-bold"
                        style={{
                            background: "linear-gradient(to right, #e0e0e0, #157B6C)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            textFillColor: "transparent"
                        }}
                    >
                        Contact Us
                    </h1>

                    <p className="mt-4 text-[14px] sm:text-[16px] md:text-[18px] font-semibold max-w-[800px] text-white">
                        Like to try our services or discuss your project with our consultant?
                        Feel free to contact us today and we will get back to you at the earliest.
                    </p>
                </div>

            </div>

            <div className='flex items-center justify-center mt-10 bg-[#fffff]'>
                <LetsTalkForm />
            </div>
            <div className='mt-10'>
                <LocationSection1 />
            </div>

        </div>
    );
}

export default ContactUs;
