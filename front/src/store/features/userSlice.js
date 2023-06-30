import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
  userId: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.login = true;
      state.userId = 1;
    },
    logout(state, action) {
      state.login = false;
      state.userId = false;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
