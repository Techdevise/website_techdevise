

import { useState } from "react"
import { X, Plus } from "lucide-react"

const JobApplicationModal = ({ isOpen, onClose, jobTitle }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    linkedinProfile: "",
    source: "",
    interviewTimes: [""],
    isLocated: "yes",
    consent: false,
  })
  const [resume, setResume] = useState(null)
  const [countryCode, setCountryCode] = useState("+91")

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setResume(e.target.files[0])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ ...formData, resume })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 mt-10">
      <div className="relative w-full max-w-[950px] bg-white rounded-md overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          <div className="mb-6">
            <p className="text-[#157B6C] font-Montserrat text-[18px]">Apply At TechDevise For</p>
            <h2 className="text-3xl font-bold font-Montserrat">
              {jobTitle || "Digital Marketing Executives"}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#157B6C]"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#157B6C]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#157B6C]"
              />
              <div className="flex">
                <div className="flex items-center border border-gray-300 rounded-l-md px-2 bg-gray-50">
                  <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5 h-auto mr-1" />
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="bg-transparent text-sm focus:outline-none"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                  </select>
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 border-l-0 rounded-r-md focus:ring-1 focus:ring-[#157B6C]"
                />
              </div>
            </div>

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#157B6C]"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="linkedinProfile"
                placeholder="Linkedin Profile"
                value={formData.linkedinProfile}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#157B6C]"
              />
              <input
                type="text"
                name="source"
                placeholder="How did you find out about us?"
                value={formData.source}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#157B6C]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Answer these questions from the employer
              </label>
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm">
                  Please list 2-3 dates and time ranges that you could do an interview.
                </p>
             <button
  type="button"
  onClick={() =>
    setFormData((prev) => ({
      ...prev,
      interviewTimes: [...prev.interviewTimes, ""],
    }))
  }
  className="flex items-center gap-2 text-black font-semibold"
  title="Add another time"
>
  <div className="w-8 h-8 bg-[#157B6C] rounded-full flex items-center justify-center">
    <Plus className="w-4 h-4 text-white" />
  </div>
  <span>Add More</span>
</button>
              </div>

              {formData.interviewTimes.map((time, index) => (
                <textarea
                  key={index}
                  name={`interviewTimes-${index}`}
                  placeholder="Write here..."
                  value={time}
                  onChange={(e) => {
                    const updated = [...formData.interviewTimes]
                    updated[index] = e.target.value
                    setFormData((prev) => ({
                      ...prev,
                      interviewTimes: updated,
                    }))
                  }}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#157B6C] mt-2"
                />
              ))}
            </div>

            <div>
              <label className="block font-medium mb-1">Are you located in Mohali, Punjab?</label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="isLocated"
                    value="yes"
                    checked={formData.isLocated === "yes"}
                    onChange={handleChange}
                  />
                  Yes
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="isLocated"
                    value="no"
                    checked={formData.isLocated === "no"}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
            </div>

            <div className="bg-gray-100 h-[130px] p-6 rounded-md flex flex-col items-center justify-center">
              <div className="mb-3 text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">Please Upload Your CV / Resume</p>
              </div>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.doc,.docx"
              />
              <label htmlFor="resume" className="cursor-pointer text-sm text-[#157B6C] hover:text-teal-700">
                {resume ? resume.name : "Choose file"}
              </label>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1"
              />
              <label htmlFor="consent" className="text-[14px] font-Montserrat font-medium">
                I consent to receiving from the Company e-mail information about new job offers, our events,
                trainings and other ongoing activities. <a href="#" className="text-[#157B6C] underline ml-1">Terms & Conditions</a>
              </label>
            </div>

            <p className="text-[14px] text-black font-bold font-Montserrat">
              If you are unable to submit your details, then please share your updated CV/Resume at{" "}
              <a href="mailto:hr@techdevise.com" className="underline">hr@techdevise.com</a>
            </p>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full max-w-[121px] bg-[#157B6C] hover:bg-teal-700 text-white font-medium py-3 px-6 rounded transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default JobApplicationModal