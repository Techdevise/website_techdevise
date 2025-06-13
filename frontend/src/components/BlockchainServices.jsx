import React, { useState, useEffect, useRef } from "react"
import '../index.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import "../styles/components/BlockchainServices.css"
import blockchain from "../assets/blockchain.png"
import Consultation from "../assets/Consultation.svg"
import layericon from "../assets/layericon.svg"
import blockchaindotcom from "../assets/blockchaindotcom.svg"
import Centralized from "../assets/Centralized.svg"
import Marketplace from "../assets/Marketplace.svg"
import Smart from "../assets/Smart.svg"
import Crypto from "../assets/Crypto.svg"
import Decentralized from "../assets/Decentralized.svg"
import Metaverse from "../assets/Metaverse.svg"
import gsap from "gsap";

const BlockchainServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const containerRef = useRef(null)
  const cardsRef = useRef(null)
  const animationRef = useRef(null)
  const touchStartX = useRef(0)
  const touchScrollLeft = useRef(0)

  const originalCards = [
    {
      icon: Consultation,
      title: "Blockchain Consultation\n& Integration",
      description: "From strategy development to implementation, our custom Blockchain software development experts will guide you through every stage of your blockchain application development journey. Antier's deep industry knowledge and proven track record ensure successful blockchain integration.",
    },
    {
      icon: layericon,
      title: "Layer 2\nDevelopment",
      description: "We specialize in creating innovative Layer 2 solutions that address the limitations of base-layer blockchains. Our team develops robust Layer 2 protocols, such as rollups and state channels, that seamlessly integrate with existing blockchain networks.",
    },
    {
      icon: blockchaindotcom,
      title: "Blockchain Protocol\nDevelopment",
      description: "Our expertise spans the entire protocol development lifecycle, from consensus mechanism selection to governance structures. We specialize in designing and implementing scalable and customizable blockchain protocols tailored to your specific requirements.",
    },
    {
      icon: Centralized,
      title: "Centralized/Decentralized\nExchangeDevelopment",
      description: "Antier creates secure, scalable, and user-friendly trading platforms that facilitate seamless cryptocurrency transactions. With a focus on high performance and regulatory compliance, we develop customized solutions for both centralized and decentralized exchanges.",
    },
    {
      icon: Marketplace,
      title: "NFT Marketplace\nDevelopment",
      description: "We focus on creating customizable NFT marketplaces with robust features such as multi-chain support, smart contract integration, and secure payment gateways. Our solutions prevent duplication and ensure secure buying and selling of tokens.",
    },
    {
      icon: Smart,
      title: "Smart Contract\nDevelopmentAudit",
      description: "With rigorous testing and security audits, we ensure your smart contracts are robust and compliant with industry standards. Our experienced team specializes in designing, developing, and auditing smart contracts for various blockchain platforms.",
    },
    {
      icon: Crypto,
      title: "Crypto Wallet\nDevelopment",
      description: "Antier offers specialized crypto wallet development services designed to provide secure and efficient solutions for managing digital assets. We prioritize security through advanced encryption protocols, multi-signature authentication, and comprehensive security audits.",
    },
    {
      icon: Decentralized,
      title: "Decentralized App (dApp)\nDevelopment",
      description: "Our custom Blockchain software development services encompass the entire dApp development lifecycle from ideation to post-launch support. Antier's deep technical expertise and commitment to innovation ensure the delivery of high-quality dApps that drive value and enhance your digital presence.",
    },
    {
      icon: Metaverse,
      title: "Metaverse\nDevelopment",
      description: "We specialize in creating immersive metaverse experiences that blur the lines between the physical and digital worlds. From avatars to AR/VR applications, our team works closely with its clients to design and develop metaverse solutions that align with their business goals.",
    },
  ]

  // Duplicate cards for infinite loop effect
  const cards = [...originalCards, ...originalCards, ...originalCards]

  // Calculate the middle index
  const middleIndex = Math.floor(cards.length / 2)

  // Handle next and previous navigation
  const goNext = () => {
    setCurrentIndex(prev => {
      const newIndex = prev + 1
      return newIndex >= originalCards.length ? 0 : newIndex
    })
  }

  const goPrev = () => {
    setCurrentIndex(prev => {
      const newIndex = prev - 1
      return newIndex < 0 ? originalCards.length - 1 : newIndex
    })
  }

  // Auto-rotate cards
  useEffect(() => {
    const interval = setInterval(() => {
      goNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Handle mouse down for dragging
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
    cancelAnimationFrame(animationRef.current)
  }

  // Handle mouse leave
  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  // Handle mouse up
  const handleMouseUp = () => {
    setIsDragging(false)
    // Snap to nearest card
    snapToNearestCard()
  }

  // Handle mouse move for dragging
  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 2 // scroll-fast
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  // Handle touch start
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].pageX
    touchScrollLeft.current = containerRef.current.scrollLeft
  }

  // Handle touch move
  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX
    const walk = (x - touchStartX.current) * 2
    containerRef.current.scrollLeft = touchScrollLeft.current - walk
  }

  // Handle touch end
  const handleTouchEnd = () => {
    snapToNearestCard()
  }

  // Snap to nearest card after dragging
 const snapToNearestCard = () => {
  if (!containerRef.current) return

  const container = containerRef.current
  const cardWidth = container.querySelector('.card').offsetWidth
  const scrollPos = container.scrollLeft
  const cardPos = Math.round(scrollPos / cardWidth)

  const targetScroll = cardPos * cardWidth

  gsap.to(container, {
    scrollTo: { x: targetScroll, autoKill: false },
    duration: 0.5,
    ease: "power3.out",
    onComplete: () => {
      const newIndex = cardPos % originalCards.length
      setCurrentIndex(newIndex)
    }
  })
}

  useEffect(() => {
    // Ensure the second card is centered initially
    const container = containerRef.current
    const cards = cardsRef.current?.children
    if (container && cards && cards[1]) {
      const card = cards[1]
      const containerCenter = container.offsetWidth / 2
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const scrollPosition = cardCenter - containerCenter
      container.scrollLeft = scrollPosition
    }
  }, [])
  useEffect(() => {
    const container = containerRef.current

  const updateCardStyles = () => {
  const cards = cardsRef.current?.children
  if (!containerRef.current || !cards) return

  const container = containerRef.current
  const containerCenter = container.offsetLeft + container.offsetWidth / 2
  let closestIndex = 0
  let closestDistance = Infinity

  Array.from(cards).forEach((card, index) => {
    const rect = card.getBoundingClientRect()
    const cardCenter = rect.left + rect.width / 2
    const distance = Math.abs(containerCenter - cardCenter)

    // Track which card is closest to center
    if (distance < closestDistance) {
      closestDistance = distance
      closestIndex = index
    }

    const maxDistance = container.offsetWidth / 2
    const scale = 1 - Math.min(distance / maxDistance, 1) * 0.2
    const zIndex = 100 - Math.round((distance / maxDistance) * 100)

    card.style.transform = `scale(${scale})`
    card.style.zIndex = `${zIndex}`
  })
  setCurrentIndex(closestIndex % originalCards.length)
}

    updateCardStyles()
    container.addEventListener("scroll", updateCardStyles)
    window.addEventListener("resize", updateCardStyles)

    return () => {
      container.removeEventListener("scroll", updateCardStyles)
      window.removeEventListener("resize", updateCardStyles)
    }
  }, [])
  

  return (
    <div className="block_chain w-full bg-[#061611] text-white p-0 w-full h-auto">
      <div className="w-full max-w-[1680px] mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 mb-16">
          <div>
            <h1
              style={{
                display: "inline-table",
                background: "linear-gradient(to right, #e0e0e0, #157B6C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="blockchain text-[28px] md:text-5xl font-extrabold font-Montserrat w-full max-w-[762px] mt-0 mb-0 md:mt-10 md:mb-10 text-center md:text-left"
            >
              Our Blockchain
              <br />
              Development <span className="text-[#4fbfa5]">Services</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-base font-Montserrat font-normal leading-relaxed text-white text-center md:text-left">
              <span className="text-[20px] font-Montserrat font-bold">Tech Devise</span> provides a full suite of blockchain development
              services to help <br /> businesses harness the full potential of the technology and stay ahead in today's
              <br />
              competitive web3 era.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <BlockchainIllustration />
          </div>
        </div>
      </div>
      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="relative overflow-hidden mt-[-180px] sm:mt-[-120px] md:mt-[-150px] lg:mt-[-270px] w-full overflow-x-scroll scrollbar-hide py-12 px-4 scroll-smooth snap-x snap-mandatory"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={cardsRef}
          className="flex items-center"
        >
          {cards.map((card, index) => {
            const container = containerRef.current
            const cardElement = cardsRef.current?.children[index]
            let scale = 0.8
            let zIndex = 1

            if (container && cardElement) {
              const containerCenter = container.offsetWidth / 2
              const cardRect = cardElement.getBoundingClientRect()
              const cardCenter = cardRect.left + cardRect.width / 2
              const distance = Math.abs(containerCenter - cardCenter)

              // Distance-based scale/opacity logic
              const maxDistance = container.offsetWidth / 2
              const distanceRatio = Math.min(distance / maxDistance, 1)

              scale = 1 - 0.2 * distanceRatio
              zIndex = 10 - Math.round(distanceRatio * 10)
            }

            return (
              <div
                key={index}
                className="card flex flex-col sm:flex-row w-[100px] md:w-[680px] bg-[#0B3327] rounded-[20px] p-4 sm:p-6 border border-transparent bg-gradient-to-r from-[#157B6C] to-[#ffffff] p-[2px] h-auto mb-auto flex-shrink-0 shadow-lg shadow-[#157B6C]/20 transition-all duration-300"
                style={{
                  zIndex: zIndex,
                  scrollSnapAlign: "center"
                }}
              >
                {/* Left: Image */}
                <div className="w-full sm:w-[40%] mb-4 sm:mb-0">
                  <img src={card.icon} alt="card visual" className="rounded-xl object-cover w-full h-full" />
                </div>

                {/* Right: Text */}
                <div className="w-full sm:w-[60%] sm:pl-6 flex flex-col justify-center items-center text-center sm:items-start sm:text-left min-h-[280px] sm:min-h-[320px] py-4">
                  <h3 className="text-[20px] sm:text-[28px] font-Montserrat font-bold text-white mb-3 leading-snug">
                    {card.title.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < card.title.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                  <p className="text-[14px] sm:text-[16px] font-Montserrat text-white leading-relaxed">{card.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center mt-4 gap-6 pb-10">
        {/* <button
          onClick={goPrev}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
        >
          <FaArrowLeft className="text-white text-lg" />
        </button> */}

        {/* Slide indicators */}
        <div className="flex justify-center gap-3">
          {originalCards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-[6px] rounded-full transition-all duration-300 ${currentIndex === index
                ? "bg-white w-8"
                : "bg-white/30 w-6 hover:bg-white/50"
                }`}
            />
          ))}
        </div>

        {/* <button
          onClick={goNext}
          className="w-12 h-12 rounded-full bg-[#157B6C] hover:bg-[#1a8f7a] flex items-center justify-center transition-all duration-300"
        >
          <FaArrowRight className="text-white text-lg" />
        </button> */}
      </div>
    </div>
  )
}

const BlockchainIllustration = () => (
  <div className="blockchain-wrapper">
    <img src={blockchain || "/placeholder.svg"} alt="blockchain" className="blockchain-img1" />
  </div>
)

export default BlockchainServices