"use client";
import { Dialog, DialogBackdrop, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/AddToCard";
import { toggleFavorite } from "../Redux/favoriteSlice";

export default function ShoppingCard({ open, setOpen }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.favorite.products);
  
  const favoriteProducts = useSelector((state) =>
    state.favorite?.favorites?.map(
      (id) => products?.find((product) => product.id === id) || {}
    )
  );

  const subTotal = favoriteProducts.reduce((acc, product) => {
    const price = parseFloat(product?.price?.replace(/[^0-9.-]+/g, "")) || 0;
    return acc + price;
  }, 0);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert(`${product.name} added to cart!`);
  };

  const handleRemoveFromFavorites = (id) => {
    dispatch(toggleFavorite(id));
    alert("Product removed from favorites.");
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Dialog.Panel className="pointer-events-auto w-screen max-w-md bg-white shadow-xl">
              <div className="flex h-full flex-col overflow-y-scroll p-6">
                
                {/* Header */}
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-lg font-medium">Favorite Products</DialogTitle>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <XMarkIcon className="w-6 h-6 text-gray-700 hover:text-black" />
                  </button>
                </div>

                {/* Product List */}
                {favoriteProducts.length === 0 ? (
                  <p className="text-gray-500 p-6">No favorite products yet.</p>
                ) : (
                  <ul className="p-6 space-y-4">
                    {favoriteProducts.map((product) => (
                      <li key={product.id} className="flex items-center">
                        {/* Product Image */}
                        <img
                          src={product.img}
                          alt={product.name}
                          className="size-24 rounded-md"
                        />
                        
                        {/* Product Info */}
                        <div className="ml-4 flex flex-col flex-1">
                          <h3 className="text-gray-900">{product.name}</h3>
                          <p className="text-gray-500">{product.color}</p>
                          <p className="text-gray-900">{product.price}</p>
                          
                          {/* Action Buttons */}
                          <div className="mt-4 flex gap-2">
                            <button
                              onClick={() => handleAddToCart(product)}
                              className="bg-indigo-600 text-white px-4 py-2 text-sm rounded-md hover:bg-indigo-700"
                            >
                              Add to Cart
                            </button>
                            <button
                              onClick={() => handleRemoveFromFavorites(product.id)}
                              className="bg-red-500 text-white px-4 py-2 text-sm rounded-md hover:bg-red-600"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Subtotal Section */}
                <div className="border-t border-gray-200 px-4 py-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${subTotal.toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
                    >
                      Checkout
                    </a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{" "}
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continue Shopping{" "}
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
