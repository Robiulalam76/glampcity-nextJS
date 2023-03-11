import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
    userInfo: null,
};

export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload
        },
    },
});

export const {
    setUserInfo,
} = authSlice.actions;
export default authSlice.reducer;
