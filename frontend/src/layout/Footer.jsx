import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import Rectangle114 from "../assets/Rectangle 114.png";
// import Rectangle191 from "../assets/Rectangle 191.png";
import Footerblog1 from "../assets/Footerblog1.svg";
import Footerblog2 from "../assets/Footerblog2.svg";
import techdeviselogo from "../assets/techdeviselogo.png";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";
import LinkedIN from "../assets/LinkedIN.svg";
import Twitter from "../assets/Twitter.svg";
import Location from "../assets/Location.png";
import Gmaillogo from "../assets/Gmaillogo.png";
import Phonelogo from "../assets/Phonelogo.png";
const Footer = ({ onContactClick }) => {
  return (
    <footer className="footer-bg relative text-white pt-12 pb-6 px-6 fotter_padding">
      <div className="px-6 mx-auto">
        {/* Background Image */}
        <div className=" inset-0 z-0 rounded-t-[90px]"></div>

        {/* Main Footer Content */}
        <div className="relative z-10 container mx-auto min-h-[50vh]">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold leading-tight md:text-4xl md:leading-snug text-center md:text-left">
                Keep up with the latest
              </h2>
            </div>
            <div className="md:w-1/2 flex justify-end mt-2">
              <div className="flex items-center border rounded-[12px] p-2 w-[600px] md:w-[450px] h-[45px] md:h-[65px] bg-[rgba(255,255,255,.26)]">
               <input type="email" placeholder="Enter your email" className="bg-transparent text-white w-full outline-none px-4 placeholder-white text-[20px] font-medium leading-[46px] font-montserrat opacity-70 md:placeholder:text-[20px] placeholder:text-[16px]" />
                <button className="bg-[#157B6C] text-white md:px-8 px-4 py-0   md:py-3 rounded-[9px] md:w-[140px] w-[100px] h-[30px] md:h-[50px]  opacity-100 font-bold md:text-[18px] text-[16px] font-montserrat">
                  Send
                </button>
              </div>
            </div>
          </div>
          <hr className="border-[#217669] my-8" />

          {/* Middle Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <div className="flex items-center mb-4 justify-center md:justify-start">
                <img
                  src={techdeviselogo}
                  alt="Tech Devise Logo"
                  className="md:w-[179px] w-[159px]  md:h-[56px] h-[40px]"
                />
                <span className="text-2xl font-bold ml-2"></span>
              </div>
              <p className="text-white opacity-100 space-y-2 text-[14px] md:text-[16px] font-normal leading-[27px] font-montserrat text-center md:text-left">
                Tech Devise is a digital solution provider which offers various
                digital services that will help your online business to
                flourish. We expertise in providing services like digital
                marketing, app development, web development, CMS development and
                many more.
              </p>
              <div className="flex justify-center md:justify-start">
                <button
                  onClick={onContactClick}
                  className="whitespace-nowrap mt-4 w-[183px] h-[49px] rounded-lg bg-white font-bold text-[16px] text-[#137365] px-10 py-2"
                >
                  Contact Now!
                </button>
              </div>
            </div>

            {/* Services */}
            <div className="hidden md:block text-center md:text-left">
              <h3 className="text-[20px] font-semibold mb-3 text-white font-montserrat">
                Services
              </h3>
              <ul className="text-white opacity-100 space-y-2 text-[16px] font-normal leading-[27px] font-montserrat">
                <li>Android Development</li>
                <li>iOS Development</li>
                <li>CMS</li>
                <li>E-commerce/Shopify</li>
                <li>SEO</li>
                <li>SMM</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="hidden md:block text-center md:text-left">
              <h3 className="font-semibold mb-3 text-white text-[20px] font-montserrat">
                Quick Links
              </h3>
              <ul className="text-white opacity-100 space-y-2 text-[16px] font-normal leading-[27px] font-montserrat">
                <li>
                  <Link to="/about">About TechDevise</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>

            {/* Recent Blogs */}
            <div className="hidden md:block">
              <h3 className="font-semibold mb-3 text-white text-[20px] font-montserrat text-center md:text-left">
                Recent Blogs
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 footer-blog-grid">
                {[
                  { date: 15, image: Footerblog1 },
                  { date: 20, image: Footerblog2 },
                ].map((blog, index) => (
                  <div
                    key={index}
                    className="bg-white text-black w-full rounded-[10px] shadow-md flex flex-col items-center p-3"
                  >
                    <img
                      src={blog.image}
                      alt="Blog"
                      className="w-full h-[120px] rounded-[10px] object-cover"
                    />
                    <p className="text-sm font-semibold text-center mt-2">
                      Innovative Design: Crafting Seamless...
                    </p>
                    <span className="bg-[#20856f] text-white text-sm px-3 py-1 rounded-md mt-2">
                      {blog.date} Feb
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center md:justify-end mt-4">
                <button className="border border-white text-white px-6 py-2 rounded-[6px] font-semibold hover:bg-white hover:text-[#0F5B4F] transition">
                  View More
                </button>
              </div>
            </div>
          </div>
<div className="block md:hidden">
          <div
            // style={{ padding: "30px 30px" }}
            className="relative text-white md:py-6 py-0 px-6 md:px-20 rounded-lg bg-cover bg-center bg-no-repeat opacity-100 text-6xl font-semibold bg-transition  md:bg-[rgba(255,255,255,0.05)] my-12 macbook-footer"
          >
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm text-center md:text-left">
              {/* Address and Contact */}
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 macbook-contact-container md:w-auto w-[465px]">
                <p className="flex items-center space-x-2 pr-0 md:pr-[70px] text-white font-normal text-[18px] opacity-100 leading-[29px] macbook-address">
                  <img
                    src={Location || "/placeholder.svg"}
                    alt="Location Icon"
                    className="hidden md:block w-6 h-6 macbook-icon"
                  />
                  <span className="text-[14px] md:text-[18px]">
                    F - 268, Industrial Area, Sector 74, Sahibzada <br /> Ajit
                    Singh Nagar, Punjab 160071
                  </span>
                </p>
                <p className="flex items-center space-x-2 pr-0 md:pr-[70px] text-white font-normal text-[18px] opacity-100 leading-[29px] macbook-email">
                  <img
                    src={Gmaillogo || "/placeholder.svg"}
                    alt="Gmail Icon"
                    className="macbook-icon"
                  />
                  <span>techdevise@gmail.com</span>
                </p>
                <p className="flex items-center space-x-2 text-white font-normal text-[18px] opacity-100 leading-[29px] macbook-phone">
                  <img
                    src={Phonelogo || "/placeholder.svg"}
                    alt="Phone Icon"
                    className="macbook-icon"
                  />
                  <span>+91 1234567891</span>
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-3 text-lg mt-4 items-center justify-center opacity-100 md:justify-end macbook-social">
                <a
                  href="#"
                  className="w-[30px] h-[30px] flex items-center justify-center rounded-lg opacity-100 macbook-social-icon"
                >
                  <img
                    src={Facebook || "/placeholder.svg"}
                    alt="Facebook"
                    className="w-full h-full object-contain"
                  />
                </a>
                <a
                  href="#"
                  className="w-[30px] h-[30px] flex items-center justify-center rounded-lg opacity-100 macbook-social-icon"
                >
                  <img
                    src={Instagram || "/placeholder.svg"}
                    alt="Instagram"
                    className="w-full h-full object-contain"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/tech-devise/posts/?feedView=all"
                  className="w-[30px] h-[30px] flex items-center justify-center rounded-lg opacity-100 macbook-social-icon"
                >
                  <img
                    src={LinkedIN || "/placeholder.svg"}
                    alt="LinkedIn"
                    className="w-full h-full object-contain"
                  />
                </a>
                <a
                  href="#"
                  className="w-[30px] h-[30px] flex items-center justify-center rounded-lg opacity-100 macbook-social-icon"
                >
                  <img
                    src={Twitter || "/placeholder.svg"}
                    alt="Twitter"
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
          </div>
          <div className="hidden md:block">
    <div
            style={{ padding: "30px 30px" }}
            className="relative text-white py-6 px-6 md:px-20 rounded-lg bg-cover bg-center bg-no-repeat opacity-100 text-6xl font-semibold bg-[rgba(255,255,255,0.05)] my-12 macbook-footer"
          >
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm text-center md:text-left">
              {/* Address and Contact */}
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 macbook-contact-container">
                <p
                  style={{ padding: "0 70px 0 0" }}
                  className="flex items-center space-x-2 text-white font-normal text-[16px] opacity-100 leading-[29px] macbook-address"
                >
                  <img src={Location || "/placeholder.svg"} alt="Location Icon" className="w-6 h-6 macbook-icon" />
                  <span>
                    F - 268, Industrial Area, Sector 74, Sahibzada <br /> Ajit Singh Nagar, Punjab 160071
                  </span>
                </p>
                <p
                  style={{ padding: "0 70px 0 0" }}
                  className="flex items-center space-x-2 text-white font-normal text-[18px] opacity-100 leading-[29px] macbook-email"
                >
                  <img src={Gmaillogo || "/placeholder.svg"} alt="Gmail Icon" className="macbook-icon" />
                  <span>techdevise@gmail.com</span>
                </p>
                <p className="flex items-center space-x-2 text-white font-normal text-[18px] opacity-100 leading-[29px] macbook-phone">
                  <img src={Phonelogo || "/placeholder.svg"} alt="Phone Icon" className="macbook-icon" />
                  <span>+91 1234567891</span>
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-3 text-lg mt-4 items-center justify-center opacity-100 md:justify-end macbook-social">
                <a
                  href="#"
                  className="w-[30px] h-[30px] flex items-center justify-center rounded-lg opacity-100 macbook-social-icon"
                >
                  <img src={Facebook || "/placeholder.svg"} alt="Facebook" className="w-full h-full object-contain" />
                </a>
                <a
                  href="#"
                  className="w-[30px] h-[30px] flex items-center justify-center rounded-lg opacity-100 macbook-social-icon"
                >
                  <img src={Instagram || "/placeholder.svg"} alt="Instagram" className="w-full h-full object-contain" />
                </a>
                <a
                  href="https://www.linkedin.com/company/tech-devise/posts/?feedView=all"
                  className="w-[30px] h-[30px] flex items-center justify-center rounded-lg opacity-100 macbook-social-icon"
                >
                  <img src={LinkedIN || "/placeholder.svg"} alt="LinkedIn" className="w-full h-full object-contain" />
                </a>
                <a
                  href="#"
                  className="w-[30px] h-[30px] flex items-center justify-center rounded-lg opacity-100 macbook-social-icon"
                >
                  <img src={Twitter || "/placeholder.svg"} alt="Twitter" className="w-full h-full object-contain" />
                </a>
              </div>
            </div>
          </div>
  </div>

          {/* <hr className="border-gray-500 my-6" /> */}

          {/* Copyright Section */}
          <div className="opacity-100 flex flex-col md:flex-row justify-between items-center text-[16px] text-white font-normal text-center md:text-left gap-2">
            <p className="text-[10px] md:text-[14px]">
              Privacy Policy &nbsp; | &nbsp; Terms & Conditions
            </p>
            <p className="text-[10px] md:text-[14px]">
              Techdevise &copy; 2025. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
