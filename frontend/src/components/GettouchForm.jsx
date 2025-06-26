import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import Alexjenson from "../assets/Alexjenson.svg";
import Mobileshowcase from "../assets/Mobileshowcase.svg";

// Toast component
const Toast = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!isVisible) return null

  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-[60] animate-in slide-in-from-top-2">
      <div className="flex items-center gap-2">
        <span>✓</span>
        <span>{message}</span>
        <button onClick={onClose} className="ml-2 text-white hover:text-gray-200">
          <X size={16} />
        </button>
      </div>
    </div>
  )
}

const GettouchForm = ({ isOpen, onClose, className = "" }) => {
  // Form state - update to match API field names
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
    job_title: "Manager",
    launch_timeline: "Immediately",
    // company_name: "",
    budget: "$25k - $50k",
  })

  // Toast state
  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
  })

  // Loading state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [experts, setExperts] = useState([])
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  console.log("API Base URL:", API_BASE_URL)

  // Fetch experts data
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

    if (isOpen) {
      fetchExperts()
    }
  }, [isOpen])

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Prepare payload for API
      const payload = {
        fullname: formData.fullname,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        job_title: formData.job_title,
        launch_timeline: formData.launch_timeline,
        // company_name: formData.company_name,
        budget: formData.budget,
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
        // Show success toast
        setToast({
          isVisible: true,
          message: result.message || "Form submitted successfully!",
        })

        // Reset form
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          message: "",
          job_title: "Manager",
          launch_timeline: "Immediately",
          // company_name: "",
          budget: "",
        })

        // Close form after a delay
        setTimeout(() => {
          onClose()
        }, 2000)
      } else {
        throw new Error(result.message || "Failed to submit form")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setToast({
        isVisible: true,
        message: "Error submitting form. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackdropClick = (e) => {
    if (e.target.id === "backdrop") {
      onClose()
    }
  }

  const hideToast = () => {
    setToast({
      isVisible: false,
      message: "",
    })
  }

  if (!isOpen) return null

  return (
    <>
      <div
        id="backdrop"
        onClick={handleBackdropClick}
        className={`fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4 ${className}`}
      >
        <div className="bg-white w-full max-w-[1300px] max-h-[95vh] overflow-y-auto md:flex md:h-[90vh] rounded-lg shadow-lg relative">
          {/* Left Section */}
          <div className="bg-[#157B6C] text-white p-8 md:w-[45%] flex flex-col justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-center leading-tight">
                Turn Your Idea into a <br /> Profit Making App
              </h1>
              <p className="text-center mt-4 text-base md:text-lg">
                Reach out to us and start your digital transformation <br /> journey today.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 border-teal-600">
                  <img
                    src={Alexjenson}
                    alt="Alex Johnson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold">Alex Johnson</h3>
                  <p className="text-teal-200">Company Name: Seoproductief</p>
                  <p className="text-teal-200">Designation: Head, Marketing</p>
                </div>
              </div>
              <p className="mt-4 lg:text-[18px] font-Montserrat text-sm md:text-base">We developed a great partnership with Techdevise. Their dedication to our website is evident in all aspects of the site. We appreciate their attention to detail and creative approach in bringing our new exhibit to life online.</p>
            </div>

            <div className="flex justify-center mt-8 gap-2">
              <div className="w-24 md:w-32 bg-white rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={Mobileshowcase}
                  alt="App Screenshot"
                  className="w-full h-[100px] md:h-[122px]"
                />
              </div>
            </div>

            <div className="text-center mt-4 text-sm">1/4</div>
          </div>

          {/* Right Section */}
          <div className="flex-1 p-6 md:p-12 relative">
            <button className="absolute top-4 right-4 bg-teal-700 text-white rounded-full p-2 z-50" onClick={onClose}>
              <X size={20} />
            </button>

            <form onSubmit={handleSubmit} className="mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-gray-800 font-medium">Full Name</label>
                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-teal-700 text-black"
                    required
                  />
                </div>

                {/* Business Email */}
                <div className="space-y-1">
                  <label className="text-gray-800 font-medium">Business Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your gmail"
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-teal-700 text-black"
                    required
                  />
                </div>

                {/* Mobile Number */}
                <div className="space-y-1">
                  <label className="text-gray-800 font-medium">Mobile Number</label>
                  <div className="flex">
                    <div className="border-b border-gray-300 pb-2 pr-2 flex items-center">
                      <div className="bg-gray-200 px-2 py-1 rounded text-black flex items-center">
                        +91 <span className="ml-1">▼</span>
                      </div>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter phone number"
                      className="flex-1 border-b border-gray-300 pb-2 focus:outline-none focus:border-teal-700 text-black"
                      required
                    />
                  </div>
                </div>

                {/* Company Name - Add this new field */}
                {/* <div className="space-y-1">
                  <label className="text-gray-800 font-medium">Company Name</label>
                  <input
                    type="text"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-teal-700 text-black"
                    required
                  />
                </div> */}

                {/* Job Title */}
                <div className="space-y-3">
                  <label className="text-gray-800 font-medium">Job Title</label>
                  <select
                    name="job_title"
                    value={formData.job_title}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 pb-2 bg-transparent text-black focus:outline-none"
                  >
                    <option value="1">Entrepreneur</option>
                    <option value="2">Manager</option>
                    <option value="3">Director</option>
                    <option value="4">C-Level</option>
                    <option value="5">Student</option>
                    <option value="6">Others</option>
                  </select>
                </div>

                {/* Launch Timeline */}
                <div className="col-span-1 md:col-span-2 space-y-1">
                  <label className="text-gray-800 font-medium">When do you want to launch a solution?</label>
                  <select
                    name="launch_timeline"
                    value={formData.launch_timeline}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 pb-2 bg-transparent text-black focus:outline-none"
                  >
                    <option value="1">Immediately</option>
                    <option value="2">1-3 Months</option>
                    <option value="3">3-6 Months</option>
                    <option value="4">6+ Months</option>
                  </select>
                </div>

                {/* Budget */}
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center rounded-lg h-[78px] overflow-hidden">
                    <div className="px-6 py-2 text-black font-medium border-r border-gray-300">Budget</div>
                    <div className="flex flex-1 justify-between items-center">
                     {[
  { label: "$5k - $25k", id: "1" },
  { label: "$25k - $50k", id: "2" },
  { label: "$50k - $100k", id: "3" },
  { label: "$100k+", id: "4" }
].map(({ label, id }, idx, arr) => (
  <button
    key={id}
    type="button"
    onClick={() => setFormData((prev) => ({ ...prev, budget: id }))}
    className={`flex-1 text-center py-2 text-sm ${
      formData.budget === id
        ? "text-teal-700 font-medium bg-teal-50"
        : "text-black hover:bg-gray-50"
    } ${idx < arr.length - 1 ? "border-r border-gray-300" : ""}`}
  >
    {label}
  </button>
))}

                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="col-span-1 md:col-span-2 space-y-1">
                  <label className="text-gray-800 font-medium">Description</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    className="w-full border-b text-black border-gray-300 pb-2 focus:outline-none focus:border-teal-700 min-h-[120px]"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-[200px] h-[49px] bg-teal-700 text-white py-3 px-8 rounded-md text-lg font-medium hover:bg-teal-800 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Apply"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <Toast message={toast.message} isVisible={toast.isVisible} onClose={hideToast} />
      
    </>
  )
}

export default GettouchForm
