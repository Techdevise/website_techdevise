"use client"

import { useState } from "react"
import Jobpostingbanner from "../assets/Jobpostingbanner.svg"
import { MapPin, X } from "lucide-react"
import JobApplicationModal from "../components/JobApplicationModal"

const JobPosting = ({ job, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (!job) return null

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="relative w-full max-w-[1300px] max-h-[90vh] bg-white shadow-lg rounded-md flex flex-col md:flex-row overflow-y-auto overflow-x-hidden mx-auto">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-gray-100 rounded-full p-1.5 hover:bg-gray-200 transition-colors z-20"
      >
        <X className="w-5 h-5 text-gray-700" />
      </button>

      {/* Left side - Image section */}
      <div className="w-full md:w-[40%] flex items-center justify-center p-4">
        <img
          src={Jobpostingbanner || "/placeholder.svg"}
          alt="Job Posting Banner"
          className="max-h-[300px] md:max-h-[600px] w-full object-contain"
        />
      </div>

      {/* Right side - Job details */}
      <div className="w-full md:w-[60%] p-6 md:p-10 flex flex-col">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-Montserrat font-bold text-black">{job.jobSub_title?.name}</h1>
          <div className="flex items-center mt-2 text-green-600">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm md:text-base">{job.location}</span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Responsibilities</h2>
          <p className="text-sm md:text-base text-gray-700 whitespace-pre-line">
            {job.responsibilities}
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Requirements</h2>
          <p className="text-sm md:text-base text-gray-700 whitespace-pre-line">
            {job.requirements}
          </p>
        </div>

        <div className="mb-6 flex flex-col space-y-2 text-sm md:text-base">
          <div className="flex items-center">
            <span className="font-semibold w-24">Location:</span>
            <span>{job.location}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold w-24">Experience:</span>
            <span>{job.experience}</span>
          </div>
        </div>

        <div className="mt-auto pt-4">
          <button
            className="w-full md:w-[200px] bg-[#157B6C] hover:bg-teal-700 text-white font-medium py-2 px-6 rounded transition-colors"
            onClick={openModal}
          >
            Apply
          </button>
        </div>
      </div>

      {/* Job Application Modal */}
      <JobApplicationModal
        isOpen={isModalOpen}
        onClose={closeModal}
       jobId={job.id}
        jobTitle={job.jobSub_title?.name}
      />
    </div>
  )
}

export default JobPosting
