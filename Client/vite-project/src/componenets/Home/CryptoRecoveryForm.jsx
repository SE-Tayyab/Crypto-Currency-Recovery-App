import React from "react";
import { bg, yellow } from "../../constents/colors";

const CryptoRecoveryForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div
      style={{ backgroundColor: bg }}
      className="min-h-screen text-white py-20 lg:py-40 px-4 sm:px-6 lg:px-6 "
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-2 leading-snug tracking-wide">
          Recover your money from <br /> cryptocurrency scams
        </h1>
        <p
          style={{ color: yellow, fontFamily: "Montserrat Alternates" }} // Use the imported yellow color
          className="text-5xl font-bold text-center mb-8"
        >
          no-win, no fee
        </p>

        <p className="text-xl text-center mb-20">
          Ripped off by scammers? Get in touch with us and our team of
          <br /> experts will get your money back.
        </p>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-3 py-2 bg-gray-700 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-3 py-2 bg-gray-700 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 bg-gray-700 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1"
                >
                  Phone/Mobile Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-3 py-2 bg-gray-700 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="cryptoName"
                  className="block text-sm font-medium mb-1"
                >
                  Name of Cryptocurrency
                </label>
                <input
                  type="text"
                  id="cryptoName"
                  name="cryptoName"
                  required
                  className="w-full px-3 py-2 bg-gray-700 rounded-md"
                  placeholder="e.g. Bitcoin, Ethereum, etc."
                />
              </div>
              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium mb-1"
                >
                  Amount of Funds Lost/Stuck
                </label>
                <input
                  type="text"
                  id="amount"
                  name="amount"
                  required
                  className="w-full px-3 py-2 bg-gray-700 rounded-md"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium mb-1"
                >
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  required
                  className="w-full px-3 py-2 bg-gray-700 rounded-md"
                >
                  <option value="">Select Country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  {/* Add more countries as needed */}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="caseReport"
                  className="block text-sm font-medium mb-1"
                >
                  Case Report
                </label>
                <textarea
                  id="caseReport"
                  name="caseReport"
                  rows="4"
                  required
                  className="w-full px-3 py-2 bg-gray-700 rounded-md"
                  placeholder="Please describe your case in more detail here..."
                ></textarea>
              </div>
            </div>

            <div className="mt-4 text-center text-yellow-400">
              <p className="text-sm">
                ⚠️ Our team of experts will review your case and contact you.
              </p>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-yellow-500 text-gray-900 py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 transition duration-300"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>

        <section className="text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Recover your lost or stuck cryptocurrency funds
            </h2>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-lg">
              <p className="mb-4 text-lg">
                No matter how hard governments try to regulate it, the
                Cryptocurrency industry is still alive and kicking. Since the
                topic is quite ambiguous to the general public, frauds use it to
                scam people out of their money, with what looks like a genuine
                investment opportunity.
              </p>
              <p className="text-xl font-semibold mb-4 text-yellow-300">
                If you fell into a Cryptocurrency scam, please contact us now.
              </p>
              <p className="text-lg">
                Although it is extremely difficult to recover money from Crypto
                scams, we will give you our honest evaluation of your case, and
                if possible, we will give our best effort to recover your money.
              </p>
            </div>
            <div className="mt-8 text-center">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
                Contact Us Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CryptoRecoveryForm;
