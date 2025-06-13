import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/pages/TeamShowcase.css";

const TeamShowcase = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [teamImages, setTeamImages] = useState([]);
  const [teamWorkImages, setTeamWorkImages] = useState([]);
  const [officeActivityImages, setOfficeActivityImages] = useState([]);

  // Fetch teamWork and officeActivity images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const [teamRes, officeRes] = await Promise.all([
          axios.get('http://localhost:9090/api/teams'),
          axios.get('http://localhost:9090/api/officeActivity'),
        ]);

        if (teamRes.data.success) {
          setTeamWorkImages(teamRes.data.data);
        }
        if (officeRes.data.success) {
          setOfficeActivityImages(officeRes.data.data);
        }
        const allImages = [...teamRes.data.data, ...officeRes.data.data];
        setTeamImages(allImages);
      } catch (error) {
        console.error("Failed to fetch images", error);
      }
    };

    fetchImages();
  }, []);

  const openImagePopup = (image) => {
    setSelectedImage(image);
  };

  const closeImagePopup = () => {
    setSelectedImage(null);
  };

 const getImagesForTab = () => {
  if (activeTab === 'teamWork') return teamWorkImages.slice(0, 12);
  if (activeTab === 'officeActivity') return officeActivityImages.slice(0, 12);
  return teamImages.slice(0, 12); // 'all' tab
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
            {getImagesForTab().map((image, index, array) => {
              const isLargeImage = index === 0 || index === array.length - 1;

              return (
                <div
                  key={index}
                  className={`${
                    isLargeImage ? 'col-span-1 sm:col-span-2' : ''
                  } rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer`}
                  onClick={() => openImagePopup(image)}
                >
                  <img
                    src={`http://localhost:9090/images/${image.image || image.image}`} 
                    alt={image.alt || 'Team Image'}
                    className="w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover"
                  />
                </div>
              );
            })}
          </div>
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
              src={`http://localhost:9090/images${selectedImage.image || selectedImage.image}`}
              alt={selectedImage.alt || 'Selected Image'}
              className="w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamShowcase;
