import React, { useEffect, useState } from "react";
import { FaEye, FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/AddToCard";
import { setProducts, toggleFavorite } from "../Redux/favoriteSlice";
import ProductQuickView from "./ProductQuickView";

const products = [
  {
    id: 1,
    name: "Skin care cream",
    price: "$200",
    img: "https://pagedone.io/asset/uploads/1701157806.png",
    rating: 2,
  },
  {
    id: 2,
    name: "Men’s Facial",
    price: "$100",
    img: "https://pagedone.io/asset/uploads/1701157826.png",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Dark circles serum",
    price: "$300",
    img: "https://pagedone.io/asset/uploads/1701157844.png",
    discount: "100% Off",
    rating: 4.8,
    
  },
];

const Product = () => {
  const [open, setOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite.favorites);
  const productsFromStore = useSelector((state) => state.favorite.products);
  
  console.log("product" ,productsFromStore);
  useEffect(() => {
    dispatch(setProducts(products)); // Set products in Redux
  }, [dispatch]);

  const handleQuickView = (productId) => {
    setSelectedProductId(productId);
    setOpen(true);
  };

  // const handleAddToCard = (product) => {
  //   // Add to cart logic here
  //   dispatch(addToCart(product));
  //   console.log("Add to cart", product);
  // }
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    <Alert severity="success">
  <AlertTitle>Success</AlertTitle>
  This is a success Alert with an encouraging title.
</Alert>
  };


  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between text-center mb-16">
          <h2 className="font-manrope font-bold text-3xl min-[400px]:text-4xl text-black mb-8 max-lg:text-center">
            Available Products
          </h2>
          <a href="#" className="text-blue-500 font-bold">
            View more Products
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="relative group max-w-[384px] mx-auto">
              <div className="w-full max-w-sm aspect-square relative overflow-hidden rounded-xl">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.discount && (
                  <span className="py-1 min-[400px]:py-2 px-2 min-[400px]:px-4 cursor-pointer rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 font-medium text-base leading-7 text-white absolute top-3 right-3 z-10">
                    {product.discount}
                  </span>
                )}

                {/* Hover Icons */}
                <div className="absolute inset-0 bg-transparent bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-end justify-center gap-4 transition-opacity duration-500">
                <button onClick={() => handleAddToCart(product)} className="p-2 bg-white rounded-full hover:bg-gray-200">
  <FaShoppingCart className="text-gray-800" />
</button>
                  <button
                    onClick={() => handleQuickView(product.id)}
                    className="p-2 bg-white rounded-full hover:bg-gray-200"
                  >
                    <FaEye className="text-gray-800" />
                  </button>
                  <button 
                    onClick={() => dispatch(toggleFavorite(product.id))}
                    className="p-2 bg-white rounded-full hover:bg-gray-200"
                  >
                    <FaHeart
                      className={favorites.includes(product.id) ? "text-red-500" : "text-gray-800"}
                    />
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="mt-5 text-center">
                <h6 className="font-semibold text-xl leading-8 text-indigo-600">{product.price}</h6>
                <h6 className="font-medium text-xl leading-8 text-black mb-2">{product.name}</h6>
                <div className="flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span className="text-black font-medium">{product.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick View Component */}
      {selectedProductId && (
        <ProductQuickView open={open} setOpen={setOpen} productId={selectedProductId} />
      )}
    </section>
  );
};

export default Product;
