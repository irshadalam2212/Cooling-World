import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const MainNavbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setSticky(offset > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`bg-white shadow-md w-full z-10 ${
        isSticky ? "fixed top-0 transition-all duration-300 ease-in-out" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo or Brand Name */}
        <div className="flex md:hidden items-center space-x-2 cursor-pointer">
          <img src="/logo.png" alt="Cooling World Logo" className="h-10" />
          <span className="text-2xl font-bold text-blue-900">
            Cooling World
          </span>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Desktop Navbar */}
        <div
          className={`hidden md:flex items-center space-x-8 text-xl ${
            isMenuOpen ? "block" : ""
          }`}
        >
          <Link
            to="home"
            className="text-gray-800 cursor-pointer hover:text-gray-950"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            className="text-gray-800 cursor-pointer hover:text-gray-950"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="services"
            className="text-gray-800 cursor-pointer hover:text-gray-950"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="work"
            className="text-gray-800 cursor-pointer hover:text-gray-950"
            onClick={() => setMenuOpen(false)}
          >
            Work
          </Link>
          <Link
            to="blog"
            className="text-gray-800 cursor-pointer hover:text-gray-950"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="contact"
            className="text-gray-800 cursor-pointer hover:text-gray-950"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>

        {/* Emergency Call Section */}
        <div className="hidden md:flex items-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-md">
          <span className="text-sm">CALL FOR EMERGENCY</span>
          <span className="font-bold">+ (91) 8828721704</span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white shadow-md absolute w-full left-0 top-[60px] z-10`}
      >
        <div className="flex flex-col items-center space-y-4 py-4 text-xl">
          <Link
            to="home"
            className="text-gray-800 cursor-pointer hover:text-gray-950"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            className="text-gray-800 cursor-pointer hover:text-gray-950"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="services"
            className="text-gray-800 cursor-pointer hover:text-gray-950"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="work"
            className="text-gray-800 cursor-pointer hover:text-gray-950"
            onClick={() => setMenuOpen(false)}
          >
            Work
          </Link>
          <Link
            to="blog"
            className="text-gray-800 cursor-pointer hover:text-gray-950"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="contact"
            className="text-gray-800 cursor-pointer hover:text-gray-950"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
          <div className="bg-blue-600 text-white py-2 px-4 rounded-md text-center">
            <span className="block text-sm">CALL FOR EMERGENCY</span>
            <span className="font-bold block">+ (91) 8828721704</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
