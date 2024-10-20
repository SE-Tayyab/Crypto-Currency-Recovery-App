import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { blue, white, yellow } from "../constents/colors";
import Logo from "../assets/white-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  return (
    <header className="bg-gray-800 px-20 py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <a href="/" className="hover:text-gray-400 transition duration-300">
            <img src={Logo} alt="Logo" className="h-8" />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
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
          <a
            href="/"
            className="text-white hover:text-blue-400 transition duration-300 hover:underline"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white hover:text-blue-400 transition duration-300 hover:underline"
          >
            About Crypto Currency Recovery
          </a>
          <a
            href="/crypto-tracing"
            className="text-white hover:text-blue-400 transition duration-300 hover:underline"
          >
            Crypto Tracing
          </a>
        </nav>

        {/* Button */}
        <div className="hidden md:block">
          <button
            style={{ backgroundColor: yellow, color: blue }}
            className="text-white py-2 px-4 rounded-full shadow-lg transition duration-300"
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
            <a
              href="/"
              className="text-white hover:text-blue-400 transition duration-300 hover:underline"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-white hover:text-blue-400 transition duration-300 hover:underline"
            >
              About Crypto Currency Recovery
            </a>
            <a
              href="/crypto-tracing"
              className="text-white hover:text-blue-400 transition duration-300 hover:underline"
            >
              Crypto Tracing
            </a>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-lg hover:shadow-blue-500/50 transition duration-300 mt-4">
              Reclaim My Crypto
            </button>
          </nav>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
