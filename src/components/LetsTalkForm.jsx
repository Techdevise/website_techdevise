import React, { useState } from "react";
// import "../styles/pages/LetsTalkForm.css";
import Letstalkimg from "../assets/Letstalkimg.svg";

const customInputStyle = {
    boxShadow: `0 0 0 1px rgba(255, 255, 255, 1), 0 0 0 3px rgba(21, 123, 108, 0.1)`
};

const LetsTalkForm = () => {

    return (
        <div
            className="contact-wrapper w-full max-w-[1680px] h-auto bg-white text-white rounded-[10px] mx-auto md:p-16 flex flex-col md:flex-row relative shadow-xl"
            style={customInputStyle}>
            {/* Left Section */}
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex flex-col justify-center border-b md:border-b-0 mb-8 md:mb-0">
                <h2 className="font-Montserrat font-extrabold text-[#157B6C] text-[32px] md:text-[48px] mb-6 text-center md:text-left">
                    Let’s Talk
                </h2>
                <p className="opacity-100 font-Montserrat text-[20px] md:text-[36px] font-medium leading-[28px] md:leading-[48px] text-[#000000] mb-12 text-center md:text-left">
                    Let's connect and explore
                    <br />possibilities.</p>
                <img
                    src={Letstalkimg}
                    alt="fraLetstalkimg"
                    className="w-full max-w-[550px]"
                />
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 pl-0 md:pl-16">
                <h3 className="opacity-100 text-[32px] md:text-[32px] font-Montserrat font-bold text-[#000000] mb-8">
                    Please Share Your Details </h3>

                {/* Form */}
                <form className="contact_form grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="w-full p-4 bg-white rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px] shadow-xl" style={customInputStyle} />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full p-4 bg-white rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px]  shadow-xl" style={customInputStyle} />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-4 bg-white rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px] shadow-xl" style={customInputStyle}
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full p-4 bg-white rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px] shadow-xl" style={customInputStyle}
                    />
                    <input
                        type="date"
                        placeholder="Date"
                        className="w-full p-4 bg-white rounded-[10px] text-gray-400 outline-none font-Montserrat text-[16px] md:text-[18px]  shadow-xl" style={customInputStyle}

                    />

                    <input
                        type="time"
                        placeholder="Time"
                        className="w-full p-4 bg-white rounded-[10px] text-gray-400 outline-none font-Montserrat text-[16px] md:text-[18px]  shadow-xl" style={customInputStyle}

                    />

                    <select className="w-full p-4 bg-white rounded-[10px] text-gray-400 outline-none font-Montserrat text-[16px] md:text-[18px] shadow-xl" style={customInputStyle}>
                        <option value="">Natural of Work</option>

                        <option value="Entrepreneur">Entrepreneur</option>
                        <option value="Manager">Manager</option>
                        <option value="Director">Director</option>
                        <option value="Director">C-Level</option>
                        <option value="Student">Student</option>
                        <option value="Others">Others</option>


                    </select>
                    <select className="w-full p-4 bg-white rounded-[10px] text-gray-400 outline-none font-Montserrat text-[16px] md:text-[18px] shadow-xl" style={customInputStyle}>
                        <option value="">Purpose</option>
                        <option value="1 Month">Immediately</option>
                        <option value="3 Months">2-3 Months</option>
                        <option value="6 Months">4-6 Months</option>
                        <option value="6 Months">After 6 Months</option>
                        {/* <option value="6 Months">Schedule a Demo</option>
                        <option value="6 Months"></option> */}

                    </select>

                    {/* <div className="budget-bg col-span-2">
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
                    </div> */}
                    <textarea
                        placeholder="Message"
                        className="col-span-2 w-full p-4 bg-white rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px] h-[150px] shadow-xl" style={customInputStyle}>

                    </textarea>

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

export default LetsTalkForm;