import authSlice from "@/Slices/authSlice";
import bannerSlice from "@/Slices/bannerSlice";
import controllerSlice from "@/Slices/controllerSlice";
import customerSupportSlice from "@/Slices/customerSupportSlice";
import loginRegisterSlice from "@/Slices/loginRegisterSlice";
import orderRefoundsSlice from "@/Slices/orderRefoundsSlice";
import viewProductSlice from "@/Slices/viewProductSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  authSlice: authSlice,
  controllerSlice: controllerSlice,
  bannerSlice: bannerSlice,
  customerSupportSlice: customerSupportSlice,
  viewProductSlice: viewProductSlice,
  orderRefoundsSlice: orderRefoundsSlice,
  loginRegisterSlice: loginRegisterSlice,
});

export default rootReducer;
