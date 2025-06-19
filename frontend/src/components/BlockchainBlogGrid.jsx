import React from "react";
import '../styles/components/BlockchainBlogGrid.css'
import { FaArrowRight } from "react-icons/fa";
import Blockchainblogimg from "../assets/Blockchainblogimg.svg";
import Blockchainblogimg1 from "../assets/Blockchainblogimg1.svg";
import Blockchainblogimg2 from "../assets/Blockchainblogimg2.svg";
import Blockchainrrowblack from '../assets/Blockchainrrowblack.svg'


const blogPosts = [
  {
    title: "How to Implement Blockchain in Business? A Complete Guide",
    date: "June 30, 2020",
    image: Blockchainblogimg,
  },
  {
    title: "How to Implement Blockchain in Business? A Complete Guide",
    date: "June 30, 2020",
    image: Blockchainblogimg1,
  },
  {
    title: "Telemedicine 2.0 - A Comprehensive Guide On What Healthcare Providers Need To Know?",
    date: "June 30, 2020",
    image: Blockchainblogimg2,
  },
];

const BlockchainBlogGrid = () => {
  return (
    <div className="new_blog w-full mx-auto px-4 md:px-8 lg:px-12 py-16 mt-20" style={{ background: 'linear-gradient(to right, #FDFDFD, #F1F4E5)' }}>
        <div className="w-[1680px] m-auto px-4">
    <div className="text-center mb-16">
  <h2 className="text-[22px] leading-snug mb-4 font-Montserrat font-extrabold text-black sm:text-[40px] md:text-[48px]">
    Our Expertise In Blockchain Development <br /> Services Spans Multiple Platforms
  </h2>
  <p className="text-sm leading-relaxed font-medium text-gray-700 mx-auto max-w-full sm:text-base sm:max-w-2xl">
    As a leading Blockchain development company, <span className="font-semibold">TechDevise</span> only hires Blockchain developers
    with a proven track record. That’s why we can handle any task or project, even the most
    complicated ones.
  </p>
</div>


      <div className="new_rid grid grid-cols-2 gap-10 max-w-[1680px] mx-auto">
        <div className="flex flex-col gap-10">
          <BlogCard post={blogPosts[0]} />
          <BlogCard post={blogPosts[1]} />
        </div>
        <div>
          <BlogCard post={blogPosts[2]} large />
        </div>
      </div>
    </div>
    </div>
  );
};

const BlogCard = ({ post, large }) => {
    if (large) {
      return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-[854px] h-[735px]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover"
          />
          <div className="p-6">
            <p className="text-[#157B6C] font-semibold text-sm mb-1">Blog</p>
            <h3 className="text-black text-[20px] font-Montserrat font-bold text-base leading-snug mb-2">
              {post.title}
            </h3>
            <p className="text-gray-500 text-sm mb-4">{post.date}</p>
            <button className="flex items-center w-auto h-auto pt-[8px] pr-[10px] pb-[8px] pl-[20px] gap-2 w-fit px-8 py-3 font-Montserrat fobnt-medium text-[14px] md:text-[16px] bg-[#157B6C] text-white rounded-full shadow hover:bg-green-700 transition">
            Read More
               <div className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center ml-6">
                               <img src={Blockchainrrowblack} alt="blockchainarrow" className='w-4 h-4 text-black' />
                               </div>
            </button>
          </div>
        </div>
      );
    }
  
  return (
    <div className="max-w-[791px] w-full bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6 md:mx-0 mx-auto">
    <img
      src={post.image}
      alt={post.title}
      className="w-full md:w-[320px] h-[200px] md:h-[300px] rounded-lg object-cover"
    />
    <div className="flex flex-col justify-between flex-1">
      <div>
        <p className="text-[#157B6C] font-semibold text-sm mb-1">Blog</p>
        <h3 className="text-black text-[20px] font-Montserrat font-bold leading-snug mb-2">
          {post.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4">{post.date}</p>
      </div>
      <button className="flex items-center w-auto h-auto pt-[8px] pr-[10px] pb-[8px] pl-[20px] gap-2 px-8 py-3 font-medium text-[14px] md:text-[16px] bg-[#157B6C] text-white rounded-full shadow hover:bg-green-700 transition w-fit">
        Read More
        <div className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center ml-2">
          <img src={Blockchainrrowblack} alt="blockchainarrow" className="w-4 h-4" />
        </div>
      </button>
    </div>
  </div>
  
  );
};

export default BlockchainBlogGrid;
