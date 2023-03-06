import bannerSlice from "@/Slices/bannerSlice";
import controllerSlice from "@/Slices/controllerSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  controllerSlice: controllerSlice,
  bannerSlice: bannerSlice,
});

export default rootReducer;
