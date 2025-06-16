// components/SEODevelopment.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JobPosting from './JobPosting';
import { MapPin } from 'lucide-react'; 

function SEODevelopment() {
  const navigate = useNavigate();

  const seoJobs = [
    {
      title: 'SEO Specialist',
      location: 'Mohali',
      experience: '2+ years',
      responsibilities: [
        'Conduct keyword research and implement SEO strategies',
        'Monitor search engine rankings and traffic flow',
        'Optimize website content for search engines',
      ],
      requirements: [
        '1-3 years of SEO experience',
        'Strong understanding of search engine algorithms',
        'Proficiency in tools like Google Analytics, SEMrush',
      ],
    },
    {
      title: 'Copywriter',
      location: 'Mohali',
      experience: '1+ years',
      responsibilities: [
        'Create engaging content for websites and blogs',
        'Collaborate with SEO team for keyword placement',
        'Edit and proofread marketing materials',
      ],
      requirements: [
        'Excellent writing and editing skills',
        'Experience with content management systems',
        'Creativity and attention to detail',
      ],
    },
    {
      title: 'Social Media Manager',
      location: 'Mohali',
      experience: '2+ years',
      responsibilities: [
        'Conduct keyword research and implement SEO strategies',
        'Monitor search engine rankings and traffic flow',
        'Optimize website content for search engines',
      ],
      requirements: [
        '1-3 years of SEO experience',
        'Strong understanding of search engine algorithms',
        'Proficiency in tools like Google Analytics, SEMrush',
      ],
    },
    {
      title: 'Digital Marketing Executives',
      location: 'Mohali',
      experience: '2+ years',
      responsibilities: [
        'Maintain social media profiles- Facebook, Instagram, Twitter, LinkedIn and other platforms.',
        'Build and execute social media strategy through competitive research, platform determination, benchmarking, messaging, and audience identification',
        'Conduct research and curate campaigns to drive organic traffic.',
        'Manage day-to-day handling postings on all platforms according to the calendar.',
        'Keep up with the new algorithms and newly launched engagement tools.',
        'Continuously improve by capturing and analyzing the appropriate social data/metrics, insights and best practices, and then acting on the information,',
        'Managing content marketing strategies related to off-on-page articles.',
      ],
      requirements: [
        '1-3 years of SEO experience',
        'Good knowledge of all different digital marketing channels',
        'Good knowledge and experience with online marketing tools and best practices',
        'Great interpersonal and communication skills',
        'Degree in Marketing, Digital technologies, or relevant field',
      ],
    },
    {
      title: 'Account Manager',
      location: 'Mohali',
      experience: '2+ years',
      responsibilities: [
        'Conduct keyword research and implement SEO strategies',
        'Monitor search engine rankings and traffic flow',
        'Optimize website content for search engines',
      ],
      requirements: [
        '1-3 years of SEO experience',
        'Strong understanding of search engine algorithms',
        'Proficiency in tools like Google Analytics, SEMrush',
      ],
    },
    {
      title: 'Marketing Consultant',
      location: 'Mohali',
      experience: '2+ years',
      responsibilities: [
        'Conduct keyword research and implement SEO strategies',
        'Monitor search engine rankings and traffic flow',
        'Optimize website content for search engines',
      ],
      requirements: [
        '1-3 years of SEO experience',
        'Strong understanding of search engine algorithms',
        'Proficiency in tools like Google Analytics, SEMrush',
      ],
    },
    {
      title: 'Marketing Manager',
      location: 'Mohali',
      experience: '2+ years',
      responsibilities: [
        'Conduct keyword research and implement SEO strategies',
        'Monitor search engine rankings and traffic flow',
        'Optimize website content for search engines',
      ],
      requirements: [
        '1-3 years of SEO experience',
        'Strong understanding of search engine algorithms',
        'Proficiency in tools like Google Analytics, SEMrush',
      ],
    },
    {
      title: 'SEO Manager',
      location: 'Mohali',
      experience: '2+ years',
      responsibilities: [
        'Conduct keyword research and implement SEO strategies',
        'Monitor search engine rankings and traffic flow',
        'Optimize website content for search engines',
      ],
      requirements: [
        '1-3 years of SEO experience',
        'Strong understanding of search engine algorithms',
        'Proficiency in tools like Google Analytics, SEMrush',
      ],
    },
    {
      title: 'SEO Analyst',
      location: 'Mohali',
      experience: '2+ years',
      responsibilities: [
        'Conduct keyword research and implement SEO strategies',
        'Monitor search engine rankings and traffic flow',
        'Optimize website content for search engines',
      ],
      requirements: [
        '1-3 years of SEO experience',
        'Strong understanding of search engine algorithms',
        'Proficiency in tools like Google Analytics, SEMrush',
      ],
    },
  ];

  const handleJobClick = (job) => {
    navigate('/careers1', { state: { job } });
  };

  return (
    <div className="relative w-full left-0">
      <div className="absolute top-0 left-0 h-full border-l border-gray-300"></div>

      <div className="flex flex-col gap-2 pl-6">
        {seoJobs.map((job, index) => (
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

      {/* {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="max-w-[1527px] max-h-[90vh] overflow-auto">
            <JobPosting job={selectedJob} onClose={handleCloseJobPosting} />
          </div>
        </div>
      )} */}
    </div>
  );
}

export default SEODevelopment;
