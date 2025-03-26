"use client";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/AddToCard";
import { toggleFavorite } from "../Redux/favoriteSlice";

export default function ProductQuickView({ open, setOpen, productId }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.favorite?.products || []);
  const product = products.find((item) => item?.id === productId);

  if (!product) {
    return (
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <DialogPanel className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold text-red-600">Product not found</h2>
              <button onClick={() => setOpen(false)} className="mt-4 bg-gray-300 px-4 py-2 rounded-lg">
                Close
              </button>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    );
  }

  const { name, img, price, rating = 0, reviewCount = "4k" } = product;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert(`${name} added to cart!`);
  };

  const handleAddToFavorites = () => {
    dispatch(toggleFavorite(productId)); // Fixed action for favorites
    alert(`${name} added to favorites!`);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
          <DialogPanel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
            <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6"
              >
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>

              {/* Content */}
              <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                
                {/* Product Image */}
                <img
                  alt={name}
                  src={img}
                  className="aspect-2/3 w-full rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5"
                />

                {/* Product Info */}
                <div className="sm:col-span-8 lg:col-span-7">
                  <h2 className="text-2xl font-bold text-gray-900">{name}</h2>

                  {/* Price Section */}
                  <section className="mt-2">
                    <p className="text-2xl text-gray-900">{price}</p>

                    {/* Reviews */}
                    <div className="mt-6">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                          <StarIcon
                            key={index}
                            className={`size-5 ${
                              rating >= index + 1
                                ? "text-yellow-400"
                                : "text-gray-200"
                            }`}
                          />
                        ))}
                        <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                          {reviewCount} reviews
                        </a>
                      </div>
                    </div>
                  </section>

                  {/* Buttons Section */}
                  <div className="mt-6 flex gap-4">
                    <button
                      type="button"
                      onClick={handleAddToCart}
                      className="w-full rounded-md bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700"
                    >
                      Add to Cart
                    </button>

                    <button
                      type="button"
                      onClick={handleAddToFavorites}
                      className="w-full rounded-md bg-gray-200 px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-300"
                    >
                      Add to Favorites
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
