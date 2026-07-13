import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import currencyReducer from "./currencySlice";
import wishlistReducer from "./wishlistSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    currency: currencyReducer,
    wishlist: wishlistReducer,
  },
});
