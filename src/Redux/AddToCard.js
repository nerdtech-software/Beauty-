import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const price = parseFloat(newItem.price.replace(/[^0-9.]/g, ""));
      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.cart.push({
          ...newItem,
          quantity: 1,
          totalPrice: price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += price;
      }
      state.totalQuantity++;
      state.totalAmount += price;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (!existingItem) return;

      state.cart = state.cart.filter((item) => item.id !== id);
      state.totalQuantity -= existingItem.quantity;
      state.totalAmount -= existingItem.totalPrice;
    },

    clearCart: (state) => {
      state.cart = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },

    // ✅ Increase Quantity
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        const price = parseFloat(existingItem.price.replace(/[^0-9.]/g, ""));
        existingItem.quantity++;
        existingItem.totalPrice += price;
        state.totalQuantity++;
        state.totalAmount += price;
      }
    },

    // ✅ Decrease Quantity
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        const price = parseFloat(existingItem.price.replace(/[^0-9.]/g, ""));
        existingItem.quantity--;
        existingItem.totalPrice -= price;
        state.totalQuantity--;
        state.totalAmount -= price;
      } else if (existingItem) {
        state.cart = state.cart.filter((item) => item.id !== id);
        state.totalQuantity--;
        state.totalAmount -= existingItem.totalPrice;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
