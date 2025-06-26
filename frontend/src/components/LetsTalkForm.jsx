import React, { useState } from "react";
import Letstalkimg from "../assets/Letstalkimg.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customInputStyle = {
  boxShadow: `0 0 0 1px rgba(255, 255, 255, 1), 0 0 0 3px rgba(21, 123, 108, 0.1)`
};

const LetsTalkForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    job_title: "",
    launch_timeline: "",
    message: ""
  });
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  // const API_CONTACT_US = `${API_BASE_URL}/contact_us`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Format time: HH:mm -> HH:mm:00
  const formattedTime = formData.time ? `${formData.time}:00` : "";

  // Format date: YYYY-MM-DD -> DD-MM-YYYY
  let formattedDate = "";
  if (formData.date) {
    const [year, month, day] = formData.date.split("-");
    formattedDate = `${day}-${month}-${year}`;
  }

  const payload = {
    ...formData,
    date: `${formattedTime}, ${formattedDate}` 
  };

  try {
    const res = await fetch(`${API_BASE_URL}/api/contact_us`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Form submitted successfully!");

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        job_title: "",
        launch_timeline: "",
        message: ""
      });
    } else {
      toast.error("Error: " + data.message);
    }
  } catch (err) {
    console.error("Form submit error:", err);
    toast.error("Something went wrong.");
  }
};

  return (
    <div
      className="contact-wrapper w-full max-w-[1680px] h-auto bg-white text-white rounded-[10px] mx-auto md:p-16 flex flex-col md:flex-row relative shadow-xl"
      style={customInputStyle}>
      <ToastContainer />
      <div className="w-full md:w-1/2 pr-0 md:pr-16 flex flex-col justify-center border-b md:border-b-0 mb-8 md:mb-0">
        <h2 className="font-Montserrat font-extrabold text-[#157B6C] text-[32px] md:text-[48px] mb-6 text-center md:text-left">
          Let’s Talk
        </h2>
        <p className="opacity-100 font-Montserrat text-[20px] md:text-[36px] font-medium leading-[28px] md:leading-[48px] text-[#000000] mb-12 text-center md:text-left">
          Let's connect and explore
          <br /> possibilities.
        </p>
        <img
          src={Letstalkimg}
          alt="Letstalkimg"
          className="w-full max-w-[550px]"
        />
      </div>

      <div className="w-full md:w-1/2 pl-0 md:pl-16">
        <h3 className="text-[32px] font-Montserrat font-bold text-[#000000] mb-8">
          Please Share Your Details
        </h3>

        {/* Form */}
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          <input
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            type="text"
            placeholder="First Name"
            className="w-full p-4 bg-white rounded-[10px] text-black outline-none font-Montserrat text-[16px] md:text-[18px] shadow-xl"
            style={customInputStyle} required
          />
          <input
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            type="text"
            placeholder="Last Name"
            className="w-full p-4 bg-white rounded-[10px] text-black outline-none font-Montserrat text-[16px] md:text-[18px] shadow-xl"
            style={customInputStyle} required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="w-full p-4 bg-white rounded-[10px] text-black outline-none font-Montserrat text-[16px] md:text-[18px] shadow-xl"
            style={customInputStyle} required
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="text"
            placeholder="Phone Number"
            className="w-full p-4 bg-white rounded-[10px] text-black outline-none font-Montserrat text-[16px] md:text-[18px] shadow-xl"
            style={customInputStyle} required
          />
          <input
            name="date"
            value={formData.date}
            onChange={handleChange}
            type="date"
            className="w-full p-4 bg-white rounded-[10px] text-gray-400 outline-none font-Montserrat text-[16px] md:text-[18px] shadow-xl"
            style={customInputStyle} required
          />
          <input
            name="time"
            value={formData.time}
            onChange={handleChange}
            type="time"
            className="w-full p-4 bg-white rounded-[10px] text-gray-400 outline-none font-Montserrat text-[16px] md:text-[18px] shadow-xl"
            style={customInputStyle} required
          />

        
          <select
            name="job_title"
            value={formData.job_title}
            onChange={handleChange}
            className="w-full p-4 bg-white rounded-[10px] text-gray-400 outline-none font-Montserrat text-[16px] md:text-[18px] shadow-xl"
            style={customInputStyle} required
          >
            <option value="">Nature of Work</option>
            <option value="1">Entrepreneur</option>
            <option value="2">Manager</option>
            <option value="3">Director</option>
            <option value="4">C-Level</option>
            <option value="5">Student</option>
            <option value="6">Others</option>
          </select>

         
          <select
            name="launch_timeline"
            value={formData.launch_timeline}
            onChange={handleChange}
            className="w-full p-4 bg-white rounded-[10px] text-gray-400 outline-none font-Montserrat text-[16px] md:text-[18px] shadow-xl"
            style={customInputStyle} required
          >
            <option value="">Purpose</option>
            <option value="1">Immediately</option>
            <option value="2">2-3 Months</option>
            <option value="3">4-6 Months</option>
            <option value="4">After 6 Months</option>
          </select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="col-span-2 w-full p-4 bg-white rounded-[10px] text-black outline-none font-Montserrat text-[16px] md:text-[18px] h-[150px] shadow-xl"
            style={customInputStyle} required
          />

          <div className="col-span-2 flex justify-start">
            <button
              type="submit"
              className="bg-[#FFFFFF] text-[#137365] font-bold py-4 px-12 rounded-lg hover:bg-green-700 hover:text-white transition-all duration-300 hover:scale-105 shadow-md"
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

