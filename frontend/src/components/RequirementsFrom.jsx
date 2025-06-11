// components/RequirementsFrom.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobPosting from './JobPosting';
import { MapPin } from 'lucide-react';

function RequirementsFrom({ jobId }) {
  const [jobOptions, setJobOptions] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    if (!jobId) return;

    const fetchJobOptions = async () => {
      try {
        const response = await axios.get(`http://localhost:9090/api/jobs_Options/${jobId}`);
        if (response.data.success && response.data.data) {
          const jobTitleData = response.data.data.jobtitle;

          if (jobTitleData) {
            setJobOptions([jobTitleData]);
          } else {
            setJobOptions([]);
          }
        } else {
          console.error('API Error:', response.data.message);
        }
      } catch (error) {
        console.error('Axios Error:', error.message);
      }
    };

    fetchJobOptions();
  }, [jobId]);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleCloseJobPosting = () => {
    setSelectedJob(null);
  };

  return (
    <div className="relative w-full left-0">
      <div className="absolute top-0 left-0 h-full border-l border-gray-300"></div>

      <div className="flex flex-col gap-2 pl-6 mt-4">
        {jobOptions.map((job, index) => (
          <div
            key={index}
            onClick={() => handleJobClick(job)}
            className="flex items-center justify-between p-4 border rounded-md hover:shadow-md transition bg-white cursor-pointer"
          >
            <span className="font-medium text-gray-800">{job.title}</span>
            <div className="flex items-center gap-1 text-green-700 text-sm">
              <MapPin className="w-4 h-4" />
              <span className="text-black font-medium font-Montserrat text-[18px]">
                {job.location || 'Mohali'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="max-w-[1527px] max-h-[90vh] overflow-auto bg-white rounded-md p-6 shadow-lg">
            <JobPosting job={selectedJob} onClose={handleCloseJobPosting} />
          </div>
        </div>
      )}
    </div>
  );
}

export default RequirementsFrom;
