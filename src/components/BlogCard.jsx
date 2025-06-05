import React from "react";
// import '../styles/components/Blogcard.css';
import Blogimage1 from "../assets/Blogimage1.svg";
import Blogimage2 from "../assets/Blogimage2.svg";
import Blogimage3 from "../assets/Blogimage3.svg";
import Blogimage4 from "../assets/Blogimage4.svg";

const blogs = [
  {
    id: 1,
    image: Blogimage2,
    category: "Wordpress",
    readTime: "5 min read",
    date: "30 March 2024",
  },
  {
    id: 2,
    image: Blogimage3,
    category: "Management",
    readTime: "5 min read",
    date: "30 March 2024",
  },
  {
    id: 3,
    image: Blogimage4,
    category: "Research",
    readTime: "5 min read",
    date: "30 March 2024",
  },
];

const BlogCard = () => {
  return (
    <div className="container mx-auto px-10">
      {/* Main Blog Card */}
      <div className="flex flex-col  lg:flex-row bg-white border border-[#529D92] rounded-[20px] overflow-hidden mt-2 shadow-md">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={Blogimage1}
            alt="Blog Thumbnail"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="p-6 lg:w-1/2 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-sm text-[#157B6C] mb-2">
            <span className="font-semibold">Wordpress plugin</span>
            <span className="text-gray-400">•</span>
            <span>30 min read</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
            Driving Innovation in Tech
          </h2>
          <p className="text-lg md:text-xl text-black font-medium mb-4">
            Premium WordPress plugins – are they worth paying for?
          </p>
          <div className="text-[#9F9F9F] text-sm md:text-base">30 March 2024</div>
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 relative z-0">
  {blogs.map((blog) => (
     <div
        key={blog.id}
        className="bg-white rounded-[20px] overflow-hidden shadow-md transform transition-transform hover:scale-[1.02]"
      >
      {/* Image */}
      <div className="h-[250px]">
        <img
          src={blog.image}
          alt="Blog Thumbnail"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-[#157B6C] mb-2">
          <span className="font-semibold">{blog.category}</span>
          <span className="text-gray-400">•</span>
          <span>{blog.readTime}</span>
        </div>
        <h2 className="text-lg font-bold text-black mb-2">
          Want to change your WordPress theme? Here’s what you should consider
        </h2>
        <p className="text-sm text-gray-700">
          Changing a WordPress theme isn't hard but needs careful planning. Here's what you must consider before switching your theme.
        </p>
        <div className="mt-3 text-[#9F9F9F] text-sm">{blog.date}</div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default BlogCard;
