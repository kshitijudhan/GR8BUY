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
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
    },
    removeFromwishlist: (state, action) => {
      const id = action.payload;
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== id,
      );
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
    },
  },
});

export const { addToWishlist, removeFromwishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
