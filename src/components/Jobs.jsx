import React, { useState } from "react";
import JobPosting from "./JobPosting";

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

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Open Positions</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {jobDataList.map((job) => (
          <div
            key={job.id}
            className="border p-4 rounded-md cursor-pointer hover:shadow-md transition"
            onClick={() => setSelectedJob(job)}
          >
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-sm text-gray-600">{job.location}</p>
          </div>
        ))}
      </div>

      {/* Show Modal */}
      {selectedJob && (
        <JobPosting
          jobData={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </div>
  );
};

export default Jobs;
