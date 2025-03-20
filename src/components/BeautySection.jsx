import React from "react";
import Second from "./Second";

const BeautySection = () => {
  return (
    <>
      <section className="container mx-auto py-10 flex flex-col md:flex-row items-center gap-8 relative">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left relative">
          <div className="absolute -mt-16">
            <h1 className="text-3xl sm:text-xl md:text-5xl font-bold text-gray-900 md:pl-40 absolute w-[max-content]">
              Beauty Is{" "}
              <span className="inline-block">
                <img
                  src="https://images.pexels.com/photos/4202321/pexels-photo-4202321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Icon"
                  className="w-10 h-8 md:w-16 md:h-10 inline"
                />
              </span>{" "}
              Subjective Concept
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 ">
              That Can Be Defined And Perceived.
            </h1>
            </h1>
           
          </div>
          <br />
          <br />
          <div className="flex flex-col md:flex-row gap-6 md:pl-40 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold">What about our Product?</h3>
              <p className="text-gray-700">
                Beauty products are a diverse category of consumer goods that are designed.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">What are the most popular?</h3>
              <p className="text-gray-700">Beauty products can range from basic items such.</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://images.pexels.com/photos/4202321/pexels-photo-4202321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Beauty Product"
            className="max-w-[90%] h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      <br />
      <br />
      <Second />
    </>
  );
};

export default BeautySection;
