import React, { useState } from 'react';
// import Navbar from '../layout/Navbar';
import LetsTalkForm from '../components/LetsTalkForm';
import LocationSection from './LocationSection';
import Careers1 from '../assets/Careers1.svg';
import lamp from '../assets/lamp.png';
import light from '../assets/light.png';
import SEODevelopment from '../components/SEODevelopment';
import FrontendDevelopment from '../components/FrontendDevelopment';
import PHPDeveloper from '../components/PHPDeveloper';
import mask from "../assets/mask.png";

function Careers() {
  const [selectedFunction, setSelectedFunction] = useState(null);

  const functions = [
    'Front end Designer',
    'UI/UX Designer',
    'PHP Developer',
    'SEO Executive',
    'BDE',
    'Content Writer',
    'Laravel Developer',
    'Business Analyst',
    'Front End Development',
    "HR Executive",
    "Marketing",
    "Python Developer",
    "Quality Assurance",
  ];

  const renderSelectedComponent = () => {
    switch ((selectedFunction || '').trim().toLowerCase()) {
      case 'seo executive':
        return <SEODevelopment />;
      case 'php developer':
        return <PHPDeveloper />;
      case 'front end development':
        return <FrontendDevelopment />;
      // case 'Content Writer':
      //   return <ContentWriter />;
      default:
        return (
          <div className="flex flex-col md:flex-row items-center justify-center h-full gap-6 md:gap-8">
            <img
              src={mask}
              alt="No vacancies"
              className="w-48 md:w-64 lg:w-72 h-auto"
            />
            <p className="text-center md:text-left text-base md:text-lg font-semibold text-[#157B6C]">
              No vacancies available at the moment.
              <br className="hidden md:block" />
              Stay tuned for future opportunities!
            </p>
          </div>
        );
    }
  };
  return (
    <div className=" flex-grow bg-[#FAFAFA] relative overflow-hidden">
      {/* <Navbar style={{ backgroundColor: 'white', color: 'black' }} /> */}
      <div
        className="w-full h-[546px] bg-[#061611] bg-cover bg-center flex items-center justify-center text-white font-Montserrat px-4 relative"
        style={{
          backgroundImage: `url(${Careers1})`,
          backgroundSize: "100% 100",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center"
        }}>
      

        {/* Content */}
        <div className="flex flex-col items-center justify-center text-center mt-[30px] md:mt-0 px-4">
          <h1
            className="text-[28px] md:text-[48px] font-bold"

          >
            Careers
          </h1>

        </div>

      </div>

      <div className='flex items-center justify-center mt-10 bg-[#fffff]'>
        <div className="mx-auto max-w-[1678px] w-full min-h-[345px] bg-white rounded-lg p-4 md:p-8 lg:p-12">
          {/* Header */}
          <div className="flex flex-col text-center space-y-4 mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-black">
              Open Positions
            </h2>
            <p className="text-sm md:text-base font-medium max-w-2xl mx-auto">
              If you're someone who thrives in a fast-paced, collaborative, and constantly evolving environment, then Apptunix is the perfect place to accelerate your career.
            </p>
          </div>

          {/* Main Section */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Functions List */}
            <div className="lg:w-1/3 p-4 md:p-6 border rounded-lg lg:border-r-0 lg:rounded-r-none">
              <h3 className="text-lg md:text-xl font-bold mb-4">Function</h3>
              <ul className="space-y-3 md:space-y-4">
                {functions.map((job, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 cursor-pointer"
                    onClick={() => setSelectedFunction(job)}
                  >
                    <input
                      type="checkbox"
                      checked={selectedFunction === job}
                      readOnly
                      className="w-4 h-4 md:w-5 md:h-5 border border-[#157B6C] rounded-sm"
                    />
                    <span className="text-sm md:text-base text-gray-700">{job}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Content Section */}
            <div className="lg:w-2/3 flex-1 p-4 md:p-6 border rounded-lg lg:border-l-0 lg:rounded-l-none">
              {renderSelectedComponent()}
            </div>
          </div>

          {/* Experience Filter */}
          <div className="border-t mt-6 md:mt-8 pt-4 md:pt-6 px-4 md:px-0">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <span className="text-base md:text-lg font-bold min-w-[100px]">Experience</span>
              <div className="flex flex-wrap gap-2 md:gap-4">
                {['Fresher', '1 to 3 Years', '3 to 6 Years'].map((exp, index) => (
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
        </div>
      </div>



      <div className='mt-10'>

      </div>

    </div>
  );
}

export default Careers;
