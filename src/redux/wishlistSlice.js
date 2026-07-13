import { createSlice } from "@reduxjs/toolkit";

const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
const initialState = {
  wishlistItems: Array.isArray(storedWishlist)
    ? storedWishlist.filter(Boolean)
    : [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlistItems.push(action.payload);
    },
    removeFromwishlist: (state, action) => {
      const id = action.payload;
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== id,
      );
    },
  },
});

export const { addToWishlist, removeFromwishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
