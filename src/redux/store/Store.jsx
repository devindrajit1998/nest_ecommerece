import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "../rootReducer/RootReducer";

export const Store = configureStore({
  reducer: RootReducer,
});
