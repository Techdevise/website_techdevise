import React, { useState } from 'react';
import "../styles/pages/TeamShowcase.css";
import Tdteam1 from "../assets/Tdteam1.svg";
import Tdteam5 from "../assets/Tdteam5.svg";
import Tdteam6 from "../assets/Tdteam6.svg";
import Tdteam8 from "../assets/Tdteam8.svg";
import Tdteam10 from "../assets/Tdteam10.svg";
import Tdteam11 from "../assets/teams12.svg";
import Tdteam13 from "../assets/Tdteam13.svg";
import Tdteam15 from "../assets/Tdteam15.svg";
import Tdteam12 from "../assets/Tdteam11.svg";
import teams from "../assets/teamimg.svg";

const TeamShowcase = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const teamImages = [
    { src: teams, alt: "Team Bonding" },
    { src: Tdteam8, alt: "Game Night" },
    { src: Tdteam5, alt: "Team Building" },
    { src: Tdteam11, alt: "Team Event" },
    { src: Tdteam15, alt: "Team Discussion" },
    { src: Tdteam5, alt: "Game Night" },
    { src: Tdteam6, alt: "Team Building" },
    { src: Tdteam1, alt: "Team Event" } // This will be the last image spanning 2 columns
  ];
   const teamtab = [
    { src: teams, alt: "Team Bonding" },
    { src: Tdteam8, alt: "Game Night" },
    { src: Tdteam5, alt: "Team Building" },
    { src: Tdteam11, alt: "Team Event" },
    { src: Tdteam15, alt: "Team Discussion" },
    { src: Tdteam12, alt: "Game Night" },
    { src: Tdteam6, alt: "Team Building" },
    { src: Tdteam1, alt: "Team Event" } // This will be the last image spanning 2 columns
  ];
   const activeTab12 = [
    { src: Tdteam1, alt: "Team Bonding" },
    { src: Tdteam10, alt: "Game Night" },
    { src: Tdteam5, alt: "Team Building" },
    { src: Tdteam11, alt: "Team Event" },
    { src: Tdteam5, alt: "Team Discussion" },
    { src: Tdteam13, alt: "Game Night" },
    { src: Tdteam6, alt: "Team Building" },
    { src: Tdteam15, alt: "Team Event" } // This will be the last image spanning 2 columns
  ];

  const openImagePopup = (image) => {
    setSelectedImage(image);
  };

  const closeImagePopup = () => {
    setSelectedImage(null);
  };

  return (
  <div className="relative w-full max-w-[1680px] bg-white mx-auto px-4 md:px-8 lg:px-8">
  <div className="w-full max-w-[1680px] mx-auto">
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-8 gap-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#157B66]">
        Life @ Techdevise
      </h2>
      <div className="flex flex-wrap gap-2">
        {['all', 'teamWork', 'officeActivity'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === tab
                ? 'bg-[#02574B] text-white'
                : 'border border-[#02574B] text-[#02574B]'
            }`}
          >
            {tab === 'all'
              ? 'All'
              : tab === 'teamWork'
              ? 'Team Work'
              : 'Office Activity Time'}
          </button>
        ))}
      </div>
    </div>

    {/* Grid Section */}
    <div className="w-full">
      {(activeTab === 'all' ? teamImages : activeTab === 'teamWork' ? teamtab : activeTab12) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
          {(activeTab === 'all'
            ? teamImages
            : activeTab === 'teamWork'
            ? teamtab
            : activeTab12
          ).map((image, index, array) => {
            // Large image logic (first and last)
            const isLargeImage =
              index === 0 || index === array.length - 1;

            return (
              <div
                key={index}
                className={`${
                  isLargeImage ? 'col-span-1 sm:col-span-2' : ''
                } rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer`}
                onClick={() => openImagePopup(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  </div>

  {/* Image Popup Modal */}
  {selectedImage && (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={closeImagePopup}
    >
      <div className="relative max-w-4xl w-full">
        <button
          className="absolute -top-10 right-0 text-white text-3xl"
          onClick={closeImagePopup}
        >
          ×
        </button>
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          className="w-full max-h-[80vh] object-contain"
        />
      </div>
    </div>
  )}
</div>

  );
};

export default TeamShowcase;