import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const TouchModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const modalRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_frwonae"; 
    const templateID = "template_dtjfivp"; 
    const publicKey = "48pB_nHYKan2H2iXM";  

    const templateParams = {
        fullname: formData.fullName,  
        email: formData.email,
        "Phone number": formData.phone, 
        message: formData.message,
    };
    emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then((response) => {
        console.log("Email sent successfully!", response);
        toast.success("Form submitted successfully!", {
            position: "top-center",
            autoClose: 3000, 
        });
        onClose();
    })
    .catch((error) => {
        console.error("Email sending failed:", error);
        toast.error("Failed to send message. Try again!", {
            position: "top-right",
            autoClose: 3000,
        });
    });
};


  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    
    document.addEventListener("mousedown", handleClickOutside);

    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white rounded-2xl p-8 w-full max-w-md transform transition-all"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-[#157B6C] outline-none transition"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email *
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-[#157B6C] outline-none transition"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-[#157B6C] outline-none transition"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Message *
            </label>
            <textarea
              required
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-[#157B6C] outline-none transition"
              placeholder="What services are you looking for?"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#157B6C] hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default TouchModal;