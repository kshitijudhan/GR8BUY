import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import currencyReducer from "./currencySlice";
import wishlistReducer from "./wishlistSlice";

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type.startsWith("cart/")) {
    const cartItems = store.getState().cart.cartItems;
    localStorage.setItem("cart", JSON.stringify(cartItems));
  } else if (action.type.startsWith("wishlist/")) {
    const wishlistItems = store.getState().wishlist.wishlistItems;
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }

  return result;
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    currency: currencyReducer,
    wishlist: wishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
