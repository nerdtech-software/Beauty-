
import React, { useEffect, useState } from "react";
import { FaBars, FaHeart, FaShoppingCart, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCard from "./ShoppingCard";


const Header = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [bgColor, setBgColor] = useState("bg-transparent");
  const favoritesCount = useSelector((state) => state.favorite.favorites.length);
   const [open, setOpen] = useState(false);

  // Handle screen resizing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("bg-white shadow-md");
      } else {
        setBgColor("bg-transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  console.log("totalQuantity", totalQuantity);



  return (
    <header
  className={`fixed top-0 left-0 w-full p-4 ${bgColor} backdrop-blur-md transition-all duration-300 z-50 flex items-center justify-between ${
    open ? 'opacity-0 pointer-events-none' : 'opacity-100'
  }`}
>


      {/* Brand Logo */}
      <div className="text-xl font-bold text-dark">Brand</div>

      {/* Desktop Navigation */}
      {!isMobile && (
        <nav className="flex-1 flex justify-center">
          <ul className="flex space-x-6 text-lg text-green-900 font-semibold">
            <li className="px-4 py-2 rounded-md hover:bg-gray-700 hover:text-yellow-400">
              <a href="#" onClick={() => setIsOpen(false)}>Home</a>
            </li>
            <li className="px-4 py-2 rounded-md hover:bg-gray-700 hover:text-yellow-400">
              <a href="#" onClick={() => setIsOpen(false)}>About</a>
            </li>
            <li className="px-4 py-2 rounded-md hover:bg-gray-700 hover:text-yellow-400">
     <Link to="/product"><span  onClick={() => setIsOpen(false)}>Product</span></Link>
            </li>
            <li className="px-4 py-2 rounded-md hover:bg-gray-700 hover:text-yellow-400">
              <a href="#" onClick={() => setIsOpen(false)}>Contact</a>
            </li>
          </ul>
        </nav>
      )}

      {/* Icons Section */}
      <div className="flex items-center gap-4">
      <div className="relative">
  <button onClick={() => setOpen(true)} className="relative">
    <FaHeart className="text-red-500 text-2xl cursor-pointer" />
  </button>
  {favoritesCount > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
      {favoritesCount}
    </span>
  )}
 </div>
        <ShoppingCard open={open} setOpen={setOpen} />

        {/* Shopping Cart Icon */}
        <div className="relative">
          <button onClick={() => navigate("/checkout")}>
            <FaShoppingCart className="text-gray-800 text-2xl cursor-pointer" />
          </button>
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalQuantity}
            </span>
          )}
        </div>
        {/* Mobile Menu Button (Hamburger) */}
        {isMobile && (
          <button className="text-dark text-2xl z-50" onClick={() => setIsOpen(true)}>
            <FaBars />
          </button>
        )}
      </div>

      {/* Mobile Sidebar Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)}>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-4/5 sm:w-1/2 h-full bg-gray-900 text-white p-4 flex flex-col shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Sidebar Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-xl font-bold">Brand</div>
              <button onClick={() => setIsOpen(false)} className="text-dark text-2xl">
                <FaTimes />
              </button>
            </div>

            {/* Sidebar Navigation */}
            <ul className="flex flex-col space-y-4 text-lg">
              <li className="border-b border-gray-700 pb-2 hover:text-yellow-400">
                <a href="#" onClick={() => setIsOpen(false)}>Home</a>
              </li>
              <li className="border-b border-gray-700 pb-2 hover:text-yellow-400">
                <a href="#" onClick={() => setIsOpen(false)}>About</a>
              </li>
              <li className="border-b border-gray-700 pb-2 hover:text-yellow-400">
                <a href="#" onClick={() => setIsOpen(false)}>Services</a>
              </li>
              <li className="border-b border-gray-700 pb-2 hover:text-yellow-400">
                <a href="#" onClick={() => setIsOpen(false)}>Contact</a>
              </li>
            </ul>
          </motion.div>
        </div>
      )}
    </header>
  );
};

export default Header;
