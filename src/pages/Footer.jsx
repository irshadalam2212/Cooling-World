// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
        {/* Left Section */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Cooling World</h2>
          <p className="mb-4">Experienced Care for Your Heat and Air.</p>
          <p className="text-gray-300 mb-4">
            Cooling World has been in business in Thane, Maharshtra since 2017.
            During that time, we have taken great care to build a successful
            HVAC business.
          </p>
          <a href="#" className="text-yellow-500 font-bold">
            Get a Free Quote
          </a>
        </div>

        {/* Middle Section */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Useful Information</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2">
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#" className="text-gray-300">
                    A/C Installation
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-300">
                    Contact Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-300">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-300">
                    Home-old
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-300">
                    Meet Our Team
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-300">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#" className="text-gray-300">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-300">
                    FAQs
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-300">
                    Home 02
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-300">
                    Maintenance & Repair
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-300">
                    Our Projects
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-300">
                    Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3">
          <h2 className="text-xl font-bold mb-4">Subscribe Today</h2>
          <p className="text-gray-300 mb-4">
            Subscribe to us to get updates, news & tips in your inbox.
          </p>
          <form className="flex">
            <input
              type="email"
              className="p-2 flex-grow rounded-l-lg text-gray-900"
              placeholder="Email Address..."
            />
            <button className="bg-yellow-500 p-2 rounded-r-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
          </form>
          <p className="text-gray-300 mt-2">We do not share your email id</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 border-t border-gray-700 pt-4 text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2022 All Rights Reserved by Cooling World.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="text-gray-400 hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:underline">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
