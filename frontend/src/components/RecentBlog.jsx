import React from "react";
import "../styles/pages/BlogDetails.css"
import Recentblog1 from "../assets/Recentblog1.svg";
import Recentblog2 from "../assets/Recentblog2.svg";
import Recentblog3 from "../assets/Recentblog3.svg";
import Rectangle4 from "../assets/Rectangle 187.png";
import Rectangle5 from "../assets/Rectangle 188.png";
import Rectangle6 from "../assets/Rectangle 189.png";
const blogs = [
  {
    id: 1,
    image: Recentblog1,
    category: "Wordpress",
    readTime: "5 min read",
    date: "30 June 2020",
    title: "Want to change your WordPress theme? Here’s what you should consider",
    description:
      "Changing WordPress theme is not that complicated a job, but it does require expertise and there are a few things that you have to take care of. Here are the things that you have to consider before change your theme on WordPress website.",
  },
  {
    id: 2,
    image: Recentblog2,
    category: "Wed development",
    readTime: "5 min read",
    date: "30 June 2020",
    title: "Cheap web development – why you shouldn’t fall prey!",
    description:
      "Quality web development is a pricey affair. A well-made website with necessary functionalities will cost you a few hundred dollars. But since many wannabe webowners do not want to spend that much on a website, they tend to hire developers who promise to do the work for peanuts.",
  },
  {
    id: 3,
    image: Recentblog3,
    category: "Wordpress plugins",
    readTime: "5 min read",
    date: "30 November 2024",
    title: "Premium WordPress plugins – are they worth paying for?",
    description:
      "If you have been working with WordPress for long enough, you must have seen 3 different types of plugins available in the WordPress store – Free, Premium, and Freemium versions. Mostly people tend to use the freemium plugins.",
  },
];
const RecentBlog = () => {
  return (
    <div className="rec_blog max-w-[1677px] h-[605] mx-auto mt-12">
      {/* Title */}
      <h2 className="text-[32px] font-bold mb-8">Recent Blog</h2>
      {/* Grid Layout */}
      <div className="rec_blog1 grid grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border border-gray-300 rounded-[20px] shadow-md overflow-hidden transition-transform transform hover:scale-[1.02] cursor-pointer">
            {/* Image */}
            <img
              src={blog.image}
              alt="Blog Thumbnail"
              className="w-[537px] h-[336px] object-cover rounded-t-[20px]"
            />
            {/* Content */}
            <div className="p-4">
              {/* Category and Read Time */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#157B6C] font-semibold">
                  {blog.category}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-[#157B6C]">{blog.readTime}</span>
              </div>
              {/* Title */}
              <h3 className="text-[18px] font-bold leading-tight mb-2">
                {blog.title}
              </h3>
              {/* Description */}
              <p className="text-[14px] text-gray-500 leading-relaxed mb-2">
                {blog.description}
              </p>
              {/* Date */}
              <div className="text-[14px] text-gray-400">{blog.date}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Load More Button */}
      <div className="text-center mt-8">
      </div>
    </div>
  );
};
export default RecentBlog;