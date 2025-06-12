import React, {useState} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; 
import "../styles/components/IOSAppSection.css"
import Iosabout from "../assets/Iosabout.png";
import blockchain from "../assets/blockchain.png";
import Mobilerrowicon from "../assets/Mobilerrowicon.svg";
import Techuseranroid from "../assets/Techuseranroid.svg";
import Buildingnativeapp from "../assets/Buildingnativeapp.svg";


const slides = [
  {
    image: Iosabout,
    heading: "Building Interactive and out of the box iOS app",
    description: `Tech Devise believes in achieving complete customer satisfaction. This
    is the primary force that drives our company. Our expert team of professionals
    incorporates only the best programming practices that are duly backed by updated
    technology. This factor helps us to develop and create user-friendly and robust iOS
    applications. Our team also provides assistance by offering additional testing and
    support services during the pre and post-application development stages. The final app
    delivered is highly optimized and is bug-free, allowing users to relish a smooth
    interactive app on iOS devices. Get in touch with our team to get immediate results.`,
  },
  {
    image: Techuseranroid, 
    heading: "Tech Devise: Developing User-friendly and Flexible ANDROID APPLICATIONS",
    description: `Tech Devise is an emerging digital marketing company that specializes in the field of Android App development. Our firm possesses passionate professionals that hold various accolades in the aspect of mobile application development. The Android Apps developed by our team has helped numerous businesses to reach out to their target audience efficiently. The applications developed are backed with relevant market research and complete industry analysis such that it meets the standard of the concerned sector. Moreover, the technology adopted is of the finest quality making the applications formulated easy-to-use and flexible as per the needs and demands of our customers.`,
  },
  {
    image: Buildingnativeapp, 
    heading: "Building Interactive, Robust, and Scalable React Native App",
    description: `At Tech Devise we expertise in building React Native App Development. In this process, we create a cross mobile platform that allows you to publish your app on various mobile platforms. In this process, you do not need to create individual apps for various kinds of mobile platforms. All you need is only to React Native App and this will run across various mobile platforms. This development process is less time consuming and is also budget-friendly.`,
  },
];

const IOSAppSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
const goToPrevSlide = () => {
  setCurrentSlide((prevIndex) =>
    prevIndex === 0 ? slides.length - 1 : prevIndex - 1
  );
};

const goToNextSlide = () => {
  setCurrentSlide((prevIndex) =>
    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
  );
};
  return (
    <div className="new_sec_about w-[1678px] mx-auto inset-x-0 flex items-center overflow-hidden p-0">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2 lg:w-1/3 m-0 flex justify-center">
        <img
          src={slides[currentSlide].image}
    alt="iOS Section"
          className="new_imgg w-full max-w-[526px] h-auto rounded-lg shadow-md object-cover"
        />
      </div>
      {/* Right Side: Text Content */}
      <div className="new_col_dis txxt_abou w-1/2 md:w-1/2 lg:w-[66%] px-6">
  <h2 className="new_hed text-[#000000] font-Montserrat font-bold text-[48px] leading-tight text-left mt-[50px]">
  {slides[currentSlide].heading}
  </h2>
  <p className="text-gray-700 text-left font-Montserrat text-[18px] mt-[20px]">
  {slides[currentSlide].description}

  </p>
  <button className="w-[265px] h-[65px] mt-6 px-6 py-3 bg-[#FCFFEE] text-[#000000] font-Archivo font-semibold text-[20px] border-2 border-[#000000] rounded-xl shadow-md flex items-center gap-2 hover:bg-gray-100">
    More Information <img src={Mobilerrowicon} alt="" />
  </button>
   {/* Arrow Buttons */}
   <div className="relative flex gap-4 justify-end bottom-10">
      <button  onClick={goToPrevSlide} className="w-10 h-10 p-3 bg-black flex items-center justify-center text-white rounded-full hover:bg-gray-800">
       <FaArrowLeft />
      </button>
      <button onClick={goToNextSlide} className="w-10 h-10 p-3 bg-black flex items-center justify-center text-white rounded-full hover:bg-gray-800">
       <FaArrowRight />
      </button>
    </div>
</div>
    </div>
  );
};
export default IOSAppSection;