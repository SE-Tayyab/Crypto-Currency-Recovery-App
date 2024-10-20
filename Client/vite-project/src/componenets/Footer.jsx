import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center text-sm text-gray-600">
        <p className="mb-2 sm:mb-0 text-center">
          Copyright © {currentYear} Crypto Currency Recovery. All rights
          reserved.
        </p>
        <a
          href="/privacy-policy"
          className="hover:text-gray-900 transition duration-300 text-center sm:ml-4"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
