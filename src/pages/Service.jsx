import React from "react";

function Service() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-blue-600 uppercase font-semibold">
            Our Services
          </h3>
          <h1 className="text-4xl font-bold text-gray-800 mt-2">
            Services we offer
          </h1>
          <p className="text-gray-600 mt-4">
            We Provide Fast, Reliable Heating and Air Conditioning Services in
            Mumbai City and Its Surrounding Areas.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center">
          {/* Service 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <img
                  src="/images/service2-1.jpg"
                  alt="Maintenance and Repair"
                  className="mx-auto"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Maintenance and Repair
              </h2>
              <p className="text-gray-600">
                To take a trivial example, which of ever undertakes laborious
                physical at exercise, except to...
              </p>
            </div>
          </div>
          {/* Service 2 */}
          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <img
                  src="/images/service2-2.jpg"
                  alt="Indoor Air Quality Testing"
                  className="mx-auto"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Installation Services
              </h2>
              <p className="text-gray-600">
                Know how to pursue pleasure rationally encounter consequences
                that are extremely ever undertakes...
              </p>
            </div>
          </div>
          {/* Service 3 */}
          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <img
                  src="/images/service2-3.jpg"
                  alt="HVAC Design and Installation"
                  className="mx-auto"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                A/C Gas filling Services
              </h2>
              <p className="text-gray-600">
                To take a trivial example, which of ever undertakes laborious
                physical at exercise, except to...
              </p>
            </div>
          </div>
          {/* Service 4 */}
          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <img
                  src="/images/service2-4.jpg"
                  alt="HVAC Design and Installation"
                  className="mx-auto"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Washing Machine Repair
              </h2>
              <p className="text-gray-600">
                To take a trivial example, which of ever undertakes laborious
                physical at exercise, except to...
              </p>
            </div>
          </div>
          {/* Service 4 */}
          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <img
                  src="/images/service2-5.jpg"
                  alt="HVAC Design and Installation"
                  className="mx-auto"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Refrigerator Repair
              </h2>
              <p className="text-gray-600">
                To take a trivial example, which of ever undertakes laborious
                physical at exercise, except to...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
