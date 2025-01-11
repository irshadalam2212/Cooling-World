// TestimonialAndContactForm.jsx
import React from "react";

const Testimonial = () => {
  return (
    <div className=" bg-white px-5 py-6">
      {/* Testimonial Section */}
      <h3 className="font-semi-bold text-blue-600">TESTIMONIALS</h3>
      <h1 className="text-4xl text-gray-800 font-bold mt-2">
        Words From Customers
      </h1>
      <div className="shadow-md rounded-lg p-8 md:m-4 w-full md:w-1/2">
        <div className="flex items-center my-4">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src="https://via.placeholder.com/48"
            alt="User avatar"
          />
          <div>
            <p className="text-md font-semibold">Shabbir Shaikh</p>
            <p className="text-blue-500">Thane, Maharashtra</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          Cooling World helped me out when I was in a pinch. Imran was very
          personable, knowledgeable, and professional. He was able to solve the
          problem in an efficient manner.
        </p>
        <div className="flex items-center">
          <span className="text-yellow-500">★★★★★</span>
          <span className="ml-2 text-gray-600">
            Rated 4.5 Out Of 140 Reviews
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
