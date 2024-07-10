// TestimonialAndContactForm.jsx
import React from "react";

const TestimonialAndContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Testimonial Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 m-4 w-full md:w-1/2">
        <h2 className="text-lg font-bold text-blue-600">TESTIMONIALS</h2>
        <h3 className="text-3xl font-bold my-4">Words From Customers</h3>
        <div className="flex items-center my-4">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src="https://via.placeholder.com/48"
            alt="User avatar"
          />
          <div>
            <p className="text-xl font-semibold">XYZ</p>
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

      {/* Contact Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 m-4 w-full md:w-1/2">
        <h2 className="text-xl font-bold mb-4">Schedule an Appointment</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="p-2 border border-gray-300 rounded"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="p-2 border border-gray-300 rounded"
              type="email"
              placeholder="Email"
              required
            />
            <input
              className="p-2 border border-gray-300 rounded"
              type="tel"
              placeholder="Phone No."
              required
            />
            <select className="p-2 border border-gray-300 rounded" required>
              <option value="">Select Service</option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 3</option>
            </select>
            <input
              className="p-2 border border-gray-300 rounded"
              type="text"
              placeholder="Zip Code"
              required
            />
            <select className="p-2 border border-gray-300 rounded" required>
              <option value="">Are You a New Customer?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <textarea
            className="p-2 border border-gray-300 rounded mt-4 w-full"
            placeholder="Write Your Message..."
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-500 text-white font-bold p-2 rounded mt-4 w-full"
          >
            Send Message
          </button>
          <p className="text-sm text-gray-600 mt-2">
            *Our Customer Support Team Will Contact You Within 24 Hrs.
          </p>
        </form>
      </div>
    </div>
  );
};

export default TestimonialAndContactForm;
