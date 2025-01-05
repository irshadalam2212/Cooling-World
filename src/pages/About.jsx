import React from "react";

function AboutPage() {
  return (
    <div
      id="about"
      className="bg-white min-h-screen flex items-center justify-center"
    >
      <div className="rounded-lg flex gap-5">
        {/* Left Section */}
        <div className="py-6 px-5">
          <img
            src="https://html.kodesolution.com/2024/cooltech-php/images/resource/about2-1.jpg"
            alt="HVAC Service"
            className="rounded-lg"
          />
        </div>
        {/* Right Section */}
        <div className="py-6 px-5">
          <h3 className="text-blue-600 uppercase font-semibold">
            Welcome to Cooling World
          </h3>
          <h1 className="text-4xl font-bold text-gray-800 mt-2">
            Air Conditioning Repair & Installation Company
          </h1>
          <p className="text-gray-600 mt-4">
            Expert air-conditioning repair, installation, and maintenance
            services. Certified technicians providing prompt and reliable
            solutions. Keeping your space comfortable and cozy year-round.
          </p>
          <div className="mt-6">
            <h4>Why Choose Us</h4>
            <div className="flex items-center mb-3">
              <span className="text-yellow-500 text-lg mr-2">★</span>
              <span className="text-gray-800">
                Unbeatable Availability: 24/7 Emergency Service
              </span>
            </div>
            <div className="flex items-center mb-3">
              <span className="text-yellow-500 text-lg mr-2">★</span>
              <span className="text-gray-800">
                Unmatched Quality: Warranties & Guarantees
              </span>
            </div>
            <div className="flex items-center mb-3">
              <span className="text-yellow-500 text-lg mr-2">★</span>
              <span className="text-gray-800">
                Unparalleled Experience: Exceeding Expectations
              </span>
            </div>
            <div className="flex items-center mb-3">
              <span className="text-yellow-500 text-lg mr-2">★</span>
              <span className="text-gray-800">
                Unrivaled Convenience: Online Scheduling
              </span>
            </div>
            <div className="flex items-center mb-3">
              <span className="text-yellow-500 text-lg mr-2">★</span>
              <span className="text-gray-800">
                Unbeatable Value: Financing Options Available
              </span>
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

export default AboutPage;
