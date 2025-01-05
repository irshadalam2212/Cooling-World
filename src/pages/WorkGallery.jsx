import React from "react";
import { works } from "../data/data";

function WorkGallery() {
  return (
    <div id="work" className="bg-white py-6 px-5">
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
              We Have Done More Than 300 Projects In Last 2 Years, With 100%
              Satisfaction.
            </p>
          </div>
          <button className="bg-yellow-400 text-white font-semibold py-2 px-6 rounded-lg mt-4 sm:mt-0">
            View All
          </button>
        </div>
        {/* <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="/images/project-1.jpg"
              alt="Work 1"
              className="w-60 h-60 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img
              src="/images/project-2.jpg"
              alt="Work 2"
              className="w-60 h-60 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img
              src="/images/project-3.jpg"
              alt="Work 3"
              className="w-60 h-60 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img
              src="/images/project-4.jpg"
              alt="Work 4"
              className="w-60 h-60 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div> */}
        <div className="flex flex-wrap gap-3 mt-10">
          {works.map((work) => (
            <div key={work.id} className="mx-auto relative">
              <img src={work.image} alt="" className="w-80 h-96 object-cover" />
              <div className="text-xs font-medium bg-orange-600 text-white w-fit px-6 py-1 absolute bottom-20 left-0">
                {work.category}
              </div>
              <div className="text-lg font-semibold bg-white w-fit px-6 py-1 absolute bottom-11 left-0">
                {work.service}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkGallery;
