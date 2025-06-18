import React, { useState } from "react";
import JobPosting from "./JobPosting";
import { useLocation, useNavigate } from 'react-router-dom';


const jobDataList = [
  {
    id: 1,
    title: "Digital Marketing Executive",
    location: "Mohali",
    experience: "2+ years",
    responsibilities: [
      "Maintain social media profiles - Facebook, Instagram, Twitter, LinkedIn",
      "Execute social media strategies through research and messaging",
      "Conduct research to drive organic traffic",
    ],
    requirements: [
      "1-3 years of experience",
      "Strong knowledge of digital marketing channels",
      "Degree in Marketing or related field",
    ],
  },
  {
    id: 1,
    title: "SEODevelopment Executive",
    location: "Mohali",
    experience: "2+ years",
    responsibilities: [
      "Maintain social media profiles - Facebook, Instagram, Twitter, LinkedIn",
      "Execute social media strategies through research and messaging",
      "Conduct research to drive organic traffic",
    ],
    requirements: [
      "1-3 years of experience",
      "Strong knowledge of digital marketing channels",
      "Degree in Marketing or related field",
    ],
  },
  {
    id: 2,
    title: "Frontend Developer",
    location: "Remote",
    experience: "1+ years",
    responsibilities: [
      "Build responsive React components",
      "Collaborate with design teams",
    ],
    requirements: [
      "1+ year experience with React",
      "Strong understanding of HTML/CSS",
    ],
  },
];

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);
const [showApplicationModal, setShowApplicationModal] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const jobData = location.state?.job;

  if (!jobData) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-red-600">No job selected</h1>
        <button
          className="mt-4 px-4 py-2 bg-teal-600 text-white rounded"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-10">
      <JobPosting job={jobData} onClose={() => navigate(-1)} />
    </div>
  );
};

export default Jobs;