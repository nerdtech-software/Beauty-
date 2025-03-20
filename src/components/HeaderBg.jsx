import React from 'react';
import background from '../assets/KeepYour.jpg';
const Button = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Header */}
      
      {/* Hero Section */}
      <section className="relative w-full ">
        {/* Fullscreen Image */}
        <img
          src={background}
          alt="Beauty Product"
          className="bg-cover w-[inherit] "
        />

        <button  className='text-2xl font-bold hover:bg-amber-50 absolute bottom-20 left-14 bg-white px-5 py-2 rounded-md'>Start Now</button>
        </section>

        
        {/* Text Overlay */}
       </div>
  );
}

export default Button;