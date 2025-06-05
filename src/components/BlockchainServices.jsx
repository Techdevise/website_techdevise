import React, { useState, useEffect, useRef } from "react"
import '../index.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import "../styles/components/BlockchainServices.css"
import blockchain from "../assets/blockchain.png"
import blockchainicon from "../assets/blockchainicon.png"
import layericon from "../assets/layericon.png"
import blockchaindotcom from "../assets/blockchaindotcom.png"
import Centralized from "../assets/Centralized.svg"
import Marketplace from "../assets/Marketplace.svg"
import Smart from "../assets/Smart.svg"
import Crypto from "../assets/Crypto.svg"
import Decentralized from "../assets/Decentralized.svg"
import Metaverse from "../assets/Metaverse.svg"
import gsap from "gsap";


const BlockchainServices = () => {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
    const [hasScrolledToEnd, setHasScrolledToEnd] = useState(false)
  const cardsPerSlide = 1
  const transitionRef = useRef() 
  const scrollLockRef = useRef()

  const originalCards = [
    {
      icon: blockchainicon,
      title: "Blockchain Consultation\n& Integration",
      description:
        "From strategy development to implementation, our custom Blockchain software development experts will guide you through every stage of your blockchain application development journey. Antier's deep industry knowledge and proven track record ensure successful blockchain integration.",
    },
    {
      icon: layericon,
      title: "Layer 2\nDevelopment",
      description:
        "We specialize in creating innovative Layer 2 solutions that address the limitations of base-layer blockchains. Our team develops robust Layer 2 protocols, such as rollups and state channels, that seamlessly integrate with existing blockchain networks.",
    },
    {
      icon: blockchaindotcom,
      title: "Blockchain Protocol\nDevelopment",
      description:
        "Our expertise spans the entire protocol development lifecycle, from consensus mechanism selection to governance structures. We specialize in designing and implementing scalable and customizable blockchain protocols tailored to your specific requirements.",
    },
    {
      icon: Centralized,
      title: "Centralized/Decentralized\nExchangeDevelopment",
      description:
        "Antier creates secure, scalable, and user-friendly trading platforms that facilitate seamless cryptocurrency transactions. With a focus on high performance and regulatory compliance, we develop customized solutions for both centralized and decentralized exchanges.",
    },
    {
      icon: Marketplace,
      title: "NFT Marketplace\nDevelopment",
      description:
        "We focus on creating customizable NFT marketplaces with robust features such as multi-chain support, smart contract integration, and secure payment gateways. Our solutions prevent duplication and ensure secure buying and selling of tokens.",
    },
    {
      icon: Smart,
      title: "Smart Contract\nDevelopmentAudit",
      description:
        "With rigorous testing and security audits, we ensure your smart contracts are robust and compliant with industry standards. Our experienced team specializes in designing, developing, and auditing smart contracts for various blockchain platforms.",
    },
    {
      icon: Crypto,
      title: "Crypto Wallet\nDevelopment",
      description:
        "Antier offers specialized crypto wallet development services designed to provide secure and efficient solutions for managing digital assets. We prioritize security through advanced encryption protocols, multi-signature authentication, and comprehensive security audits.",
    },
    {
      icon: Decentralized,
      title: "Decentralized App (dApp)\nDevelopment",
      description:
        "Our custom Blockchain software development services encompass the entire dApp development lifecycle from ideation to post-launch support. Antier's deep technical expertise and commitment to innovation ensure the delivery of high-quality dApps that drive value and enhance your digital presence.",
    },
    {
      icon: Metaverse,
      title: "Metaverse\nDevelopment",
      description:
        "We specialize in creating immersive metaverse experiences that blur the lines between the physical and digital worlds. From avatars to AR/VR applications, our team works closely with its clients to design and develop metaverse solutions that align with their business goals.",
    },
  ]

  const cards = [originalCards[originalCards.length - 1], ...originalCards, originalCards[0]]
  const cardWidth = 550
  const gap = 16
  const cardWidthWithGap = cardWidth + gap

  const handleNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => prev + 1)
  }

  const handlePrev = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => prev - 1)
  }

  useEffect(() => {
    const transitionEnd = () => {
      setIsTransitioning(false)
      if (currentSlide === cards.length - 1) {
        transitionRef.current.style.transition = "none"
        setCurrentSlide(1)
        transitionRef.current.style.transform = `translateX(-${cardWidthWithGap}px)`
      } else if (currentSlide === 0) {
        transitionRef.current.style.transition = "none"
        setCurrentSlide(cards.length - 2)
        transitionRef.current.style.transform = `translateX(-${(cards.length - 2) * cardWidthWithGap}px)`
      }
    }

    const el = transitionRef.current
    el.addEventListener("transitionend", transitionEnd)
    return () => el.removeEventListener("transitionend", transitionEnd)
  }, [currentSlide])

useEffect(() => {
  if (!transitionRef.current) return;

  const distance = currentSlide * cardWidthWithGap;

  gsap.to(transitionRef.current, {
    x: -distance,
    duration: 0.8,
    ease: "power2.inOut",
    onComplete: () => {
      setIsTransitioning(false);

      // Reset when on cloned slides
      if (currentSlide === cards.length - 1) {
        gsap.set(transitionRef.current, { x: -cardWidthWithGap });
        setCurrentSlide(1);
      } else if (currentSlide === 0) {
        gsap.set(transitionRef.current, { x: -(cards.length - 2) * cardWidthWithGap });
        setCurrentSlide(cards.length - 2);
      }
    }
  });
}, [currentSlide]);

useEffect(() => {
  const container = scrollLockRef.current;
  if (!container) return;

  const handleWheel = (e) => {
    if (isTransitioning) {
      e.preventDefault();
      return;
    }

    const isDown = e.deltaY > 0;
    const isUp = e.deltaY < 0;

    e.preventDefault();
    if (isDown) handleNext();
    if (isUp) handlePrev();
  };

  container.addEventListener("wheel", handleWheel, { passive: false });
  return () => container.removeEventListener("wheel", handleWheel);
}, [isTransitioning]);

  return (
    <div className="block_chain w-full bg-[#061611] text-white p-8 md:p-8 h-auto">
      <div className="w-full max-w-[1680px] mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h1
              style={{
                display: "inline-table",
                background: "linear-gradient(to right, #e0e0e0, #157B6C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="blockchain text-[28px] md:text-5xl font-extrabold font-Montserrat w-full max-w-[762px] mb-10 mt-10"
            >
              Our Blockchain
              <br />
              Development <span className="text-[#4fbfa5]">Services</span>
            </h1>
            <p className="mt-4 text-xl font-Montserrat font-normal md:text-base ml-0">
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

        {/* Slider */}
        <div ref={scrollLockRef} className="overflow-hidden mt-[-230px] sm:mt-[-120px] md:mt-[-120px] lg:mt-[-230px]">
          <div
            ref={transitionRef}
            className="card_correct flex transition-transform duration-500 gap-4"
            style={{ transform: `translateX(-${currentSlide * cardWidthWithGap}px)` }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-[550px] bg-[#0c2018] rounded-[26px] p-6 border border-[#163029] h-auto min-h-[400px] mb-auto flex-shrink-0"
              >
                <div className="w-[100px] h-[100px] bg-[#157B6C] rounded-full flex items-center justify-center mb-6 relative">

                  <div className="absolute inset-2 rounded-full border-2 border-dashed border-white"></div>


                  <img src={card.icon || "/placeholder.svg"} alt="icon" className="w-[40px] h-[40px] z-10" />
                </div>

                <h3 className="text-[28px] font-font-Montserrat font-extrabold mb-4">
                  {card.title.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < card.title.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <p className="text-[16px] w-full mt-5 font-Montserrat text-gray-300">{card.description}</p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-end mt-8 gap-2">
            <button onClick={handlePrev} className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <FaArrowLeft className="text-[#157B6C] text-md" />
            </button>
            <button onClick={handleNext} className="w-10 h-10 rounded-full bg-[#157B6C] flex items-center justify-center">
              <FaArrowRight className="text-white text-md" />
            </button>
          </div>
        </div>
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
