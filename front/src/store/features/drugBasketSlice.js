import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

export const drugBasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    pushBasket(state, action) {
      const newItem = action.payload;
      state.basket = state.basket.filter(
        (element) => element.drugId !== newItem.drugId
      );
      state.basket.push({
        drugId: newItem.drugId,
        name: newItem.name,
      });
    },
    popBasket(state, action) {
      const id = action.payload;
      state.basket = state.basket.filter((element) => element.drugId !== id);
    },
  },
});

export const basketActions = drugBasketSlice.actions;

export default drugBasketSlice.reducer;
