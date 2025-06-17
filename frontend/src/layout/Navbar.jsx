import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import ServicesDropdown from "../components/ServicesDropdown";

// import Services from "../components/Services";
// import "../styles/components/Navbar.css";
import Button from "../components/Button";
import techdeviselogo from "../assets/techdeviselogo.png";
// import Techdeviselogo2 from "../assets/Techdeviselogo2.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const location = useLocation(); // Step 2: Get current location
  const isHomePage = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [blogDropdown, setBlogDropdown] = useState(false);
  const [isSticky, setIsSticky] = useState({ services: false, blog: false });
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState(null);

  const navRef = useRef();
  const servicesButtonRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (servicesDropdown || isSticky.services) {
        updateDropdownPosition();
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [servicesDropdown, isSticky.services]);

  const updateDropdownPosition = () => {
    if (servicesButtonRef.current) {
      const rect = servicesButtonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + rect.width / 2,
      });
    }
  };

  const handleServicesHover = (state) => {
    if (!isSticky.services) {
      setServicesDropdown(state);
      if (state) {
        updateDropdownPosition();
      }
    }
  };

  const handleBlogHover = (state) => {
    if (!isSticky.blog) setBlogDropdown(state);
  };

  const toggleSticky = (dropdown) => {
    setIsSticky((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
      ...(dropdown === "services" && { blog: false }),
      ...(dropdown === "blog" && { services: false }),
    }));

    if (dropdown === "services") {
      setServicesDropdown((prev) => !prev);
      setBlogDropdown(false);
      updateDropdownPosition();
    }
    if (dropdown === "blog") {
      setBlogDropdown((prev) => !prev);
      setServicesDropdown(false);
    }
  };

  const handleMobileLinkClick = () => {
    setIsOpen(false);
    setServicesDropdown(false);
    setBlogDropdown(false);
    setIsSticky({ services: false, blog: false });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && !event.target.closest(".services-dropdown")) {
        setServicesDropdown(false);
        setBlogDropdown(false);
        setIsSticky({ services: false, blog: false });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setServicesDropdown(false);
    setBlogDropdown(false);
    setIsSticky({ services: false, blog: false });
  }, [location.pathname]);

  return (
    <>
      <nav
        ref={navRef}
        className={`nav_head
          ${isHomePage && !scrolled ? "nav_head_home" : "nav_head_radius"}
          ${isHomePage && !scrolled ? 'text-white bg-transparent' : 'bg-black text-white shadow-2xl'}    
          bg-opacity-50 dark:bg-opacity-60
          fixed top-0 left-0 right-0 w-full md:w-[90%] lg:w-[90%] xl:w-[100%] 2xl:w-[100%] h-[70px] md:h-[75px] lg:h-[78px] xl:h-auto  px-4 md:px-10 flex justify-between items-center bg-cover bg-center opacity-100 mx-auto z-50
           ${scrolled ? 'backdrop-blur-lg' : ''}`}
        style={{
          backgroundImage: isHomePage && !scrolled ? "url('your-image-url.jpg')" : 'none',
          transition: 'background-color 0.3s ease, ',
          borderBottom: '1px solid #2d4642',

        }}
      >
        <div className="navMain w-[1728px] m-auto  md:px-6 flex justify-between items-center bg-cover bg-center">
          <div className="flex items-center w-auto xl:w-[55%] h-[60px] md:h-[70px] xl:h-[90px]">
            <Link to="https://app.techdevise.com/">
              <img
                alt="Tech Devise Logo"
                className="w-[100px] sm:w-[110px] md:w-[140px] lg:w-[160px] xl:w-[130px] h-auto"
                src={isHomePage && !scrolled ? techdeviselogo : techdeviselogo}
              />
            </Link>
            <span className="text-2xl font-bold"></span>
          </div>

          <div className="hidden md:flex items-center justify-center text-lg nav_headding">
            {[
              {
                label: "Services",
                isDropdown: true,
                onMouseEnter: () => handleServicesHover(true),
                onMouseLeave: () => handleServicesHover(false),
                onClick: () => toggleSticky("services"),
                ref: servicesButtonRef,
                active: servicesDropdown || isSticky.services
              },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact Us" },
              { to: "/career", label: "Careers" }
            ].map((item, index) => (
              <div
                key={index}
                className="relative group mx-4"
                onMouseEnter={item.onMouseEnter}
                onMouseLeave={item.onMouseLeave}
              >
                {item.isDropdown ? (
                  <button
                    ref={item.ref}
                    onClick={item.onClick}
                    className="font-light uppercase text-sm text-[18px] lg:text-[16px] xl:text-[16px] leading-auto hover:text-gray-300 transition-colors duration-200 flex items-center whitespace-nowrap"
                  >
                    {item.label}
                    <span
                      className={`ml-2 transition-transform duration-200 ${item.active ? "rotate-180" : ""}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-2 h-2 fill-white inline"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                        />
                      </svg>
                    </span>
                  </button>
                ) : (
                  <Link
                    to={item.to}
                    className="font-light uppercase text-sm text-[18px] lg:text-[16px] xl:text-[16px] leading-auto hover:text-gray-300 whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>



          <div className="hidden md:block ">
            <Button />
          </div>

          <button
            className="md:hidden flex items-center justify-center w-[40px] h-[40px] bg-white rounded-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 6H21" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 18H21" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>

          {/* Mobile Menu - Only visible on mobile */}
          {/* Mobile Menu - Only visible on mobile */}
          {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-[#061611] text-white p-4 space-y-3 shadow-md md:hidden">

              {/* Expandable Services Menu */}
              <div className="py-2">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setShowServices(!showServices)}
                >
                  <span className="hover:text-yellow-300">Services</span>
                  <span className="text-white ml-2">
                    {showServices ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 15L12 8L19 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 10L12 17L19 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                </div>

                {/* Services Submenu */}
                {showServices && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      to="/services/mobile-app-development"
                      className="block py-1 text-gray-300 hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Mobile App Development
                    </Link>
                    <Link
                      to="/services/digital-marketing"
                      className="block py-1 text-gray-300 hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Digital Marketing
                    </Link>
                    <Link
                      to="/services/website-development"
                      className="block py-1 text-gray-300 hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Website Development
                    </Link>
                    <Link
                      to="/services/quality-analysis"
                      className="block py-1 text-gray-300 hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Quality Analysis
                    </Link>
                    <Link
                      to="/services/blockchain-development"
                      className="block py-1 text-gray-300 hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Blockchain Development
                    </Link>
                    <Link
                      to="/services/ai-development"
                      className="block py-1 text-gray-300 hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      AI Development
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/portfolio"
                className="block hover:text-yellow-300"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/career"
                className="block hover:text-yellow-300"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
              <Link
                to="/about"
                className="block hover:text-yellow-300"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block hover:text-yellow-300"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
              <div className="block">
                <Button onClick={() => setIsOpen(false)} />
              </div>
            </div>
          )}
        </div>
      </nav>
      <ServicesDropdown
        isVisible={servicesDropdown || isSticky.services}
        position={dropdownPosition}
        closeDropdown={() => {
          if (!isSticky.services) {
            setServicesDropdown(false);
          }
        }}
        onMouseEnter={() => handleServicesHover(true)}
        onMouseLeave={() => handleServicesHover(false)}
      />
    </>
  );
};

export default Navbar;
