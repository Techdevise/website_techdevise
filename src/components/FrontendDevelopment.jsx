// components/SEODevelopment.jsx
import React, { useState } from 'react';
import JobPosting from './JobPosting';
import { MapPin } from 'lucide-react'; 

function FrontendDevelopment() {
  const [selectedJob, setSelectedJob] = useState(null);

  const frontendJobs = [
    {
      title: 'Angular Developer',
      location: 'Mohali',
      experience: '2+ years',
      responsibilities: [
        'Delivering complete front end applications.',
        'Ensuring high performance on mobile and desktop.',
        'Writing tested, idiomatic, and documented Angular 9+, HTML, and CSS.',
        'Cooperating with the back-end developer in the process of building the RESTful API.',
        'Communicating with external web services.',
        'Good knowledge of JavaScript/ TypeScript Concepts and Basic Angular Concepts',
        'Replace this line AJAX (Asynchronous JavaScript and XML). with NGRX and RXJS',
        'Translation of designer mockups and wireframes into an AngularJS front-end.',
        'Familiarity with geocaching, Google Maps API, and RESTful services.',
        'Core web fundamentals : HTML, JavaScript, and CSS.',
      ],
      requirements: [
        '1-3 years of frontend experience',
        // 'Strong understanding of search engine algorithms',
        // 'Proficiency in tools like Google Analytics, SEMrush',
      ],
    },
  
   
   
  
   
   
   
  ];

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleCloseJobPosting = () => {
    setSelectedJob(null);
  };

  return (
    <div className="relative w-full left-0">
      <div className="absolute top-0 left-0 h-full border-l border-gray-300"></div>

      <div className="flex flex-col gap-2 pl-6">
        {frontendJobs.map((job, index) => (
          <div
            key={index}
            onClick={() => handleJobClick(job)}
            className="flex items-center justify-between p-4 border rounded-md hover:shadow-md transition bg-white cursor-pointer"
          >
            <span className="font-medium text-gray-800">{job.title}</span>
            <div className="flex items-center gap-1 text-green-700 text-sm">
              <MapPin className="w-4 h-4" />
              <span className='text-black font-medium font-Montserrat text-[18px]'>{job.location}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="max-w-[1527px] max-h-[90vh] overflow-auto">
            <JobPosting job={selectedJob} onClose={handleCloseJobPosting} />
          </div>
        </div>
      )}
    </div>
  );
}

export default FrontendDevelopment;
