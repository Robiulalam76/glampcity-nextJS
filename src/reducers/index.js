import bannerSlice from "@/Slices/bannerSlice";
import controllerSlice from "@/Slices/controllerSlice";
import customerSupportSlice from "@/Slices/customerSupportSlice";
import orderRefoundsSlice from "@/Slices/orderRefoundsSlice";
import viewProductSlice from "@/Slices/viewProductSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  controllerSlice: controllerSlice,
  bannerSlice: bannerSlice,
  customerSupportSlice: customerSupportSlice,
  viewProductSlice: viewProductSlice,
  orderRefoundsSlice: orderRefoundsSlice
});

export default rootReducer;
