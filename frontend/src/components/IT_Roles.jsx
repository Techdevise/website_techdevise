import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion"
import { ArrowUpRight, X } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ITArow from "../assets/itero.svg";
import ITamico from "../assets/amico.svg";

const IT_Roles = () => {
  const [roles, setRoles] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedRoleId, setSelectedRoleId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userType, setUserType] = useState(null);
  const modalRef = useRef(null);
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/roles`);
        if (res.data.success && res.data.data) {
          setRoles(res.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch roles:", error);
        toast.error("Failed to load roles. Please try again later.");
      }
    };

    fetchRoles();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("It_role_id", selectedRoleId);
    formData.append("first_name", e.target.first_name.value);
    formData.append("last_name", e.target.last_name.value);
    formData.append("email", e.target.email.value);
    formData.append("phone", e.target.phone.value);
    formData.append("just_confirm", userType);

    if (userType === "0") {
      formData.append("company_name", e.target.company_name.value);
      formData.append("job_title", e.target.job_title.value);
      formData.append("type_of_hire", e.target.type_of_hire.value);
      formData.append("number_of_job", e.target.number_of_job.value);
      formData.append("help", e.target.help.value);
      formData.append("position", e.target.position.value);

      const file = e.target.image?.files[0];
      if (file) {
        formData.append("image", file);
      }
    }

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/roles/create`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        toast.success("Form submitted successfully!");
        setIsModalOpen(false);
        e.target.reset();
        setUserType(null);
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to submit form. Please try again.");
    }
  };

  const handleRoleClick = (role) => {
    if (!role || typeof role.name !== "string") return;
    setActiveTab(role.name.toLowerCase());
    setSelectedRole(role.name);
    setSelectedRoleId(role.id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setUserType(null);
  };

  return (
    <div className="w-full py-20 px-4 sm:px-8 mt-[20px]">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-16 md:mt-10 mt-0">
          <div className="lg:w-2/3">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
              We Staff IT Roles Across Any{" "}
              <span className="text-[#6AD2B6]">Industry</span>
            </h1>
            <p className="text-lg text-gray-700">
              <span className="font-bold text-black">TechDevise</span> is an IT
              staffing company with more than 24 years of experience. You name
              it, we've staffed it before—and we'd love to find great people for
              you, too. With a dedicated team of tech recruiters leveraging
              proprietary AI-enabled recruiting tools, we can find qualified
              candidates in as few as two days. Even the unicorns who aren't
              looking for a new role—yet.
            </p>
          </div>
          <div className="lg:w-1/3 flex justify-center lg:justify-end">
            <motion.img
              src={ITArow}
              alt="Arrow Graphic"
              className="max-w-[80px] lg:max-w-[100px]"  animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </div>



        {/* Role Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mb-10">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => handleRoleClick(role)}
              className={`flex justify-between items-center gap-3 p-3 pl-4 rounded-full border-2 transition-all font-medium text-sm sm:text-base shadow-sm ${
                activeTab === role.name.toLowerCase()
                  ? "bg-[#ffffff] border-black text-black"
                  : "bg-white border-gray-300 hover:border-black"
              }`}
            >
              <span>{role.name}</span>
              <span
                className={`p-1 rounded-full transition ${
                  activeTab === role.name.toLowerCase()
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                <ArrowUpRight size={16} />
              </span>
            </button>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedRole && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div
              ref={modalRef}
              className="bg-white rounded-2xl shadow-xl w-full max-w-7xl overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Left Image Section */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-start">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold">
                      Hire {selectedRole} Roles
                    </h2>
                  </div>

                  <p className="mb-4 text-gray-700">
                  We support a broad array of industries with our staffing, training, and managed services. Send us a few details (below) and we’ll be in touch before you know it.
<br /><br />
Questions? <br />
Call us toll-free:  <span className="text-[#157B6C] text-bold">+1234567890</span>
                  </p>

                  <div className="flex justify-center mt-auto">
                    <img
                      src={ITamico}
                      alt="Illustration"
                      className="max-w-full h-auto"
                    />
                  </div>
                </div>

                {/* Right Form Section */}
                <div className="w-full md:w-1/2 p-6 overflow-y-auto max-h-[90vh] relative">
                  <div className="flex justify-end mb-4">
                    <button
                      onClick={closeModal}
                      className="bg-[#157B6C] hover:bg-gray-200 p-1 rounded-full"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="rounded-xl">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <input
                        type="hidden"
                        name="It_role_id"
                        value={selectedRoleId}
                      />
                      
                      {/* User Type Selection */}
                    

                      {/* Common Fields (always shown) */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            First Name*
                          </label>
                          <input
                            type="text"
                            name="first_name"
                            placeholder="Enter First Name"
                            className="w-full p-2 border-b-2 border-[#157B6C] rounded shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Last Name*
                          </label>
                          <input
                            type="text"
                            name="last_name"
                            placeholder="Enter Last Name"
                            className="w-full p-2 border-b-2 border-[#157B6C] rounded shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Mobile Number*
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="+91 Enter Phone Number"
                            className="w-full p-2 border-b-2 border-[#157B6C] rounded shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Email Address*
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter Email Address"
                            className="w-full p-2 border-b-2 border-[#157B6C] rounded shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                            required
                          />
                        </div>
                      </div>
  <div className="flex flex-col items-start space-y-4">
                        <h4 className="font-bold">Just to confirm, are you*</h4>
                        <label className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="just_confirm"
                            value="0"
                            className="accent-green-700"
                            required
                            checked={userType === "0"}
                            onChange={() => setUserType("0")}
                          />
                          <span>An Employer</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="just_confirm"
                            value="1"
                            className="accent-green-700"
                            checked={userType === "1"}
                            onChange={() => setUserType("1")}
                          />
                          <span>Looking for a job</span>
                        </label>
                      </div>
                      {/* Employer-specific fields */}
                      {userType === "0" && (
                        <>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium mb-1">
                                Company Name*
                              </label>
                              <input
                                type="text"
                                name="company_name"
                                placeholder="Enter company name"
                                className="w-full p-2 border-b-2 border-[#157B6C] rounded shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">
                                Job title*
                              </label>
                              <input
                                type="text"
                                name="job_title"
                                placeholder="Enter Job title"
                                className="w-full p-2 border-b-2 border-[#157B6C] rounded shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                                required
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="block text-sm font-medium mb-1">
                              <label className="text-gray-800 font-medium">
                                Type of Hire*
                              </label>
                              <select
                                name="type_of_hire"
                                className="w-full p-2 border-b-2 border-[#157B6C] rounded shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                              >
                                <option value="1">Contractors</option>
                                <option value="2">Permanent Hires</option>
                                <option value="3">
                                  Project-Based / Bulk Staffing
                                </option>
                                <option value="4">I'm Not Sure</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">
                                Number of Job Openings*
                              </label>
                              <input
                                type="number"
                                name="number_of_job"
                                placeholder="Enter number"
                                className="w-full p-2 border-b-2 border-[#157B6C] rounded shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-1">
                              How Can We Help?*
                            </label>
                            <textarea
                              name="help"
                              placeholder="Tell us about your requirements..."
                              className="w-full p-2 border-b-2 border-[#157B6C] rounded shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-1">
                              Job Description (Optional)
                            </label>
                            <input
                              type="file"
                              name="image"
                              className="w-full p-2 border-b-2 border-[#157B6C] rounded shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-1">
                              Where is the position located?*
                            </label>
                            <textarea
                              name="position"
                              placeholder="Enter location details..."
                              className="w-full p-2 border-b-2 border-[#157B6C] rounded h-24 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                              required
                            />
                          </div>
                        </>
                      )}

                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="privacy-checkbox"
                          className="mt-1 mr-2"
                          required
                        />
                        <label
                          htmlFor="privacy-checkbox"
                          className="block text-sm font-medium mb-1"
                        >
                          TechDevise will process any personal information that
                          you provide in accordance with its{" "}
                          <span className="font-bold text-[#157B6C]">
                            Privacy Policy.
                          </span>
                        </label>
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="bg-[#157B6C] text-white px-6 py-2 rounded hover:bg-gray-800 transition"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IT_Roles;