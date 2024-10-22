import React, { useState } from "react";
import axios from "axios";
import { bg, yellow } from "../../constents/colors";
import Modal from "../Modal"; // Import the Modal component
import countries from "../../constents/countries"; // Import countries from the separate file
import countryCodes from "../../constents/countryCodes"; // Import country codes from the separate file

const CryptoRecoveryForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "",
    cryptoName: "",
    amount: "",
    country: "",
    caseReport: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://crypto-currency-recovery-app.vercel.app/api/v1/crypto-recovery/add`,
        formData
      );
      // Open the modal upon successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        countryCode: "",
        cryptoName: "",
        amount: "",
        country: "",
        caseReport: "",
      });
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div
      style={{ backgroundColor: bg }}
      className="min-h-screen text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold text-center mb-2 leading-snug tracking-wide">
          Recover your money from <br /> cryptocurrency scams
        </h1>
        <p
          style={{ color: yellow, fontFamily: "Montserrat Alternates" }}
          className="text-3xl sm:text-5xl font-bold text-center mb-8"
        >
          no-win, no fee
        </p>

        <p className="text-lg sm:text-xl text-center mb-20">
          Ripped off by scammers? Get in touch with us and our team of
          <br className="hidden sm:block" /> experts will get your money back.
        </p>
        <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <p
              style={{ fontFamily: "Montserrat Alternates" }}
              className="text-3xl font-bold text-center mb-8"
            >
              Let's get your money back!
            </p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium mb-1"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-700 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium mb-1"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-700 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-700 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1"
                >
                  Phone/Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="flex space-x-2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    required
                    className="bg-gray-700 px-3 py-2 rounded-md w-1/3"
                  >
                    <option value="">+ Country Code</option>
                    {countryCodes.map((code) => (
                      <option key={code.code} value={code.code}>
                        {code.name} {code.code}{" "}
                        {/* Display name and code together */}
                      </option>
                    ))}
                  </select>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-2/3 px-3 py-2 bg-gray-700 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="cryptoName"
                  className="block text-sm font-medium mb-1"
                >
                  Name of Cryptocurrency <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="cryptoName"
                  name="cryptoName"
                  value={formData.cryptoName}
                  onChange={handleChange}
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
                  Amount of Funds Lost/Stuck{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-700 rounded-md"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium mb-1"
                >
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-700 rounded-md"
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="caseReport"
                  className="block text-sm font-medium mb-1"
                >
                  Case Report <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="caseReport"
                  name="caseReport"
                  rows="4"
                  value={formData.caseReport}
                  onChange={handleChange}
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

        {/* Modal Component */}
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          title="Submission Successful!"
          message="Thank you for your submission. Our team will review your case and contact you shortly."
        />

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
          </div>
        </section>
      </div>
    </div>
  );
};

export default CryptoRecoveryForm;
