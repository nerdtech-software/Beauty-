import React from "react";

const MakeUp = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center p-6 bg-gradient-to-b from-green-100 to-white gap-10">
        {/* First Card */}
        <div className="shadow-lg p-6 rounded-xl flex flex-col items-start w-64 sm:w-full md:w-80">
          <h3 className="font-semibold text-lg">Your Beauty</h3>
          <p className="text-sm text-gray-600 mt-2">
            Many people use VR for gaming, as it creates a more.
          </p>
          <button className="mt-4 px-4 py-2 bg-green-900 text-white rounded-md">
            Start Now
          </button>
        </div>

        {/* Second Card */}
        <div className="relative w-64 h-64 rounded-xl overflow-hidden shadow-lg sm:w-full md:w-80">
          <img
            src="https://www.nylon.com.sg/wp-content/uploads/2023/05/shu-uemura-oil-anti-oxi-scaled.jpg"
            alt="Beauty Product 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Third Card */}
        <div className="bg-green-200 shadow-lg p-6 rounded-xl w-64 sm:w-full md:w-80">
          <h3 className="font-semibold text-lg">Your Beauty</h3>
          <p className="text-sm text-gray-700 mt-2">
            VR can be used to create realistic simulations for...
          </p>
        </div>

        {/* Fourth Card */}
        <div className="relative w-64 h-64 rounded-xl overflow-hidden shadow-lg sm:w-full md:w-80">
          <img
            src="https://m.media-amazon.com/images/I/61rorLsr7ML._SY450_.jpg"
            alt="Beauty Product 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MakeUp;