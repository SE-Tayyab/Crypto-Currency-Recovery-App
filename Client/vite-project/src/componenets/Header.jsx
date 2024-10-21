import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { blue, white, yellow } from "../constents/colors";
import Logo from "../assets/white-logo.png";
import blackLogo from "../assets/black-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State for scroll detection
  const [currentLogo, setCurrentLogo] = useState(Logo); // State for logo

  const toggleMenu = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  // Function to handle scrolling
  const scrollToSection = (id) => {
    if (id === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const isScrolledNow = window.scrollY > 0;
      setIsScrolled(isScrolledNow);

      // Change the logo based on scroll state
      if (isScrolledNow) {
        setCurrentLogo(blackLogo); // Set black logo on scroll
      } else {
        setCurrentLogo(Logo); // Set white logo when at top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full transition-colors duration-300 ${
          isScrolled
            ? "bg-white text-gray-800 shadow-lg z-50"
            : "bg-gray-800 text-white"
        } px-20 py-8`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg font-bold">
            <a href="/" className="hover:text-gray-400 transition duration-300">
              <img src={currentLogo} alt="Logo" className="h-8" />
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {/* Hamburger Icon with animation */}
              <span
                className={`text-2xl transform transition-transform duration-300 ${
                  isMenuOpen ? "rotate-90" : ""
                }`}
              >
                &#9776;
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("/")}
              className="hover:text-blue-400 transition duration-300 hover:underline"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("crypto-tracing")}
              className="hover:text-blue-400 transition duration-300 hover:underline"
            >
              About Crypto Currency Recovery
            </button>
            <button
              onClick={() => scrollToSection("Tracing-section")}
              className="hover:text-blue-400 transition duration-300 hover:underline"
            >
              Crypto Tracing
            </button>
          </nav>

          {/* Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("Tracing-section")}
              style={{ backgroundColor: yellow, color: blue }}
              className="py-2 px-4 rounded-full shadow-lg transition duration-300"
            >
              Reclaim My Crypto
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <Transition
          show={isMenuOpen}
          enter="transition ease-out duration-300 transform"
          enterFrom="-translate-y-full opacity-0"
          enterTo="translate-y-0 opacity-100"
          leave="transition ease-in duration-300 transform"
          leaveFrom="translate-y-0 opacity-100"
          leaveTo="-translate-y-full opacity-0"
        >
          <div className="md:hidden">
            <nav className="flex flex-col space-y-4 mt-4 bg-gray-900 p-4 rounded-lg">
              <button
                onClick={() => scrollToSection("/")}
                className="hover:text-blue-400 transition duration-300 hover:underline"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("crypto-tracing")}
                className="hover:text-blue-400 transition duration-300 hover:underline"
              >
                About Crypto Currency Recovery
              </button>
              <button
                onClick={() => scrollToSection("Tracing-section")}
                className="hover:text-blue-400 transition duration-300 hover:underline"
              >
                Crypto Tracing
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-lg hover:shadow-blue-500/50 transition duration-300 mt-4">
                Reclaim My Crypto
              </button>
            </nav>
          </div>
        </Transition>
      </header>

      {/* First content section (make sure to add padding at the top) */}
      <div style={{ paddingTop: "80px" }} id="first-section">
        {/* Your first section content goes here */}
      </div>
    </>
  );
};

export default Header;
