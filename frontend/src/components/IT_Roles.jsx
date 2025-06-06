import React, { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import ITArow from "../assets/itero.svg";
import ITamico from "../assets/amico.svg";
const IT_Roles = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedRole, setSelectedRole] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const roles = {
    Designer: {},
    Developer: {},
    "Digital Marketing": {},
    "QA Staffing": {},
    "Human Resources (HR)": {},
    "Big Data": {},
    "Project Manager": {},
    "AI Development": {},
    "IT Support": {},
  };

  const handleRoleClick = (role) => {
    setActiveTab(role.toLowerCase());
    setSelectedRole(role);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full  py-20 px-4 sm:px-8 mt-[20px]">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-16">
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
            <img
              src={ITArow}
              alt="Arrow Graphic"
              className="max-w-[80px] lg:max-w-[100px]"
            />
          </div>
        </div>

        {/* Role Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mb-10">
          {Object.keys(roles).map((role) => (
            <button
              key={role}
              onClick={() => handleRoleClick(role)}
              className={`flex justify-between items-center gap-3 p-3 pl-4 rounded-full border-2 transition-all font-medium text-sm sm:text-base shadow-sm ${
                activeTab === role.toLowerCase()
                  ? "bg-[#ffffff] border-black text-black"
                  : "bg-white border-gray-300 hover:border-black"
              }`}
            >
              <span>{role}</span>
              <span
                className={`p-1 rounded-full transition ${
                  activeTab === role.toLowerCase()
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
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-7xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Left Image Section */}
                <div className="w-full md:w-1/2  p-6 flex flex-col justify-start">
                  {/* Header and Close Button */}
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold">
                      {" "}
                      Hire {selectedRole} Roles
                    </h2>
                  </div>

                  {/* Description */}
                  {/* <h3 className="text-lg font-semibold mb-2">
                    Hire {selectedRole} Talent
                  </h3> */}
                  <p className="mb-4 text-gray-700">
                    Ready to find the perfect{" "}
                    <span className="lowercase">{selectedRole}</span> for your
                    team? Fill out the form below and we'll get back to you
                    within 24 hours.
                  </p>

                  {/* Image */}
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

                  <div className="  rounded-xl">
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            First Name
                          </label>
                          <input
                            type="text"
                            placeholder="Enter First Name"
                            className="w-full p-2 border-b-2 border-[#157B6C] rounded shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Last Name
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Last Name"
                            className="w-full p-2 border-b-2 border-[#157B6C] rounded shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Mobile Number
                          </label>
                          <input
                            type="tel"
                            placeholder="+91 Enter Phone Number"
                            className="w-full p-2 border-b-2 border-[#157B6C] rounded shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            placeholder="Enter Email Address"
                            className="w-full p-2 border-b-2 border-[#157B6C] rounded shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col items-start space-y-4">
                        <h4 className="font-bold">Just to confirm, are you</h4>

                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="role"
                            className="accent-green-700"
                            defaultChecked
                          />
                          <span>An Employer</span>
                        </label>

                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="role"
                            className="accent-green-700"
                          />
                          <span>Looking for a job</span>
                        </label>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Company Name
                          </label>
                          <input
                            type="text"
                            placeholder="Enter company name"
                            className="w-full p-2 border-b-2 border-[#157B6C] rounded shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Job title
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Job title"
                            className="w-full p-2 border-b-2 border-[#157B6C] rounded shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Type of Hire
                          </label>
                          <input
                            type="text"
                            placeholder="Enter company name"
                            className="w-full p-2 border-b-2 border-[#157B6C] rounded shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Number of Job Openings
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Job title"
                            className="w-full p-2 border-b-2 border-[#157B6C] rounded shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">
                          How Can We Help?
                        </label>
                        <textarea
                          placeholder="Enter company name"
                          className="w-full p-2 border-b-2 border-[#157B6C] rounded shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Already Have a Job Description?*
                        </label>
                        <input
                          type="file"
                          className="w-full p-2 border-b-2 border-[#157B6C] rounded shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Where is the position located?
                        </label>
                        <textarea
                          placeholder="Tell us more about your requirements..."
                          className="w-full p-2 border-b-2 border-[#157B6C] rounded h-24 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                        />
                      </div>

                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="privacy-checkbox"
                          className="mt-1 mr-2"
                        />
                        <label
                          htmlFor="privacy-checkbox"
                          className="block text-sm font-medium mb-1"
                        >
                          TechDevise will process any personal information that
                          you provide in accordance with its <span className="font-bold text-[#157B6C] ">Privacy Policy.</span> 
                        </label>
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="button"
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
