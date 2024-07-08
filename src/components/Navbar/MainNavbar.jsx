import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white shadow-md w-full z-10 ${
        isSticky ? "fixed top-0 transition-all duration-300 ease-in-out" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-[100px]">
        <div className="flex items-center space-x-8 text-xl">
          <Link to="/" className="text-blue-500 font-bold">
            Home
          </Link>
          <span className="text-gray-300">|</span>
          <Link to="/about" className="text-gray-800">
            About Us
          </Link>
          <span className="text-gray-300">|</span>
          <Link to="/services" className="text-gray-800">
            Services
          </Link>
          <span className="text-gray-300">|</span>
          <Link to="/reviews" className="text-gray-800">
            Reviews
          </Link>
          <span className="text-gray-300">|</span>
          <Link to="/specials" className="text-gray-800">
            Specials
          </Link>
          <span className="text-gray-300">|</span>
          <Link to="/blog" className="text-gray-800">
            Blog
          </Link>
          <span className="text-gray-300">|</span>
          <Link to="/contact" className="text-gray-800">
            Contact Us
          </Link>
        </div>
        <div className="flex items-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-md">
          <span className="text-sm">CALL FOR EMERGENCY</span>
          <span className="font-bold">+ (901) 855 678 90</span>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
