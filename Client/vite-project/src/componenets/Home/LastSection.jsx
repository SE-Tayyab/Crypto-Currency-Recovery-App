import React from "react";
import { bg, blue, yellow } from "../../constents/colors";

function LastSection() {
  return (
    <div
      style={{ backgroundColor: bg }}
      className="h-[60vh] w-full text-white text-center py-11 flex items-center justify-center"
    >
      <div>
        <h2
          style={{ fontFamily: "Montserrat Alternates" }}
          className="text-5xl font-bold mb-4 leading-snug tracking-wide"
        >
          It's time to
          <span className="mx-2 text-yellow-300">reclaim</span>
          your
          <br /> money and your life
        </h2>

        <div>
          <button
            style={{ backgroundColor: yellow, color: bg }}
            className="text-white py-4 px-14 font-bold rounded-full shadow-lg transition duration-300"
          >
            Reclaim My Crypto
          </button>
        </div>
      </div>
    </div>
  );
}

export default LastSection;
