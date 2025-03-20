import React from 'react';
import background from '../assets/KeepYour.jpg';

const Button = () => {
  return (
    <div className="relative w-full ">
      {/* Header */}
      
      {/* Hero Section */}
      <section className="relative w-full ">
        {/* Fullscreen Image */}
        <img
          src={background}
          alt="Beauty Product"
          className="bg-cover w-full h-full object-cover md:h-[inherit]"
        />

        <button className='text-2xl font-bold hover:bg-amber-50 absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white px-5 py-2 rounded-md md:text-xl md:bottom-10 md:left-14 md:translate-x-0 sm:text-base sm:bottom-6 sm:left-4 sm:px-3 sm:py-1'>
          Start Now
        </button>
      </section>
    </div>
  );
}

export default Button;