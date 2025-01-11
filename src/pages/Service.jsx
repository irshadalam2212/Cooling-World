import React, { useState } from "react";
import Services from "../components/Services";
import { ourServices } from "../data/data";

function Service() {
  const [services, setServices] = useState(ourServices);
  return (
    <div id="services" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-blue-600 uppercase font-semibold">
            Our Services
          </h3>
          <h1 className="text-4xl font-bold text-gray-800 mt-2">
            Services we offer
          </h1>
          <p className="text-gray-600 mt-4">
            We Provide Fast, Reliable Air-Conditioning Services in Mumbai City
            and Its Surrounding Areas.
          </p>
        </div>
        <Services services={services} />
      </div>
    </div>
  );
}

export default Service;
