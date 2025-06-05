
import { useState, useRef, useEffect } from "react"
// import '../styles/components/BlockchainFeatures.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import Bigdatabg from "../assets/Bigdatabg.svg"
import Blockchainicon1 from "../assets/Blockchainicon1.svg"
import Blockchainicon2 from "../assets/Blockchainicon2.svg"
import Blockchainicon3 from "../assets/Blockchainicon3.svg"
import Blackchainleftarrow from "../assets/Blackchainleftarrow.svg"

const BlockchainFeatures = () => {
  const cardData = [
    {
      title: "Certified\nBlockchain Experts",
      description:
        "Work with a team of certified blockchain experts with extensive experience across various industries.",
      icon: Blockchainicon1,
    },
    {
      title: "Client-Focused\nBlockchain Approach",
      description: "We prioritize our clients' needs, ensuring transparent and flexible development processes.",
      icon: Blockchainicon2,
    },
    {
      title: "Client-Focused\nBlockchain Approach",
      description: "Our products comply with industry standards, ensuring security and reliability.",
      icon: Blockchainicon3,
    },
    {
      title: "Innovative\nTechnology Stack",
      description: "We leverage cutting-edge technologies to deliver high-performance blockchain solutions.",
      icon: Blockchainicon1,
    },
    {
      title: "Scalable\nArchitecture",
      description: "Our blockchain solutions are designed to scale with your business needs and future growth.",
      icon: Blockchainicon2,
    },
    {
      title: "Dedicated\nSupport Team",
      description: "We provide ongoing support and maintenance to ensure your blockchain solution runs smoothly.",
      icon: Blockchainicon3,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)

  // Responsive values
  const [cardWidth, setCardWidth] = useState(469)
  const [visibleCards, setVisibleCards] = useState(3)
  const cardGap = 24 // Gap between cards

  // Update card width and visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) {
        // Mobile
        setCardWidth(280)
        setVisibleCards(1)
      } else if (width < 1024) {
        // Tablet
        setCardWidth(320)
        setVisibleCards(2)
      } else {
        // Desktop
        setCardWidth(469)
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
    if (currentIndex < cardData.length - visibleCards) {
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
      setCurrentIndex(cardData.length - visibleCards)
    }
  }

  // Apply the transform when currentIndex or cardWidth changes
  useEffect(() => {
    if (carouselRef.current) {
      const translateValue = currentIndex * -(cardWidth + cardGap)
      carouselRef.current.style.transform = `translateX(${translateValue}px)`
    }
  }, [currentIndex, cardWidth])

  // Function to determine if a card is the middle card (for styling)
  const isMiddleCard = (index) => {
    // For single card view (mobile), the current card is the middle
    if (visibleCards === 1) {
      return index === currentIndex
    }
    // For two cards view (tablet), both visible cards get highlighted
    if (visibleCards === 2) {
      return index === currentIndex || index === currentIndex + 1
    }
    // For desktop (3 cards), the middle one gets highlighted
    return index === currentIndex + 1
  }

  return (
    <div className="block_features w-full h-auto m-auto mt-0 flex flex-col items-center justify-center text-center bg-[#FAFAFA] px-4 py-2 md:py-4">
      <h2 className="w-full max-w-[974px] text-[22px] sm:text-[26px] md:text-[32px] lg:text-[38px] xl:text-[42px] font-extrabold font-Montserrat text-black px-4 text-center mb-4 md:mb-4">
        Why Are We The Perfect Fit To Be Your Blockchain Development Company?
      </h2>

      <div
        className="w-full max-w-[1620px] h-auto min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:h-[729px] mx-auto bg-cover bg-center rounded-3xl flex flex-col items-center justify-center relative mt-4 md:mt-10 overflow-hidden py-10 md:py-0"
        style={{ backgroundImage: `url(${Bigdatabg})` }}
      >
        {/* Carousel container with overflow hidden */}
        <div
          className="w-full overflow-hidden mx-auto px-4 lg:px-0"
          style={{
            maxWidth: `${(cardWidth + cardGap) * visibleCards - cardGap}px`,
          }}
        >
          {/* Sliding container */}
          <div
            ref={carouselRef}
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ width: `${cardData.length * (cardWidth + cardGap)}px` }}
          >
            {cardData.map((card, index) => (
              <div
                key={index}
                className={`bg-white rounded-[20px] 
                  w-[250px] xs:w-[280px] sm:w-[320px] lg:w-[469px] 
                  p-4 xs:p-4 sm:p-6 shadow-md relative flex-shrink-0 flex flex-col 
                  ${isMiddleCard(index) ? "h-[350px] xs:h-[330px] sm:h-[400px] lg:h-[450px]" : "h-[260px] xs:h-[300px] sm:h-[350px] lg:h-[350px]"} 
                  ${isMiddleCard(index) ? "border-2 border-[#44ACAB]" : ""}`}
                style={{
                  transition: "height 0.5s ease-in-out, width 0.5s ease-in-out",
                  alignSelf: isMiddleCard(index) ? "flex-start" : "center",
                  marginTop: isMiddleCard(index) ? "0px" : "0",
                }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-dashed border-[#44ACAB] rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <img src={card.icon || "/placeholder.svg"} alt="Icon" className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] text-start justify-start font-bold font-Montserrat mb-2 mt-6 sm:mt-10 leading-snug whitespace-pre-line">
                  {card.title}
                </h3>
                <p className="text-black text-[14px] sm:text-[16px] text-start justify-start mt-3 sm:mt-5">
                  {card.description}
                </p>

                {/* Right arrow between cards - hidden on mobile */}
                {index < cardData.length - 1 && (
                  <div className="absolute right-[-25px] top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
                    <img src={Blackchainleftarrow || "/placeholder.svg"} alt="Left Arrow" className="w-[600px]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows under cards */}
        <div className="mt-8 lg:absolute lg:bottom-16 flex gap-4 justify-center">
          <button
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center shadow"
            onClick={handlePrevSlide}
            aria-label="Previous slide"
          >
            <FaArrowLeft className="text-[#59C3C2] text-xs sm:text-sm" />
          </button>
          <button
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center shadow"
            onClick={handleNextSlide}
            aria-label="Next slide"
          >
            <FaArrowRight className="text-[#59C3C2] text-xs sm:text-sm" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlockchainFeatures
