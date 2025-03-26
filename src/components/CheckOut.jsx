import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../Redux/AddToCard";

const CheckOut = () => {
  const dispatch = useDispatch();
  const { cart, totalAmount, totalQuantity } = useSelector(
    (state) => state.cart
  );
  console.log("cart", cart);
  console.log("totalAmount", totalAmount);
  console.log("totalQuantity", totalQuantity);

  // Check if cart is empty
  if (cart.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
      </div>
    );
  }
  // Function to remove item from cart
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };
  
  return (
    <div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 py-20">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {cart.map((item) => (
                <div className="flex items-center justify-between">
              <div
                key={item.id}
                className="flex flex-col rounded-lg bg-white sm:flex-row"
              >
                <img
                  className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                  src={item.img}
                  alt={item.name}
                />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-bold text-lg">{item.name}</span>
                  {/* <span className="float-right text-gray-400">
                    Price: {item.price}
                  </span> */}
                  <p className="text-lg font-semibold">Price: {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  {/* <p>Total: ${item.totalPrice}</p> */}

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleDecrease(item.id)}
                      className="px-3 py-1 bg-gray-300 rounded-lg"
                    >
                      -
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="px-3 py-1 bg-gray-300 rounded-lg"
                    >
                      +
                    </button>
                  </div>
                </div>

                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                >
                  Remove
                </button>
              </div>    
            ))}
          
          </div>


          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <form className="mt-5 grid gap-6">
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                for="radio_1"
              >
                <img
                  className="w-14 object-contain"
                  src="/images/naorrAeygcJzX0SyNI4Y0.png"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Fedex Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_2"
                type="radio"
                name="radio"
                checked
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                for="radio_2"
              >
                <img
                  className="w-14 object-contain"
                  src="/images/oG8xsl3xsOkwkMsrLGKM4.png"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Fedex Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>

        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Delivery Info</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label
                for="first-name"
                className="mb-2 block text-sm font-medium"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:border-blue-500 focus:ring-blue-500"
                placeholder="First Name"
              />
            </div>
            <div>
              <label for="last-name" className="mb-2 block text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:border-blue-500 focus:ring-blue-500"
                placeholder="Last Name"
              />
            </div>
          </div>

          <label for="address" className="mt-4 mb-2 block text-sm font-medium">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:border-blue-500 focus:ring-blue-500"
            placeholder="Street Address"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label for="state" className="mb-2 block text-sm font-medium">
                State
              </label>
              <input
                type="text"
                id="state"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:border-blue-500 focus:ring-blue-500"
                placeholder="State"
              />
            </div>
            <div>
              <label for="city" className="mb-2 block text-sm font-medium">
                City
              </label>
              <input
                type="text"
                id="city"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:border-blue-500 focus:ring-blue-500"
                placeholder="City"
              />
            </div>
          </div>

          <label for="zip" className="mt-4 mb-2 block text-sm font-medium">
            Zip Code
          </label>
          <input
            type="text"
            id="zip"
            className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:border-blue-500 focus:ring-blue-500"
            placeholder="ZIP Code"
          />

          <label for="email" className="mt-4 mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:border-blue-500 focus:ring-blue-500"
            placeholder="Your Email Address"
          />

          <div className="mt-6 border-t border-b py-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Subtotal</p>
              <p className="font-semibold text-gray-900">$399.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Shipping</p>
              <p className="font-semibold text-gray-900">$8.00</p>
              <h3 className="font-semibold text-gray-900">
                Total Quantity: {totalQuantity}
              </h3>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Total</p>
            <p className="text-2xl font-semibold text-gray-900">
              {totalAmount}
            </p>
          </div>
        </div>
        <button
          onClick={handleClearCart}
          className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-600"
        >
          Clear Cart
        </button>
      <Link to="/payment">
      <button className="hover:bg-gray-600 mt-4 m-2 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
          Place Order
        </button>
      </Link>
      
      </div>
    </div>
  );
};

export default CheckOut;
