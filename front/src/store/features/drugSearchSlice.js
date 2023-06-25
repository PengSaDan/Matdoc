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
    setFilter(state, action) {
      const request = action.payload;
      state.filter.name = request.name;
      state.filter.colors = request.colors;
      state.filter.type = request.type;
      state.filter.line = request.line;
      state.filter.mark = request.mark;
    },
  },
});

export const drugSearchActions = drugSearchSlice.actions;

export default drugSearchSlice.reducer;
