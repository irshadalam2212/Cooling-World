import React from "react";

function WorkGallery() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div>
            <h3 className="text-blue-600 uppercase font-semibold">
              Work Gallery
            </h3>
            <h1 className="text-4xl font-bold text-gray-800 mt-2">
              Our Featured Works
            </h1>
            <p className="text-gray-600 mt-4">
              We Have Done More Than 800 Projects In Last 3 Years, With 100%
              Satisfaction.
            </p>
          </div>
          <button className="bg-yellow-400 text-white font-semibold py-2 px-6 rounded-lg mt-4 sm:mt-0">
            View All
          </button>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image 1 */}
          <div>
            <img
              src="/mnt/data/image.png"
              alt="Work 1"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Image 2 */}
          <div>
            <img
              src="/mnt/data/image.png"
              alt="Work 2"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Image 3 */}
          <div>
            <img
              src="/mnt/data/image.png"
              alt="Work 3"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Image 4 */}
          <div>
            <img
              src="/mnt/data/image.png"
              alt="Work 4"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Image 5 */}
          <div>
            <img
              src="/mnt/data/image.png"
              alt="Work 5"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Image 6 */}
          <div>
            <img
              src="/mnt/data/image.png"
              alt="Work 6"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkGallery;
