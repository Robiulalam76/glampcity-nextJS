import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openRecommended: false,
};

export const bannerSlice = createSlice({
    name: "bannerSlice",
    initialState,
    reducers: {
        setOpenRecommended: (state, action) => {
            state.openRecommended = action.payload;
        },
    },
});

export const {
    setOpenRecommended,
} = bannerSlice.actions;
export default bannerSlice.reducer;
