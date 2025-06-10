import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogimageFallback from "../assets/Blogimage1.svg"; 
import { FaSearch } from "react-icons/fa";

const BlogCard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};
  // Fetch blogs from the API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:9090/api/blogs");
        if (response.data.success) {
          setBlogs(response.data.data);
        } else {
          console.error("Error fetching blogs:", response.data.message);
        }
      } catch (error) {
        console.error("API Error:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-lg">Loading blogs...</div>;
  }

  return (
    <div className="container mx-auto px-10">
      {/* Header */}
      <div className="relative w-full px-4 py-12">
        <div className="max-w-[1189px] w-full mx-auto text-center mt-25">
          <h1 className="font-Montserrat text-3xl sm:text-4xl md:text-[48px] lg:text-[64px] font-bold text-black leading-tight">
            Our Blogs
          </h1>
          <p className="font-Montserrat mt-4 text-base sm:text-lg md:text-xl font-medium text-black leading-relaxed">
            Stay informed with the latest trends, insights, and expert advice in technology,
            business solutions, and industry innovations. Explore our blogs for valuable
            knowledge and updates.
          </p>
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

      {/* Highlighted Blog */}
      {blogs.length > 0 && (
        <div className="flex flex-col lg:flex-row bg-white border border-[#529D92] rounded-[20px] overflow-hidden mt-2">
          <div className="w-full lg:w-1/2">
            <img
            src={`http://localhost:9090/images${blogs[0].image}`}
              alt="Blog Thumbnail"
              className="w-full h-full object-cover p-[20px]"
            />
          </div>
          <div className="py-6 lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-sm text-[#157B6C] mb-2">
              <span className="font-semibold">{blogs[0].job_title}</span>
              <span className="text-gray-400">•</span>
               <span>10 min Read</span>
            </div>
           <div className="text-[#9F9F9F] text-sm md:text-base">{formatDate(blogs[0].date)}</div>
            <h2 className="text-xl font-bold mt-2">{blogs[0].title}</h2>
            <p className="text-gray-700 mt-2">{blogs[0].sub_title}</p>
          </div>
        </div>
      )}

      {/* Blog Grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mt-12">
        {blogs.slice(0, 6).map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-[20px] overflow-hidden transform transition-transform hover:scale-[1.02]"
          >
            <div className="h-[250px]">
              <img
                src={`http://localhost:9090/images${blog.image}`}
                alt="Blog Thumbnail"
                className="w-full h-full object-cover rounded-t-[20px] rounded-b-[20px]"
              />
            </div>
            <div className="py-4">
              <div className="flex items-center gap-2 text-sm text-[#157B6C] mb-2">
                <span className="font-semibold">{blog.job_title}</span>
                <span className="text-gray-400">•</span>
                 <span>5 min Read</span>
              </div>
              <h2 className="text-lg font-bold text-black mb-2">{blog.title}</h2>
              <p className="text-sm text-gray-700">{blog.sub_title}</p>
              <div className="mt-3 text-[#9F9F9F] text-sm">{formatDate(blog.date)}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Blogs */}
      <div className="max-w-full mx-auto  mt-12">
        <h2 className="text-start text-2xl sm:text-3xl font-bold mb-8">Recent Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, 3).map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-[20px] overflow-hidden transform transition-transform hover:scale-[1.02]"
            >
              <div className="h-[220px] sm:h-[260px] md:h-[300px]">
                <img
                   src={`http://localhost:9090/images${blog.image}`}
                  alt="Blog Thumbnail"
                  className="w-full h-full object-cover rounded-t-[20px] rounded-b-[20px]"
                />
              </div>
              <div className="py-4">
                <div className="flex items-center gap-2 text-sm text-[#157B6C] font-semibold mb-2">
                  <span>{blog.job_title}</span>
                  <span className="text-gray-400">•</span>
                   <span>5 min Read</span>
                  {/* <span>{blog.is_read}</span> */}
                </div>
                <h3 className="text-lg font-bold text-black mb-2 leading-tight">{blog.title}</h3>
                <p className="text-sm text-gray-700 mb-2">{blog.sub_title}</p>
              <div className="mt-1 text-sm text-[#9F9F9F]">{formatDate(blog.date)}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 mb-8">
          <button className="px-6 py-2 border border-gray-400 rounded-full text-gray-600 hover:bg-gray-100 transition">
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
