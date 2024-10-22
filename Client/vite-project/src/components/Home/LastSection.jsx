import React, { useEffect, useState } from "react";
import { bg, yellow } from "../../constents/colors";
import { Transition } from "@headlessui/react";

function LastSection() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div
      style={{ backgroundColor: bg }}
      className="h-[60vh] w-full text-white text-center py-11 flex items-center justify-center"
    >
      <div className="px-4">
        {" "}
        {/* Added padding for mobile */}
        <h2
          style={{ fontFamily: "Montserrat Alternates" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug tracking-wide"
        >
          It's time to
          <span className="mx-2 text-yellow-300">reclaim</span>
          your
          <br className="hidden sm:block" /> {/* Hide line break on mobile */}
          money and your life
        </h2>
        <div className="mt-6">
          <button
            onClick={() => scrollToSection("Tracing-section")}
            style={{ backgroundColor: yellow, color: bg }}
            className="text-white py-3 px-8 sm:px-14 font-bold rounded-full shadow-lg transition duration-300 hover:scale-105"
          >
            Reclaim My Crypto
          </button>
        </div>
      </div>
    </div>
  );
}

export default LastSection;
