import React from "react";
import cryptoIll from "../../assets/crypto.jpg";

const CryptoTracingInfo = () => {
  return (
    <section className="bg-white py-8 px-4 sm:px-6 lg:px-8 xl:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Cryptocurrency Tracing and Recovery
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8">
              The first step to recovering virtual assets is to determine where
              they were moved and to whom. This establishes our target.
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div className="border-l-4 border-gray-300 hover:border-blue-500 pl-4 transition duration-300">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  Are Cryptos Traceable?
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  While Cryptocurrencies are, with few exceptions,
                  decentralized, almost all virtual currencies are traceable.
                  Cryptocurrencies are kept in digital accounts referred to as
                  wallets. Each time Cryptocurrency is moved from one wallet to
                  another it is recorded in the Blockchain.
                </p>
              </div>

              <div className="border-l-4 border-gray-300 hover:border-blue-500 pl-4 transition duration-300">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  The Technical Solution
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  We are able to not only trace the movement of Cryptocurrency
                  and identify the specific wallets, we are also able to
                  identify where those wallets are being held and even track the
                  locations of those that access the wallets.
                </p>
              </div>

              <div className="border-l-4 border-gray-300 hover:border-blue-500 pl-4 transition duration-300">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  Not all Cryptos are Equal
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Most Cryptocurrencies are traceable; however, not all. We are
                  able to trace the most popular Cryptocurrencies, including
                  Bitcoin and Ethereum, as well as others.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={cryptoIll}
                alt="Cryptocurrency tracing illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoTracingInfo;
