import { configureStore } from "@reduxjs/toolkit";
import drugBasketSlice from "./features/drugBasketSlice";

export const store = configureStore({
  reducer: {
    drugBasket: drugBasketSlice,
  }
});
