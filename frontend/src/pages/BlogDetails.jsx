import React from "react";
import "../styles/pages/BlogDetails.css"
// import Navbar from "../layout/Navbar";
import LocationSection from "./LocationSection";
import RecentBlog from "../components/RecentBlog";
import Blogdetailsimage1 from "../assets/Blogdetailsimage1.svg"; // Correct image path
import LocationSection1 from "../components/LoctionSection1";
const BlogDetails = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* Blog Content */}
      <div className="flex justify-center items-center mt-10">
  <div
    className="detl_blog relative w-[1214px] h-[174px] bg-white rounded-[20px] overflow-hidden shadow-lg opacity-100 p-4 mt-[100px]"
  >
    {/* Category and Read Time */}
    <div className="flex justify-center items-center gap-2 mb-2 w-full h-[24px] text-center">
      <span className="text-[#157B6C] font-semibold text-[16px]">
        Technology
      </span>
      <span className="text-gray-400">•</span>
      <span className="text-[#157B6C] text-[16px]">
        30 min read
      </span>
    </div>
    {/* Title */}
    <h2 className="new_detl text-[40px] w-full h-[110px] font-montserrat font-semibold leading-tight text-black mb-2 text-center">
    Premium WordPress plugins – are they worth paying for?
    </h2>
    {/* Date */}
    <div className="text-[#9F9F9F] text-[14px] text-center w-[1214] h-[24] mt-[-12px]">
      30 March 2024
    </div>
  </div>
</div>
       {/* Image Section */}
       <div className="img_detl flex justify-center items-center mt-4">
        <img
          src={Blogdetailsimage1}
          alt="Blog Details"
          className="w-[1670px] h-[583px] rounded-[20px] opacity-100 mt-5"/>
      </div>
     
       <div className="smm_comm mt-8 px-6 md:px-28">
        <p>To use SMM for your own e-commerce store you need to make sure that you take care of a few things that might help you get the best from the social media.</p><br />
        {/* <h3 className="text-[20px] font-bold text-black mb-2">
          Artificial Intelligence & Automation: Enhancing Efficiency and Decision-Making
        </h3> */}
        <p className="text-[18px] text-black leading-7 mb-4">1. You share posts on your company and products on social media! It’s really a good initiative, but you have to think like the users and understand what else they might be interested in. Now you will have to post on those topics to help them get genuine information from your posts and in the process you will get the attention of your users.</p>
        <p className="text-[18px] text-black leading-7 mb-4">2.
        Understand how effectively you are using SMM to enhance your sale. Unless you do that, you will never know whether you need to work harder or not!.
        </p>
       
        <p className="text-[18px] text-black leading-7 mb-4">3.
        Posting frequency is really important. Whether you post your content directly on your Social Media page or you share posts from your blog, you have to make sure that you keep people interested with quality posts and maintain a nice interval between posts so as to keep them on your blog.
        </p>
       
        <p className="text-[18px] text-black leading-7 mb-4">4.
        Make sure to maintain the ratio between number of subscribers and number of followers to avoid any kind of search engine penalties.
        </p>
       
        <p className="text-[18px] text-black leading-7 mb-4">5.
        Value your users. Replying to their comments and interacting directly with them will make it a lot easier to get to them.
        </p>
        <p>6. Discuss everything about your product and even the problems as well. But do not forget to mention the solutions as well. This will help you in gaining trust.</p><br />
        <p>7. Stay behind the curtains; it’s the platform for you product not you!</p>
        <p>8. Apart from the Social Media platforms like Facebook, Twitter, or Google Plus, you have to concentrate on other social communities as well, where you will have to find your targeted audience.</p>
        <p>9. Have a questionnaire distributed amongst your subscriber to know what they are looking for or the kind of improvement they are hoping for</p>
      </div>
       {/* Text Section */}
       {/* <div className="mt-8 px-6 md:px-28">
        <p>Technology is advancing at a rapid pace, driving innovation across industries and changing the way we live, work, and interact with the world. From artificial intelligence (AI) and cloud computing Technology is advancing at a rapid pace, driving innovation across industries and changing the way we live, work, and interact with the world. From artificial intelligence (AI) and cloud computing <br /> <br />In this blog, we’ll explore some of the most groundbreaking technologies revolutionizing industries and how they are transforming the future.</p><br />
        <h3 className="text-[20px] font-bold text-black mb-2">
          Artificial Intelligence & Automation: Enhancing Efficiency and Decision-Making
        </h3>
        <p className="text-[18px] text-black leading-7 mb-4">Technology is advancing at a rapid pace, driving innovation across industries and changing the way we live, work, and interact with the world. From artificial intelligence (AI) and cloud computing  Artificial Intelligence (AI) and automation are leading the digital revolution. AI-powered solutions are transforming industries by enabling businesses to automate repetitive tasks, improve decision-making, and provide personalized experiences</p>
        <p className="text-[18px] text-black leading-7 mb-4">
          Artificial Intelligence (AI) and automation are leading the digital revolution. AI-powered solutions are transforming industries by enabling businesses to automate repetitive tasks, improve decision-making, and provide personalized experiences.
        </p>
        <h4 className="text-[18px] font-semibold text-black mb-1">AI in Business</h4>
        <p className="text-[18px] text-black leading-7 mb-4">
          Companies use AI-driven chatbots for customer support, predictive analytics for business intelligence, and automation tools for streamlining operations.
        </p>
        <h4 className="text-[18px] font-semibold text-black mb-1">AI in Healthcare</h4>
        <p className="text-[18px] text-black leading-7 mb-4">
          Machine learning algorithms assist in early disease detection, personalized treatments, and robotic surgeries, improving patient outcomes.
        </p>
        <h4 className="text-[18px] font-semibold text-black mb-1">AI in Finance</h4>
        <p className="text-[18px] text-black leading-7 mb-4">
          Fraud detection systems, algorithmic trading, and AI-powered financial advisors are making banking more secure and efficient.
        </p><br />
        <p>Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay</p><br />
        <p>Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay</p><br />
        <p>Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay</p><br />
        <p>Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay Technology is evolving at an unprecedented pace, revolutionizing industries and redefining the way we live and work. From artificial intelligence and automation to blockchain and the Internet of Things, the future is here and it's here to stay</p><br />
      </div> */}
      {/* Additional Content */}
      <RecentBlog />
      <LocationSection1 />
    </div>
  );
};
export default BlogDetails;