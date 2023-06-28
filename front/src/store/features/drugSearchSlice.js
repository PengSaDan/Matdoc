import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: {
    name: "",
    colors: [],
    type: "",
    line: "",
    mark: "",
  },
};

export const drugSearchSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setName(state, action) {
      state.filter.name = action.payload;
    },
    setColors(state, action) {
      state.filter.colors = action.payload;
    },
    setType(state, action) {
      state.filter.type = action.payload;
    },
    setLine(state, action) {
      state.filter.line = action.payload;
    },
    setMark(state, action) {
      state.filter.mark = action.payload;
    }
  },
});

export const drugSearchActions = drugSearchSlice.actions;

export default drugSearchSlice.reducer;
