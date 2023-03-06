import bannerSlice from "@/Slices/bannerSlice";
import controllerSlice from "@/Slices/controllerSlice";
import customerSupportSlice from "@/Slices/customerSupportSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  controllerSlice: controllerSlice,
  bannerSlice: bannerSlice,
  customerSupportSlice: customerSupportSlice,
});

export default rootReducer;
