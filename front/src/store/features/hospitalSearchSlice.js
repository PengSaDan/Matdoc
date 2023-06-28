import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: {
    word: "",
    part: [],
    time: [],
  },
};

export const hospitalSearchSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setWord(state, action) {
      state.filter.name = action.payload;
    },
    setPart(state, action) {
      state.filter.part = action.payload;
    },
    setTime(state, action) {
      state.filter.time = action.payload;
    },
  },
});

export const hospitalSearchSliceActions = hospitalSearchSlice.actions;

export default hospitalSearchSlice.reducer;
