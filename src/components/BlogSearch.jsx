import React from 'react';
import { FaSearch } from "react-icons/fa";

const BlogSearch = () => {
  return (
    <div className="relative w-full px-4 py-12">
      {/* Container */}
      <div className="max-w-[1189px] w-full mx-auto text-center  mt-25">
        
        {/* Heading */}
        <h1 className="font-Montserrat text-3xl sm:text-4xl md:text-[48px] lg:text-[64px] font-bold text-black leading-tight">
          Our Blogs
        </h1>

        {/* Subheading */}
        <p className="font-Montserrat mt-4 text-base sm:text-lg md:text-xl font-medium text-black leading-relaxed">
          Stay informed with the latest trends, insights, and expert advice in technology,
          business solutions, and industry innovations. Explore our blogs for valuable
          knowledge and updates.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center h-14 sm:h-[56px] w-full max-w-[520px] bg-gray-100 rounded-md shadow-md px-4">
            <FaSearch className="text-teal-500 mr-3 text-lg" />
            <input
              type="text"
              placeholder="Search blog by topic or keyword"
              className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400 text-sm sm:text-base"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSearch;
