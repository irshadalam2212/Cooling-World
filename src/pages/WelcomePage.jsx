import React from "react";

function WelcomePage() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg flex">
        {/* Left Section */}
        <div className="w-1/2 p-5">
          <img
            src="https://via.placeholder.com/400x300"
            alt="HVAC Service"
            className="rounded-lg"
          />
        </div>
        {/* Right Section */}
        <div className="w-1/2 p-8">
          <h3 className="text-blue-600 uppercase font-semibold">
            Welcome to Cooling World
          </h3>
          <h1 className="text-4xl font-bold text-gray-800 mt-2">
            Heating & Air Conditioning Repair & Installation Company
          </h1>
          <p className="text-gray-600 mt-4">
            Nor again is there anyone who loves or pursues or desires to obtain
            pain of because it is pain, but because occasionally circumstances.
          </p>
          <div className="mt-6">
            <div className="flex items-center mb-3">
              <span className="text-yellow-500 text-lg mr-2">★</span>
              <span className="text-gray-800">Warrantees & Guarantees</span>
            </div>
            <div className="flex items-center mb-3">
              <span className="text-yellow-500 text-lg mr-2">★</span>
              <span className="text-gray-800">Exceed Expectation</span>
            </div>
            <div className="flex items-center mb-3">
              <span className="text-yellow-500 text-lg mr-2">★</span>
              <span className="text-gray-800">Online Schedule</span>
            </div>
            <div className="flex items-center mb-3">
              <span className="text-yellow-500 text-lg mr-2">★</span>
              <span className="text-gray-800">Financing Available</span>
            </div>
          </div>
          <div className="mt-8">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none">
              Watch Video & Know How We Work
            </button>
          </div>
          <div className="mt-8 flex items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="Signature"
              className="h-8"
            />
            <div className="ml-4">
              <div className="text-gray-800 font-semibold">Imran Alam</div>
              <div className="text-gray-600 text-sm">
                CEO & Founder of Cooling World
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
