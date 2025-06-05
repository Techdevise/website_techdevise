import { useState } from "react";
import '../index.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../styles/pages/Testimonials.css"
import Alex from "../assets/Alex.svg"
import Sarah from "../assets/Sarah.svg"
import Michael from "../assets/Michael.svg"
import Jessica from "../assets/Jessica.svg"
import Videoplayicon from "../assets/Videoplayicon.svg"



const Play = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: Alex,
  },
  {
    id: 2,
    name: "Sarah Miller",
    text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
    image: Sarah,
  },
  {
    id: 3,
    name: "Michael Chen",
    text: "There are many variations of passages of Lorem Ipsum available.",
    image: Michael,
  },
  {
    id: 4,
    name: "Jessica Wong",
    text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested and .",
    image: Jessica,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getIndex = (offset) => {
    return (activeIndex + offset + testimonials.length) % testimonials.length;
  };

  return (
    <div className="test_nomials w-full max-w-[1680px] mx-auto mt-10 px-4 wtest-macbook">
      <div className="mx-auto mb-24">

        <h2 style={{
          display: 'inline-table',
          background: "linear-gradient(to right, #e0e0e0, #157B6C)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          color: "#157B6C",
        }} className="text-[32px] md:text-6xl font-bold text-[#c5e4d9]">
          What our customers say
          <br />
          about us
        </h2>


        <div className="flex justify-end arrow_new">
          <div className="flex gap-2">
            <button onClick={prevTestimonial} className="p-2 w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#c5e4d9]">
              <FaArrowLeft className="text-[#157B6C] text-md" />
            </button>
            <button onClick={nextTestimonial} className="p-2 w-10 h-10 flex items-center justify-center rounded-full bg-[#0d6e52] text-white">
              <FaArrowRight className="text-white text-md" />
            </button>
          </div>
        </div>


        <div className="flex items-center gap-8">

          <div className="abc hidden md:block w-1/6 bg-[#0a2a1e] p-4 rounded-lg">
            <div className="main_test relative rounded-lg overflow-hidden">
              <img
                src={testimonials[getIndex(-1)].image || "/placeholder.svg"}
                alt={testimonials[getIndex(-1)].name}
                className="w-full aspect-[3/4] object-cover rounded-lg testingg_img"
              />
              <div className="absolute inset-0 flex items-center justify-center">
               <img src={Videoplayicon} alt="Videoplayicon" className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>

          {/* Main testimonial */}
          <div className="abc flex-1 bg-[#0a2a1e] rounded-lg p-6 flex flex-col md:flex-row gap-8">

            <div className="md:w-[50%]">
              <div className="main_test relative rounded-lg overflow-hidden">
                <img
                  src={testimonials[activeIndex].image || "/placeholder.svg"}
                  alt={testimonials[activeIndex].name}
                  className="w-full aspect-[3/4] object-cover rounded-lg testingg_img"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                <img src={Videoplayicon} alt="Videoplayicon" className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>


            <div className="test_monial md:w-3/4 relative">
              <h3 className="text-3xl font-bold text-white mb-4">{testimonials[activeIndex].name}</h3>
              <p className="text-white text-lg leading-relaxed mb-6">{testimonials[activeIndex].text}</p>

              {/* Star Rating */}
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-[#B88533] fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>


          <div className="abc hidden md:flex w-1/3 gap-8">
            {[1, 2].map((offset) => (
              <div key={offset} className="w-1/2 bg-[#0a2a1e] p-4 rounded-lg">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={testimonials[getIndex(offset)].image || "/placeholder.svg"}
                    alt={testimonials[getIndex(offset)].name}
                    className="w-full aspect-[3/4] object-cover rounded-lg testingg_img"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                  <img src={Videoplayicon} alt="Videoplayicon" className="w-12 h-12 text-white" />
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;