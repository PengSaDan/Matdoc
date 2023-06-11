import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage/session";
import drugBasketSlice from "./features/drugBasketSlice";
import persistReducer from "redux-persist/es/persistReducer";
import userSlice from "./features/userSlice";

const persistConfig = {
  key: "root",
  storage : storage,
};

const reducers = combineReducers({
  drugBasket: drugBasketSlice,
  user: userSlice,
});


const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});
