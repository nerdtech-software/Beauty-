import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./AddToCard";
import favoriteReducer from "./favoriteSlice";
const store =configureStore({
    reducer:{
        favorite:favoriteReducer,
        cart: cartReducer,

    },
})
export default store;