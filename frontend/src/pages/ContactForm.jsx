import React, { useState, useEffect } from "react";
import '../index.css'
import "../styles/pages/ContactForm.css";
import Contactformimg from "../assets/Contactformimg.svg";




const Toast = ({ message, isVisible, onClose, type = "success" }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!isVisible) return null

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500"

  return (
    <div
      className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-[60] animate-in slide-in-from-top-2`}
    >
      <div className="flex items-center gap-2">
        <span>{type === "success" ? "✓" : "✗"}</span>
        <span>{message}</span>
        <button onClick={onClose} className="ml-2 text-white hover:text-gray-200">
          ×
        </button>
      </div>
    </div>
  )
}
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const ContactForm = () => {
  const [budget, setBudget] = useState(20000)

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    company_name: "",
    job_title: "",
    launch_timeline: "",
    budget: "20000",
    message: "",
  })

  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
    type: "success",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [experts, setExperts] = useState([])

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/experts`)
        if (response.ok) {
          const data = await response.json()
          setExperts(data)
          console.log("Experts data:", data)
        } else {
          console.error("Failed to fetch experts")
        }
      } catch (error) {
        console.error("Error fetching experts:", error)
      }
    }

    fetchExperts()
  }, [])
  

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleBudgetChange = (e) => {
    const value = e.target.value
    setBudget(value)
    setFormData((prev) => ({
      ...prev,
      budget: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Prepare payload for API
      const payload = {
        fullname: formData.fullname,
        email: formData.email,
        phone: formData.phone,
        company_name: formData.company_name,
        job_title: formData.job_title,
        launch_timeline: formData.launch_timeline,
        budget: formData.budget,
        message: formData.message,
      }

      console.log("Submitting payload:", payload)

      const response = await fetch(`${API_BASE_URL}/api/experts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()
      console.log("API Response:", result)

      if (response.ok && result.success) {

        setToast({
          isVisible: true,
          message: result.message || "Form submitted successfully!",
          type: "success",
        })
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          company_name: "",
          job_title: "",
          launch_timeline: "",
          budget: "20000",
          message: "",
        })
        setBudget(20000)
      } else {
        throw new Error(result.message || "Failed to submit form")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setToast({
        isVisible: true,
        message: "Error submitting form. Please try again.",
        type: "error",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const hideToast = () => {
    setToast({
      isVisible: false,
      message: "",
      type: "success",
    })
  }

    return (
        <div className="contact-wrapper max-w-[1680px] h-auto bg-[#061611] text-white rounded-[10px] mx-auto md:p-8 flex flex-col md:flex-row border border-[#2d4642] w-macbook">
          
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

               
                 <form onSubmit={handleSubmit} className="contact_form grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px] border border-[#2d4642]"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Business Email"
              className="w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px] border border-[#2d4642]"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Mobile Number"
              className="w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px] border border-[#2d4642]"
              required
            />
            <input
              type="text"
              name="company_name"
              value={formData.company_name}
              onChange={handleInputChange}
              placeholder="Company Name"
              className="w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px] border border-[#2d4642]"
              required
            />
           <select
  name="job_title"
  value={formData.job_title}
  onChange={handleInputChange}
  className="w-full appearance-none p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px] border border-[#2d4642] [&::-ms-expand]:hidden"
  required
>
  <option value="">Job Title</option>
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
  onChange={handleInputChange}
  className="w-full appearance-none p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px] border border-[#2d4642] [&::-ms-expand]:hidden"
  required
>
  <option value="">Launch Timeline?</option>
  <option value="1">Immediately</option>
  <option value="2">2-3 Months</option>
  <option value="3">4-6 Months</option>
  <option value="4">After 6 Months</option>
</select>


            <div className="budget-bg col-span-2 border border-[#2d4642]">
              <label className="block text-[#ffffff] mb-2">Budget</label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  value={budget}
                  onChange={handleBudgetChange}
                  className="w-full rounded-lg"
                  style={{ background: "#157B6C" }}
                />
                <span className="text-lg md:text-2xl font-medium">${budget.toLocaleString()}</span>
              </div>
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              className="col-span-2 w-full p-4 bg-[#0F261E] rounded-[10px] text-white outline-none font-Montserrat text-[16px] md:text-[18px] h-[150px] border border-[#2d4642]"
            ></textarea>

            <div className="col-span-2 flex justify-start">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#061611] text-[20px] font-Montserrat text-[#ffffff] border border-white font-bold py-4 px-12 rounded-lg hover:bg-[#157B6C] hover:scale-104 transition-colors shadow-md hover:text-white hover:bg-[#157B6C] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
                <Toast message={toast.message} isVisible={toast.isVisible} onClose={hideToast} type={toast.type} />
            </div>
          </form>
        </div>
      </div>

  )
}

export default ContactForm
