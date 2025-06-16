import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight, FaPlay } from 'react-icons/fa';
import It1 from "../assets/It1.svg"
import It2 from "../assets/It2.svg"
import It3 from "../assets/It3.svg"

const experts = [
    {
        image: It1,
    },
    {
        image: It2,
    },
    {
        image: It3,
    },
    {
        image: It1,
    },
    {
        image: It2,
    },
    {
        image: It3,
    },
];

function ITExperts() {
    const carouselRef = useRef(null);

    const handleScroll = (direction) => {
  if (carouselRef.current) {
    const card = carouselRef.current.firstElementChild;
    const scrollAmount = card ? card.offsetWidth + 16 : 250; // 16 for gap (space-x-4)

    if (direction === 'left') {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
};



    return (
       <div className="mx-auto mt-[30px] max-w-[1750px] w-full px-4 md:px-10 h-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left Side Text */}
            <div className="w-full lg:w-1/2 lg:pr-12">
                <div className="relative md:text-start max-w-screen-xl mx-auto">
                    <h2 className="text-center md:text-left text-4xl font-bold font-montserrat text-[#157B6C] mb-2">
                        Meet Our IT Experts
                    </h2>
                    <h1 className="w-full font-montserrat font-bold text-2xl sm:text-3xl md:text-5xl text-black leading-snug text-center md:text-left">
                        Driving Innovation Forward
                    </h1>
                    <p className='w-full max-w-2xl mx-auto text-[14px] sm:text-[16px] md:text-[18px] font-montserrat text-black font-medium mt-4 text-center md:text-left'>Get an inside look at our talented IT team, the minds behind our cutting-edge solutions. Their expertise, dedication, and innovation power our success, ensuring seamless technology solutions for business worldwide.</p>
                </div>
                
                <div className="flex items-center justify-end space-x-4 mt-20">
  <div className="flex-grow w-[200px]  border-t border-1.90 border-[#157B6C]"></div>
  <div className="flex space-x-2">
    <button
      onClick={() => handleScroll('left')}
      className="bg-[#157B6C] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-[#157B6C]"
    >
      <FaArrowLeft />
    </button>

    <button
      onClick={() => handleScroll('right')}
      className="bg-[#157B6C] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-[#157B6C]"
    >
      <FaArrowRight />
    </button>
  </div>
</div>

            </div>


            <div
                ref={carouselRef}
                className="w-full lg:w-1/2 flex overflow-x-auto scrollbar-hide space-x-4 scroll-smooth"
              >
                {experts.map((expert, index) => (
                    <div
                        key={index}
                        className="min-w-[250px] h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-md"
                    >
                        <img
                            src={expert.image}
                            alt={`Expert ${index + 1}`}
                            className="w-full h-full object-cover"
                        />

                      {/* Center Play Button */}
                      {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25">
                            <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
                                <FaPlay className="text-[#157B6C] text-xl ml-1" />
                            </button>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ITExperts;
