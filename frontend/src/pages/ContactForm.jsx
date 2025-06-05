import React, { useState } from "react";
import '../index.css'
import "../styles/pages/ContactForm.css";
import Contactformimg from "../assets/Contactformimg.svg";

const ContactForm = () => {
    const [budget, setBudget] = useState(20000);

    return (
        <div className="contact-wrapper max-w-[1680px] h-auto bg-[#061611] text-white rounded-[10px] mx-auto md:p-8 flex flex-col md:flex-row border border-[#529D92] w-macbook">
          
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#1E3D32] mb-8 md:mb-0">
                <h2 style={{
                    display: 'inline-table',
                    background: "linear-gradient(to right, #e0e0e0, #157B6C)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                    color: "#157B6C",
                }} className="font-Montserrat font-extrabold text-[32px] md:text-[48px] text-[#D7E8E6] text-[#157B6C] mb-6 text-center md:text-left">
                    Let’s <span className="text-[#4ADE80]">Talk</span>
                </h2>
                <p className="partner_form text-white text-[24px] font-Montserrat md:text-[36px] font-bold leading-[32px] md:leading-[44px] text-center md:text-left mb-2">
  Partner with tech catalysts who transform ideas into impact.
</p>
<p className="text-white text-[24px] font-Montserrat font-bold md:text-[18px] text-center md:text-left">
  Book your free consultation with us.
</p>

                <img
                    src={Contactformimg}
                    alt="Contactformimg"
                    className="w-full max-w-[500px] mt-20"
                />
            </div>

          
            <div className="w-full md:w-1/2 pl-0 md:pl-16">
                <h3 className="opacity-100 text-[28px] md:text-[32px] font-Montserrat font-bold text-[#FFFFFF] mb-8">
                    Speak with our Experts
                </h3>

               
                <form className="contact_form grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px] border border-[#529D92]" />
                    <input
                        type="email"
                        placeholder="Business Email"
                        className="w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px] border border-[#529D92]" />
                    <input
                        type="text"
                        placeholder="Mobile Number"
                        className="w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px] border border-[#529D92]" />
                    <input
                        type="text"
                        placeholder="Company Name"
                        className="w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px] border border-[#529D92]" />
                    <select className="w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px] border border-[#529D92]">
                        <option value="">Job Title</option>

                        <option value="Entrepreneur">Entrepreneur</option>
                        <option value="Manager">Manager</option>
                        <option value="Director">Director</option>
                        <option value="Director">C-Level</option>
                        <option value="Student">Student</option>
                        <option value="Others">Others</option>


                    </select>
                    <select className="w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px] border border-[#529D92]">
                        <option value="">Launch Timeline?</option>
                        <option value="1 Month">Immediately</option>
                        <option value="3 Months">2-3 Months</option>
                        <option value="6 Months">4-6 Months</option>
                        <option value="6 Months">After 6 Months</option>
                        {/* <option value="6 Months">Schedule a Demo</option>
                        <option value="6 Months"></option> */}

                    </select>

                    <div className="budget-bg col-span-2">
                        <label className="block text-[#ffffff] mb-2">Budget</label>
                        <div className="flex items-center gap-4">
                            <input
                                type="range"
                                min="1000"
                                max="100000"
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                                className="w-full rounded-lg"
                                style={{ background: "#157B6C" }}
                            />
                            <span className="text-lg md:text-2xl font-medium">${budget.toLocaleString()}</span>
                        </div>
                    </div>
                    <textarea
                        placeholder="Message"
                        className="col-span-2 w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px] h-[150px] border border-[#529D92]"
                    ></textarea>

                    <div className="col-span-2 flex justify-start">
                        <button
                            type="submit"
                            className="bg-[#FFFFFF] text-[#137365] font-bold py-4 px-12 rounded-lg hover:bg-[#3BC46F] transition-colors shadow-md hover:text-white hover:bg-green-700 transition-all duration-300 hover:scale-105"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;