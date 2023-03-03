import controllerSlice from "@/Slices/controllerSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  controllerSlice: controllerSlice,
});

export default rootReducer;
