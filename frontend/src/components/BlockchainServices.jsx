import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../styles/components/BlockchainServices.css";
import blockchain from "../assets/blockchain.png";
import Consultation from "../assets/Consultation.svg";
import layericon from "../assets/layericon.svg";
import blockchaindotcom from "../assets/blockchaindotcom.svg";
import Centralized from "../assets/Centralized.svg";
import Marketplace from "../assets/Marketplace.svg";
import Smart from "../assets/Smart.svg";
import Crypto from "../assets/Crypto.svg";
import Decentralized from "../assets/Decentralized.svg";
import Metaverse from "../assets/Metaverse.svg";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const BlockchainServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const cardsRef = useRef(null);
  const isInitialMount = useRef(true);

  // Drag to scroll
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const originalCards = [
    {
      icon: Consultation,
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
  ];

  const cards = [...originalCards, ...originalCards, ...originalCards];

  const scrollToCard = (index) => {
    const container = containerRef.current;
    const cards = cardsRef.current?.children;
    if (!container || !cards || !cards.length) return;

    const middleSetStartIndex = originalCards.length;
    const targetCard = cards[middleSetStartIndex + index];
    if (!targetCard) return;

    const containerCenter = container.offsetWidth / 2;
    const cardCenter = targetCard.offsetLeft + targetCard.offsetWidth / 2;
    const scrollTo = cardCenter - containerCenter;

    gsap.to(container, {
      scrollTo: { x: scrollTo, autoKill: false },
      duration: 0.6,
      ease: "power3.out",
      onComplete: () => setCurrentIndex(index),
    });
  };

  const handleScroll = () => {
    const container = containerRef.current;
    const cards = cardsRef.current?.children;
    if (!container || !cards || !cards.length) return;

    const containerCenter = container.offsetLeft + container.offsetWidth / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;

    Array.from(cards).forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }

      const maxDistance = container.offsetWidth / 2;
      const scale = 1 - Math.min(distance / maxDistance, 1) * 0.2;
      const zIndex = 100 - Math.round((distance / maxDistance) * 100);
      card.style.transform = `scale(${scale})`;
      card.style.zIndex = `${zIndex}`;
    });

    const actualIndex = closestIndex % originalCards.length;
    if (actualIndex !== currentIndex) {
      setCurrentIndex(actualIndex);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // On mount
    if (isInitialMount.current) {
      scrollToCard(0);
      isInitialMount.current = false;
    }

    container.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Drag scroll behavior
    const onMouseDown = (e) => {
      isDragging.current = true;
      container.classList.add("dragging");
      startX.current = e.pageX - container.offsetLeft;
      scrollLeft.current = container.scrollLeft;
    };

    const onMouseLeave = () => {
      isDragging.current = false;
      container.classList.remove("dragging");
    };

    const onMouseUp = () => {
      isDragging.current = false;
      container.classList.remove("dragging");
    };

    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX.current) * 1.2;
      container.scrollLeft = scrollLeft.current - walk;
    };

    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="block_chain w-full bg-[#061611] text-white p-0 h-auto">
      <div className="w-full max-w-[1680px] mx-auto">
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
            <div className="blockchain-wrapper">
              <img src={blockchain || "/placeholder.svg"} alt="blockchain" className="blockchain-img1" />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative overflow-hidden mt-[-180px] sm:mt-[-120px] md:mt-[-150px] lg:mt-[-270px] w-full overflow-x-scroll scrollbar-hide py-12 px-4 scroll-smooth snap-x snap-mandatory"
      >
        <div ref={cardsRef} className="flex items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="features_card card flex flex-col sm:flex-row w-[380px] md:w-[680px] bg-[#0B3327] rounded-[20px] p-4 sm:p-6 border border-transparent bg-gradient-to-r from-[#157B6C] to-[#ffffff] p-[2px] h-auto mb-auto flex-shrink-0 shadow-lg shadow-[#157B6C]/20 transition-all duration-300"
              style={{ scrollSnapAlign: "center" }}
            >
              <div className="w-full sm:w-[40%] mb-4 sm:mb-0">
                <img src={card.icon} alt="card visual" className="rounded-xl object-cover w-full h-full" />
              </div>
              <div className="w-full sm:w-[60%] sm:pl-6 flex flex-col justify-center items-center text-center sm:items-start sm:text-left min-h-[280px] sm:min-h-[320px] py-4">
                <h3 className="text-[20px] sm:text-[28px] font-Montserrat font-bold text-white mb-3 leading-snug custom-heading-size">
                  {card.title.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < card.title.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <p className="text-[12px] sm:text-[16px] font-Montserrat text-white leading-relaxed custom-description-size">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-4 gap-6 pb-10">
        <div className="flex justify-center gap-3">
          {originalCards.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`h-[6px] rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-white w-8" : "bg-white/30 w-6"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockchainServices;
