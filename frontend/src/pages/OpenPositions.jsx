import React, { useState, useEffect, useRef} from "react";
import axios from "axios";
import mask from "../assets/mask.png";
import { MapPin } from "lucide-react";
import JobPosting from "../components/JobPosting";

function OpenPositions() {
  const [functions, setFunctions] = useState([]);
  const [selectedFunction, setSelectedFunction] = useState(null);
  const [subJobs, setSubJobs] = useState([]);
  const [selectedJobDetails, setSelectedJobDetails] = useState(null);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
 const modalRef = useRef(null)
 const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/jobs`);
        if (res.data.success) {
          setFunctions(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    const fetchSubJobs = async () => {
      if (!selectedFunction) return;
      try {
        const res = await axios.get(`${API_BASE_URL}/api/sub_jobs/${selectedFunction.id}`);
        if (res.data.success) {
          setSubJobs(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching sub-jobs:", error);
      }
    };
    fetchSubJobs();
  }, [selectedFunction]);

  const openJobModal = async (jobId) => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/jobs_Options/${jobId}`);
      if (res.data.success) {
         
      setSelectedJobDetails(res.data.data);
        setIsJobModalOpen(true);
      }
    } catch (error) {
      console.error("Error loading job details:", error);
    }
  };

  const closeJobModal = () => {
    setIsJobModalOpen(false);
    setSelectedJobDetails(null);
  };

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeJobModal()
      }
    }

    if (isJobModalOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isJobModalOpen])
  // Render sub-jobs under selected function
  const renderSelectedComponent = () => {
    if (selectedFunction && subJobs.length > 0) {
      return (
        <div className="relative">
          <ul className="space-y-2 text-gray-700">
            {subJobs.map((job, idx) => (
              <div
                key={idx}
                onClick={() => openJobModal(job.id)}
                className="relative pl-4 flex items-center justify-between p-4 border rounded-md hover:shadow-md transition bg-white cursor-pointer"
              >
                <div className="absolute top-0 -left-4 h-full border-l-2 border-gray-300"></div>
                <span className="font-medium text-gray-800">{job.name}</span>
                <div className="flex items-center gap-1 text-green-700 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span className="text-black font-medium font-Montserrat text-[18px]">
                    {job.location}
                  </span>
                </div>
              </div>
            ))}
          </ul>
        </div>
      );
    }

    return (
      <div className="flex flex-col md:flex-row items-center justify-center h-full gap-6 md:gap-8">
        <img src={mask} alt="No vacancies" className="w-48 md:w-64 lg:w-72 h-auto" />
        <p className="text-center md:text-left text-base md:text-lg font-semibold text-[#157B6C]">
          No vacancies available at the moment.
          <br className="hidden md:block" />
          Stay tuned for future opportunities!
        </p>
      </div>
    );
  };

  return (
    <div className="mx-auto max-w-[1678px] w-full min-h-[345px] bg-white rounded-lg shadow-lg p-4 md:p-8 lg:p-12 relative">
      {/* Header */}
      <div className="flex flex-col text-center space-y-4 mb-8 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-black">Open Positions</h2>
        <p className="text-sm md:text-base font-medium max-w-2xl mx-auto">
          If you're someone who thrives in a fast-paced, collaborative, and constantly evolving environment,
          then Apptunix is the perfect place to accelerate your career.
        </p>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        {/* Functions List */}
        <div className="lg:w-1/3 p-4 md:p-6 border rounded-lg lg:border-r-0 lg:rounded-r-none">
          <h3 className="text-lg md:text-xl font-bold mb-4">Function</h3>
          <ul className="space-y-3 md:space-y-4">
            {functions.length > 0 ? (
              functions.map((job) => (
                <li
                  key={job.id}
                  className="flex items-center space-x-3 cursor-pointer"
                  onClick={() => setSelectedFunction(job)}
                >
                  <input
                    type="checkbox"
                    checked={selectedFunction?.id === job.id}
                    readOnly
                    className="w-4 h-4 md:w-5 md:h-5 border border-[#157B6C] rounded-sm"
                  />
                  <span className="text-sm md:text-base text-gray-700">{job.title}</span>
                </li>
              ))
            ) : (
              <p className="text-gray-500 text-sm">Loading job titles...</p>
            )}
          </ul>
        </div>

        {/* SubJobs Display */}
        <div className="lg:w-2/3 flex-1 p-4 md:p-6 border rounded-lg lg:border-l-0 lg:rounded-l-none">
          {renderSelectedComponent()}
        </div>
      </div>

      {/* Experience Filter */}
      <div className="border-t mt-6 md:mt-8 pt-4 md:pt-6 px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <span className="text-base md:text-lg font-bold min-w-[100px]">Experience</span>
          <div className="flex flex-wrap gap-2 md:gap-4 md:w-auto w-[520px]">
            {["Fresher", "1 to 3 Years", "3 to 6 Years"].map((exp, index) => (
              <button
                key={index}
                className="px-4 py-2 text-sm md:text-base border border-green-500 text-green-700 rounded-md hover:bg-green-50 transition-colors"
              >
                {exp}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Job Modal */}
      {isJobModalOpen && selectedJobDetails && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
         <div ref={modalRef} className="w-full">
            <JobPosting job={selectedJobDetails} onClose={closeJobModal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default OpenPositions;
