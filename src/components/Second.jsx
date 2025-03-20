import React from "react";

function Second() {
    const headingStyle = {
        fontSize: "24px",
        width: "100%",
        fontWeight: 700,
      };
  return (
    <section className="flex flex-col md:flex-row items-center justify-between pl-40 py-10 bg-white">
      {/* Left Side - Testimonial Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <p className="text-green-900 font-semibold text-sm md:text-base">Feedback</p>
        <h2 className="text-2xl md:text-4xl font-bold text-green-900 leading-tight">
          What our Client says
        </h2>
        
        {/* Testimonial */}
        <div className="mt-4 flex flex-col items-center md:items-start">
          <img 
            className="w-12 h-12 md:w-16 md:h-16" 
            src="https://img.icons8.com/ios/50/quote-right.png" 
            alt="quote-right"
          />
          <p style={headingStyle} className=" text-gray-700 text-base md:text-lg mt-2">
            The instructor was knowledgeable and engaging, and I learned a lot in this course.
          </p>
        </div>

        {/* Client Info */}
        <div className="mt-4 flex items-center justify-center md:justify-start">
          <img
            src="https://images.pexels.com/photos/5411140/pexels-photo-5411140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Client"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300"
          />
          <div className="ml-3 text-center md:text-left">
            <h3 className="font-bold text-green-900 text-sm md:text-base">Flower Lover</h3>
            <p className="text-gray-500 text-xs md:text-sm">Store of flower</p>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
  <div className="relative pl-6 rounded-lg max-w-4xl w-full">
    <img
      src="https://images.pexels.com/photos/8541318/pexels-photo-8541318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="Product"
      className="shadow-lg rounded-lg max-w-4xl w-full h-auto"
    />
  </div>
</div>

    </section>
  );
}

export default Second;