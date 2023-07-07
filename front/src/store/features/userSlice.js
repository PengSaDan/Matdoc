import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
  userId: false,
  location: {
    lat: 0,
    lng: 0,
    e: 0,
    w: 0,
    s: 0,
    n: 0,
  }
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
    getMyLocation(state, action) {
      state.location.lat = action.payload.lat;
      state.location.lng = action.payload.lng;
      state.location.e = action.payload.lng + 0.02825;
      state.location.w = action.payload.lng - 0.02825;
      state.location.s = action.payload.lat - 0.02275;
      state.location.n = action.payload.lat + 0.02275;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
