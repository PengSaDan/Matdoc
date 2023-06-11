import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.login = true;
    },
    logout(state, action) {
      state.login = false;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
