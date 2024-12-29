import { combineReducers } from "@reduxjs/toolkit";
import FunctionalSlice from "../slice/FunctionalSlice";
import commonFetchSlice from "../slice/CommonFetchSlice";
import productSlice from "../slice/ProductSlice";
import cartSlice from "../slice/CartSlice";
import userSlice  from "../slice/UserSlice";


export const RootReducer = combineReducers({
  FunctionalSlice: FunctionalSlice,
  commonFetchSlice: commonFetchSlice,
  productSlice: productSlice,
  cartSlice: cartSlice,
  userSlice: userSlice,
});

export default RootReducer;
