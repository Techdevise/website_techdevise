
import { useState, useRef, useEffect } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { motion } from 'framer-motion';
import "../styles/components/BlockchainSolution.css"
import blockchain1 from "../assets/blockchain1.svg"
import Vectorimage from "../assets/Vectorimage.svg"
import Blockchainbridges from "../assets/Blockchainbridges.svg"
import Blockchainicons2 from "../assets/Blockchainicons2.svg"

const BlockchainSolution = () => {
  // Sample card data - you can expand this with your actual data
  const cards = [
    {
      id: 1,
      icon: Blockchainbridges,
      title: "Blockchain Bridges",
      description:
        "Our blockchain development service professionals develop bespoke blockchain bridges tailored to your specific needs, allowing seamless interoperability and asset transfers across diverse blockchain networks.",
    },
    {
      id: 2,
      icon: Blockchainicons2,
      title: "Metaverse Spaces",
      description:
        "Our blockchain app development services are constantly pushing the limits of what will inspire the next in the metaverse for users worldwide, whether it's a virtual showroom, a collaborative workspace, or an entertainment venue, we got you covered.",
    },
    {
      id: 3,
      icon: Blockchainicons2,
      title: "Decentralized Exchanges (DEX)",
      description:
        "We create secure, scalable and customizable DFX platforms, designed for operators, asset managers, token issuers, brokers, and dealers, offer users seamless access to extensive digital assets while ensuring they have complete control over their funds.",
    },
    {
      id: 4,
      icon: Blockchainbridges,
      title: "Smart Contracts",
      description:
        "Our expert developers create secure and efficient smart contracts that automate and enforce agreements without intermediaries, ensuring transparent and tamper-proof transactions across various blockchain platforms.",
    },
    {
      id: 5,
      icon: Blockchainicons2,
      title: "NFT Marketplaces",
      description:
        "We build custom NFT marketplaces that enable the creation, buying, selling, and trading of unique digital assets, providing a secure platform for artists, collectors, and businesses to engage in the growing NFT ecosystem.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)
  const [visibleCards, setVisibleCards] = useState(3)

  // Update visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2)
      } else {
        setVisibleCards(3)
      }
    }

    // Initial call
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Function to handle next slide
  const handleNextSlide = () => {
    if (currentIndex < cards.length - visibleCards) {
      setCurrentIndex(currentIndex + 1)
    } else {
      // Loop back to the beginning
      setCurrentIndex(0)
    }
  }

  // Function to handle previous slide
  const handlePrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      // Loop to the end
      setCurrentIndex(cards.length - visibleCards)
    }
  }

  // Apply the transform when currentIndex changes
  useEffect(() => {
    if (carouselRef.current) {
      // Calculate card width based on screen size
      let cardWidth = 420 // Default for desktop

      if (window.innerWidth < 640) {
        cardWidth = window.innerWidth - 64 // Full width minus padding for mobile
      } else if (window.innerWidth < 1024) {
        cardWidth = 340 // Smaller cards for tablet
      }

      const translateValue = currentIndex * -cardWidth
      carouselRef.current.style.transform = `translateX(${translateValue}px)`
    }
  }, [currentIndex, visibleCards])

  return (
    <div
    className="relative w-full max-w-[1920px] h-auto min-h-[550px] md:min-h-[650px] lg:h-[850px] m-auto overflow-hidden my-5 md:my-10"
    style={{ background: "linear-gradient(to right, #E4F8F5, #BADBF7)" }}
  >
      {/* Main content container */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-6 md:py-8 lg:py-20 w-full mx-auto">
        {/* Heading section */}
        <div className="max-w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-extrabold font-Montserrat mb-4 md:mb-8 ml-2 sm:ml-8 md:ml-12 lg:ml-20">
            Blockchain Development Solutions We Deliver
          </h1>
          <p className="text-sm md:text-[16px] text-black font-medium font-Montserrat mb-4 sm:mb-8 lg:mb-12 ml-2 sm:ml-8 md:ml-12 lg:ml-20">
            Unlock your business's full potential with our expert blockchain development services, designed to <br />{" "}
            transform and innovate your operations with tailor-made, agile solutions.
          </p>
        </div>

        {/* 3D Illustration */}
        <div className="hidden md:block absolute blockchain-img left-0 md:left-10 lg:left-20 bottom-0 md:bottom-5 lg:bottom-10 w-[300px] md:w-[500px] lg:w-[733px] h-auto md:h-[400px] lg:h-[528px] z-10">
          <img
            src={blockchain1 || "/placeholder.svg"}
            alt="Blockchain technology illustration"
            className="w-full h-auto md:w-[500px] lg:w-[700px] md:h-[400px] lg:h-[528px]"
          />
        </div>

        {/* Service cards carousel container */}
        <div className="relative w-full flex justify-center md:justify-end mt-4 md:mt-10 lg:mt-30 z-20 overflow-hidden">
          {/* Carousel wrapper with fixed width to show 3 cards */}
          <div className="service-carousel w-full sm:w-[600px] md:w-[700px] lg:w-[1240px] lg:mt-10 overflow-hidden px-4 md:mr-4 lg:mr-12 rounded-xl">
            {/* Sliding container */}
            <div
              ref={carouselRef}
              className="flex gap-4 md:gap-6 transition-transform duration-500 ease-in-out"
              style={{
                width: `${cards.length * (window.innerWidth < 640 ? window.innerWidth - 64 : window.innerWidth < 1024 ? 340 : 420)}px`,
              }}
            >
              {/* Map through all cards */}
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-xl p-4 md:p-6 lg:p-8 shadow-md w-[calc(100vw-64px)] sm:w-[300px] md:w-[320px] lg:w-[400px] h-auto sm:h-[350px] md:h-[380px] lg:h-[420px] flex-shrink-0"
                >
                  <div className="bg-[#0a8a7a] w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-4 lg:mb-6">
                    <img
                      src={card.icon || "/placeholder.svg"}
                      alt={card.title}
                      className="w-[30px] md:w-[40px] lg:w-[50px] h-[24px] md:h-[32px] lg:h-[40px]"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{card.title}</h3>
                  <p className="text-sm md:text-base text-gray-700">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-20 right-4 sm:right-10 md:right-24 lg:right-25 flex gap-2">
          <button
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center shadow-sm"
            onClick={handlePrevSlide}
          >
            <FaArrowLeft size={8} className="text-[#157B6C] w-6 h-3 md:w-8 md:h-4" />
          </button>
          <button
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center shadow-sm"
            onClick={handleNextSlide}
          >
            <FaArrowRight size={8} className="text-[#157B6C] w-6 h-3 md:w-8 md:h-4" />
          </button>
        </div>
      </div>

      {/* Blockchain icon graphic on the right - Hidden on small screens */}
      <div className="hidden sm:block absolute vector-image right-4 sm:right-8 md:right-12 lg:right-16 top-4 sm:top-6 md:top-8 lg:top-2">
        <motion.img
          src={Vectorimage || "/placeholder.svg"}
          alt="Blockchain icon"
          className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] lg:w-[243px] lg:h-[243px] object-contain"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      {/* Mobile-specific blockchain illustration - Only visible on small screens */}
      <div className="block md:hidden absolute bottom-20 left-1/2 transform -translate-x-1/2 w-[200px] h-[150px] z-10">
        <img
          src={blockchain1 || "/placeholder.svg"}
          alt="Blockchain technology illustration"
          className="w-full h-auto"
        />
      </div>
    </div>
  )
}

export default BlockchainSolution
