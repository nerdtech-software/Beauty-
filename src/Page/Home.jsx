import React from "react";
import BeautyProductSection from "../components/BeautyProductSection";
import BeautySection from "../components/BeautySection";
import HeaderBg from "../components/HeaderBg";
import MakeUp from "../components/MakeUp";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <HeaderBg />
      <MakeUp />
      <BeautyProductSection />
      <BeautySection />
      <Newsletter />
      
    </div>
  );
};

export default Home;
