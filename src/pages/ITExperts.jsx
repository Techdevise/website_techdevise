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
            const scrollAmount = 300;
            if (direction === 'left') {
                carouselRef.current.scrollLeft -= scrollAmount;
            } else {
                carouselRef.current.scrollLeft += scrollAmount;
            }
        }
    };

    return (
        <div
            className="mx-auto mt-[30px] w-[1672px] h-[447px] opacity-100 flex items-center justify-between">
            {/* Left Side Text */}
            <div className="flex-1 pr-12">
                <div className="relative">
                    <h2 className="text-left text-4xl font-bold font-montserrat text-[#157B6C] mb-2">
                        Meet Our IT Experts
                    </h2>
                    <h1 className="w-full max-w-[708px] font-montserrat font-bold text-[48px] font-[#00000] opacity-100">
                        Driving Innovation Forward
                    </h1>
                    <p className='w-full max-w-[618px] font-[18px] font-montserrat text-[#000000] font-medium opacity-100'>Get an inside look at our talented IT team, the minds behind our cutting-edge solutions. Their expertise, dedication, and innovation power our success, ensuring seamless technology solutions for business worldwide.</p>
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
                className="flex-1 flex overflow-x-scroll scrollbar-hide space-x-4 scroll-smooth relative"
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
