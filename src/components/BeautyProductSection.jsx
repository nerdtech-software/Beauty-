import React from "react";
import background from "../assets/Beautycare.jpg";

const BeautyProductSection = () => {
  return (
    <>
      <img 
        src={background} 
        alt="Beauty Care" 
        className="w-full h-auto object-cover py-10 sm:h-64 md:h-80 lg:h-96" 
      />
    </>
  );
};

export default BeautyProductSection;


// import React from "react";
// import background from "../assets/Beautycare.jpg";

// const BeautyProductSection = () => {
//   return (
//     <div className="w-full  items-center py-10">
//       <img
//         src={background}
//         alt="Beauty Care"
//         className="w-full max-w-5xl h-auto object-cover"
//       />
//     </div>
//   );
// };

// export default BeautyProductSection;
