import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
  products: [], // Store products here
  isFavoriteOpen: false,
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    
    toggleFavorite: (state, action) => {
      const productId = action.payload;
    
      if (state.favorites.includes(productId)) {
        state.favorites = state.favorites.filter((id) => id !== productId);
      } else {
        state.favorites.push(productId);
      }
    }, 
    setFavoriteOpen: (state, action) => {
      state.isFavoriteOpen = action.payload;
      
    },
  },
});

export const { setProducts, toggleFavorite, setFavoriteOpen } = favoriteSlice.actions;
export default favoriteSlice.reducer;
