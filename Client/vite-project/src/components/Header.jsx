import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import { blue, white, yellow, bg } from "../constents/colors";
import Logo from "../assets/white-logo.png";
import blackLogo from "../assets/black-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLogo, setCurrentLogo] = useState(Logo);

  const toggleMenu = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  const scrollToSection = (id) => {
    setIsMenuOpen(false); // Close menu after clicking
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

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledNow = window.scrollY > 0;
      setIsScrolled(isScrolledNow);
      setCurrentLogo(isScrolledNow ? blackLogo : Logo);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header Spacer - This maintains the space needed for the fixed header */}
      <div className="h-20 md:h-28" style={{ backgroundColor: bg }} />{" "}
      {/* Matches header height on mobile and desktop */}
      <header
        className={`fixed top-0 left-0 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white text-gray-800 shadow-lg z-50"
            : "bg-gray-800 text-white"
        } px-4 md:px-20 py-4 md:py-8`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg font-bold z-50">
            <a href="/" className="hover:text-gray-400 transition duration-300">
              <img src={currentLogo} alt="Logo" className="h-8" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden z-50 p-2 rounded-full transition-all duration-300 ${
              isMenuOpen
                ? "bg-gray-700"
                : isScrolled
                ? "bg-gray-100"
                : "bg-gray-700"
            }`}
          >
            {isMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              />
            )}
          </button>

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

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("Tracing-section")}
              style={{ backgroundColor: yellow, color: blue }}
              className="py-2 px-4 rounded-full shadow-lg transition duration-300 hover:shadow-xl"
            >
              Reclaim My Crypto
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <Transition
          show={isMenuOpen}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="md:hidden fixed inset-0 bg-gray-800/95 backdrop-blur-sm z-40">
            <nav className="flex flex-col items-center justify-center h-screen space-y-8 p-4">
              <button
                onClick={() => scrollToSection("/")}
                className="text-white text-xl font-medium hover:text-blue-400 transition duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("crypto-tracing")}
                className="text-white text-xl font-medium hover:text-blue-400 transition duration-300"
              >
                About Crypto Currency Recovery
              </button>
              <button
                onClick={() => scrollToSection("Tracing-section")}
                className="text-white text-xl font-medium hover:text-blue-400 transition duration-300"
              >
                Crypto Tracing
              </button>
              <button
                onClick={() => scrollToSection("Tracing-section")}
                style={{ backgroundColor: yellow }}
                className="text-blue-600 py-3 px-8 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition duration-300 mt-8"
              >
                Reclaim My Crypto
              </button>
            </nav>
          </div>
        </Transition>
      </header>
    </>
  );
};

export default Header;
