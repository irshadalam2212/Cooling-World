import React from "react";

const MiddleHeader = () => {
  return (
    <div className="bg-white flex justify-between items-center py-8 px-[100px]">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Cooltek Logo" className="h-10" />
        <span className="text-2xl font-bold text-blue-900">Cooling World</span>
      </div>
      <div className="flex items-center space-x-12">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-700 px-5 py-4 text-2xl rounded-md">
            <i className="fas fa-map-marker-alt text-white"></i>
          </div>
          <div>
            <div className="text-blue-900 font-bold">Thane, Maharashtra</div>
            <div className="text-gray-500">-----------------</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-blue-700 px-4 py-4 text-2xl rounded-md">
            <i className="fas fa-envelope text-white"></i>
          </div>
          <div>
            <div className="text-blue-900 font-bold">Mail us on</div>
            <div className="text-gray-500">support@example.com</div>
          </div>
        </div>
        <div className="border-r border-gray-300 h-8"></div>
        <div>
          <i className="fas fa-search text-gray-700"></i>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
