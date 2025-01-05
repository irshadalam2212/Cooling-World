import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-white px-5 flex items-center justify-center mb-6"
    >
      {/* Contact Form Section */}
      <div className="shadow-md rounded-lg px-5 py-6 w-full md:w-1/2">
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
            />
            <input
              className="p-2 border border-gray-300 rounded"
              type="tel"
              placeholder="Phone No."
              required
            />
            <select className="p-2 border border-gray-300 rounded" required>
              <option value="">Select Service</option>
              <option value="service1">Maintenance</option>
              <option value="service2">Repair</option>
              <option value="service3">Installation</option>
              <option value="service3">Gas Filling</option>
              <option value="service3">Washing Machine Repair</option>
              <option value="service3">Refrigerator Repair</option>
            </select>
            <input
              className="p-2 border border-gray-300 rounded"
              type="text"
              placeholder="Address"
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

export default Contact;
